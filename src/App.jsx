import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WillemLoader from './components/WillemLoader';
import ConstructionPageTransition from './components/ConstructionPageTransition';

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
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConstructionPageTransition />
      <WillemLoader>
        <div className="flex flex-col min-h-screen bg-neutral-light font-sans text-neutral-dark antialiased">
          <Navbar />
          <main className="grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </WillemLoader>
    </Router>
  );
}

export default App;
