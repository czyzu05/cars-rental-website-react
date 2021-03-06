import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth < 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/cars-rental-website-react"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            RENT-CAR
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/cars-rental-website-react"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fleet" className="nav-links" onClick={closeMobileMenu}>
                Fleet
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/offer" className="nav-links" onClick={closeMobileMenu}>
                Offer
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
