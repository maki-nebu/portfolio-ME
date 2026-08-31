import React, { useEffect, useState } from 'react';
import './Skills.css';
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaJava,
  FaPython,
  FaComments,
  FaUsers,
  FaTasks,
  FaPaintBrush,
  FaCode,
  FaUserAstronaut
} from 'react-icons/fa';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = [
    {
      name: 'React & Frontend',
      description: 'Components, State, Hooks, JSX, Glassmorphism',
      percent: 80,
      icon: <FaReact style={{ color: '#61dafb' }} />,
    },
    {
      name: 'JavaScript (ES6+)',
      description: 'DOM Manipulation, Async/Await, Events',
      percent: 75,
      icon: <FaJsSquare style={{ color: '#f7df1e' }} />,
    },
    {
      name: 'HTML5 & CSS3',
      description: 'Semantic Layouts, Responsive Design, Animations',
      percent: 88,
      icon: <FaHtml5 style={{ color: '#e34c26' }} />,
    },
    {
      name: 'PHP & MySQL',
      description: 'Relational DBs, Queries, CRUD Apps, Laravel',
      percent: 70,
      icon: <FaPhp style={{ color: '#777bb4' }} />,
    },
    {
      name: 'Java Systems',
      description: 'OOP Principles, Swing UI, Java RMI Distributed Systems',
      percent: 65,
      icon: <FaJava style={{ color: '#f89820' }} />,
    },
    {
      name: 'Python',
      description: 'Scripts, Data Structures, Automation',
      percent: 60,
      icon: <FaPython style={{ color: '#3776ab' }} />,
    },
  ];

  const professionalSkills = [
    {
      name: 'Creative Direction & Modeling',
      description: 'Visual Concepts, Styling, Camera Positioning',
      percent: 90,
      icon: <FaPaintBrush style={{ color: '#ec4899' }} />,
    },
    {
      name: 'Communication & Active Listening',
      description: 'Clear Messaging, Technical Documentation',
      percent: 85,
      icon: <FaComments style={{ color: '#00f2fe' }} />,
    },
    {
      name: 'Teamwork & Collaboration',
      description: 'Group Projects, Conflict Resolution, Peer Reviews',
      percent: 80,
      icon: <FaUsers style={{ color: '#10b981' }} />,
    },
    {
      name: 'Project & Time Management',
      description: 'Task Planning, Milestone Tracking, Deadlines',
      percent: 75,
      icon: <FaTasks style={{ color: '#f59e0b' }} />,
    },
  ];

  return (
    <section className="skills-section" id="skills">
      {/* Section Title */}
      <div className="section-title-container">
        <span className="section-subtitle">MY CAPABILITIES</span>
        <h2 className="section-main-title">Skills & Expertise</h2>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-container">
        {/* Technical Skills Card */}
        <div className="skill-category-card animate-fade-in">
          <h3 className="skill-category-title">
            <FaCode /> Technical Development
          </h3>
          <div className="skills-list">
            {technicalSkills.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <div className="skill-header">
                  <div className="skill-name-group">
                    <span className="skill-icon-wrapper">{skill.icon}</span>
                    <div>
                      <div className="skill-name">{skill.name}</div>
                      <span className="skill-subtext">{skill.description}</span>
                    </div>
                  </div>
                  <span className="skill-percentage">{skill.percent}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: animate ? `${skill.percent}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional & Creative Card */}
        <div className="skill-category-card animate-fade-in">
          <h3 className="skill-category-title">
            <FaUserAstronaut style={{ color: '#ec4899' }} /> Professional & Creative
          </h3>
          <div className="skills-list">
            {professionalSkills.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <div className="skill-header">
                  <div className="skill-name-group">
                    <span className="skill-icon-wrapper">{skill.icon}</span>
                    <div>
                      <div className="skill-name">{skill.name}</div>
                      <span className="skill-subtext">{skill.description}</span>
                    </div>
                  </div>
                  <span className="skill-percentage" style={{ color: '#ec4899' }}>
                    {skill.percent}%
                  </span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill purple"
                    style={{ width: animate ? `${skill.percent}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
