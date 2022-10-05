import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/cat.webp";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavSliderClass, setMobileNavSliderClass] = useState(
    "mobile-nav-slider hidden"
  );

  const updateMenu = () => {
    if (!showMenu) {
      setMobileNavSliderClass("mobile-nav-slider active");
    } else {
      setMobileNavSliderClass("mobile-nav-slider hidden");
    }
  };

  return (
    <>
      <div className="nav-container">
        <img src={Logo} alt="website logo"></img>

        <GiHamburgerMenu
          className="open-menu-mobile"
          onClick={() => {
            setShowMenu(!showMenu);
            updateMenu();
          }}
        />

        <ul className="desktop-nav desktop">
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
      </div>

      <div className={mobileNavSliderClass}>
        <ul className="mobile-nav">
          <li className="mobile-nav-links">
            <a href="#home">Home</a>
          </li>
          <li className="mobile-nav-links">
            <a href="#skills">Skills</a>
          </li>
          <li className="mobile-nav-links">
            {" "}
            <a href="#about">About</a>
          </li>
          <li className="mobile-nav-links">
            <a href="#projects">Projects</a>
          </li>
          <li className="mobile-nav-links">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
