import React from "react";
import "./Last.css";
import { FaHeart, FaCode } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          Makda<span>Nebyu</span>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '500px' }}>
          Bridging Full Stack Software Engineering with Creative Fashion & Editorial Design.
        </p>

        <div className="footer-copyright">
          © {currentYear} Makda Nebyu | Built with <FaCode style={{ color: '#00f2fe', verticalAlign: 'middle' }} /> & <FaHeart style={{ color: '#ec4899', verticalAlign: 'middle' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
