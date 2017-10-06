// Dependencies
import {
    FETCH_PICTURE,
    FETCH_PICTURE_SUCCESS,
    FETCH_PICTURE_ERROR
} from "../constants/pictures_types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_PICTURE:
            return null;

        case FETCH_PICTURE_SUCCESS:
            return action.payload;

        case FETCH_PICTURE_ERROR:
            return false;

        default:
            return state;
    }
}
