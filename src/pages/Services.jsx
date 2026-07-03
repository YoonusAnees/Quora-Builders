import { motion } from 'framer-motion';
import { Home, Building2, Wrench, ClipboardList, Compass, Paintbrush, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PageWrapper from '../components/PageWrapper';

export default function Services() {
  const servicesList = [
    {
      icon: Home,
      title: "Residential Construction",
      details: "We build premium residential complexes, custom luxury villas, multi-family townhomes, and modern estate layouts. Our process handles foundation pouring, timber/metal framing, and structural roofing.",
      deliverables: ["Custom architectural floorplans", "Site excavation & soil testing", "Permit handling & planning compliance", "Full structural warranty coverage"]
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      details: "Delivering state-of-the-art office spaces, shopping plazas, logistics warehouses, and institutional buildings. We utilize steel-reinforced concrete configurations and premium building materials.",
      deliverables: ["LEED-certified green building", "Commercial HVAC & utility engineering", "Seismic reinforcing retrofits", "Fast-track project management systems"]
    },
    {
      icon: Wrench,
      title: "Renovation & Retrofitting",
      details: "Restoring and modernizing historical buildings, seismic reinforcement of existing concrete columns, wall removals, and custom expansions that integrate seamlessly with historical features.",
      deliverables: ["Detailed structural integrity checks", "Historical facade restorations", "Energy-efficiency enhancements", "Asbestos & lead safe remediations"]
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      details: "Comprehensive scheduling oversight, resource optimization, material supply-chain logistics, and field subcontractor management. We utilize digital tools to track critical path milestones.",
      deliverables: ["Real-time budget/cost estimations", "Subcontractor vetting & audits", "Schedule recovery & acceleration", "Risk assessment and safety audits"]
    },
    {
      icon: Compass,
      title: "Architecture & Planning",
      details: "Creating detailed 3D layouts, interior modeling, architectural renderings, and site layouts. We align draft blueprints with municipal zoning laws and geotechnical parameters.",
      deliverables: ["Detailed BIM drafting", "Environmental impact analysis", "Zoning and code compliance audits", "Material selection consultations"]
    },
    {
      icon: Paintbrush,
      title: "Interior Finishing",
      details: "Delivering premium drywall configurations, acoustic ceilings, high-end tiling, trim molding, and wood/epoxy flooring. We ensure final touches are clean, premium, and durable.",
      deliverables: ["Custom woodworking & cabinets", "Acoustic ceiling grids", "Premium flooring installations", "Wall painting & decorative trim"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Geotechnical & Consultation",
      desc: "We analyze site soil mechanics, municipal zoning limits, and project blueprints during initial consultation."
    },
    {
      step: "02",
      title: "Estimating & Procurement",
      desc: "Our estimators provide a line-item bill of materials and lock in supply chains to prevent delay."
    },
    {
      step: "03",
      title: "Excavation & Foundations",
      desc: "Earthmoving, site grading, utility piping installations, and thick steel-reinforced concrete pours."
    },
    {
      step: "04",
      title: "Superstructure Erection",
      desc: "Framing structural steel columns, erecting timber assemblies, roofing, and enclosing envelopes."
    },
    {
      step: "05",
      title: "M&E and Drywalling",
      desc: "Wiring electrical channels, piping plumbing systems, putting up ductwork, and completing insulation."
    },
    {
      step: "06",
      title: "Inspection & Handover",
      desc: "Final architectural testing, cleaning, punch-list resolutions, and obtaining certificate of occupancy."
    }
  ];

  return (
    <PageWrapper>
      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">What We Offer</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Construction <span className="text-accent">Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            From preliminary blueprints to final inspections, Quora Builders provides end-to-end contracting capabilities for projects of any size and complexity.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Scope of Capabilities"
            title="Building Solutions Tailored For You"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesList.map((service, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                key={idx}
                className="bg-neutral-light border border-gray-100 rounded-lg p-8 hover:bg-white hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-start"
              >
                {/* Icon box */}
                <div className="bg-primary text-accent p-4 rounded-lg shrink-0">
                  <service.icon className="h-6 w-6 stroke-[2]" />
                </div>
                
                {/* Content */}
                <div className="space-y-4 w-full">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    <div className="h-[2px] bg-accent w-12 mt-1 rounded" />
                  </div>
                  <p className="text-neutral-muted text-sm leading-relaxed">
                    {service.details}
                  </p>
                  
                  {/* Bullet deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-neutral-dark text-xs font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        {/* Abstract grids */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-widest font-semibold text-xs md:text-sm">OUR WORKFLOW</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 tracking-tight">How We Execute Projects</h2>
            <div className="h-1 bg-accent w-20 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-primary-light/30 border border-primary-light/40 hover:border-accent/40 rounded-lg p-6 space-y-4 hover:bg-primary-light/50 transition-all duration-300 relative group"
              >
                {/* Step number absolute badge */}
                <div className="text-accent/15 group-hover:text-accent/25 text-6xl font-black absolute top-4 right-6 select-none transition-colors duration-300">
                  {step.step}
                </div>
                
                <div className="space-y-2 relative z-10">
                  <span className="text-accent text-xs font-extrabold uppercase tracking-wide">Phase {step.step}</span>
                  <h3 className="text-lg font-bold text-white tracking-wide">{step.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance callout banner */}
      <section className="py-16 bg-neutral-light border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Need a customized building solution?</h2>
          <p className="text-neutral-muted text-sm leading-relaxed max-w-xl mx-auto">
            Our teams are expert at resolving custom construction parameters. Tell us about your site plans to arrange an estimator meeting.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-primary font-black px-8 py-3.5 rounded shadow-lg transition-colors duration-300 text-sm"
            >
              <span>Consult Our Experts</span>
              <ArrowRight className="h-4 w-4 ml-2 text-primary" />
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
