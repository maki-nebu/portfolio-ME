import React from 'react';
import Profile from './profile';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import './Home.css';
import Education from './Education';
import PhotoPage from '../PhotoPage';
import Contact from './Contact';
import Last from './Last';

export default function Home({ theme, toggleTheme }) {
  return (
    <div className="home-container">
      {/* Navbar & Hero Section with Blue Line Divider */}
      <Profile 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* About Section */}
      <div id="about" className="section-wrapper">
        <About />
      </div>

      {/* Projects Section */}
      <div id="projects" className="section-wrapper">
        <Project />
      </div>

      {/* Skills Section */}
      <div id="skills" className="section-wrapper">
        <Skills />
      </div>

      {/* Education Section */}
      <div id="education" className="section-wrapper">
        <Education />
      </div>

      {/* Modeling Photo Gallery Section */}
      <div id="photo" className="section-wrapper">
        <PhotoPage />
      </div>

      {/* Contact Section */}
      <div id="contact" className="section-wrapper">
        <Contact />
      </div>

      {/* Footer */}
      <Last />
    </div>
  );
}
