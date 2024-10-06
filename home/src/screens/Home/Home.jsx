import React from "react";
import { Navbar } from "../../icons/Navbar";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="me-name">
          <div className="overlap-group">
            <p className="click">Click button to edit profile!</p>
            <div className="rectangle" />
            <div className="text-wrapper">Amelie</div>
            <div className="welcome">Welcome back</div>
          </div>
        </div>
        <img className="wifi" alt="Wifi" src="/img/wifi.svg" />
        <div className="reflect">ContApp</div>
        <div className="overlap">
          <div className="text-wrapper-2">ContApp</div>
          <img className="logo" alt="Logo" src="/img/logo.png" />
        </div>
        <Navbar className="nav-bar" />
      </div>
    </div>
  );
};
