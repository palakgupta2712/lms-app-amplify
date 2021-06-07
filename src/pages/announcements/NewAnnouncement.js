import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { AnnouncementsModel } from "../../models";
import { UserContext } from "../../context/UserContext";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.up("md")]: {
      minWidth: 500,
    },
  },
}));

export default function NewAnnouncement() {
  const user = useContext(UserContext);
  const classes = useStyles();
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    setOpen(false);
  };
  function onEditorStateChange(editorState) {
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    await DataStore.save(
      new AnnouncementsModel({
        title: title,
        content: content,
        createdAt: new Date().toLocaleString(),
        courseID: id,
        User: user,
      })
    );
    setTitle("");
    setContent("");
    setEditorState("");
    setOpen(false);
  }
  return (
    <div>
      <Button
        aria-label="Add Announcement"
        color="primary"
        variant="contained"
        onClick={handleOpen}
        style={{ float: "right", margin: "20px" }}
      >
        <AddIcon /> &nbsp; New Announcement
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.form}>
          <DialogTitle id="form-dialog-title">
            Create New Announcement
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <Editor
              style={{ height: "350px", boxSizing: "content-box" }}
              editorState={editorState}
              toolbarClassName="rdw-editor-toolbar"
              wrapperClassName="wrapper-class"
              editorClassName="home-editor rdw-editor-main"
              onEditorStateChange={onEditorStateChange}
              placeholder="Enter the description..."
              toolbar={{
                options: [
                  "inline",
                  "blockType",
                  "fontSize",
                  "list",
                  "textAlign",
                ],
                inline: { inDropdown: false },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Add
            </Button>
            <Button onClick={handleClose} color="primary" variant="outlined">
              Cancel
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
// import { makeStyles } from "@material-ui/core/styles";
// import { useParams } from "react-router";
// import { DataStore } from "@aws-amplify/datastore";
// import { Lesson } from "../../models";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// const useStyles = makeStyles((theme) => ({
//   form: {
//     [theme.breakpoints.up("md")]: {
//       minWidth: 500,
//     },
//   },
// }));

// export default function NewLesson(props) {
//   const classes = useStyles();
//   let { id } = useParams();
//   const [open, setOpen] = useState(false);
//   const [title, setTitle] = useState();
//   const [summary, setSummary] = useState();
//   const [url, setURL] = useState();
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setTitle("");
//     setSummary("");
//     setURL("");
//     setOpen(false);
//   };

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await DataStore.save(
//       new Lesson({
//         title: title,
//         summary: summary,
//         videoURL: url,
//         courseID: id,
//       })
//     );
//     setTitle("");
//     setSummary("");
//     setEditorState("");
//     setURL("");
//     setOpen(false);
//   }
//   function onEditorStateChange(editorState) {
//     setSummary(draftToHtml(convertToRaw(editorState.getCurrentContent())));
//     setEditorState(editorState);
//   }
//   return (
//     <div>
//       <Button
//         aria-label="Add Lesson"
//         color="primary"
//         variant="contained"
//         onClick={handleOpen}
//         style={{ float: "right", margin: "20px" }}
//       >
//         <AddIcon /> &nbsp; New Lesson
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <div className={classes.form}>
//           <DialogTitle id="form-dialog-title">Add New Lesson</DialogTitle>
//           <DialogContent>
//             <TextField
//               margin="dense"
//               label="Title"
//               type="text"
//               fullWidth
//               value={title}
//               onChange={(event) => setTitle(event.target.value)}
//             />
//             <br />
//             {/* <TextField
//               margin="dense"
//               label="Content"
//               type="text"
//               multiline
//               rows="5"
//               fullWidth
//               value={summary}
//               onChange={(event) => setSummary(event.target.value)}
//             /> */}

//             <Editor
//               style={{ height: "350px", boxSizing: "content-box" }}
//               editorState={editorState}
//               toolbarClassName="rdw-editor-toolbar"
//               wrapperClassName="wrapper-class"
//               editorClassName="home-editor rdw-editor-main"
//               onEditorStateChange={onEditorStateChange}
//               placeholder="Enter the description..."
//               toolbar={{
//                 options: [
//                   "inline",
//                   "blockType",
//                   "fontSize",
//                   "list",
//                   "textAlign",
//                 ],
//                 inline: { inDropdown: false },
//                 list: { inDropdown: true },
//                 textAlign: { inDropdown: true },
//                 link: { inDropdown: true },
//                 history: { inDropdown: true },
//               }}
//             />
//             <TextField
//               margin="dense"
//               label="Resource link"
//               type="text"
//               fullWidth
//               value={url}
//               onChange={(event) => setURL(event.target.value)}
//             />
//             <br />
//           </DialogContent>

//           <DialogActions>
//             <Button onClick={handleSubmit} color="primary" variant="contained">
//               Add
//             </Button>
//             <Button onClick={handleClose} color="primary" variant="outlined">
//               Cancel
//             </Button>
//           </DialogActions>
//         </div>
//       </Dialog>
//     </div>
//   );
// }
