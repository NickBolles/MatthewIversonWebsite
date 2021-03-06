import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: red,
  },

  typography: {
    fontFamily: 'Viga',
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
