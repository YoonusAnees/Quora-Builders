import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export default function PageWrapper({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset scroll instantly with zero layout stutter
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // New page content glides upward into view as the pillars retract downwards
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          delay: 0.28,
          clearProps: "transform",
        }
      );
    }, container);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen pt-20 flex flex-col justify-between will-change-transform"
    >
      {children}
    </div>
  );
}
