// Dependencies
import auth from "../../reducers/auth";
import { FETCH_USER, UPDATE_PROFILE_SUCCESS } from "../../actions/types";

describe("AUTH REDUCER", () => {
    it("should return the initial state", () => {
        expect(auth(undefined, {})).toEqual(null);
    });

    it("should return false if no payload", () => {
        expect(auth(null, { type: FETCH_USER })).toEqual(false);
    });

    it("should handle FETCH_USER", () => {
        const payload = "payload";

        expect(
            auth(null, {
                type: FETCH_USER,
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