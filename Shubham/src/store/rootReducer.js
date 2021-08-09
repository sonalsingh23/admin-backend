import { combineReducers } from 'redux';
import weatherReducer from './weatherSlice';

export default combineReducers({
  /**Add more reducers here*/
  weather: weatherReducer,
});
