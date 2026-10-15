const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "new.html"));
});


// ===============================
// REGISTER API
// ===============================

app.post("/api/register", (req, res) => {

    const { name, email, password } = req.body;

    console.log("New Registration:");
    console.log("Name:", name);
    console.log("Email:", email);

    res.json({
        success: true,
        message: "Registration request received!"
    });

});


// ===============================
// LOGIN API
// ===============================

app.post("/api/login", (req, res) => {

    const { email, password } = req.body;

    console.log("Login Attempt:");
    console.log("Email:", email);

    if (email === "test@gmail.com" && password === "123456") {

        res.json({
            success: true,
            message: "Login successful!"
        });

    } else {

        res.json({
            success: false,
            message: "Invalid email or password."
        });

    }

});


// ===============================
// START SERVER
// ===============================

app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});
 