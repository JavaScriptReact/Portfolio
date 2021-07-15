import React from "react";
import image from "../images/Error.png";
import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();

  return (
    <div className="error">
      <div>
        <h1 className="header">
          Cannot Get:{" "}
          <span style={{ color: "rgb(0, 162, 255)" }}>{location.pathname}</span>
        </h1>
        <img src={image} alt="Error Page" className="image" />
      </div>
    </div>
  );
}

export default ErrorPage;
