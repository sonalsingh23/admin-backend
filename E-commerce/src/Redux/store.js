import { configureStore, Tuple } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers';
import logger from 'redux-logger'
import { loginSlice } from './loginSlice';
import {thunk} from "redux-thunk";
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};


const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
let persistor = persistStore(store)
 
export { store, persistor };