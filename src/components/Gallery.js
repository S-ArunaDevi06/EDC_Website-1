// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  // Add your image paths here
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex === null) {
        setHoveredIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const translateX = () => {
    // Calculate the necessary translation amount
    const offset = 320; // Adjust this value according to the width and margin of images
    return hoveredIndex !== null ? `translateX(-${hoveredIndex * offset}px)` : 'translateX(0)';
  };

  return (
    <div className="gallery-container" onMouseLeave={handleMouseLeave}>
      <h2>Gallery</h2>
      <div className="gallery-wrapper" style={{ transform: translateX() }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <p className="instruction">Hover over a corner image to view it!</p>
    </div>
  );
};

export default Gallery;
