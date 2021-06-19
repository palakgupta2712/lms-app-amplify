import { Chip } from "@material-ui/core";
import React from "react";

function isEducatorChip() {
  return (
    <div>
      <Chip label="Deletable secondary" color="secondary" variant="outlined" />
    </div>
  );
}

export default isEducatorChip;
