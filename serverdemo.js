 const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const app = express();
const PORT = 3000;


// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());
app.use(express.static(__dirname));


// ===============================
// SESSION
// ===============================

app.use(
    session({
        secret: "ssc-mock-test-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);


// ===============================
// MONGODB CONNECTION
// ===============================

mongoose.connect("mongodb://127.0.0.1:27017/sscMockTest")

    .then(() => {
        console.log("MongoDB connected successfully!");
    })

    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });


// ===============================
// USER SCHEMA
// ===============================

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);


// ===============================
// USER MODEL
// ===============================

const User = mongoose.model("User", userSchema);


// ===============================
// HOME PAGE
// ===============================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "new.html")
    );

});


// ===============================
// REGISTER API
// ===============================

app.post("/api/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;


        if (!name || !email || !password) {

            return res.json({
                success: false,
                message: "All fields are required."
            });

        }


        const existingUser =
            await User.findOne({
                email: email.toLowerCase()
            });


        if (existingUser) {

            return res.json({
                success: false,
                message: "Email already registered."
            });

        }


        const hashedPassword =
            await bcrypt.hash(password, 10);


        const newUser =
            new User({
                name: name,
                email: email.toLowerCase(),
                password: hashedPassword
            });


        await newUser.save();


        console.log(
            "New user registered:",
            email
        );


        res.json({

            success: true,

            message:
                "Registration successful!"

        });


    } catch (error) {

        console.error(
            "Registration error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Server error during registration."

        });

    }

});


// ===============================
// LOGIN API
// ===============================

app.post("/api/login", async (req, res) => {

    try {

        const { email, password } = req.body;


        if (!email || !password) {

            return res.json({

                success: false,

                message:
                    "Email and password are required."

            });

        }


        const user =
            await User.findOne({

                email:
                    email.toLowerCase()

            });


        if (!user) {

            return res.json({

                success: false,

                message:
                    "Invalid email or password."

            });

        }


        const passwordMatch =
            await bcrypt.compare(
                password,
                user.password
            );


        if (!passwordMatch) {

            return res.json({

                success: false,

                message:
                    "Invalid email or password."

            });

        }


        // ===============================
        // CREATE LOGIN SESSION
        // ===============================

        req.session.userId = user._id.toString();

        req.session.userName = user.name;

        req.session.userEmail = user.email;


        console.log(
            "User logged in:",
            email
        );


        res.json({

            success: true,

            message:
                "Login successful!",

            user: {

                name: user.name,

                email: user.email

            }

        });


    } catch (error) {

        console.error(
            "Login error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Server error during login."

        });

    }

});


// ===============================
// CHECK LOGIN STATUS
// ===============================

app.get("/api/me", (req, res) => {

    if (!req.session.userId) {

        return res.json({

            loggedIn: false

        });

    }


    res.json({

        loggedIn: true,

        user: {

            name:
                req.session.userName,

            email:
                req.session.userEmail

        }

    });

});


// ===============================
// LOGOUT API
// ===============================

app.post("/api/logout", (req, res) => {

    req.session.destroy((error) => {

        if (error) {

            return res.status(500).json({

                success: false,

                message:
                    "Logout failed."

            });

        }


        res.json({

            success: true,

            message:
                "Logout successful!"

        });

    });

});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});