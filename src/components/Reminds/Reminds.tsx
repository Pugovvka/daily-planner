import React from "react";
import { useAppSelector } from "../../redux/store";
import { Grid } from "@mui/material";
import RemindItem from "./components/RemindItem/Remindtem";
import { RemindsProps } from "./Reminds.props";

export default function Reminds({
  onlyColumn = false,
}: RemindsProps): JSX.Element {
  const remindsState = useAppSelector((state) => state.remindeReducer.reminds);

  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginY: 1,
      }}
      alignItems="stretch"
    >
      {remindsState.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={onlyColumn ? 12 : 6}
          lg={onlyColumn ? 12 : 4}
          key={index}
          sx={{ display: "flex" }}
        >
          <RemindItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
