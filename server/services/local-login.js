// Dependencies
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password"
    },
    (email, password, done) => {
        User.findByCredentials(email, password).then(user => {
            done(null, user);
        });
    }
);
