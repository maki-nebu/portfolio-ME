import React from 'react';
import './About.css';

const AboutMe = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-header">
        <h3>My Story</h3>
        <h2>About Me</h2>
      </div>

      <div className="about-text">
        <p>
          Hello! I’m <strong>Makda Nebyu</strong>, a passionate software engineering student and aspiring full stack developer. I love building innovative digital solutions and exploring creative paths through both tech and fashion. My mission is to empower others while creating impactful tools that reflect beauty, purpose, and professionalism.
        </p>
      </div>

      <div className="about-facts">
        <ul>
          <li>👩‍💻 I’m a passionate software engineering student dedicated to building impactful digital solutions.</li>
          <li>🧠 With a strong foundation in web development and a love for continuous learning, I blend creativity with technical skills.</li>
          <li>🌍 I aim to make a positive difference in my community through innovative technology and empowering ideas.</li>
        
        </ul>
      </div>

      <div className="expertise-section">
        <h3>My Expertise</h3>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>PHP</span>
          <span>Laravel</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
