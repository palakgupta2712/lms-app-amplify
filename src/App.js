import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import Routes from "./routes/Routes";
import { UserContext } from "./context/UserContext";
import Auth from "@aws-amplify/auth";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "./models";
export default function App() {
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
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          {currentUser.map((user) => (
            <UserContext.Provider value={user}>
              <Routes />
            </UserContext.Provider>
          ))}
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}
