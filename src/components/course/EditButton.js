import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { Link, useParams } from "react-router-dom";

export default function EditButton() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        <CreateIcon style={{ fontSize: "18px" }} /> Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to edit this course?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel} color="primary" variant="outlined">
            Cancel
          </Button>
          <Link to={`/course/${id}/edit`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ background: "#12355B", color: "white" }}
            >
              Edit
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
