import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Remind } from "../../store/types";
import { loadLocalArray } from "../localstore";

const LOCAL_STORAGE_NAME = "remindState";

const saveLocalReminds = (reminds: Remind[]) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(reminds));
};

const localReminds: Remind[] = loadLocalArray<Remind>(LOCAL_STORAGE_NAME);

interface IInitialState {
  reminds: Remind[];
}

const initialState: IInitialState = {
  reminds: localReminds,
};

export const remindeSlice = createSlice({
  name: "reminde",
  initialState,
  reducers: {
    addReminde: (state, action: PayloadAction<Remind>) => {
      state.reminds.push(action.payload);
      saveLocalReminds(state.reminds);
    },
    deleteReminde: (state, action: PayloadAction<number>) => {
      state.reminds = state.reminds.filter(
        (reminde) => reminde.id !== action.payload
      );
      saveLocalReminds(state.reminds);
    },
  },
});

export const { addReminde, deleteReminde } = remindeSlice.actions;
export default remindeSlice.reducer;
