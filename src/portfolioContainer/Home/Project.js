import React, { useState } from 'react';
import './Project.css';
import { FaExternalLinkAlt, FaTimes, FaCheckCircle, FaCodeBranch } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Student Management System',
    category: 'php',
    categoryLabel: 'PHP & MySQL',
    description: 'A comprehensive platform to manage student records, grades, course enrollments, and attendance. Designed to empower organized learning workflows.',
    details: 'Features detailed role-based access control (Admin, Teacher, Student), automated grade calculation, report generation, and student profile tracking.',
    features: [
      'Role-based Authentication (Admin/Staff/Student)',
      'Automated Grade Point Calculation',
      'Attendance Tracking & Exportable Reports',
      'Clean MySQL Relational Database Schema'
    ],
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/maki-nebu',
  },
  {
    id: 2,
    title: 'Clinic Management System',
    category: 'php',
    categoryLabel: 'PHP & MySQL',
    description: 'Automates patient registration, medical appointment scheduling, doctor availability, and prescription records with seamless care.',
    details: 'Streamlines healthcare administrative workflows by maintaining secure patient histories, appointment slots, and billing summaries.',
    features: [
      'Patient Registration & Medical History',
      'Doctor Appointment Scheduling Engine',
      'Prescription & Diagnosis Tracker',
      'Responsive Mobile & Desktop Portal'
    ],
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    link: 'https://github.com/maki-nebu',
  },
  {
    id: 3,
    title: 'Online Quiz & Assessment System',
    category: 'java',
    categoryLabel: 'Java & Systems',
    description: 'A secure multi-type examination platform featuring timed quizzes, automated scoring, and real-time result evaluation.',
    details: 'Built with Java and MySQL to handle concurrent student exam sessions, question randomizing, and instant performance metrics.',
    features: [
      'Timed Quiz Engine with Multiple Choice Questions',
      'Automatic Grading & Instant Feedback',
      'Randomized Question Banks',
      'Detailed Performance Analytics'
    ],
    tech: ['Java', 'Swing / AWT', 'MySQL', 'JDBC'],
    link: 'https://github.com/maki-nebu',
  },
  {
    id: 4,
    title: 'Movie Streaming & Remote System (RMI)',
    category: 'java',
    categoryLabel: 'Java & Systems',
    description: 'Distributed streaming platform leveraging Java Remote Method Invocation (RMI) for remote media queries and catalog browsing.',
    details: 'Demonstrates distributed client-server architecture in Java, allowing client apps to query remote server catalogs seamlessly.',
    features: [
      'Java Remote Method Invocation (RMI) Architecture',
      'Concurrent Client Media Streaming Requests',
      'Remote Server Catalog Synchronization',
      'Robust Network Exception Handling'
    ],
    tech: ['Java RMI', 'Networking', 'OOP'],
    link: 'https://github.com/maki-nebu',
  },
  {
    id: 5,
    title: 'Library Inventory Management',
    category: 'php',
    categoryLabel: 'PHP & MySQL',
    description: 'Digital inventory hub for cataloging books, tracking checkouts/returns, calculating late fees, and searching creative literature.',
    details: 'Simplifies library logistics with barcode-ready tracking, member membership management, and automated overdue notifications.',
    features: [
      'Book Cataloging & ISBN Lookup',
      'Issue & Return Logging System',
      'Late Fee Calculation Algorithm',
      'Search & Filter by Author/Genre'
    ],
    tech: ['PHP', 'MySQL', 'JavaScript'],
    link: 'https://github.com/maki-nebu',
  },
  {
    id: 6,
    title: 'Modern Portfolio & Creative Showcase',
    category: 'web',
    categoryLabel: 'Web & React',
    description: 'High-performance glassmorphic portfolio web app with dark/light mode, dual persona view (Dev & Model), and smooth animations.',
    details: 'Custom built using React 19, CSS Glassmorphism tokens, and responsive UI components for a modern developer & fashion showcase.',
    features: [
      'Dark & Light Glassmorphic Theme System',
      'Interactive Persona Filter (Dev vs Model)',
      'Photo Lightbox Gallery & Modal Previews',
      'Optimized Web Vitals & Mobile First'
    ],
    tech: ['React 19', 'JavaScript', 'CSS3 Tokens', 'HTML5'],
    link: 'https://github.com/maki-nebu',
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      {/* Section Title */}
      <div className="section-title-container">
        <span className="section-subtitle">MY RECENT WORK</span>
        <h2 className="section-main-title">Featured Projects</h2>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects ({projects.length})
        </button>
        <button
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web & React
        </button>
        <button
          className={`filter-btn ${filter === 'php' ? 'active' : ''}`}
          onClick={() => setFilter('php')}
        >
          PHP & MySQL
        </button>
        <button
          className={`filter-btn ${filter === 'java' ? 'active' : ''}`}
          onClick={() => setFilter('java')}
        >
          Java & Systems
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card animate-fade-in" key={project.id}>
            <div>
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category-badge">{project.categoryLabel}</span>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((t, idx) => (
                  <span className="tech-tag" key={idx}>{t}</span>
                ))}
              </div>
            </div>

            <div className="project-card-footer">
              <button 
                className="btn-quickview"
                onClick={() => setSelectedProject(project)}
              >
                <FaCodeBranch /> Quick View
              </button>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-quickview"
                style={{ color: 'var(--text-secondary)' }}
              >
                GitHub <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <span className="modal-category">{selectedProject.categoryLabel}</span>
            <h3 className="modal-title">{selectedProject.title}</h3>

            <div className="modal-body">
              <p>{selectedProject.description}</p>
              <p style={{ fontStyle: 'italic', background: 'var(--bg-glass)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                {selectedProject.details}
              </p>

              <h4 className="modal-features-title">Key Architectural Features</h4>
              <ul className="modal-features-list">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx}>
                    <FaCheckCircle /> {feat}
                  </li>
                ))}
              </ul>

              <h4 className="modal-features-title">Technologies Used</h4>
              <div className="tech-stack" style={{ marginBottom: '24px' }}>
                {selectedProject.tech.map((t, idx) => (
                  <span className="tech-tag" key={idx} style={{ background: 'var(--bg-glass)', color: 'var(--accent-cyan)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={selectedProject.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <FaExternalLinkAlt /> View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
