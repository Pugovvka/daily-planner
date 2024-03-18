import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Note } from "../../store/types";
import { loadLocalArray } from "../localstore";

const LOCAL_STORAGE_NAME = "notesState";

const saveLocalNotes = (notes: Note[]) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(notes));
};

const localNotes: Note[] = loadLocalArray<Note>(LOCAL_STORAGE_NAME);

interface IInitialState {
  notes: Note[];
}

const initialState: IInitialState = {
  notes: localNotes,
};

export const appSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      saveLocalNotes(state.notes);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      saveLocalNotes(state.notes);
    },
  },
});

export const { addNote, deleteNote } = appSlice.actions;
export default appSlice.reducer;
