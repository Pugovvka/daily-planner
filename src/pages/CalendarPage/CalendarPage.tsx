import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Notes from "../../components/Notes/Notes";
import Reminds from "../../components/Reminds/Reminds";
import CalendarActions from "./components/CalendarActionsCard/CalendarActionsCard";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function CalendarPage() {
  return (
    <>
      <Box>
        <Grid container spacing={1} sx={{ marginY: 1 }}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Дата заметок"
              defaultValue={dayjs()}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <CalendarActions />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs sx={{ padding: 3 }}>
            <Typography variant="h5">Заметки </Typography>
            <Box>
              <Notes onlyColumn={true} />
            </Box>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ display: { xs: "none", md: "block" } }}
          />

          <Grid item xs sx={{ padding: 3 }}>
            <Typography variant="h5">Напоминания </Typography>
            <Box>
              <Reminds onlyColumn={true} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CalendarPage;
