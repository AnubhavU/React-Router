import "./NavBar.css";
import React from "react";
import water from "../Assets/Images/water-43.gif";

const Nav = () => {
  return (
    <div className="navbar">
      <div>
        <img src={water} className="water" alt="water" />
      </div>
    </div>
  );
};

export default Nav;
