import React from "react";
import "./UnderConstruction.css";
import arkansmall from "../../assets/arkansmall.svg";

function UnderConstruction() {
  return (
    <div className="under-construction-container">
      <div className="construction-icon">
        <img src={arkansmall} alt="Arkan Logo" className="arkan-logo" />
      </div>
      <h1>We're Working on Something Amazing!</h1>
      <p>Our team is busy building this page. Stay tuned for updates!</p>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default UnderConstruction;
