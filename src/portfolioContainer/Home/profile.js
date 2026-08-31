import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaGithub, 
  FaEnvelope, 
  FaSun, 
  FaMoon, 
  FaCode, 
  FaCamera, 
  FaDownload, 
  FaBars, 
  FaTimes,
  FaFolderOpen
} from 'react-icons/fa';
import './Profile.css';
import './Navbar.css';

export default function Profile({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Normal Glass Navbar */}
      <nav className="navbar">
        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#photo" onClick={() => setMenuOpen(false)}>Modeling</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li>
            <a 
              href="/resume.pdf" 
              download="MakdaNebyuResume.pdf" 
              onClick={() => setMenuOpen(false)}
              className="nav-resume-btn"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Right Action: Theme Switcher */}
        <div className="header-right">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label="Toggle Dark/Light Theme"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="profile-container" id="home">
        <div className="profile-parent">
          {/* Left Details */}
          <div className="profile-detail animate-fade-in">
            <div className="profile-details-name">
              <h1 className="primary-text">
                Hello, I'm <span className="highlighted-text">Makda Nebyu</span>
              </h1>
            </div>

            {/* Dynamic Role Animation */}
            <div className="profile-details-role">
              <div className="role-heading">
                <TypeAnimation
                  sequence={[
                    'Software Engineer Student',
                    1500,
                    'Full Stack Web Developer',
                    1500,
                    'Fashion & Editorial Model',
                    1500,
                    'Graphics & UI Designer',
                    1500
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <span className="profile-role-tagline">
                I'm Makda Nebyu, a Software Engineering student and aspiring developer passionate about technology, creativity, and building meaningful digital solutions.
              </span>
            </div>

            {/* Social Icons */}
            <div className="social-icons-bar">
              <a 
                href="https://github.com/maki-nebu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-circle"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/makda-nebyu-0452742b7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-circle"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.instagram.com/maki_nebu332/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-circle"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#contact" 
                className="social-icon-circle"
                title="Contact Me"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Decorative Blue Line BEFORE the action buttons */}
            <div className="hero-blue-line"></div>

            {/* Action Buttons (Rendered AFTER the blue line) */}
            <div className="profile-options">
              <a href="#projects" className="btn btn-primary">
                <FaFolderOpen /> View Projects
              </a>
              <a 
                href="/resume.pdf" 
                download="MakdaNebyuResume.pdf" 
                className="btn btn-secondary"
              >
                <FaDownload /> Get Resume
              </a>
            </div>
          </div>

          {/* Right Profile Photo */}
          <div className="profile-picture-container animate-fade-in">
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>

            {/* Floating Decorative Badges */}
            <div className="hero-floating-badge badge-top-right">
              <FaCode style={{ color: '#00f2fe' }} />
              <div>
                <div>Full Stack Dev</div>
                <small style={{ color: 'var(--text-secondary)' }}>Software Engineering</small>
              </div>
            </div>

            <div className="hero-floating-badge badge-bottom-left">
              <FaCamera style={{ color: '#ec4899' }} />
              <div>
                <div>Editorial Model</div>
                <small style={{ color: 'var(--text-secondary)' }}>Fashion & Design</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
