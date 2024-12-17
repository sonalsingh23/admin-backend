import { combineReducers } from "redux";
import cartSlice from '../Redux/cardSlice';
import addtoCartSlice from "./addtoCartSlice";


const rootReducer = combineReducers({
    Cards:cartSlice,
    Cart:addtoCartSlice,
  
});
export default rootReducer;