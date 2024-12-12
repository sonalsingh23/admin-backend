import { combineReducers } from "redux";
import loginSlice from "./loginSlice";
import productSlice from "./productSlice";
import addtocartSlice from "./addtocartSlice";

const rootReducer = combineReducers({
  auth: loginSlice,
  products: productSlice,
  cart: addtocartSlice,
  
});
export default rootReducer;
