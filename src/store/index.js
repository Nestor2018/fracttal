import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./user";
import employeesSlice from "./employees";
import logSlice from './log'

const reducer = combineReducers({
  user: userSlice,
  employees: employeesSlice,
  log: logSlice
});

const persistConfig = {
  key: "root3",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
