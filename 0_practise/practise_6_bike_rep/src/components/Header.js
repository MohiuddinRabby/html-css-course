import React from "react";
import Navlogo from "../img/logo-roar-bikes.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={Navlogo} alt="" />
      </div>
      <div className="header-nav">
        <nav>
          <a href="/" className="nav-button">
            Book Online
          </a>
          <a href="/" className="nav-button">
            About
          </a>
          <a href="/" className="nav-button">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
