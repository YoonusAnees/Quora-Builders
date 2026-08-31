import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUpModule from "react-countup";
const CountUp = CountUpModule.default || CountUpModule;

import { HardHat, ShieldCheck, Clock, Users, ArrowRight, CheckCircle2, Star, MapPin, Calculator, Building2, Home as HomeIcon, Wrench } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { COMPANY, PROJECTS, SERVICES, LOCATIONS } from '../config/company';

export default function Home() {
  const aboutPoints = [
    "Specialized structural foundation engineering on Kandy's sloped plots.",
    "Certified civil & structural engineers adhering to CIDA/ICTAD guidelines.",
    "Eco-friendly, climate-resilient construction practices for high monsoon rainfall.",
    "Full transparency with itemized fixed-line BOQ price locks."
  ];

  const whyChooseUsData = [
    {
      icon: ShieldCheck,
      title: "Hill Country Engineering",
      description: "Stepped pile footings and concrete retaining walls engineered for Kandy's steep terrain and clay/rock soil."
    },
    {
      icon: Clock,
      title: "100% On-Time Handover",
      description: "Structured project management ensuring milestones, concrete curing, and finishing are completed strictly on schedule."
    },
    {
      icon: Users,
      title: "Chartered Engineers & Architects",
      description: "In-house design team delivering custom 3D architectural plans and Municipal/Council clearance drawings."
    },
    {
      icon: HardHat,
      title: "Quality Construction Materials",
      description: "Rigorous quality checks on high-tensile steel, grade 30 concrete mixes, and premium teak timber doors."
    }
  ];

  return (
    <PageWrapper>
      <SEO
        title="House Construction & Engineering in Kandy, Sri Lanka"
        description="Quora Builder is a top house construction company in Kandy, Sri Lanka. Specialized in custom luxury homes, sloped land foundation engineering, and turnkey building."
        canonical="/"
      />

      {/* Hero Section */}
      <HeroSection
        title="House Construction & Engineering in Kandy"
        subtitle="Quora Builder delivers custom luxury homes, hillside structural foundation engineering, and turnkey house construction across Kandy, Sri Lanka."
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      {/* Statistics Section */}
      <section className="bg-primary text-white py-12 relative z-20 border-b border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {COMPANY.stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="space-y-1"
              >
                <div className="text-3xl md:text-5xl font-black text-accent">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
                  alt="House construction site in Kandy by Quora Builder"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-accent text-primary p-6 rounded shadow-xl text-center max-w-[160px]">
                  <div className="text-3xl font-black">7+</div>
                  <div className="text-xs font-extrabold uppercase leading-tight mt-1">Years Building Kandy</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-accent font-extrabold tracking-widest text-xs md:text-sm uppercase block">
                ABOUT QUORA BUILDER
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                Crafting Exceptional Homes in Kandy with Engineering Integrity
              </h2>
              <p className="text-neutral-muted text-base leading-relaxed">
                Quora Builder is a premier house construction and civil engineering contractor headquartered in Akurana, Kandy. We specialize in building modern single-storey, two-storey, and hillside luxury family residences.
              </p>
              <p className="text-neutral-muted text-base leading-relaxed">
                From initial topographical soil surveys and 3D architectural blueprints to municipal council approvals, foundation earthworks, and fine interior joinery, we manage your home construction journey with total transparency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {aboutPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-dark font-medium text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded transition-colors duration-300 shadow-md group text-sm"
                >
                  <span>Learn More About Quora Builder</span>
                  <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform text-accent" />
                </Link>
                <Link
                  to="/house-construction-kandy"
                  className="inline-flex items-center bg-accent hover:bg-accent-hover text-primary font-bold py-3 px-6 rounded transition-colors duration-300 shadow-md text-sm"
                >
                  <span>Kandy House Construction Guide</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="OUR CORE CAPABILITIES"
            title="House Construction & Engineering Services in Kandy"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={idx} className="bg-neutral-light border border-gray-150 rounded-lg p-8 space-y-4 hover:border-accent transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-primary text-accent p-3.5 rounded-lg inline-block">
                    <HomeIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">{service.shortDesc}</p>
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:text-accent group pt-2"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-accent font-black tracking-wider text-sm uppercase group"
            >
              <span>Explore All Construction Services</span>
              <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Guide Banner Callout */}
      <section className="bg-primary-light text-white py-12 border-t border-b border-primary-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-accent text-xs font-black uppercase tracking-wider">TRANSPARENT ESTIMATION</span>
            <h3 className="text-2xl md:text-3xl font-black">How Much Does It Cost to Build a House in Kandy?</h3>
            <p className="text-gray-300 text-xs md:text-sm max-w-2xl">
              Explore our 2026 detailed price breakdown for 2,000 sq ft houses, hillside retaining foundations, and BOQ estimation guidelines.
            </p>
          </div>
          <Link
            to="/house-construction-cost-kandy"
            className="bg-accent hover:bg-accent-hover text-primary font-black px-6 py-3.5 rounded shadow-lg transition-colors text-sm shrink-0 flex items-center gap-2"
          >
            <Calculator className="h-4 w-4" />
            <span>View Kandy Cost Guide 2026</span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-accent font-extrabold tracking-widest text-xs md:text-sm uppercase block">
                ENGINEERING VANTAGE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Why Property Owners Trust Quora Builder
              </h2>
              <div className="h-1 bg-accent w-24 rounded-full" />
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We combine civil engineering expertise with absolute client transparency. Your home is engineered to withstand heavy rainfall, soil earth movement, and seasonal climate shifts.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-accent-hover text-primary font-black px-6 py-3.5 rounded shadow-lg transition-colors duration-300 text-sm cursor-pointer inline-block"
                >
                  Consult A Kandy Engineer
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyChooseUsData.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="space-y-3 bg-primary-light/35 p-6 rounded-lg border border-primary-light/40 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="bg-accent text-primary p-2.5 rounded-full inline-block">
                    <item.icon className="h-5 w-5 stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Local Coverage Suburbs */}
      <section className="py-20 bg-neutral-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="LOCALLY RELEVANT COVERAGE"
            title="House Construction Across Kandy Suburbs"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white hover:border-accent transition-all space-y-3 shadow-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <h3 className="text-lg font-bold text-primary">{loc.name}</h3>
                </div>
                <p className="text-neutral-muted text-xs leading-relaxed">{loc.shortDesc}</p>
                <Link
                  to={`/locations/${loc.slug}`}
                  className="inline-flex items-center text-primary font-bold text-xs hover:text-accent group pt-1"
                >
                  <span>House Construction in {loc.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="PORTFOLIO SHOWCASE"
            title="Real Completed Residences in Kandy"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <ProjectCard
                key={idx}
                image={project.image}
                title={project.title}
                location={project.location}
                category={project.category}
                description={project.description}
                slug={project.slug}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded transition-colors duration-300 shadow-md group text-sm"
            >
              <span>View All Kandy Projects</span>
              <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-neutral-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="CLIENT TRUST"
            title="What Homeowners Say About Quora Builder"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="flex flex-col items-center justify-center text-center mb-12 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm max-w-sm md:max-w-md w-full">
              <div className="flex items-center gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent stroke-[1.5]" />
                ))}
              </div>
              <div className="text-3xl font-black text-primary mb-1">
                Rated 4.9 / 5
              </div>
              <div className="text-neutral-muted font-bold text-xs md:text-sm tracking-wider uppercase">
                Based on Verified Google Reviews
              </div>
            </div>

            <div className="w-full">
              <div className="elfsight-app-0749d319-698e-497a-9a01-f2b10aae7743" data-elfsight-app-lazy></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-primary text-white py-16 border-t border-primary-light relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Build Your Home in Kandy?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you need a topographical soil assessment, architectural 3D plans, or complete turnkey house construction, Quora Builder is here to bring your vision to life.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-primary font-black px-8 py-3.5 rounded shadow-lg transition-colors duration-300 text-sm w-full sm:w-auto"
            >
              Get Free BOQ Quote
            </Link>
            <Link
              to="/house-construction-kandy"
              className="border-2 border-white/20 hover:border-white text-white font-bold px-8 py-3.5 rounded transition-all duration-300 text-sm w-full sm:w-auto"
            >
              Kandy Local Construction Guide
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
