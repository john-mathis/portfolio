import React from "react";
import "..//Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="max-container-width">
          <ul className="desktop-nav footer">
            <li className="desktop-nav-links">Home</li>
            <li className="desktop-nav-links">Skills</li>
            <li className="desktop-nav-links">About</li>
            <li className="desktop-nav-links">Projects</li>
            <li className="desktop-nav-links">Contact</li>
          </ul>
          <p className="copyright">Developed by John Mathis © 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
