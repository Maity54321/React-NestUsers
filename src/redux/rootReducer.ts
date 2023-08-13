import { combineReducers } from "redux";
import { userReducer } from "./reducer";
const rootReducers = combineReducers({ userReducer });

export default rootReducers;
