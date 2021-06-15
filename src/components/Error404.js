import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
  },
  heading: {
    fontSize: "120px",
    background: "linear-gradient(to right, #C33764 0%, #1D2671 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));
function Error404() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <Typography variant="h1" className={classes.heading}>
          OOPS!
        </Typography>
        <Typography variant="h5">404 - Page not found</Typography>
        <Typography variant="subtitle2"></Typography>
        <Typography variant="body2" gutterBottom>
          Sorry, the page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" color="primary" style={{ margin: "20px" }}>
          <Link to="/" className={classes.link}>
            Back to home
          </Link>
        </Button>
        - O R -
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Error404;
