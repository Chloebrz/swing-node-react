// Dependencies
const expect = require("expect");
const mongoose = require("mongoose");

require("../../db/mongoose");
const User = mongoose.model("User");

const { userOneGoogleId, users, populateUsers } = require("../seed/users-seed");
before(populateUsers);

describe("User model", function() {
    describe("googleId", () => {
        it("should return error if googleId is missing", done => {
            const user = new User();

            user.save().catch(err => {
                expect(err.errors.googleId).toExist();
                expect(err.errors.googleId.message).toBe("Path `googleId` is required.");
                done();
            });
        });

        it("should return error if googleId is not a string", done => {
            const user = new User({ googleId: { id: 123 } });

            user.save().catch(err => {
                expect(err.errors.googleId).toExist();
                expect(err.errors.googleId.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "googleId"'
                );
                done();
            });
        });

        it("should return error if googleId already in use", done => {
            const user = new User({ googleId: userOneGoogleId });

            user.save().catch(err => {
                expect(err).toExist();
                expect(err.message).toBe(
                    `E11000 duplicate key error collection: swingtest.users index: googleId_1 dup key: { : "${userOneGoogleId}" }`
                );
                done();
            });
        });
    });
});
