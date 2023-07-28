import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="text-xl-center text-sm-center">
        <h4 className="brand-name">Calmness Medic</h4>
        <p className="brand-moto">We Care Your Health</p>
      </div>
      <div>
        <h2 className="links-list">Quick Links</h2>
        <Link to={"/shop"}>
          <h5 className="text-warning">About Us</h5>
          <h5 className="text-warning">Contact Us</h5>
          <h5 className="text-warning">Privacy</h5>
          <h5 className="text-warning">Help & Support</h5>
        </Link>
      </div>
      <div>
        <h2 className="links-list">Follow Us</h2>
        <i className="fab fa-facebook fa-2x social text-primary"></i>
        <i className="fab fa-twitter fa-2x social text-primary"></i>
        <i className="fab fa-instagram fa-2x social text-primary"></i>
      </div>
    </div>
  );
};

export default Footer;
