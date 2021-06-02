import React from "react";
import { Switch, useRouteMatch } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes";
import Announcements from "../pages/Announcements";
import Assignments from "../pages/Assignments";
import Chat from "../pages/Chat";
import Discussions from "../pages/Discussions";
import Files from "../pages/Files";
import Home from "../pages/Home";
import Lessons from "../lessons/Lessons";
import Notes from "../pages/Notes";
import Syllabus from "../pages/Syllabus";
import Zoom from "../pages/Zoom";
function NavRoutes() {
  let { path } = useRouteMatch();

  return (
    <div style={{ width: "100%" }}>
      <Switch>
        <ProtectedRoutes path={`${path}/home`} component={Home} />
        <ProtectedRoutes
          path={`${path}/announcements`}
          component={Announcements}
        />
        <ProtectedRoutes path={`${path}/assignments`} component={Assignments} />
        <ProtectedRoutes path={`${path}/lessons`} component={Lessons} />
        <ProtectedRoutes path={`${path}/discussions`} component={Discussions} />
        <ProtectedRoutes path={`${path}/syllabus`} component={Syllabus} />
        <ProtectedRoutes path={`${path}/files`} component={Files} />
        <ProtectedRoutes path={`${path}/notes`} component={Notes} />
        <ProtectedRoutes path={`${path}/zoom`} component={Zoom} />
        <ProtectedRoutes path={`${path}/chat`} component={Chat} />
      </Switch>
    </div>
  );
}

export default NavRoutes;
