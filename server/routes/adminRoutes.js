// Dependencies
const fs = require("fs");
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Picture = mongoose.model("Picture");

module.exports = app => {
    app.get("/api/admin/pictures", async (req, res) => {
        try {
            const pictures = await Picture.find();
            pictures.forEach(picture => {
                picture.img.res = new Buffer(picture.img.data).toString("base64");
            });
            res.send(pictures);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    app.post("/api/admin/picture", async (req, res) => {
        var buf = new Buffer(req.body.img.data.replace(/^data:image\/\w+;base64,/, ""), "base64");

        const picture = new Picture({
            name: req.body.name,
            img: {
                name: req.body.img.filename,
                data: buf,
                contentType: req.body.img.filetype
            },
            legend: req.body.legend
        });

        try {
            const doc = await picture.save();
            res.send(doc);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    app.delete("/api/admin/picture/:id", async (req, res) => {
        const id = req.params.id;

        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            const picture = await Picture.findOneAndRemove({
                _id: id
            });

            if (!picture) return res.status(400).send();
            res.send(picture);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};
