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
        <NavLink
          to={`${url}/home`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Home
        </NavLink>
        <NavLink
          to={`${url}/announcements`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Announcements
        </NavLink>
        <NavLink
          to={`${url}/assignments`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Assignments
        </NavLink>
        <NavLink
          to={`${url}/lessons`}
          activeStyle={{}}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Lessons
        </NavLink>
        <NavLink
          to={`${url}/discussions`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Discussions
        </NavLink>
        <NavLink
          to={`${url}/syllabus`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Syllabus
        </NavLink>
        <NavLink
          to={`${url}/files`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Files
        </NavLink>
        <NavLink
          to={`${url}/notes`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Notes(personal)
        </NavLink>
        <NavLink
          to={`${url}/zoom`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
          Zoom
        </NavLink>
        <NavLink
          to={`${url}/chat`}
          activeClassName={classes.activeLinks}
          className={classes.links}
        >
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
    position: "fixed",
  },
  links: {
    padding: "10px",
    "&:hover": {
      fontWeight: "bold",
    },
  },
  activeLinks: {
    fontWeight: "bold",
    color: "black",
    borderLeft: "3px solid black",
  },
});
