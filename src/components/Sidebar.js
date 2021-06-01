import React from "react";
import Navigation from "./Navigation";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: "absolute",
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    width: "120px",
  },
}));
function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Navigation />
    </div>
  );
}

export default Sidebar;
