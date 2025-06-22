import React, { useState } from "react";
import "../../components/Bathroom/Bathroom.css";
import CLINIC1 from "../../assets/CLINIC1.jpg";
import CLINIC2 from "../../assets/CLINIC2.jpg";
import HOSPITAL1 from "../../assets/HOSPITAL1.jpg";
import HOSPITAL2 from "../../assets/HOSPITAL2.jpg";
import HOSPITAL3 from "../../assets/HOSPITAL3.jpg";

const Hospital = () => {
  const projects = [
    { image: CLINIC1 },
    { image: CLINIC2 },
    { image: HOSPITAL1 },
    { image: HOSPITAL2 },
    { image: HOSPITAL3 },
  ];

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
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openPopup(index)}
          >
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
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
              src={projects[currentIndex].image}
              alt={`Project ${currentIndex + 1}`}
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

export default Hospital;
