import React, { useState, useEffect } from "react";
import "./About.css";
import visionnew from "../../assets/visionnew.jpg";
import missionnew from "../../assets/missionnew.jpg";
import aboutus from "../../assets/aboutus.jpg";
import DINNING32 from "../../assets/DINNING32.jpg";
import LIVING15 from "../../assets/LIVING15.jpg";
import LIVING23 from "../../assets/LIVING23.jpg";

const images = [
  { src: DINNING32, text: "Elegant Dining Experience" },
  { src: LIVING15, text: "Luxury Living Spaces" },
  { src: LIVING23, text: "Modern Comfort & Style" },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setAnimateText(false); // Reset text animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimateText(true); // Re-trigger animation after sliding
    }, 500); // Keep text visible for 0.5s before the slide
  };

  const handlePrev = () => {
    setAnimateText(false); // Reset text animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setAnimateText(true); // Re-trigger animation after sliding
    }, 500); // Keep text visible for 0.5s before the slide
  };

  return (
    <div>
      {/* Image Carousel */}
      <div className="image-carousel">
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={image.src}
                  alt="Sliding content"
                  className="carousel-image"
                />
                <div className="carousel-overlay"></div>
                <div
                  className={`carousel-text ${
                    animateText && index === currentIndex ? "wave" : ""
                  }`}
                >
                  {image.text.split("").map((letter, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-us-wrapper">
        {/* About Section */}
        <section
          id="about-section"
          className="about-us-section fade-in-section"
        >
          <h2 className="about-us-title">About Us</h2>
          <div className="about-us-content">
            <img
              src={aboutus}
              alt="About Us"
              className="about-us-image slide-in-left"
            />
            <p className="about-us-paragraph">
              At <span className="custom-font">Arkan Al-Tafawuq</span>,
              excellence drives everything we do. As a proud part of the
              BinRashid Group, we operate from Saudi Arabia, shaping industries
              through our expertise in Construction, Business Solutions, and
              Marketing & Advertising. We build inspiring spaces, empower
              businesses with innovative strategies, and craft campaigns that
              connect brands to audiences. Guided by integrity and innovation,
              we’re more than a company—we’re a trusted partner in creating a
              future of excellence. Welcome to{" "}
              <span className="custom-font">Arkan Al-Tafawuq</span>, where
              ambition meets achievement.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section
          id="vision-section"
          className="about-us-section fade-in-section"
        >
          <h2 className="about-us-title">Our Vision</h2>
          <div className="about-us-content vision-section-desktop">
            <img
              src={visionnew}
              alt="Vision"
              className="about-us-image slide-in-left"
            />
            <p className="about-us-paragraph">
              Our vision at{" "}
              <span className="custom-font">Arkan Al-Tafawuq</span> is to be the
              driving force of innovation and excellence across the Marketing &
              Advertising, Business Solutions, and Construction sectors. We aim
              to push boundaries, redefine standards, and consistently surpass
              expectations in every endeavor. With a steadfast commitment to
              sustainability, client satisfaction, and industry leadership, we
              aspire to create a future where our work leaves a lasting impact
              on businesses, industries, and communities. Welcome to{" "}
              <span className="custom-font">Arkan Al-Tafawuq</span>, where our
              vision leads to limitless possibilities.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section
          id="mission-section"
          className="about-us-section fade-in-section"
        >
          <h2 className="about-us-title">Our Mission</h2>
          <div className="about-us-content">
            <img
              src={missionnew}
              alt="Mission"
              className="about-us-image slide-in-left"
            />
            <p className="about-us-paragraph">
              At <span className="custom-font">Arkan Al-Tafawuq</span>, our
              mission is to lead with excellence across the Marketing &
              Advertising, Business Solutions, and Construction sectors. We are
              committed to delivering innovative marketing strategies that
              engage and inspire, empowering businesses with tailored solutions
              to achieve their goals, and constructing reliable infrastructure
              that defines quality and endurance. With a foundation built on
              integrity, dedication to excellence, and a focus on client
              satisfaction, we aim to be the trusted partner that consistently
              exceeds expectations. Welcome to{" "}
              <span className="custom-font">Arkan Al-Tafawuq</span>, where
              visions are transformed into reality.
            </p>
          </div>
          <div className="download-container">
            <a
              href="/files/Potfolio.pdf"
              download="Arkan-Al-Tafawuq-Potfolio.pdf"
              className="download-button"
            >
              Download our Portfolio
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
