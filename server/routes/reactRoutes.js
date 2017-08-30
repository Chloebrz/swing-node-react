// Dependencies
const path = require("path");

module.exports = app => {
    /**
     * GET /admin
     * Check if the user trying to access the /admin page is logged in. If not, redirect to home page.
     */
    app.get("/admin", (req, res) => {
        if (req.user) return res.sendFile(path.resolve(__dirname, "../..", "public", "index.html"));

        res.redirect("/");
    });

    /**
     * GET /admin/*
     * Check if the user trying to access the any admin page is logged in. If not, redirect to home page.
     */
    app.get("/admin/*", (req, res) => {
        if (req.user) return res.sendFile(path.resolve(__dirname, "../..", "public", "index.html"));

        res.redirect("/");
    });

    /**
     * GET *
     * Render the page
     */
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../..", "public", "index.html"));
    });
};
