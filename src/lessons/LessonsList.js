import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import NewLesson from "./NewLesson";
import { DataStore } from "@aws-amplify/datastore";
import { Lesson } from "../models";
import { useParams } from "react-router";
import { Avatar, Card, CardHeader, Grid, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { UserContext } from "../context/UserContext";

function Lessons() {
  let { id } = useParams();
  const user = useContext(UserContext);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons();
  }, []);
  async function getLessons() {
    const models = (await DataStore.query(Lesson)).filter(
      (c) => c.courseID === id
    );
    setLessons(models);
  }

  async function handleDelete(id) {
    const modelToDelete = await DataStore.query(Lesson, id);
    DataStore.delete(modelToDelete);
  }
  return (
    <React.Fragment>
      <div>
        <div>{user.isEducator && <NewLesson />}</div>
        <div>
          <Grid container>
            {lessons.map((lesson, index) => (
              <Grid
                item
                xs={12}
                md={12}
                style={{ margin: "10px", padding: "30px" }}
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default Lessons;
