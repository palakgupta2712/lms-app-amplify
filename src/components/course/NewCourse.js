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
import { DataStore } from "@aws-amplify/datastore";
import { Course, CourseStatus } from "../../models";
import { UserContext } from "../../context/UserContext";

const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.up("md")]: {
      minWidth: 500,
    },
  },
}));

export default function NewCourse() {
  const user = useContext(UserContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitle("");
    setDesc("");
    setOpen(false);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    await DataStore.save(
      new Course({
        title: title,
        desc: desc,
        introduction: "",
        createdBy: user.username,
        createdAt: new Date().toLocaleString(),
        User: user,
        status: CourseStatus.DRAFT,
        enrolledStudents: user.id,
      })
    );
    setTitle("");
    setDesc("");
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
        <AddIcon /> &nbsp; Add Course
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.form}>
          <DialogTitle id="form-dialog-title">Create New Course</DialogTitle>
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
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
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
