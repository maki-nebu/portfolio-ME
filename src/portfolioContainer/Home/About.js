import React from 'react';
import './About.css';
import { FaCode, FaCamera, FaBullhorn, FaMobileAlt, FaBrain, FaAward } from 'react-icons/fa';
import modelVoguePhoto from '../../assets/Home/photo_2026-08-31_13-21-24.jpg';
import marketingPhoto from '../../assets/Home/DSC04035.jpg';

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      {/* Section Title */}
      <div className="section-title-container">
        <span className="section-subtitle">WHO I AM</span>
        <h2 className="section-main-title">About Me</h2>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">

        {/* ── CARD 1: Bio (tall, text only) ── */}
        <div className="bento-card bento-bio">
          <div className="bento-bio-icon-bg"><FaCode /></div>
          <div className="bento-bio-content">
            <span className="bento-tag cyan">Software Engineering Student</span>
            <h3 className="bento-bio-name">Makda<br/>Nebyu</h3>
            <p className="bento-bio-text">
              Aspiring technology professional passionate about building useful digital solutions. Skilled in web development, databases, Java, C++, PHP, JavaScript, HTML &amp; CSS.
            </p>
            <div className="bento-skills-row">
              <span>React</span>
              <span>PHP</span>
              <span>Java</span>
              <span>MySQL</span>
              <span>C++</span>
            </div>
          </div>
        </div>

        {/* ── CARD 2: Tech text panel ── */}
        <div className="bento-card bento-text-card bento-tech-text">
          <span className="bento-tag cyan">Development</span>
          <h4>Full Stack Web Dev</h4>
          <p>
            Turning real-world ideas into functional projects using modern web technologies. Focused on building clean, efficient and scalable applications.
          </p>
        </div>

        {/* ── CARD 3: Future Goals ── */}
        <div className="bento-card bento-future">
          <div className="bento-future-content">
            <span className="bento-tag purple">Currently Exploring</span>
            <div className="bento-future-icons">
              <div className="bento-future-icon">
                <FaBrain />
                <span>Artificial Intelligence</span>
              </div>
              <div className="bento-future-icon">
                <FaMobileAlt />
                <span>Mobile App Dev</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 4: Modeling Vogue photo — photo_2026-08-31 ── */}
        <div className="bento-card bento-photo bento-photo-vogue">
          <img src={modelVoguePhoto} alt="Makda Nebyu — Vogue Modeling" className="bento-img" />
          <div className="bento-photo-label pink-label">
            <FaAward /> Achievement — Vogue Style
          </div>
        </div>

        {/* ── CARD 5: Modeling text ── */}
        <div className="bento-card bento-text-card bento-modeling">
          <span className="bento-tag pink">Modeling &amp; Creative</span>
          <h4>Editorial &amp; Fashion Model</h4>
          <p>
            Fashion and editorial model with a portfolio of professional photoshoots. Creativity and visual storytelling are central to my identity and my design approach.
          </p>
        </div>

        {/* ── CARD 6: Marketing Photo — DSC04035 ── */}
        <div className="bento-card bento-photo bento-photo-marketing">
          <img src={marketingPhoto} alt="Makda Nebyu — Digital Creator" className="bento-img" />
          <div className="bento-photo-label amber-label">
            <FaBullhorn /> Digital Creator
          </div>
        </div>

        {/* ── CARD 7: Marketing text ── */}
        <div className="bento-card bento-text-card bento-marketing">
          <span className="bento-tag amber">Social Media &amp; Marketing</span>
          <h4>Digital Content &amp; Branding</h4>
          <p>
            Interested in social media marketing, personal branding, and content creation — combining creativity with strategy to build an impactful online presence.
          </p>
        </div>

        {/* ── CARD 8: Goal (full width) ── */}
        <div className="bento-card bento-goal">
          <span className="bento-goal-emoji">🎯</span>
          <p>
            Combining <strong>technology, creativity &amp; leadership</strong> to create meaningful digital experiences and make a positive impact.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
