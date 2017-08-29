// Dependencies
import axios from "axios";
import { browserHistory } from "react-router-dom";
import { FETCH_USER, FETCH_PICTURES, POST_PICTURE } from "./types";

export const fetchUser = () => dispatch => {
    axios.get("/api/current_user").then(res => {
        dispatch({ type: FETCH_USER, payload: res.data });
    });
};

export const fetchPictures = () => dispatch => {
    axios.get("/api/admin/pictures").then(res => {
        dispatch({ type: FETCH_PICTURES, payload: res.data });
    });
};

export const postPicture = (payload, history) => dispatch => {
    axios.post("/api/admin/picture", payload).then(res => {
        // TODO: redirect to /admin page
    });
};
