// Dependencies
import profile from "../../reducers/profile";
import {
    FETCH_PROFILE,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_ERROR
} from "../../constants/profiles_types";

describe("PROFILE REDUCER", () => {
    it("should return the initial state", () => {
        expect(profile(undefined, {})).toEqual(null);
    });

    it("should handle FETCH_PROFILE", () => {
        const payload = "payload";

        expect(
            profile(null, {
                type: FETCH_PROFILE,
                payload: payload
            })
        ).toEqual(null);
    });

    it("should handle FETCH_PROFILE_SUCCESS", () => {
        const payload = "payload";

        expect(
            profile(null, {
                type: FETCH_PROFILE_SUCCESS,
                payload: payload
            })
        ).toEqual(payload);
    });

    it("should handle FETCH_PROFILE_ERROR", () => {
        const payload = "payload";

        expect(
            profile(null, {
                type: FETCH_PROFILE_ERROR,
                payload: payload
            })
        ).toEqual(false);
    });
});
