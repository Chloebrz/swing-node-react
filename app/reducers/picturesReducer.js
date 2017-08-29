// Dependencies
import { FETCH_PICTURES } from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_PICTURES:
            return action.payload;
        default:
            return state;
    }
}
