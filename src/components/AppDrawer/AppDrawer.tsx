import React from "react";
import { Drawer } from "@mui/material";
import { AppDrawerProps } from "./AppDrawer.props";
import { APP_DRAWER_WIDTH } from "../../store/constants";
import AppDrawerContent from "../AppDrawerContent/AppDrawerContent";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { setDrawerState } from "../../redux/features/app.slice";
import { useDispatch } from "react-redux";

export default function AppDrawer({ window }: AppDrawerProps): JSX.Element {
  const drawerState = useAppSelector((state) => state.appReducer.drawerState);

  const dispatch = useDispatch<AppDispatch>();
  const drawerClose = () => {
    dispatch(setDrawerState(false));
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={drawerState}
        onClose={drawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: APP_DRAWER_WIDTH,
          },
        }}
      >
        <AppDrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: APP_DRAWER_WIDTH,
          },
        }}
        open
      >
        <AppDrawerContent />
      </Drawer>
    </>
  );
}
