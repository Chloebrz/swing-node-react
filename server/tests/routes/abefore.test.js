// Dependencies
const sinon = require("sinon");
const mongoose = require("mongoose");
const proxyquire = require("proxyquire");

require("../../db/mongoose");
const { userOneId } = require("../seed/pictures-seed");
const user = { _id: userOneId, email: "test@test.com" };

var app;
var nodemailer, passport, multer;
var requireLoginStub, passportStub, nodemailerStub, multerStub;
const auth = require("../../middlewares/auth");

const sendMailSpy = sinon.spy();

before(function() {
    requireLoginStub = sinon.stub(auth, "requireLogin");
    requireLoginStub.callsFake(function(req, res, next) {
        req.user = user;
        next();
    });

    // passportStub = {
    //     authenticate: function() {
    //         console.log("HERE AUTHENTICATE");
    //     }
    // };
    // passport = proxyquire("../../routes/auth", { passport: passportStub });

    nodemailerStub = {
        createTransport: function() {
            return {
                sendMail: sendMailSpy
            };
        }
    };
    nodemailer = proxyquire("../../routes/auth", { nodemailer: nodemailerStub });

    multerStub = function() {
        return {
            single: function() {
                return function(req, res, next) {
                    req.file = { originalname: "originalname", mimetype: "mimetype" };
                    next();
                };
            }
        };
    };
    multer = proxyquire("../../routes/admin_videos", { multer: multerStub });

    app = require("../../index").app;
});

module.exports = { user, sendMailSpy };
