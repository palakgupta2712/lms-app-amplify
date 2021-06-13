import React, { useEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { PostModel } from "../../models";
import { useParams } from "react-router";
import NewDiscussion from "./NewDiscussion";
import Discussion from "./Discussion";
import discussionImg from "./discussionImg.svg";
import { Box, Typography } from "@material-ui/core";

function DisplayDiscussions() {
  const { id } = useParams();
  const [discussions, setDiscussions] = useState([]);
  useEffect(() => {
    getDiscussions();
    const subscription = DataStore.observe(PostModel).subscribe((msg) => {
      getDiscussions();
    });
    return () => subscription.unsubscribe();
  }, []);

  async function getDiscussions() {
    const models = (
      await DataStore.query(PostModel, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
      })
    ).filter((c) => c.courseID === id);

    setDiscussions(models);
  }
  async function handleDelete(id) {
    const todelete = await DataStore.query(PostModel, id);
    DataStore.delete(todelete);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NewDiscussion />
      {discussions.length > 0 ? (
        <>
          {discussions.map((discussion, index) => (
            <Discussion
              key={index}
              discussion={discussion}
              handleDelete={handleDelete}
            />
          ))}
        </>
      ) : (
        <Box align="center">
          <img
            src={discussionImg}
            alt="no-discussion"
            height="100%"
            width="60%"
          />
          <Typography variant="h5"> No discussion!</Typography>
        </Box>
      )}
    </div>
  );
}

export default DisplayDiscussions;
