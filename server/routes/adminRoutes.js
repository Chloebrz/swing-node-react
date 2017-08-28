// Dependencies
const fs = require("fs");
const mongoose = require("mongoose");

var imgPath = __dirname + "/a.png";
const Picture = mongoose.model("Picture");

module.exports = app => {
    app.get("/admin/pictures", (req, res) => {
        Picture.find().then(pictures => {
            res.contentType(pictures[0].img.contentType).send(pictures[0].img.data);
        });
    });

    app.post("/admin/picture", (req, res) => {
        var picture = new Picture({
            img: { data: fs.readFileSync(imgPath), contentType: "image/png" },
            legend: "This is a legend"
        });

        picture.save().then(pct => {
            console.log("Picture and legend saved", pct);
        });
    });
};
