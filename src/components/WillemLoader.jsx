import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../assets/Logo.webp";
import "./WillemLoader.css";

export default function WillemLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const containerRef = useRef(null);

  const finishLoading = () => {
    setExiting(true);
    document.body.style.overflow = "";
    setTimeout(() => {
      setLoading(false);
    }, 650);
  };

  useEffect(() => {
    if (!loading) return;

    // Lock background scroll during the initial loader
    document.body.style.overflow = "hidden";

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const loadingLetter = container.querySelectorAll(".willem__letter");
      const box = container.querySelectorAll(".willem-loader__box");
      const growingImage = container.querySelectorAll(".willem__growing-image");
      const logoWrap = container.querySelectorAll(".willem__logo-wrap");
      const headingStart = container.querySelectorAll(".willem__h1-start");
      const headingEnd = container.querySelectorAll(".willem__h1-end");

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.inOut",
        },
        onComplete: () => {
          // Pause briefly on the completed QUORA [ Logo ] BUILDERS mark, then smoothly fade out
          setTimeout(() => {
            finishLoading();
          }, 700);
        },
      });

      // 1. Initially show QUORA BUILDERS together in the middle
      if (loadingLetter.length) {
        tl.from(loadingLetter, {
          yPercent: 110,
          stagger: 0.02,
          duration: 1.0,
          ease: "expo.out",
        });
      }

      // 2. QUORA moves left, BUILDERS moves right, and Logo opens up in the center
      if (box.length) {
        tl.fromTo(
          box,
          { width: "0.28em" },
          { width: "1.55em", duration: 1.15 },
          "< 0.75"
        );
      }

      if (growingImage.length) {
        tl.fromTo(
          growingImage,
          { width: "0%" },
          { width: "100%", duration: 1.15 },
          "<"
        );
      }

      if (logoWrap.length) {
        tl.fromTo(
          logoWrap,
          { scale: 0.3, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.05, ease: "back.out(1.2)" },
          "< 0.1"
        );
      }

      if (headingStart.length) {
        tl.fromTo(
          headingStart,
          { x: "0em" },
          { x: "-0.08em", duration: 1.15 },
          "<"
        );
      }

      if (headingEnd.length) {
        tl.fromTo(
          headingEnd,
          { x: "0em" },
          { x: "0.08em", duration: 1.15 },
          "<"
        );
      }
    }, containerRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <aside
          ref={containerRef}
          aria-label="Quora Builders Loading"
          className={`willem-loader-wrapper ${exiting ? "is--exiting" : ""}`}
        >
          <div className="willem-loader-stage">
            {/* Center animated title: QUORA [ Logo ] BUILDERS */}
            <div className="willem__h1">
              {/* QUORA (goes left) */}
              <div className="willem__h1-start">
                {"QUORA".split("").map((letter, i) => (
                  <span key={`q-${i}`} className="willem__letter">
                    {letter}
                  </span>
                ))}
              </div>

              {/* Center Logo expanding aperture */}
              <div className="willem-loader__box">
                <div className="willem-loader__box-inner">
                  <div className="willem__growing-image">
                    <div className="willem__logo-wrap">
                      <img
                        className="willem__logo-img"
                        src={logo}
                        loading="eager"
                        alt="Quora Builders Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* BUILDERS (goes right) */}
              <div className="willem__h1-end">
                {"BUILDERS".split("").map((letter, i) => (
                  <span key={`b-${i}`} className="willem__letter">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Website Content (Pre-rendered so Hero & Navbar appear with zero delay) */}
      {children}
    </>
  );
}
