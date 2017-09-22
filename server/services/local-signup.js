// Dependencies
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
        session: true
    },
    (email, password, done) => {
        User.findOne({ email })
            .then(user => {
                if (user) return done("Adresse mail déjà utilisée");

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
