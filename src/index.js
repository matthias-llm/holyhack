import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NaMeeting from "./components/NaMeeting";
import reportWebVitals from "./reportWebVitals";
import Tijdens from "./components/tijdens_page";

ReactDOM.render(
  <React.StrictMode>
    <Tijdens />
    <NaMeeting />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
