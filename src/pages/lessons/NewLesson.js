import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { Lesson } from "../../models";
import { UserContext } from "../../context/UserContext";
const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.up("md")]: {
      minWidth: 500,
    },
  },
}));

export default function NewLesson(props) {
  const user = useContext(UserContext);
  const classes = useStyles();
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();
  const [url, setURL] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitle("");
    setSummary("");
    setURL("");
    setOpen(false);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await DataStore.save(
      new Lesson({
        title: title,
        summary: summary,
        videoURL: url,
        courseID: id,
        createdBy: user.username,
      })
    );
    setTitle("");
    setSummary("");
    setURL("");
    setOpen(false);
  }
  return (
    <div>
      <Button
        aria-label="Add Lesson"
        color="primary"
        variant="contained"
        onClick={handleOpen}
        style={{ float: "right", margin: "20px" }}
      >
        <AddIcon /> &nbsp; New Lesson
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.form}>
          <DialogTitle id="form-dialog-title">Add New Lesson</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <TextField
              margin="dense"
              label="Content"
              type="text"
              multiline
              rows="5"
              fullWidth
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
            />
            <br />
            <TextField
              margin="dense"
              label="Resource link"
              type="text"
              fullWidth
              value={url}
              onChange={(event) => setURL(event.target.value)}
            />
            <br />
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
