// Dependencies
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import picturesReducer from "./picturesReducer";

export default combineReducers({
    auth: authReducer,
    pictures: picturesReducer
});
