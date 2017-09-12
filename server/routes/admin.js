// Dependencies
const fs = require("fs");
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const _ = require("lodash");

const Picture = mongoose.model("Picture");
const User = mongoose.model("User");
const auth = require("../middlewares/auth");

module.exports = app => {
    /**
     * GET /api/admin/pictures
     * Gets all the picture items from the pictures database
     */
    app.get("/api/admin/pictures", async (req, res) => {
        try {
            // retrieve the picture items
            const pictures = await Picture.find();

            // add the base64 data to each item
            pictures.forEach(picture => {
                picture.img.res = new Buffer(picture.img.data).toString("base64");
            });

            // send the result
            res.send(pictures);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * GET /api/admin/picture/:id
     * Gets a picture item from the pictures database given its id
     * User can only get the pictures he created
     */
    app.get("/api/admin/picture/:id", auth.requireLogin, async (req, res) => {
        // get the id of the picture to retrieve
        const id = req.params.id;

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            // retrieve the picture item
            const picture = await Picture.findOne({ _id: id, creatorId: req.user._id });

            if (!picture)
                res.status(404).send({
                    error: "Vous ne pouvez pas accéder à cette image car vous ne l'avez pas ajoutée"
                });

            // add the base64 data
            picture.img.res = new Buffer(picture.img.data).toString("base64");

            // send the result
            res.send(picture);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * POST /api/admin/picture
     * Adds a new picture item to the pictures database
     */
    app.post("/api/admin/picture", auth.requireLogin, async (req, res) => {
        // create buffer for the image data
        var buf = new Buffer(req.body.img.data.replace(/^data:image\/\w+;base64,/, ""), "base64");

        // create a new picture
        const picture = new Picture({
            name: req.body.name,
            img: {
                name: req.body.img.filename,
                data: buf,
                contentType: req.body.img.filetype
            },
            legend: req.body.legend,
            createdAt: new Date().getTime(),
            creatorId: req.user._id
        });

        try {
            // save the new picture
            await picture.save();
            res.send();
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * DELETE /api/admin/picture/:id
     * Deletes a picture item from the pictures database given its id
     * User can only delete the pictures he created
     */
    app.delete("/api/admin/picture/:id", auth.requireLogin, async (req, res) => {
        // get the id of the picture to delete
        const id = req.params.id;

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            // remove the picture from the database
            const picture = await Picture.findOneAndRemove({
                _id: id,
                creatorId: req.user._id
            });

            if (!picture) return res.status(404).send();
            res.send(picture);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * PATCH /api/admin/picture/:id
     * Updates a picture item from the pictures database given its id and the properties to update
     * User can only update the pictures he created
     */
    app.patch("/api/admin/picture/:id", auth.requireLogin, async (req, res) => {
        // get the id of the picture to update and the properties to update
        const id = req.params.id;
        var body = _.pick(req.body, ["name", "legend", "img"]);

        if (body.img) {
            var buf = new Buffer(
                req.body.img.data.replace(/^data:image\/\w+;base64,/, ""),
                "base64"
            );
            body.img.data = buf;
        }

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            // update the picture
            const picture = await Picture.findOneAndUpdate(
                { _id: id, creatorId: req.user._id },
                { $set: body },
                { new: true }
            );

            if (!picture) return res.status(404).send();
            res.send(picture);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * PATCH /api/admin/profile/:id
     * Updates the user object in the database given its id and the properties to update
     * User can only update his own profile
     */
    app.patch("/api/admin/profile/:id", auth.requireLogin, async (req, res) => {
        // get the id of the profile to update and the properties to update
        const id = req.params.id;
        var body = _.pick(req.body, ["name", "bio"]);

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        // check if the id of the profile to update if the user id
        if (!req.user._id.equals(id)) return res.status(401).send();

        try {
            // update the user object
            const user = await User.findOneAndUpdate({ _id: id }, { $set: body }, { new: true });

            if (!user) return res.status(404).send();
            res.send(user);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};