import React from "react";
import "./Sidebar.css";
import logoImage from "../assets/logo.png"; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>

      <div className="menu">
        <button className="menu-btn">Meals</button>
        <button className="menu-btn">Ingredients</button>
        <button className="menu-btn">Area</button>
      </div>
    </div>
  );
}

export default Sidebar;
