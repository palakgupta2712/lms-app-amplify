import React, { useEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { Course } from "../../models";
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
  Tooltip,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import ShareLinkModal from "./ShareLinkModal";
import ReactHtmlParser from "react-html-parser";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
    const subscription = DataStore.observe(Course).subscribe((msg) => {
      getCourses();
    });
    return () => subscription.unsubscribe();
  }, []);

  async function getCourses() {
    const models = await DataStore.query(Course, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    });
    setCourses(models);
  }

  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: "50px", display: "flex" }}>
        <Grid container spacing={2}>
          {courses.map((course, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {ReactHtmlParser(course.desc)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="Like">
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Like">
                    <ShareLinkModal id={course.id} />
                  </Tooltip>
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
    </div>
  );
}

export default CourseList;
