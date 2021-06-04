import React from "react";
import Auth from "@aws-amplify/auth";
import { Box, Hidden, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function SignoutButton() {
  return (
    <div>
      <Box
        align="center"
        m={1}
        onClick={() => {
          Auth.signOut();
          window.location.reload();
          localStorage.removeItem("auth");
        }}
        style={{ cursor: "pointer" }}
      >
        <Hidden smDown>
          <ExitToAppIcon fontSize="large" />
        </Hidden>
        <Typography>Logout</Typography>
      </Box>
    </div>
  );
}

export default SignoutButton;
