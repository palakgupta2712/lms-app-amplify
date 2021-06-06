import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models";
import Auth from "@aws-amplify/auth";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Account from "../components/account/Account";
import Calendar from "../components/Calendar";
import Connect from "../components/Connect";
import Dashboard from "../components/Dashboard";
import Error404 from "../components/Error404";
import Home from "../components/Home";
import Courses from "../components/course/Courses";
import CourseDetails from "../components/course/CourseDetails";
import EditCourse from "../components/course/EditCourse";
import Assignments from "../pages/Assignments";
import Announcements from "../pages/announcements/Announcements";
import Lessons from "../pages/lessons/Lessons";
import Discussions from "../pages/Discussions";
import Syllabus from "../pages/Syllabus";
import EditAnnouncement from "../pages/announcements/EditAnnouncement";
export default function Routes() {
  let { url } = useRouteMatch();

  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    getUser();
    console.log(url);
  }, []);
  async function getUser() {
    const user = await Auth.currentAuthenticatedUser();
    const currentUser = (await DataStore.query(User)).filter(
      (c) => c.username === user.username
    );
    setCurrentUser(currentUser);
  }
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />

      <PrivateRoute path="/course/:id/assignments" component={Assignments} />
      <PrivateRoute path="/course/:id/discussions" component={Discussions} />
      <PrivateRoute path="/course/:id/syllabus" component={Syllabus} />

      {/* <ProtectedRoute path="/courses/new" component={NewCourse} /> */}

      {currentUser.map((user) => (
        <UserContext.Provider value={user}>
          <Route exact path="/courses/" component={Courses} />
          <PrivateRoute exact path="/course/:id" component={CourseDetails} />
          <PrivateRoute path="/course/:id/edit-course" component={EditCourse} />

          <PrivateRoute path="/dashboard/" component={Dashboard} />
          <PrivateRoute path="/account/" component={Account} />
          <PrivateRoute path="/calendar/" component={Calendar} />
          <PrivateRoute path="/connect/" component={Connect} />
          <PrivateRoute path="/course/:id/lessons" component={Lessons} />
          <PrivateRoute
            exact
            path="/course/:id/announcements"
            component={Announcements}
          />
          <ProtectedRoute
            path="/course/:id/:aID/edit"
            component={EditAnnouncement}
          />
        </UserContext.Provider>
      ))}

      <Route path="*" component={Error404} />
    </Switch>
  );
}
