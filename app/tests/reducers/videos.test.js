// Dependencies
import videos from "../../reducers/videos";
import {
    FETCH_VIDEOS_SUCCESS,
    POST_VIDEO_SUCCESS,
    DELETE_VIDEO_SUCCESS,
    UPDATE_VIDEO_SUCCESS
} from "../../constants/videos_types";

describe("VIDEOS REDUCER", () => {
    it("should return the initial state", () => {
        expect(videos(undefined, {})).toEqual([]);
    });

    it("should handle FETCH_VIDEOS_SUCCESS", () => {
        const state = ["t", "e", "s", "t"];
        const payload = ["v", "i", "d", "e", "o"];

        expect(
            videos(state, {
                type: FETCH_VIDEOS_SUCCESS,
                payload
            })
        ).toEqual(payload);
    });

    it("should handle POST_VIDEO_SUCCESS", () => {
        const state = ["t", "e", "s", "t"];
        const payload = "s";

        expect(
            videos(state, {
                type: POST_VIDEO_SUCCESS,
                payload
            })
        ).toEqual(["t", "e", "s", "t", "s"]);
    });

    it("should handle DELETE_VIDEO_SUCCESS", () => {
        const state = [{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }];
        const payload = { _id: 2 };

        expect(
            videos(state, {
                type: DELETE_VIDEO_SUCCESS,
                payload: payload
            })
        ).toEqual([{ _id: 1 }, { _id: 3 }, { _id: 4 }]);
    });

    it("should handle UPDATE_VIDEO_SUCCESS", () => {
        const state = [{ _id: 1, name: "1" }, { _id: 2, name: "2" }, { _id: 3, name: "3" }];
        const payload = { _id: 2, name: "2 updated" };

        expect(
            videos(state, {
                type: UPDATE_VIDEO_SUCCESS,
                payload: payload
            })
        ).toEqual([{ _id: 1, name: "1" }, { _id: 2, name: "2 updated" }, { _id: 3, name: "3" }]);
    });
});
