import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NewsletterForm } from './NewsletterForm';
import { MapPin, Mail, ExternalLink, X, ShieldCheck } from 'lucide-react';
import wumLogo from '../assets/images/wum_logo.png';
import { legalDocumentsMap } from '../data/legalDocuments';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  return (
    <footer className="bg-[#10243A] text-white border-t border-slate-800">
      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Organization Summary (2 columns span on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group bg-white/95 p-2 rounded-xl border border-white/20">
              <img
                src={wumLogo}
                alt="WUM Advisory Services Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              A Pakistan-based advisory and capacity-building organization working at the intersection of education, leadership development, professional learning, strategic research, institutional strengthening, sustainability, and community development.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[#D5A64A] font-semibold">Founder & Director:</span>
                <span>Waqas Umer Malik</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D5A64A] font-semibold">Vision:</span>
                <span>Empowering through sustainable practices</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#087F8C]" />
                <span>Headquartered in Pakistan · Global Cause Support</span>
              </div>
            </div>
          </div>

          {/* Column 1: Organization */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A] mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About WUM
                </Link>
              </li>
              <li>
                <Link to="/about#values" className="hover:text-white transition-colors">
                  Our Values (SEICIN)
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="hover:text-white transition-colors">
                  Founder & Leadership
                </Link>
              </li>
              <li>
                <Link to="/about#compliance" className="hover:text-white transition-colors">
                  Statutory Compliance
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-white transition-colors">
                  Collaboration Models
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A] mb-4">
              What We Do
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="hover:text-white transition-colors">
                  Capacity Building
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Projects & Initiatives
                </Link>
              </li>
              <li>
                <Link to="/crit" className="hover:text-white transition-colors text-white font-medium flex items-center gap-1.5">
                  <span>CRIT Toolkit</span>
                  <span className="text-[10px] text-[#D5A64A] uppercase tracking-wider">Featured</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors">
                  Events & Seminars
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 & 4: Knowledge & Connect / Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A] mb-4">
              Knowledge & Connect
            </h3>
            <div className="space-y-4">
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>
                  <Link to="/knowledge" className="hover:text-white transition-colors">
                    Research & Publications
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:waqasanalyst@yahoo.com"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#087F8C]" />
                    <span className="truncate">waqasanalyst@yahoo.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>CRIT GitHub Repo</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              </ul>

              <div className="pt-2">
                <p className="text-xs font-medium text-slate-200 mb-2">Institutional Updates</p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Regulatory Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} WUM Advisory Services (SMC-Private) Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setActiveModal('accessibility')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Accessibility Statement
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Legal Modals */}
      {activeModal && legalDocumentsMap[activeModal] && (() => {
        const doc = legalDocumentsMap[activeModal];
        return (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="bg-white text-[#10243A] max-w-3xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 shrink-0">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#087F8C] block">
                    Official Statutory & Digital Instrument
                  </span>
                  <h3 id="legal-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-[#10243A]">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Last updated: <span className="font-medium text-[#10243A]">{doc.lastUpdated}</span>
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Document Body */}
              <div className="overflow-y-auto py-5 pr-1 space-y-6 flex-1 text-sm text-[#172B3A] leading-relaxed">
                {/* Preamble */}
                <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-[#087F8C] border-t border-r border-b border-slate-200 text-xs sm:text-sm text-[#10243A] italic leading-relaxed">
                  {doc.preamble}
                </div>

                {/* Sections */}
                <div className="divide-y divide-slate-100 space-y-6">
                  {doc.sections.map((sec) => (
                    <section key={sec.number} className="pt-6 first:pt-0 space-y-2.5">
                      <h4 className="text-base font-bold font-heading text-[#10243A] flex items-center gap-2">
                        <span className="text-[#087F8C] font-mono font-semibold text-xs">
                          {sec.number}
                        </span>
                        <span>{sec.title}</span>
                      </h4>

                      {sec.content && (
                        <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                          {sec.content}
                        </p>
                      )}

                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="space-y-2 pt-1 text-xs sm:text-sm text-[#334155]">
                          {sec.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C] shrink-0 mt-2" />
                              <span className="leading-relaxed">
                                {b.label && (
                                  <strong className="text-[#10243A] font-semibold mr-1.5">
                                    {b.label}:
                                  </strong>
                                )}
                                {b.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <Link
                  to={`/${doc.id}`}
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#10243A] transition-colors"
                >
                  <span>Open Dedicated Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Print
                  </button>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors shadow-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </footer>
  );
};
