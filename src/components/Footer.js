import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2 className="footer-title">Vithai-17 Foundation</h2>
          <p className="catchy-text">Get in touch with us to join hands to make a change , be the change</p>
        </div>
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
            href="tel:+9092573000"
            className="social-icon"
          >
            <FaPhone />
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
      <div className="footer-bottom">
        <p>&#169; Vithai-17 Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
