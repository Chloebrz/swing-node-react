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

    describe("GET /api/admin/video/:id", () => {
        it("should return 404 for non-object ids", done => {
            request(app).get("/api/admin/video/123").expect(404).end(done);
        });

        it("should return 404 if video not found", done => {
            request(app)
                .get(`/api/admin/video/${new ObjectID().toHexString()}`)
                .expect(404)
                .expect(res => {
                    expect(res.body.error).toExist();
                    expect(res.body.error).toBe(
                        "Vous ne pouvez pas accéder à cette vidéo car vous ne l'avez pas ajoutée"
                    );
                })
                .end(done);
        });

        it("should not return a video doc created by other user", done => {
            request(app)
                .get(`/api/admin/video/${videos[1]._id}`)
                .expect(404)
                .expect(res => {
                    expect(res.body.error).toExist();
                    expect(res.body.error).toBe(
                        "Vous ne pouvez pas accéder à cette vidéo car vous ne l'avez pas ajoutée"
                    );
                })
                .end(done);
        });

        it("should return a video doc", done => {
            request(app)
                .get(`/api/admin/video/${videos[0]._id}`)
                .expect(200)
                .expect(res => {
                    const vid = res.body;
                    expect(vid.name).toBe(videos[0].name);
                    expect(vid.legend).toBe(videos[0].legend);
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

    describe("DELETE /api/admin/video/:id", () => {
        it("should return 404 for non-object ids", done => {
            request(app).delete("/api/admin/video/123").expect(404).end(done);
        });

        it("should return 404 if video not found", done => {
            request(app)
                .delete(`/api/admin/video/${new ObjectID().toHexString}`)
                .expect(404)
                .end(done);
        });

        it("should not delete a video doc created by other user", done => {
            request(app).delete(`/api/admin/video/${videos[1]._id}`).expect(404).end(done);
        });

        it.skip("should delete a video doc", done => {
            request(app)
                .delete(`/api/admin/video/${videos[0]._id}`)
                .expect(200)
                .expect(res => {
                    const vid = res.body;
                    expect(vid.name).toBe(videos[0].name);
                    expect(vid.legend).toBe(videos[0].legend);
                })
                .end((err, res) => {
                    if (err) return done(err);

                    Video.findById(videos[0]._id)
                        .then(v => {
                            expect(v).toBe(null);
                            done();
                        })
                        .catch(e => done(e));
                });
        });
    });

    describe("PATCH /api/admin/video/:id", () => {
        it("should return 404 for non-object ids", done => {
            const video = { name: "video", legend: "this is a legend test" };

            request(app).patch("/api/admin/video/123").send(video).expect(404).end(done);
        });

        it("should return 404 if video not found", done => {
            const video = { name: "video", legend: "this is a legend test" };

            request(app)
                .patch(`/api/admin/video/${new ObjectID().toHexString()}`)
                .send(video)
                .expect(404)
                .end(done);
        });

        it("should not update a video doc created by other user", done => {
            const video = { name: "video", legend: "this is a legend test" };

            request(app)
                .patch(`/api/admin/video/${videos[1]._id}`)
                .send(video)
                .expect(404)
                .end(done);
        });

        it("should update a video doc", done => {
            const video = { name: "video", legend: "this is a legend test" };

            request(app)
                .patch(`/api/admin/video/${videos[0]._id}`)
                .send(video)
                .expect(200)
                .expect(res => {
                    const vid = res.body;
                    expect(vid.name).toBe(video.name);
                    expect(vid.legend).toBe(video.legend);
                })
                .end(done);
        });
    });
});
