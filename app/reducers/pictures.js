// Dependencies
import {
    FETCH_PICTURES,
    FETCH_PICTURES_SUCCESS,
    POST_PICTURE_SUCCESS,
    DELETE_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS
} from "../constants/pictures_types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_PICTURES:
            return [];

        case FETCH_PICTURES_SUCCESS:
            return state.concat(action.payload);

        case POST_PICTURE_SUCCESS:
            state.push(action.payload);
            return state;

        case DELETE_PICTURE_SUCCESS:
            return state.filter(picture => {
                return picture._id !== action.payload._id;
            });

        case UPDATE_PICTURE_SUCCESS:
            return state.map(picture => {
                return picture._id === action.payload._id ? action.payload : picture;
            });

        default:
            return state;
    }
}
