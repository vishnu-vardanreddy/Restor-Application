import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            className="company-logo"
            src={assets.Food_logo}
            alt="Company Logo"
          />
          <img
            src={assets.Feast_logo}
            alt="Feast Logo"
            className="company-logo-text"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            cupiditate corrupti doloribus tempora, quas eligendi ab obcaecati
            dignissimos natus, facere, sunt adipisci omnis culpa provident
            assumenda sed quam distinctio quos?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigateTo("/")}>Home</li>
            <li onClick={() => navigateTo("/about")}>About Us</li>
            <li onClick={() => navigateTo("/delivery")}>Delivery</li>
            <li onClick={() => navigateTo("/privacy-policy")}>
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <address>
            <ul>
              <li>+91-9900887766</li>
              <li>
                <a href="mailto:vodocodo@gmail.com">vodocodo@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
      <p className="footer-copy-right">
        Copyright 2024 © VodoCodo.com All-rights-reserved
      </p>
    </div>
  );
};

export default Footer;
