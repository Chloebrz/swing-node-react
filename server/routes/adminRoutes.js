// Dependencies
const fs = require("fs");
const mongoose = require("mongoose");

var imgPath = __dirname + "/a.png";
const Picture = mongoose.model("Picture");

module.exports = app => {
    app.get("/admin/pictures", (req, res) => {
        Picture.find().then(pictures => {
            res.contentType(pictures[1].img.contentType).send(pictures[1].img.data);
        });
    });

    app.post("/admin/picture", (req, res) => {
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
            console.log("Picture and legend saved", pct);
        });
    });
};
