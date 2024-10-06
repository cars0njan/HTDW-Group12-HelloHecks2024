/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const NavBar = ({ className }) => {
  return (
    <div className={`nav-bar ${className}`}>
      <img className="search" alt="Search" src="/img/search.svg" />
      <img className="user" alt="User" src="/img/user.svg" />
      <img className="home" alt="Home" src="/img/home.svg" />
    </div>
  );
};
