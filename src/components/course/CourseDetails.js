import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../../utils/useStyles";
import { Box, Drawer, Grid, Hidden } from "@material-ui/core";
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

export default function CourseDetails() {
  const user = useContext(UserContext);
  const classes = useStyles();
  const theme = useTheme();
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  useEffect(() => {
    getCourses();
  }, []);
  async function getCourses() {
    const models = await DataStore.query(Course, id);
    setCourse(models);
  }
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
          <Box
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </Box>
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
        <Grid item xs={12} md={7} className={classes.root}>
          <Grid item xs={12}>
            <Breadcrumb />
          </Grid>
          <Grid item xs={12}>
            {course.createdBy === user.username && (
              <div>
                <DeleteButton />
                <EditButton />
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}