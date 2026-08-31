import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaCheckCircle, FaBookOpen } from 'react-icons/fa';

const Education = () => {
  const certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2024',
      link: 'https://www.freecodecamp.org/certification/makda/responsive-web-design'
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2024',
      link: 'https://www.freecodecamp.org/certification/makda/javascript-algorithms-and-data-structures-v8'
    },
    {
      title: 'Scientific Computing with Python',
      issuer: 'freeCodeCamp',
      year: '2024',
      link: 'https://www.freecodecamp.org/certification/makda/scientific-computing-with-python-v7'
    },
    {
      title: 'Android Developer Fundamentals',
      issuer: 'Udacity',
      year: '2024',
      link: 'https://www.udacity.com/certificate/e/2ba476fe-4b2e-11ef-ba2f-8bb3304b98b8'
    }
  ];

  return (
    <section className="education-section" id="education">
      {/* Section Title */}
      <div className="section-title-container">
        <span className="section-subtitle">ACADEMIC & CREDENTIALS</span>
        <h2 className="section-main-title">Education & Certifications</h2>
      </div>

      <div className="timeline-container">
        {/* Left Column: Academic Degree */}
        <div className="animate-fade-in">
          <h3 className="timeline-column-title">
            <FaGraduationCap style={{ color: '#00f2fe' }} /> Academic Degree
          </h3>

          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h4 className="timeline-degree">BSc in Software Engineering</h4>
                <div className="timeline-institution">🎓 Wachamo University</div>
              </div>
              <span className="timeline-badge">Expected 2025</span>
            </div>

            <div className="timeline-body">
              <p style={{ marginBottom: '16px' }}>
                Comprehensive 5-year engineering program covering core computer science principles, software architecture, data structures, algorithms, and database management systems.
              </p>

              <h5 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaBookOpen style={{ color: 'var(--accent-cyan)' }} /> Key Coursework & Focus Areas:
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span className="tech-tag">Object-Oriented Programming</span>
                <span className="tech-tag">Database Systems (SQL)</span>
                <span className="tech-tag">Web Systems Development</span>
                <span className="tech-tag">Software Testing & QA</span>
                <span className="tech-tag">Distributed Systems (RMI)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Verified Certifications */}
        <div className="animate-fade-in">
          <h3 className="timeline-column-title">
            <FaCertificate style={{ color: '#ec4899' }} /> Verified Certifications
          </h3>

          <div className="cert-list">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                title={`Verify ${cert.title} certificate`}
              >
                <div className="cert-info">
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-issuer">
                    <FaCheckCircle style={{ color: '#10b981' }} /> {cert.issuer} • {cert.year}
                  </div>
                </div>

                <div className="cert-verify-btn">
                  Verify <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
