// Dependencies
const express = require("express");
const path = require("path");

// App setup
const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));

// Route handlers
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

// Server setup
const port = 3000;
app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
});
