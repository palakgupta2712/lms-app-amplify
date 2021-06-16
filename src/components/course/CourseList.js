import React, { useContext, useEffect, useState } from "react";
import { DataStore, SortDirection } from "@aws-amplify/datastore";
import { Course, CourseStatus, CourseUser } from "../../models";
import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShareLinkModal from "./ShareLinkModal";
import ReactHtmlParser from "react-html-parser";
import Avatar from "boring-avatars";
import noDdata from "../../no-data.svg";
import { UserContext } from "../../context/UserContext";
import ContinueButton from "./ContinueButton";
import EnrollButton from "./EnrollButton";

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
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar
                          size={60}
                          name={course.createdBy}
                          variant="beam"
                          colors={[
                            "#A70267",
                            "#F10C49",
                            "#FB6B41",
                            "#F6D86B",
                            "#339194",
                          ]}
                        />
                      }
                      title={course.title}
                      fontWeight="900"
                      subheader={"By " + course.createdBy}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Created on : {course.createdAt.split(",")[0]}
                        {ReactHtmlParser(course.desc.length) > 80 ? (
                          <div>
                            {ReactHtmlParser(course.desc.substring(0, 80))}..
                          </div>
                        ) : (
                          <div>{ReactHtmlParser(course.desc)}</div>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "14px",
                      }}
                    >
                      <Button>
                        <FavoriteBorderRoundedIcon />
                      </Button>
                      <ShareLinkModal id={course.id} />

                      {course.enrolledStudents.includes(user.id) ? (
                        <ContinueButton course={course} />
                      ) : (
                        <EnrollButton
                          course={course}
                          handleUpdate={handleUpdate}
                        />
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </>
          ) : (
            <Container align="center" maxWidth="md">
              <img src={noDdata} alt="no-course" height="80%" width="80%" />
              <Typography> No Course!</Typography>
            </Container>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default CourseList;
