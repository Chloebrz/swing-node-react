// Dependencies
const mongoose = require("mongoose");

var PictureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    img: {
        name: String,
        data: Buffer,
        contentType: String,
        res: String
    },
    legend: {
        type: String,
        required: true,
        trim: true,
        minlength: 15
    },
    createdAt: {
        type: Number,
        default: null
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

mongoose.model("Picture", PictureSchema);
