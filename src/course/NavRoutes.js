import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Announcements from "./pages/Announcements";
import Assignments from "./pages/Assignments";
import Chat from "./pages/Chat";
import Discussions from "./pages/Discussions";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Notes from "./pages/Notes";
import Syllabus from "./pages/Syllabus";
import Zoom from "./pages/Zoom";
function NavRoutes() {
  let { path } = useRouteMatch();

  return (
    <div style={{ width: "100%" }}>
      <Switch>
        <Route path={`${path}/home`} component={Home} />
        <Route path={`${path}/announcements`} component={Announcements} />
        <Route path={`${path}/assignments`} component={Assignments} />
        <Route path={`${path}/lessons`} component={Lessons} />
        <Route path={`${path}/discussions`} component={Discussions} />
        <Route path={`${path}/syllabus`} component={Syllabus} />
        <Route path={`${path}/files`} component={Files} />
        <Route path={`${path}/notes`} component={Notes} />
        <Route path={`${path}/zoom`} component={Zoom} />
        <Route path={`${path}/chat`} component={Chat} />
      </Switch>
    </div>
  );
}

export default NavRoutes;
