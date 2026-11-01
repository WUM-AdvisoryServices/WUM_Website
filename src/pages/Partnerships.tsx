import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import {
  Building2,
  Globe2,
  GraduationCap,
  Briefcase,
  Users2,
  FileCheck2,
  CheckCircle2,
  Handshake,
  Layers
} from 'lucide-react';

const collaborationModels = [
  {
    title: 'Strategic Consortiums & Joint Bids',
    desc: 'Teaming up with international development contractors and local non-profits to co-author competitive grant proposals and tenders.',
    icon: Handshake,
  },
  {
    title: 'Programme Implementation Stewardship',
    desc: 'Serving as the technical delivery partner for multi-district education reform, teacher coaching cohorts, or climate resilience pilots.',
    icon: Layers,
  },
  {
    title: 'Technical Advisory & Institutional Review',
    desc: 'Independent diagnostic audits, organizational restructuring roadmaps, and board governance reviews for growing institutions.',
    icon: FileCheck2,
  },
  {
    title: 'Applied Research & Field Diagnostics',
    desc: 'Joint policy research, vulnerability mapping (CRIT), baseline studies, and third-party monitoring (MEAL) across Pakistan.',
    icon: Globe2,
  },
  {
    title: 'Dedicated Institutional Academies',
    desc: 'Designing and hosting customized executive development programs and teacher training institutes for school chains and universities.',
    icon: GraduationCap,
  },
  {
    title: 'Corporate CSR & Sustainability Alignment',
    desc: 'Directing corporate social responsibility capital into verified high-impact interventions: climate-safe schools and student WASH facilities.',
    icon: Briefcase,
  },
];

const targetAudiences = [
  'Government ministries & provincial education departments',
  'International development agencies & bilateral donors',
  'United Nations agencies and multilateral funds',
  'Universities, think tanks, and research institutes',
  'School systems and public-private education foundations',
  'Corporate organizations and CSR foundations',
  'National and international non-governmental organizations (NGOs)',
  'Independent technical consultants and sector advisors',
];

export const Partnerships: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      <Breadcrumbs items={[{ label: 'Partnerships' }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <span>Institutional Collaboration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
          Partner With WUM Advisory Services
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          We collaborate with governments, donors, academic institutions, and civil society to bridge policy intent and grassroots execution through sustainable capacity building.
        </p>
      </section>

      {/* Target Audiences We Engage */}
      <section className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-[#E2E8F0] space-y-6">
        <SectionHeader
          kicker="Target Partners"
          title="Who We Collaborate With"
          description="WUM Advisory engages across the public, private, and non-profit development spectrum."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-[#10243A]">
          {targetAudiences.map((aud) => (
            <div
              key={aud}
              className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0 mt-0.5" />
              <span className="font-medium">{aud}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="space-y-8">
        <SectionHeader
          kicker="Structured Engagements"
          title="Our Collaboration Models"
          description="Flexible operational mechanisms designed to align with donor compliance, institutional timelines, and grassroots realities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborationModels.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.title}
                className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-3 hover:border-[#087F8C]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#087F8C]/10 text-[#087F8C] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#10243A]">
                  {model.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {model.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Verification & Ethical Transparency Banner */}
      <section className="bg-[#10243A] text-white rounded-2xl p-8 sm:p-10 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A]">
              Institutional Integrity Notice
            </span>
            <h3 className="text-xl font-bold font-heading">
              Transparent Institutional Relationships
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In accordance with our governance charter, WUM Advisory displays only legally verified institutional partnerships. Prospective collaborators are invited to initiate formal exploratory discussions below.
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-[#D5A64A] shrink-0 font-medium">
            Strict Non-Fabrication Policy
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E2E8F0] shadow-xs space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
            Initiate Engagement
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A] mt-1">
            Submit a Partnership or Consortium Expression of Interest
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Share details regarding your organization, proposed collaboration scope, geographic focus, and timeline. Our leadership team will review and schedule a scoping dialogue.
          </p>
        </div>

        <ContactForm defaultCategory="Partnership Enquiry" defaultSubject="Partnership / Consortium Inquiry" />
      </section>
    </div>
  );
};
