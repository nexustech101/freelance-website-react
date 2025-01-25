import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing exceptional services, delivering
            unparalleled value, and building long-lasting relationships with our
            clients.
          </p>
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedIn />
            </a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h2>Newsletter</h2>
          <p>
            Subscribe to our newsletter to stay updated on our latest news and
            offers.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
