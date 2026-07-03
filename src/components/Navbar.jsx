import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Hammer,
  Wrench,
  Building2,
  Users,
  Mail,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: Building2 },
    { name: "Services", path: "/services", icon: Wrench },
    { name: "About", path: "/about", icon: Users },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 shadow-xl backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
          }`}
      >
        {/* Desktop Navbar */}
        <div className="hidden lg:block max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-4 shrink-0">
              <div className="h-16 w-16 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm">
                {/* <Building2 className="h-8 w-8 text-yellow-600" /> */}
                <img src={logo} alt="Logo" className="h-full w-full" />
              </div>

              <div>
                <h1 className="text-2xl font-black text-[#07111f] tracking-widest">
                  QUORA
                  <span className="text-yellow-600"> BUILDERS</span>
                </h1>
                <p className="text-sm font-bold text-gray-500">
                  Construction / Real Estate
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              {/* Ruler Menu */}
              <div className="relative flex items-center bg-yellow-500 rounded-md shadow-2xl border border-yellow-700 overflow-hidden">
                <div className="h-20 w-20 bg-gradient-to-r from-gray-900 to-gray-600 flex items-center justify-center">
                  {/* <Hammer className="h-8 w-8 text-yellow-400" /> */}
                  <img src={logo} alt="Logo" className="h-full w-full" />
                </div>

                <div className="absolute inset-y-0 left-20 right-0 pointer-events-none opacity-60">
                  <div className="flex h-full">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-[10px] border-l border-black/40 ${i % 4 === 0 ? "h-8" : i % 2 === 0 ? "h-5" : "h-3"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex items-center px-4 gap-1">
                  {links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `group h-20 min-w-[92px] px-2 flex flex-col items-center justify-center gap-1 text-xs font-black uppercase tracking-wide transition-all duration-300 ${isActive
                            ? "text-white"
                            : "text-[#07111f] hover:text-white"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <Icon className="h-6 w-6" />
                            <span>{link.name}</span>
                            <span
                              className={`h-[3px] rounded-full bg-black transition-all duration-300 ${isActive ? "w-10" : "w-0 group-hover:w-10"
                                }`}
                            />
                          </>
                        )}
                      </NavLink>
                    );
                  })}
                </div>

                <div className="h-20 w-8 bg-gradient-to-l from-gray-600 to-gray-300 border-l border-yellow-800" />
              </div>

              {/* Desktop Get Quote */}
              <Link
                to="/contact"
                className="h-14 px-6 rounded-md bg-[#07111f] text-yellow-400 font-black uppercase tracking-wide flex items-center gap-2 shadow-xl hover:bg-yellow-500 hover:text-[#07111f] transition-all duration-300"
              >
                <FileText className="h-5 w-5" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navbar */}
        <div className="lg:hidden bg-[#07111f] border-b border-yellow-500/30">
          <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500" />

          <div className="px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <div className="text-[#07111f] p-2 rounded-md shrink-0">
                {/* <Hammer className="h-5 w-5" /> */}
                <img src={logo} alt="Logo" className="h-8 w-8" />
              </div>

              <div className="min-w-0">
                <h1 className="text-white font-black tracking-widest text-base sm:text-xl leading-none">
                  QUORA
                  <span className="text-yellow-400">BUILDERS</span>
                </h1>
                <p className="text-[9px] sm:text-[10px] tracking-[0.25em] text-gray-400 mt-1">
                  CONSTRUCTION
                </p>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="shrink-0 text-white bg-yellow-500/15 border border-yellow-500/30 p-2.5 rounded-md"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Width Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed inset-0 z-[100] bg-[#07111f] lg:hidden"
          >
            <div className="h-2 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500" />

            <div className="relative h-full px-5 py-6 overflow-hidden flex flex-col">
              <div className="absolute -right-20 top-24 h-60 w-60 bg-yellow-500/10 rotate-45" />
              <div className="absolute -left-24 bottom-24 h-72 w-72 bg-orange-500/10 rotate-45" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <Link to="/" className="flex items-center gap-3 min-w-0">
                  <div className=" text-[#07111f] p-2 rounded-md shrink-0">
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-white font-black tracking-widest text-lg sm:text-xl leading-none">
                      QUORA
                      <span className="text-yellow-400">BUILDERS</span>
                    </h2>
                    <p className="text-[10px] tracking-[0.25em] text-gray-400 mt-1">
                      CONSTRUCTION
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="shrink-0 text-white bg-white/10 p-2.5 rounded-md"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <div className="relative z-10 mt-8 flex flex-col gap-4 flex-1">
                {links.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07 }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex items-center justify-between w-full px-5 py-4 rounded-2xl font-black text-base sm:text-lg transition-all duration-300 ${isActive
                            ? "bg-yellow-500 text-[#07111f]"
                            : "bg-white/5 text-white hover:bg-yellow-500/15 hover:text-yellow-400"
                          }`
                        }
                      >
                        <span className="flex items-center gap-4">
                          <Icon className="h-6 w-6" />
                          {link.name}
                        </span>
                        <span className="text-2xl">›</span>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Quote - aligned bottom */}
              <div className="relative z-10 pb-6">
                <Link
                  to="/contact"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#07111f] font-black py-4 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Get Quote
                </Link>

                <p className="text-center text-xs text-gray-500 mt-5">
                  © 2026 Quora Builders. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}