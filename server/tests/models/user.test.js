// Dependencies
const expect = require("expect");
const mongoose = require("mongoose");

require("../../db/mongoose");
const User = mongoose.model("User");

const { userOneGoogleId, users, populateUsers } = require("../seed/users-seed");
before(populateUsers);

describe("User model", function() {
    describe("name", () => {
        it("should return error firstname is not a String", done => {
            const user = new User({
                name: {
                    firstname: { id: 123 },
                    lastname: "lastname"
                },
                googleId: "123",
                email: "test@test.com"
            });

            user.save().catch(err => {
                expect(err.errors["name.firstname"]).toExist();
                expect(err.errors["name.firstname"].message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "name.firstname"'
                );
                done();
            });
        });

        it("should return error if lastname is not a string", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: { id: 123 }
                },
                googleId: "123",
                email: "test@test.com"
            });

            user.save().catch(err => {
                expect(err.errors["name.lastname"]).toExist();
                expect(err.errors["name.lastname"].message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "name.lastname"'
                );
                done();
            });
        });
    });

    describe("googleId", () => {
        it("should return error if googleId is not a string", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: { id: 123 },
                email: "test@test.com"
            });

            user.save().catch(err => {
                expect(err.errors.googleId).toExist();
                expect(err.errors.googleId.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "googleId"'
                );
                done();
            });
        });

        it("should return error if googleId already in use", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: userOneGoogleId,
                email: "test@test.com"
            });

            user.save().catch(err => {
                expect(err).toExist();
                expect(err.message).toBe(
                    `E11000 duplicate key error collection: swingtest.users index: googleId_1 dup key: { : "${userOneGoogleId}" }`
                );
                done();
            });
        });
    });

    describe("email", () => {
        it("should return error if email is missing", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: "123"
            });

            user.save().catch(err => {
                expect(err.errors.email).toExist();
                expect(err.errors.email.message).toBe("Path `email` is required.");
                done();
            });
        });

        it("should return error if email is not a string", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: "123",
                email: { id: 123 }
            });

            user.save().catch(err => {
                expect(err.errors.email).toExist();
                expect(err.errors.email.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "email"'
                );
                done();
            });
        });

        it("should return error if email already in use", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: "123",
                email: users[0].email
            });

            user.save().catch(err => {
                expect(err).toExist();
                expect(err.message).toBe(
                    `E11000 duplicate key error collection: swingtest.users index: email_1 dup key: { : "${users[0]
                        .email}" }`
                );
                done();
            });
        });

        it("should trim the email", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: "123",
                email: "   test@test.com   "
            });

            user.save().then(u => {
                expect(u.email).toBe("test@test.com");
                done();
            });
        });
    });
});
