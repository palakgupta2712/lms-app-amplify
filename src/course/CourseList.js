import React, { useEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { Course } from "../models";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

function CourseList() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  async function getCourses() {
    const models = await DataStore.query(Course, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    });
    setCourses(models);
  }
  return (
    <Container maxWidth="md" style={{ marginTop: "50px", display: "flex" }}>
      <Grid container spacing={2}>
        {courses.map((course) => (
          <Grid item xs={12} md={4}>
            <Card>
              <div
                style={{ background: "pink", width: "100%", height: "20vh" }}
              ></div>
              <CardHeader
                avatar={
                  <Avatar>{course.createdBy.charAt(0).toUpperCase()}</Avatar>
                }
                title={course.title}
                subheader={"By " + course.createdBy}
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {course.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                >
                  <Link
                    to={`/course/${course.id}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Continue <ArrowForwardIosIcon fontSize="small" />
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CourseList;
