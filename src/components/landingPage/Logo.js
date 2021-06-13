import React from "react";
import { makeStyles } from "@material-ui/core";

function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logo}>EduCouch</div>
    </div>
  );
}

export default Logo;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: "18px",
    height: "80px",
    flexWrap: "wrap",
  },
  logo: {
    border: " 2px solid #DDB92A",
    padding: "10px",
    letterSpacing: "6px",
  },
}));
