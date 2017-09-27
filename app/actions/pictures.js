// Dependencies
import axios from "axios";
import * as types from "./types";

/**
 * Fetch all the pictures of the database
 * Send a POST request to /api/admin/pictures with the loading number and dispatch the result as payload of a FETCH_PICTURES action
 */
export const fetchPictures = payload => async dispatch => {
    if (payload.n === 0) dispatch({ type: types.FETCH_PICTURES });

    try {
        let res = await axios.post("/api/admin/pictures", payload);
        dispatch({ type: types.FETCH_PICTURES_SUCCESS, payload: res.data.pictures });
        if (res.data.last) dispatch({ type: types.FETCH_PICTURES_DONE });
    } catch (err) {
        dispatch({ type: types.FETCH_PICTURES_ERROR, payload: err });
    }
};

/**
 * Fetch the pictures of the database created by a user given his id
 * Send a POST request to /api/admin/pictures/:id with the loading number and dispatch the result as payload of a FETCH_PICTURES action
 */
export const fetchUserPictures = payload => async dispatch => {
    if (payload.n === 0) dispatch({ type: types.FETCH_PICTURES });

    try {
        let res = await axios.post(`/api/admin/pictures/${payload.id}`, payload);
        dispatch({ type: types.FETCH_PICTURES_SUCCESS, payload: res.data.pictures });
        if (res.data.last) dispatch({ type: types.FETCH_PICTURES_DONE });
    } catch (err) {
        dispatch({ type: types.FETCH_PICTURES_ERROR, payload: err });
    }
};

/**
 * Fetch one picture of the database given its id
 * Send a GET request to /api/admin/picture/:id and dispatch the result as payload of a FETCH_PICTURE action
 */
export const fetchPicture = payload => async dispatch => {
    dispatch({ type: types.FETCH_PICTURE });

    try {
        let res = await axios.get(`/api/admin/picture/${payload.id}`);
        dispatch({ type: types.FETCH_PICTURE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.FETCH_PICTURE_ERROR, payload: err });
    }
};

/**
 * Post a new picture to the database
 * Send a POST request to /api/admin/picture and dispatch a POST_PICTURE_SUCCESS action when succeedded
 */
export const postPicture = payload => async dispatch => {
    try {
        let res = await axios.post("/api/admin/picture", payload);
        dispatch({ type: types.POST_PICTURE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.POST_PICTURE_ERROR, payload: err });
    }
};

/**
 * Delete a picture of the database given its id
 * Send a DELETE request to /api/admin/picture/:id and dispatch the result as payload of a DELETE_PICTURE action
 */
export const deletePicture = payload => async dispatch => {
    try {
        let res = await axios.delete(`/api/admin/picture/${payload.id}`);
        dispatch({ type: types.DELETE_PICTURE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.DELETE_PICTURE_ERROR, payload: err });
    }
};

/**
 * Update a picture of the database given its id
 * Send a PATCH request to /api/admin/picture and dispatch a UPDATE_PICTURE_SUCCESS action when succeedded
 */
export const updatePicture = payload => async dispatch => {
    try {
        let res = await axios.patch(`/api/admin/picture/${payload.id}`, payload);
        dispatch({ type: types.UPDATE_PICTURE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.UPDATE_PICTURE_ERROR, payload: err });
    }
};
