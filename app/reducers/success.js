// Dependencies
import {
    FETCH_PICTURES_SUCCESS,
    FETCH_PICTURES,
    FETCH_PICTURES_DONE,
    POST_PICTURE_SUCCESS,
    FETCH_PICTURE,
    UPDATE_PICTURE_SUCCESS,
    POST_VIDEO_SUCCESS,
    SIGNUP_LOGIN_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    SEND_TOKEN_RESET,
    SEND_TOKEN,
    SEND_TOKEN_SUCCESS,
    SEND_TOKEN_ERROR
} from "../actions/types";
import * as c from "../actions/const";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_PICTURES_SUCCESS:
            return Object.assign({}, state, { fetch_pictures_success: true });

        case FETCH_PICTURES:
            return Object.assign({}, state, {
                fetch_pictures_success: false,
                fetch_pictures_done: false
            });

        case FETCH_PICTURES_DONE:
            return Object.assign({}, state, { fetch_pictures_done: true });

        case POST_PICTURE_SUCCESS:
            return Object.assign({}, state, { post_picture_success: true });

        case FETCH_PICTURE:
            return Object.assign({}, state, { update_picture_success: false });

        case UPDATE_PICTURE_SUCCESS:
            return Object.assign({}, state, { update_picture_success: true });

        case POST_VIDEO_SUCCESS:
            return Object.assign({}, state, { post_video_success: true });

        case SIGNUP_LOGIN_SUCCESS:
            return Object.assign({}, state, { signup_login_success: true });

        case UPDATE_PROFILE_SUCCESS:
            return Object.assign({}, state, { update_profile_success: true });

        case SEND_TOKEN_RESET:
            return Object.assign({}, state, { send_token: c.RESET });

        case SEND_TOKEN:
            return Object.assign({}, state, { send_token: c.LOADING });

        case SEND_TOKEN_SUCCESS:
            return Object.assign({}, state, { send_token: c.SUCCESS });

        case SEND_TOKEN_ERROR: {
            return Object.assign({}, state, { send_token: c.ERROR });
        }

        default:
            return state;
    }
}
