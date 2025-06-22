import React, { useState } from "react";
import "../../components/Bathroom/Bathroom.css";
import DINNING1 from "../../assets/DINNING1.jpg";
import DINNING2 from "../../assets/DINNING2.jpg";
import DINNING4 from "../../assets/DINNING4.jpg";
import DINNING5 from "../../assets/DINNING5.jpg";
import DINNING6 from "../../assets/DINNING6.jpg";
import DINNING11 from "../../assets/DINNING11.jpg";
import DINNING32 from "../../assets/DINNING32.jpg";
import DINNING55 from "../../assets/DINNING55.jpg";
import DINNING65 from "../../assets/DINNING65.jpg";
import DINNING432 from "../../assets/DINNING432.jpg";

const Dinning = () => {
  const projects = [
    { image: DINNING1 },
    { image: DINNING2 },
    { image: DINNING4 },
    { image: DINNING5 },
    { image: DINNING6 },
    { image: DINNING11 },
    { image: DINNING32 },
    { image: DINNING55 },
    { image: DINNING65 },
    { image: DINNING432 },
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

export default Dinning;
