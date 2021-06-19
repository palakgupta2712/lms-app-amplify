import React, { useContext, useEffect, useState } from "react";
import { DataStore, SortDirection } from "@aws-amplify/datastore";
import { Course, CourseStatus, CourseUser } from "../../models";
import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import { Container, Grid, Typography } from "@material-ui/core";
import { UserContext } from "../../context/UserContext";
import CourseCard from "./CourseCard";
import nodata from "../../assests/no-data.svg";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    getCourses();
    const subscription = DataStore.observe(Course).subscribe((msg) => {
      getCourses();
    });
    return () => subscription.unsubscribe();
  }, []);

  async function getCourses() {
    const models = await DataStore.query(
      Course,
      (c) => c.status("eq", CourseStatus.PUBLISHED),
      {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
      }
    );
    setCourses(models);
  }
  async function handleUpdate(courseID) {
    const models = await DataStore.query(Course, courseID);

    await DataStore.save(
      new CourseUser({
        course: models,
        user: user,
      })
    );
    const updateCourseDetails = {
      id: courseID,
      enrolledStudents: user.id,
    };
    await API.graphql({
      query: mutations.updateCourse,
      variables: { input: updateCourseDetails },
    });
  }
  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: "50px", display: "flex" }}>
        <Grid container spacing={2}>
          {courses.length > 0 ? (
            <>
              {courses.map((course, index) => (
                <Grid item xs={12} md={4} key={course.id}>
                  <CourseCard
                    key={index}
                    course={course}
                    handleUpdate={handleUpdate}
                  />
                </Grid>
              ))}
            </>
          ) : (
            <Container align="center" maxWidth="md">
              <img src={nodata} alt="no-course" height="80%" width="80%" />
              <Typography> No Course!</Typography>
            </Container>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default CourseList;
