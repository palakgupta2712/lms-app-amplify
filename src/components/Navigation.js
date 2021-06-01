import React from "react";
import { Box, List, makeStyles, Typography } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.nav}>
        <Box align="center" m={2}>
          <AccountCircleOutlinedIcon fontSize="large" />
          <Typography>Account</Typography>
        </Box>
        <Box align="center" m={2}>
          <DashboardRoundedIcon fontSize="large" />
          <Typography>Dashboard</Typography>
        </Box>
        <Box align="center" m={2}>
          <LibraryBooksRoundedIcon fontSize="large" />
          <Typography>Courses</Typography>
        </Box>
        <Box align="center" m={2}>
          <DateRangeRoundedIcon fontSize="large" />
          <Typography>Calendar</Typography>
        </Box>
        <Box align="center" m={2}>
          <LinkRoundedIcon fontSize="large" />
          <Typography>Connect</Typography>
        </Box>
      </List>
    </div>
  );
}

export default Navigation;
