import React, { useEffect, useState } from "react";
import { DataStore, SortDirection } from "@aws-amplify/datastore";
import { Course, CourseStatus } from "../../models";
import {
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
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { Link } from "react-router-dom";
import ShareLinkModal from "./ShareLinkModal";
import ReactHtmlParser from "react-html-parser";
import Avatar from "boring-avatars";
import noDdata from "../../no-data.svg";

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
    const models = await DataStore.query(
      Course,
      (c) => c.status("eq", CourseStatus.PUBLISHED),
      {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
      }
    );
    setCourses(models);
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
                    <Link
                      to={`/course/${course.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
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
                    </Link>
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
                    <CardActions></CardActions>
                    <CardActions>
                      <IconButton>
                        <FavoriteBorderRoundedIcon />
                      </IconButton>

                      <ShareLinkModal id={course.id} />
                      <Link
                        to={`/course/${course.id}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </Link>
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
