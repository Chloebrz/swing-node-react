// Dependencies
import pictures from "../../reducers/pictures";
import {
    FETCH_PICTURES_SUCCESS,
    FETCH_PICTURE_SUCCESS,
    POST_PICTURE_SUCCESS,
    DELETE_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS
} from "../../actions/types";

describe("PICTURES REDUCER", () => {
    it("should return the initial state", () => {
        expect(pictures(undefined, {})).toEqual([]);
    });

    it("should handle FETCH_PICTURES_SUCCESS", () => {
        const payload = ["t", "e", "s", "t"];

        expect(
            pictures([], {
                type: FETCH_PICTURES_SUCCESS,
                payload: payload
            })
        ).toEqual(payload);
    });

    it("should handle FETCH_PICTURE_SUCCESS", () => {
        const payload = "payload";

        expect(
            pictures([], {
                type: FETCH_PICTURE_SUCCESS,
                payload: payload
            })
        ).toEqual([payload]);
    });

    it("should handle POST_PICTURE_SUCCESS", () => {
        const state = [{ _id: 1 }, { _id: 2 }, { _id: 3 }];
        const payload = { _id: 4 };

        expect(
            pictures(state, {
                type: POST_PICTURE_SUCCESS,
                payload: payload
            })
        ).toEqual([{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }]);
    });

    it("should handle DELETE_PICTURE_SUCCESS", () => {
        const state = [{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }];
        const payload = { _id: 2 };

        expect(
            pictures(state, {
                type: DELETE_PICTURE_SUCCESS,
                payload: payload
            })
        ).toEqual([{ _id: 1 }, { _id: 3 }, { _id: 4 }]);
    });

    it("should handle UPDATE_PICTURE_SUCCESS", () => {
        const state = [{ _id: 1, name: "1" }, { _id: 2, name: "2" }, { _id: 3, name: "3" }];
        const payload = { _id: 2, name: "2 updated" };

        expect(
            pictures(state, {
                type: UPDATE_PICTURE_SUCCESS,
                payload: payload
            })
        ).toEqual([{ _id: 1, name: "1" }, { _id: 2, name: "2 updated" }, { _id: 3, name: "3" }]);
    });
});
