import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />{" "}
    </Switch>
  );
}
