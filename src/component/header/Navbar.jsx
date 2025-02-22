
import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = ({ handleOrderNow }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="./images/logoramayan.png" alt="Navbar.Logo" className="logo-img" />
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/booksponsors" className="navbar-link">Book Sponsors</Link>
        {/* <Link to="/about" className="navbar-link">{translations.Navbar.About_Us}</Link> */}
        <Link to="/contact" className="navbar-link">Contact Us</Link>
      </div>
      {/* <div className="ram-img-container">
        <img src="./images/Shri_Ram_Tattoo.png" alt={translations.Navbar.Ram} className="ram-img" />
      </div> */}
    </nav>
  );
};

export default Navbar;

