import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Account from "../components/Account";
import Calendar from "../components/Calendar";
import Connect from "../components/Connect";
import Dashboard from "../components/Dashboard";
import Error404 from "../components/Error404";
import Home from "../components/Home";
import Course from "../course/Course";
import Courses from "../course/Courses";
import NewCourse from "../course/NewCourse";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />
      <PrivateRoute exact path="/courses/" component={Courses} />
      <PrivateRoute path="/course/:id" component={Course} />

      <ProtectedRoute path="/courses/new" component={NewCourse} />

      <PrivateRoute path="/dashboard/" component={Dashboard} />
      <PrivateRoute path="/account/" component={Account} />
      <PrivateRoute path="/calendar/" component={Calendar} />
      <PrivateRoute path="/connect/" component={Connect} />

      <Route path="*" component={Error404} />
    </Switch>
  );
}
