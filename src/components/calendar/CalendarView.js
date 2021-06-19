import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "./appointments/appointments";

const currentDate = "2018-07-17";
export default function CalendarView() {
  return (
    <Paper>
      <Scheduler data={appointments}>
        <ViewState currentDate={currentDate} />
        <MonthView />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}
