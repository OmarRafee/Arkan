import React, { useState } from "react";
import "../../components/Bathroom/Bathroom.css";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../../assets", false, /COMMERCIAL\d+\.(jpg|jpeg|png|heic)$/)
);

const Commercial = () => {
  const projects = Object.values(images);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const showNextImage = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const showPrevImage = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div>
      <main className="projects-container">
        {projects.map((image, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openPopup(index)}
          >
            <img
              src={image}
              alt={`Commercial Room ${index + 1}`}
              className="project-image"
            />
          </div>
        ))}
      </main>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close-button" onClick={closePopup}>
              ×
            </button>
            <button className="popup-prev-button" onClick={showPrevImage}>
              ‹
            </button>
            <img
              src={projects[currentIndex]}
              alt={`Commercial Room ${currentIndex + 1}`}
              className="popup-image"
            />
            <button className="popup-next-button" onClick={showNextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commercial;
