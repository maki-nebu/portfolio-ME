import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Student Management System',
    description: 'A platform to manage student records, grades, and attendance. Inspired by empowering organized learning in creative schools like Hewi Makeup School.',
    tech: ['PHP', 'MySQL'],
    link: '#',
  },
  {
    title: 'Clinic Management System',
    description: 'Handles patient info and appointments. Built to reflect care and beauty from inside out—just like in design and wellness spaces.',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    link: '#',
  },
  {
    title: 'Online Quiz System',
    description: 'Secure online quiz app with multiple question types. Designed for training programs like fashion & beauty academies.',
    tech: ['Java', 'MySQL'],
    link: '#',
  },
  {
    title: 'Movie Streaming System (RMI)',
    description: 'Stream platform using Java RMI. Used to demo promotional fashion shows or beauty tutorials online.',
    tech: ['Java RMI'],
    link: '#',
  },
  {
    title: 'Library Inventory System',
    description: 'Organized digital library. Inspired by Zerfa Design’s creative resource hub for design books and beauty manuals.',
    tech: ['PHP', 'MySQL'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((techItem, idx) => (
                <span key={idx}>{techItem}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
