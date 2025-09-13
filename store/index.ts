import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
