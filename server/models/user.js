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
        type: String
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
        type: String,
        minlength: 5
    },
    bio: {
        type: String,
        trim: true
    }
});

UserSchema.methods.comparePassword = function comparePassword(password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.pre("save", function(next) {
    var user = this;

    if (!user.isModified("password")) return next();

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        });
    });
});

mongoose.model("User", UserSchema);
