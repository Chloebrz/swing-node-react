// Dependencies
import axios from "axios";
import * as types from "./types";

/**
 * Fetch the current logged in user
 * Send a GET request to /api/current_user and dispatch the result as payload of a FETCH_USER action
 */
export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get("/api/current_user");
        dispatch({ type: types.FETCH_USER_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.FETCH_USER_ERROR, payload: err });
    }
};

/**
 * Fetch one profile of the database given its id
 * Send a GET request to /api/admin/profile/:id and dispatch the result as payload of a FETCH_PROFILE action
 */
export const fetchProfile = payload => async dispatch => {
    dispatch({ type: types.FETCH_PROFILE });

    try {
        const res = await axios.get(`/api/admin/profile/${payload.id}`);
        dispatch({ type: types.FETCH_PROFILE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.FETCH_PROFILE_ERROR, payload: err });
    }
};

/**
 * Sign up a new user (add the user info to the database)
 * Send a POST request to /auth/signup and dispatch a SIGNUP_LOGIN_SUCCESS action when succeedded
 * If error while creating the new user object dispatch the error data as payload of a SIGNUP_LOGIN_ERROR action
 */
export const signupUser = payload => async dispatch => {
    const res = await axios.post("/auth/signup", payload);
    if (res.data.success) dispatch({ type: types.SIGNUP_LOGIN_SUCCESS });
    else dispatch({ type: types.SIGNUP_ERROR, payload: res.data.error });
};

/**
 * Log up a new user (compare the user info to the one in database)
 * Send a POST request to /auth/login and dispatch a SIGNUP_LOGIN_SUCCESS action when succeedded
 * If error while comparing the info dispatch the error data as payload of a SIGNUP_LOGIN_ERROR action
 */
export const loginUser = payload => async dispatch => {
    const res = await axios.post("/auth/login", payload);
    if (res.data.success) dispatch({ type: types.SIGNUP_LOGIN_SUCCESS });
    else dispatch({ type: types.LOGIN_ERROR, payload: res.data.error });
};

/**
 * Update a profile object of the database given its id
 * Send a PATCH request to /api/admin/profile/:id and dispatch the result as payload of a UPDATE_PROFILE_SUCCESS action
 */
export const updateProfile = payload => async dispatch => {
    try {
        const res = await axios.patch(`/api/admin/profile/${payload.id}`, payload);
        dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: types.UPDATE_PROFILE_ERROR, payload: err });
    }
};

/**
 * Send an email with a link to verify the email adress of the user
 * Send a GET request to /api/token/send and dispatch a TOKEN_SENT action when succeedded
 */
export const sendVerifyToken = () => async dispatch => {
    dispatch({ type: types.SEND_TOKEN });

    try {
        await axios.get("/api/token/send");
        dispatch({ type: types.SEND_TOKEN_SUCCESS });
    } catch (err) {
        dispatch({ type: types.SEND_TOKEN_ERROR, payload: err });
    }
};
