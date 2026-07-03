import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HardHat, ShieldCheck, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import PageWrapper from '../components/PageWrapper';

// Services mapping
import { Building2, Home as HomeIcon, Wrench } from 'lucide-react';

export default function Home() {
  // Features list for About preview
  const aboutPoints = [
    "Safety compliance adhering strictly to OSHA and ISO certifications.",
    "Certified estimators providing accurate, transparent cost assessments.",
    "Eco-friendly, sustainable construction practices and green-building designs.",
    "Fully licensed, bonded, and insured general contractors."
  ];

  // Services preview list
  const servicesData = [
    {
      title: "Commercial Development",
      description: "From corporate towers to shopping malls, we deliver state-of-the-art commercial infrastructures constructed for efficiency, flexibility, and design excellence.",
      icon: Building2
    },
    {
      title: "Residential Architecture",
      description: "We build custom luxury homes, modern residential complexes, and sustainable apartment communities tailored exactly to lifestyle requirements.",
      icon: HomeIcon
    },
    {
      title: "Industrial & Renovation",
      description: "Modernizing vintage structural foundations, retrofitting industrial facilities, and restoring historical elements with state-of-the-art building techniques.",
      icon: Wrench
    }
  ];

  // Projects preview list
  const projectsData = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      title: "Vanguard Corporate Hub",
      location: "Metropolis Plaza, NY",
      category: "Commercial",
      description: "A 45-story commercial steel-and-glass tower featuring sustainable geothermal heating and advanced smart automation integrations."
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      title: "Aura Lakeside Estates",
      location: "Lakeview, WA",
      category: "Residential",
      description: "A luxury private villa complex featuring heavy timber framing, smart solar roof configurations, and custom energy-efficient envelope designs."
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
      title: "Apex Industrial Retrofit",
      location: "Detroit Logistics Park, MI",
      category: "Industrial",
      description: "Structural modernization of a 150,000 sq ft logistics facility, integrating steel column reinforcing and seismic damping retrofits."
    }
  ];

  // Why choose us points
  const whyChooseUsData = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Safety",
      description: "We implement rigorous zero-accident safety strategies, providing a secure environment for site crews and local neighborhoods."
    },
    {
      icon: Clock,
      title: "On-Time Handover",
      description: "Using advanced critical path scheduling systems, we ensure all milestones are checked and projects are delivered exactly as promised."
    },
    {
      icon: Users,
      title: "Elite Engineering Team",
      description: "Our staff comprises award-winning architects, professional structural engineers, and LEED-certified project managers."
    },
    {
      icon: HardHat,
      title: "Precision Management",
      description: "Continuous quality monitoring ensures that materials, welding, pouring, and finishing adhere to the highest engineering standards."
    }
  ];

  // Testimonials list
  const testimonialsData = [
    {
      quote: "Quora Builders exceeded all our engineering parameters. Their project management team handled the complexities of our mixed-use commercial tower flawlessly, completing it 2 weeks ahead of schedule.",
      name: "Marcus Vance",
      role: "CEO, Vanguard Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      rating: 5
    },
    {
      quote: "Building our dream estate with Quora was an absolute breeze. They kept us informed at every concrete pour, structural layout, and finishing stage. Their craftsmanship is second to none.",
      name: "Sophia Lindqvist",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      rating: 5
    },
    {
      quote: "Their team's competence in historical building restoration was remarkable. They reinforced our brick facade and reinforced structural wood beams without altering the classic aesthetic.",
      name: "David Chen",
      role: "Operations Manager, Heritage Trust",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      rating: 5
    }
  ];

  return (
    <PageWrapper>
      {/* Parallax Hero Section */}
      <HeroSection />

      {/* Statistics Section (Micro-counter mockup) */}
      <section className="bg-primary text-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "350+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "48+", label: "Active Sites" },
              { value: "100%", label: "Safety Record" }
            ].map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="space-y-1"
              >
                <div className="text-3xl md:text-5xl font-black text-accent">{stat.value}</div>
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
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800" 
                  alt="Construction Site Overview" 
                  className="w-full h-[450px] object-cover"
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 right-6 bg-accent text-primary p-6 rounded shadow-xl text-center max-w-[160px]">
                  <div className="text-3xl font-black">15+</div>
                  <div className="text-xs font-extrabold uppercase leading-tight mt-1">Years Building Trust</div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-accent font-extrabold tracking-widest text-xs md:text-sm uppercase block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                Shaping the Skylines of Tomorrow with Integrity
              </h2>
              <p className="text-neutral-muted text-base leading-relaxed">
                Quora Builders is an industry leader in engineering excellence and general contracting. Over the past 15 years, we have collaborated with developers, homeowners, and public institutions to deliver complex, challenging structural feats. 
              </p>
              <p className="text-neutral-muted text-base leading-relaxed">
                Our approach integrates smart pre-construction analysis, state-of-the-art structural components, and high-performance logistics. We believe in building structures that last generations.
              </p>
              
              {/* Bullet list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {aboutPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-dark font-medium text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded transition-colors duration-300 shadow-md group text-sm cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 text-accent" />
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
            subtitle="WHAT WE BUILD" 
            title="Our Premier Construction Services" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={idx * 0.1}
              />
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

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        {/* Subtle construction graphic overlays */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Title / Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-accent font-extrabold tracking-widest text-xs md:text-sm uppercase block">
                OUR ENGINEERING VANTAGE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Why Developers Choose Quora Builders
              </h2>
              <div className="h-1 bg-accent w-24 rounded-full" />
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We combine industry-leading building methodologies with absolute transparent client communication. Our structural integrity is unmatched, ensuring your investments stand tall.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-accent-hover text-primary font-black px-6 py-3.5 rounded shadow-lg transition-colors duration-300 text-sm cursor-pointer"
                >
                  Consult An Engineer
                </Link>
              </div>
            </div>

            {/* Grid Benefits Column */}
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

      {/* Featured Projects Section */}
      <section className="py-20 md:py-28 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="OUR PORTFOLIO" 
            title="Featured Landmarks & Builds" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={idx}
                image={project.image}
                title={project.title}
                location={project.location}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded transition-colors duration-300 shadow-md group text-sm cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="CLIENT SATISFACTION" 
            title="What Our Clients Say About Us" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                rating={testimonial.rating}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-primary text-white py-16 border-t border-primary-light relative overflow-hidden">
        {/* Construction Orange Glow Decorative Background */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Let’s Construct Your Vision
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you require a comprehensive feasibility assessment, complex structural drawings, or full-scale general contracting, Quora Builders delivers unparalleled engineering competence.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-primary font-black px-8 py-3.5 rounded shadow-lg transition-colors duration-300 text-sm cursor-pointer w-full sm:w-auto"
            >
              Get Free Quote Now
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/20 hover:border-white text-white font-bold px-8 py-3.5 rounded transition-all duration-300 text-sm cursor-pointer w-full sm:w-auto"
            >
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
