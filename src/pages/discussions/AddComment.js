import React, { useContext, useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import Avatar from "boring-avatars";
import { UserContext } from "../../context/UserContext";
import SendIcon from "@material-ui/icons/Send";
import { DataStore } from "@aws-amplify/datastore";
import { CommentModel } from "../../models";

function CommentForm({ discussionID }) {
  const user = useContext(UserContext);
  const [comment, setComment] = useState();

  async function handleSubmit(e) {
    await DataStore.save(
      new CommentModel({
        comment: comment,
        createdBy: user.username,
        createdAt: new Date().toLocaleString(),
        postmodelID: discussionID,
        User: user,
      })
    );
    setComment("");
  }
  return (
    <>
      <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
        <Avatar
          name={user.username}
          variant="beam"
          colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
        />
        <TextField
          id="standard-required"
          variant="outlined"
          size="small"
          label="Add Comment"
          fullWidth
          style={{ margin: "0px 10px" }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <IconButton onClick={handleSubmit}>
          <SendIcon />
        </IconButton>
      </div>
    </>
  );
}

export default CommentForm;
