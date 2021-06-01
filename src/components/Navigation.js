import React from "react";
import {
  Box,
  IconButton,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import Auth from "@aws-amplify/auth";
import SignoutButton from "./SignoutButton";
const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  navlink: {
    textDecoration: "none",
    color: "white",

    "&:hover": {
      fontWeight: "bold",
      color: theme.palette.secondary.main,
    },
  },
  navActive: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.nav}>
        <NavLink
          to="/account"
          activeClassName={classes.navActive}
          className={classes.navlink}
        >
          <Box align="center" m={2}>
            <AccountCircleOutlinedIcon fontSize="large" />
            <Typography>Account</Typography>
          </Box>
        </NavLink>

        <NavLink
          to="/dashboard"
          activeClassName={classes.navActive}
          className={classes.navlink}
        >
          <Box align="center" m={2}>
            <DashboardRoundedIcon fontSize="large" />
            <Typography>Dashboard</Typography>
          </Box>
        </NavLink>
        <Box align="center" m={2}>
          <NavLink
            to="/courses"
            activeClassName={classes.navActive}
            className={classes.navlink}
          >
            <LibraryBooksRoundedIcon fontSize="large" />
            <Typography>Courses</Typography>
          </NavLink>
        </Box>
        <Box align="center" m={2}>
          <NavLink
            to="/calendar"
            activeClassName={classes.navActive}
            className={classes.navlink}
          >
            <DateRangeRoundedIcon fontSize="large" />
            <Typography>Calendar</Typography>
          </NavLink>
        </Box>

        <Box align="center" m={2}>
          <NavLink
            to="/connect"
            activeClassName={classes.navActive}
            className={classes.navlink}
          >
            <LinkRoundedIcon fontSize="large" />
            <Typography>Connect</Typography>
          </NavLink>
        </Box>
        <Box className={classes.navlink}>
          <SignoutButton />
        </Box>
      </List>
    </div>
  );
}

export default Navigation;
