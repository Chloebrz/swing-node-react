// Dependencies
import axios from "axios";
import * as types from "./types";

/**
 * Fetch all the pictures of the database
 * Send a GET request to /api/admin/pictures and dispatch the result as payload of a FETCH_PICTURES action
 */
export const fetchPictures = () => async dispatch => {
    const res = await axios.get("/api/admin/pictures");
    dispatch({ type: types.FETCH_PICTURES, payload: res.data });
};

/**
 * Fetch one picture of the database given its id
 * Send a GET request to /api/admin/picture/:id and dispatch the result as payload of a FETCH_PICTURE action
 */
export const fetchPicture = payload => async dispatch => {
    const res = await axios.get(`/api/admin/picture/${payload.id}`);
    dispatch({ type: types.FETCH_PICTURE, payload: res.data });
};

/**
 * Post a new picture to the database
 * Send a POST request to /api/admin/picture and dispatch a POST_PICTURE_SUCCESS action when succeedded
 */
export const postPicture = payload => async dispatch => {
    await axios.post("/api/admin/picture", payload);
    dispatch({ type: types.POST_PICTURE_SUCCESS });
};

/**
 * Delete a picture of the database given its id
 * Send a DELETE request to /api/admin/picture/:id and dispatch the result as payload of a DELETE_PICTURE action
 */
export const deletePicture = payload => async dispatch => {
    const res = await axios.delete(`/api/admin/picture/${payload.id}`);
    dispatch({ type: types.DELETE_PICTURE, payload: res.data });
};

/**
 * Update a picture of the database given its id
 * Send a PATCH request to /api/admin/picture and dispatch a UPDATE_PICTURE_SUCCESS action when succeedded
 */
export const updatePicture = payload => async dispatch => {
    await axios.patch(`/api/admin/picture/${payload.id}`, payload);
    dispatch({ type: types.UPDATE_PICTURE_SUCCESS });
};