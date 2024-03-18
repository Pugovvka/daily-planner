import React, { useState } from "react";
import { RemindItemProps } from "./RemindItem.props";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { deleteReminde } from "../../../../redux/features/reminde.slice";
import dayjs, { Dayjs } from "dayjs";
import AlertRemind from "../AlertRemind/AlertRemind";

export default function RemindItem({ item }: RemindItemProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const [showAlert, setShowAlert] = useState<boolean>(false);

  const deleteHandler = (id: number) => {
    dispatch(deleteReminde(id));
  };

  const getDate = (displayDate: Dayjs | null) => {
    if (displayDate !== null) {
      return dayjs(displayDate).format("DD-MM-YYYY HH:mm");
    }
    return "";
  };

  return (
    <>
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

          <Typography variant="body2">{item.title}</Typography>
          <Typography variant="body2">
            <span>{getDate(item.dateTrigger)}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => deleteHandler(item.id)}>
            Удалить напоминание
          </Button>
          <Button size="small" onClick={() => setShowAlert(true)}>
            Демо
          </Button>
        </CardActions>
      </Card>
      <AlertRemind
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        item={item}
      />
    </>
  );
}
