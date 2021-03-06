// Dependencies
import pictures from "../../reducers/pictures";
import {
    FETCH_PICTURES,
    FETCH_PICTURES_SUCCESS,
    POST_PICTURE_SUCCESS,
    DELETE_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS
} from "../../constants/pictures_types";

describe("PICTURES REDUCER", () => {
    it("should return the initial state", () => {
        expect(pictures(undefined, {})).toEqual([]);
    });

    it("should handle FETCH_PICTURES", () => {
        const state = ["t", "e", "s", "t"];

        expect(
            pictures(state, {
                type: FETCH_PICTURES
            })
        ).toEqual([]);
    });

    it("should handle FETCH_PICTURES_SUCCESS", () => {
        const state = ["s", "t", "a", "t", "e"];
        const payload = ["t", "e", "s", "t"];

        expect(
            pictures(state, {
                type: FETCH_PICTURES_SUCCESS,
                payload: payload
            })
        ).toEqual(["s", "t", "a", "t", "e", "t", "e", "s", "t"]);
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
