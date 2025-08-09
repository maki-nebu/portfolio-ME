import React from 'react';
import './VisionPage.css';

const VisionPage = () => {
  return (
    <div className="vision-wrapper">
      <header className="hero">
        <div className="overlay">
          <h1 className="title">Vision & Purpose</h1>
          <p className="subtitle">Bold dreams, creative impact.</p>
        </div>
      </header>

      <main className="vision-main">
        <section className="vision-card">
          <h2>🌱 Purpose</h2>
          <p>
            My purpose is to inspire and empower individuals through a blend of fashion, tech, and sustainable creativity.
            I believe in merging innovation with elegance to shape a brighter, more inclusive future.
          </p>
        </section>

        <section className="vision-card">
          <h2>🌍 Impact</h2>
          <p>
            By integrating software and modeling, I aim to reach people across different industries and backgrounds, making
            solutions more accessible and style more expressive.
          </p>
        </section>

        <section className="vision-card">
          <h2>🚀 Future</h2>
          <p>
            I see myself launching platforms that connect users, creators, and designers in an ecosystem that values quality,
            sustainability, and creativity.
          </p>
        </section>
      </main>

   
    </div>
  );
};

export default VisionPage;
