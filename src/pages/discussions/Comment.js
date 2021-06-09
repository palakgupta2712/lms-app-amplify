import React, { useContext } from "react";
import { Box, Divider, Paper, Typography } from "@material-ui/core";
import Avatar from "boring-avatars";
import ClearIcon from "@material-ui/icons/Clear";
import { UserContext } from "../../context/UserContext";

function Comment({ comment, handleDelete }) {
  const user = useContext(UserContext);
  return (
    <React.Fragment>
      <Paper elevation={0} style={{ padding: "10px" }}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            name={comment.User.username}
            variant="beam"
            size={35}
            colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant="subtitle2" style={{ fontWeight: "700" }}>
              {comment.User.name}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "gray", fontSize: "13px" }}
            >
              {comment.createdAt}
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: "flex" }}>
          <Box style={{ margin: "5px 40px", padding: "5px" }}>
            <Typography>{comment.comment}</Typography>
          </Box>
          {user.username === comment.User.username && (
            <div
              style={{
                marginLeft: "auto",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(comment.id)}
            >
              <ClearIcon />
            </div>
          )}
        </Box>
        <Divider style={{ marginBottom: "5px" }} />
      </Paper>
    </React.Fragment>
  );
}

export default Comment;
