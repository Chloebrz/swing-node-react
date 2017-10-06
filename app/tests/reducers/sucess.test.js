// Dependencies
import success from "../../reducers/success";
import {
    FETCH_PICTURES_SUCCESS,
    FETCH_PICTURES,
    FETCH_PICTURES_DONE,
    POST_PICTURE_SUCCESS,
    FETCH_PICTURE,
    UPDATE_PICTURE_SUCCESS,
    POST_VIDEO,
    POST_VIDEO_SUCCESS,
    SIGNUP_LOGIN_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    SEND_TOKEN_RESET,
    SEND_TOKEN,
    SEND_TOKEN_SUCCESS,
    SEND_TOKEN_ERROR
} from "../../actions/types";
import * as c from "../../actions/const";

describe("SUCCESS REDUCER", () => {
    it("should return the initial state", () => {
        expect(success(undefined, {})).toEqual({});
    });

    it("should handle FETCH_PICTURES_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_PICTURES_SUCCESS
            })
        ).toEqual({ a_success: false, fetch_pictures_success: true });
    });

    it("should handle FETCH_PICTURES", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_PICTURES
            })
        ).toEqual({ a_success: false, fetch_pictures_success: false, fetch_pictures_done: false });
    });

    it("should handle FETCH_PICTURES_DONE", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_PICTURES_DONE
            })
        ).toEqual({ a_success: false, fetch_pictures_done: true });
    });

    it("should handle POST_PICTURE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: POST_PICTURE_SUCCESS
            })
        ).toEqual({ a_success: false, post_picture_success: true });
    });

    it("should handle FETCH_PICTURE", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_PICTURE
            })
        ).toEqual({ a_success: false, update_picture_success: false });
    });

    it("should handle FETCH_PICTURE", () => {
        const state = { a_success: false, update_picture_success: true };

        expect(
            success(state, {
                type: FETCH_PICTURE
            })
        ).toEqual({ a_success: false, update_picture_success: false });
    });

    it("should handle UPDATE_PICTURE_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: UPDATE_PICTURE_SUCCESS
            })
        ).toEqual({ a_success: false, update_picture_success: true });
    });

    it("should handle POST_VIDEO", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: POST_VIDEO
            })
        ).toEqual({ a_success: false, post_video_success: false });
    });

    it("should handle POST_VIDEO_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: POST_VIDEO_SUCCESS
            })
        ).toEqual({ a_success: false, post_video_success: true });
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
        ).toEqual({ a_success: false, update_profile_success: true });
    });

    it("should handle SEND_TOKEN_RESET", () => {
        const state = { a_success: false };

        expect(success(state, { type: SEND_TOKEN_RESET })).toEqual({
            a_success: false,
            send_token: c.RESET
        });
    });

    it("should handle SEND_TOKEN", () => {
        const state = { a_success: false };

        expect(success(state, { type: SEND_TOKEN })).toEqual({
            a_success: false,
            send_token: c.LOADING
        });
    });

    it("should handle SEND_TOKEN_SUCCESS", () => {
        const state = { a_success: false };

        expect(success(state, { type: SEND_TOKEN_SUCCESS })).toEqual({
            a_success: false,
            send_token: c.SUCCESS
        });
    });

    it("should handle SEND_TOKEN_ERROR", () => {
        const state = { a_success: false };

        expect(success(state, { type: SEND_TOKEN_ERROR })).toEqual({
            a_success: false,
            send_token: c.ERROR
        });
    });
});
