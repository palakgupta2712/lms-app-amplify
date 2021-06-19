import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { DataStore } from "aws-amplify";
import { CourseUser } from "../../models";
import StudentCard from "./StudentCard";
import noUser from "../../assests/no-user.svg";
import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  useEffect(() => {
    async function getStudents() {
      const enrolledStudents = (await DataStore.query(CourseUser))
        .filter((pe) => pe.course.id === id)
        .map((pe) => pe.user);
      setEnrolledStudents(enrolledStudents);
    }
    getStudents();
  }, [id]);

  return (
    <React.Fragment>
      <Container maxWidth="md" style={{ marginTop: "50px", display: "flex" }}>
        <Grid container spacing={2}>
          {enrolledStudents.length > 0 ? (
            <>
              {enrolledStudents.map((user, index) => (
                <Grid item xs={12} md={4} key={user.id}>
                  <StudentCard key={index} user={user} />
                </Grid>
              ))}
            </>
          ) : (
            <Container align="center" maxWidth="md">
              <img src={noUser} alt="no-course" height="80%" width="80%" />
              <Typography> No Users Enrolled!</Typography>
            </Container>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default StudentDetails;
