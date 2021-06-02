import React from "react";
import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";

function Course() {
  let { id } = useParams();
  return (
    <React.Fragment>
      <Sidebar />
      <div
        style={{
          marginLeft: "120px",
        }}
      >
        {id}
      </div>
    </React.Fragment>
  );
}

export default Course;
