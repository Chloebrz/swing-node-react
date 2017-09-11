// Dependencies
import { FETCH_ERRORS } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_ERRORS:
            return Object.assign({}, state, { login_error: action.payload });

        default:
            return state;
    }
}
