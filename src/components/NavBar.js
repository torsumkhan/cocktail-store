import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Super Cocktail Store 🍸</h1>
        </Link>
        <div className="abt-cnt">
          <Link to="/about">
            <h2>About Us</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact Us</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
