import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import { useHistory, useParams } from "react-router";

export default function DeleteButton() {
  const [open, setOpen] = useState(false);
  let history = useHistory();
  const { id } = useParams();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  async function handleDelete() {
    const todelete = await DataStore.query(Course, id);
    DataStore.delete(todelete);
    setOpen(false);
    history.goBack();
  }

  return (
    <div>
      <Button
        aria-label="Add Announcement"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        <DeleteIcon style={{ fontSize: "18px" }} /> Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this course?"}
        </DialogTitle>
        <DialogContent>You cannot undo this action!</DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            style={{ background: "#DC3545", color: "white" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
