// Dependencies
import video from "../../reducers/video";
import { FETCH_VIDEO, FETCH_VIDEO_SUCCESS, FETCH_VIDEO_ERROR } from "../../constants/videos_types";

describe("VIDEO REDUCER", () => {
    it("should return the initial state", () => {
        expect(video(undefined, {})).toEqual(null);
    });

    it("should handle FETCH_VIDEO", () => {
        const payload = "payload";

        expect(
            video(null, {
                type: FETCH_VIDEO,
                payload: payload
            })
        ).toEqual(null);
    });

    it("should handle FETCH_VIDEO_SUCCESS", () => {
        const payload = "payload";

        expect(
            video(null, {
                type: FETCH_VIDEO_SUCCESS,
                payload: payload
            })
        ).toEqual(payload);
    });

    it("should handle FETCH_VIDEO_ERROR", () => {
        const payload = "payload";

        expect(
            video(null, {
                type: FETCH_VIDEO_ERROR,
                payload: payload
            })
        ).toEqual(false);
    });
});
