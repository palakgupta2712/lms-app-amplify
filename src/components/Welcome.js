import Auth from "@aws-amplify/auth";
import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function Welcome() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  async function getUserData() {
    const userData = await Auth.currentAuthenticatedUser();
    setUser(userData);
  }
  return (
    <div>
      <div
        style={{
          color: "white",
          backgroundImage: "url(/hero.svg)",
          backgroundRepeat: "no-repeat",
          height: "200px",
          padding: "20px",
          justifyContent: "flex-end",
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <Typography variant="h4">Welcome! {user.username} </Typography>
      </div>
    </div>
  );
}

export default Welcome;
