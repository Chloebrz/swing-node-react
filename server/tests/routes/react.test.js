// Dependencies
const expect = require("expect");
const request = require("supertest");

var app;

before(function() {
    app = require("../../index").app;
});

describe("REACT ROUTES", () => {
    describe("GET /admin", () => {
        it("should redirect to / if user not authenticated", done => {
            request(app)
                .get("/admin")
                .send()
                .expect(res => {
                    expect(res.header.location).toBe("/");
                })
                .end(done);
        });

        it.skip("should send react files if user authenticated", () => {});
    });

    describe("GET /admin/*", () => {
        it("should redirect to / if user not authenticated", done => {
            request(app)
                .get("/admin/add-picture")
                .send()
                .expect(res => {
                    expect(res.header.location).toBe("/");
                })
                .end(done);
        });

        it.skip("should send react files if user authenticated", () => {});
    });

    describe("GET *", () => {
        it.skip("should send react files", done => {});
    });
});
