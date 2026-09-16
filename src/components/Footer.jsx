import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from "../assets/Logo.webp";
import { COMPANY } from "../config/company";

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Tiktok = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.234V2h-3.12v12.365c0 1.479-1.18 2.68-2.636 2.68a2.64 2.64 0 0 1-2.636-2.68 2.64 2.64 0 0 1 2.636-2.68c.273 0 .537.042.785.12V8.64a5.84 5.84 0 0 0-.785-.054A5.79 5.79 0 0 0 4.27 14.37 5.79 5.79 0 0 0 10.063 20a5.79 5.79 0 0 0 5.793-5.63V8.096a7.89 7.89 0 0 0 4.604 1.47V6.686h-.87z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Quora Builder newsletter!');
    e.target.reset();
  };

  return (
    <footer className="bg-primary text-white border-t border-primary-light">
      {/* Top Banner CTA */}
      <div className="bg-accent text-primary py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl md:text-2xl font-black">Planning your dream house in Kandy?</h3>
            <p className="font-semibold text-sm md:text-base mt-1 opacity-90">Let's construct something extraordinary together.</p>
          </div>
          <Link
            to="/contact"
            className="bg-primary hover:bg-neutral-dark text-white font-bold px-6 py-3 rounded shadow-lg transition-colors duration-300 flex items-center space-x-2 text-sm shrink-0"
          >
            <span>Get Free BOQ Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                <img src={logo} alt="Quora Builder Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white">
                QUORA<span className="text-accent">BUILDER</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quora Builder is a premier house construction and structural engineering firm in Kandy, Sri Lanka. Dedicated to high-quality craftsmanship, hillside foundation stability, and transparent client relationships.
            </p>

            {/* Socials */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: COMPANY.socials.facebook, label: 'Facebook' },
                { icon: Tiktok, href: COMPANY.socials.tiktok, label: 'TikTok' },
                { icon: Instagram, href: COMPANY.socials.instagram, label: 'Instagram' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-light hover:bg-accent hover:text-primary text-gray-300 p-2.5 rounded transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-base uppercase tracking-wider text-white border-l-2 border-accent pl-3 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'Home', path: '/' },
                { name: 'House Construction Kandy', path: '/house-construction-kandy' },
                { name: 'Construction Cost Guide 2026', path: '/house-construction-cost-kandy' },
                { name: 'Services', path: '/services' },
                { name: 'Project Portfolio', path: '/projects' },
                { name: 'About Quora Builder', path: '/about' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-bold text-base uppercase tracking-wider text-white border-l-2 border-accent pl-3 mb-6">
              Kandy Office Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{COMPANY.address.formatted}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-accent transition-colors duration-300">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-accent transition-colors duration-300">{COMPANY.email}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-base uppercase tracking-wider text-white border-l-2 border-accent pl-3 mb-6">
              Building Insights
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive technical guides and price updates for house construction in Kandy.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full bg-primary-light text-white text-sm px-4 py-3 rounded border border-primary-light focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-2.5 rounded text-sm transition-colors duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-light/50 flex flex-col md:flex-row justify-between items-center text-md text-gray-400 space-y-4 md:space-y-0">
          <p>© {currentYear} {COMPANY.legalName}. All rights reserved. <div> House Construction & Engineering – Kandy, Sri Lanka.</div> </p>
          <div className="flex space-x-6">
            <Link to="/house-construction-kandy" className="hover:text-white transition-colors">Kandy Builders</Link>
            <Link to="/house-construction-cost-kandy" className="hover:text-white transition-colors">Construction Cost 2026</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
