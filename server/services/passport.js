// Dependencies
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const googleStrategy = require("./google");
const localSignupStrategy = require("./local-signup");
const localLoginStrategy = require("./local-login");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err);
        });
});

passport.use(googleStrategy);
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);
