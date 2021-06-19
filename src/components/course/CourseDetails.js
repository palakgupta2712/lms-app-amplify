import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../../utils/useStyles";
import {
  AppBar,
  Box,
  Chip,
  Drawer,
  Grid,
  Hidden,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Navigation from "../Navigation";
import Navlinks from "./Navlinks";
import Breadcrumb from "../Breadcrumb";
import { UserContext } from "../../context/UserContext";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import { useParams } from "react-router";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import CourseIntro from "./CourseIntro";
import PublishButton from "./PublishButton";
import CourseStatus from "./CourseStatus";

export default function CourseDetails() {
  const user = useContext(UserContext);
  const classes = useStyles();
  const theme = useTheme();
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  useEffect(() => {
    async function getCourses() {
      const models = await DataStore.query(Course, id);
      setCourse(models);
    }
    getCourses();
  }, [id]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Navlinks />
    </div>
  );
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={1} className={classes.sidebar}>
          <Hidden smUp>
            <AppBar>
              <Toolbar>
                <Box
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </Box>
              </Toolbar>
            </AppBar>
          </Hidden>

          <Box className={classes.nav}>
            {" "}
            <Navigation />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            {drawer}
          </Hidden>
        </Grid>
        <Grid container xs={12} md={7} className={classes.root}>
          <Grid item xs={12}>
            <Breadcrumb />
          </Grid>
          <Grid item xs={12}>
            {course.createdBy === user.username && user.isEducator && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  margin: "20px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <CourseStatus course={course} />
                {course.status === "DRAFT" && <PublishButton />}
                <EditButton />
                <DeleteButton />
                <Chip
                  label={"Pin:" + course.coursePin}
                  variant="outlined"
                  color="primary"
                />
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            <CourseIntro />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
