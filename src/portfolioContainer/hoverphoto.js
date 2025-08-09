import React, { useState } from 'react';
import './hoverphoto.css';

export default function HoverPhoto({ image1, image2 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? image2 : image1}
      alt="model"
      className="hover-photo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
