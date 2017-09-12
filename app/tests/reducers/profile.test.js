// Dependencies
import profile from "../../reducers/profile";
import { FETCH_PROFILE } from "../../actions/types";

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
        ).toEqual(payload);
    });
});
