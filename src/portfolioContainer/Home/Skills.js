import React, { useEffect, useState } from 'react';
import './Skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaUsers,
  FaComments,
  FaTasks,
  FaPaintBrush,
} from 'react-icons/fa';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  const technicalSkills = [
    {
      name: 'HTML',
      description: 'Forms, Semantic Markup, Structures',
      percent: 70,
      icon: <FaHtml5 style={{ color: '#e34c26' }} />,
    },
    {
      name: 'CSS',
      description: 'Layout Design, Animations',
      percent: 60,
      icon: <FaCss3Alt style={{ color: '#2965f1' }} />,
    },
    {
      name: 'Javascript',
      description: 'DOM Manipulation, Event Handling',
      percent: 50,
      icon: <FaJsSquare style={{ color: '#f0db4f' }} />,
    },
    {
      name: 'Python',
      description: 'Web Development, Data Analysis',
      percent: 55,
      icon: <FaPython style={{ color: '#3776ab' }} />,
    },
  ];

  const professionalSkills = [
    {
      name: 'Communication',
      description: 'Clear Messaging, Active Listening',
      percent: 85,
      icon: <FaComments style={{ color: '#17a2b8' }} />,
    },
    {
      name: 'Team Work',
      description: 'Collaboration, Conflict Resolution',
      percent: 70,
      icon: <FaUsers style={{ color: '#28a745' }} />,
    },
    {
      name: 'Management',
      description: 'Task Delegation, Time Management',
      percent: 65,
      icon: <FaTasks style={{ color: '#ffc107' }} />,
    },
    {
      name: 'Creativity',
      description: 'Innovative Solutions, Brainstorming',
      percent: 80,
      icon: <FaPaintBrush style={{ color: '#6f42c1' }} />,
    },
  ];

  const getBarColor = (percent) => {
    if (percent < 50) return '#ff4c4c'; // Red
    if (percent < 70) return '#ffd700'; // Yellow
    return '#1e90ff'; // Blue
  };

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const handleHover = () => setAnimate(false);
  const handleOut = () => setTimeout(() => setAnimate(true), 100);

  const renderSkill = (skill, index) => (
    <div
      key={index}
      className="skill-bar"
      onMouseEnter={handleHover}
      onMouseLeave={handleOut}
    >
      <div className="skill-info">
        <span className="skill-icon">{skill.icon}</span>
        <div>
          <strong>{skill.name}</strong>
          <br />
          <small>{skill.description}</small>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-inner"
          style={{
            width: animate ? `${skill.percent}%` : 0,
            backgroundColor: getBarColor(skill.percent),
          }}
        >
          <span className="percent-label">{skill.percent}%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="skills-page">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-sections">
        <div className="skill-card-section">
          <h2>Technical Skills</h2>
          {technicalSkills.map(renderSkill)}
        </div>
        <div className="skill-card-section">
          <h2>Professional Skills</h2>
          {professionalSkills.map(renderSkill)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
