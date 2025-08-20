// Production.jsx — New creative style, brand colors preserved
import React, { useMemo, useRef } from "react";
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
  const highlights = ["Exhibition & Event Setup", "Outdoor & Indoor Branding"];

  const ourWork = useMemo(
    () => [production1, production2, production3, production4, production5, production6, production7, production8],
    []
  );
 
  const railRef = useRef(null);
  const nudge = (dir = 1) => {
    const el = railRef.current;
    if (!el) return;
    const one = el.querySelector(".arkan-work-card");
    if (!one) return;
    const step = one.getBoundingClientRect().width + 16;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <main className="arkan-page" data-theme="light">
      {/* HERO */}
      <section className="arkan-hero">
        <div className="arkan-hero-grid">
          <div className="arkan-hero-copy">
            <h1 className="arkan-title">
              Production Services
              <span className="arkan-title-underline" />
            </h1>

            <ul className="arkan-badges" role="list" aria-label="Highlights">
              {highlights.map((txt, i) => (
                <li key={i} className="arkan-badge">
                  {txt}
                </li>
              ))}
            </ul>

            <a
              href="/files/productionportfolio.pdf"
              download="ProductionPortfolio.pdf"
              className="arkan-cta"
            >
              Download our Portfolio
            </a>
          </div>

          <div className="arkan-hero-visual">
            <img src={productionmain} alt="" className="arkan-hero-photo" />
          </div>
        </div>
      </section>

      {/* EXHIBITION & EVENT SETUP */}
      <section className="arkan-section">
        <header className="arkan-head">
          <h2 className="arkan-h2">Exhibition &amp; Event Setup</h2>
        </header>

        <div className="arkan-duo">
          <figure className="arkan-media">
            <img src={eventImage1} alt="Exhibition event" />
          </figure>

          <div className="arkan-text">
            <p className="arkan-lead">
              We specialize in providing comprehensive exhibition and event setup services.
            </p>
            <p className="arkan-body">
              Whether it's a trade show, a corporate event, or a marketing activation,
              we ensure that every detail is meticulously managed to create an impactful
              and immersive experience.
            </p>
          </div>
        </div>
        </section>

        {/* MOSAIC GALLERY */}
<section className="arkan-mosaic" aria-label="Exhibition highlights">
  <figure className="m1">
    <img src={g1} alt="Custom-built exhibition stands & booths" />
    <figcaption>Custom-built exhibition stands &amp; booths</figcaption>
  </figure>
  <figure className="m2">
    <img src={g2} alt="Interactive & experiential display structures" />
    <figcaption>Interactive &amp; experiential display structures</figcaption>
  </figure>
  <figure className="m3">
    <img src={g3} alt="Lighting and sounds" />
    <figcaption>Lighting and sounds</figcaption>
  </figure>
  <figure className="m4">
    <img src={g4} alt="Temporary and modular setup solutions" />
    <figcaption>Temporary and modular setup solutions</figcaption>
  </figure>
  <figure className="m5">
    <img src={g5} alt="Specialized retail & event props" />
    <figcaption>Specialized retail &amp; event props</figcaption>
  </figure>
  <figure className="m6">
    <img src={g6} alt="Stage design & setup for events" />
    <figcaption>Stage design &amp; setup for events</figcaption>
  </figure>
</section>

      {/* BRANDING */}
      <section className="arkan-panel">
        <div className="arkan-panel-bg" style={{ backgroundImage: `url(${brandingBg})` }} />
        <div className="arkan-panel-content">
          <h2 className="arkan-h2 arkan-h2-invert">Outdoor &amp; Indoor Branding</h2>
          <div className="arkan-panel-grid">
            <p className="arkan-bold">
              <strong>
                Our expert branding solutions help businesses establish a compelling and
                professional presence through high-quality indoor and outdoor branding elements.
              </strong>
            </p>
            <p className="arkan-body-invert">
              We design and produce customized signage, displays, banners, and promotional
              materials that enhance brand recognition and ensure visibility in any setting.
              Whether you need eye-catching storefront signs, exhibition backdrops, or
              large-scale outdoor billboards, we offer tailored solutions to meet your
              specific needs. Our goal is to create a consistent and powerful brand identity
              that resonates with your target audience, reinforcing your message in a visually
              striking and engaging way.
            </p>
          </div>
        </div>
      </section>

{/* OUR WORK — HORIZONTAL ACCORDION */}
<section className="arkan-section">
  <header className="arkan-head arkan-head--row">
    <h2 className="arkan-h2">OUR WORK</h2>
    <div className="arkan-controls" aria-hidden>
      {/* grid controls not needed for accordion view */}
    </div>
  </header>

  <div className="arkan-workrail" ref={railRef}>
    {ourWork.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`our-work-${i + 1}`}
        className="arkan-work-card"
        tabIndex={0} /* enables keyboard focus to expand on tab */
      />
    ))}
  </div>
</section>


      {/* MATERIALS */}
      <section className="arkan-section">
        <header className="arkan-head">
          <h2 className="arkan-h2">Materials</h2>
        </header>

        <div className="arkan-materials">
          {[
            { img: materials1, name: "Acrylic" },
            { img: materials2, name: "GLass" },
            { img: materials3, name: "Metal" },
            { img: materials4, name: "Wood" },
          ].map(({ img, name }, i) => (
            <figure key={i} className="arkan-mat">
              <img src={img} alt={`Material ${i + 1}`} />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Production;
