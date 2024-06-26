import { cartReducer } from "./cartReducer";
import { showDataReducer } from "./showDataReducer";
import { combineReducers } from "redux";
import { wishlistReducer } from "./wishlistReducer";

const rootReducer = combineReducers({
  showDataReducer,
  cartReducer,
  wishlistReducer
});

export default rootReducer;
