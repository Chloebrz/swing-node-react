// Dependencies
const passport = require("passport");

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
     * GET /api/logout
     * Logs a user out with Google OAuth
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
