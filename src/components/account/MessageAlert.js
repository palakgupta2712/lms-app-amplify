import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

function MessageAlert({ open, handleClose }) {
  return (
    <div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="success">
            Successfully updated
          </Alert>
        </Snackbar>
      </div>
      ;
    </div>
  );
}

export default MessageAlert;
