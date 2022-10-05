import React from "react";
import "..//Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="max-container-width">
          <ul className="desktop-nav footer">
            <li className="desktop-nav-links">
              <a href="#home">Home</a>
            </li>
            <li className="desktop-nav-links">
              <a href="#skills">Skills</a>
            </li>
            <li className="desktop-nav-links">
              <a href="#about">About</a>
            </li>
            <li className="desktop-nav-links">
              <a href="#projects">Projects</a>
            </li>
            <li className="desktop-nav-links">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <p className="copyright">Developed by John Mathis © 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
