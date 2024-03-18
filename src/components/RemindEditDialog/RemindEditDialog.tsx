import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { RemindEditDialogProps } from "./RemindEditDialog.props";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addReminde } from "../../redux/features/reminde.slice";

export default function RemindEditDialog({
  open,
  setOpen,
  isAdd = true,
}: RemindEditDialogProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dateTrigger, setDateTrigger] = useState<Dayjs | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDateTrigger(null);
  };

  const handleClose = () => {
    clearForm();
    setOpen(false);
  };

  const handleSave = () => {
    const createDate = new Date();
    dispatch(
      addReminde({
        id: createDate.getTime(),
        title,
        description,
        dateTrigger,
      })
    );
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>
        {isAdd ? "Добавить напоминание" : "Редактировать напоминание"}
      </DialogTitle>
      <DialogContent>
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
        <Box sx={{ paddingY: 1 }}>
          <DateTimePicker
            label={"Дата напоминания"}
            value={dateTrigger}
            onChange={(newValue) => setDateTrigger(newValue)}
            views={["year", "day", "hours", "minutes"]}
            ampm={false}
            sx={{ width: "100%" }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleSave}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
}
