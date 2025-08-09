import React from 'react';
import HoverPhoto from '../portfolioContainer/hoverphoto';
import './PhotoPage.css';

// ✅ Import local images
import img1a from '../assets/Home/IMG_3191.JPG';
import img1b from '../assets/Home/me.jpg';
import img2a from '../assets/Home/IMG_3177.JPG';
import img2b from '../assets/Home/photo_2025-08-01_14-51-51.jpg';
import img3a from '../assets/Home/IMG_3172.JPG';
import img3b from '../assets/Home/12.png';

export default function PhotoPage() {
  return (
    <div className="photo-page">
      <h2>My Modeling Portfolio</h2>
      <div className="photo-grid">
        <HoverPhoto image1={img1a} image2={img1b} />
        <HoverPhoto image1={img2a} image2={img2b} />
        <HoverPhoto image1={img3a} image2={img3b} />
      </div>
    </div>
  );
}
