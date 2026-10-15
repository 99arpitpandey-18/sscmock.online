require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const OpenAI = require("openai");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// =====================================
// ENVIRONMENT VALIDATION
// =====================================

if (!process.env.MONGODB_URI) {
    console.error("ERROR: MONGODB_URI is missing in .env");
    process.exit(1);
}

if (!process.env.SESSION_SECRET) {
    console.error("ERROR: SESSION_SECRET is missing in .env");
    process.exit(1);
}

if (!process.env.OPENAI_API_KEY) {
    console.error("ERROR: OPENAI_API_KEY is missing in .env");
    process.exit(1);
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// =====================================
// MIDDLEWARE
// =====================================

app.disable("x-powered-by");

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}

// =====================================
// SESSION CONFIGURATION
// =====================================

app.use(
    session({
        name: "ssc_mock.sid",
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);

// =====================================
// MONGODB USER SCHEMA
// =====================================

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 80
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            maxlength: 254
        },

        password: {
            type: String,
            required: true,
            select: false
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

// =====================================
// HOME PAGE
// =====================================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "new.html"));
});

// =====================================
// REGISTER API
// =====================================

app.post("/api/register", async (req, res) => {
    try {
        const { name, email, password } = req.body || {};

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            return res.status(400).json({
                success: false,
                message: "Please enter valid registration details."
            });
        }

        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();

        if (!cleanName || !cleanEmail || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (cleanName.length < 2 || cleanName.length > 80) {
            return res.status(400).json({
                success: false,
                message: "Name must be between 2 and 80 characters."
            });
        }

        if (
            cleanEmail.length > 254 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
        ) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address."
            });
        }

        if (password.length < 8 || password.length > 72) {
            return res.status(400).json({
                success: false,
                message: "Password must be 8–72 characters long."
            });
        }

        const existingUser = await User.findOne({
            email: cleanEmail
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered. Please log in."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await User.create({
            name: cleanName,
            email: cleanEmail,
            password: hashedPassword
        });

        console.log("New user registered:", cleanEmail);

        return res.status(201).json({
            success: true,
            message: "Registration successful! Please log in."
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email already registered. Please log in."
            });
        }

        console.error("Registration error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Registration failed. Please try again."
        });
    }
});

// =====================================
// LOGIN API
// =====================================

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body || {};

        if (
            typeof email !== "string" ||
            typeof password !== "string" ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            });
        }

        const cleanEmail = email.trim().toLowerCase();

        const user = await User.findOne({
            email: cleanEmail
        }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        req.session.regenerate((error) => {
            if (error) {
                console.error("Session error:", error.message);

                return res.status(500).json({
                    success: false,
                    message: "Unable to create login session."
                });
            }

            req.session.userId = user._id.toString();
            req.session.userName = user.name;
            req.session.userEmail = user.email;

            req.session.save((saveError) => {
                if (saveError) {
                    console.error(
                        "Session save error:",
                        saveError.message
                    );

                    return res.status(500).json({
                        success: false,
                        message: "Unable to save login session."
                    });
                }

                console.log("User logged in:", user.email);

                return res.json({
                    success: true,
                    message: "Login successful!",
                    user: {
                        name: user.name,
                        email: user.email
                    }
                });
            });
        });
    } catch (error) {
        console.error("Login error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Login failed. Please try again."
        });
    }
});

// =====================================
// CHECK LOGIN STATUS
// =====================================

app.get("/api/me", (req, res) => {
    if (!req.session.userId) {
        return res.json({
            loggedIn: false
        });
    }

    return res.json({
        loggedIn: true,
        user: {
            name: req.session.userName,
            email: req.session.userEmail
        }
    });
});

// =====================================
// LOGOUT API
// =====================================

app.post("/api/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.error("Logout error:", error.message);

            return res.status(500).json({
                success: false,
                message: "Logout failed. Please try again."
            });
        }

        res.clearCookie("ssc_mock.sid", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/"
        });

        return res.json({
            success: true,
            message: "Logout successful!"
        });
    });
});

// =====================================
// AI DOUBT ASSISTANT API
// =====================================

app.post("/api/ai", async (req, res) => {
    try {
        const { question } = req.body || {};

        if (
            typeof question !== "string" ||
            !question.trim()
        ) {
            return res.status(400).json({
                success: false,
                error: "Please enter your question."
            });
        }

        const cleanQuestion = question.trim();

        if (cleanQuestion.length > 5000) {
            return res.status(400).json({
                success: false,
                error: "Question must be 5000 characters or fewer."
            });
        }

        console.log("AI question received");

        const response = await openai.responses.create({
            model: "gpt-5-mini",
            instructions: `
You are SSC MOCK's exam doubt assistant.
Help students prepare for SSC CGL, CHSL, CPO, GD,
MTS, Stenographer and Selection Post exams.

Explain in simple Hindi or Hinglish.
For maths, show the formula and step-by-step solution.
For GK and GS, give the correct answer with a short explanation.
For English, explain the grammar rule with an example.
Be accurate, clear and student-friendly.
If a question is ambiguous, ask for clarification.
Do not invent facts when you are uncertain.
`,
            input: cleanQuestion
        });

        const answer = response.output_text;

        if (!answer) {
            return res.status(502).json({
                success: false,
                error: "AI could not generate an answer. Please try again."
            });
        }

        return res.json({
            success: true,
            answer
        });
    } catch (error) {
        console.error("AI API error:", {
            status: error.status,
            code: error.code,
            message: error.message
        });

        if (error.status === 429) {
            return res.status(429).json({
                success: false,
                error: "AI request limit reached. Please try again later."
            });
        }

        return res.status(502).json({
            success: false,
            error: "AI assistant is temporarily unavailable."
        });
    }
});

// =====================================
// 404 HANDLER FOR UNKNOWN API ROUTES
// =====================================

app.use("/api", (req, res) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found."
    });
});

// =====================================
// START SERVER AFTER MONGODB CONNECTS
// =====================================

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(
                `Server running at http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(
            "MongoDB connection error:",
            error.message
        );

        process.exit(1);
    }
}

startServer().catch((error) => {
    console.error("Server startup failed:", error.message);
    process.exit(1);
});