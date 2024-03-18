import React from "react";
import { AppLayoutProviderProps } from "./AppLayoutProvider.props";
import { ReduxProvider } from "../../redux/provider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import ru from "dayjs/locale/ru";

dayjs.extend(utc);
dayjs.locale(ru);

export const AppLayoutProvider = ({
  children,
}: AppLayoutProviderProps): JSX.Element => {
  return (
    <ReduxProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <div className="App">{children}</div>
      </LocalizationProvider>
    </ReduxProvider>
  );
};
