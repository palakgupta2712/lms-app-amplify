import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import Topic from "../components/Topic";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute path="/home" component={Home} />
      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />
      <PrivateRoute path="/topic/" component={Topic} />
    </Switch>
  );
}
