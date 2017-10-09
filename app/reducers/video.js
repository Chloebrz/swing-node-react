// Dependencies
import { FETCH_VIDEO, FETCH_VIDEO_SUCCESS, FETCH_VIDEO_ERROR } from "../constants/videos_types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_VIDEO:
            return null;

        case FETCH_VIDEO_SUCCESS:
            return action.payload;

        case FETCH_VIDEO_ERROR:
            return false;

        default:
            return state;
    }
}
