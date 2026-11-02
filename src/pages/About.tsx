import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import {
  ShieldCheck,
  Target,
  Sparkles,
  Award,
  Globe2,
  Users2,
  CheckCircle2,
  Leaf,
  Scale,
  Lightbulb,
  ExternalLink,
  Mail,
  Building2,
  FileCheck2
} from 'lucide-react';
import wumLogo from '../assets/images/wum_logo.png';
import wumGeographicSurveyFieldImg from '../assets/images/wum_geographic_survey_field_1793519786263.jpg';

const seicinValues = [
  {
    code: 'SUST',
    name: 'Sustainability',
    role: 'The Foundation',
    desc: 'Ensuring all advisory frameworks, educational models, and infrastructure designs possess ecological, economic, and institutional endurance for generations to come.',
    icon: Leaf,
    color: '#438B62',
  },
  {
    code: 'EMPO',
    name: 'Empowerment',
    role: 'The Principal Focus',
    desc: 'Unlocking human potential through participatory capacity building, providing educators, school heads, and civic actors the tools to lead change independently.',
    icon: Users2,
    color: '#087F8C',
  },
  {
    code: 'INTE',
    name: 'Integrity',
    role: 'The Moral Anchor',
    desc: 'Upholding uncompromising ethical standards, truth in reporting, fiduciary stewardship, and honesty about development challenges and outcomes.',
    icon: Scale,
    color: '#10243A',
  },
  {
    code: 'COLA',
    name: 'Collaboration',
    role: 'The Operating Model',
    desc: 'Breaking organizational silos by convening governments, academia, civil society, and international development agencies around shared development objectives.',
    icon: Globe2,
    color: '#087F8C',
  },
  {
    code: 'INNO',
    name: 'Innovation',
    role: 'The Future Priority',
    desc: 'Pioneering open-access toolkits, climate adaptation engineering, and ethical digital integration to address chronic socio-educational hurdles.',
    icon: Lightbulb,
    color: '#D5A64A',
  },
];

const strategicPriorities = [
  {
    title: 'Transforming Educational Leadership',
    desc: 'Shifting primary and secondary schooling ecosystems from clerical compliance to proactive instructional coaching and safe, joyful classrooms.',
  },
  {
    title: 'Mainstreaming Climate Resilience',
    desc: 'Advancing open toolkits (such as CRIT) that equip communities to retrofit and build disaster-safe, heat-resilient school buildings.',
  },
  {
    title: 'Strengthening Civil Society Governance',
    desc: 'Institutionalizing rigorous standard operating procedures, board oversight, and financial controls across emerging non-profits.',
  },
  {
    title: 'Ethical Digital & AI Literacy',
    desc: 'Demystifying technological advances so teachers and development practitioners leverage modern data tools without widening societal divides.',
  },
];

export const About: React.FC = () => {
  const [activeValue, setActiveValue] = useState(seicinValues[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      <Breadcrumbs items={[{ label: 'About WUM' }]} />

      {/* Hero Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
            <span>Institutional Profile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
            Pioneering Sustainable Advisory & Capacity-Building Solutions in Pakistan.
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            <strong>WUM Advisory Services (SMC-Private) Limited</strong> is a specialized advisory and capacity-building organization working at the intersection of education transformation, executive leadership, professional training, strategic research, institutional governance, and community sustainability.
          </p>
        </div>

        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col items-center justify-center text-center">
          <img
            src={wumLogo}
            alt="Official WUM Advisory Services Logo"
            className="w-full max-w-[220px] h-auto object-contain mb-4"
          />
          <p className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
            Official Institutional Mark
          </p>
          <p className="text-[11px] text-[#64748B] mt-1">
            Empowering through sustainable practices
          </p>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-xs relative overflow-hidden">
          <div className="w-12 h-12 rounded-lg bg-[#438B62]/10 text-[#438B62] flex items-center justify-center mb-6">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#438B62] block mb-2">
            Our Vision
          </span>
          <h2 className="text-2xl font-bold font-heading text-[#10243A] mb-3">
            Empowering through sustainable practices
          </h2>
          <p className="text-sm text-[#64748B] leading-relaxed">
            We envision resilient communities and robust institutions equipped with the knowledge, leadership, and ecological stewardship to thrive in an era of rapid developmental and climatic change.
          </p>
        </div>

        <div className="bg-[#10243A] text-white rounded-xl p-8 border border-slate-800 shadow-xs relative overflow-hidden">
          <div className="w-12 h-12 rounded-lg bg-[#087F8C]/20 text-[#087F8C] flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-[#D5A64A]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A] block mb-2">
            Our Mission
          </span>
          <h2 className="text-2xl font-bold font-heading text-white mb-3">
            Leading capacity-building initiatives that contribute to development
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We design and deliver evidence-grounded advisory frameworks, executive training programs, and open-source infrastructure toolkits that empower people and strengthen public and civic systems.
          </p>
        </div>
      </section>

      {/* Core Values: SEICIN */}
      <section id="values" className="space-y-8">
        <SectionHeader
          kicker="Institutional Philosophy"
          title="Our Core Values: SEICIN"
          description="The governing ethical compass shaping our client engagements, research standards, and programmatic commitments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Value Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {seicinValues.map((val) => {
              const isSelected = activeValue.code === val.code;
              return (
                <button
                  key={val.code}
                  onClick={() => setActiveValue(val)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-[#087F8C] shadow-sm'
                      : 'bg-slate-50 border-[#E2E8F0] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-[#087F8C]">
                      {val.code}
                    </span>
                    <div>
                      <span className="font-bold text-sm text-[#10243A] block">
                        {val.name}
                      </span>
                      <span className="text-xs text-[#64748B]">{val.role}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#087F8C]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Value Spotlight Card */}
          <div className="lg:col-span-7 bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-mono font-extrabold text-[#087F8C]">
                {activeValue.code}
              </span>
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#10243A]">
                  {activeValue.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A]">
                  {activeValue.role}
                </span>
              </div>
            </div>

            <p className="text-base text-[#172B3A] leading-relaxed pt-2">
              {activeValue.desc}
            </p>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0" />
                <span>Zero tolerance for cosmetic metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0" />
                <span>Contextually grounded in local realities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Section */}
      <section id="leadership" className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-[#E2E8F0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
              Organizational Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A]">
              Waqas Umer Malik
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold uppercase tracking-wider text-[#D5A64A]">
                Founder & Director
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              {/* ORCID badge */}
              <a
                href="https://orcid.org/0009-0002-8470-5261"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#24292e] font-medium hover:border-[#A6CE39] transition-colors"
                title="View verified ORCID researcher profile"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39]" />
                <span className="font-mono text-[11px]">ORCID: 0009-0002-8470-5261</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <a
                href="mailto:waqasanalyst@yahoo.com"
                className="inline-flex items-center gap-1 text-[#087F8C] hover:underline"
              >
                <Mail className="w-3 h-3" />
                <span>waqasanalyst@yahoo.com</span>
              </a>
            </div>

            <p className="text-sm text-[#172B3A] leading-relaxed pt-2">
              Waqas Umer Malik is the Founder and Director of WUM Advisory Services (SMC-Private) Limited. He brings dedicated expertise to sustainable development, institutional strengthening, and transformational educational leadership across Pakistan. Under his leadership, WUM has pioneered open development frameworks including the Climate-Resilient School Infrastructure Toolkit (CRIT), targeted instructional leadership academies for school administrators, and institutional capacity diagnostics.
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              His institutional philosophy balances rigorous analytical research and evidence-based governance with community-centered capacity building, ensuring that strategic policies translate into tangible classroom, community, and institutional improvements.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
              Director's Stewardship
            </h3>
            <ul className="space-y-2.5 text-xs text-[#64748B]">
              <li className="flex items-start gap-2">
                <Award className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                <span>Strategic roadmap design and multilateral donor dialogue</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                <span>Direct stewardship of the CRIT Open-Source Toolkit</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                <span>Executive mentorship for emerging education leaders</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="https://orcid.org/0009-0002-8470-5261"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-[#10243A] bg-slate-50 hover:bg-[#087F8C] hover:text-white rounded-lg transition-colors border border-slate-200"
              >
                <span>View Academic & Research Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Surveillance & Field Ground-Truthing Section */}
      <section className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative aspect-16/9 lg:aspect-auto lg:h-full min-h-[320px] bg-slate-900">
            <img
              src={wumGeographicSurveyFieldImg}
              alt="Geographic field surveillance and geospatial survey team in Pakistan"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="text-[#D5A64A] font-semibold block mb-0.5">Field Surveillance & Ground-Truthing</span>
              <span>Geospatial telemetry, GNSS topography surveys, and school risk auditing in high-vulnerability districts.</span>
            </div>
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
              Territorial Ground-Truthing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A]">
              Rigorous Geographic Surveillance & Spatial Diagnostics
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Effective public and institutional policy cannot be formulated from air-conditioned offices alone. WUM Advisory combines high-level corporate governance with rigorous on-the-ground geographic surveillance—deploying satellite GIS overlays, elevation surveys, and field telemetry to verify physical conditions across Pakistan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#172B3A] pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0" />
                <span>Geospatial hazard mapping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0" />
                <span>Site elevation & drainage audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0" />
                <span>Territorial climate risk matrices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0" />
                <span>Direct community verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="space-y-8">
        <SectionHeader
          kicker="Our Agenda"
          title="Strategic Priorities & Pillars"
          description="Addressing critical developmental challenges through focused institutional capabilities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategicPriorities.map((pri, idx) => (
            <div
              key={pri.title}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#087F8C]/40 transition-colors"
            >
              <span className="text-xs font-mono font-bold text-[#087F8C] block mb-2">
                0{idx + 1}
              </span>
              <h3 className="text-base font-bold font-heading text-[#10243A]">
                {pri.title}
              </h3>
              <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                {pri.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statutory Corporate Certification & Ethical Commitment */}
      <section id="compliance" className="bg-[#10243A] text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A]">
          Statutory Compliance & Legal Identity
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading">
          Corporate Registration & Statutory Certification
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
          <div className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#D5A64A]" />
              <span>SECP Certification</span>
            </h3>
            <p className="leading-relaxed text-xs">
              Certified under Section 16 of the Companies Act, 2017 (XIX of 2017) by the Securities and Exchange Commission of Pakistan (SECP).
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono font-semibold text-[#D5A64A]">CUI # 0314319</span>
            </div>
            <div className="pt-1">
              <a
                href="https://leap.secp.gov.pk/#/verify-company-info/0314319"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:underline"
              >
                <span>Verify Online on SECP LEAP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2">
            <h3 className="font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-[#087F8C]" />
              <span>Legal Entity Category</span>
            </h3>
            <p className="leading-relaxed text-xs">
              Single Member Private Limited Company (SMC-Private) Limited, operating within Pakistan's statutory corporate framework for advisory and capacity-building entities.
            </p>
          </div>

          <div className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2">
            <h3 className="font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#438B62]" />
              <span>Ethical Integrity</span>
            </h3>
            <p className="leading-relaxed text-xs">
              Uncompromising truth in reporting. We never fabricate client references, fake partnerships, or simulate outputs that have not been achieved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
