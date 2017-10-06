// Dependencies
import { FETCH_USER_SUCCESS, UPDATE_PROFILE_SUCCESS } from "../constants/profiles_types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return action.payload || false;

        case UPDATE_PROFILE_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
