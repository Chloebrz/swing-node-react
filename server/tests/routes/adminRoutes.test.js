// Dependencies
const expect = require("expect");
const sinon = require("sinon");
const request = require("supertest");
const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

require("../../db/mongoose");
const Picture = mongoose.model("Picture");

const { userOneId, pictures, populatePictures } = require("../seed/pictures-seed");
beforeEach(populatePictures);

var app;
const auth = require("../../middlewares/auth");

before(function() {
    var stub = sinon.stub(auth, "requireLogin");
    stub.callsFake(function(req, res, next) {
        req.user = { _id: userOneId };
        next();
    });
    app = require("../../index").app;
});

describe("GET /api/admin/pictures", () => {
    it("should get all pictures", done => {
        request(app)
            .get("/api/admin/pictures")
            .send()
            .expect(200)
            .expect(res => {
                const pics = res.body;

                expect(pics.length).toBe(3);
            })
            .end(done);
    });

    it("should add res property to all pictures", done => {
        request(app)
            .get("/api/admin/pictures")
            .send()
            .expect(200)
            .expect(res => {
                const pics = res.body;
                expect(pics[0].img.res).toExist();
                expect(pics[1].img.res).toExist();
                expect(pics[2].img.res).toExist();
            })
            .end(done);
    });
});

describe("GET /api/admin/picture/:id", () => {
    it("should return 404 for non-object ids", done => {
        request(app).get("/api/admin/picture/123").expect(404).end(done);
    });

    it("should return 404 if picture not found", done => {
        request(app)
            .get(`/api/admin/picture/${new ObjectID().toHexString()}`)
            .expect(404)
            .expect(res => {
                expect(res.body.error).toExist();
                expect(res.body.error).toBe(
                    "Vous ne pouvez pas accéder à cette image car vous ne l'avez pas ajoutée"
                );
            })
            .end(done);
    });

    it("should not return a picture doc created by other user", done => {
        request(app)
            .get(`/api/admin/picture/${pictures[1]._id}`)
            .expect(404)
            .expect(res => {
                expect(res.body.error).toExist();
                expect(res.body.error).toBe(
                    "Vous ne pouvez pas accéder à cette image car vous ne l'avez pas ajoutée"
                );
            })
            .end(done);
    });

    it("should return a picture doc", done => {
        request(app)
            .get(`/api/admin/picture/${pictures[0]._id}`)
            .expect(200)
            .expect(res => {
                const pic = res.body;
                expect(pic.img.res).toExist();
                expect(pic.name).toBe(pictures[0].name);
                expect(pic.legend).toBe(pictures[0].legend);
            })
            .end(done);
    });
});

describe("POST /api/admin/picture", () => {
    it("should return 400 if invalid body data - no name", done => {
        const picture = {
            img: {
                name: "img",
                data: "buf",
                contentType: "type"
            },
            legend: "legendLegendLegend"
        };

        request(app).post("/api/admin/picture").send(picture).expect(400).end(done);
    });

    it("should return 400 if invalid body data - no legend", done => {
        const picture = {
            name: "picture",
            img: {
                name: "img",
                data: "buf",
                contentType: "type"
            }
        };

        request(app).post("/api/admin/picture").send(picture).expect(400).end(done);
    });

    it("should create a picture doc", done => {
        const picture = {
            name: "picture",
            img: {
                name: "img",
                data: "buf",
                contentType: "type"
            },
            legend: "legendLegendLegend"
        };

        request(app).post("/api/admin/picture").send(picture).expect(200).end((err, res) => {
            if (err) return done(err);

            Picture.find({ name: picture.name })
                .then(pics => {
                    expect(pics.length).toBe(1);
                    expect(pics[0].name).toBe(picture.name);
                    expect(pics[0].legend).toBe(picture.legend);
                    done();
                })
                .catch(e => done(e));
        });
    });
});

describe("DELETE /api/admin/picture/:id", () => {
    it("should return 404 for non-object ids", done => {
        request(app).delete("/api/admin/picture/123").expect(404).end(done);
    });

    it("should return 404 if picture not found", done => {
        request(app)
            .delete(`/api/admin/picture/${new ObjectID().toHexString()}`)
            .expect(404)
            .end(done);
    });

    it("should not delete a picture doc created by other user", done => {
        request(app).delete(`/api/admin/picture/${pictures[1]._id}`).expect(404).end(done);
    });

    it("should delete a picture doc", done => {
        request(app)
            .get(`/api/admin/picture/${pictures[0]._id}`)
            .expect(200)
            .expect(res => {
                const pic = res.body;
                expect(pic.img.res).toExist();
                expect(pic.name).toBe(pictures[0].name);
                expect(pic.legend).toBe(pictures[0].legend);
            })
            .end(done);
    });
});

describe("PATCH /api/admin/picture", () => {
    it("should return 404 for non-object ids", done => {
        request(app).patch("/api/admin/picture/123").expect(404).end(done);
    });

    it("should return 404 if picture not found", done => {
        const picture = {
            name: "picture",
            legend: "legendLegendLegend"
        };

        request(app)
            .patch(`/api/admin/picture/${new ObjectID().toHexString()}`)
            .send(picture)
            .expect(404)
            .end(done);
    });

    it("should not update a picture doc created by other user", done => {
        const picture = {
            name: "picture",
            legend: "legendLegendLegend"
        };

        request(app)
            .patch(`/api/admin/picture/${pictures[1]._id}`)
            .send(picture)
            .expect(404)
            .end(done);
    });

    it("should update a picture doc", done => {
        const picture = {
            name: "picture",
            legend: "legendLegendLegend"
        };

        request(app)
            .patch(`/api/admin/picture/${pictures[0]._id}`)
            .send(picture)
            .expect(200)
            .expect(res => {
                const pic = res.body;
                expect(pic.name).toBe(picture.name);
                expect(pic.legend).toBe(picture.legend);
            })
            .end(done);
    });
});
