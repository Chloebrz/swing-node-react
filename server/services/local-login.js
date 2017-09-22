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
        var user;
        User.findOne({ email })
            .then(existingUser => {
                user = existingUser;
                if (!user) return done("Adresse mail incorrecte");
                return user.comparePassword(password);
            })
            .then(isMatch => {
                if (!isMatch) return done("Mot de passe incorrect");
                return done(null, user);
            })
            .catch(err => {
                done(err);
            });
    }
);
