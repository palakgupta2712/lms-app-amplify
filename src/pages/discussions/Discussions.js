import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../../utils/useStyles";
import { Box, Drawer, Grid, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Navigation from "../../components/Navigation";
import Navlinks from "../../components/course/Navlinks";
import Breadcrumb from "../../components/Breadcrumb";
import DisplayDiscussions from "./DisplayDiscussions";

export default function Discussions() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        <Grid container xs={12} md={2}>
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
            <DisplayDiscussions />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
