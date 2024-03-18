import React from "react";
import { AlertRemindProps } from "./AlertRemind.props";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { deleteReminde } from "../../../../redux/features/reminde.slice";
import dayjs, { Dayjs } from "dayjs";

export default function AlertRemind({
  item,
  showAlert,
  setShowAlert,
}: AlertRemindProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const getDate = (displayDate: Dayjs | null) => {
    if (displayDate !== null) {
      return dayjs(displayDate).format("DD.MM.YYYY HH:mm");
    }
    return "";
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  const deleteHandler = (id: number) => {
    dispatch(deleteReminde(id));
    handleClose();
  };

  return (
    <Dialog
      open={showAlert}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{item.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="body1">{item.description}</Typography>
          <Typography variant="caption">{getDate(item.dateTrigger)}</Typography>
        </DialogContentText>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => deleteHandler(item.id)}>
          Удалить напоминание
        </Button>
        <Button onClick={handleClose} autoFocus>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}
