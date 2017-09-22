// Dependencies
import { SIGNUP_LOGIN_ERROR, LOGIN_ERROR } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case SIGNUP_LOGIN_ERROR:
            return action.payload || state;

        case LOGIN_ERROR:
            return Object.assign({}, state, { error_login: action.payload });

        default:
            return state;
    }
}
