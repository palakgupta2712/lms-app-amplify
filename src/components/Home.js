import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import Navigation from "./Navigation";
import LandingPage from "./landingPage/LandingPage";
import { isLoggedIn } from "../routes/isLoggedIn";
import home from "../assests/home.svg";
import { Link } from "react-router-dom";

export default function Account() {
  const classes = useStyles();

  return !isLoggedIn() ? (
    <LandingPage />
  ) : (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={1} className={classes.sidebar}>
          <Navigation />
        </Grid>
        <Grid item xs={12} md={10}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={home} alt="home-page" height="70%" width="50%" />
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                EXPLORE
              </Button>
            </Link>
          </div>
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
