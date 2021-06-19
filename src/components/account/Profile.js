import React from "react";
import { makeStyles, Container, Grid } from "@material-ui/core";
import Title from "./Title";
import UserDetails from "./UserDetails";
import UneditableDetails from "./UneditableDetails";
import IsEducatorSwitch from "./IsEducatorSwitch";

export default function Profile() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Container maxWidth="sm" className={classes.container}>
          <Title />
          <UserDetails />
          <UneditableDetails />
          <IsEducatorSwitch />
        </Container>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
