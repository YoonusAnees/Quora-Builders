import { useEffect, useState } from "react";
import logo from "../assets/Logo.webp";
import "../assets/QuoraBuildersLoader.css";

const STAGES = [
    { threshold: 0, text: "Designing Architectural Blueprints" },
    { threshold: 25, text: "Engineering Sloped Foundations" },
    { threshold: 55, text: "Erecting Reinforced Superstructure" },
    { threshold: 85, text: "Crafting Precision Interior Finishes" },
    { threshold: 99, text: "Welcome to Quora Builders" },
];

const QuoraBuildersLoader = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [fill, setFill] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const duration = 2400;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth cubic ease out
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentFill = easedProgress * 100;
            setFill(currentFill);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsComplete(true);
                // Hold briefly on 100% to appreciate the completed state & shine effect
                setTimeout(() => {
                    setExiting(true);
                    setTimeout(() => {
                        setLoading(false);
                    }, 700);
                }, 400);
            }
        };

        const animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Get current construction stage text based on progress percentage
    const currentStage = [...STAGES].reverse().find(s => fill >= s.threshold)?.text || STAGES[0].text;

    return (
        <>
            {loading && (
                <div
                    className={`qb-loader ${exiting ? "qb-loader-exiting" : ""}`}
                    aria-live="polite"
                    aria-busy={!isComplete}
                >
                    {/* Ambient Background Glows */}
                    <div className="qb-bg-glow qb-bg-glow-1" />
                    <div className="qb-bg-glow qb-bg-glow-2" />
                    <div className="qb-blueprint-grid" />

                    <div className="qb-loader-content">
                        {/* Brand Emblem / Logo Badge */}
                        <div className="qb-badge-wrapper">
                            <div className="qb-badge-glow" />
                            <div className="qb-badge">
                                <img
                                    src={logo}
                                    alt="Quora Builders"
                                    className="qb-badge-img"
                                />
                            </div>
                        </div>

                        {/* Animated Waterfill Logo Text */}
                        <div
                            className="qb-logo"
                            style={{
                                "--fill-height": `${fill}%`,
                            }}
                        >
                            {/* Gold Fill */}
                            <span className="qb-text qb-gold" aria-hidden="true">
                                QUORA BUILDERS
                            </span>

                            {/* Crisp Outline */}
                            <span className="qb-text qb-outline">
                                QUORA BUILDERS
                            </span>

                            {/* Waterline / Laser Scan Spark Indicator */}
                            <div
                                className="qb-waterline"
                                style={{ bottom: `${fill}%` }}
                            />
                        </div>

                        {/* Tagline & Location */}
                        <div className="qb-sub-header">
                            <span className="qb-subtitle">HOUSE CONSTRUCTION & ENGINEERING</span>
                            <span className="qb-location-tag">KANDY • SRI LANKA</span>
                        </div>

                        {/* Architectural Measuring Ruler & Progress Meter */}
                        <div className="qb-meter-wrapper">
                            <div className="qb-ruler">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`qb-tick ${i % 6 === 0 ? "qb-tick-lg" : i % 2 === 0 ? "qb-tick-md" : "qb-tick-sm"}`}
                                    />
                                ))}
                            </div>

                            <div className="qb-progress-track">
                                <div
                                    className="qb-progress-bar"
                                    style={{ width: `${fill}%` }}
                                >
                                    <div className="qb-progress-light" />
                                </div>
                            </div>
                        </div>

                        {/* Status readout & Percentage */}
                        <div className="qb-footer-status">
                            <div className="qb-status-indicator">
                                {/* <span className={`qb-status-dot ${isComplete ? "qb-status-ready" : ""}`} /> */}
                                <span className="qb-status-text">{currentStage}</span>
                            </div>
                            <span className="qb-percentage">{Math.round(fill)}%</span>
                        </div>
                    </div>
                </div>
            )}

            <div
                className={`qb-page ${loading ? "qb-page-hidden" : "qb-page-visible"}`}
            >
                {children}
            </div>
        </>
    );
};

export default QuoraBuildersLoader;