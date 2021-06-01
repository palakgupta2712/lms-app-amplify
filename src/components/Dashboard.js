import React from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div
        style={{
          marginLeft: "120px",
          marginTop: "-20px",
        }}
      >
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
