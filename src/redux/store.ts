import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import appReducer from "./features/app.slice";
import noteReducer from "./features/note.slice";
import remindeReducer from "./features/reminde.slice";

export const store = configureStore({
  reducer: {
    appReducer,
    noteReducer,
    remindeReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
