import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import hero from "../../assests/hero.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Hero() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        align="center"
        style={{ background: "#12355B", color: "white", height: "100vh" }}
      >
        <Grid item xs={12}>
          <Container maxWidth="md" style={{ padding: "20px" }}>
            <Typography variant="h3">
              Everything you need to manage your educational institution!
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.subtitle}
            >
              A cloud-based learning management system is a platform intended
              for educational institution for managing their educational
              content.
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <Link
                to="/signin"
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: "16px", marginRight: "5px" }}>
                  Get Started
                </p>{" "}
                <ArrowForwardIosIcon />
              </Link>
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <img src={hero} alt="hero" height="150rem" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "50px 10px 0px 10px",
    padding: "13px 18px",
  },
  subtitle: {
    [theme.breakpoints.up("md")]: {
      padding: "0 120px",
    },
  },
}));
