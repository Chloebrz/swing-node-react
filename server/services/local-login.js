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
                if (!user)
                    return done(null, false, {
                        message: "Adresse mail incorrecte."
                    });

                return !user.validPassword(password, isMatch => {
                    if (!isMatch) return done(null, false, { message: "Mot de passe incorrect." });

                    return done(null, user);
                });
            })
            .catch(err => {
                done(err);
            });
    }
);
