// File: src/pages/Arkanhome.jsx
import React, { useEffect, useMemo } from "react";
import "./Arkanhome.css";

// Assets
import heroImage from "../../assets/arkanhero.webp";
import production from "../../assets/production.webp";
import team from "../../assets/team.webp";
import client from "../../assets/client.webp";
import solution from "../../assets/solution.webp";
import track from "../../assets/track.webp";

// Partner & client logos
import partner1 from "../../assets/partner1.webp";
import partner2 from "../../assets/partner2.webp";
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

const SERVICES = [
  {
    title: "PRODUCTION",
    href: "/production",
    img: production,
    blurb:
      "Full in-house fabrication, printing, and event setup services—delivering signage, booths, branding elements, LED screen rigs, and premium finishes on time, every time.",
  },
];

const WHY = [
  {
    title: "Expert Fabrication Team",
    text: "Specialists in acrylic, wood, metal, and composite works with CNC, laser, and advanced finishing tools.",
    img: team,
  },
  {
    title: "Client-Focused Approach",
    text: "We adapt every production job to your deadlines, brand standards, and on-site requirements.",
    img: client,
  },
  {
    title: "Integrated Solutions",
    text: "From design files to installation—one team handles every stage, reducing errors and delays.",
    img: solution,
  },
  {
    title: "Proven Track Record",
    text: "A long list of completed booths, signage systems, and brand activations across the Kingdom.",
    img: track,
  },
];

const PARTNERS = [
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

const CLIENTS = [
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

export default function Arkanhome() {
  const marqueeClients = useMemo(() => {
    const out = [];
    let i = 0;
    while (out.length < 20) {
      out.push(CLIENTS[i % CLIENTS.length]);
      i++;
    }
    return out;
  }, []);

  const marqueePartners = useMemo(() => {
    const out = [];
    let i = 0;
    while (out.length < 20) {
      out.push(PARTNERS[i % PARTNERS.length]);
      i++;
    }
    return out;
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in"));
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="arkan">
      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <img src={heroImage} alt="Production hero visual" className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content" data-reveal>
          <h1 className="hero__title">
            PRECISION PRODUCTION WITH <span>KINGDOM</span>-GRADE QUALITY
          </h1>
          <p className="hero__subtitle">• Production Excellence •</p>
          <a className="btn btn--primary" href="/production" aria-label="Read more about Production">
            Read more
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services container" aria-labelledby="services-title">
        <header className="section__head" data-reveal>
          <h2 id="services-title">Our Production Service</h2>
          <p>From workshop to on-site installation—seamless, reliable, and built to last.</p>
        </header>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article
              className="card"
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="card__media">
                <img src={s.img} alt={`${s.title} illustration`} loading="lazy" />
              </div>
              <div className="card__body">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__blurb">{s.blurb}</p>
                <a className="btn btn--ghost" href={s.href} aria-label={`Read more about ${s.title}`}>
                  Read more ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why container" aria-labelledby="why-title">
        <header className="section__head" data-reveal>
          <h2 id="why-title">Why choose our Production?</h2>
        </header>
        <div className="why__list">
          {WHY.map((w, i) => (
            <div
              className="why__item"
              key={w.title}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img className="why__icon" src={w.img} alt="" aria-hidden="true" loading="lazy" />
              <div className="why__text">
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEES */}
      <section className="logos" aria-label="Clients and partners">
        <div className="container">
          <h2 className="section__title" data-reveal>Our Clients</h2>
          <div className="marquee" data-reveal>
            <div className="marquee__track">
              {marqueeClients.map((src, i) => (
                <img key={`c-${i}`} src={src} alt="Client logo" loading="lazy" />
              ))}
            </div>
          </div>

          <h2 className="section__title" data-reveal>Our Partners</h2>
          <div className="marquee marquee--reverse" data-reveal>
            <div className="marquee__track">
              {marqueePartners.map((src, i) => (
                <img key={`p-${i}`} src={src} alt="Partner logo" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
