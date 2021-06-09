import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { PostModel } from "../../models";
import { UserContext } from "../../context/UserContext";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.up("md")]: {
      minWidth: 500,
    },
  },
}));

export default function NewDiscussion() {
  const user = useContext(UserContext);
  const classes = useStyles();
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setContent("");
    setOpen(false);
  };
  function onEditorStateChange(editorState) {
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    await DataStore.save(
      new PostModel({
        content: content,
        createdAt: new Date().toLocaleString(),
        createdBy: user.username,
        courseID: id,
        User: user,
      })
    );
    setContent("");
    setEditorState("");
    setOpen(false);
  }
  return (
    <div>
      <Button
        aria-label="Add Announcement"
        color="primary"
        variant="contained"
        onClick={handleOpen}
        style={{ float: "right", margin: "20px" }}
      >
        <AddIcon /> &nbsp; Discussion
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.form}>
          <DialogTitle id="form-dialog-title">
            Create New Discussion
          </DialogTitle>
          <DialogContent>
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
                ],
                inline: { inDropdown: false },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Add
            </Button>
            <Button onClick={handleClose} color="primary" variant="outlined">
              Cancel
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
