import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MainAppBarProps } from "./MainAppBar.props";
import { Menu } from "@mui/icons-material";
import { APP_DRAWER_WIDTH } from "../../store/constants";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { toggleDrawerState } from "../../redux/features/app.slice";

export default function MainAppBar(props: MainAppBarProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const appTitleState = useAppSelector((state) => state.appReducer.appTitle);

  const drawerOpen = () => {
    dispatch(toggleDrawerState());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${APP_DRAWER_WIDTH}px)` },
        ml: { sm: `${APP_DRAWER_WIDTH}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={drawerOpen}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {appTitleState}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
