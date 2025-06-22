import React from "react";
import "./CommercialProjects.css";
import BATHROOM1 from "../../assets/BATHROOM1.jpg";
import BATHROOM2 from "../../assets/BATHROOM2.jpg";
import BATHROOM3 from "../../assets/BATHROOM3.jpg";
import BATHROOM4 from "../../assets/BATHROOM4.jpg";
import BATHROOM5 from "../../assets/BATHROOM5.jpg";

const CommercialProjects = () => {
  const projects = [
    {
      image: BATHROOM1,
    },
    {
      image: BATHROOM2,
    },
    {
      image: BATHROOM3,
    },
    {
      image: BATHROOM4,
    },
    {
      image: BATHROOM5,
    },
  ];

  return (
    <main className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.image}
            alt={`Project ${index + 1}`}
            className="project-image"
          />
        </div>
      ))}
    </main>
  );
};

export default CommercialProjects;
