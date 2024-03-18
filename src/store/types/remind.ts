import { Dayjs } from "dayjs";

export type Remind = {
  id: number;
  title: string;
  description: string;
  dateTrigger: Dayjs | null;
};
