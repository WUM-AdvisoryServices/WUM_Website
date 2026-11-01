/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Programmes } from './pages/Programmes';
import { Projects } from './pages/Projects';
import { CRIT } from './pages/CRIT';
import { Knowledge } from './pages/Knowledge';
import { Partnerships } from './pages/Partnerships';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';
import { LegalPage } from './pages/LegalPage';

// Scroll to top or anchor smoothly on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#172B3A] selection:bg-[#087F8C]/20 selection:text-[#10243A]">
        {/* Skip to Content for Accessibility (WCAG 2.1 AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#10243A] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Routed Content Area */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/crit" element={<CRIT />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<LegalPage docType="privacy" />} />
            <Route path="/terms" element={<LegalPage docType="terms" />} />
            <Route path="/accessibility" element={<LegalPage docType="accessibility" />} />
            <Route path="/legal/:type" element={<LegalPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Institutional Footer */}
        <Footer />

        {/* Floating Back To Top Button */}
        <BackToTop />
      </div>
    </HashRouter>
  );
}
