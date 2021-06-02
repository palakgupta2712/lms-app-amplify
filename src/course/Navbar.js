import React from "react";
import { makeStyles } from "@material-ui/core";
import Navlinks from "./Navlinks";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: "absolute",
    height: "100vh",
    width: "180px",
  },
}));
function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Navlinks />
    </div>
  );
}

export default Navbar;
