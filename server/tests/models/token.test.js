// Dependencies
const expect = require("expect");
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

require("../../db/mongoose");
const Token = mongoose.model("Token");

describe("Token model", function() {
    it("should create a new token object", done => {
        const token = new Token({
            userId: new ObjectID(),
            token: "a_token"
        });

        token.save().then(t => {
            expect(t.userId).toBe(token.userId);
            expect(t.token).toBe(token.token);
            expect(t.createdAt).toExist();
            done();
        });
    });

    describe("userId", () => {
        it("should return error if userId is missing", done => {
            const token = new Token({
                token: "a_token"
            });

            token.save().catch(err => {
                expect(err.errors.userId).toExist();
                expect(err.errors.userId.message).toBe("Path `userId` is required.");
                done();
            });
        });

        it("should return error if userId is not an ObjectId", done => {
            const token = new Token({
                userId: "123",
                token: "a_token"
            });

            token.save().catch(err => {
                expect(err.errors.userId).toExist();
                expect(err.errors.userId.message).toBe(
                    'Cast to ObjectID failed for value "123" at path "userId"'
                );
                done();
            });
        });
    });

    describe("token", () => {
        it("should return error if token is missing", done => {
            const token = new Token({
                userId: new ObjectID()
            });

            token.save().catch(err => {
                expect(err.errors.token).toExist();
                expect(err.errors.token.message).toBe("Path `token` is required.");
                done();
            });
        });

        it("should return error if token is not a string", done => {
            const token = new Token({
                userId: new ObjectID(),
                token: { id: 123 }
            });

            token.save().catch(err => {
                expect(err.errors.token).toExist();
                expect(err.errors.token.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "token"'
                );
                done();
            });
        });
    });

    describe("createdAt", () => {
        it("should return error if createdAt is not a Date", done => {
            const token = new Token({
                userId: new ObjectID(),
                token: "a_token",
                createdAt: { id: 123 }
            });

            token.save().catch(err => {
                expect(err.errors.createdAt).toExist();
                expect(err.errors.createdAt.message).toBe(
                    'Cast to Date failed for value "{ id: 123 }" at path "createdAt"'
                );
                done();
            });
        });

        it("should default createdAt if not given", done => {
            const token = new Token({
                userId: new ObjectID(),
                token: "a_token"
            });

            token.save().then(t => {
                expect(t.createdAt).toExist();
                done();
            });
        });
    });
});
