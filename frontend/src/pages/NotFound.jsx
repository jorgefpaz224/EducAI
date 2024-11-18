import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Unexpected Application Error!</h1>
      <h2>404 Not Found</h2>
      <Link to="/">Login</Link>
    </div>
  );
}

export default NotFound;
