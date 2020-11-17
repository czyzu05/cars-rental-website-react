import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to receive our best offer
        </p>
        <div className="footer-subscription-text">
          You can unsubscribe at any time.
        </div>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/contact">Investors</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/contact">Investors</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Fleet</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/contact">Investors</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/contact">Investors</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/cars-rental-website-react" className="social-logo">
              RENT-CAR
            </Link>
          </div>
          <small className="website-rights">&copy; 2020</small>
          <div className="social-icons">
            <Link
              to="/cars-rental-website-react"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              to="/cars-rental-website-react"
              target="_blank"
              aria-label="Instagram"
              className="social-icon-link instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/cars-rental-website-react"
              target="_blank"
              aria-label="Twitter"
              className="social-icon-link twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="/cars-rental-website-react"
              target="_blank"
              aria-label="LinkedIn"
              className="social-icon-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
