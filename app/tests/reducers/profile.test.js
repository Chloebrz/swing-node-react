// Dependencies
import profile from "../../reducers/profile";
import { FETCH_PROFILE_SUCCESS } from "../../actions/types";

describe("PROFILE REDUCER", () => {
    it("should return the initial state", () => {
        expect(profile(undefined, {})).toEqual(null);
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
});
