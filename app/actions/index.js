// Dependencies
import axios from "axios";
import { FETCH_USER, FETCH_PICTURES } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPictures = () => async dispatch => {
    const res = await axios.get("/api/admin/pictures");
    dispatch({ type: FETCH_PICTURES, payload: res.data });
};

export const postPicture = (payload, history) => async dispatch => {
    const res = await axios.post("/api/admin/picture", payload);
    // TODO: redirect to /admin page
};
