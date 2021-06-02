import React from "react";
import { makeStyles } from "@material-ui/core";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

function Navlinks() {
  let classes = useStyles();
  let { url } = useRouteMatch();

  return (
    <React.Fragment>
      <div className={classes.navlinks}>
        <NavLink to={`${url}/home`} className={classes.links}>
          Home
        </NavLink>
        <NavLink to={`${url}/announcements`} className={classes.links}>
          Announcements
        </NavLink>
        <NavLink to={`${url}/assignments`} className={classes.links}>
          Assignments
        </NavLink>
        <NavLink to={`${url}/lessons`} className={classes.links}>
          Lessons
        </NavLink>
        <NavLink to={`${url}/discussions`} className={classes.links}>
          Discussions
        </NavLink>
        <NavLink to={`${url}/syllabus`} className={classes.links}>
          Syllabus
        </NavLink>
        <NavLink to={`${url}/files`} className={classes.links}>
          Files
        </NavLink>
        <NavLink to={`${url}/notes`} className={classes.links}>
          Notes(personal)
        </NavLink>
        <NavLink to={`${url}/zoom`} className={classes.links}>
          Zoom
        </NavLink>
        <NavLink to={`${url}/chat`} className={classes.links}>
          Chat
        </NavLink>
      </div>
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
  },
  links: {
    padding: "10px",
  },
});
