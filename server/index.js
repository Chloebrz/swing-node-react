// Main starting point of the application

// Dependencies
const express = require("express");
const path = require("path");
const passport = require("passport");
const cookieSession = require("cookie-session");

const keys = require("./config/keys");

// DB setup
require("./db/mongoose");

// Passport setup
require("./services/passport");

// App setup
const app = express();
app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(passport.initialize());
app.use(passport.session());

// Route handlers
require("./routes/authRoutes")(app);
require("./routes/reactRoutes")(app);

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
