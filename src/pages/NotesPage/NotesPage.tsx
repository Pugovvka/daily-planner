import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Notes from "../../components/Notes/Notes";
import NoteEditDialog from "../../components/NoteEditDialog/NoteEditDialog";

function NotesPage() {
  const [openAddState, setOpenAddState] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Typography variant="h4">Заметки</Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            setOpenAddState(true);
          }}
        >
          Добавить заметку
        </Button>
        <NoteEditDialog
          open={openAddState}
          setOpen={setOpenAddState}
          isAdd={true}
        />
      </Box>
      <Box>
        <Notes />
      </Box>
    </>
  );
}

export default NotesPage;
