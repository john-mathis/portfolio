import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/cat.webp";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mack, setMack] = useState("mobile-nav-slider");

  console.log(showMenu);
  console.log(mack);

  const updateMenu = () => {
    if (showMenu) {
      console.log(showMenu);
      setShowMenu(!showMenu);
      setMack("mobile-nav-slider active");
    }
  };

  return (
    <>
      <div className="nav-container">
        <img src={Logo} alt="website logo"></img>
        <span>
          <GiHamburgerMenu
            onClick={() => {
              updateMenu();
            }}
          />
        </span>

        <ul className="desktop-nav">
          <li className="desktop-nav-links">Home</li>
          <li className="desktop-nav-links">Skills</li>
          <li className="desktop-nav-links">About</li>
          <li className="desktop-nav-links">Projects</li>
          <li className="desktop-nav-links">Contact</li>
        </ul>
      </div>

      <div className={mack}>
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
