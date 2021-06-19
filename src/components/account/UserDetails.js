import React, { useContext } from "react";
import Avatar from "boring-avatars";
import { UserContext } from "../../context/UserContext";
import { Box, Typography } from "@material-ui/core";
import IsEducatorChip from "../IsEducatorChip";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <React.Fragment>
      <Box
        style={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          style={{ display: "flex", flexDirection: "column", padding: "14px" }}
        >
          <Avatar
            size={60}
            name={user.username}
            variant="beam"
            colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
          />
        </Box>

        <Box
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <Typography style={{ fontWeight: 700 }}>{user.name}</Typography>
          <Typography variant="subtitle2">@{user.username}</Typography>
          <IsEducatorChip />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default UserDetails;
