import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COMPANY, SERVICES, PROJECTS, LOCATIONS } from '../config/company';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { MapPin, CheckCircle2, ShieldCheck, HardHat, Phone, ArrowRight, Layers, Ruler, FileCheck, Mountain } from 'lucide-react';

export default function KandyLocalSEO() {
  const kandyProjects = PROJECTS.slice(0, 3);

  const kandyFaqs = [
    {
      q: "What makes house construction in Kandy different from flat coastal regions?",
      a: "Kandy's hilly topography, varying soil strata (rock vs clay), and high monsoon rainfall require specialized geotechnical soil testing, stepped foundation footings, and reinforced concrete retaining walls to ensure structural stability."
    },
    {
      q: "Does Quora Builder handle Kandy Municipal Council and Pradeshiya Sabha plan approvals?",
      a: "Yes. Our team prepares all architectural drawings, structural engineering stability certificates, and land survey documents required for local authority and NBRO approvals in Kandy."
    },
    {
      q: "How does Quora Builder determine house construction costs in Kandy?",
      a: "We provide an itemized Bill of Quantities (BOQ) covering site preparation, foundation engineering, superstructure, roofing, utility wiring, tiling, and painting with transparent price guarantees."
    },
    {
      q: "Can Quora Builder construct a house on a steep hillside plot in Kandy?",
      a: "Yes, slope-engineered house construction is our core specialization. We design stepped foundations, earth retaining walls, and subsoil drainage channels to convert challenging hill plots into luxury homes."
    }
  ];

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "House Construction in Kandy, Sri Lanka | Quora Builder",
      "description": "Premier house construction company in Kandy, Sri Lanka. Specialized in custom luxury homes, sloped land structural engineering, architectural design, and turnkey building.",
      "url": `${COMPANY.url}/house-construction-kandy`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": kandyFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <PageWrapper>
      <SEO
        title="House Construction in Kandy, Sri Lanka | Best House Builders"
        description="Quora Builder is a leading house construction company in Kandy, Sri Lanka. Specialized in architectural design, hillside foundation engineering, and luxury family home builds."
        canonical="/house-construction-kandy"
        schema={pageSchema}
      />

      {/* Sub-Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Kandy Hill Country Specialists</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            House Construction in <span className="text-accent">Kandy, Sri Lanka</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-sm md:text-base leading-relaxed font-medium">
            Quora Builder is a premier house construction and structural engineering firm in Kandy. We design and build custom residential homes tailored to Kandy’s unique terrain, climate, and local authority requirements.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-primary font-black px-6 py-3.5 rounded shadow-lg transition-colors text-sm"
            >
              Consult Kandy Engineers
            </Link>
            <Link
              to="/house-construction-cost-kandy"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-6 py-3.5 rounded transition-all text-sm"
            >
              View Kandy Construction Costs 2026
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Quora Builder in Kandy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-extrabold tracking-widest text-xs uppercase block">
                TRUSTED HOUSE BUILDERS IN KANDY
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
                Engineering Homes Built for Kandy’s Landscape
              </h2>
              <div className="h-1 bg-accent w-20 rounded-full" />
              <p className="text-neutral-muted text-base leading-relaxed">
                Building a house in Kandy requires more than standard brick-and-mortar techniques. Kandy’s hill country geology demands thorough soil core analysis, reinforced concrete retaining structures, and precision rainwater drainage management.
              </p>
              <p className="text-neutral-muted text-base leading-relaxed">
                At Quora Builder, our chartered engineers and architects combine modern building technologies with deep local knowledge of Kandy’s micro-climates, municipal council bylaws, and material supply chains.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Geotechnical soil testing on sloped plots",
                  "Concrete retaining wall engineering",
                  "Kandy Municipal & Council approval handling",
                  "Transparent fixed-line BOQ contracts",
                  "Weatherproof exterior finishes",
                  "100% on-time project completion record"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-dark font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                  alt="House Construction site in Kandy by Quora Builder"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-primary text-white p-6 rounded-lg shadow-xl max-w-[220px]">
                  <div className="text-accent text-3xl font-black">25+</div>
                  <div className="text-xs font-bold uppercase tracking-wider mt-1">Real Homes Delivered in Kandy</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Kandy Key Hill Country Engineering Factors */}
      <section className="py-20 bg-neutral-light border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="KANDY CONSTRUCTION STANDARDS"
            title="Key Engineering Considerations for Kandy Homes"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-lg p-8 space-y-4 shadow-sm hover:border-accent transition-all">
              <div className="bg-primary text-accent p-3.5 rounded-lg inline-block">
                <Mountain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">1. Sloped Land Foundations</h3>
              <p className="text-neutral-muted text-sm leading-relaxed">
                We engineer stepped pile footings and reinforced concrete retaining walls designed to anchor your structure firmly to solid bedrock on hillside plots.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-8 space-y-4 shadow-sm hover:border-accent transition-all">
              <div className="bg-primary text-accent p-3.5 rounded-lg inline-block">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">2. Rainfall & Drainage Control</h3>
              <p className="text-neutral-muted text-sm leading-relaxed">
                Kandy experiences heavy seasonal monsoons. We integrate geotextile subterranean drains, catch basins, and waterproof wall coatings to protect foundation stability.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-8 space-y-4 shadow-sm hover:border-accent transition-all">
              <div className="bg-primary text-accent p-3.5 rounded-lg inline-block">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">3. Plan Approvals & NBRO</h3>
              <p className="text-neutral-muted text-sm leading-relaxed">
                We prepare complete architectural and structural engineering submissions complying with Kandy Municipal Council, Pradeshiya Sabha, and NBRO safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Coverage Suburbs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="SERVICE AREAS IN KANDY"
            title="House Construction Across Kandy Suburbs"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className="border border-gray-150 rounded-lg p-6 bg-neutral-light hover:bg-white hover:border-accent transition-all space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <h3 className="text-lg font-bold text-primary">{loc.name}</h3>
                </div>
                <p className="text-neutral-muted text-xs leading-relaxed">{loc.shortDesc}</p>
                <Link
                  to={`/locations/${loc.slug}`}
                  className="inline-flex items-center text-primary font-bold text-xs hover:text-accent group pt-1"
                >
                  <span>Explore {loc.name} Services</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kandy Projects */}
      <section className="py-20 bg-neutral-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="KANDY PORTFOLIO"
            title="Real Completed Houses in Kandy"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kandyProjects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                image={proj.image}
                title={proj.title}
                location={proj.location}
                category={proj.category}
                description={proj.description}
                slug={proj.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kandy Local FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionTitle
            subtitle="HELPFUL LOCAL INFORMATION"
            title="Frequently Asked Questions: Building in Kandy"
          />
          <div className="space-y-4">
            {kandyFaqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded p-6 bg-neutral-light space-y-2">
                <h4 className="font-bold text-primary text-base">{faq.q}</h4>
                <p className="text-neutral-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
