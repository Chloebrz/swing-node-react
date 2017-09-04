// Dependencies
const mongoose = require("mongoose");
const validator = require("validator");

var UserSchema = new mongoose.Schema({
    name: {
        firstname: String,
        lastname: String
    },
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: "{VALUE} is not a valid email"
        }
    }
});

mongoose.model("User", UserSchema);
