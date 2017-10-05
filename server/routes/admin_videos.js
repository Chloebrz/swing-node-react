// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Video = mongoose.model("Video");
const auth = require("../middlewares/auth");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/assets/uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

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
    app.post("/api/admin/video", auth.requireLogin, upload.single("file"), async (req, res) => {
        // retrieve the video info
        const file = req.file;
        const meta = req.body;

        // create a new video
        const video = new Video({
            name: meta.name,
            url: file.originalname,
            legend: meta.legend,
            mimetype: file.mimetype,
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
