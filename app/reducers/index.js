// Dependencies
import { combineReducers } from "redux";
import auth from "./auth";
import pictures from "./pictures";
import success from "./success";
import errors from "./errors";

export default combineReducers({
    auth,
    pictures,
    success,
    errors
});
