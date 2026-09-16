import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Target,
  Compass,
  Shield,
  Award,
  Sparkles,
  Handshake,
  Users2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Building2,
  CheckCircle2,
  Layers,
  HardHat,
  Ruler,
  X,
  ArrowRight,
  Quote,
  TrendingUp,
  Activity,
  History,
  MousePointerClick
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PageWrapper from '../components/PageWrapper';

import SEO from '../components/SEO';
import { COMPANY } from '../config/company';

export default function About() {
  // --- STORYTELLING CHAPTER CAROUSEL STATE ---
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // --- BLUEPRINT SIMULATOR STATE ---
  const [activeStage, setActiveStage] = useState(0);

  // --- MODAL STATE FOR DETAILED STORY READOUT ---
  const [activeModalData, setActiveModalData] = useState(null);

  // --- SCROLL DRIVEN REFS FOR CHAPTERS & CRAFT ---
  const evolutionContainerRef = useRef(null);
  const craftContainerRef = useRef(null);

  // Bind scroll progress for EVOLUTION STORY (4 Pages)
  const { scrollYProgress: evolutionScroll } = useScroll({
    target: evolutionContainerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(evolutionScroll, "change", (latest) => {
    const page = Math.min(3, Math.max(0, Math.floor(latest * 4)));
    setActiveChapter(page);
  });

  // Bind scroll progress for CRAFT & METHODOLOGY (4 Pages)
  const { scrollYProgress: craftScroll } = useScroll({
    target: craftContainerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(craftScroll, "change", (latest) => {
    const page = Math.min(3, Math.max(0, Math.floor(latest * 4)));
    setActiveStage(page);
  });

  const storyChapters = [
    {
      id: "chapter-1",
      year: "2019",
      badge: "Chapter I: The Foundation",
      title: "Forging Engineering Rigor in Kandy",
      subtitle: "From local geotechnical surveys to structured residential contracting.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
      quote: "A house in Kandy begins not with brickwork, but with understanding the slope and soil beneath.",
      speaker: "Quora Lead Civil Engineer",
      metricValue: "3",
      metricLabel: "Founding Engineers",
      story: "Quora Builder was established in Akurana, Kandy by experienced civil and structural engineers who recognized a critical need in local house construction: bridging the gap between architectural blueprints, slope foundation engineering, and site execution. We established a firm commitment to zero safety incidents and fixed BOQ transparency.",
      highlights: [
        "First geotechnical site survey completed in Akurana with 100% precision.",
        "Established specialized slope foundation engineering standards for Kandy hills.",
        "Created transparent itemized BOQ contracts for homeowners."
      ]
    },
    {
      id: "chapter-2",
      year: "2021",
      badge: "Chapter II: Expanding Horizons",
      title: "Hillside Residence Breakthroughs",
      subtitle: "Constructing multi-storey family homes across Kandy's prime suburbs.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1200",
      quote: "Steep topography is an engineering opportunity when foundations are anchored directly to bedrock.",
      speaker: "Senior Structural Project Lead",
      metricValue: "15+",
      metricLabel: "Homes Constructed",
      story: "By 2021, Quora Builder expanded operations into Peradeniya, Katugastota, and Kundasale. Our engineering team developed specialized stepped pile footings and reinforced concrete retaining walls, enabling homeowners to build luxury villas safely on steep hillside terrain.",
      highlights: [
        "Delivered flagship 3,200 sq ft luxury villa in Akurana ahead of deadline.",
        "Maintained 100% zero-accident safety record across active project sites.",
        "Expanded core operations across Kandy district suburbs."
      ]
    },
    {
      id: "chapter-3",
      year: "2023",
      badge: "Chapter III: Modern Architectural Sync",
      title: "3D BIM Drafting & Eco Building",
      subtitle: "Combining 3D digital walkthroughs with rain-resilient building materials.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
      quote: "We design homes optimized for Kandy's hill country climate, natural lighting, and heavy rainfall.",
      speaker: "Principal Architectural Designer",
      metricValue: "100%",
      metricLabel: "Council Approval Rate",
      story: "To streamline local authority approvals, Quora integrated full 3D Building Information Modeling (BIM) drafting. Homeowners can preview their complete residence in 3D prior to breaking ground, ensuring spatial harmony, solar shading, and rainwater harvesting efficiency.",
      highlights: [
        "Achieved 100% approval rate for Kandy Municipal & Council permit submissions.",
        "Integrated subterranean gravel drainage and geotextile moisture barriers.",
        "Pioneered custom teak timber and titanium floor finishes."
      ]
    },
    {
      id: "chapter-4",
      year: "2025+",
      badge: "Chapter IV: Excellence & Beyond",
      title: "Kandy's Trusted Home Builder",
      subtitle: "25+ completed residential developments and active sites across Kandy.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
      quote: "When clients walk into a Quora-built residence, they experience durability, elegance, and peace of mind.",
      speaker: "Quora Executive Management",
      metricValue: "25+",
      metricLabel: "Completed Landmarks",
      story: "Today, Quora Builder stands as a leading house construction and structural engineering firm in Kandy, Sri Lanka. With active project sites in Digana, Ampitiya, Kadugannawa, and Katugastota, our team continues to build durable, beautiful homes engineered for generations.",
      highlights: [
        "Over 25 completed luxury and family residences across Kandy.",
        "Maintained 100% on-time handover record.",
        "Comprehensive 10-year structural warranty on all foundation works."
      ]
    }
  ];

  // Auto-play interval fallback if user enables slideshow mode
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveChapter((prev) => (prev + 1) % storyChapters.length);
      }, 7000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, storyChapters.length]);

  // Blueprint Story Simulator Stages (4 Pages)
  const blueprintStages = [
    {
      phase: "01",
      title: "Geotechnical Analysis & Soil Drilling",
      subtitle: "Mapping soil composition, bedrock depth, and foundation load tolerance.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800",
      icon: Ruler,
      stat: "Geotechnical Core Drills",
      description: "Before foundation work begins, core drills and topographical mapping evaluate soil load-bearing capacity to prevent foundation settling or earth shifts."
    },
    {
      phase: "02",
      title: "Foundation & Retaining Walls",
      subtitle: "Constructing stepped pile footings and reinforced concrete retaining walls.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800",
      icon: HardHat,
      stat: "Grade 30 Structural Concrete",
      description: "Stepped concrete footings and retaining walls with weep hole drainage systems are constructed to secure hillside plots against heavy monsoon rains."
    },
    {
      phase: "03",
      title: "Superstructure & Roof Enclosure",
      subtitle: "Erecting columns, brick masonry, and timber/steel roof structures.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
      icon: Layers,
      stat: "High-Tensile Rebar Steel",
      description: "Columns and masonry walls are erected with high-grade cement and reinforced steel. Roof trusses and waterproofing membranes enclose the building envelope."
    },
    {
      phase: "04",
      title: "Turnkey Finishing & Key Handover",
      subtitle: "Tiling, teak door joinery, utility testing, and final quality audit.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      icon: CheckCircle2,
      stat: "100% Quality Punch-List",
      description: "Final micro-inspections, utility wiring checks, titanium/porcelain tile polishing, and keys handover alongside complete structural warranty documentation."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      tag: "Non-Negotiable",
      description: "We enforce strict safety compliance across all job sites, valuing the health, lives, and well-being of our workers and the general public above all."
    },
    {
      icon: Award,
      title: "Unyielding Quality",
      tag: "Master Craftsmanship",
      description: "We source premium raw materials, execute precise structural engineering, and employ skilled master craftsmen to guarantee durable builds."
    },
    {
      icon: Sparkles,
      title: "Forward Innovation",
      tag: "Smart Engineering",
      description: "We implement advanced Building Information Modeling (BIM), eco-friendly materials, and smart facility configurations in our workflows."
    },
    {
      icon: Handshake,
      title: "Mutual Integrity",
      tag: "Transparent Terms",
      description: "We adhere strictly to budget estimates, maintain open transparent site updates, and build long-term relationships with homeowners."
    }
  ];

  const team = [
    {
      name: "Engineering Division",
      role: "Chartered Civil & Structural Engineers",
      bio: "Our lead civil engineering team oversees geotechnical soil testing, foundation design on sloped land, structural calculations, and CIDA compliance.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
      philosophy: "Precision structural engineering is the true bedrock of every home in Kandy."
    },
    {
      name: "Architectural Planning Team",
      role: "Architectural & 3D BIM Designers",
      bio: "Our architectural team specializes in custom 2D floor plans, 3D walkthroughs, and submission drawings for Kandy Municipal Council and Pradeshiya Sabhas.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      philosophy: "We design homes that embrace Kandy's natural landscape, sunlight, and ventilation."
    },
    {
      name: "Field Operations Division",
      role: "Project Managers & Site Supervisors",
      bio: "Our site managers supervise daily concrete pours, brickwork alignment, material testing, safety protocols, and weekly client progress reports.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      philosophy: "On-site discipline and transparent communication ensure timely key handovers."
    }
  ];

  const currChapter = storyChapters[activeChapter];
  const currStage = blueprintStages[activeStage];

  return (
    <PageWrapper>
      <SEO
        title="About Quora Builder | Civil & Structural Engineering in Kandy"
        description="Learn about Quora Builder's history, structural engineering standards, and commitment to custom house construction across Kandy, Sri Lanka."
        canonical="/about"
      />
      {/* ----------------------------------------------------
          1. SUB-HERO HEADER WITH STORY TEASER
      ---------------------------------------------------- */}
      <section className="relative bg-primary text-white py-16 sm:py-24 overflow-hidden border-b border-primary-light/30">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none select-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="absolute -right-20 -bottom-20 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-6 text-left">
            {/* <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 text-accent px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest"
            >
              <History className="w-3.5 h-3.5" />
              <span>Mobile-Optimized Storytelling</span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none"
            >
              A Legacy Built <br />
              <span className="text-accent">Steel by Steel.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-normal"
            >
            Watch our history unfold page by page — from foundational blueprints to skyline landmarks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#evolution-section"
                className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-primary font-extrabold px-6 py-3 rounded-lg shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm text-center"
              >
                <span>Scroll Into Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-around sm:justify-start space-x-4 sm:space-x-6 text-xs text-gray-300 pt-2 sm:pt-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-white/20">
                <div>
                  <span className="block text-lg sm:text-xl font-black text-white">4</span>
                  <span className="text-gray-400 text-[10px] sm:text-xs">Story Chapters</span>
                </div>
                <div>
                  <span className="block text-lg sm:text-xl font-black text-accent">4</span>
                  <span className="text-gray-400 text-[10px] sm:text-xs">Build Phases</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. SCROLL-DRIVEN "OUR EVOLUTION STORY" (4 MOBILE-RESPONSIVE PAGES)
      ---------------------------------------------------- */}
      <div id="evolution-section" ref={evolutionContainerRef} className="relative min-h-[220vh] sm:min-h-[300vh] bg-white">
        <div className="sticky top-12 sm:top-16 py-4 sm:py-8 flex flex-col justify-center min-h-[80vh] sm:min-h-[85vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

            {/* Header with Mobile Progress Indicator */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-6 gap-3">
              <div>
                <span className="text-accent uppercase tracking-widest font-semibold text-[10px] sm:text-xs mb-1 block">
                  OUR EVOLUTION STORY
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-primary">
                  The Quora Narrative: Chapter {activeChapter + 1} of 4
                </h2>
              </div>

              {/* Scroll Progress Pills & Mobile Touch Cues */}
              <div className="flex items-center justify-between sm:justify-end space-x-3 bg-neutral-light border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl">
                <span className="text-[11px] sm:text-xs font-bold text-primary flex items-center space-x-1.5">
                  {/* <span className="w-2 h-2 rounded-full bg-accent animate-ping shrink-0" /> */}
                  {/* <span>Scroll or Tap Tabs</span> */}
                </span>
                <div className="flex items-center space-x-1.5 pl-2 border-l border-gray-300">
                  {storyChapters.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveChapter(idx)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeChapter ? "w-6 sm:w-7 bg-accent" : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                      title={`Jump to Chapter ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Chapter Navigation Tabs (Horizontal Scrollable on Mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {storyChapters.map((chap, idx) => {
                const isActive = idx === activeChapter;
                return (
                  <button
                    key={chap.id}
                    onClick={() => setActiveChapter(idx)}
                    className={`flex items-center space-x-2 p-2 sm:p-3 rounded-xl transition-all duration-300 text-xs font-bold text-left cursor-pointer border ${isActive
                      ? "bg-primary text-white border-accent shadow-md translate-y-[-1px]"
                      : "bg-neutral-light text-neutral-muted hover:bg-gray-200 border-gray-200"
                      }`}
                  >
                    <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-black shrink-0 ${isActive ? "bg-accent text-primary" : "bg-gray-300 text-gray-700"
                      }`}>
                      0{idx + 1}
                    </span>
                    <div className="truncate">
                      <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider text-accent font-extrabold">{chap.year}</span>
                      <span className="block text-[11px] sm:text-xs truncate">{chap.badge.split(":")[1]}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sticky Mobile Card Display */}
            <div className="bg-neutral-light border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currChapter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Visual Image Column (Mobile Optimized Height) */}
                  <div className="lg:col-span-6 relative h-48 sm:h-64 lg:min-h-[440px] overflow-hidden group">
                    <img
                      src={currChapter.image}
                      alt={currChapter.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                    {/* Floating Metric Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary/90 backdrop-blur-md text-white p-2.5 sm:p-3.5 rounded-xl border border-accent/40 shadow-lg">
                      <span className="text-xl sm:text-3xl font-black text-accent block leading-none">
                        {currChapter.metricValue}
                      </span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-300 font-bold mt-0.5 block">
                        {currChapter.metricLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                      <span className="inline-block bg-accent text-primary px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-1">
                        {currChapter.badge}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
                        {currChapter.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Content Column */}
                  <div className="lg:col-span-6 p-4 sm:p-8 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-accent font-bold text-[11px] sm:text-xs uppercase tracking-widest flex items-center space-x-1.5">
                        <TrendingUp className="w-3.5 h-3.5 inline shrink-0" />
                        <span className="truncate">{currChapter.subtitle}</span>
                      </p>

                      <p className="text-neutral-dark text-xs sm:text-sm leading-relaxed font-normal">
                        {currChapter.story}
                      </p>

                      <div className="space-y-1 sm:space-y-1.5 pt-1">
                        <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-primary">Milestone Takeaways</h4>
                        {currChapter.highlights.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2 text-[11px] sm:text-xs text-neutral-muted">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compact Quote Block for Mobile */}
                    <div className="bg-white p-3 sm:p-4 rounded-xl border-l-4 border-accent shadow-sm space-y-1">
                      <p className="text-[11px] sm:text-xs italic text-primary font-medium">
                        "{currChapter.quote}"
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-bold text-accent uppercase tracking-wider">
                        — {currChapter.speaker}
                      </p>
                    </div>

                    {/* Page Indicator Footer */}
                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-neutral-muted pt-2 border-t border-gray-200">
                      <span>Chapter {activeChapter + 1} / 4</span>
                      {/* <span className="text-primary text-[10px] sm:text-[11px]">Scroll down for next page ↓</span> */}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------
          3. SCROLL-DRIVEN "OUR CRAFT & METHODOLOGY" (4 MOBILE-RESPONSIVE PAGES)
      ---------------------------------------------------- */}
      <div ref={craftContainerRef} className="relative min-h-[220vh] sm:min-h-[300vh] bg-neutral-light border-t border-b border-gray-200">
        <div className="sticky top-12 sm:top-16 py-4 sm:py-8 flex flex-col justify-center min-h-[80vh] sm:min-h-[85vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

            {/* Header with Mobile Progress Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-6 gap-3">
              <div>
                <span className="text-accent uppercase tracking-widest font-semibold text-[10px] sm:text-xs mb-1 block">
                  OUR CRAFT & METHODOLOGY
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-primary">
                  Interactive Story: Phase {activeStage + 1} of 4
                </h2>
              </div>

              {/* Mobile Progress Bar */}
              <div className="flex items-center justify-between sm:justify-end space-x-3 bg-white border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-sm">
                <span className="text-[11px] sm:text-xs font-bold text-primary flex items-center space-x-1.5">
                  {/* <span className="w-2 h-2 rounded-full bg-accent animate-ping shrink-0" /> */}
                  {/* <span>Scroll or Scrub Phases</span> */}
                </span>
                <div className="flex items-center space-x-1.5 pl-2 border-l border-gray-300">
                  {blueprintStages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStage(idx)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeStage ? "w-6 sm:w-7 bg-accent" : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                      title={`Jump to Phase ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Selector Pills (Grid Responsiveness) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 mb-4 sm:mb-6">
              {blueprintStages.map((stg, idx) => {
                const Icon = stg.icon;
                const isSelected = idx === activeStage;
                return (
                  <button
                    key={stg.phase}
                    onClick={() => setActiveStage(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl text-left transition-all duration-300 border cursor-pointer ${isSelected
                      ? "bg-primary text-white border-accent shadow-md translate-y-[-1px]"
                      : "bg-white text-neutral-dark hover:border-gray-300 border-gray-200"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded ${isSelected ? "bg-accent text-primary" : "bg-neutral-light text-neutral-muted"
                        }`}>
                        Phase {stg.phase}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-accent" : "text-neutral-muted"}`} />
                    </div>
                    <h4 className={`text-[11px] sm:text-xs font-bold truncate ${isSelected ? "text-white" : "text-primary"}`}>
                      {stg.title}
                    </h4>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Display Card */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl p-4 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currStage.phase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center"
                >
                  <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-accent/15 border border-accent/40 text-accent-hover px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider">
                      <span>Phase {currStage.phase} of 04</span>
                      <span>•</span>
                      <span className="truncate">{currStage.stat}</span>
                    </div>

                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-primary leading-tight">
                      {currStage.title}
                    </h3>

                    <p className="text-neutral-muted text-xs sm:text-sm leading-relaxed font-medium">
                      {currStage.subtitle}
                    </p>

                    <p className="text-neutral-dark text-xs sm:text-sm leading-relaxed">
                      {currStage.description}
                    </p>

                    <div className="bg-neutral-light p-2.5 sm:p-3 rounded-xl border border-gray-200 flex items-center justify-between text-[11px] sm:text-xs font-bold text-primary">
                      <span className="flex items-center space-x-2">
                        <Activity className="w-3.5 h-3.5 text-accent" />
                        <span>Engineering Standard</span>
                      </span>
                      <span className="text-accent font-extrabold">ISO 9001 Compliant</span>
                    </div>

                    <button
                      onClick={() => setActiveModalData({
                        title: `Phase ${currStage.phase}: ${currStage.title}`,
                        subtitle: currStage.subtitle,
                        image: currStage.image,
                        content: currStage.description,
                        stat: currStage.stat
                      })}
                      className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-extrabold text-primary hover:text-accent transition-colors pt-1 cursor-pointer"
                    >
                      <span>Read Detailed Phase Briefing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="relative rounded-xl overflow-hidden shadow-md h-44 sm:h-80">
                      <img
                        src={currStage.image}
                        alt={currStage.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 bg-primary/80 backdrop-blur-sm p-2.5 rounded-lg border border-white/10 text-white text-xs">
                        <span className="font-bold text-accent uppercase tracking-wider block text-[9px] sm:text-[10px]">Phase Highlight</span>
                        <span className="text-[11px] sm:text-xs leading-tight block">{currStage.stat} — Monitored via 4D BIM digital twins.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------
          4. CORE VALUES SECTION WITH INTERACTIVE HOVER CARDS
      ---------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="WHAT DRIVES OUR NARRATIVE"
            title="Our Foundational Guiding Values"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="bg-neutral-light border border-gray-200 rounded-xl p-5 sm:p-6 hover:bg-white hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg group flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="p-2.5 sm:p-3 bg-primary text-accent rounded-xl group-hover:bg-accent group-hover:text-primary transition-colors">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white rounded-full border border-gray-200 text-neutral-muted">
                        {val.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-primary mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
                      {val.title}
                    </h3>

                    <p className="text-neutral-muted text-xs leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-200/60 text-[10px] sm:text-[11px] font-bold text-accent uppercase tracking-wider flex items-center justify-between">
                    <span>Core Pillar #{idx + 1}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. LEADERSHIP & STORYTELLERS SECTION
      ---------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-neutral-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="THE MINDS BEHIND THE STORY"
            title="Leadership Steering Quora's Vision"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 sm:h-64 overflow-hidden relative group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-90" />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <h3 className="text-base sm:text-lg font-extrabold">{member.name}</h3>
                      <p className="text-accent font-bold text-[10px] sm:text-xs uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <p className="text-neutral-muted text-xs sm:text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="bg-neutral-light p-3 rounded-lg border-l-2 border-accent text-xs italic text-primary font-medium">
                      "{member.philosophy}"
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 pt-0">
                  <button
                    onClick={() => setActiveModalData({
                      title: member.name,
                      subtitle: member.role,
                      image: member.image,
                      content: `${member.bio}\n\nLeadership Philosophy:\n"${member.philosophy}"`,
                      stat: "Senior Executive Leader"
                    })}
                    className="w-full py-2.5 bg-neutral-light hover:bg-primary hover:text-white text-primary border border-gray-200 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>Read Executive Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          6. INTERACTIVE STORY DETAIL MODAL OVERLAY (MOBILE RESPONSIVE)
      ---------------------------------------------------- */}
      <AnimatePresence>
        {activeModalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
            onClick={() => setActiveModalData(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[85vh] sm:max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setActiveModalData(null)}
                className="absolute top-3 right-3 z-10 bg-primary/80 text-white hover:bg-accent hover:text-primary p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {activeModalData.image && (
                <div className="h-44 sm:h-56 relative shrink-0">
                  <img
                    src={activeModalData.image}
                    alt={activeModalData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white">
                    <span className="text-accent text-[10px] sm:text-xs font-black uppercase tracking-wider block">
                      {activeModalData.stat || "Story Detail"}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-extrabold">{activeModalData.title}</h3>
                    <p className="text-[11px] sm:text-xs text-gray-300 font-medium">{activeModalData.subtitle}</p>
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-8 space-y-3 sm:space-y-4 overflow-y-auto">
                <div className="whitespace-pre-line text-xs sm:text-sm text-neutral-dark leading-relaxed font-normal">
                  {activeModalData.content}
                </div>

                <div className="pt-3 border-t border-gray-200 flex justify-end">
                  <button
                    onClick={() => setActiveModalData(null)}
                    className="bg-primary hover:bg-primary-light text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Close Briefing
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
