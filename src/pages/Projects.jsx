import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { PROJECTS } from '../config/company';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Residential'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <PageWrapper>
      <SEO
        title="Completed Projects Portfolio | House Construction Kandy"
        description="Browse Quora Builder's portfolio of completed residential houses, luxury villas, and hillside builds across Kandy, Peradeniya, Katugastota, and Kundasale."
        canonical="/projects"
      />

      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Kandy Showcase</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Completed <span className="text-accent">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Explore our portfolio of luxury hillside villas, contemporary family residences, and custom home builds engineered across Kandy.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="ARCHITECTURAL PORTFOLIO"
            title="Real Completed Residences in Kandy"
          />

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-sm font-bold tracking-wider text-xs uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-accent text-primary shadow-md'
                    : 'bg-neutral-light border border-gray-200 text-neutral-muted hover:border-accent hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Gallery Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  image={project.image}
                  title={project.title}
                  location={project.location}
                  category={project.category}
                  description={project.description}
                  slug={project.slug}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
