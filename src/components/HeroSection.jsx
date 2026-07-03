import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection({
  title = "Building Strong Foundations for the Future",
  subtitle = "Quora Builders is a premier construction firm setting new standards in residential, commercial, and industrial development. We combine innovative architecture with durable craftsmanship.",
  imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
  height = "min-h-screen",
}) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 800], ["0%", "22%"]);
  const textY = useTransform(scrollY, [0, 450], [0, 80]);
  const textOpacity = useTransform(scrollY, [0, 420], [1, 0]);

  const wordsToAccent = ["Strong", "Future", "Foundations"];

  return (
    <section
      ref={containerRef}
      className={`relative w-full ${height} overflow-hidden bg-primary flex items-center`}
    >
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-x-0 -top-[12%] h-[124%] z-0"
      >
        <img
          src={imageUrl}
          alt="Construction background"
          className="h-full w-full object-cover scale-105"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Decorative blur circles */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-10 top-28 hidden h-52 w-52 rounded-full bg-accent/20 blur-3xl lg:block"
      />

      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 left-10 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl md:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-0 pb-20 sm:px-6 md:pt-28 lg:px-8">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3 sm:mb-6"
          >
            <span className="h-1 w-10 rounded-full bg-accent sm:w-12" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-accent sm:text-sm">
              Welcome to Quora Builders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-4xl text-[38px] font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]"
          >
            {title.split(" ").map((word, index) => (
              <span
                key={index}
                className={wordsToAccent.includes(word) ? "text-accent" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/75 sm:text-base md:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3.5 text-sm font-black text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hover hover:border-accent-hover hover:shadow-accent/30 sm:w-auto sm:px-8"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-sm border-2 border-white/80 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-white sm:w-auto sm:px-8"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-28 bg-gradient-to-t from-neutral-light to-transparent" />

      {/* Scroll indicator */}
      <motion.button
        type="button"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight - 80,
            behavior: "smooth",
          })
        }
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center text-white/60 transition-colors duration-300 hover:text-white md:flex"
      >
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider">
          Scroll Down
        </span>
        <ChevronDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}