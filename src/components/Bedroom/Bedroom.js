import React, { useState } from "react";
import "../../components/Bathroom/Bathroom.css";
import BEDROOM1 from "../../assets/BEDROOM1.jpg";
import BEDROOM2 from "../../assets/BEDROOM2.jpg";
import BEDROOM4 from "../../assets/BEDROOM4.jpg";
import BEDROOM5 from "../../assets/BEDROOM5.jpg";
import BEDROOM6 from "../../assets/BEDROOM6.jpg";
import BEDROOM7 from "../../assets/BEDROOM7.jpg";

const Bedroom = () => {
  const projects = [
    { image: BEDROOM1 },
    { image: BEDROOM2 },
    { image: BEDROOM4 },
    { image: BEDROOM5 },
    { image: BEDROOM6 },
    { image: BEDROOM7 },
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

export default Bedroom;
