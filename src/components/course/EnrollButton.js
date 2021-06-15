import { Box, Button, Modal } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function EnrollButton({ course, handleUpdate }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <Box
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className={classes.paper}
    >
      <h2 id="simple-modal-title">
        Are you sure you want to enroll in this course?
      </h2>
      <Box style={{ float: "right", marginTop: "30px" }}>
        <Button
          variant="outlined"
          color="primary"
          style={{ margin: "0px 14px" }}
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleUpdate(course.id);
            setOpen(false);
          }}
        >
          Yes
        </Button>
      </Box>
    </Box>
  );
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          handleOpen();
        }}
        style={{ marginLeft: "auto", borderRadius: "20px" }}
      >
        Enroll
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </React.Fragment>
  );
}

export default EnrollButton;

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
