// Dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var UserSchema = new mongoose.Schema({
    name: {
        firstname: { type: String, default: "John" },
        lastname: { type: String, default: "Doe" }
    },
    googleId: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5
    },
    bio: {
        type: String,
        trim: true
    },
    isVerified: { type: Boolean, default: false }
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
