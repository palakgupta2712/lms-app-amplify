import { Grid, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { DataStore } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { CourseUser } from "../../models";
import CourseCard from "../course/CourseCard";
import nodata from "../../assests/no-data.svg";

function StudentDashboard() {
  const user = useContext(UserContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  useEffect(() => {
    async function getCourses() {
      const enrolledCourses = (await DataStore.query(CourseUser))
        .filter((c) => c.user.id === user.id)
        .map((c) => c.course);
      setEnrolledCourses(enrolledCourses);
    }
    getCourses();
  }, [user.id]);

  return (
    <React.Fragment>
      <Container maxWidth="md" style={{ marginTop: "50px", display: "flex" }}>
        <Grid container spacing={2}>
          {enrolledCourses.length > 0 ? (
            <>
              {enrolledCourses.map((course, index) => (
                <Grid item xs={12} md={4} key={course.id}>
                  <CourseCard key={index} course={course} />
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
    </React.Fragment>
  );
}

export default StudentDashboard;
