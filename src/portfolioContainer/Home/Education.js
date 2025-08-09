import React from 'react';
import './Education.css';

const Education = () => {
  const certifications = [
    {
      title: "Responsive Web Design",
      source: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/makda/responsive-web-design"
    },
    {
      title: "Scientific Computing with Python",
      source: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/makda/scientific-computing-with-python-v7"
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      source: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/makda/javascript-algorithms-and-data-structures-v8"
    },
    {
      title: "Android Developer Fundamentals",
      source: "Udacity",
      link: "https://www.udacity.com/certificate/e/2ba476fe-4b2e-11ef-ba2f-8bb3304b98b8"
    }
  ];

  return (
    <section className="edu-section">
      <h1 className="edu-title">📚 My Education</h1>

      <div className="edu-timeline">
        <div className="edu-item left">
          <h3>🎓 Wachamo University</h3>
          <p>BSc in Software Engineering (Expected 2025)</p>
        </div>

        <div className="edu-item right">
          <h3>📜 Certificates</h3>
          <ul className="edu-cert-list">
            {certifications.map((cert, index) => (
              <li key={index}>
                <a href={cert.link} target="_blank" rel="noreferrer">
                  {cert.title} – <span>{cert.source}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
