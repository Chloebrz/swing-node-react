// Dependencies
import { SIGNUP_ERROR, LOGIN_ERROR } from "../constants/profiles_types";

export default function(state = {}, action) {
    switch (action.type) {
        case SIGNUP_ERROR:
            return Object.assign({}, state, { signup_error: action.payload });

        case LOGIN_ERROR:
            return Object.assign({}, state, { login_error: action.payload });

        default:
            return state;
    }
}
