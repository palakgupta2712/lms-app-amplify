import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import Routes from "./routes/Routes";
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}
