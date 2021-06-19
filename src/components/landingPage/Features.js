import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import lms from "../../assests/lms.png";
import lms2 from "../../assests/lms2.png";

import { Typography } from "@material-ui/core";

function Features() {
  const classes = useStyles();

  return (
    <Grid container align="center" className={classes.container}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3">What you'll get</Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} className={classes.img}>
        <img
          src={lms}
          alt="lms"
          height="60%"
          width="40%"
          className={classes.front}
        />
        <img
          src={lms2}
          alt="lms"
          height="60%"
          width="40%"
          className={classes.behind}
        />
      </Grid>
    </Grid>
  );
}

export default Features;

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
    padding: "30px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  img: { marginTop: "auto", marginBottom: "10px" },
  behind: {
    position: "relative",
    right: 50,
    top: 30,
    zIndex: 2,
    borderRadius: "10px",
  },
  front: {
    position: "relative",
    left: 50,
    zIndex: 1,
    borderRadius: "10px",
  },
}));
