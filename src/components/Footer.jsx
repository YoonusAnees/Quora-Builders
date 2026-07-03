import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  return (
    <footer className="bg-primary text-white border-t border-primary-light">
      {/* Top Banner / Call to Action */}
      <div className="bg-accent text-primary py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl md:text-2xl font-black">Ready to build your dream project?</h3>
            <p className="font-semibold text-sm md:text-base mt-1 opacity-90">Let's construct something extraordinary together.</p>
          </div>
          <Link
            to="/contact"
            className="bg-primary hover:bg-neutral-dark text-white font-bold px-6 py-3 rounded shadow-lg transition-colors duration-300 flex items-center space-x-2 text-sm"
          >
            <span>Get Free Quote</span>
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
              <div className="bg-accent p-1.5 rounded text-primary">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white">
                QUORA<span className="text-accent">BUILDERS</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quora Builders is a premier construction firm dedicated to high-quality craftsmanship, structural integrity, and exceptional client relationships. We shape modern landscapes.
            </p>
            {/* Socials */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="bg-primary-light hover:bg-accent hover:text-primary text-gray-300 p-2 rounded transition-colors duration-300"
                  aria-label="Social Link"
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
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
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
              Office Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>123 Construction Boulevard, Suite 500, Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+18005550199" className="hover:text-accent transition-colors duration-300">+1 (800) 555-0199</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@quorabuilders.com" className="hover:text-accent transition-colors duration-300">info@quorabuilders.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-base uppercase tracking-wider text-white border-l-2 border-accent pl-3 mb-6">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to stay updated with our latest architectural works and insights.
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
        <div className="mt-12 pt-8 border-t border-primary-light/50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Quora Builders Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
