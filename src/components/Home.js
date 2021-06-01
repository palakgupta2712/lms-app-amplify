import React from "react";
import { isLoggedIn } from "../routes/isLoggedIn";
import LandingPage from "./LandingPage";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
function Home() {
  return !isLoggedIn() ? (
    <LandingPage />
  ) : (
    <div>
      <Sidebar />
      <div
        style={{
          marginLeft: "120px",
        }}
      >
        <Welcome />
      </div>
    </div>
  );
}

export default Home;
