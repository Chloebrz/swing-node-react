// Dependencies
const fs = require("fs");
const mongoose = require("mongoose");

const Picture = mongoose.model("Picture");

module.exports = app => {
    app.get("/api/admin/pictures", async (req, res) => {
        const pictures = await Picture.find();
        pictures.forEach(picture => {
            picture.img.res = new Buffer(picture.img.data).toString("base64");
        });
        res.send(pictures);
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
        }).save();
        res.send(picture);
    });
};
