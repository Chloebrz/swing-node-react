// Dependencies
import successReducer from "../../reducers/successReducer";
import {
    POST_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS,
    FETCH_PICTURES,
    SIGNUP_LOGIN_SUCCESS,
    UPDATE_PROFILE_SUCCESS
} from "../../actions/types";

describe("Success Reducer", () => {
    it("should return the initial state", () => {
        expect(successReducer(undefined, {})).toEqual({});
    });

    it("should handle POST_PICTURE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            successReducer(state, {
                type: POST_PICTURE_SUCCESS
            })
        ).toEqual({ a_success: false, post_success: true });
    });

    it("should handle UPDATE_PICTURE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            successReducer(state, {
                type: UPDATE_PICTURE_SUCCESS
            })
        ).toEqual({ a_success: false, update_success: true });
    });

    it("should handle FETCH_PICTURES", () => {
        const state = { a_success: false };

        expect(
            successReducer(state, {
                type: FETCH_PICTURES
            })
        ).toEqual({ a_success: false, fetch_success: true });
    });

    it("should handle SIGNUP_LOGIN_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            successReducer(state, {
                type: SIGNUP_LOGIN_SUCCESS
            })
        ).toEqual({ a_success: false, signup_login_success: true });
    });

    it("should handle UPDATE_PROFILE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            successReducer(state, {
                type: UPDATE_PROFILE_SUCCESS
            })
        ).toEqual({ a_success: false, profile_success: true });
    });
});
