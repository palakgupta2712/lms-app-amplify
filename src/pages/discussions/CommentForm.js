import { Button, TextField } from "@material-ui/core";
import React from "react";

function CommentForm() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <TextField
          variant="outlined"
          size="small"
          label="Add Comment"
          fullWidth
        />
        <Button>Add</Button>
      </div>
    </>
  );
}

export default CommentForm;
