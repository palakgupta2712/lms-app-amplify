import { Chip } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function IsEducatorChip() {
  const user = useContext(UserContext);
  return (
    <React.Fragment>
      {user.isEducator ? (
        <Chip
          label="Instructor"
          size="small"
          color="secondary"
          variant="outlined"
          style={{ margin: "2px" }}
        />
      ) : (
        <Chip
          label="Student"
          size="small"
          color="primary"
          variant="outlined"
          style={{ margin: "2px" }}
        />
      )}
    </React.Fragment>
  );
}

export default IsEducatorChip;
