import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";

function Course() {
  return (
    <React.Fragment>
      <Sidebar />
      <div style={{ marginLeft: "120px" }}>
        <Navbar />
      </div>
    </React.Fragment>
  );
}

export default Course;
