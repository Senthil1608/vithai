import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import "../stylesheets/footer.css";
import logo from "../home/emptylogo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <h2 className="footer-title"><span style={{ color: "black" }}>Vithai-17</span> Foundation</h2>
            <p className="catchy-text">Get in touch with us to join hands to make a change, be the change</p>
            
          </div>
          
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Explore</h3>
          <ul className="nav-links">
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/work-culture">Work Culture</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/volunteers">Volunteers</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="footer-links">
            <a
              href="https://in.linkedin.com/company/vithai-17-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:vithai17foundation@gmail.com"
              className="social-icon"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+91 9092573000"
              className="social-icon"
            >
              <FaPhoneAlt />
            </a>
            <a
              href="https://www.instagram.com/vithai17_foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&#169; 2025 Vithai-17 Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;