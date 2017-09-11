// Dependencies
import axios from "axios";
import {
    FETCH_USER,
    FETCH_PICTURES,
    FETCH_PICTURE,
    DELETE_PICTURE,
    POST_PICTURE_SUCCESS,
    UPDATE_PICTURE_SUCCESS,
    FETCH_ERRORS
} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPictures = () => async dispatch => {
    const res = await axios.get("/api/admin/pictures");
    dispatch({ type: FETCH_PICTURES, payload: res.data });
};

export const fetchPicture = payload => async dispatch => {
    const res = await axios.get(`/api/admin/picture/${payload.id}`);
    dispatch({ type: FETCH_PICTURE, payload: res.data });
};

export const postPicture = payload => async dispatch => {
    await axios.post("/api/admin/picture", payload);
    dispatch({ type: POST_PICTURE_SUCCESS });
};

export const deletePicture = payload => async dispatch => {
    const res = await axios.delete(`/api/admin/picture/${payload.id}`);
    dispatch({ type: DELETE_PICTURE, payload: res.data });
};

export const updatePicture = payload => async dispatch => {
    await axios.patch(`/api/admin/picture/${payload.id}`, payload);
    dispatch({ type: UPDATE_PICTURE_SUCCESS });
};

export const fetchErrors = () => async dispatch => {
    const res = await axios.get("/api/flash_error");
    dispatch({ type: FETCH_ERRORS, payload: res.data });
};
