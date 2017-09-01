// Dependencies
import authReducer from "../../reducers/authReducer";
import { FETCH_USER } from "../../actions/types";

describe("Auth Reducer", () => {
    it("should return the initial state", () => {
        expect(authReducer(undefined, {})).toEqual(null);
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
});
