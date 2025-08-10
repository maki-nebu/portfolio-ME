import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Profile.css';
import './Navbar.css';

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="/maki-logo-transparent.png"
            alt="Makda Logo"
            className="logo-img"
          />
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#photo" onClick={() => setMenuOpen(false)}>Photo</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li>
            <a href="/resume.pdf" download="MakdaNebyuResume.pdf" onClick={() => setMenuOpen(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Profile Section */}
      <div className='profile-container' id="home">
        <div className='profile-parent'>
          <div className='profile-detail'>
            <div className='profile-details-name'>
              <span className='primary-text'>
                Hello, I'M <span className='highlighted-tex'>Makda</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className='colz-icon'>
              <a href='https://www.linkedin.com/in/makda-nebyu-0452742b7/'><i className='fa fa-linkedin-square'></i></a>
              <a href='https://www.instagram.com/maki_nebu332/'><i className='fa fa-instagram'></i></a>
              <a href='#'><i className='fa fa-youtube-square'></i></a>
              <a href='#'><i className='fa fa-twitter'></i></a>
            </div>

            {/* Role Animation */}
            <div className='profile-details-role'>
              <h1>
                <TypeAnimation
                  sequence={[
                    'Makda Dev',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'Model',
                    1000,
                    'Graphics Designer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building applications with front and back end operations.
              </span>
            </div>

            {/* Buttons */}
            <div className='profile-options'>
              <a href="#photo">
                <button className='btn primary-btn'>Photo</button>
              </a>
              <a href='/resume.pdf' download='MakdaNebyuResume.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className='profile-picture'>
            <div className='profile-picture-background'></div>
          </div>
        </div>
      </div>
    </>
  );
}
