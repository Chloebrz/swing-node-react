// Dependencies
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

var UserSchema = new mongoose.Schema({
    name: {
        firstname: String,
        lastname: String
    },
    googleId: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: "{VALUE} is not a valid email"
        },
        unique: true
    },
    password: {
        type: String
    }
});

UserSchema.statics.findByCredentials = async function(email, password) {
    var User = this;

    const user = await User.findOne({ email });

    if (!user) return Promise.reject();

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
            if (res) resolve(user);
            else reject();
        });
    });
};

UserSchema.pre("save", function(next) {
    var user = this;

    if (user.isModified("password")) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

mongoose.model("User", UserSchema);
