import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";

function Edit() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    fetchCourse();
  }, []);

  async function fetchCourse() {
    const models = await DataStore.query(Course, id);
    setTitle(models.title);
    setDesc(models.desc);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (title === "" || desc === "") {
      alert("Cannot be blank!");
    } else {
      const original = await DataStore.query(Course, id);

      await DataStore.save(
        Course.copyOf(original, (updated) => {
          updated.title = title;
          updated.desc = desc;
        })
      );
      history.goBack();
    }
  }
  function handleCancel() {
    history.goBack();
  }
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" style={{ padding: "20px" }}>
        Edit Course
      </Typography>
      <TextField
        margin="dense"
        label="Title"
        type="text"
        fullWidth
        variant="outlined"
        defaultValue={{ title }}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <TextField
        margin="dense"
        label="Description"
        type="text"
        multiline
        rows="5"
        fullWidth
        variant="outlined"
        defaultValue={{ desc }}
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      <Box style={{ display: "flex", marginLeft: "auto", marginTop: "10px" }}>
        <Button
          color="primary"
          variant="outlined"
          style={{ marginRight: "20px" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default Edit;
