import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import NewLesson from "./NewLesson";
import { DataStore } from "@aws-amplify/datastore";
import { Lesson } from "../models";
import { useParams } from "react-router";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
function Lessons({ isEducator }) {
  let { id } = useParams();
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
  return (
    <React.Fragment>
      {lessons.map((lesson, index) => (
        <div key={index}>
          {isEducator && <NewLesson />}
          <div>
            <ListItem>
              <ListItemAvatar>
                <Avatar>{index + 1}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={lesson.title} secondary={lesson.summary} />
            </ListItem>

            <ReactPlayer url={lesson.videoURL} style={{ marginLeft: "70px" }} />
            <br />
            <Divider style={{ margin: "20px" }} />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Lessons;
