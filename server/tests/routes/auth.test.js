// Dependencies
const expect = require("expect");
const request = require("supertest");
const mongoose = require("mongoose");

require("../../db/mongoose");
const User = mongoose.model("User");
const { users, userOneId, tokens, populateUsers } = require("../seed/users-seed");

describe("AUTH ROUTES", () => {
    var app;
    before(function() {
        app = require("../../index").app;
    });

    beforeEach(populateUsers);

    describe("GET /auth/google", () => {
        it.skip("should call authenticate() from passport", done => {});
    });

    describe("GET /auth/google/callback", () => {
        it.skip("should call authenticate() from passport", done => {});

        it.skip("should call redirect to /admin", done => {});
    });

    describe("POST /auth/signup", () => {
        it("should return error if email address already used", done => {
            const user = { email: users[0].email, password: "test123" };

            request(app)
                .post("/auth/signup")
                .send(user)
                .expect(res => {
                    expect(res.body.success).toBe(false);
                    expect(res.body.errors).toInclude({ email: "Adresse mail déjà utilisée" });
                })
                .end(done);
        });

        it("should add user to database and authenticate", done => {
            const user = { email: "test@test.com", password: "test123" };

            request(app)
                .post("/auth/signup")
                .send(user)
                .expect(200)
                .expect(res => {
                    expect(res.body.success).toBe(true);
                    expect(res.body.errors).toNotExist();
                })
                .end((err, res) => {
                    if (err) return done(err);

                    User.findOne({ email: user.email })
                        .then(u => {
                            expect(u.email).toBe(user.email);
                            done();
                        })
                        .catch(e => done(e));
                });
        });
    });

    describe("POST /auth/login", () => {
        it("should return error if wrong email", done => {
            const user = { email: "test@wrong.com", password: "test123" };

            request(app)
                .post("/auth/login")
                .send(user)
                .expect(res => {
                    expect(res.body.success).toBe(false);
                    expect(res.body.errors).toInclude({ email: "Adresse mail incorrecte" });
                })
                .end(done);
        });

        it("should return error if wrong password", done => {
            const user = { email: users[2].email, password: "test123" };

            request(app)
                .post("/auth/login")
                .send(user)
                .expect(res => {
                    expect(res.body.success).toBe(false);
                    expect(res.body.errors).toInclude({ password: "Mot de passe incorrect" });
                })
                .end(done);
        });

        it("should log in user", done => {
            const user = { email: users[2].email, password: users[2].password };

            request(app)
                .post("/auth/login")
                .send(user)
                .expect(200)
                .expect(res => {
                    expect(res.body.success).toBe(true);
                    expect(res.body.errors).toNotExist();
                })
                .end(done);
        });
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

        it.skip("should send user object if logged in", done => {});
    });

    describe("GET /api/token/send", () => {
        it("should create a token doc", done => {
            const user = require("./abefore.test").user;

            request(app).get("/api/token/send").send().expect(200).end(done);
        });

        it("should call sendMail of nodemailer", done => {
            const sendMailSpy = require("./abefore.test").sendMailSpy;
            const user = require("./abefore.test").user;

            request(app)
                .get("/api/token/send")
                .send()
                .expect(200)
                .expect(() => {
                    expect(sendMailSpy.called).toBe(true);
                    expect(sendMailSpy.getCall(0).args[0].from).toBe("sunshai_sun971@hotmail.com");
                    expect(sendMailSpy.getCall(0).args[0].to).toBe(user.email);
                    expect(sendMailSpy.getCall(0).args[0].subject).toBe(
                        "Swing App - Vérifiez votre adresse mail"
                    );
                    expect(sendMailSpy.getCall(0).args[0].text).toExist();
                })
                .end(done);
        });
    });

    describe("GET /api/token/confirmation/:token", () => {
        it("should return 400 if no token found", done => {
            request(app).get("/api/token/confirmation/123").send().expect(400).end(done);
        });

        it("should set isVerified to true", done => {
            request(app)
                .get(`/api/token/confirmation/${tokens[0].token}`)
                .send()
                .end((err, res) => {
                    if (err) return done(err);

                    User.findById(userOneId)
                        .then(user => {
                            expect(user.isVerified).toBe(true);
                            done();
                        })
                        .catch(e => done(e));
                });
        });

        it("should redirect to /admin/profile", done => {
            request(app)
                .get(`/api/token/confirmation/${tokens[0].token}`)
                .send()
                .expect(res => {
                    expect(res.header.location).toBe("/admin/profile");
                })
                .end(done);
        });
    });
});
