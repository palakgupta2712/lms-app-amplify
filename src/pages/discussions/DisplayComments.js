import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { CommentModel } from "../../models";
import Comment from "./Comment";
import SmsIcon from "@material-ui/icons/Sms";
import { Box } from "@material-ui/core";

function DisplayComments({ discussionID }) {
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("View");

  useEffect(() => {
    async function getComments() {
      const models = (await DataStore.query(CommentModel)).filter(
        (c) => c.postmodelID === discussionID
      );
      setComments(models);
    }
    getComments();
    const subscription = DataStore.observe(CommentModel).subscribe((msg) => {
      getComments();
    });
    return () => subscription.unsubscribe();
  }, [discussionID]);

  async function handleDelete(id) {
    const todelete = await DataStore.query(CommentModel, id);
    DataStore.delete(todelete);
  }
  return (
    <React.Fragment>
      <Box
        onClick={() => {
          setOpen(!open);
          if (!open) setText("Hide");
          else setText("View");
        }}
      >
        {comments.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <SmsIcon fontSize="small" />
            {text} {comments.length} comment(s)
          </div>
        )}
      </Box>
      {open && (
        <div>
          {comments.map((comment) => (
            <>
              <Comment comment={comment} handleDelete={handleDelete} />
            </>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

export default DisplayComments;
