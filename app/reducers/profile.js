// Dependencies
import {
    FETCH_PROFILE,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_ERROR
} from "../constants/profiles_types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_PROFILE:
            return null;

        case FETCH_PROFILE_SUCCESS:
            return action.payload;

        case FETCH_PROFILE_ERROR:
            return false;

        default:
            return state;
    }
}
