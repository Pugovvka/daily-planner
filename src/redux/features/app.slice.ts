import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { APP_BAR_TITLE, PAGES } from "../../store/constants";

interface IInitialState {
  drawerState: boolean;
  currentPage: PAGES;
  appTitle: String;
}

const initialState: IInitialState = {
  drawerState: false,
  currentPage: PAGES.notes,
  appTitle: APP_BAR_TITLE,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDrawerState: (state, action: PayloadAction<boolean>) => {
      state.drawerState = action.payload;
    },
    toggleDrawerState: (state) => {
      state.drawerState = !state.drawerState;
    },
    setCurrentPage: (state, action: PayloadAction<PAGES>) => {
      state.currentPage = action.payload;
    },
    setAppTitle: (state, action: PayloadAction<String>) => {
      state.appTitle = action.payload;
    },
  },
});

export const {
  setDrawerState,
  toggleDrawerState,
  setCurrentPage,
  setAppTitle,
} = appSlice.actions;
export default appSlice.reducer;
