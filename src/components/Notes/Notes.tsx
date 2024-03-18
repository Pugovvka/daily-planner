import React from "react";
import { useAppSelector } from "../../redux/store";
import NoteItem from "./components/NoteItem/NoteItem";
import { Grid } from "@mui/material";
import { NotesProps } from "./Notes.props";

export default function Notes({ onlyColumn = false }: NotesProps): JSX.Element {
  const notesState = useAppSelector((state) => state.noteReducer.notes);

  return (
    <Grid container spacing={1} sx={{ marginY: 1 }} alignItems="stretch">
      {notesState.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={onlyColumn ? 12 : 6}
          lg={onlyColumn ? 12 : 4}
          key={index}
          sx={{ display: "flex" }}
        >
          <NoteItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
