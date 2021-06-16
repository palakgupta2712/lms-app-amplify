import React from "react";
import { CssBaseline, List, ListItem, makeStyles } from "@material-ui/core";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Navlinks() {
  let classes = useStyles();
  let { id } = useParams();
  const user = React.useContext(UserContext);
  return (
    <React.Fragment>
      <CssBaseline />
      <List className={classes.root}>
        <ListItem>
          <NavLink to={`/course/${id}`} className={classes.links}>
            Home
          </NavLink>
        </ListItem>
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
        {user.isEducator && (
          <ListItem>
            <NavLink
              to={`/course/${id}/students`}
              activeClassName={classes.activeLinks}
              className={classes.links}
            >
              Students
            </NavLink>
          </ListItem>
        )}
      </List>
    </React.Fragment>
  );
}

export default Navlinks;

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      left: 100,
      padding: "20px",
    },
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
}));
