// Dependencies
const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { users, populatePictures } = require("../seed/pictures-seed");

describe("ADMIN PROFILES ROUTES", () => {
    var app;
    before(function() {
        app = require("../../index").app;
    });

    beforeEach(populatePictures);

    describe("GET /api/admin/profile/:id", () => {
        it("should return 404 for non-object ids", done => {
            request(app).get("/api/admin/profile/123").expect(404).end(done);
        });

        it("should return 404 if profile not found", done => {
            request(app)
                .get(`/api/admin/picture/${new ObjectID().toHexString()}`)
                .expect(404)
                .end(done);
        });

        it("should return a profile doc", done => {
            request(app)
                .get(`/api/admin/profile/${users[0]._id}`)
                .expect(200)
                .expect(res => {
                    const p = res.body;
                    expect(p.name.firstname).toBe(users[0].name.firstname);
                    expect(p.name.lastname).toBe(users[0].name.lastname);
                    expect(p.email).toBe(users[0].email);
                })
                .end(done);
        });
    });

    describe("PATCH /api/admin/profile/:id", () => {
        it("should return 404 for non-object ids", done => {
            request(app).patch("/api/admin/profile/123").expect(404).end(done);
        });

        it("should return 401 if profile id not user id", done => {
            const profile = {
                name: { firstname: "firstname", lastname: "lastname" },
                bio: "bio bio bio"
            };

            request(app)
                .patch(`/api/admin/profile/${new ObjectID().toHexString()}`)
                .send(profile)
                .expect(401)
                .end(done);
        });

        it("should update a profile doc", done => {
            const profile = {
                id: users[0]._id,
                name: { firstname: "firstname", lastname: "lastname" },
                bio: "bio bio bio"
            };

            request(app)
                .patch(`/api/admin/profile/${users[0]._id}`)
                .send(profile)
                .expect(200)
                .expect(res => {
                    const p = res.body;
                    expect(p.name.firstname).toBe(profile.name.firstname);
                    expect(p.name.lastname).toBe(profile.name.lastname);
                    expect(p.bio).toBe(p.bio);
                })
                .end(done);
        });
    });
});
