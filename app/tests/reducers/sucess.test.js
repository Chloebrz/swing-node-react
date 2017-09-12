// Dependencies
import success from "../../reducers/success";
import {
    POST_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS,
    FETCH_PICTURES,
    SIGNUP_LOGIN_SUCCESS,
    UPDATE_PROFILE_SUCCESS
} from "../../actions/types";

describe("SUCCESS REDUCER", () => {
    it("should return the initial state", () => {
        expect(success(undefined, {})).toEqual({});
    });

    it("should handle POST_PICTURE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: POST_PICTURE_SUCCESS
            })
        ).toEqual({ a_success: false, post_success: true });
    });

    it("should handle UPDATE_PICTURE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: UPDATE_PICTURE_SUCCESS
            })
        ).toEqual({ a_success: false, update_success: true });
    });

    it("should handle FETCH_PICTURES", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_PICTURES
            })
        ).toEqual({ a_success: false, fetch_success: true });
    });

    it("should handle SIGNUP_LOGIN_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: SIGNUP_LOGIN_SUCCESS
            })
        ).toEqual({ a_success: false, signup_login_success: true });
    });

    it("should handle UPDATE_PROFILE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: UPDATE_PROFILE_SUCCESS
            })
        ).toEqual({ a_success: false, profile_success: true });
    });
});
