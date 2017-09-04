// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const User = mongoose.model("User");

const userOneGoogleId = new ObjectID();
const userTwoGoogleId = new ObjectID();

const users = [
    {
        _id: new ObjectID(),
        name: {
            firstname: "John",
            lastname: "Doe"
        },
        googleId: userOneGoogleId,
        email: "john@test.com"
    },
    {
        _id: new ObjectID(),
        name: {
            firstname: "Jane",
            lastname: "Doe"
        },
        googleId: userTwoGoogleId,
        email: "jane@test.com"
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
