import { Link } from 'react-router-dom';
import { COST_GUIDE_DATA, GUIDES, COMPANY } from '../config/company';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import { Calculator, ArrowRight, CheckCircle2, AlertCircle, Phone } from 'lucide-react';

export default function CostGuide() {
  const guideSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": COST_GUIDE_DATA.title,
      "description": COST_GUIDE_DATA.intro,
      "author": {
        "@type": "Organization",
        "name": COMPANY.name
      },
      "publisher": {
        "@type": "Organization",
        "name": COMPANY.name,
        "url": COMPANY.url
      },
      "datePublished": "2026-01-01"
    }
  ];

  return (
    <PageWrapper>
      <SEO
        title="House Construction Cost in Kandy 2026 | Rates & Budget Guide"
        description="Comprehensive 2026 guide to house construction costs in Kandy, Sri Lanka. Breakdown of sq ft building rates, foundation costs on sloped land, and BOQ estimation tips."
        canonical="/house-construction-cost-kandy"
        schema={guideSchema}
      />

      {/* Hero Header */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">2026 Construction Price Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            House Construction Cost in <span className="text-accent">Kandy 2026</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-sm md:text-base leading-relaxed font-medium">
            {COST_GUIDE_DATA.intro}
          </p>
        </div>
      </section>

      {/* Main Cost Guide Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-12">
              
              {/* Cost Ranges per Sq Ft */}
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                  Estimated House Construction Cost per Square Foot in Kandy (2026)
                </h2>
                <p className="text-neutral-muted text-sm leading-relaxed">
                  The table below outlines approximate construction cost rates per square foot in Kandy based on quality levels and finishing choices.
                </p>

                <div className="space-y-6">
                  {COST_GUIDE_DATA.costRanges.map((range, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-neutral-light hover:border-accent transition-colors space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
                        <h3 className="text-xl font-bold text-primary">{range.level}</h3>
                        <span className="bg-primary text-accent text-sm font-black px-4 py-1.5 rounded-full w-fit">
                          {range.costPerSqFt}
                        </span>
                      </div>
                      <p className="text-neutral-muted text-sm leading-relaxed">{range.description}</p>
                      <div className="text-xs font-bold text-neutral-dark pt-1">
                        <strong>Sample 2,000 Sq Ft House Total:</strong> {range.sample2000SqFt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage-by-Stage Cost Allocation */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-primary tracking-tight">
                  Cost Breakdown by Construction Phase
                </h2>
                <p className="text-neutral-muted text-sm leading-relaxed">
                  How your total home building budget is distributed across major construction stages in Kandy:
                </p>

                <div className="space-y-3">
                  {COST_GUIDE_DATA.costBreakdownStages.map((stage, idx) => (
                    <div key={idx} className="border border-gray-150 rounded-lg p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
                      <div className="space-y-1 max-w-xl">
                        <h4 className="font-bold text-primary text-sm">{stage.stage}</h4>
                        <p className="text-neutral-muted text-xs">{stage.notes}</p>
                      </div>
                      <span className="text-accent bg-primary font-black text-sm px-3 py-1 rounded shrink-0 w-fit">
                        {stage.share}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Factors that Affect Cost in Kandy */}
              <div className="bg-neutral-light border-l-4 border-accent p-6 rounded-r-lg space-y-3">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent shrink-0" />
                  <span>Important Cost Variables for Kandy Land Owners</span>
                </h3>
                <ul className="text-neutral-muted text-sm space-y-2 list-disc pl-5">
                  <li><strong>Land Topography:</strong> Steep hillside slopes require earth excavation, retaining walls, and stepped foundation footings which add to initial substructure costs.</li>
                  <li><strong>Soil Stability:</strong> Soft clay or loose fill dirt requires deeper pile footings compared to solid rock.</li>
                  <li><strong>Material Logistics:</strong> Narrow access roads in Kandy suburbs may require smaller transit mixers and manual staging.</li>
                  <li><strong>Finishing Materials:</strong> Choice of teak vs mahogany timber, porcelain vs ceramic tiles, and aluminum frames significantly impacts final cost.</li>
                </ul>
              </div>

              {/* Related Guide Articles */}
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-black text-primary">Related Construction Cost Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {GUIDES.map((g, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-accent text-xs font-bold uppercase">{g.readTime}</span>
                        <h4 className="font-bold text-primary text-base leading-snug">{g.title}</h4>
                        <p className="text-neutral-muted text-xs leading-relaxed line-clamp-3">{g.excerpt}</p>
                      </div>
                      <Link
                        to={`/guides/${g.slug}`}
                        className="inline-flex items-center text-primary font-bold text-xs hover:text-accent group pt-2"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="bg-primary text-white rounded-lg p-6 space-y-6 shadow-xl sticky top-28">
                <div className="space-y-2">
                  <span className="text-accent font-extrabold text-xs uppercase tracking-wider block">ACCURATE BOQ ESTIMATION</span>
                  <h3 className="text-2xl font-black">Get an Itemized Cost Estimation</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Have blueprints or land dimensions ready? Contact Quora Builder for a line-item BOQ quotation tailored to your exact plot in Kandy.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-primary font-black py-3 px-6 rounded transition-colors text-sm w-full"
                  >
                    <Calculator className="h-4 w-4" />
                    <span>Request BOQ Quote</span>
                  </Link>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center justify-center space-x-2 border border-white/30 hover:border-white text-white font-bold py-3 px-6 rounded transition-all text-sm w-full"
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
    </PageWrapper>
  );
}
