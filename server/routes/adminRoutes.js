// Dependencies
const fs = require("fs");
const mongoose = require("mongoose");

var imgPath = __dirname + "/a.png";
const Picture = mongoose.model("Picture");

module.exports = app => {
    app.get("/api/admin/pictures", (req, res) => {
        Picture.find().then(pictures => {
            pictures.forEach(picture => {
                picture.img.res = new Buffer(picture.img.data).toString("base64");
            });
            res.send(pictures);
        });
    });

    app.post("/api/admin/picture", (req, res) => {
        var buf = new Buffer(req.body.img.data.replace(/^data:image\/\w+;base64,/, ""), "base64");

        var picture = new Picture({
            img: {
                name: req.body.img.filename,
                data: buf,
                contentType: req.body.img.filetype
            },
            legend: req.body.legend
        });

        picture.save().then(pct => {
            res.send(pct);
        });
    });
};
