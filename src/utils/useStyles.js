import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    background: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      position: "fixed",
    },
  },
  menuButton: {
    color: "white",
    position: "fixed",
    background: theme.palette.primary.main,
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
  root: {
    width: "100% ",
    [theme.breakpoints.up("md")]: {
      marginLeft: "100px",
    },
  },
}));
