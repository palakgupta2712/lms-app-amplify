import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import Topic from "./Topic";
function Home() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to={`${url}/rendering`}
          >
            Rendering with React
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to={`${url}/components`}
          >
            Components
          </NavLink>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route exact path={`${url}/rendering`}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route exact path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
