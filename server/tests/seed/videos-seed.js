// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Video = mongoose.model("Video");

const videos = [
    {
        _id: new ObjectID(),
        name: "videoOne",
        url: "url_video_one",
        legend: "legend video one",
        createdAt: new Date().getTime(),
        creatorId: new ObjectID()
    },
    {
        _id: new ObjectID(),
        name: "videoTwo",
        url: "url_video_two",
        legend: "legend video two",
        createdAt: new Date().getTime(),
        creatorId: new ObjectID()
    }
];

const populateVideos = done => {
    Video.remove({})
        .then(() => {
            Video.insertMany(videos);
        })
        .then(() => {
            done();
        });
};

module.exports = {
    populateVideos
};
