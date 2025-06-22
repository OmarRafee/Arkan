import React, { useState } from "react";
import "../../components/Bathroom/Bathroom.css";
import KITCHEN1 from "../../assets/KITCHEN1.jpg";
import KITCHEN2 from "../../assets/KITCHEN2.jpg";
import KITCHEN3 from "../../assets/KITCHEN3.jpg";
import KITCHEN4 from "../../assets/KITCHEN4.jpg";
import KITCHEN5 from "../../assets/KITCHEN5.jpg";
import KITCHEN6 from "../../assets/KITCHEN6.jpg";
import KITCHEN111 from "../../assets/KITCHEN111.jpg";
import KITCHEN7 from "../../assets/KITCHEN7.jpg";

const Kitchen = () => {
  const projects = [
    { image: KITCHEN1 },
    { image: KITCHEN2 },
    { image: KITCHEN3 },
    { image: KITCHEN4 },
    { image: KITCHEN5 },
    { image: KITCHEN6 },
    { image: KITCHEN111 },
    { image: KITCHEN7 },
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

export default Kitchen;
