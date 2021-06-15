import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { Course } from "../models";

function useCourses(id) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  async function getCourses() {
    const models = await DataStore.query(Course, id);
    setCourses(models);
  }
  return courses;
}

export default useCourses;
