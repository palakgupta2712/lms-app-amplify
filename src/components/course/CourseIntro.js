import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
import { UserContext } from "../../context/UserContext";
import Avatar from "boring-avatars";
import useCourses from "../../customHook/useCourses";

function CourseIntro() {
  const user = useContext(UserContext);
  const [introduction, setIntroduction] = useState();
  const [editorState, setEditorState] = useState();
  const { id } = useParams();
  const course = useCourses(id);

  function onEditorStateChange(editorState) {
    setIntroduction(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const original = await DataStore.query(Course, id);
    await DataStore.save(
      Course.copyOf(original, (updated) => {
        updated.introduction = introduction;
      })
    );
  }

  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">{course.title}</Typography>
        <Typography variant="h6">{course.desc}</Typography>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            margin: "20px",
          }}
        >
          <Typography>Meet your instructor</Typography>
          <Avatar
            size={60}
            name={course.createdBy}
            variant="beam"
            colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
          />
          <Typography>@{course.createdBy}</Typography>
        </Paper>
      </Box>

      {course.introduction === "" ? (
        <Container>
          {course.createdBy === user.username && user.isEducator && (
            <div>
              <Typography
                variant="h5"
                style={{ textAlign: "center", padding: "20px" }}
              >
                Add Introduction to the course
              </Typography>
              <Box>
                <Editor
                  style={{ height: "350px", boxSizing: "content-box" }}
                  row={2}
                  editorState={editorState}
                  toolbarClassName="rdw-editor-toolbar"
                  wrapperClassName="wrapper-class"
                  editorClassName="home-editor rdw-editor-main"
                  onEditorStateChange={onEditorStateChange}
                  placeholder="Enter the description..."
                  toolbar={{
                    options: [
                      "inline",
                      "blockType",
                      "fontSize",
                      "list",
                      "textAlign",
                      "link",
                    ],
                    inline: { inDropdown: false },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                />
              </Box>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                style={{ float: "right", margin: "10px 0px" }}
              >
                Save
              </Button>{" "}
            </div>
          )}
        </Container>
      ) : (
        <Paper style={{ padding: "20px", margin: "20px" }}>
          <Typography>{ReactHtmlParser(course.introduction)}</Typography>
        </Paper>
      )}
    </div>
  );
}

export default CourseIntro;
