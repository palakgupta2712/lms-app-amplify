import React, { useContext } from "react";
import Avatar from "boring-avatars";
import { UserContext } from "../../context/UserContext";
import { Typography } from "@material-ui/core";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Avatar
          size={60}
          name={user.username}
          variant="beam"
          colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
          style={{ padding: 10 }}
        />

        <div>
          <Typography style={{ fontWeight: 700 }}>{user.name}</Typography>
          <Typography variant="subtitle2">@{user.username}</Typography>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserDetails;
