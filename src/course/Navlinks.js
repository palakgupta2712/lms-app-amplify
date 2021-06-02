import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  link: {
    padding: "10px",
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <ul className={classes.links}>
        <NavLink to="/" className={classes.link}>
          Home
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Announcements
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Assignments
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Lessons
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Discussions
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Syllabus
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Files
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Grades
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Notes(Personal)
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Zoom
        </NavLink>
        <NavLink to="/" className={classes.link}>
          Chat
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
