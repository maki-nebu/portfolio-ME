import React from 'react';
import './Navbar.css';

export default function AboutMe() {
  return (
    <section className="aboutme-section" id="aboutme">
      <div className="aboutme-header">
        <h2>Who is <span className="highlight">Makda</span>?</h2>
        <p>Let me introduce myself in a way that blends passion, tech & creativity.</p>
      </div>

      <div className="aboutme-content">
        <div className="aboutme-image">
          <img src="/makda-profile.jpg" alt="Makda Nebyu" />
        </div>

        <div className="aboutme-text">
          <h3>✨ A Developer. A Model. A Visionary.</h3>
          <p>
            Hi! I'm Makda Nebyu, a Full Stack Developer and photo model who believes in the power of tech to transform lives. 
            I'm currently studying Software Engineering and working on real-life projects that mix code and creativity.
          </p>
          <p>
            As a woman in tech and fashion, I aim to break barriers and create platforms that empower others — especially young women — 
            to chase their dreams boldly.
          </p>

          <div className="fun-facts">
            <h4>🎯 A few facts about me:</h4>
            <ul>
              <li>💻 Built 5+ full-stack projects (clinic system, quiz system...)</li>
              <li>📸 Modeled for professional photo shoots & brands</li>
              <li>👩🏽‍💻 Learning React, Android & Machine Learning</li>
              <li>🛍️ Building a fashion-tech e-commerce dream</li>
              <li>📖 Bible reader & believer in purpose-driven living</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
