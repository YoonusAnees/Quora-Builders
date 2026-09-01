import { useParams, Link } from 'react-router-dom';
import { PROJECTS, COMPANY } from '../config/company';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { MapPin, Calendar, Layers, Clock, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = PROJECTS.find(p => p.slug === projectSlug) || PROJECTS[0];

  const relatedProjects = PROJECTS.filter(p => p.slug !== project.slug).slice(0, 3);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "locationCreated": {
      "@type": "Place",
      "name": project.location
    },
    "author": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "telephone": COMPANY.phone
    },
    "description": project.description,
    "image": project.image
  };

  return (
    <PageWrapper>
      <SEO
        title={`${project.title} - ${project.location}`}
        description={`${project.description} Constructed by Quora Builder in ${project.location}.`}
        canonical={`/projects/${project.slug}`}
        image={project.image}
        schema={projectSchema}
      />

      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
             style={{ backgroundImage: `url('${project.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Project Portfolio / {project.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {project.title}
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent shrink-0" />
            <span>{project.location}</span>
          </p>
        </div>
      </section>

      {/* Project Main Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={project.image}
                  alt={`Quora Builder completed project ${project.title} in ${project.location}`}
                  className="w-full h-[450px] object-cover"
                />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">Project Overview</h2>
                <p className="text-neutral-muted text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Services Provided */}
              {project.servicesProvided && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-bold text-primary">Services Provided by Quora Builder</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesProvided.map((service, idx) => (
                      <span key={idx} className="bg-primary text-accent text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Challenge & Solution */}
              {project.challenge && project.solution && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-neutral-light border-l-4 border-amber-500 rounded-r-lg p-6 space-y-2">
                    <h4 className="font-extrabold text-primary text-base">Engineering Challenge</h4>
                    <p className="text-neutral-muted text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="bg-neutral-light border-l-4 border-accent rounded-r-lg p-6 space-y-2">
                    <h4 className="font-extrabold text-primary text-base">Quora Engineering Solution</h4>
                    <p className="text-neutral-muted text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Specs Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-neutral-light border border-gray-200 rounded-lg p-6 space-y-6 shadow-sm sticky top-28">
                <h3 className="text-xl font-extrabold text-primary border-b border-gray-200 pb-3">Project Specifications</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-150">
                    <span className="text-neutral-muted font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" /> Location:
                    </span>
                    <span className="font-bold text-primary">{project.location}</span>
                  </div>

                  {project.area && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-150">
                      <span className="text-neutral-muted font-medium flex items-center gap-2">
                        <Layers className="h-4 w-4 text-accent" /> Floor Area:
                      </span>
                      <span className="font-bold text-primary">{project.area}</span>
                    </div>
                  )}

                  {project.floors && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-150">
                      <span className="text-neutral-muted font-medium flex items-center gap-2">
                        <Layers className="h-4 w-4 text-accent" /> Structure:
                      </span>
                      <span className="font-bold text-primary">{project.floors}</span>
                    </div>
                  )}

                  {project.duration && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-150">
                      <span className="text-neutral-muted font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" /> Construction Time:
                      </span>
                      <span className="font-bold text-primary">{project.duration}</span>
                    </div>
                  )}

                  {project.year && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-150">
                      <span className="text-neutral-muted font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" /> Completion Year:
                      </span>
                      <span className="font-bold text-primary">{project.year}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-6 rounded transition-colors text-sm w-full"
                  >
                    <span>Build a Similar House</span>
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </Link>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center justify-center space-x-2 border border-gray-300 hover:border-primary text-primary font-bold py-3 px-6 rounded transition-all text-sm w-full"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call {COMPANY.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Showcase */}
      <section className="py-20 bg-neutral-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="EXPLORE MORE BUILDS"
            title="Other Featured Projects in Kandy"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((proj, idx) => (
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
    </PageWrapper>
  );
}
