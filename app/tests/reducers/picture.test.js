// Dependencies
import picture from "../../reducers/picture";
import {
    FETCH_PICTURE,
    FETCH_PICTURE_SUCCESS,
    FETCH_PICTURE_ERROR
} from "../../constants/pictures_types";

describe("PICTURE REDUCER", () => {
    it("should return the initial state", () => {
        expect(picture(undefined, {})).toEqual(null);
    });

    it("should handle FETCH_PICTURE", () => {
        const payload = "payload";

        expect(
            picture(null, {
                type: FETCH_PICTURE,
                payload: payload
            })
        ).toEqual(null);
    });

    it("should handle FETCH_PICTURE_SUCCESS", () => {
        const payload = "payload";

        expect(
            picture(null, {
                type: FETCH_PICTURE_SUCCESS,
                payload: payload
            })
        ).toEqual(payload);
    });

    it("should handle FETCH_PICTURE_ERROR", () => {
        const payload = "payload";

        expect(
            picture(null, {
                type: FETCH_PICTURE_ERROR,
                payload: payload
            })
        ).toEqual(false);
    });
});
