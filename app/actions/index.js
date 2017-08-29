// Dependencies
import axios from "axios";
import { FETCH_USER, FETCH_PICTURES, DELETE_PICTURE, POST_PICTURE_SUCCESS } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPictures = () => async dispatch => {
    const res = await axios.get("/api/admin/pictures");
    dispatch({ type: FETCH_PICTURES, payload: res.data });
};

export const postPicture = payload => async dispatch => {
    await axios.post("/api/admin/picture", payload);
    dispatch({ type: POST_PICTURE_SUCCESS });
};

export const deletePicture = payload => async dispatch => {
    await axios.delete(`/api/admin/picture/${payload.id}`);
    dispatch({ type: DELETE_PICTURE, payload });
};
