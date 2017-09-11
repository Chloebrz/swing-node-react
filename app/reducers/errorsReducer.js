// Dependencies
import { SIGNUP_LOGIN_ERROR } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case SIGNUP_LOGIN_ERROR:
            return action.payload || state;

        default:
            return state;
    }
}
