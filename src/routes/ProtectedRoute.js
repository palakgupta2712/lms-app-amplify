import Auth from "@aws-amplify/auth";
import { DataStore } from "@aws-amplify/datastore";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Error404 from "../components/Error404";
import { User } from "../models";
import { isLoggedIn } from "./isLoggedIn";

function ProtectedRoute({ component: Component, ...rest }) {
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    const user = await Auth.currentAuthenticatedUser();
    const currentUser = (await DataStore.query(User)).filter(
      (c) => c.username === user.username
    );
    setCurrentUser(currentUser);
  }

  return isLoggedIn() ? (
    <>
      {currentUser.map((user, index) => (
        <div key={index}>
          <Route
            {...rest}
            render={(props) =>
              user.isEducator ? <Component {...props} /> : <Error404 />
            }
          />
        </div>
      ))}
    </>
  ) : (
    <Redirect to="/signin" />
  );
}
export default ProtectedRoute;
