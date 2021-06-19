import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function ContinueButton({ course }) {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "auto", borderRadius: "20px" }}
      >
        <Link
          to={`/course/${course.id}`}
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          Continue
        </Link>
      </Button>
    </React.Fragment>
  );
}

export default ContinueButton;
