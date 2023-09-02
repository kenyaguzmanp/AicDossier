import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

import artworksSlice from "./slices/artworksSlice";

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
  reducer: {
    artworks: artworksSlice,
  },
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

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch