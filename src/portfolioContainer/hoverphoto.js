import React, { useState } from 'react';
import './hoverphoto.css';

export default function HoverPhoto({ image1, image2, title, tag, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="photo-card animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={isHovered && image2 ? image2 : image1}
        alt={title || "Modeling Portfolio"}
        className="photo-img"
      />
      <div className="photo-overlay">
        {tag && <span className="photo-tag">{tag}</span>}
        <h4 className="photo-title">{title}</h4>
        <span className="photo-sub">Hover to switch angle • Click for full screen</span>
      </div>
    </div>
  );
}
