// Dependencies
import { POST_PICTURE_SUCCESS } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case POST_PICTURE_SUCCESS:
            return Object.assign({}, state, {
                post_success: true
            });
        default:
            return state;
    }
}
