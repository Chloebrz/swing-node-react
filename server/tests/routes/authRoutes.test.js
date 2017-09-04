// Dependencies
const expect = require("expect");
const request = require("supertest");

var app;

before(function() {
    app = require("../../index").app;
});

// var app, stub;
// before(function() {
//     stub = sinon.stub(passport, "authenticate");
//     stub.callsFake(function(req, res, next) {
//         console.log("HERE AUTHENTICATE");
//         next();
//     });
//     app = require("../../index").app;
// });

describe("GET /auth/google", () => {
    it.skip("should call authenticate() from passport", () => {});
});

describe("GET /auth/google/callback", () => {
    it.skip("should call authenticate() from passport", () => {});

    it.skip("should call redirect to /admin", () => {});
});

describe("GET /api/logout", () => {
    it.skip("should call logout()", () => {});

    it("should redirect to /", done => {
        request(app)
            .get("/api/logout")
            .send()
            .expect(res => {
                expect(res.header.location).toBe("/");
            })
            .end(done);
    });
});

describe("GET /api/current_user", () => {
    it("should send empty object if no user logged in", done => {
        request(app)
            .get("/api/current_user")
            .send()
            .expect(res => {
                expect(res.body).toEqual({});
            })
            .end(done);
    });

    it.skip("should send user object if logged in", () => {});
});
