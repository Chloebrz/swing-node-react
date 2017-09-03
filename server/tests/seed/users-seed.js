// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const User = mongoose.model("User");

const userOneGoogleId = new ObjectID();
const userTwoGoogleId = new ObjectID();

const users = [
    {
        _id: new ObjectID(),
        googleId: userOneGoogleId
    },
    {
        _id: new ObjectID(),
        googleId: userTwoGoogleId
    }
];

const populateUsers = done => {
    User.remove({})
        .then(() => {
            User.insertMany(users);
        })
        .then(() => done());
};

module.exports = {
    userOneGoogleId,
    users,
    populateUsers
};
