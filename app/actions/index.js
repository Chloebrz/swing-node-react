// Dependencies
import axios from "axios";
import { FETCH_USER, POST_PICTURE } from "./types";

export const fetchUser = () => dispatch => {
    axios.get("/api/current_user").then(res => {
        dispatch({ type: FETCH_USER, payload: res.data });
    });
};

export const postPicture = payload => {
    return function(dispatch) {
        axios.post("/admin/picture", payload).then(res => {});
    };
};
