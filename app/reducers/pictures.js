// Dependencies
import { FETCH_PICTURES, FETCH_PICTURE, DELETE_PICTURE } from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_PICTURES:
            return action.payload;
        case DELETE_PICTURE:
            return state.filter(picture => {
                return picture._id !== action.payload._id;
            });
        case FETCH_PICTURE:
            return [action.payload];
        default:
            return state;
    }
}
