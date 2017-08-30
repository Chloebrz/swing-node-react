// Dependencies
import { POST_PICTURE_SUCCESS, UPDATE_PICTURE_SUCCESS } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case POST_PICTURE_SUCCESS:
            return Object.assign({}, state, { post_success: true });

        case UPDATE_PICTURE_SUCCESS:
            return Object.assign({}, state, { update_success: true });

        default:
            return state;
    }
}
