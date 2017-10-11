// Dependencies
import success from "../../reducers/success";
import {
    FETCH_PICTURES_SUCCESS,
    FETCH_PICTURES,
    FETCH_PICTURES_DONE,
    POST_PICTURE,
    POST_PICTURE_SUCCESS,
    FETCH_PICTURE,
    UPDATE_PICTURE_SUCCESS
} from "../../constants/pictures_types";
import {
    FETCH_VIDEOS,
    FETCH_VIDEOS_SUCCESS,
    POST_VIDEO,
    POST_VIDEO_SUCCESS,
    FETCH_VIDEO,
    UPDATE_VIDEO_SUCCESS
} from "../../constants/videos_types";
import {
    SIGNUP_LOGIN,
    SIGNUP_LOGIN_SUCCESS,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    SEND_TOKEN_RESET,
    SEND_TOKEN,
    SEND_TOKEN_SUCCESS,
    SEND_TOKEN_ERROR
} from "../../constants/profiles_types";
import * as s from "../../constants/state";

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

    it("should handle POST_PICTURE", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: POST_PICTURE
            })
        ).toEqual({ a_success: false, post_picture_success: false });
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

    it("should handle FETCH_VIDEOS_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_VIDEOS_SUCCESS
            })
        ).toEqual({ a_success: false, fetch_videos_success: true });
    });

    it("should handle FETCH_VIDEOS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_VIDEOS
            })
        ).toEqual({ a_success: false, fetch_videos_success: false });
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

    it("should handle FETCH_VIDEO", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: FETCH_VIDEO
            })
        ).toEqual({ a_success: false, update_video_success: false });
    });

    it("should handle UPDATE_VIDEO_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: UPDATE_VIDEO_SUCCESS
            })
        ).toEqual({ a_success: false, update_video_success: true });
    });

    it("should handle SIGNUP_LOGIN", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: SIGNUP_LOGIN
            })
        ).toEqual({ a_success: false, signup_login_success: false });
    });

    it("should handle SIGNUP_LOGIN_SUCCESS", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: SIGNUP_LOGIN_SUCCESS
            })
        ).toEqual({ a_success: false, signup_login_success: true });
    });

    it("should handle UPDATE_PROFILE", () => {
        const state = { a_success: false };

        expect(
            success(state, {
                type: UPDATE_PROFILE
            })
        ).toEqual({ a_success: false, update_profile_success: false });
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
            send_token: s.RESET
        });
    });

    it("should handle SEND_TOKEN", () => {
        const state = { a_success: false };

        expect(success(state, { type: SEND_TOKEN })).toEqual({
            a_success: false,
            send_token: s.LOADING
        });
    });

    it("should handle SEND_TOKEN_SUCCESS", () => {
        const state = { a_success: false };

        expect(success(state, { type: SEND_TOKEN_SUCCESS })).toEqual({
            a_success: false,
            send_token: s.SUCCESS
        });
    });

    it("should handle SEND_TOKEN_ERROR", () => {
        const state = { a_success: false };

        expect(success(state, { type: SEND_TOKEN_ERROR })).toEqual({
            a_success: false,
            send_token: s.ERROR
        });
    });
});
