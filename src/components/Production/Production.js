// Production.jsx
import React, { useEffect, useState } from "react";
import "./Production.css";

import productionmain from "../../assets/productionmain.webp";
import production1 from "../../assets/production1.webp";
import production2 from "../../assets/production2.webp";
import production3 from "../../assets/production3.webp";
import production4 from "../../assets/production4.webp";
import production5 from "../../assets/production5.webp";
import production6 from "../../assets/production6.webp";
import production7 from "../../assets/production7.webp";
import production8 from "../../assets/production8.webp";

const Production = () => {
  const workImages = [
    production1,
    production2,
    production3,
    production4,
    production5,
    production6,
    production7,
    production8,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % workImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [workImages.length]);

  return (
    <div className="production-page">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>Production Services</h1>
          <div className="hero-points">
            <span>Exhibition & Event Setup</span>
            <span>Outdoor & Indoor Branding</span>
          </div>
        </div>
        <a
          className="hero-btn"
          href="/files/productionportfolio.pdf"
          download="ProductionPortfolio.pdf"
        >
          Download Portfolio
        </a>
      </div>

      {/* SLIDESHOW SECTION */}
      <div className="slideshow-container">
        <h2 className="slideshow-title">Our Work</h2>
        <div className="slideshow-single">
          <img
            src={workImages[currentIndex]}
            alt={`Production ${currentIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Production;
