// Dependencies
const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

require("../../db/mongoose");
const Video = mongoose.model("Video");
const { videos, populateVideos } = require("../seed/videos-seed");

describe("ADMIN VIDEOS ROUTES", () => {
    var app;
    before(function() {
        app = require("../../index").app;
    });

    beforeEach(populateVideos);

    describe("GET /api/admin/videos", () => {
        it("should get all videos", done => {
            request(app)
                .get("/api/admin/videos")
                .expect(200)
                .expect(res => {
                    const vids = res.body;
                    expect(vids).toBeA("array");
                    expect(vids.length).toBe(2);
                })
                .end(done);
        });
    });

    describe("POST /api/admin/video", () => {
        it("should return 400 if invalid body data - no name", done => {
            const video = {
                url: "some_url",
                legend: "this is a video legend"
            };

            request(app).post("/api/admin/video").send(video).expect(400).end(done);
        });

        it("should return 400 if invalid body data - no legend", done => {
            const video = {
                name: "video name",
                url: "some_url"
            };

            request(app).post("/api/admin/video").send(video).expect(400).end(done);
        });

        it("should create a video doc", done => {
            const video = {
                name: "video name",
                legend: "this is a video legend"
            };

            request(app).post("/api/admin/video").send(video).expect(200).end((err, res) => {
                if (err) return done(err);

                Video.find({ name: video.name })
                    .then(vids => {
                        expect(vids.length).toBe(1);
                        expect(vids[0].name).toBe(video.name);
                        expect(vids[0].url).toBe("originalname");
                        expect(vids[0].legend).toBe(video.legend);
                        expect(vids[0].createdAt).toExist();
                        expect(vids[0].creatorId).toExist();
                        done();
                    })
                    .catch(e => done(e));
            });
        });
    });
});
