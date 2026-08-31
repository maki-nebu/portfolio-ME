import React, { useState } from 'react';
import HoverPhoto from './hoverphoto';
import './PhotoPage.css';
import { FaTimes } from 'react-icons/fa';

// Import local images
import img1a from '../assets/Home/IMG_3191.JPG';
import img1b from '../assets/Home/me.jpg';
import img2a from '../assets/Home/IMG_3177.JPG';
import img2b from '../assets/Home/photo_2025-08-01_14-51-51.jpg';
import img3a from '../assets/Home/IMG_3172.JPG';
import img3b from '../assets/Home/12.png';
import img4a from '../assets/Home/DSC04145.jpg';
import img4b from '../assets/Home/photo_2025-08-01_14-52-19.jpg';

export default function PhotoPage() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const photoshoots = [
    {
      id: 1,
      title: 'Editorial & Studio Lookbook',
      tag: 'Editorial Model',
      img1: img1a,
      img2: img1b,
      description: 'Studio portrait shoot highlighting high-fashion expression, lighting, and wardrobe design.'
    },
    {
      id: 2,
      title: 'Commercial Fashion Showcase',
      tag: 'Fashion & Styling',
      img1: img2a,
      img2: img2b,
      description: 'Dynamic outdoor commercial photoshoot focused on vibrant contrast and fashion aesthetics.'
    },
    {
      id: 3,
      title: 'High-Fashion Portraiture',
      tag: 'Portrait Series',
      img1: img3a,
      img2: img3b,
      description: 'Close-up portraiture highlighting makeup design, camera poise, and natural mood.'
    },
    {
      id: 4,
      title: 'Contemporary Style & Elegance',
      tag: 'Brand Campaign',
      img1: img4a,
      img2: img4b,
      description: 'Full-length fashion lookbook shoot designed for brand campaigns and modern style trends.'
    }
  ];

  return (
    <section className="photo-section" id="photo">
      {/* Section Title */}
      <div className="section-title-container">
        <span className="section-subtitle" style={{ color: '#ec4899' }}>
          CREATIVE PORTFOLIO
        </span>
        <h2 className="section-main-title">Modeling & Fashion Showcase</h2>
      </div>

      {/* Photos Grid */}
      <div className="photo-grid">
        {photoshoots.map((shoot) => (
          <HoverPhoto
            key={shoot.id}
            image1={shoot.img1}
            image2={shoot.img2}
            title={shoot.title}
            tag={shoot.tag}
            onClick={() => setActiveLightbox(shoot)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="lightbox-overlay" onClick={() => setActiveLightbox(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close"
              onClick={() => setActiveLightbox(null)}
              aria-label="Close Lightbox"
            >
              <FaTimes />
            </button>

            <img
              src={activeLightbox.img1}
              alt={activeLightbox.title}
              className="lightbox-img"
            />

            <div className="lightbox-caption">
              <span className="photo-tag" style={{ marginBottom: '8px' }}>{activeLightbox.tag}</span>
              <h3>{activeLightbox.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {activeLightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
