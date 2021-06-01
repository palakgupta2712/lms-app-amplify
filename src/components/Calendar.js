import React from "react";
import Sidebar from "../components/Sidebar";

function Calendar() {
  return (
    <div>
      <Sidebar />
      <div
        style={{
          marginLeft: "120px",
          marginTop: "-20px",
        }}
      >
        <h1>Calendar</h1>
      </div>
    </div>
  );
}

export default Calendar;
