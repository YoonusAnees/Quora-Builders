import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES, PROJECTS, COMPANY } from '../config/company';
import PageWrapper from '../components/PageWrapper';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { CheckCircle2, ArrowRight, Home, Building2, Wrench, ClipboardList, Compass, Paintbrush, Shield, Phone, Mail } from 'lucide-react';

const iconMap = {
  Home,
  Building2,
  Wrench,
  ClipboardList,
  Compass,
  Paintbrush,
  Shield
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = SERVICES.find(s => s.slug === serviceSlug) || SERVICES[0];
  const IconComponent = iconMap[service.icon] || Home;

  // Filter projects relevant to this service or default to first 3
  const relatedProjects = PROJECTS.filter(p => 
    p.servicesProvided?.some(s => s.toLowerCase().includes(service.title.toLowerCase()))
  ).slice(0, 3);

  const displayProjects = relatedProjects.length > 0 ? relatedProjects : PROJECTS.slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "telephone": COMPANY.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": COMPANY.address.addressLocality,
        "addressCountry": COMPANY.address.addressCountry
      }
    },
    "areaServed": "Kandy, Sri Lanka",
    "description": service.longDesc
  };

  const faqSchema = service.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <PageWrapper>
      <SEO
        title={`${service.title} in Kandy, Sri Lanka`}
        description={`${service.shortDesc} Expert ${service.title.toLowerCase()} services in Kandy by Quora Builder.`}
        canonical={`/services/${service.slug}`}
        schema={faqSchema ? [serviceSchema, faqSchema] : serviceSchema}
      />

      {/* Header Banner */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Services / {service.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {service.title} in <span className="text-accent">Kandy</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Overview & Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                  Professional {service.title} Services in Kandy, Sri Lanka
                </h2>
                <p className="text-neutral-muted text-base leading-relaxed">
                  {service.longDesc}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="bg-neutral-light border border-gray-100 rounded-lg p-8 space-y-6">
                <h3 className="text-xl font-bold text-primary flex items-center gap-3">
                  <div className="bg-primary text-accent p-2 rounded">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span>Key Scope & Deliverables</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-dark text-sm font-semibold leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Process */}
              {service.process && service.process.length > 0 && (
                <div className="space-y-6 pt-4">
                  <h3 className="text-2xl font-black text-primary">How We Execute {service.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm space-y-2 relative">
                        <span className="text-accent text-xs font-black uppercase">Step {step.step}</span>
                        <h4 className="text-lg font-bold text-primary">{step.name}</h4>
                        <p className="text-neutral-muted text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar CTA Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-primary text-white rounded-lg p-8 space-y-6 shadow-xl sticky top-28">
                <div className="space-y-2">
                  <span className="text-accent font-extrabold text-xs uppercase tracking-wider block">CONSULT OUR ENGINEERS</span>
                  <h3 className="text-2xl font-black">Planning {service.title} in Kandy?</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Contact Quora Builder today for a free site assessment, BOQ estimation, or architectural blueprint consultation.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-primary font-black py-3 px-6 rounded transition-colors text-sm w-full"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call {COMPANY.phone}</span>
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center space-x-2 border-2 border-white/30 hover:border-white text-white font-bold py-3 px-6 rounded transition-all text-sm w-full"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Request Free Quotation</span>
                  </Link>
                </div>

                <div className="border-t border-primary-light pt-4 text-xs text-gray-400 space-y-1">
                  <div><strong>Office Location:</strong> {COMPANY.address.formatted}</div>
                  <div><strong>Operating Hours:</strong> {COMPANY.openingHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-neutral-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="PORTFOLIO HIGHLIGHTS"
            title={`Completed ${service.title} Projects in Kandy`}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayProjects.map((project, idx) => (
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
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionTitle
              subtitle="FREQUENTLY ASKED QUESTIONS"
              title={`Questions About ${service.title} in Kandy`}
            />
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded p-6 bg-neutral-light space-y-2">
                  <h4 className="font-bold text-primary text-base">{faq.q}</h4>
                  <p className="text-neutral-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}
