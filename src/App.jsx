import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import KandyLocalSEO from './pages/KandyLocalSEO';
import LocationDetail from './pages/LocationDetail';
import CostGuide from './pages/CostGuide';
import GuideDetail from './pages/GuideDetail';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
        <Route path="/house-construction-kandy" element={<KandyLocalSEO />} />
        <Route path="/locations/:locationSlug" element={<LocationDetail />} />
        <Route path="/house-construction-cost-kandy" element={<CostGuide />} />
        <Route path="/guides/:guideSlug" element={<GuideDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-neutral-light font-sans text-neutral-dark antialiased">
        <Navbar />
        {/* Main Content Area */}
        <main className="grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
