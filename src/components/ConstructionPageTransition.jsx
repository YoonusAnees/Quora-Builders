import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./ConstructionPageTransition.css";

const ROUTE_TITLES = {
  "/": "SITE OVERVIEW",
  "/about": "ENGINEERING INTEGRITY",
  "/services": "CORE SERVICES ",
  "/projects": "PORTFOLIO ",
  "/contact": "SITE CONSULTATION ",
  "/house-construction-kandy": "HILLSIDE FOUNDATIONS",
  "/house-construction-cost-kandy": "COST GUIDE ",
};

export default function ConstructionPageTransition() {
  const location = useLocation();
  const navigate = useNavigate();

  const overlayRef = useRef(null);
  const reticleRef = useRef(null);
  const crosshairHRef = useRef(null);
  const crosshairVRef = useRef(null);
  const coordsRef = useRef(null);

  const isFirstMount = useRef(true);
  const isTransitioning = useRef(false);
  const activeTimeline = useRef(null);

  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [pulseRipples, setPulseRipples] = useState([]);

  // High-performance quickTo setters for 120fps mouse physics
  const quickX = useRef(null);
  const quickY = useRef(null);
  const quickCrossH = useRef(null);
  const quickCrossV = useRef(null);

  const getPageTitle = (path) => {
    if (ROUTE_TITLES[path]) return ROUTE_TITLES[path];
    if (path.startsWith("/projects/")) return "PROJECT SPEC // BLUEPRINT";
    if (path.startsWith("/services/")) return "SERVICE SPEC // STRUCTURAL SCOPE";
    if (path.startsWith("/locations/")) return "TOPOGRAPHY // KANDY SUBURB";
    if (path.startsWith("/guides/")) return "ENGINEERING GUIDE // CIDA";
    return "STRUCTURAL TRANSIT // NAVIGATION";
  };

  // Initialize mouse theodolite physics
  useEffect(() => {
    if (reticleRef.current) {
      quickX.current = gsap.quickTo(reticleRef.current, "x", {
        duration: 0.18,
        ease: "power2.out",
      });
      quickY.current = gsap.quickTo(reticleRef.current, "y", {
        duration: 0.18,
        ease: "power2.out",
      });
    }
    if (crosshairHRef.current) {
      quickCrossH.current = gsap.quickTo(crosshairHRef.current, "top", {
        duration: 0.18,
        ease: "power2.out",
      });
    }
    if (crosshairVRef.current) {
      quickCrossV.current = gsap.quickTo(crosshairVRef.current, "left", {
        duration: 0.18,
        ease: "power2.out",
      });
    }
  }, []);

  // Smooth mouse tracking with live millimeter coordinates
  const handlePointerMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (quickX.current && quickY.current) {
      quickX.current(x);
      quickY.current(y);
    }
    if (quickCrossH.current && quickCrossV.current) {
      quickCrossH.current(y);
      quickCrossV.current(x);
    }

    if (coordsRef.current) {
      coordsRef.current.textContent = `X: ${Math.round(x * 2)}mm | Y: ${Math.round(y * 2)}mm`;
    }
  };

  // Dynamic sonar click pulses during transit
  const handleClick = (e) => {
    const newPulse = { id: Date.now(), x: e.clientX, y: e.clientY };
    setPulseRipples((prev) => [...prev.slice(-3), newPulse]);
  };

  // The Master Glitch-Free 5 Foundation Pillar Transition
  const triggerTransition = useCallback(
    (targetPath) => {
      const overlay = overlayRef.current;
      if (!overlay || isTransitioning.current) return;

      isTransitioning.current = true;
      setCurrentPath(targetPath);

      if (activeTimeline.current) {
        activeTimeline.current.kill();
      }

      const columns = overlay.querySelectorAll(".cpt-column");
      const grid = overlay.querySelector(".cpt-blueprint-grid");
      const hud = overlay.querySelector(".cpt-hud-container");
      const laser = overlay.querySelector(".cpt-laser-scanner");

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          isTransitioning.current = false;
        },
      });

      activeTimeline.current = tl;

      // 1. Prepare overlay without disturbing the current page
      tl.set(overlay, { display: "block" })
        .set(columns, { transformOrigin: "top center", scaleY: 0 })
        .set([grid, hud, laser], { opacity: 0 })
        .set(laser, { top: "0%" })

        // 2. 5 Foundation concrete & steel pillars drop down in a staggered sequence
        .to(columns, {
          scaleY: 1,
          duration: 0.45,
          stagger: 0.035,
          ease: "power4.inOut",
          force3D: true,
        })

        // 3. Peak coverage: seamlessly swap route behind the pillars and reset scroll instantly
        .add(() => {
          navigate(targetPath);
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        })

        // 4. Illuminate CAD blueprint grid & central engineering telemetry HUD
        .to(
          grid,
          {
            opacity: 1,
            duration: 0.22,
            ease: "power2.out",
          },
          "< 0.1"
        )
        .to(
          hud,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        )

        // 5. Gold laser level line sweeps down the foundation
        .to(
          laser,
          {
            opacity: 1,
            duration: 0.08,
          },
          "<"
        )
        .to(laser, {
          top: "100%",
          duration: 0.42,
          ease: "power1.inOut",
        })

        // 6. Fade out telemetry HUD and blueprint grid
        .to(
          hud,
          {
            opacity: 0,
            y: -10,
            duration: 0.18,
            ease: "power2.in",
          },
          "> -0.1"
        )
        .to(
          grid,
          {
            opacity: 0,
            duration: 0.18,
          },
          "<"
        )
        .to(
          laser,
          {
            opacity: 0,
            duration: 0.1,
          },
          "<"
        )

        // 7. Pillars smoothly retract downwards into the foundation
        .set(columns, { transformOrigin: "bottom center" })
        .to(
          columns,
          {
            scaleY: 0,
            duration: 0.48,
            stagger: 0.035,
            ease: "power4.inOut",
            force3D: true,
          },
          "< 0.02"
        );
    },
    [navigate]
  );

  // Global capture-phase link interception to eliminate frame-0 route flash
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Find closest anchor tag
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, hashes, and modifier clicks
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.getAttribute("target") === "_blank" ||
        anchor.hasAttribute("download") ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Check if clicking the same page
      if (href === location.pathname) {
        e.preventDefault();
        return;
      }

      // Intercept navigation to drive the 5-pillar shutter wipe smoothly
      e.preventDefault();
      e.stopPropagation();

      triggerTransition(href);
    };

    document.addEventListener("click", handleGlobalClick, true);

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, [location.pathname, triggerTransition]);

  // Handle browser Back / Forward history buttons
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // If route changed externally (browser back/forward button), play smooth reveal
    if (!isTransitioning.current) {
      triggerTransition(location.pathname);
    }
  }, [location.pathname, triggerTransition]);

  const pageTitle = getPageTitle(currentPath);

  return (
    <div
      ref={overlayRef}
      className="cpt-overlay"
      onPointerMove={handlePointerMove}
      onClick={handleClick}
      aria-hidden="true"
    >
      {/* 5 Vertical Foundation Concrete & Steel Pillars (scaleY shutter wipe) */}
      <div className="cpt-columns-container">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`col-${i}`} className="cpt-column">
            {/* Technical measuring ruler ticks on pillar edges */}
            <div className="cpt-column-ruler">
              {Array.from({ length: 20 }).map((_, tickIdx) => (
                <div
                  key={`tick-${tickIdx}`}
                  className={`cpt-tick ${tickIdx % 4 === 0 ? "is--lg" : ""}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Architectural Blueprint CAD Grid */}
      <div className="cpt-blueprint-grid" />

      {/* Foundation Laser Level Scanning Line */}
      <div className="cpt-laser-scanner" />

      {/* Interactive Surveyor Laser Crosshairs */}
      <div ref={crosshairHRef} className="cpt-crosshair-h" />
      <div ref={crosshairVRef} className="cpt-crosshair-v" />

      {/* Interactive Surveyor Theodolite Reticle */}
      <div ref={reticleRef} className="cpt-surveyor-reticle">
        <div className="cpt-reticle-inner-dot" />
        <div ref={coordsRef} className="cpt-coordinates-tooltip">
          X: 0mm | Y: 0mm
        </div>
      </div>

      {/* Dynamic Click Sonar Pulse Waves */}
      {pulseRipples.map((ripple) => (
        <div
          key={ripple.id}
          className="cpt-click-pulse"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      {/* Center Engineering Telemetry HUD */}
      <div className="cpt-hud-container">
        <div className="cpt-hud-badge">
          {/* <span className="cpt-hud-badge-dot" /> */}
          <span>QUORA BUILDERS • STRUCTURAL TELEMETRY</span>
        </div>

        <h2 className="cpt-hud-target-title">
          {pageTitle.split("//")[0]}
          {pageTitle.includes("//") && (
            <span>// {pageTitle.split("//")[1]}</span>
          )}
        </h2>

        <div className="cpt-hud-telemetry">
          <div className="cpt-telemetry-item">
            <span className="text-yellow-500 font-bold">ELEV:</span> 540M
          </div>
          <div className="cpt-telemetry-item">
            <span className="text-yellow-500 font-bold">BEARING:</span> 074° NE
          </div>
          <div className="cpt-telemetry-item">
            <span className="text-yellow-500 font-bold">CONCRETE:</span> GRADE 30
          </div>
          <div className="cpt-telemetry-item">
            <span className="text-yellow-500 font-bold">ICTAD:</span> CIDA CERTIFIED
          </div>
        </div>
      </div>
    </div>
  );
}
