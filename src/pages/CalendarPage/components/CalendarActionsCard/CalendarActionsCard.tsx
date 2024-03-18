import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import NoteEditDialog from "../../../../components/NoteEditDialog/NoteEditDialog";
import RemindEditDialog from "../../../../components/RemindEditDialog/RemindEditDialog";
import { AddAlert, NoteAdd } from "@mui/icons-material";

export default function CalendarActions(): JSX.Element {
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddRemind, setShowAddRemind] = useState(false);

  const addNoteEvent = () => {
    setShowAddNote(true);
  };

  const addRemindEvent = () => {
    setShowAddRemind(true);
  };

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs>
          <Button
            size="large"
            fullWidth
            variant="contained"
            startIcon={<NoteAdd />}
            onClick={() => addNoteEvent()}
            sx={{ height: "100%" }}
          >
            Добавить заметку
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            size="large"
            fullWidth
            variant="contained"
            startIcon={<AddAlert />}
            onClick={() => addRemindEvent()}
            sx={{ height: "100%" }}
          >
            Добавить напоминание
          </Button>
        </Grid>
      </Grid>
      <NoteEditDialog
        open={showAddNote}
        setOpen={setShowAddNote}
        isAdd={true}
      />
      <RemindEditDialog
        open={showAddRemind}
        setOpen={setShowAddRemind}
        isAdd={true}
      />
    </Box>
  );
}
