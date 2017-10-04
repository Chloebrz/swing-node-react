// Dependencies
const mongoose = require("mongoose");

var VideoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    url: {
        type: String,
        required: true
    },
    legend: {
        type: String,
        required: true,
        trim: true,
        minlength: 15
    },
    createdAt: {
        type: Number,
        default: new Date().getTime()
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

mongoose.model("Video", VideoSchema);
