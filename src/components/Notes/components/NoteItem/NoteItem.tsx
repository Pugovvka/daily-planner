import React from "react";
import { NoteItemProps } from "./NoteItem.props";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { deleteNote } from "../../../../redux/features/note.slice";

export default function NoteItem({ item }: NoteItemProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const deleteHandler = (id: number) => {
    dispatch(deleteNote(id));
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {new Date(item.id).toDateString()}
        </Typography>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>

        <Typography variant="body2">{item.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteHandler(item.id)}>
          Удалить заметку
        </Button>
      </CardActions>
    </Card>
  );
}
