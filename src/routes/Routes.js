import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Error404 from "../components/Error404";
import Home from "../components/Home";
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
      <ProtectedRoute path="/courses/new" component={NewCourse} />

      <Route path="*" component={Error404} />
    </Switch>
  );
}
