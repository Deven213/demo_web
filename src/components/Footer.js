import React from 'react';
import { Beaker, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="nav-logo">
            <Beaker className="logo-icon" size={24} />
            <span className="brand-text">
              ALCHEMIX<span className="accent-text">GLOBAL</span>
            </span>
          </Link>

          <p className="footer-tagline">
            Chemical Excellence, Global Reach. 印度制造，供应全球.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
            <a href="mailto:info@alchemixglobal.com">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-links">
          <h4>Market Segments</h4>
          <span>Industrial Pharma</span>
          <span>Textile Dyes</span>
          <span>Agricultural Tech</span>
          <span>Specialty Lab</span>
        </div>

        <div className="footer-links">
          <h4>Certifications</h4>
          <p>ISO 9001:2015</p>
          <p>ISO 14001:2015</p>
          <p>REACH Compliant</p>
          <p>FDA Approved Facilities</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>
          &copy; {new Date().getFullYear()} Alchemix Global Pvt. Ltd. All Rights Reserved.
        </p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Export</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
