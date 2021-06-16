import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navigation from "../Navigation";
import Welcome from "../Welcome";
import EducatorDashboard from "./EducatorDashboard";
import StudentDashboard from "./StudentDashboard";
import { UserContext } from "../../context/UserContext";
import NewCourse from "../course/NewCourse";

export default function Dashboard() {
  const user = useContext(UserContext);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={1} className={classes.sidebar}>
          <Navigation />
        </Grid>
        <Grid item xs={12} md={11}>
          <Welcome />
          {/* New Course button removed from courses */}
          {user.isEducator && <NewCourse />}
          {user.isEducator ? <EducatorDashboard /> : <StudentDashboard />}
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
