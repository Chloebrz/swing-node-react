// Dependencies
import videos from "../../reducers/videos";
import { FETCH_VIDEOS_SUCCESS, POST_VIDEO_SUCCESS } from "../../actions/types";

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
});
