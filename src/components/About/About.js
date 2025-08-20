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
  // Production-focused values
  const values = [
    { icon: <FaHandshake />, text: "CLIENT COLLABORATION" },
    { icon: <FaLightbulb />, text: "INNOVATION & R&D" },
    { icon: <FaChessKing />, text: "END-TO-END OWNERSHIP" },
    { icon: <FaBookOpen />, text: "CONTINUOUS IMPROVEMENT" },
    { icon: <FaMedal />, text: "QUALITY & ON-TIME DELIVERY" },
    { icon: <FaGlobeAmericas />, text: "SUSTAINABLE PRACTICES" },
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
        <img src={aboutMainImg} alt="Production Background" className="hero-image" />
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
            <span className="highlight">PRODUCTION</span>
            <span className="divider">|</span>
            <span className="headline">
              Precision fabrication, premium finishing, and reliable delivery.
            </span>
          </motion.h2>

          <div className="about-details">
            <motion.div
              className="column"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p>
                <strong>Arkan Al-Tafawuq Production House</strong> delivers
                end-to-end fabrication and print solutions—covering{' '}
                <strong>acrylic, wood, metal, and composite</strong> works with
                a fully equipped workshop. Our capabilities include{' '}
                <strong>CNC routing, laser cutting, bending, welding,
                painting,</strong> and meticulous assembly to achieve
                brand-perfect results.
              </p>
              <p>
                We produce <strong>signage, wayfinding systems, retail fixtures,
                display stands, exhibition booths, 3D props,</strong> and custom
                installations—engineered for durability, clean finishes, and fast
                installation on site.
              </p>
            </motion.div>

            <motion.div
              className="column"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p>
                Our print division handles <strong>large-format, UV, and
                eco-solvent</strong> printing for backdrops, billboards, wall
                wraps, vehicle branding, and packaging mockups. We also provide
                <strong> LED screen setups, truss & staging,</strong> and
                turnkey <strong>event production</strong> with on-site
                installation and dismantling.
              </p>
              <p>
                From <strong>technical drawings</strong> to <strong>final
                handover</strong>, we manage timelines, quality control, and
                safety to keep your activation or fit-out on schedule—every time.
              </p>
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
              To craft high-quality production deliverables—fabrication, printing,
              signage, booths, and event setups—through precise engineering,
              robust materials, and disciplined project management.
            </p>
          </div>
          <div className="mv-content back">
            <p>
              We align with brand guidelines, optimize costs and lead times, and
              maintain rigorous QC at each stage—from cutting and finishing to
              packaging and installation—ensuring flawless results on site.
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
              To be the region’s most trusted production partner for brands and
              agencies—known for reliability, innovation, and premium finishing.
            </p>
          </div>
          <div className="mv-content back">
            <p>
              We invest in advanced machinery, materials, and talent to expand
              capacity, elevate standards, and deliver sustainable, scalable
              production at speed.
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
