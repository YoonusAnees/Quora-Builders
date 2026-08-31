import { useParams, Link } from 'react-router-dom';
import { GUIDES, COMPANY } from '../config/company';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import { Calendar, User, Clock, ArrowRight, Phone } from 'lucide-react';

export default function GuideDetail() {
  const { guideSlug } = useParams();
  const guide = GUIDES.find(g => g.slug === guideSlug) || GUIDES[0];

  const relatedGuides = GUIDES.filter(g => g.slug !== guide.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.excerpt,
    "author": {
      "@type": "Organization",
      "name": guide.author || COMPANY.name
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY.name,
      "url": COMPANY.url
    },
    "datePublished": guide.date
  };

  return (
    <PageWrapper>
      <SEO
        title={guide.title}
        description={guide.excerpt}
        canonical={`/guides/${guide.slug}`}
        schema={articleSchema}
      />

      {/* Hero Header */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Kandy Construction Guides</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {guide.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-2">
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-accent" /> {guide.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-accent" /> {guide.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-accent" /> {guide.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="prose prose-lg text-neutral-muted space-y-6 text-base leading-relaxed">
            {guide.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* CTA Box inside Article */}
          <div className="bg-neutral-light border-l-4 border-accent p-8 rounded-r-lg space-y-4 my-12">
            <h3 className="text-2xl font-black text-primary">Need Expert Construction Advice in Kandy?</h3>
            <p className="text-neutral-muted text-sm leading-relaxed">
              Quora Builder offers site assessments, architectural drawings, and fixed BOQ estimations across Kandy. Speak directly to our structural engineers today.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded text-sm transition-colors"
              >
                Contact Quora Builder
              </Link>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="border border-gray-300 hover:border-primary text-primary font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-accent" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedGuides.length > 0 && (
            <div className="border-t border-gray-200 pt-12 space-y-6">
              <h3 className="text-2xl font-bold text-primary">More Useful Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedGuides.map((g, idx) => (
                  <div key={idx} className="border border-gray-150 rounded-lg p-6 bg-neutral-light hover:bg-white transition-all space-y-2">
                    <span className="text-accent text-xs font-bold uppercase">{g.readTime}</span>
                    <h4 className="font-bold text-primary text-base">{g.title}</h4>
                    <p className="text-neutral-muted text-xs line-clamp-2">{g.excerpt}</p>
                    <Link
                      to={`/guides/${g.slug}`}
                      className="inline-flex items-center text-primary font-bold text-xs hover:text-accent group pt-2"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </PageWrapper>
  );
}
