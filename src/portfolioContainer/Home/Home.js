import React from 'react';
import Profile from './profile';
import Footer from './Footer/Footer';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import './Home.css';
import Education from './Education';
import PhotoPage from '../PhotoPage';
import Contact from './Contact';
import Last from './Last';

export default function Home() {
  return (
    <div>
      <div className='home-container'>
        <Profile />
        <Footer />

        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Project />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="photo">
          <PhotoPage />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Last />
      </div>
    </div>
  );
}
