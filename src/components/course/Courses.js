import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navigation from "../Navigation";
import CourseList from "./CourseList";
import NewCourse from "./NewCourse";
import { UserContext } from "../../context/UserContext";

export default function Courses() {
  const classes = useStyles();
  const user = useContext(UserContext);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={1} className={classes.sidebar}>
          <Navigation />
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid item>{user.isEducator && <NewCourse />}</Grid>
          <Grid item>
            <CourseList />
          </Grid>
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
