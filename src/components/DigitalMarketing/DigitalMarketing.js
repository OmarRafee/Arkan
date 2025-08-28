import React, { useEffect, useRef, useState } from "react";
import "./DigitalMarketing.css";
import DigitalMarketingImage from "../../assets/digitalmarketing.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import testvideo from "../../assets/testvideo.mp4";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalMarketing = () => {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const digitalRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Robust viewport height (handles iOS browser chrome)
  const getVH = () =>
    (window.visualViewport?.height) ||
    window.innerHeight ||
    document.documentElement.clientHeight ||
    800; // final fallback

  // Detect if device is mobile
  const isMobile = () => window.innerWidth <= 768;

  // Wait for video to be ready so durations are correct
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => setVideoLoaded(true);

    if (video.readyState >= 4) {
      setVideoLoaded(true);
    } else {
      video.addEventListener("loadeddata", handleReady);
      video.addEventListener("loadedmetadata", handleReady);
      video.addEventListener("error", handleReady);
    }

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("error", handleReady);
    };
  }, []);

  useEffect(() => {
    if (!videoLoaded) return;

    // Create smoother with mobile-optimized settings
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: isMobile() ? 0.5 : 1, // Reduced smoothing for mobile
      effects: true,
      normalizeScroll: true, // Improves touch scrolling
      smoothTouch: isMobile() ? 0.15 : false, // Light touch smoothing
      ignoreMobileResize: true // Prevent viewport resize issues
    });

    // Build animations
    const build = () => {
      const video = videoRef.current;
      if (!video) return;

      const vh = getVH();
      const vw = window.innerWidth;

      // ---- Tunables ----
      const HERO_PX = Math.round(vh * (isMobile() ? 0.8 : 1)); // Shorter hero on mobile
      const PX_PER_SEC = isMobile() ? 200 : 350; // Shorter video scrub on mobile
      const AFTER_PX = Math.round(vh * (isMobile() ? 0.2 : 0.5)); // Minimal tail
      // -------------------

      const dur = Math.max(video.duration || 1, 0.1);
      const VIDEO_PX = Math.round(dur * PX_PER_SEC);
      const TOTAL_PX = HERO_PX + VIDEO_PX + AFTER_PX;

      // Set content height dynamically
      gsap.set("#smooth-content", {
        minHeight: TOTAL_PX + vh // Just enough for all sections
      });

      // Kill previous ScrollTriggers
      ScrollTrigger.getAll().forEach((st) => st.kill());

      // Video scrub
      let scrollProxy = { t: 0 };
      let rafId;
      const updateVideoTime = () => {
        const next = Math.min(dur, Math.max(0, scrollProxy.t));
        if (Math.abs(video.currentTime - next) > 0.008) {
          try {
            video.currentTime = next;
          } catch (e) {
            console.warn("Video time update failed:", e);
          }
        }
        rafId = requestAnimationFrame(updateVideoTime);
      };

      // ----- PINS -----
      ScrollTrigger.create({
        trigger: ".digitalhome",
        start: "top top",
        end: "+=" + HERO_PX,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1
      });

      ScrollTrigger.create({
        trigger: ".digital",
        start: "top top",
        end: "+=" + VIDEO_PX, // Pin only for video scrub
        pin: ".digital-video-wrap",
        pinSpacing: true,
        anticipatePin: 1,
        onEnter: () => gsap.to(".digital-video-wrap", { autoAlpha: 1, duration: 0.2 }),
        onEnterBack: () => gsap.to(".digital-video-wrap", { autoAlpha: 1, duration: 0.2 }),
        onLeave: () => {
          if (Math.abs(video.currentTime - dur) > 0.1) {
            video.currentTime = dur;
          }
        },
        onLeaveBack: () => gsap.set(".digital-video-wrap", { autoAlpha: 0 })
      });

      // ----- MASTER TIMELINE -----
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=" + TOTAL_PX,
          scrub: isMobile() ? 0.3 : 0.5, // Faster scrub on mobile
          onUpdate: (self) => {
            scrollProxy.t = (self.progress * dur) || 0;
          }
        }
      });

      // ===== HERO =====
      const heroDur = HERO_PX;
      tl.addLabel("heroStart", 0);

      tl.fromTo(
        ".digital-marketing-image",
        { opacity: 1, scale: isMobile() ? 1 : 1.06 },
        { opacity: isMobile() ? 0.3 : 0, scale: 1, duration: heroDur * 0.2 },
        "heroStart"
      );

      tl.fromTo(
        ".digital-marketing-title",
        { scale: isMobile() ? 1.2 : 1.5, opacity: 1, x: 0 },
        { scale: 1, opacity: 0, x: isMobile() ? 0 : -vw * 0.8, duration: heroDur * 0.25 },
        "heroStart"
      );
      tl.fromTo(
        ".digital-marketing-subtitle",
        { scale: isMobile() ? 1.1 : 1.2, opacity: 1, x: 0 },
        { scale: 1, opacity: 0, x: isMobile() ? 0 : vw * 0.6, duration: heroDur * 0.25 },
        "heroStart"
      );

      tl.fromTo(
        ".digital-marketing-description",
        { scale: 0.95, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: heroDur * 0.35 },
        "heroStart+=" + heroDur * 0.1
      );
      tl.fromTo(
        ".Integrated-title",
        { scale: 0.9, opacity: 0, y: 40 },
        { scale: isMobile() ? 1 : 1.1, opacity: 1, y: 0, duration: heroDur * 0.35 },
        "heroStart+=" + heroDur * 0.15
      );

      tl.addLabel("cross", "heroStart+=" + heroDur * 0.75);
      tl.to(
        [".digital-marketing-description", ".Integrated-title"],
        { autoAlpha: 0, y: -30, duration: heroDur * 0.25 },
        "cross"
      );
      tl.to(".digital-video-wrap", { autoAlpha: 1, duration: heroDur * 0.25 }, "cross");

      // ===== VIDEO SCRUB =====
      tl.addLabel("videoStart", heroDur);

      video.pause();
      video.currentTime = 0;
      rafId = requestAnimationFrame(updateVideoTime);

      tl.to(
        scrollProxy,
        {
          t: dur,
          duration: VIDEO_PX,
          ease: "none"
        },
        "videoStart"
      );

      // ===== On-video points =====
      const points = gsap.utils.toArray(".video-point");
      if (points.length) {
        const weights = points.map((el) => {
          const w = parseFloat(el.getAttribute("data-len"));
          return Number.isFinite(w) && w > 0 ? w : 1;
        });
        const totalW = weights.reduce((a, b) => a + b, 0) || 1;
        const unit = VIDEO_PX / totalW;

        let acc = 0;
        gsap.set(".video-point", { transformOrigin: "50% 50%" });

        points.forEach((el, i) => {
          const segLen = weights[i] * unit;
          const startPx = heroDur + acc;
          const inEnd = startPx + segLen * 0.45;
          const outBeg = startPx + segLen * 0.55;
          const endPx = startPx + segLen;

          gsap.fromTo(
            el,
            { autoAlpha: 0, scale: isMobile() ? 0.8 : 0.6 },
            {
              autoAlpha: 1,
              scale: 1,
              ease: "power3.out",
              scrollTrigger: {
                containerAnimation: tl,
                start: startPx,
                end: inEnd,
                scrub: isMobile() ? 0.3 : 0.5
              }
            }
          );

          gsap.to(el, {
            autoAlpha: 0,
            scale: isMobile() ? 1.2 : 1.4,
            ease: "power3.inOut",
            scrollTrigger: {
              containerAnimation: tl,
              start: outBeg,
              end: endPx,
              scrub: isMobile() ? 0.3 : 0.5
            }
          });

          acc += segLen;
        });
      }

      // PROCESS STEPS
      ScrollTrigger.batch(".process-step", {
        trigger: ".process-section",
        start: isMobile() ? `top+=${HERO_PX + VIDEO_PX} top` : "top 80%", // Immediate start after video on mobile
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: isMobile() ? 0.5 : 0.7,
            ease: "power2.out",
            stagger: isMobile() ? 0.1 : 0.15
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 0,
            y: 24,
            duration: isMobile() ? 0.3 : 0.4,
            ease: "power2.out",
            stagger: isMobile() ? 0.05 : 0.1
          })
      });

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    };

    let cleanup = build();

    const doRefresh = () => {
      cleanup && cleanup();
      gsap.delayedCall(0.01, () => {
        cleanup = build();
        ScrollTrigger.refresh(true);
      });
    };

    window.addEventListener("orientationchange", doRefresh);
    window.addEventListener("resize", doRefresh);
    window.addEventListener("load", () => ScrollTrigger.refresh(true));
    gsap.delayedCall(0.1, () => ScrollTrigger.refresh(true));

    return () => {
      window.removeEventListener("orientationchange", doRefresh);
      window.removeEventListener("resize", doRefresh);
      cleanup && cleanup();
      ScrollSmoother.get()?.kill();
    };
  }, [videoLoaded]);

  return (
    <div id="smooth-wrapper" style={{ position: "relative", zIndex: 0 }}>
      <div id="smooth-content" ref={rootRef}>
        <section className="digitalhome">
          <img
            src={DigitalMarketingImage}
            alt="Digital Marketing"
            className="digital-marketing-image"
          />
          <h3 className="digital-marketing-title">Digital Marketing</h3>
          <p className="digital-marketing-subtitle">
            Elevate your brand with our expert digital marketing strategies.
          </p>
          <h3 className="Integrated-title">Integrated Marketing Delivers</h3>
          <p className="digital-marketing-description">
            Suadia Arabia is one of the most competitive markets in the region—where brands are
            constantly fighting for visibility and attention. You need more than just a marketing
            agency; you need a partner that understands your audience, speaks their
            language, and uses data-driven creativity to convert attention into loyal customers.
          </p>
        </section>

        <section className="digital" ref={digitalRef}>
          <div className="digital-video-wrap">
            <video
              ref={videoRef}
              className="digital-video"
              muted
              playsInline
              preload="metadata"
            >
              <source src={testvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="video-points">
              <div className="video-point left" data-len="1">
                <h3>Digital Marketing Strategy</h3>
                <p>
                  Custom strategies aligned with your objectives, industry trends, and customer
                  behavior in Suadia Arabia.
                </p>
              </div>

              <div className="video-point right" data-len="1">
                <h3>Social Media Management</h3>
                <p>
                  Engaging content and day-to-day community management to keep your brand active
                  and relevant.
                </p>
              </div>

              <div className="video-point left" data-len="1">
                <h3>Paid Advertising (PPC)</h3>
                <p>
                  Target the right people at the right time via Google Ads, Meta, LinkedIn, and
                  more.
                </p>
              </div>

              <div className="video-point right" data-len="1">
                <h3>Search Engine Optimization (SEO)</h3>
                <p>Sustainable, long-term organic traffic and higher visibility for your website.</p>
              </div>

              <div className="video-point left" data-len="1">
                <h3>Content Creation &amp; Branding</h3>
                <p>Impactful visuals, videos, and copywriting that resonate with your audience.</p>
              </div>

              <div className="video-point right" data-len="1">
                <h3>Event Marketing &amp; Offline Advertising</h3>
                <p>Booth design, activations, and campaigns that leave lasting impressions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <h2 className="process-title">Our Process</h2>
          <ol className="process-list">
            <li className="process-step">
              <h3>Understanding Your Business</h3>
              <p>Full brand and competitor analysis to set a solid foundation.</p>
            </li>
            <li className="process-step">
              <h3>Planning the Strategy</h3>
              <p>A clear roadmap designed around measurable KPIs.</p>
            </li>
            <li className="process-step">
              <h3>Creative Development</h3>
              <p>Crafting visuals, ads, and content tailored to your audience.</p>
            </li>
            <li className="process-step">
              <h3>Execution &amp; Monitoring</h3>
              <p>Launching campaigns across platforms with ongoing optimization.</p>
            </li>
            <li className="process-step">
              <h3>Measuring Results</h3>
              <p>Monthly reports and ROI analysis to track success.</p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default DigitalMarketing;