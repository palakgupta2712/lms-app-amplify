import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import learn from "../learn.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px",
    flexGrow: 1,
    background: theme.palette.primary.main,
    color: "white",
    scrollBehavior: "smooth",
  },
  button: {
    color: "white",
    margin: theme.spacing(2),
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={7} style={{ padding: "25px" }}>
          <Typography variant="h3">
            {" "}
            Everything you need to manage your educational institution!
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {" "}
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            <Link to="/signup" className={classes.link}>
              Sign Up
            </Link>
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            <Link to="/signin" className={classes.link}>
              Sign In
            </Link>
          </Button>
        </Grid>
        <Grid item xs={5}>
          <img src={learn} alt="error-404" width="410px" height="402px" />
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
