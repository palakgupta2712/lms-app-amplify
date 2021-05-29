import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes />
      </Router>
    </React.Fragment>
  );
}
