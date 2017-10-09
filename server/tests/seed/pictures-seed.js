// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Picture = mongoose.model("Picture");
const User = mongoose.model("User");

const { userOneId, userTwoId } = require("./users-seed");

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
    },
    {
        _id: new ObjectID(),
        name: "pictureFour",
        img: {
            name: "imgFour",
            data: "bufFour",
            contentType: "typeFour"
        },
        legend: "legendLegendFour",
        createdAt: new Date().getTime(),
        creatorId: userOneId
    },
    {
        _id: new ObjectID(),
        name: "pictureFive",
        img: {
            name: "imgFive",
            data: "bufFive",
            contentType: "typeFive"
        },
        legend: "legendLegendFive",
        createdAt: new Date().getTime(),
        creatorId: userOneId
    },
    {
        _id: new ObjectID(),
        name: "pictureSix",
        img: {
            name: "imgSix",
            data: "bufSix",
            contentType: "typeSix"
        },
        legend: "legendLegendSix",
        createdAt: new Date().getTime(),
        creatorId: userOneId
    },
    {
        _id: new ObjectID(),
        name: "pictureSeven",
        img: {
            name: "imgSeven",
            data: "bufSeven",
            contentType: "typeSeven"
        },
        legend: "legendLegendSeven",
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
    const pp = Picture.remove({});
    const pu = User.remove({});

    Promise.all([pp, pu])
        .then(() => {
            Picture.insertMany(pictures);
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
