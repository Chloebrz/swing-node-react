// Dependencies
const expect = require("expect");
const mongoose = require("mongoose");

require("../../db/mongoose");
const User = mongoose.model("User");
const { users, populateUsers } = require("../seed/users-seed");

describe("USER MODEL", function() {
    beforeEach(populateUsers);

    it("should create a new user object", done => {
        const user = new User({
            name: {
                firstname: "firstname",
                lastname: "lastname"
            },
            email: "test@test.com",
            password: "pwd123",
            bio: "this is a small test bio"
        });

        user.save().then(u => {
            expect(u.name.firstname).toBe(user.name.firstname);
            expect(u.name.lastname).toBe(user.name.lastname);
            expect(u.email).toBe(user.email);
            expect(u.password).toExist();
            expect(u.bio).toBe(user.bio);
            expect(u.isVerified).toBe(false);
            done();
        });
    });

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

        it("should default firstname and lastname if not given", done => {
            const user = new User({
                googleId: "123",
                email: "test@test.com"
            });

            user.save().then(u => {
                expect(u.name.firstname).toBe("John");
                expect(u.name.lastname).toBe("Doe");
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

        it("should lowercase the email", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: "123",
                email: "TEST@test.com"
            });

            user.save().then(u => {
                expect(u.email).toBe("test@test.com");
                done();
            });
        });
    });

    describe("password", () => {
        it("should return error if password is not a string", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                email: "test@test.com",
                password: { id: 123 }
            });

            user.save().catch(err => {
                expect(err.errors.password).toExist();
                expect(err.errors.password.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "password"'
                );
                done();
            });
        });

        it("should return error if password length < 5", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                email: "test@test.com",
                password: "123"
            });

            user.save().catch(err => {
                expect(err.errors.password).toExist();
                expect(err.errors.password.message).toBe(
                    "Path `password` (`123`) is shorter than the minimum allowed length (5)."
                );
                done();
            });
        });
    });

    describe("bio", () => {
        it("should return error if bio is not a string", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                email: "test@test.com",
                password: "pwd123",
                bio: { id: 123 }
            });

            user.save().catch(err => {
                expect(err.errors.bio).toExist();
                expect(err.errors.bio.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "bio"'
                );
                done();
            });
        });

        it("should trim the bio", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                googleId: "123",
                email: "test@test.com",
                bio: "    bio bio bio     "
            });

            user.save().then(u => {
                expect(u.bio).toBe("bio bio bio");
                done();
            });
        });
    });

    describe("isVerified", () => {
        it("should default isVerified if not given", done => {
            const user = new User({
                name: {
                    firstname: "firstname",
                    lastname: "lastname"
                },
                email: "test@test.com",
                password: "test123"
            });

            user.save().then(u => {
                expect(u.isVerified).toBe(false);
                done();
            });
        });
    });
});
