import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
function NavRoutes() {
  let { path } = useRouteMatch();

  return (
    <div style={{ width: "100%" }}>
      <Switch>
        <Route path={`${path}/home`}>
          <h1>Home</h1>
        </Route>
        <Route path={`${path}/assignments`}>
          <h1>Assignments</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default NavRoutes;
