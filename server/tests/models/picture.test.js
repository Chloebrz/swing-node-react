// Dependencies
const expect = require("expect");
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

require("../../db/mongoose");
const Picture = mongoose.model("Picture");

describe("PICTURE MODEL", () => {
    it("should create a correct picture", done => {
        const picture = new Picture({
            name: "test name   ",
            img: {
                name: "name",
                data: new Buffer("test buf", "base64"),
                contentType: "type",
                res: "res"
            },
            legend: "this is a legend test",
            createdAt: new Date().getTime(),
            creatorId: new ObjectID()
        });

        picture.save().then(pic => {
            expect(pic.name).toBe("test name");
            expect(pic.legend).toBe("this is a legend test");
            expect(pic.createdAt).toBeA("number");
            expect(pic.creatorId).toExist();
            done();
        });
    });

    describe("name", () => {
        it("should return error if name is missing", done => {
            const picture = new Picture({
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors.name).toExist();
                expect(err.errors.name.message).toBe("Path `name` is required.");
                done();
            });
        });

        it("should return error if name is not a string", done => {
            const picture = new Picture({
                name: { id: 123 },
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors.name).toExist();
                expect(err.errors.name.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "name"'
                );
                done();
            });
        });

        it("should return error if name length less than 5", done => {
            const picture = new Picture({
                name: "test",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err).toExist();
                expect(err.message).toBe(
                    "Picture validation failed: name: Path `name` (`test`) is shorter than the minimum allowed length (5)."
                );
                done();
            });
        });

        it("should trim the name", done => {
            const picture = new Picture({
                name: "test name   ",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().then(pic => {
                expect(pic.name).toBe("test name");
                done();
            });
        });
    });

    describe("img", () => {
        it("should return error if img name is not a string", done => {
            const picture = new Picture({
                name: "test name   ",
                img: {
                    name: { id: 123 },
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors["img.name"]).toExist();
                expect(err.errors["img.name"].message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "img.name"'
                );
                done();
            });
        });

        it("should return error if img data is not a buffer", done => {
            const picture = new Picture({
                name: "test name   ",
                img: {
                    name: "name",
                    data: { id: 123 },
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors["img.data"]).toExist();
                expect(err.errors["img.data"].message).toBe(
                    'Cast to Buffer failed for value "{ id: 123 }" at path "img.data"'
                );
                done();
            });
        });

        it("should return error if img contentType is not a string", done => {
            const picture = new Picture({
                name: "test name   ",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: { id: 123 },
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors["img.contentType"]).toExist();
                expect(err.errors["img.contentType"].message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "img.contentType"'
                );
                done();
            });
        });

        it("should return error if img res is not a string", done => {
            const picture = new Picture({
                name: "test name   ",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: { id: 123 }
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors["img.res"]).toExist();
                expect(err.errors["img.res"].message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "img.res"'
                );
                done();
            });
        });
    });

    describe("legend", () => {
        it("should return error if legend is missing", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors.legend).toExist();
                expect(err.errors.legend.message).toBe("Path `legend` is required.");
                done();
            });
        });

        it("should return error if legend is not a string", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: { id: 123 },
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors.legend).toExist();
                expect(err.errors.legend.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "legend"'
                );
                done();
            });
        });

        it("should return error if legend length less than 15", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err).toExist();
                expect(err.message).toBe(
                    "Picture validation failed: legend: Path `legend` (`test`) is shorter than the minimum allowed length (15)."
                );
                done();
            });
        });

        it("should trim the legend", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "      this is a legend test       ",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            picture.save().then(pic => {
                expect(pic.legend).toBe("this is a legend test");
                done();
            });
        });
    });

    describe("createdAt", () => {
        it("should return error if createdAt is not a number", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: { id: 123 },
                creatorId: new ObjectID()
            });

            picture.save().catch(err => {
                expect(err.errors.createdAt).toExist();
                expect(err.errors.createdAt.message).toBe(
                    'Cast to Number failed for value "{ id: 123 }" at path "createdAt"'
                );
                done();
            });
        });

        it("should default if createdAt missing", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                creatorId: new ObjectID()
            });

            picture.save().then(pic => {
                expect(pic.createdAt).toExist();
                done();
            });
        });
    });

    describe("creatorId", () => {
        it("should return error if creatorId is missing", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime()
            });

            picture.save().catch(err => {
                expect(err.errors.creatorId).toExist();
                expect(err.errors.creatorId.message).toBe("Path `creatorId` is required.");
                done();
            });
        });

        it("should return error if creatorId is not an ObjectID", done => {
            const picture = new Picture({
                name: "test name",
                img: {
                    name: "name",
                    data: new Buffer("test buf", "base64"),
                    contentType: "type",
                    res: "res"
                },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: { id: 123 }
            });

            picture.save().catch(err => {
                expect(err.errors.creatorId).toExist();
                expect(err.errors.creatorId.message).toBe(
                    'Cast to ObjectID failed for value "{ id: 123 }" at path "creatorId"'
                );
                done();
            });
        });
    });
});
