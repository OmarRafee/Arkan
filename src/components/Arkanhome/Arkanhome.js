import React, { useEffect, useRef } from "react";
import "./Arkanhome.css";
import heroImage from "../../assets/arkanhero.webp";
import production from "../../assets/production.webp";
import businessSetup from "../../assets/business-setup.webp";
import businessSolutions from "../../assets/business-solutions.webp";
import construction from "../../assets/construction.webp";
import team from "../../assets/team.webp";
import client from "../../assets/client.webp";
import solution from "../../assets/solution.webp";
import track from "../../assets/track.webp";
import partner1 from "../../assets/partner1.webp";
import partner2 from "../../assets/partner2.webp";
import partner3 from "../../assets/partner3.webp";
import partner4 from "../../assets/partner4.webp";
import partner5 from "../../assets/partner5.webp";
import partner6 from "../../assets/partner6.webp";
import partner7 from "../../assets/partner7.webp";
import partner8 from "../../assets/partner8.webp";
import partner9 from "../../assets/partner9.webp";
import partner10 from "../../assets/partner10.webp";
import partner11 from "../../assets/partner11.webp";
import partner12 from "../../assets/partner12.webp";
import partner13 from "../../assets/partner13.webp";
import partner14 from "../../assets/partner14.webp";
import partner15 from "../../assets/partner15.webp";
import partner16 from "../../assets/partner16.webp";
import partner17 from "../../assets/partner17.webp";
import partner18 from "../../assets/partner18.webp";

import client1 from "../../assets/client1.webp";
import client2 from "../../assets/client2.webp";
import client3 from "../../assets/client3.webp";
import client4 from "../../assets/client4.webp";
import client5 from "../../assets/client5.webp";
import client6 from "../../assets/client6.webp";
import client7 from "../../assets/client7.webp";
import client8 from "../../assets/client8.webp";
import client9 from "../../assets/client9.webp";
import client10 from "../../assets/client10.webp";
import client11 from "../../assets/client11.webp";

const Arkanhome = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const whyItemsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              entry.target.classList.add("hero-animate");
            } else if (entry.target === introRef.current) {
              entry.target.classList.add("intro-animate");
            } else if (serviceCardsRef.current.includes(entry.target)) {
              entry.target.classList.add("card-animate");
            } else if (whyItemsRef.current.includes(entry.target)) {
              entry.target.classList.add("why-item-animate");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (introRef.current) observer.observe(introRef.current);
    serviceCardsRef.current.forEach((card) => card && observer.observe(card));
    whyItemsRef.current.forEach((item) => item && observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const clientImages = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
  ];
  const repeatedImages = [];

  let i = 0;
  while (repeatedImages.length < 20) {
    if (i >= clientImages.length) i = 0;
    repeatedImages.push(clientImages[i]);
    i++;
  }

  const partnerImages = [
    partner1,
    partner2,

    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
    partner15,
    partner16,
    partner17,
    partner18,
  ];
  const repeatedPartners = [];

  let j = 0;
  while (repeatedPartners.length < 20) {
    if (j >= partnerImages.length) j = 0;
    repeatedPartners.push(partnerImages[j]);
    j++;
  }

  return (
    <div className="arkan-home">
      <div className="hero-section" ref={heroRef}>
        <img src={heroImage} alt="Arkan Hero" className="hero-image" />
        <div className="highlight-bar">
          <h1>
            BUILDING THE FUTURE WITH
            <span className="bold">KINGDOM</span>-WORTHY QUALITY
          </h1>
        </div>
      </div>

      <div className="intro-section" ref={introRef}>
        <p>
          Welcome to <span className="highlight">Arkan Al-Tafawuq</span>, where
          ambition meets achievement.
        </p>
        <p>
          We specialize in Construction, Architectural Design, Interior and
          Exterior Designs, Advertising, Event Execution, Business Solutions,
          and Production House services, ensuring exceptional standards across
          Saudi Arabia.{" "}
          <a href="/about" className="read-more">
            Read more..
          </a>
        </p>
      </div>

      <div className="homeservices-section">
        <div className="homeservices-header">
          <h2>OUR SERVICES</h2>
          <p>
            We deliver an extensive range of services, designed to bring your
            vision to life with precision, quality, and expertise
          </p>
        </div>

        <div className="homeservices-cards">
          {[production, businessSetup, businessSolutions].map((img, index) => (
            <div
              className="homeservice-card"
              key={index}
              ref={(el) => (serviceCardsRef.current[index] = el)}
            >
              <div className="top-icon">↗</div>
              <img src={img} alt="Service" className="homeservice-img" />
              <h3>
                {
                  [
                    // "CONSTRUCTION",
                    "PRODUCTION",
                    "BUSINESS SETUP",
                    "BUSINESS SOLUTIONS",
                  ][index]
                }
              </h3>
              <a
                href={`/${
                  [
                    // "services",
                    "production",
                    "under-construction",
                    "under-construction",
                  ][index]
                }`}
                className="card-read-more"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        <div className="why-choose">
          <div className="why-left">
            <h2>
              WHY CHOOSE
              <br />
              ARKAN AL TAFAWUQ ?
            </h2>
          </div>
          <div className="why-right">
            {[
              {
                img: team,
                title: "Experienced Team",
                text: "Our team comprises industry experts with a wealth of knowledge and experience.",
              },
              {
                img: client,
                title: "Client-Focused Approach",
                text: "We tailor our homeservices to meet the specific needs of each client.",
              },
              {
                img: solution,
                title: "Integrated Solutions",
                text: "We offer a one-stop solution for marketing and construction needs.",
              },
              {
                img: track,
                title: "Proven Track Record",
                text: "We have a history of successful projects and satisfied clients.",
              },
            ].map((item, index) => (
              <div
                className="why-item"
                key={index}
                ref={(el) => (whyItemsRef.current[index] = el)}
              >
                <img src={item.img} alt={item.title} className="why-img" />
                <div className="why-text">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-section">
        <h2>OUR CLIENTS</h2>
        <div className="logo-marquee">
          <div className="marquee-track">
            {repeatedImages.map((img, idx) => (
              <img key={idx} src={img} alt={`client-${idx}`} />
            ))}
          </div>
        </div>

        <h2>OUR PARTNERS</h2>
        <div className="logo-marquee">
          <div className="marquee-track reverse">
            {repeatedPartners.map((img, idx) => (
              <img key={idx} src={img} alt={`partner-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arkanhome;
