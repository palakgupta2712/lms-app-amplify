import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import CourseStatus from "./CourseStatus";
import { Chip } from "@material-ui/core";

function Edit() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [introduction, setIntroduction] = useState();
  const [editorState, setEditorState] = useState();
  const [course, setCourse] = useState([]);
  const [coursePin, setCoursePin] = useState();
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    async function fetchCourse() {
      const models = await DataStore.query(Course, id);
      setCourse(models);
      setTitle(models.title);
      setDesc(models.desc);
      setIntroduction(models.introduction);
      setCoursePin(models.coursePin);

      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(models.introduction)
          )
        )
      );
    }

    fetchCourse();
  }, [id]);

  function onEditorStateChange(editorState) {
    setIntroduction(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (title === "" || desc === "") {
      alert("Cannot be blank!");
    } else {
      const original = await DataStore.query(Course, id);

      await DataStore.save(
        Course.copyOf(original, (updated) => {
          updated.title = title;
          updated.desc = desc;
          updated.introduction = introduction;
          updated.coursePin = coursePin;
        })
      );
      history.goBack();
    }
  }
  function handleCancel() {
    history.goBack();
  }
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" style={{ padding: "20px" }}>
        Edit Course
      </Typography>
      <Box style={{ display: "flex" }}>
        <CourseStatus course={course} />
        <Chip
          label={"Pin:" + course.coursePin}
          variant="outlined"
          color="primary"
          style={{ margin: "0px 10px" }}
        />
      </Box>

      <TextField
        margin="dense"
        label="Title"
        type="text"
        fullWidth
        variant="outlined"
        defaultValue={{ title }}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        margin="dense"
        label="Description"
        type="text"
        fullWidth
        variant="outlined"
        defaultValue={{ desc }}
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      <TextField
        margin="dense"
        label="Course Pin"
        type="number"
        fullWidth
        variant="outlined"
        defaultValue={{ coursePin }}
        value={coursePin}
        onChange={(event) => setCoursePin(event.target.value)}
      />
      <br />
      <Box>
        <Editor
          style={{ height: "350px", boxSizing: "content-box" }}
          editorState={editorState}
          toolbarClassName="rdw-editor-toolbar"
          wrapperClassName="wrapper-class"
          editorClassName="home-editor rdw-editor-main"
          onEditorStateChange={onEditorStateChange}
          placeholder="Enter the description..."
          toolbar={{
            options: ["inline", "blockType", "fontSize", "list", "textAlign"],
            inline: { inDropdown: false },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </Box>
      <Box style={{ display: "flex", marginLeft: "auto", marginTop: "10px" }}>
        <Button
          color="primary"
          variant="outlined"
          style={{ marginRight: "20px" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default Edit;
