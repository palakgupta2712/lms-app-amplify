import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Published from "./Published";
import AllCourses from "./AllCourses";
import Drafts from "./Drafts";
import { CourseContext } from "../../context/CourseContext";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import { UserContext } from "../../context/UserContext";

function EducatorDashboard() {
  const user = useContext(UserContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      const models = (await DataStore.query(Course)).filter(
        (c) => c.createdBy === user.username
      );
      setCourses(models);
    }
    getCourses();
    const subscription = DataStore.observe(Course).subscribe((msg) => {
      getCourses();
    });
    return () => subscription.unsubscribe();
  }, [user.username]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs"
            centered
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Draft" {...a11yProps(1)} />
            <Tab label="Published" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <CourseContext.Provider value={courses}>
          <TabPanel value={value} index={0}>
            <AllCourses />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Drafts />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Published />
          </TabPanel>
        </CourseContext.Provider>
      </div>
    </Container>
  );
}
export default EducatorDashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "40px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
