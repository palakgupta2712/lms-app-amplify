import Auth from "@aws-amplify/auth";
import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  let history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    authenticate();
  }, []);

  function authenticate() {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => history.push("/signin"));
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
