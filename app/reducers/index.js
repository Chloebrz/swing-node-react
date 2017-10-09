// Dependencies
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";
import picture from "./picture";
import pictures from "./pictures";
import video from "./video";
import videos from "./videos";
import success from "./success";
import errors from "./errors";
import profile from "./profile";

export default combineReducers({
    auth,
    picture,
    pictures,
    video,
    videos,
    success,
    errors,
    profile,
    form: formReducer
});
