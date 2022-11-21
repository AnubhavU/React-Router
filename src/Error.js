import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1> Oops! Page Not Found!</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
