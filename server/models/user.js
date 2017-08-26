// Dependencies
const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    }
});

mongoose.model("User", UserSchema);
