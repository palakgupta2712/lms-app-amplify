import React, { useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { UserContext } from "../../context/UserContext";
import ReactHtmlParser from "react-html-parser";
import Avatar from "boring-avatars";
import AddComment from "./AddComment";
import DisplayComments from "./DisplayComments";

function Discussion({ discussion, handleDelete }) {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleDelete(discussion.id);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box className={classes.root}>
              <Box className={classes.header}>
                <Avatar
                  style={{ marginRight: "5px" }}
                  size={50}
                  name={discussion.User.username}
                  variant="beam"
                  colors={[
                    "#A70267",
                    "#F10C49",
                    "#FB6B41",
                    "#F6D86B",
                    "#339194",
                  ]}
                />
                <Box>
                  <Typography>{discussion.User.name}</Typography>
                  <Typography variant="subtitle2">
                    {discussion.createdAt}
                  </Typography>
                </Box>
              </Box>
              {user.username === discussion.User.username && (
                <Box className={classes.icons}>
                  <Box>
                    <DeleteIcon
                      onClick={handleClickOpen}
                      className={classes.delete}
                    />
                    <Dialog
                      open={open}
                      onClose={handleCancel}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to delete this post?"}
                      </DialogTitle>
                      <DialogContent></DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleCancel}
                          color="primary"
                          variant="outlined"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          style={{ background: "#DC3545", color: "white" }}
                        >
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                </Box>
              )}
            </Box>
            <Box style={{ marginLeft: "10px" }}>
              <Typography variant="h6" style={{ fontWeight: "700" }}>
                {discussion.title}
              </Typography>
              <Typography variant="body1">
                {ReactHtmlParser(discussion.content)}
              </Typography>
            </Box>
            <Box>
              <AddComment discussionID={discussion.id} />
            </Box>
            <Box>
              <DisplayComments discussionID={discussion.id} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Discussion;

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 0px",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    padding: theme.spacing(2),
  },
  delete: {
    cursor: "pointer",
    "&:hover": { color: "red" },
  },
}));
