// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Video = mongoose.model("Video");
const auth = require("../middlewares/auth");

module.exports = app => {
    /**
     * GET /api/admin/videos
     * Gets all the video items from the videos database
     */
    app.get("/api/admin/videos", async (req, res) => {
        try {
            const videos = await Video.find({});
            res.send(videos);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * POST /api/admin/video
     * Adds a new video item to the videos database
     */
    app.post("/api/admin/video", auth.requireLogin, async (req, res) => {
        // create a new video
        const video = new Video({
            name: req.body.name,
            url: req.body.url,
            legend: req.body.legend,
            createdAt: new Date().getTime(),
            creatorId: req.user._id
        });

        try {
            // save the new video
            await video.save();
            res.send(video);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};
