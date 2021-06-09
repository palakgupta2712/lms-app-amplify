import React, { useEffect, useState } from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import { Grid, Link } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Storage } from "aws-amplify";

function Assignment({ assignment }) {
  const [url, setUrl] = useState();

  useEffect(() => {
    loadFileUrl(assignment);
  }, []);

  const loadFileUrl = async (assignment) => {
    await Storage.get(assignment.S3Key).then((res) => {
      setUrl(res);
      console.log(res);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DescriptionIcon style={{ fontSize: "50px" }} />
      <div style={{ display: "flex", marginTop: "10px" }}>
        {assignment.S3Key.split("/")[1]}
        <Link href={url}>
          <GetAppIcon
            style={{
              marginLeft: "5px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Assignment;
