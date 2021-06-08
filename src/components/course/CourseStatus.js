import React from "react";
import LabelIcon from "@material-ui/icons/Label";
import { Chip } from "@material-ui/core";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function CourseStatus({ course }) {
  return (
    <div>
      {course.status === "PUBLISHED" ? (
        <Chip
          icon={<CheckCircleIcon style={{ color: "rgba(34, 208, 36)" }} />}
          label={course.status}
          variant="outlined"
          style={{
            border: "1px solid rgba(34, 208, 36)",
            background: "rgba(34, 208, 36, 0.2)",
          }}
        />
      ) : (
        <Chip
          icon={<LabelIcon style={{ color: "rgb(0, 123, 255)" }} />}
          label={course.status}
          variant="outlined"
          style={{
            border: "1px solid rgb(0, 123, 255)",
            background: "rgb(0, 123, 255, 0.2)",
          }}
        />
      )}
    </div>
  );
}

export default CourseStatus;
