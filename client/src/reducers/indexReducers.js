import { combineReducers } from "redux";
import auth from "./authReducers";
import message from "./messageReducer";

export default combineReducers({
  auth,
  message,
});