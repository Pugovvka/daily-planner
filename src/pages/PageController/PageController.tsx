import React from "react";
import { PAGES } from "../../store/constants";
import NotesPage from "../NotesPage/NotesPage";
import { useAppSelector } from "../../redux/store";
import RemindsPage from "../RemindsPage/RemindsPage";
import InfoPage from "../InfoPage/InfoPage";
import CalendarPage from "../CalendarPage/CalendarPage";

const getPage = (page: PAGES) => {
  switch (page) {
    case PAGES.notes:
      return <NotesPage />;
    case PAGES.reminds:
      return <RemindsPage />;
    case PAGES.calendar:
      return <CalendarPage />;
    case PAGES.info:
      return <InfoPage />;
    default:
      return <NotesPage />;
  }
};

function PageController() {
  const currentPageState = useAppSelector(
    (state) => state.appReducer.currentPage
  );

  return getPage(currentPageState);
}

export default PageController;
