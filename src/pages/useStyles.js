import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    background: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  menuButton: {
    position: "fixed",

    padding: "10px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  nav: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
}));
