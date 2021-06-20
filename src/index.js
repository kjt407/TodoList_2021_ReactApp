import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "moment/locale/ko";
import App from "./App";


ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiPickersUtilsProvider>,

  document.getElementById("root")
);
