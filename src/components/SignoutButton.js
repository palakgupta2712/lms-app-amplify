import React from "react";
import Auth from "@aws-amplify/auth";
import { Box, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function SignoutButton() {
  return (
    <div>
      <Box
        align="center"
        m={2}
        onClick={() => {
          Auth.signOut();
          window.location.reload();
          localStorage.removeItem("auth");
        }}
        style={{ cursor: "pointer" }}
      >
        <ExitToAppIcon fontSize="large" />
        <Typography>Logout</Typography>
      </Box>
    </div>
  );
}

export default SignoutButton;
