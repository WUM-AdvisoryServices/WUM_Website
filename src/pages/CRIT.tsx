import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  Sun,
  Droplets,
  Wind,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  MapPin,
  Cpu,
  Layers,
  ArrowRight,
  Share2,
  Check,
  Building2,
  HelpCircle,
  FileCode,
  Download
} from 'lucide-react';

const assessmentPillars = [
  {
    name: 'Flood & Drainage Vulnerability',
    icon: Droplets,
    desc: 'Topographical elevation, plinth height relative to 50-year flood levels, and site rainwater dispersion.',
  },
  {
    name: 'Thermal Comfort & Heatwave Stress',
    icon: Sun,
    desc: 'Roof solar reflectance, wall thermal mass, cross-ventilation aperture ratios, and canopy shading.',
  },
  {
    name: 'Structural & Wind Resilience',
    icon: Wind,
    desc: 'Roof truss anchoring, masonry tie-beams, seismic bracing, and window shutter integrity.',
  },
  {
    name: 'WASH & Water Security',
    icon: Droplets,
    desc: 'Groundwater quality, solar pump reliability, rainwater cistern capacity, and child-safe sanitation.',
  },
];

const retrofittingTechniques = [
  {
    title: 'Double-Layered Ventilated Roofs',
    impact: 'Reduces classroom ceiling radiant heat by up to 6°C during summer peaks.',
    desc: 'Installing secondary corrugated or tiled over-roofs with continuous air gaps that expel hot air via natural stack convection.',
  },
  {
    title: 'High-Plinth Foundations & French Drains',
    impact: 'Prevents structural inundation and foundation erosion during flash monsoons.',
    desc: 'Raising critical floor levels $\\ge 0.75\\text{m}$ above surrounding terrain and encasing school perimeters with permeable gravel French drains.',
  },
  {
    title: 'Decentralized Solar & Rainwater Cisterns',
    impact: 'Guarantees uninterrupted clean drinking water and classroom lighting.',
    desc: 'Low-maintenance rooftop solar kits coupled with first-flush rainwater filtration diverters to maintain continuous water supply during grid blackouts.',
  },
  {
    title: 'Community Passive Micro-Gardens & Tree Shading',
    impact: 'Cools micro-climates and stops dust ingress.',
    desc: 'Planting fast-growing native shade trees along southern and western classroom facades to shield building walls from severe solar exposure.',
  },
];

export const CRIT: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      <Breadcrumbs
        items={[
          { label: 'Projects', to: '/projects' },
          { label: 'CRIT Toolkit' },
        ]}
      />

      {/* 1. HERO SECTION & PROJECT OVERVIEW */}
      <section className="bg-gradient-to-br from-[#10243A] via-[#10243A] to-[#0A1A2A] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D5A64A]">
              <span>Flagship Initiative</span>
              <span aria-hidden="true">·</span>
              <span>Open-Source Technical Toolkit</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">Status: Active & Open</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-[1.15]">
              Climate-Resilient School Infrastructure Toolkit (CRIT)
            </h1>

            <p className="text-base sm:text-lg text-[#D5A64A] font-medium leading-snug">
              Empowering Communities to Build Safer, Sustainable Schools for Children.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The Climate-Resilient School Infrastructure Toolkit (CRIT) is an open, community-centered technical framework developed by WUM Advisory Services. It provides educational authorities, school management committees (SMCs), donors, and local engineers with practical blueprints, assessment rubrics, and retrofitting protocols to ensure school buildings withstand severe climate shocks in Pakistan.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* PRIMARY PROMPT MANDATED BUTTON */}
              <a
                href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-[#10243A] bg-[#D5A64A] hover:bg-white transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Explore the CRIT Toolkit</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={handleShare}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Link Copied' : 'Share Initiative'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-4/3 bg-slate-900 group">
              <img
                src="/src/assets/images/crit_school_resilience_1793517579943.jpg"
                alt="Architectural photograph of a sustainable climate-resilient school with solar and rainwater harvesting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200">
                <span className="text-[#D5A64A] font-semibold block mb-0.5">Community-Managed Infrastructure</span>
                <span>Passive thermal mass, rooftop solar arrays, and elevated flood plinths.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIMATE AND EDUCATION CHALLENGES IN PAKISTAN */}
      <section className="space-y-6">
        <SectionHeader
          kicker="The Problem Context"
          title="The Climate Crisis is an Education Emergency in Pakistan"
          description="Without climate-proof physical learning spaces, extreme climatic volatility continuously interrupts schooling for millions of children."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#10243A]">
              Recurrent Flood Inundation
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Seasonal flash floods regularly submerge rural school campuses, eroding shallow foundations and leaving schools filled with hazardous silt for months after waters recede.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#10243A]">
              Extreme Heat & Classroom Stress
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Classroom indoor temperatures frequently cross 43°C during May-September. Poorly insulated tin or concrete roofs induce heat exhaustion among young students and teachers.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#10243A]">
              WASH Collapse & Water Scarcity
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Contaminated groundwater and grid power outages cripple school handwashing and toilet facilities, forcing disproportionate dropout rates, particularly among adolescent girls.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROJECT OBJECTIVES */}
      <section className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-[#E2E8F0] space-y-6">
        <SectionHeader
          kicker="Core Mandate"
          title="CRIT Objectives & Desired Impacts"
          description="Designed as a bridge between structural engineering rigor and grassroots community agency."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#172B3A]">
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#438B62] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#10243A] mb-1">Standardized Climate Risk Audits:</strong>
              <span className="text-xs text-[#64748B]">Provide non-engineer head teachers and SMC members with a 30-point scoring rubric to assess their school's physical vulnerability.</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#438B62] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#10243A] mb-1">Low-Cost Contextual Retrofitting:</strong>
              <span className="text-xs text-[#64748B]">Codify vernacular, locally sourced adaptation methods (such as clay-lime insulation, cross-vents, and shaded verandas) costing a fraction of total rebuilds.</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#438B62] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#10243A] mb-1">Community Governance & Maintenance:</strong>
              <span className="text-xs text-[#64748B]">Equip local communities with maintenance protocols and budget guidelines to stop minor physical damage from degrading into structural failure.</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#438B62] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#10243A] mb-1">Open-Source Accessibility:</strong>
              <span className="text-xs text-[#64748B]">Publish all architectural specifications, assessment calculators, and guides openly under permissive licenses on GitHub for universal public benefit.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. SCHOOL SAFETY & RESILIENCE ASSESSMENTS */}
      <section className="space-y-8">
        <SectionHeader
          kicker="Evaluation Architecture"
          title="The 4-Pillar School Resilience Assessment"
          description="How schools are scored across specific physical vulnerabilities before interventions are prescribed."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assessmentPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#087F8C]/10 text-[#087F8C] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-[#10243A]">
                  {p.name}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. INFRASTRUCTURE ADAPTATION & RETROFITTING APPROACHES */}
      <section className="space-y-8">
        <SectionHeader
          kicker="Engineering & Architecture"
          title="Targeted Adaptation & Retrofitting Approaches"
          description="Context-sensitive architectural interventions that lower temperatures, protect structures, and guarantee utilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {retrofittingTechniques.map((tech) => (
            <div
              key={tech.title}
              className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#087F8C]/40 transition-colors"
            >
              <h3 className="text-lg font-bold font-heading text-[#10243A]">
                {tech.title}
              </h3>
              <p className="text-xs font-semibold text-[#438B62]">
                Impact: {tech.impact}
              </p>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-1">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 & 8. COMMUNITY PARTICIPATION & CAPACITY BUILDING */}
      <section className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E2E8F0] space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
              Social Ownership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A]">
              Community Participation & Stakeholder Capacity Building
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Engineering solutions fail when communities are treated as passive recipients. CRIT anchors every intervention in the School Management Committee (SMC), training local masons, parents, and older youth to inspect, repair, and safeguard their own schools.
            </p>
            <ul className="space-y-2 text-xs text-[#172B3A]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>Illustrated pictorial checklists in Urdu and regional languages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>Training workshops for local village carpenters and masons</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>Disaster preparedness and rapid emergency evacuation drills</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold font-heading text-[#10243A]">
              Teacher & Headmaster Empowerment
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Through the CRIT module in our Teacher Professional Development series, educators learn to monitor indoor classroom air quality, enforce hydration protocols during heatwaves, and integrate climate adaptation directly into primary science activities.
            </p>
            <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs text-[#087F8C] font-medium">
              "When teachers understand heat dynamics, they proactively adjust classroom routines—saving lives and maintaining learning momentum."
            </div>
          </div>
        </div>
      </section>

      {/* 9. DIGITAL MONITORING & AI-ENABLED APPROACHES */}
      <section className="bg-[#10243A] text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A]">
              Data-Driven Innovation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Digital Monitoring & AI-Enabled Risk Mapping
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We leverage low-bandwidth mobile surveys, satellite imagery, and automated vulnerability scoring algorithms to help education departments prioritize which schools need emergency retrofitting before monsoon season arrives.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <Cpu className="w-4 h-4 text-[#D5A64A] shrink-0 mt-0.5" />
                <span>Automated multi-hazard vulnerability index (0 to 100 score)</span>
              </div>
              <div className="flex items-start gap-2">
                <Layers className="w-4 h-4 text-[#D5A64A] shrink-0 mt-0.5" />
                <span>Geospatial flood-basin overlay using open satellite radar data</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A] block">
              Open Technical Stack
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              The underlying risk formulas, spreadsheet calculators, and inspection schemas are version-controlled openly in the CRIT GitHub repository for public audit and enhancement.
            </p>
            <a
              href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D5A64A] hover:text-white transition-colors pt-1"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Inspect Source Files on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. TOOLKIT RESOURCES & DOCUMENTATION */}
      <section className="space-y-6">
        <SectionHeader
          kicker="Open Knowledge Assets"
          title="Toolkit Documentation & Downloadable Guides"
          description="Freely accessible technical materials published for educational practitioners and builders."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-[#087F8C]">
                DOC-CRIT-01
              </span>
              <h3 className="text-base font-bold font-heading text-[#10243A]">
                School Climate Vulnerability Assessment Protocol
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Step-by-step 30-metric audit sheet covering roofing, foundation elevation, drainage channels, and water purity.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#10243A]"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read on GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-[#087F8C]">
                DOC-CRIT-02
              </span>
              <h3 className="text-base font-bold font-heading text-[#10243A]">
                Passive Thermal Cooling & Roof Shading Blueprint
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Architectural diagrams for double-roof convective air ventilation, overhang sizing, and lime-wash recipes.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#10243A]"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read on GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-[#087F8C]">
                DOC-CRIT-03
              </span>
              <h3 className="text-base font-bold font-heading text-[#10243A]">
                SMC Community Preventative Maintenance Manual
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Guidance for school heads and parent councils to budget for seasonal roof checks and clean drain lines.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#10243A]"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12. GEOGRAPHIC RELEVANCE & IMPLEMENTATION METHODOLOGY */}
      <section className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-[#E2E8F0] space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Geographic Relevance in Pakistan</span>
            </span>
            <h2 className="text-2xl font-bold font-heading text-[#10243A]">
              Prioritizing High-Vulnerability Eco-Zones
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              CRIT focuses on regions experiencing severe climate shocks:
            </p>
            <ul className="space-y-2 text-xs text-[#172B3A]">
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <strong>Southern Sindh & Balochistan Plains:</strong> Chronic summer heatwaves exceeding 48°C combined with low water tables.
              </li>
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <strong>Indus River Basin & Floodplains:</strong> Seasonal monsoon inundation requiring elevated plinths and French drainage.
              </li>
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <strong>Northern Mountainous Districts:</strong> Flash hill torrents, mudslides, and seismic tremors requiring structural retrofits.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#438B62]">
              Phased Implementation Methodology
            </span>
            <h2 className="text-2xl font-bold font-heading text-[#10243A]">
              The 4-Stage Deployment Roadmap
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#172B3A]">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#087F8C] block mb-1">Stage 1: Participatory Vulnerability Audit</span>
                <span className="text-xs text-[#64748B]">Administering the 30-point scoring matrix alongside local teachers and SMC members.</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#087F8C] block mb-1">Stage 2: Contextual Retrofit Specification</span>
                <span className="text-xs text-[#64748B]">Formulating a costed bill of quantities (BOQ) prioritizing immediate life-safety and thermal protection.</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#087F8C] block mb-1">Stage 3: Community-Led Execution</span>
                <span className="text-xs text-[#64748B]">Supervising construction through local village artisans under engineering quality checks.</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#087F8C] block mb-1">Stage 4: Post-Occupancy Verification & Maintenance Handover</span>
                <span className="text-xs text-[#64748B]">Measuring indoor temperature reductions and establishing a community maintenance fund.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13 & 14. MONITORING, EVALUATION & SCALING STRATEGY */}
      <section className="space-y-6">
        <SectionHeader
          kicker="Sustainability & Growth"
          title="Monitoring, Verification & Long-Term Scaling"
          description="Ensuring data fidelity and building institutional pathways to scale across provincial education systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-lg font-bold font-heading text-[#10243A]">
              Rigorous Monitoring & Evaluation (MEAL)
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Every CRIT pilot deployment measures tangible baseline vs. post-retrofit metrics:
            </p>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              <li>• Continuous digital temperature logging inside classrooms vs. ambient external heat.</li>
              <li>• Student attendance rates during peak heatwave weeks (May - July).</li>
              <li>• Functioning days of clean water facilities without downtime.</li>
              <li>• SMC maintenance meeting frequency and emergency fund status.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-lg font-bold font-heading text-[#10243A]">
              Open-Access Scaling Strategy
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Rather than maintaining a proprietary monopoly, WUM Advisory aims to institutionalize CRIT standards directly into:
            </p>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              <li>• Provincial education department school construction building codes.</li>
              <li>• Multilateral donor post-disaster reconstruction financing tenders.</li>
              <li>• Non-profit school network infrastructure guidelines across South Asia.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 15. PROJECT ENQUIRIES & PARTNERSHIP OPPORTUNITIES */}
      <section className="bg-[#10243A] text-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center border border-slate-800 space-y-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A]">
            Engage With the CRIT Initiative
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading">
            Partner on a School Climate Resilience Pilot
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Are you an education foundation, donor agency, school network, or disaster management agency? We invite you to collaborate on baseline vulnerability assessments, architectural co-design, and pilot retrofitting.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact?subject=CRIT Project Pilot Collaboration"
              className="px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-[#10243A] bg-[#D5A64A] hover:bg-white transition-colors shadow-xs"
            >
              Initiate CRIT Collaboration
            </Link>

            <a
              href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-1.5"
            >
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
