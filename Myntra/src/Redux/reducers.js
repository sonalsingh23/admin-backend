import { combineReducers } from "redux";
import cartSlice from '../Redux/cardSlice';


const rootReducer = combineReducers({
    Cards:cartSlice,
  
});
export default rootReducer;