// Dependencies
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("User");

const keys = require("../config/keys");

module.exports = new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/api/auth/google/callback",
        proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(existingUser => {
            if (existingUser) return done(null, existingUser);
            new User({
                googleId: profile.id,
                name: {
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName
                },
                email: profile.emails[0].value
            })
                .save()
                .then(user => {
                    done(null, user);
                });
        });
    }
);
