import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { Home, Building2, Wrench, Mail, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <PageWrapper>
      <SEO
        title="404 - Page Not Found"
        description="The requested page could not be found on Quora Builder."
      />

      <section className="min-h-[70vh] bg-primary text-white flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="text-accent text-7xl md:text-9xl font-black tracking-widest">
            404
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed font-medium">
            The page you are looking for does not exist or may have moved. Explore our primary house construction pages below.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary font-black px-6 py-3 rounded shadow-lg transition-colors text-sm"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/house-construction-kandy"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded transition-all text-sm"
            >
              <Building2 className="h-4 w-4 text-accent" />
              <span>House Construction Kandy</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded transition-all text-sm"
            >
              <Wrench className="h-4 w-4 text-accent" />
              <span>Our Services</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded transition-all text-sm"
            >
              <Mail className="h-4 w-4 text-accent" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
