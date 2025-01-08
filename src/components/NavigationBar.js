import React, { useState } from "react";
import '../stylesheets/navigationbar.css';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
        <div className="bar">

        </div> 
      <div className="navbar">
        {/* Logo/Title */}
        <div className="navbar-title">
          <span className="title-green">Vithai</span>-<span className="title-black">17</span> Foundation
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="close-icon">×</span> 
          ) : (
            <span className="hamburger-icon">☰</span>
          )}
        </div>

        {/* Menu Items */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
