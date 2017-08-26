// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cookieSession = require("cookie-session");

const keys = require("./config/keys");

// DB setup
var UserSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    }
});
mongoose.model("User", UserSchema);
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

// App setup
const app = express();
app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(passport.initialize());
app.use(passport.session());

// Passport setup
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
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) return done(null, existingUser);
                new User({ googleId: profile.id }).save().then(user => {
                    done(null, user);
                });
            });
        }
    )
);

// Route handlers
// Google authentication
app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.get("/api/current_user", (req, res) => {
    console.log("here", req.user);
    res.send(req.user);
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

// Server setup
const port = 3000;
app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
});
