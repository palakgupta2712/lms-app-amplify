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
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { UserContext } from "../../context/UserContext";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Avatar from "boring-avatars";

function Announcement({ announcement, handleDelete }) {
  const { id } = useParams();
  const classes = useStyles();
  const user = useContext(UserContext);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleCancelEdit = () => {
    setOpenEdit(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleDelete(announcement.id);
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
                  name={announcement.User.username}
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
                  <Typography>{announcement.User.name}</Typography>
                  <Typography variant="subtitle2">
                    {announcement.createdAt}
                  </Typography>
                </Box>
              </Box>
              {user.username === announcement.User.username && user.isEducator && (
                <Box className={classes.icons}>
                  <Box>
                    <CreateIcon
                      onClick={handleClickOpenEdit}
                      className={classes.edit}
                    />
                    <Dialog
                      open={openEdit}
                      onClose={handleCancelEdit}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to edit this announcement?"}
                      </DialogTitle>

                      <DialogActions>
                        <Button
                          onClick={handleCancelEdit}
                          color="primary"
                          variant="outlined"
                        >
                          Cancel
                        </Button>
                        <Link
                          to={`/course/${id}/${announcement.id}/edit`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            onClick={handleCloseEdit}
                            variant="contained"
                            color="primary"
                            style={{ color: "white" }}
                          >
                            Edit
                          </Button>
                        </Link>
                      </DialogActions>
                    </Dialog>
                  </Box>
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
                        {"Are you sure you want to delete this announcement?"}
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
                {announcement.title}
              </Typography>
              <Typography variant="body1">
                {ReactHtmlParser(announcement.content)}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Announcement;

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
  },
  avatar: {
    background: "#BB7B3E",
    marginRight: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    padding: theme.spacing(2),
    display: "flex",
  },
  delete: {
    cursor: "pointer",
    "&:hover": { color: "red" },
  },
  edit: {
    cursor: "pointer",
    "&:hover": { color: theme.palette.secondary.main },
  },
}));
