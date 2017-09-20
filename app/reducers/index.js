// Dependencies
import { combineReducers } from "redux";
import auth from "./auth";
import picture from "./picture";
import pictures from "./pictures";
import success from "./success";
import errors from "./errors";
import profile from "./profile";

export default combineReducers({
    auth,
    picture,
    pictures,
    success,
    errors,
    profile
});
