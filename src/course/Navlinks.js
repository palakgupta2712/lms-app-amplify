import React from "react";
import { CssBaseline, List, ListItem, makeStyles } from "@material-ui/core";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function Navlinks() {
  let classes = useStyles();
  let { id } = useParams();
  return (
    <React.Fragment>
      <CssBaseline />
      <List>
        <ListItem>
          <NavLink
            to={`/course/${id}/announcements`}
            activeClassName={classes.activeLinks}
            className={classes.links}
          >
            Announcements
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={`/course/${id}/assignments`}
            activeClassName={classes.activeLinks}
            className={classes.links}
          >
            Assignments
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={`/course/${id}/lessons`}
            activeClassName={classes.activeLinks}
            className={classes.links}
          >
            Lessons
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={`/course/${id}/discussions`}
            activeClassName={classes.activeLinks}
            className={classes.links}
          >
            Discussion
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={`/course/${id}/syllabus`}
            activeClassName={classes.activeLinks}
            className={classes.links}
          >
            Syllabus
          </NavLink>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default Navlinks;

const useStyles = makeStyles({
  navlinks: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    paddingTop: "50px",
    width: "160px",
    height: "100vh",
    position: "fixed",
  },
  links: {
    padding: "5px",
    "&:hover": {
      fontWeight: "bold",
    },
  },
  activeLinks: {
    fontWeight: "bold",
    color: "black",
    borderLeft: "3px solid black",
    padding: "5px",
  },
});
