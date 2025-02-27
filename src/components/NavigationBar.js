
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/navigationbar.css';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">

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
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contactus">Contact Us</a></li>
         
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
