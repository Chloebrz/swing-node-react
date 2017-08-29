// Dependencies
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import picturesReducer from "./picturesReducer";
import pathReducer from "./pathReducer";

export default combineReducers({
    auth: authReducer,
    pictures: picturesReducer,
    path: pathReducer
});
