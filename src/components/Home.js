import React from "react";
import { isLoggedIn } from "../routes/isLoggedIn";
import LandingPage from "./LandingPage";
import Sidebar from "./Sidebar";
function Home() {
  return !isLoggedIn() ? (
    <LandingPage />
  ) : (
    <div>
      <Sidebar />
    </div>
  );
}

export default Home;
