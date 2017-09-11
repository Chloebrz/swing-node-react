// Dependencies
import {
    POST_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS,
    FETCH_PICTURES,
    SIGNUP_LOGIN_SUCCESS
} from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case POST_PICTURE_SUCCESS:
            return Object.assign({}, state, { post_success: true });

        case UPDATE_PICTURE_SUCCESS:
            return Object.assign({}, state, { update_success: true });

        case FETCH_PICTURES:
            return Object.assign({}, state, { fetch_success: true });

        case SIGNUP_LOGIN_SUCCESS:
            return Object.assign({}, state, { signup_login_success: true });

        default:
            return state;
    }
}
