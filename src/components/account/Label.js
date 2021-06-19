import { Box } from "@material-ui/core";
import React from "react";

function Label({ text }) {
  return (
    <React.Fragment>
      <Box fontWeight={700} style={{ margin: "5px 0px" }}>
        {text}
      </Box>
    </React.Fragment>
  );
}

export default Label;
