import React, { useState } from "react";
import { NoteEditDialogProps } from "./NoteEditDialog.props";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addNote } from "../../redux/features/note.slice";

export default function NoteEditDialog({
  open,
  setOpen,
  isAdd = true,
}: NoteEditDialogProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const clearForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleClose = () => {
    clearForm();
    setOpen(false);
  };

  const handleSave = () => {
    const createDate = new Date();
    dispatch(
      addNote({
        id: createDate.getTime(),
        title,
        description,
      })
    );
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>
        {isAdd ? "Добавить заметку" : "Редактировать заметку"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Ваша заметка</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Заголовок"
          type="text"
          value={title}
          onChange={(text) => {
            setTitle(text.currentTarget.value);
          }}
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="description"
          label="Описание"
          fullWidth
          multiline
          rows={5}
          value={description}
          type="text"
          onChange={(text) => {
            setDescription(text.currentTarget.value);
          }}
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleSave}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
}
