import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ProgrammeCard } from '../components/ProgrammeCard';
import { programmesData, Programme } from '../data/programmes';
import { publicationsData } from '../data/publications';
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  GraduationCap,
  Users,
  Search,
  Leaf,
  Globe2,
  Cpu,
  Building,
  CheckCircle2,
  ExternalLink,
  X,
  FileText
} from 'lucide-react';
import wumLogo from '../assets/images/wum_logo.png';
import wumSustainableHero from '../assets/images/wum_sustainable_future.jpg';

const workAreas = [
  {
    title: 'Leadership & Management Development',
    desc: 'Adaptive executive coaching, systems thinking, and leadership pipelines for the public and civic sectors.',
    icon: Compass,
    link: '/programmes?category=Leadership Development',
  },
  {
    title: 'Education & Institutional Transformation',
    desc: 'Whole-school improvement, instructional leadership for headmasters, and pedagogical modernisation.',
    icon: GraduationCap,
    link: '/services#education-sector-development',
  },
  {
    title: 'Professional Learning & Capacity Building',
    desc: 'Evidence-informed training curricula, project cycle management, and competency diagnostic rubrics.',
    icon: Users,
    link: '/programmes?category=Education & Professional Learning',
  },
  {
    title: 'Strategic Research & Advisory',
    desc: 'Ground-truthed qualitative and quantitative studies, working papers, and actionable policy briefs.',
    icon: Search,
    link: '/knowledge',
  },
  {
    title: 'Sustainability & Climate Resilience',
    desc: 'Climate vulnerability assessments, heat-safe schooling blueprints, and eco-friendly infrastructure.',
    icon: Leaf,
    link: '/crit',
  },
  {
    title: 'Community Development & Empowerment',
    desc: 'Participatory rural appraisal, clean water (WASH) mobilization, and community-managed public assets.',
    icon: Globe2,
    link: '/services#sustainability-climate-resilience',
  },
  {
    title: 'Digital Transformation & AI-Enabled Solutions',
    desc: 'Pragmatic, low-bandwidth digital learning models and ethical AI literacy frameworks for educators.',
    icon: Cpu,
    link: '/services#digital-transformation-ai',
  },
  {
    title: 'Organizational Development & Governance',
    desc: 'Board governance charters, standard operating procedures, and donor-compliant internal controls.',
    icon: Building,
    link: '/services#institutional-strengthening-governance',
  },
];

const approachSteps = [
  {
    step: '01',
    title: 'Rigorous Research',
    desc: 'Diagnosing baseline socio-ecological and organizational realities before prescribing interventions.',
  },
  {
    step: '02',
    title: 'Contextual Strategy',
    desc: 'Co-designing actionable roadmaps and theories of change tailored to local constraints and institutional goals.',
  },
  {
    step: '03',
    title: 'Capacity Building',
    desc: 'Transferring practical competencies to institutional leaders, teachers, and field operational staff.',
  },
  {
    step: '04',
    title: 'Implementation Support',
    desc: 'Providing close technical stewardship to convert strategy into measurable on-the-ground progress.',
  },
  {
    step: '05',
    title: 'Monitoring & Learning',
    desc: 'Capturing real-time evidence to adapt course, evaluate fidelity, and satisfy rigorous compliance.',
  },
  {
    step: '06',
    title: 'Sustainable Impact',
    desc: 'Instituting permanent community and organizational systems that endure beyond project lifecycles.',
  },
];

export const Home: React.FC = () => {
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const featuredProgrammes = programmesData.slice(0, 3);
  const latestPublications = publicationsData.slice(0, 2);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
                <span>WUM Advisory Services (SMC-Private) Limited</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-[1.15] text-balance">
                Empowering People. Strengthening Institutions. Advancing Sustainable Development.
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                WUM Advisory Services delivers strategic advisory, leadership development, professional learning, and innovative development solutions that strengthen institutions and empower communities across Pakistan.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] transition-colors shadow-xs flex items-center gap-2"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/partnerships"
                  className="px-6 py-3.5 rounded-lg text-sm font-semibold text-[#10243A] bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Partner With Us
                </Link>
              </div>

              {/* Verified Institutional Core Pillars */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#64748B]">
                <div>
                  <span className="font-semibold text-[#10243A] block">Impact Orientation</span>
                  <span>Global Cause Support</span>
                </div>
                <div>
                  <span className="font-semibold text-[#10243A] block">Impact Foundation</span>
                  <span>Climate Resilience (CRIT)</span>
                </div>
                <div>
                  <span className="font-semibold text-[#10243A] block">Leadership</span>
                  <span>Founder & Director Waqas Umer Malik</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset with Separate Document Caption at Top */}
            <div className="lg:col-span-5 relative space-y-4">
              {/* Document Caption at Top (Border-free) */}
              <div
                className="bg-gradient-to-br from-[#F4FAF6] via-[#FAFDFB] to-[#FDF8EE] rounded-2xl p-4 sm:p-5 shadow-sm space-y-2.5 text-center"
                dir="rtl"
              >
                <p className="text-base sm:text-lg font-extrabold text-[#10243A] leading-relaxed">
                  دانائی کے بیج بوتے ہوئے، ایک پائیدار مستقبل کا حصول✨🌱
                </p>
                <div className="pt-1.5 space-y-1">
                  <p className="text-lg sm:text-xl font-bold text-[#A16207] font-serif tracking-wide">
                    إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                    بیشک ! اللہ ہی دانے اور گٹھلیوں کو پھاڑنے والا ہے۔
                  </p>
                </div>
              </div>

              {/* Complete Image - Fully Retained, Center-Aligned, Border-free */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm bg-white p-2 sm:p-3 flex items-center justify-center">
                <img
                  src={wumSustainableHero}
                  alt="دانائی کے بیج بوتے ہوئے، ایک پائیدار مستقبل کا حصول - WUM Advisory Services"
                  className="w-full max-w-[420px] h-auto max-h-[460px] object-contain rounded-xl mx-auto"
                />
              </div>

              {/* Verified Institutional Credential Bar - Border-free */}
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={wumLogo}
                    alt="WUM Logo"
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#10243A]">WUM Advisory Services (SMC-Pvt) Ltd</p>
                    <p className="text-[11px] text-[#64748B]">Empowering through sustainable practices</p>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-[#087F8C]">
                  Global Cause Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ORGANIZATIONAL INTRODUCTION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10243A] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A]">
                Our Institutional Orientation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-balance">
                Connecting Strategic Foresight with Grassroots Delivery
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Founded and directed by <strong>Waqas Umer Malik</strong>, WUM Advisory Services (SMC-Private) Limited was established to bridge the gap between well-designed development policies and actionable institutional capacity on the ground.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We operate across education reform, executive leadership, professional training, climate adaptation, and community empowerment—partnering with government institutions, donor organizations, schools, universities, and civil society.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
              <div className="space-y-1">
                <span className="text-xs text-[#D5A64A] font-semibold uppercase tracking-wider block">
                  Vision
                </span>
                <p className="text-base font-semibold text-white">
                  Empowering through sustainable practices
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div className="space-y-1">
                <span className="text-xs text-[#D5A64A] font-semibold uppercase tracking-wider block">
                  Mission
                </span>
                <p className="text-base font-semibold text-white">
                  Leading capacity-building initiatives that contribute to development
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D5A64A] hover:text-white transition-colors"
                >
                  <span>Read full institutional profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AREAS OF WORK (INTERACTIVE GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Our Areas of Work"
          title="Multidisciplinary Advisory & Capacity Building"
          description="Explore our core domains connecting institutional governance, pedagogical quality, and community climate resilience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.title}
                to={area.link}
                className="group bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#087F8C]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#087F8C]/10 text-[#087F8C] flex items-center justify-center mb-5 group-hover:bg-[#087F8C] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 block mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold font-heading text-[#10243A] group-hover:text-[#087F8C] transition-colors leading-snug">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {area.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 flex items-center gap-1.5 text-xs font-semibold text-[#087F8C]">
                  <span>Explore domain</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED PROJECT: CRIT SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#10243A] via-[#10243A] to-[#0A1A2A] text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual on the Left */}
            <div className="lg:col-span-6 relative aspect-16/9 lg:aspect-auto lg:h-full min-h-[340px]">
              <img
                src="/src/assets/images/crit_school_resilience_1793517579943.jpg"
                alt="Climate Resilient School Infrastructure Toolkit (CRIT) architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[#438B62] text-white">
                  Featured Open Initiative
                </span>
              </div>
            </div>

            {/* Description & CTAs on the Right */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A]">
                Flagship Infrastructure Initiative
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
                Climate-Resilient School Infrastructure Toolkit (CRIT)
              </h2>

              <p className="text-sm text-[#D5A64A] font-medium">
                Empowering Communities to Build Safer, Sustainable Schools for Children
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                With escalating flood hazards and extreme summer heatwaves across Pakistan, CRIT delivers an open-access engineering, retrofitting, and community governance framework to climate-proof schools and prevent educational disruption.
              </p>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0 mt-0.5" />
                  <span>Passive cooling, elevated flood-proof plinths, and solar water systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0 mt-0.5" />
                  <span>School Management Committee (SMC) preventative maintenance toolkits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0 mt-0.5" />
                  <span>Public open-source repository on GitHub with architectural guidelines</span>
                </li>
              </ul>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/crit"
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold text-[#10243A] bg-[#D5A64A] hover:bg-white transition-colors"
                >
                  Explore the CRIT Toolkit
                </Link>

                <a
                  href="https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5 border border-white/20"
                >
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROGRAMMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <SectionHeader
            kicker="Executive & Professional Learning"
            title="Featured Capacity-Building Programmes"
            description="High-impact learning journeys for educational leaders, public managers, and sustainability practitioners."
            className="mb-0"
          />
          <Link
            to="/programmes"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#10243A] transition-colors shrink-0"
          >
            <span>View All Programmes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProgrammes.map((prog) => (
            <ProgrammeCard
              key={prog.id}
              programme={prog}
              onEnquire={(p) => setSelectedProgramme(p)}
              onViewDetails={(p) => setSelectedProgramme(p)}
            />
          ))}
        </div>
      </section>

      {/* 6. OUR APPROACH (SEQUENTIAL PROCESS) */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            kicker="Institutional Methodology"
            title="How We Deliver Sustainable Impact"
            description="Our six-stage delivery model ensures initiatives are grounded in empirical evidence, owned by local stakeholders, and sustained over time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {approachSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs hover:border-[#087F8C]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-[#087F8C]">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phase {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#10243A]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KNOWLEDGE & STRATEGIC INSIGHTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <SectionHeader
            kicker="Research & Insights"
            title="Evidence-Informed Development Knowledge"
            description="Policy briefs, working papers, and technical guides authored by WUM Advisory analysts."
            className="mb-0"
          />
          <Link
            to="/knowledge"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#10243A] transition-colors shrink-0"
          >
            <span>Explore Knowledge Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] flex flex-col justify-between hover:border-[#087F8C]/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2">
                  <span className="font-semibold text-[#087F8C]">{pub.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pub.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pub.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#10243A]">
                  {pub.title}
                </h3>
                <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                  {pub.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/knowledge"
                  className="text-xs font-semibold text-[#087F8C] hover:text-[#10243A] transition-colors flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Full Brief</span>
                </Link>
                <span className="text-xs text-slate-400">By {pub.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PARTNERSHIP CALL & CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#10243A] rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white border border-slate-800 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A]">
              Collaborate With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
              Let's Build Sustainable Solutions Together.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We welcome collaboration with government departments, international donors, school systems, universities, corporations, and civil society organizations.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/partnerships"
                className="px-7 py-3 rounded-lg text-xs sm:text-sm font-semibold text-[#10243A] bg-[#D5A64A] hover:bg-white transition-colors"
              >
                Initiate a Partnership Dialogue
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
              >
                General Inquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Modal Details */}
      {selectedProgramme && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setSelectedProgramme(null)}
        >
          <div
            className="bg-white text-[#10243A] max-w-2xl w-full rounded-xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProgramme(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <span className="font-semibold text-[#087F8C]">{selectedProgramme.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProgramme.duration}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#438B62]">{selectedProgramme.status}</span>
              </div>

              <h3 className="text-2xl font-bold font-heading">
                {selectedProgramme.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProgramme.description}
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                  Learning Objectives
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedProgramme.learningObjectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                  Intended Participants
                </h4>
                <ul className="space-y-1 text-xs text-slate-600">
                  {selectedProgramme.intendedParticipants.map((part) => (
                    <li key={part}>• {part}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProgramme(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Close
                </button>
                <Link
                  to={`/contact?subject=Enquiry: ${encodeURIComponent(selectedProgramme.title)}`}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors"
                >
                  Submit Registration Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
