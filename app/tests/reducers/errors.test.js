// Dependencies
import errors from "../../reducers/errors";
import { SIGNUP_ERROR, LOGIN_ERROR } from "../../actions/types";

describe("ERRORS REDUCER", () => {
    it("should return the initial state", () => {
        expect(errors(undefined, {})).toEqual({});
    });

    it("should handle SIGNUP_ERROR", () => {
        const state = { an_error: "err" };

        expect(
            errors(state, {
                type: SIGNUP_ERROR,
                payload: "signup_err"
            })
        ).toEqual({ an_error: "err", signup_error: "signup_err" });
    });

    it("should handle LOGIN_ERROR", () => {
        const state = { an_error: "err" };

        expect(
            errors(state, {
                type: LOGIN_ERROR,
                payload: "login_err"
            })
        ).toEqual({ an_error: "err", login_error: "login_err" });
    });
});
