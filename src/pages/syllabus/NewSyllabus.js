import React, { useContext, useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { SyllabusModel } from "../../models";
import { UserContext } from "../../context/UserContext";
import Amplify, { Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

function NewSyllabus() {
  const { id } = useParams();
  const user = useContext(UserContext);
  const [file, setFile] = useState();
  const hiddenFileInput = React.useRef(null);

  async function uploadSyllabus() {
    const filename = file.name.split(".");
    const updatedFilename =
      filename[0] + Math.round(new Date().getTime() / 1000) + "." + filename[1];
    const KEY = `${id}/syllabus/${updatedFilename}`;

    await Storage.put(KEY, file, {
      progressCallback(progress) {
        if (progress.loaded === progress.total) {
        }
      },
    }).then(
      await DataStore.save(
        new SyllabusModel({
          title: "title",
          S3Key: KEY,
          courseID: id,
          uploadedBy: user.username,
          uploadedAt: new Date().toLocaleString(),
        })
      )
    );
    setFile("");
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <React.Fragment>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box style={{ marginTop: "20px" }}>
          <Button color="primary" variant="outlined" onClick={handleClick}>
            Add Syllabus
          </Button>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
            accept=".pdf,.docx"
          />
        </Box>
        <Box>
          {file && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <CheckCircleIcon style={{ color: "green" }} />
              <Typography>{file.name}</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "10px" }}
                onClick={uploadSyllabus}
              >
                Save
              </Button>
            </div>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default NewSyllabus;
