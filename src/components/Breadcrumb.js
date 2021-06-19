import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useCourses from "../customHook/useCourses";

function Breadcrumb() {
  let { id } = useParams();
  const course = useCourses(id);
  let pathCapitalized = "";

  const pathArray = window.location.pathname.split("/");
  if (pathArray.length === 4) {
    pathCapitalized =
      pathArray[3].charAt(0).toUpperCase() + pathArray[3].slice(1);
  }

  return (
    <div>
      <Breadcrumbs style={{ marginTop: "15px", marginLeft: "15px" }}>
        <Link to={`/courses`}>Courses</Link>
        <Link to={`/course/${id}`}>{course.title}</Link>
        <Link>{pathCapitalized}</Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
