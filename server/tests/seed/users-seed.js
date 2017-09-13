// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const User = mongoose.model("User");
const Token = mongoose.model("Token");

const userOneGoogleId = new ObjectID();
const userTwoGoogleId = new ObjectID();
const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
    {
        _id: userOneId,
        name: {
            firstname: "John",
            lastname: "Doe"
        },
        googleId: userOneGoogleId,
        email: "john@test.com"
    },
    {
        _id: userTwoId,
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

const tokens = [
    {
        userId: userOneId,
        token: "token123"
    }
];

const populateUsers = done => {
    const pt = Token.remove({});
    const pu = User.remove({});

    Promise.all([pt, pu])
        .then(() => {
            const pu = users.map(user => {
                return new User(user).save();
            });

            Promise.all(pu);
        })
        .then(() => {
            new Token(tokens[0]).save();
        })
        .then(() => done());
};

module.exports = {
    users,
    userOneId,
    userTwoId,
    tokens,
    populateUsers
};
