import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.Food_logo} className="logo" alt="" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("ContactUs")}
          className={menu === "ContactUs" ? "active" : ""}
        >
          ContactUs
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} />
          <div className="dot"></div>
        </div>
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
