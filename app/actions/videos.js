// Dependencies
import axios from "axios";
import * as types from "../constants/videos_types";

/**
 * Fetch all the videos of the database
 * Send a GET request to /api/admin/videos and dispatch the result as payload of a FETCH_VIDEOS_SUCCESS action
 */
export const fetchVideos = () => async dispatch => {
    dispatch({ type: types.FETCH_VIDEOS });

    try {
        let res = await axios.get("/api/admin/videos");
        dispatch({ type: types.FETCH_VIDEOS_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.FETCH_VIDEOS_ERROR, payload: err });
    }
};

/**
 * Fetch one video of the database given its id
 * Send a GET request to /api/admin/video/:id and dispatch the result as payload of a FETCH_VIDEO action
 */
export const fetchVideo = payload => async dispatch => {
    dispatch({ type: types.FETCH_VIDEO });

    try {
        let res = await axios.get(`/api/admin/video/${payload.id}`);
        dispatch({ type: types.FETCH_VIDEO_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.FETCH_VIDEO_ERROR, payload: err });
    }
};

/**
 * Post a new video to the database
 * Send a POST request to /api/admin/video and dispatch a POST_VIDEO_SUCCESS action when succeedded
 */
export const postVideo = payload => async dispatch => {
    dispatch({ type: types.POST_VIDEO });

    let data = new FormData();
    data.append("file", payload.file);
    data.append("name", payload.name);
    data.append("legend", payload.legend);

    try {
        let res = await axios.post("/api/admin/video", data);
        dispatch({ type: types.POST_VIDEO_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.POST_VIDEO_ERROR, payload: err });
    }
};

/**
 * Delete a video of the database given its id
 * Send a DELETE request to /api/admin/video/:id and dispatch the result as payload of a DELETE_VIDEO action
 */
export const deleteVideo = payload => async dispatch => {
    try {
        let res = await axios.delete(`/api/admin/video/${payload.id}`);
        dispatch({ type: types.DELETE_VIDEO_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.DELETE_VIDEO_ERROR, payload: err });
    }
};

/**
* Update a video of the database given its id
 * Send a PATCH request to /api/admin/video/:id and dispatch a UPDATE_VIDEO_SUCCESS action when succeedded
 */
export const updateVideo = payload => async dispatch => {
    try {
        let res = await axios.patch(`/api/admin/video/${payload.id}`, payload);
        dispatch({ type: types.UPDATE_VIDEO_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.UPDATE_VIDEO_ERROR, payload: err });
    }
};
