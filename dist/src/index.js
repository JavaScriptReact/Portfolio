import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./styles/styl/style.css";

function Application() {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
