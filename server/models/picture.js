// Dependencies
const mongoose = require("mongoose");

var PictureSchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String
    },
    legend: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    }
});

mongoose.model("Picture", PictureSchema);
