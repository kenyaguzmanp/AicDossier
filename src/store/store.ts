import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import artworksSlice from "./slices/artworksSlice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};
const rootReducer = combineReducers({
  artworks: artworksSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({
          serializableCheck: true,
        })
          .concat(createDebugger())
          .concat(thunkMiddleware)
      : getDefaultMiddleware({
          serializableCheck: false,
        })
          .concat(createDebugger())
          .concat(thunkMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch