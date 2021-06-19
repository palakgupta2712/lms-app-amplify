import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
  },
}));

export default function SimpleModal({ id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Copy Link");
  const url = window.location.protocol + window.location.host + "/course/" + id;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setButtonText("Copy Link");
    setOpen(false);
  };

  const body = (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className={classes.paper}
    >
      <h2 id="simple-modal-title">Share link with your friends!</h2>
      <TextField
        defaultValue={url}
        variant="outlined"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        style={{ float: "right", margin: "5px" }}
        onClick={() => {
          navigator.clipboard.writeText(url);
          setButtonText("Copied!");
          setTimeout(function () {
            handleClose();
          }, 1000);
        }}
      >
        {buttonText}
      </Button>
    </div>
  );

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        Share
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
