import React from "react";
import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";

function Course() {
  let { id } = useParams();
  return (
    <React.Fragment>
      <Sidebar />
      <div style={{ marginLeft: "120px" }}>
        <Navbar />
        <div style={{ marginLeft: "180px" }}>{id}</div>
      </div>
    </React.Fragment>
  );
}

export default Course;
