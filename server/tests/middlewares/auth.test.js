// Dependencies
const expect = require("expect");
const sinon = require("sinon");

const { requireLogin } = require("../../middlewares/auth");

describe("Auth Middleware", () => {
    describe("requireLogin", () => {
        it("should return a function", () => {
            expect(requireLogin).toBeA("function");
        });

        it("should accept three arguments", () => {
            expect(requireLogin.length).toEqual(3);
        });

        it("should return 401 if user not logged in", () => {
            const nextSpy = sinon.spy();
            const sendSpy = sinon.spy();
            const res = {
                status: function(arg) {
                    expect(arg).toBe(401);
                    return { send: sendSpy };
                }
            };

            requireLogin({}, res, nextSpy);
            expect(sendSpy.calledOnce).toBe(true);
            expect(sendSpy.getCall(0).args).toInclude({ error: "You must be logged in." });
        });

        it("should call next() if user logged in", () => {
            const nextSpy = sinon.spy();
            const statusSpy = sinon.spy();
            const user = { id: 123 };

            requireLogin({ user }, { status: statusSpy }, nextSpy);
            expect(nextSpy.calledOnce).toBe(true);
        });
    });
});
