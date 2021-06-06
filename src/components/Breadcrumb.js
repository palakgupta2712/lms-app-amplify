import { DataStore } from "@aws-amplify/datastore";
import { Breadcrumbs, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Course } from "../models";

function Breadcrumb() {
  const [course, setCourse] = useState([]);
  let { id } = useParams();
  let pathCapitalized = "";

  const pathArray = window.location.pathname.split("/");
  if (pathArray.length === 4) {
    pathCapitalized =
      pathArray[3].charAt(0).toUpperCase() + pathArray[3].slice(1);
  }

  useEffect(() => {
    getCourses();
  }, []);
  async function getCourses() {
    const models = await DataStore.query(Course, id);
    setCourse(models);
  }
  return (
    <div>
      <Breadcrumbs>
        <Link to={`/courses`}>Courses</Link>
        <Link to={`/course/${id}`}>{course.title}</Link>
        <Link>{pathCapitalized}</Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
