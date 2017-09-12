// Dependencies
import pictures from "../../reducers/pictures";
import { FETCH_PICTURES, FETCH_PICTURE, DELETE_PICTURE } from "../../actions/types";

describe("PICTURES REDUCER", () => {
    it("should return the initial state", () => {
        expect(pictures(undefined, {})).toEqual([]);
    });

    it("should handle FETCH_PICTURES", () => {
        const payload = ["t", "e", "s", "t"];

        expect(
            pictures([], {
                type: FETCH_PICTURES,
                payload: payload
            })
        ).toEqual(payload);
    });

    it("should handle DELETE_PICTURE", () => {
        const state = [{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }];
        const payload = { _id: 2 };

        expect(
            pictures(state, {
                type: DELETE_PICTURE,
                payload: payload
            })
        ).toEqual([{ _id: 1 }, { _id: 3 }, { _id: 4 }]);
    });

    it("should handle FETCH_PICTURE", () => {
        const payload = "payload";

        expect(
            pictures([], {
                type: FETCH_PICTURE,
                payload: payload
            })
        ).toEqual([payload]);
    });
});
