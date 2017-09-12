// Dependencies
import errors from "../../reducers/errors";
import { SIGNUP_LOGIN_ERROR } from "../../actions/types";

describe("ERRORS REDUCER", () => {
    it("should return the initial state", () => {
        expect(errors(undefined, {})).toEqual({});
    });

    it("should return the previous state if no payload", () => {
        const state = { a_success: false };

        expect(
            errors(state, {
                type: SIGNUP_LOGIN_ERROR
            })
        ).toEqual(state);
    });

    it("should handle SIGNUP_LOGIN_ERROR", () => {
        const state = { a_success: false };
        const payload = "payload";

        expect(
            errors(state, {
                type: SIGNUP_LOGIN_ERROR,
                payload
            })
        ).toEqual(payload);
    });
});
