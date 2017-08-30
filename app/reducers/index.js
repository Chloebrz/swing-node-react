// Dependencies
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import picturesReducer from "./picturesReducer";
import successReducer from "./successReducer";

export default combineReducers({
    auth: authReducer,
    pictures: picturesReducer,
    success: successReducer
});
