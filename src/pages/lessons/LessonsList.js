import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import NewLesson from "./NewLesson";
import { DataStore } from "@aws-amplify/datastore";
import { Lesson } from "../../models";
import { useParams } from "react-router";
import { Avatar, Card, CardHeader, Grid, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { UserContext } from "../../context/UserContext";
import useCourses from "../../customHook/useCourses";

function Lessons() {
  let { id } = useParams();
  const user = useContext(UserContext);
  const [lessons, setLessons] = useState([]);
  const course = useCourses(id);

  useEffect(() => {
    async function getLessons() {
      const models = (await DataStore.query(Lesson)).filter(
        (c) => c.courseID === id
      );
      setLessons(models);
    }

    getLessons();
    const subscription = DataStore.observe(Lesson).subscribe((msg) => {
      getLessons();
    });
    return () => subscription.unsubscribe();
  }, [id]);

  async function handleDelete(id) {
    const modelToDelete = await DataStore.query(Lesson, id);
    DataStore.delete(modelToDelete);
  }
  return (
    <React.Fragment>
      {course.createdBy === user.username && user.isEducator && <NewLesson />}
      <Grid container>
        {lessons.map((lesson, index) => (
          <Grid
            item
            xs={12}
            md={12}
            style={{ margin: "10px", padding: "10px" }}
          >
            <Card>
              <CardHeader
                title={lesson.title}
                subheader={lesson.summary}
                action={
                  user.isEducator && (
                    <div>
                      <IconButton>
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleDelete(lesson.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </div>
                  )
                }
                avatar={<Avatar>{index + 1}</Avatar>}
              />
              <ReactPlayer
                url={lesson.videoURL}
                width="auto"
                style={{ height: "100vh", padding: "20px" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default Lessons;
