import { cartReducer } from "./cartReducer";
import { showDataReducer } from "./showDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  showDataReducer,
  cartReducer,
});

export default rootReducer;
