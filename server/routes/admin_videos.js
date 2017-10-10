// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const _ = require("lodash");
const fs = require("mz/fs");

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
     * GET /api/admin/video/:id
     * Gets a video item from the videos database given its id
     * User can only get the videos he created
     */
    app.get("/api/admin/video/:id", auth.requireLogin, async (req, res) => {
        // get the id of the video to retrieve
        const id = req.params.id;

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            // retrieve the video item and send it
            const video = await Video.findOne({ _id: id, creatorId: req.user._id });

            if (!video)
                return res.status(404).send({
                    error: "Vous ne pouvez pas accéder à cette vidéo car vous ne l'avez pas ajoutée"
                });

            res.send(video);
        } catch (err) {
            res.status(404).send(err);
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

    /**
     * DELETE /api/admin/video/:id
     * Deletes a video item from the videos database given its id
     * User can only delete the videos he created
     */
    app.delete("/api/admin/video/:id", auth.requireLogin, async (req, res) => {
        // get the id of the video to delete
        const id = req.params.id;

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            // get the video
            const video = await Video.findOne({
                _id: id,
                creatorId: req.user._id
            });
            if (!video) return res.status(404).send();

            // remove the file from /assets/uploads
            await fs.unlink(`public/assets/uploads/${video.url}`);

            // remove the video from the database
            await Video.remove({
                _id: id,
                creatorId: req.user._id
            });

            res.send(video);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * PATCH /api/admin/video/:id
     * Updates a video item from the videos database given its id and the properties to update
     * The video file cannot be updated
     * User can only update the videos he created
     */
    app.patch("/api/admin/video/:id", auth.requireLogin, async (req, res) => {
        // get the id of the video to update and the properties to update
        const id = req.params.id;
        const body = _.pick(req.body, ["name", "legend"]);

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            // update the video item
            const video = await Video.findOneAndUpdate(
                { _id: id, creatorId: req.user._id },
                { $set: body },
                { new: true }
            );

            if (!video) return res.status(404).send();
            res.send(video);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};
