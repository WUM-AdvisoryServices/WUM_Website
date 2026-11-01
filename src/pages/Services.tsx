import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData, Service } from '../data/services';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  X,
  ArrowRight,
  Target,
  Sparkles
} from 'lucide-react';

const categories = [
  'All',
  'Strategy & Governance',
  'Capacity & Leadership',
  'Education',
  'Sustainability',
] as const;

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeServiceModal, setActiveServiceModal] = useState<Service | null>(null);

  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === 'All') return true;
    return service.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Header Overview */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <span>Professional Advisory Practice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
          Strategic Advisory, Capacity Building & Institutional Transformation
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          We partner with government ministries, international development agencies, educational networks, and non-profits to design evidence-based solutions that endure.
        </p>
      </section>

      {/* Interactive Category Filter Tabs */}
      <section className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-white text-[#10243A] shadow-xs'
                : 'text-[#64748B] hover:text-[#10243A]'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Services Grid (10 offerings) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={(s) => setActiveServiceModal(s)}
          />
        ))}
      </section>

      {/* Institutional Advisory Framework Banner */}
      <section className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-[#E2E8F0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
              Bespoke Engagement Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A]">
              Need a Custom Institutional Advisory or Diagnostic Review?
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We design tailored consultancy engagements, multi-month capacity-building academies, and independent third-party monitoring for complex development programs.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              to="/partnerships"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors text-center shadow-xs"
            >
              Request Advisory Proposal
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#10243A] bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors text-center"
            >
              Schedule Scoping Call
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveServiceModal(null)}
        >
          <div
            className="bg-white text-[#10243A] max-w-3xl w-full rounded-2xl p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-3 text-xs text-[#087F8C] font-semibold uppercase tracking-wider mb-2">
                <span>{activeServiceModal.number}</span>
                <span>·</span>
                <span>{activeServiceModal.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A]">
                {activeServiceModal.title}
              </h3>
            </div>

            {/* Overview & Strategic Relevance */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Service Overview & Strategic Relevance
              </h4>
              <p className="text-sm text-[#172B3A] leading-relaxed">
                {activeServiceModal.overview}
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                "{activeServiceModal.strategicRelevance}"
              </p>
            </div>

            {/* Target Beneficiaries & Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A] flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-[#087F8C]" />
                  <span>Target Beneficiaries & Clients</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#64748B]">
                  {activeServiceModal.targetBeneficiaries.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-[#087F8C] font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D5A64A]" />
                  <span>Delivery Methodology</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#64748B]">
                  {activeServiceModal.deliveryMethodology.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#438B62] shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Potential Outputs & Expected Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                  Potential Deliverables & Outputs
                </h4>
                <ul className="space-y-1.5 text-xs text-[#64748B]">
                  {activeServiceModal.potentialOutputs.map((out) => (
                    <li key={out}>• {out}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                  Expected Measurable Outcomes
                </h4>
                <ul className="space-y-1.5 text-xs text-[#64748B]">
                  {activeServiceModal.expectedOutcomes.map((eo) => (
                    <li key={eo}>• {eo}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setActiveServiceModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <Link
                to={`/contact?subject=Service Inquiry: ${encodeURIComponent(activeServiceModal.title)}`}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Engage WUM on This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
