// Dependencies
import authReducer from "../../reducers/authReducer";
import { FETCH_USER, UPDATE_PROFILE_SUCCESS } from "../../actions/types";

describe("Auth Reducer", () => {
    it("should return the initial state", () => {
        expect(authReducer(undefined, {})).toEqual(null);
    });

    it("should return false if no payload", () => {
        expect(authReducer(null, { type: FETCH_USER })).toEqual(false);
    });

    it("should handle FETCH_USER", () => {
        const payload = "payload";

        expect(
            authReducer(null, {
                type: FETCH_USER,
                payload: payload
            })
        ).toEqual(payload);
    });

    it("should handle UPDATE_PROFILE_SUCCESS", () => {
        const payload = "payload";

        expect(
            authReducer("some_state", {
                type: UPDATE_PROFILE_SUCCESS,
                payload: payload
            })
        ).toEqual(payload);
    });
});
