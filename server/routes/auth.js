// Dependencies
const passport = require("passport");
const validator = require("validator");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const Token = mongoose.model("Token");
const User = mongoose.model("User");
const auth = require("../middlewares/auth");
const keys = require("../config/keys");

module.exports = app => {
    /**
     * GET /auth/google
     * Logs a user in with Google OAuth
     */
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    /**
     * GET /auth/google/callback
     * Callback URL called by Google OAuth
     */
    app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
        res.redirect("/admin");
    });

    /**
     * POST /auth/signup
     * Logs a user in with email and password
     */
    app.post("/auth/signup", (req, res, next) => {
        return passport.authenticate("local-signup", (err, user) => {
            if (err)
                return res.json({
                    success: false,
                    errors: err
                });

            if (!user) return res.send({ success: false, message: "authentication failed" });

            req.logIn(user, loginErr => {
                if (loginErr) return next(loginErr);
                return res.status(200).json({ success: true });
            });
        })(req, res, next);
    });

    /**
     * POST /auth/login
     * Logs a user in with email and password
     */
    app.post("/auth/login", (req, res, next) => {
        return passport.authenticate("local-login", (err, user) => {
            if (err)
                return res.json({
                    success: false,
                    errors: err
                });

            if (!user) return res.send({ success: false, message: "authentication failed" });

            req.logIn(user, loginErr => {
                if (loginErr) return next(loginErr);
                return res.status(200).json({ success: true });
            });
        })(req, res, next);
    });

    /**
     * GET /api/logout
     * Logs a user out
     */
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    /**
     * GET /api/current_user
     * Gets the current user info
     */
    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });

    /**
     * GET /api/token/send
     * Send an email to the logged in user to confirm his email address
     */
    app.get("/api/token/send", auth.requireLogin, async (req, res) => {
        // create the verification token for the user
        const token = new Token({
            userId: req.user._id,
            token: crypto.randomBytes(16).toString("hex")
        });

        try {
            // save the token
            await token.save();

            // send the email
            const transporter = nodemailer.createTransport({
                service: keys.emailService,
                auth: { user: keys.emailUser, pass: keys.emailPassword }
            });

            const mailOptions = {
                from: "sunshai_sun971@hotmail.com",
                to: req.user.email,
                subject: "Swing App - Vérifiez votre adresse mail",
                text:
                    "Bonjour,\n\n" +
                    "Vérifiez votre adresse mail en cliquant sur le lien suivant : \nhttp://" +
                    req.headers.host +
                    "/api/token/confirmation/" +
                    token.token +
                    ".\n"
            };

            await transporter.sendMail(mailOptions);
            res.status(200).send("A verification email has been sent to " + req.user.email + ".");
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * GET /api/token/confirmation/:token
     * Verify the user email address given the token
     */
    app.get("/api/token/confirmation/:token", async (req, res) => {
        // find the token
        const token = await Token.findOne({ token: req.params.token });

        // if no token, send 400
        if (!token) return res.status(400).send();

        // find the user with this token
        const user = await User.findById(token.userId);

        if (!user) return res.status(400).send();

        try {
            // verify the user
            user.isVerified = true;
            await user.save();

            res.redirect("/admin/profile");
        } catch (err) {
            res.status(400).send();
        }
    });
};
