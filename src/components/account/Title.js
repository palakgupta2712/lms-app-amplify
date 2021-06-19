import React from "react";
import { Typography } from "@material-ui/core";

function Title() {
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        style={{ textAlign: "center", padding: "20px", fontWeight: "700" }}
      >
        My Account
      </Typography>
    </React.Fragment>
  );
}

export default Title;
