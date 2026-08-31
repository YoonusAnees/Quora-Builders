import { useParams, Link } from 'react-router-dom';
import { LOCATIONS, PROJECTS, COMPANY } from '../config/company';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { MapPin, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';

export default function LocationDetail() {
  const { locationSlug } = useParams();
  const locationItem = LOCATIONS.find(l => l.slug === locationSlug) || LOCATIONS[0];

  const relatedProjects = PROJECTS.filter(p => 
    p.location.toLowerCase().includes(locationItem.name.toLowerCase())
  );

  const displayProjects = relatedProjects.length > 0 ? relatedProjects : PROJECTS.slice(0, 3);

  return (
    <PageWrapper>
      <SEO
        title={`${locationItem.title} | Quora Builder`}
        description={`${locationItem.shortDesc} Reliable house construction and engineering by Quora Builder in ${locationItem.name}, Kandy.`}
        canonical={`/locations/${locationItem.slug}`}
      />

      {/* Sub-Hero Banner */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Kandy Service Areas / {locationItem.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            House Construction in <span className="text-accent">{locationItem.name}</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            {locationItem.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Location Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Trusted House Builders in {locationItem.name}, Kandy
              </h2>
              <p className="text-neutral-muted text-base leading-relaxed">
                {locationItem.content}
              </p>

              <div className="bg-neutral-light border border-gray-150 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Why Build in {locationItem.name} with Quora Builder?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Local plot soil analysis & structural testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Stepped foundation & slope engineering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Pradeshiya Sabha plan clearance assistance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Fixed BOQ price lock contracts</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-primary text-white rounded-lg p-6 space-y-6 shadow-xl sticky top-28">
                <h3 className="text-2xl font-black">Build in {locationItem.name}</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Have a plot of land in {locationItem.name}? Contact Quora Builder for a free on-site engineering assessment and blueprint estimation.
                </p>

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
                    className="flex items-center justify-center space-x-2 border border-white/30 hover:border-white text-white font-bold py-3 px-6 rounded transition-all text-sm w-full"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Request Quotation</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects in Location */}
      <section className="py-20 bg-neutral-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="LOCAL BUILDS"
            title={`Projects in & Around ${locationItem.name}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayProjects.map((proj, idx) => (
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
