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
    },
    {
        _id: new ObjectID(),
        name: {
            firstname: "Jim",
            lastname: "Doe"
        },
        email: "jim@test.com",
        password: "jim123"
    }
];

const populateUsers = done => {
    User.remove({})
        .then(() => {
            const promises = users.map(user => {
                return new User(user).save();
            });

            Promise.all(promises);
        })
        .then(() => done());
};

module.exports = {
    users,
    populateUsers
};
