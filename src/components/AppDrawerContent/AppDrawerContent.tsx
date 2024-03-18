import React from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { blue } from "@mui/material/colors";

import {
  EditNote,
  InfoOutlined,
  Notifications,
  PermIdentity,
} from "@mui/icons-material";

import { APP_DEFAULT_TITLE, PAGES } from "../../store/constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  setAppTitle,
  setCurrentPage,
  setDrawerState,
} from "../../redux/features/app.slice";

interface IMenuItem {
  text: string;
  icon?: JSX.Element;
  page?: PAGES;
  action?: string;
}

const MENU_ITEMS: IMenuItem[] = [
  {
    text: "Заметки",
    icon: <EditNote />,
    page: PAGES.notes,
  },
  {
    text: "Напоминания",
    icon: <Notifications />,
    page: PAGES.reminds,
  },
  // {
  //   text: "Календарь",
  //   icon: <CalendarMonth />,
  //   page: PAGES.calendar,
  // },
  {
    text: "О проекте",
    icon: <InfoOutlined />,
    page: PAGES.info,
  },
];

export default function AppDrawerContent(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const drawerClose = () => {
    dispatch(setDrawerState(false));
  };

  const pageClickHandle = (menuItem: IMenuItem) => {
    if (menuItem.page) {
      dispatch(setCurrentPage(menuItem.page));
      dispatch(setAppTitle(menuItem.text));
      drawerClose();
    }
  };

  return (
    <>
      <Toolbar>
        <Avatar sx={{ bgcolor: blue[800] }}>
          <PermIdentity />
        </Avatar>
        <Typography sx={{ padding: 1 }}>{APP_DEFAULT_TITLE}</Typography>
      </Toolbar>
      <Divider />
      <List>
        {MENU_ITEMS.map((menuItem) => (
          <ListItem key={menuItem.text} disablePadding>
            <ListItemButton onClick={() => pageClickHandle(menuItem)}>
              {menuItem.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon>}
              <ListItemText primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List></List>
    </>
  );
}
