import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building2, Wrench, ClipboardList, Compass, Paintbrush, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { SERVICES, COMPANY } from '../config/company';

const iconMap = {
  Home,
  Building2,
  Wrench,
  ClipboardList,
  Compass,
  Paintbrush,
  Shield
};

export default function Services() {
  return (
    <PageWrapper>
      <SEO
        title="House Construction & Architectural Services in Kandy"
        description="Explore Quora Builder's construction services in Kandy: custom house construction, architectural 3D design, hillside structural engineering, renovation, and project management."
        canonical="/services"
      />

      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">End-To-End Contracting</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Construction <span className="text-accent">Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            From initial geotechnical soil testing and 3D architectural blueprints to foundation pouring, roofing, and fine handovers, Quora Builder provides complete contracting capabilities in Kandy.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="ENGINEERING CAPABILITIES"
            title="House Construction Solutions Tailored for Kandy"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Home;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  key={idx}
                  className="bg-neutral-light border border-gray-100 rounded-lg p-8 hover:bg-white hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-start">
                    <div className="bg-primary text-accent p-4 rounded-lg shrink-0">
                      <IconComponent className="h-6 w-6 stroke-[2]" />
                    </div>
                    
                    <div className="space-y-3 w-full">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                        <div className="h-[2px] bg-accent w-12 mt-1 rounded" />
                      </div>
                      <p className="text-neutral-muted text-sm leading-relaxed">
                        {service.shortDesc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {service.deliverables.slice(0, 4).map((item, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                            <span className="text-neutral-dark text-xs font-semibold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-150 flex justify-end">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:text-accent group"
                    >
                      <span>Explore {service.title} Scope</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-widest font-semibold text-xs md:text-sm">OUR KANDY WORKFLOW</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 tracking-tight">How We Build Your Home</h2>
            <div className="h-1 bg-accent w-20 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Geotechnical Soil & Site Survey", desc: "Evaluating land slope, bedrock depth, and soil bearing load tolerance on your Kandy plot." },
              { step: "02", title: "3D Plans & Council Approval", desc: "Drafting blueprints and securing Kandy Municipal Council or Pradeshiya Sabha approvals." },
              { step: "03", title: "Foundation & Retaining Earthworks", desc: "Stepped concrete footing excavation, drain placement, and reinforced retaining walls." },
              { step: "04", title: "Superstructure & Roof Enclosure", desc: "Casting columns, laying brick masonry walls, and waterproofing timber/steel roof structures." },
              { step: "05", title: "M&E Wiring, Plumbing & Finishes", desc: "Concealed electrical channels, high-grade plumbing, custom tiling, teak doors, and painting." },
              { step: "06", title: "Final Audit & Key Handover", desc: "Completing punch-list checks and handing over keys with structural guarantee documentation." }
            ].map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-primary-light/30 border border-primary-light/40 hover:border-accent/40 rounded-lg p-6 space-y-4 hover:bg-primary-light/50 transition-all duration-300 relative group"
              >
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

      {/* CTA Callout Banner */}
      <section className="py-16 bg-neutral-light border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Need a customized building solution in Kandy?</h2>
          <p className="text-neutral-muted text-sm leading-relaxed max-w-xl mx-auto">
            Our structural engineers and estimators are ready to consult on your plot plans and provide an itemized BOQ estimate.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-primary font-black px-8 py-3.5 rounded shadow-lg transition-colors duration-300 text-sm"
            >
              <span>Consult Our Kandy Engineers</span>
              <ArrowRight className="h-4 w-4 ml-2 text-primary" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
