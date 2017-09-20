// Dependencies
import { FETCH_PROFILE_SUCCESS } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_PROFILE_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
