import loginStatusReducer from "./tokinLogin";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  loginStatusReducer,
});

export default rootReducer;
