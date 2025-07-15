import React from "react";
import "./About.css";
import aboutMainImg from "../../assets/aboutmain.webp";
import {
  FaHandshake,
  FaLightbulb,
  FaMedal,
  FaBookOpen,
  FaGlobeAmericas,
  FaChessKing,
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    { icon: <FaHandshake />, text: "THOUGHT PARTNERSHIP" },
    { icon: <FaLightbulb />, text: "BE THE SOLUTION" },
    { icon: <FaChessKing />, text: "LEADERSHIP" },
    { icon: <FaBookOpen />, text: "LEARN AND TEACH" },
    { icon: <FaMedal />, text: "DELIVER WITH EXCELLENCE" },
    { icon: <FaGlobeAmericas />, text: "DIVERSITY" },
  ];

  return (
    <div className="about-page">
      {/* Hero Image Section */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={aboutMainImg} alt="About Background" className="hero-image" />
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="overlay-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="overlay-text">
          <motion.h2
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="highlight">ABOUT US</span>
            <span className="divider">|</span>
            <span className="headline">
              Welcome to Arkan Al-Tafawuq, where ambition meets achievement.
            </span>
          </motion.h2>

          <div className="about-details">
            <motion.div
              className="column"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p>
                <strong>As a key part of BinRashid Group</strong>, we specialize
                in Construction, Architectural Design, Interior and Exterior
                Designs, Advertising, Event Execution, Business Solutions, and
                Production House Services, ensuring exceptional standards across
                Saudi Arabia.
              </p>
              <p>
                Our expertise spans residential and commercial construction, 3D
                design, and finishing, delivering high-quality, efficient, and
                modern aesthetics tailored to diverse client needs.
              </p>
            </motion.div>

            <motion.div
              className="column"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p>
                <strong>In Advertising, Branding, and Event Execution</strong>,
                our Production House offers strategic brand positioning, booth
                fabrication, signage, high-quality printing, LED screen setups,
                acrylic and wood craftsmanship, ensuring impactful brand
                presence and immersive audience engagement.
              </p>
              <p>
                <strong>Arkan Al-Tafawuq</strong> brings visions to life with
                <strong> creativity, precision, and dedication.</strong>
              </p>

              {/* <motion.a
                href="/portfolio.pdf"
                className="download-btn"
                download
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Download Our Portfolio
              </motion.a> */}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-section">
        <motion.div
          className="mv-card mission-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mv-content front">
            <h3>MISSION</h3>
            <div className="underline mission-line"></div>
            <p>
              Our mission at Arkan Al-Tafawuq is to Create pioneering solutions
              in Marketing and Advertising, Business Solutions, Construction,
              and Production House Services, combining innovation and expertise
              to ensure excellence in every project.
            </p>
          </div>
          <div className="mv-content back">
            <p>
              We are dedicated to enhancing brand presence through strategic
              branding, visual communication, and event execution, crafting
              unique and immersive experiences that engage audiences and
              strengthen market impact. Driven by integrity, innovation, and
              excellence, we continually strive to set new benchmarks.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mv-card vision-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mv-content front">
            <h3>VISION</h3>
            <div className="underline vision-line"></div>
            <p>
              Our vision at Arkan Al-Tafawuq is to be the driving force of
              innovation and excellence across the Construction, Marketing &
              Advertising, Production House, and Business Solutions Services.
            </p>
          </div>
          <div className="mv-content back">
            <p>
              We aim to push boundaries, redefine standards, and consistently
              surpass expectations in every endeavor. With a steadfast
              commitment to sustainability, client satisfaction, and industry
              leadership, we aspire to create a future where our work leaves a
              lasting impact on businesses, industries, and communities.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <motion.div
        className="values-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="values-left">
          <h2 className="values-title">VALUES</h2>
          <div className="values-divider" />
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-item"
              whileHover={{ scale: 1.05, color: "#D5AB8C" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
              }}
            >
              <span className="value-icon">{value.icon}</span>
              <span>{value.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
