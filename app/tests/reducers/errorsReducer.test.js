// Dependencies
import errorsReducer from "../../reducers/errorsReducer";
import { SIGNUP_LOGIN_ERROR } from "../../actions/types";

describe("Errors Reducer", () => {
    it("should return the initial state", () => {
        expect(errorsReducer(undefined, {})).toEqual({});
    });

    it("should return the previous state if no payload", () => {
        const state = { a_success: false };

        expect(
            errorsReducer(state, {
                type: SIGNUP_LOGIN_ERROR
            })
        ).toEqual(state);
    });

    it("should handle SIGNUP_LOGIN_ERROR", () => {
        const state = { a_success: false };
        const payload = "payload";

        expect(
            errorsReducer(state, {
                type: SIGNUP_LOGIN_ERROR,
                payload
            })
        ).toEqual(payload);
    });
});
