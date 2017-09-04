// Dependencies
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
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
    )
);

passport.use(
    "local-signup",
    new LocalStrategy(
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
    )
);

passport.use(
    "local-login",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        (email, password, done) => {
            User.findByCredentials(email, password).then(user => {
                done(null, user);
            });
        }
    )
);
