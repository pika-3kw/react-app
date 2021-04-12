import { combineReducers } from "redux";

import { countReducer } from "./countReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  count: countReducer,
  auth: authReducer,
});

export default rootReducer;
