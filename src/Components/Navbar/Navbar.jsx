import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={assets.Food_logo} className="logo" alt="Logo" />

      {/* Combined menu for both desktop and mobile */}
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={() => handleMenuClick("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => handleMenuClick("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => handleMenuClick("Mobile-app")}
            className={menu === "Mobile-app" ? "active" : ""}
          >
            Mobile-app
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => handleMenuClick("ContactUs")}
            className={menu === "ContactUs" ? "active" : ""}
          >
            ContactUs
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="Search" />
        </div>
        <div className="navbar-shopping-icon">
          <img
            src={assets.shopping}
            className="shopping-icon"
            alt="Shopping Cart"
          />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SignIn</button>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
