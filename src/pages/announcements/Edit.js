import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { AnnouncementsModel } from "../../models";
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

function Edit() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [editorState, setEditorState] = useState();
  const { aID } = useParams();
  let history = useHistory();
  useEffect(() => {
    async function fetchAnnouncementModels() {
      const models = await DataStore.query(AnnouncementsModel, aID);
      setTitle(models.title);
      setContent(models.content);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(models.content))
        )
      );
    }

    fetchAnnouncementModels();
  }, [aID]);

  function onEditorStateChange(editorState) {
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (title === "" || content === "") {
      alert("Cannot be blank!");
    } else {
      const original = await DataStore.query(AnnouncementsModel, aID);

      await DataStore.save(
        AnnouncementsModel.copyOf(original, (updated) => {
          updated.title = title;
          updated.content = content;
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
        Edit Announcement
      </Typography>
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
