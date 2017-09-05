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
        User.findOne({ email })
            .then(user => {
                if (user) return done(null, false, { message: "That email is already taken." });

                new User({
                    email,
                    password
                })
                    .save()
                    .then(user => {
                        return done(null, user);
                    });
            })
            .catch(err => {
                done(err);
            });
    }
);
