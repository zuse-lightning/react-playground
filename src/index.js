import React from "react";
// import ReactDOM from "react-dom/client";
import { render } from "react-snapshot";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// );

render(
  <Router>
    <App />
  </Router>, document.getElementById("root"));

reportWebVitals();
