// Dependencies
import { FETCH_USER, UPDATE_PROFILE_SUCCESS } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;

        case UPDATE_PROFILE_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
