// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Picture = mongoose.model("Picture");
const User = mongoose.model("User");

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const pictures = [
    {
        _id: new ObjectID(),
        name: "pictureOne",
        img: {
            name: "imgOne",
            data: "bufOne",
            contentType: "typeOne"
        },
        legend: "legendLegendOne",
        createdAt: new Date().getTime(),
        creatorId: userOneId
    },
    {
        _id: new ObjectID(),
        name: "pictureTwo",
        img: {
            name: "imgTwo",
            data: "bufTwo",
            contentType: "typeTwo"
        },
        legend: "legendLegendTwo",
        createdAt: new Date().getTime(),
        creatorId: userTwoId
    },
    {
        _id: new ObjectID(),
        name: "pictureThree",
        img: {
            name: "imgThree",
            data: "bufThree",
            contentType: "typeThree"
        },
        legend: "legendLegendThree",
        createdAt: new Date().getTime(),
        creatorId: userOneId
    }
];

const users = [
    {
        _id: userOneId,
        name: { firstname: "Harry", lastname: "Doe" },
        email: "harry@test.com"
    }
];

const populatePictures = done => {
    Picture.remove({})
        .then(() => {
            Picture.insertMany(pictures);
        })
        .then(() => {
            User.remove({});
        })
        .then(() => {
            const promises = users.map(user => {
                return new User(user).save();
            });

            Promise.all(promises);
        })
        .then(() => done());
};

module.exports = {
    userOneId,
    pictures,
    users,
    populatePictures
};
