import React, { useEffect, useRef } from "react";
import "./Production.css";
import productionmain from "../../assets/productionmain.webp";
import eventImage1 from "../../assets/eventImage1.webp";
import g1 from "../../assets/gallery1.webp";
import g2 from "../../assets/gallery2.webp";
import g3 from "../../assets/gallery3.webp";
import g4 from "../../assets/gallery4.webp";
import g5 from "../../assets/gallery5.webp";
import g6 from "../../assets/gallery6.webp";
import brandingBg from "../../assets/branding-bg.webp";
import materials1 from "../../assets/materials1.webp";
import materials2 from "../../assets/materials2.webp";
import materials3 from "../../assets/materials3.webp";
import materials4 from "../../assets/materials4.webp";
import production1 from "../../assets/production1.webp";
import production2 from "../../assets/production2.webp";
import production3 from "../../assets/production3.webp";
import production4 from "../../assets/production4.webp";
import production5 from "../../assets/production5.webp";
import production6 from "../../assets/production6.webp";
import production7 from "../../assets/production7.webp";
import production8 from "../../assets/production8.webp";
const Production = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const galleryItemsRef = useRef([]);
  const materialItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              entry.target.classList.add("hero-animate");
            } else if (sectionRefs.current.includes(entry.target)) {
              entry.target.classList.add("section-animate");
            } else if (galleryItemsRef.current.includes(entry.target)) {
              entry.target.classList.add("gallery-animate");
            } else if (materialItemsRef.current.includes(entry.target)) {
              entry.target.classList.add("material-animate");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    sectionRefs.current.forEach(
      (section) => section && observer.observe(section)
    );
    galleryItemsRef.current.forEach((item) => item && observer.observe(item));
    materialItemsRef.current.forEach((item) => item && observer.observe(item));

    return () => observer.disconnect();
  }, []);
  /* ---------- Our Work endless array ---------- */
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

  const repeatedWorkImages = [];
  let k = 0;
  while (repeatedWorkImages.length < 20) {
    if (k >= workImages.length) k = 0; // restart at index 0
    repeatedWorkImages.push(workImages[k]);
    k++;
  }

  return (
    <div className="production-page">
      <div className="production-hero" ref={heroRef}>
        <img
          src={productionmain}
          alt="Production Hero"
          className="production-image"
        />
        <div className="production-overlay">
          <h1>Production Services</h1>
          <div className="production-buttons">
            <button>Exhibition & Event Setup</button>
            <button>Outdoor & Indoor Branding</button>
          </div>
          <div className="download-container-production">
            <a
              href="/files/productionportfolio.pdf"
              download="ProductionPortfolio.pdf"
              className="download-button-production"
            >
              Download our Portfolio
            </a>
          </div>
        </div>
      </div>

      <div
        className="production-section"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <h2 className="section-title">Exhibition & Event Setup</h2>
        <div className="section-content">
          <img
            src={eventImage1}
            alt="Exhibition Event"
            className="section-image"
          />
          <div className="section-text">
            <p className="section-highlight">
              We specialize in providing comprehensive exhibition and event
              setup services.
            </p>
            <p className="section-paragraph">
              Whether it's a trade show, a corporate event, or a marketing
              activation, we ensure that every detail is meticulously managed to
              create an impactful and immersive experience.
            </p>
          </div>
        </div>
        <div className="production-gallery">
          {/* Row 1 – 3 images */}
          <div className="gallery-row">
            {[g1, g2, g3].map((img, idx) => (
              <div
                className="gallery-item"
                key={idx}
                ref={(el) => (galleryItemsRef.current[idx] = el)}
              >
                <img src={img} alt={`Gallery ${idx + 1}`} />
                <div className="gallery-text bottom">
                  {
                    [
                      "Custom-built exhibition stands & booths",
                      "Interactive & experiential display structures",
                      "Lighting and sounds",
                    ][idx]
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 – 2 images */}
          <div className="gallery-row">
            {[g4, g5].map((img, idx) => (
              <div
                className="gallery-item half"
                key={idx + 3}
                ref={(el) => (galleryItemsRef.current[idx + 3] = el)}
              >
                <img src={img} alt={`Gallery ${idx + 4}`} />
                <div className="gallery-text left">
                  {[
                    "Temporary and\nmodular setup\nsolutions",
                    "Specialized\nretail & event\nprops",
                  ][idx]
                    .split("\n")
                    .map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 – 1 large image */}
          <div className="gallery-row">
            <div
              className="gallery-item full"
              ref={(el) => (galleryItemsRef.current[5] = el)}
            >
              <img src={g6} alt="Stage design & setup for events" />
              <div className="gallery-text left">
                Stage design
                <br />& setup for
                <br />
                events
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="branding-section"
        style={{ backgroundImage: `url(${brandingBg})` }}
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <h2 className="branding-title">Outdoor & Indoor Branding</h2>
        <div className="branding-box">
          <p className="branding-left">
            <strong>
              Our expert branding solutions help businesses establish a
              compelling and professional presence through high-quality indoor
              and outdoor branding elements.
            </strong>
          </p>
          <p className="branding-right">
            We design and produce customized signage, displays, banners, and
            promotional materials that enhance brand recognition and ensure
            visibility in any setting. Whether you need eye-catching storefront
            signs, exhibition backdrops, or large-scale outdoor billboards, we
            offer tailored solutions to meet your specific needs. Our goal is to
            create a consistent and powerful brand identity that resonates with
            your target audience, reinforcing your message in a visually
            striking and engaging way.
          </p>
        </div>
      </div>
      <div className="ourwork-carousel">
        <h2 className="work-title">OUR WORK</h2>
        <div className="ourwork-track">
          {repeatedWorkImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`our-work-${idx}`}
              className="ourwork-slide"
            />
          ))}
        </div>
      </div>

      <div
        className="materials-section"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <h2 className="materials-title">Materials</h2>
        <div className="materials-grid">
          {[
            { img: materials1, name: "Acrylic" },
            { img: materials2, name: "GLass" },
            { img: materials3, name: "Metal" },
            { img: materials4, name: "Acrylic" },
          ].map(({ img, name }, i) => (
            <div
              className="material-image-wrapper"
              key={i}
              ref={(el) => (materialItemsRef.current[i] = el)}
            >
              <img src={img} alt={`Material ${i + 1}`} />
              <div className="material-overlay">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Production;
