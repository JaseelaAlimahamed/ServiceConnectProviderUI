import { createStore, combineReducers } from "redux";
import authReducer from "./reducer/authReducer";

const rootReducer = combineReducers({
  auth: authReducer, // Make sure the key is "auth"
});

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;
