import React from "react";
import { Box, Typography } from "@mui/material";

function InfoPage() {
  return (
    <>
      <Box>
        <Typography variant="h4">Информация о проекте</Typography>
      </Box>
      <Box>
        <Typography paragraph>Учебный проект по Информатике</Typography>
        <Typography paragraph>
          Автор: Артамонова Полина Александровна - 11Б класс.
        </Typography>
      </Box>
    </>
  );
}

export default InfoPage;
