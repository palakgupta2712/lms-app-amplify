import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />
    </Switch>
  );
}
