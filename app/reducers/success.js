// Dependencies
import {
    FETCH_PICTURES_SUCCESS,
    POST_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS,
    SIGNUP_LOGIN_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    SEND_TOKEN_SUCCESS
} from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_PICTURES_SUCCESS:
            return Object.assign({}, state, { fetch_success: true });

        case POST_PICTURE_SUCCESS:
            return Object.assign({}, state, { post_success: true });

        case UPDATE_PICTURE_SUCCESS:
            return Object.assign({}, state, { update_success: true });

        case SIGNUP_LOGIN_SUCCESS:
            return Object.assign({}, state, { signup_login_success: true });

        case UPDATE_PROFILE_SUCCESS:
            return Object.assign({}, state, { profile_success: true });

        case SEND_TOKEN_SUCCESS:
            return Object.assign({}, state, { send_token_success: true });

        default:
            return state;
    }
}
