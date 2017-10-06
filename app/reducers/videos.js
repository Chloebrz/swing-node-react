import { FETCH_VIDEOS_SUCCESS, POST_VIDEO_SUCCESS } from "../constants/videos_types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_VIDEOS_SUCCESS:
            return action.payload;

        case POST_VIDEO_SUCCESS:
            state.push(action.payload);
            return state;

        default:
            return state;
    }
}
