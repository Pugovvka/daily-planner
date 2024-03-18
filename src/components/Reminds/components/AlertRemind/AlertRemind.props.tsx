import { Remind } from "../../../../store/types";

export interface AlertRemindProps {
  setShowAlert: (state: boolean) => void;
  showAlert: boolean;
  item: Remind;
}
