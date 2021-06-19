import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navigation from "./Navigation";
import noDdata from "../assests/nodata.svg";
import { Container } from "@material-ui/core";

export default function Calendar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={1} className={classes.sidebar}>
          <Navigation />
        </Grid>
        <Grid item xs={12} md={10}>
          <Container align="center">
            <img
              src={noDdata}
              alt="page-yet-to-be-created"
              height="80%"
              width="80%"
            />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    background: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
}));
