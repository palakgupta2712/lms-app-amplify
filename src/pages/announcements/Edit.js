import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { AnnouncementsModel } from "../../models";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";

function Edit() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const { aID } = useParams();
  let history = useHistory();
  useEffect(() => {
    fetchAnnouncementModels();
  }, []);

  async function fetchAnnouncementModels() {
    const models = await DataStore.query(AnnouncementsModel, aID);
    setTitle(models.title);
    setContent(models.content);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (title === "" || content === "") {
      alert("Cannot be blank!");
    } else {
      const original = await DataStore.query(AnnouncementsModel, aID);

      await DataStore.save(
        AnnouncementsModel.copyOf(original, (updated) => {
          updated.title = title;
          updated.content = content;
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
        Edit Announcement
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
        label="Content"
        type="text"
        multiline
        rows="5"
        fullWidth
        variant="outlined"
        defaultValue={{ content }}
        value={content}
        onChange={(event) => setContent(event.target.value)}
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
