import "./NavBar.css";
import React from "react";
import Gallery from "../Gallery";
import Contact from "../Contact";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import BgImage from "./BgImage";
import Error from "../Error";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="topBotomBordersOut red ">
        <NavLink activeClassName="topBotomBordersOut" exact to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="topBotomBordersOut" exact to="/gallery">
          Gallery
        </NavLink>
      </div>

      <Routes>
        <Route exact path="/" element={<BgImage />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default Nav;
