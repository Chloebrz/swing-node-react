// Dependencies
import { FETCH_PICTURES, DELETE_PICTURE } from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_PICTURES:
            return action.payload;
        case DELETE_PICTURE:
            return state.filter(picture => {
                return picture._id !== action.payload.id;
            });
        default:
            return state;
    }
}
