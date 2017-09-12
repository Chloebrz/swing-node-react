// Dependencies
const passport = require("passport");
const validator = require("validator");

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
};
