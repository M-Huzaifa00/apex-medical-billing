import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { DevBanner } from './components/DevBanner';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { ContactPage } from './pages/ContactPage';
import { cubicEase } from './utils/animations';

export default function App() {
  const location = useLocation();
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAudit = () => setIsAuditModalOpen(true);
  const handleCloseAudit = () => setIsAuditModalOpen(false);

  // Scroll to top on every navigation (including re-clicking the current page),
  // unless the URL targets an in-page anchor such as /services#comparison.
  useEffect(() => {
    console.log('location.key:', location.key, 'location.hash:', location.hash);
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.key, location.hash]);

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#1E2423] selection:bg-[#57B836] selection:text-[#F8FAF7] flex flex-col font-sans-clean">
      {/* Temporary Development Notice */}
      <DevBanner />

      {/* Floating Minimal Navigation */}
      <Navbar onOpenAudit={handleOpenAudit} />

      {/* Main Content View with Page Transition */}
      <main className="flex-1 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: cubicEase }}
          >
            {/* Pass location so the exiting page keeps rendering its own route */}
            <Routes location={location}>
              <Route path="/" element={<HomePage onOpenAudit={handleOpenAudit} />} />
              <Route path="/about-us" element={<AboutUsPage onOpenAudit={handleOpenAudit} />} />
              <Route path="/services" element={<ServicesPage onOpenAudit={handleOpenAudit} />} />
              <Route path="/specialties" element={<SpecialtiesPage onOpenAudit={handleOpenAudit} />} />
              <Route path="/why-choose-us" element={<WhyChooseUsPage onOpenAudit={handleOpenAudit} />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Substantial Premium Footer */}
      <Footer onOpenAudit={handleOpenAudit} />

      {/* Interactive Practice Audit Modal Dialog */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} />
    </div>
  );
}
