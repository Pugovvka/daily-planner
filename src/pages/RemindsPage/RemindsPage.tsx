import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Reminds from "../../components/Reminds/Reminds";
import RemindEditDialog from "../../components/RemindEditDialog/RemindEditDialog";

function RemindsPage() {
  const [openAddState, setOpenAddState] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Typography variant="h4">Напоминания</Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            setOpenAddState(true);
          }}
        >
          Добавить напоминание
        </Button>
        <RemindEditDialog
          open={openAddState}
          setOpen={setOpenAddState}
          isAdd={true}
        />
      </Box>
      <Box>
        <Reminds />
      </Box>
    </>
  );
}

export default RemindsPage;
