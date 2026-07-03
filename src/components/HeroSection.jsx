import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection({ 
  title = "Building Strong Foundations for the Future", 
  subtitle = "Quora Builders is a premier construction firm setting new standards in residential, commercial, and industrial development. We combine innovative architecture with durable craftsmanship.",
  imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070", // High quality construction crane/sunset photo
  height = "h-screen"
}) {
  const containerRef = useRef(null);
  
  // Connect scroll hook to this container
  const { scrollY } = useScroll();
  
  // Transform scroll position to vertical displacement for the background parallax image
  const backgroundY = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full ${height} overflow-hidden bg-primary flex items-center justify-center px-4 sm:px-6 lg:px-8`}
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] left-0 right-0 z-0 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <img 
          src={imageUrl} 
          alt="Parallax Construction Background" 
          className="w-full h-full object-cover select-none pointer-events-none"
          loading="eager"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-left w-full">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="space-y-6 md:space-y-8"
        >
          {/* Tagline Accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="w-12 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs md:text-sm font-extrabold">
              Welcome to Quora Builders
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl"
          >
            {title.split(' ').map((word, index) => {
              if (word === "Strong" || word === "Future" || word === "Foundations") {
                return <span key={index} className="text-accent">{word} </span>;
              }
              return word + ' ';
            })}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-medium"
          >
            {subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              to="/projects"
              className="bg-accent hover:bg-accent-hover text-primary font-black px-6 sm:px-8 py-3.5 rounded-sm transition-all duration-300 shadow-lg hover:shadow-accent/25 flex items-center space-x-2 border-2 border-accent hover:border-accent-hover transform hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-bold px-6 sm:px-8 py-3.5 rounded-sm transition-all duration-300 border-2 border-white hover:border-white transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave/Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-light to-transparent z-10" />

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer text-white/60 hover:text-white transition-colors duration-300 hidden md:flex"
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
      >
        <span className="text-xs tracking-wider uppercase font-semibold mb-1">Scroll Down</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </div>
  );
}
