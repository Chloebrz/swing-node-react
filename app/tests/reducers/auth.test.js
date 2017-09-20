// Dependencies
import auth from "../../reducers/auth";
import { FETCH_USER_SUCCESS, UPDATE_PROFILE_SUCCESS } from "../../actions/types";

describe("AUTH REDUCER", () => {
    it("should return the initial state", () => {
        expect(auth(undefined, {})).toEqual(null);
    });

    it("should return false if no payload", () => {
        expect(auth(null, { type: FETCH_USER_SUCCESS })).toEqual(false);
    });

    it("should handle FETCH_USER_SUCCESS", () => {
        const payload = "payload";

        expect(
            auth(null, {
                type: FETCH_USER_SUCCESS,
                payload: payload
            })
        ).toEqual(payload);
    });

    it("should handle UPDATE_PROFILE_SUCCESS", () => {
        const payload = "payload";

        expect(
            auth("some_state", {
                type: UPDATE_PROFILE_SUCCESS,
                payload: payload
            })
        ).toEqual(payload);
    });
});
