import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import PageWrapper from '../components/PageWrapper';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const allProjects = [
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
      category: "Renovation",
      description: "Structural modernization of a 150,000 sq ft logistics facility, integrating steel column reinforcing and seismic damping retrofits."
    },
    {
      image: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=800",
      title: "Zenith Retail Plaza",
      location: "Downtown Austin, TX",
      category: "Commercial",
      description: "A high-traffic shopping mall utilizing cantilevered structural steel beams and large insulated skylight modules."
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      title: "Haven Heights Condominiums",
      location: "Queens, NY",
      category: "Residential",
      description: "A multi-family residential building featuring cast-in-place concrete structures, acoustic floor insulation, and private balconies."
    },
    {
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
      title: "Historical Depot Restoration",
      location: "Old Town, VA",
      category: "Renovation",
      description: "Careful masonry restoration and structural steel reinforcement of a 19th-century railway depot into an open-plan public library."
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      title: "Horizon Business Park",
      location: "San Jose, CA",
      category: "Commercial",
      description: "A low-rise corporate campus campus consisting of three buildings connected by outdoor steel bridge structures."
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
      title: "Eco-Villa Oasis",
      location: "Portland, OR",
      category: "Residential",
      description: "A net-zero residence featuring recycled steel frames, triple-pane glazing, smart battery storage, and structural greywater recycling."
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <PageWrapper>
      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Our Showcase</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Completed <span className="text-accent">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Explore our portfolio of industrial retrofits, luxury residential complexes, and modern commercial landmarks built with absolute engineering precision.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Architectural Showcase"
            title="Browse Our Portfolio"
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
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  image={project.image}
                  title={project.title}
                  location={project.location}
                  category={project.category}
                  description={project.description}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Zero Results Safety Check */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-neutral-muted"
            >
              No projects found in this category.
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="py-16 bg-neutral-light border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Have a specific scope in mind?</h2>
          <p className="text-neutral-muted text-sm leading-relaxed max-w-xl mx-auto">
            Our estimators and engineering draftsmen can consult on your parameters. Let's arrange a call to walk through your blueprints.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-bold px-8 py-3.5 rounded shadow-lg transition-all duration-300 text-sm"
            >
              Contact Our Project Estimators
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
