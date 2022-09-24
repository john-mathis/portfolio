import React, { useState, useEffect } from "react";
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

        <ul className="desktop-nav">
          <li className="desktop-nav-links">Home</li>
          <li className="desktop-nav-links">Skills</li>
          <li className="desktop-nav-links">About</li>
          <li className="desktop-nav-links">Projects</li>
          <li className="desktop-nav-links">Contact</li>
        </ul>
      </div>

      <div className={mobileNavSliderClass}>
        <ul className="mobile-nav">
          <li className="mobile-nav-links">Home</li>
          <li className="mobile-nav-links">Skills</li>
          <li className="mobile-nav-links">About</li>
          <li className="mobile-nav-links">Projects</li>
          <li className="mobile-nav-links">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
