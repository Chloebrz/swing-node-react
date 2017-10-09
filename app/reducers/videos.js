import {
    FETCH_VIDEOS_SUCCESS,
    POST_VIDEO_SUCCESS,
    DELETE_VIDEO_SUCCESS,
    UPDATE_VIDEO_SUCCESS
} from "../constants/videos_types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_VIDEOS_SUCCESS:
            return action.payload;

        case POST_VIDEO_SUCCESS:
            state.push(action.payload);
            return state;

        case DELETE_VIDEO_SUCCESS:
            return state.filter(video => {
                return video._id !== action.payload._id;
            });

        case UPDATE_VIDEO_SUCCESS:
            return state.map(video => {
                return video._id === action.payload._id ? action.payload : video;
            });

        default:
            return state;
    }
}
