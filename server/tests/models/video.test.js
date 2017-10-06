// Dependencies
const expect = require("expect");
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

require("../../db/mongoose");
const Video = mongoose.model("Video");
const { videos, populateVideos } = require("../seed/videos-seed");

describe("VIDEO MODEL", () => {
    beforeEach(populateVideos);

    it("should create a correct video", done => {
        const video = new Video({
            name: "test name",
            url: "some_url",
            mimetype: "type",
            legend: "this is a legend test",
            createdAt: new Date().getTime(),
            creatorId: new ObjectID()
        });

        video
            .save()
            .then(vid => {
                expect(vid.name).toBe("test name");
                expect(vid.url).toBe("some_url");
                expect(vid.mimetype).toBe("type");
                expect(vid.legend).toBe("this is a legend test");
                expect(vid.createdAt).toBeA("number");
                expect(vid.creatorId).toExist();
                done();
            })
            .catch(err => {
                console.log("err", err);
            });
    });

    describe("name", () => {
        it("should return error if name is missing", done => {
            const video = new Video({
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.name).toExist();
                expect(err.errors.name.message).toBe("Path `name` is required.");
                done();
            });
        });

        it("should return error if name is not a string", done => {
            const video = new Video({
                name: { id: 123 },
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.name).toExist();
                expect(err.errors.name.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "name"'
                );
                done();
            });
        });

        it("should return error if name length less than 5", done => {
            const video = new Video({
                name: "test",
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err).toExist();
                expect(err.message).toBe(
                    "Video validation failed: name: Path `name` (`test`) is shorter than the minimum allowed length (5)."
                );
                done();
            });
        });

        it("should trim the name", done => {
            const video = new Video({
                name: "test name    ",
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().then(vid => {
                expect(vid.name).toBe("test name");
                done();
            });
        });
    });

    describe("url", () => {
        it("should return error if url is missing", done => {
            const video = new Video({
                name: "test name",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.url).toExist();
                expect(err.errors.url.message).toBe("Path `url` is required.");
                done();
            });
        });

        it("should return error if url is not a string", done => {
            const video = new Video({
                name: "test name",
                url: { id: 123 },
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.url).toExist();
                expect(err.errors.url.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "url"'
                );
                done();
            });
        });

        it("should return error if url already in use", () => {});
    });

    describe("mimetype", () => {
        it("should return error if mimetype is missing", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.mimetype).toExist();
                expect(err.errors.mimetype.message).toBe("Path `mimetype` is required.");
                done();
            });
        });

        it("should return error if mimetype is not a string", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: { id: 123 },
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.mimetype).toExist();
                expect(err.errors.mimetype.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "mimetype"'
                );
                done();
            });
        });
    });

    describe("legend", () => {
        it("should return error if legend is missing", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.legend).toExist();
                expect(err.errors.legend.message).toBe("Path `legend` is required.");
                done();
            });
        });

        it("should return error if legend is not a string", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                legend: { id: 123 },
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.legend).toExist();
                expect(err.errors.legend.message).toBe(
                    'Cast to String failed for value "{ id: 123 }" at path "legend"'
                );
                done();
            });
        });

        it("should return error if legend length less than 15", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                legend: "test",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err).toExist();
                expect(err.message).toBe(
                    "Video validation failed: legend: Path `legend` (`test`) is shorter than the minimum allowed length (15)."
                );
                done();
            });
        });

        it("should trim the legend", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                legend: "      this is a legend test     ",
                createdAt: new Date().getTime(),
                creatorId: new ObjectID()
            });

            video.save().then(vid => {
                expect(vid.legend).toBe("this is a legend test");
                done();
            });
        });
    });

    describe("createdAt", () => {
        it("should return error if createdAt is not a number", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: { id: 123 },
                creatorId: new ObjectID()
            });

            video.save().catch(err => {
                expect(err.errors.createdAt).toExist();
                expect(err.errors.createdAt.message).toBe(
                    'Cast to Number failed for value "{ id: 123 }" at path "createdAt"'
                );
                done();
            });
        });

        it("should default if createdAt missing", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                creatorId: new ObjectID()
            });

            video.save().then(vid => {
                expect(vid.createdAt).toExist();
                done();
            });
        });
    });

    describe("creatorId", () => {
        it("should return error if creatorId is missing", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime()
            });

            video.save().catch(err => {
                expect(err.errors.creatorId).toExist();
                expect(err.errors.creatorId.message).toBe("Path `creatorId` is required.");
                done();
            });
        });

        it("should return error if creatorId is not an ObjectID", done => {
            const video = new Video({
                name: "test name",
                url: "some_url",
                mimetype: "type",
                legend: "this is a legend test",
                createdAt: new Date().getTime(),
                creatorId: { id: 123 }
            });

            video.save().catch(err => {
                expect(err.errors.creatorId).toExist();
                expect(err.errors.creatorId.message).toBe(
                    'Cast to ObjectID failed for value "{ id: 123 }" at path "creatorId"'
                );
                done();
            });
        });
    });
});
