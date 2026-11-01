import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Clock,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ExternalLink,
  Building2
} from 'lucide-react';
import wumLogo from '../assets/images/wum_logo.png';

const faqs = [
  {
    q: 'Is WUM Advisory Services an officially registered corporate entity?',
    a: 'Yes. WUM Advisory Services (SMC-Private) Limited is officially certified under section 16 of the Companies Act, 2017 (XIX of 2017) by the Securities and Exchange Commission of Pakistan (SECP). Full statutory certification records and registry details are maintained in the Statutory Compliance & Legal Identity section of our About page.',
  },
  {
    q: 'Who is the organizational lead for WUM Advisory Services?',
    a: 'WUM Advisory Services is led by Founder & Director Waqas Umer Malik. Detailed academic credentials, publications, and institutional profile can be explored in the Organizational Leadership section.',
  },
  {
    q: 'What types of organizations does WUM Advisory collaborate with?',
    a: 'We collaborate with provincial and federal government departments, international development donors, non-profit school networks, universities, and corporate CSR entities seeking evidence-based advisory, leadership development, or climate resilience frameworks.',
  },
  {
    q: 'How can our institution adopt or pilot the CRIT toolkit?',
    a: 'The Climate-Resilient School Infrastructure Toolkit (CRIT) is an open-source public good hosted on GitHub. If your school network or education foundation wishes to receive pro-bono or commissioned technical assistance for baseline vulnerability assessments and retrofitting design, you can submit an expression of interest via our partnership form.',
  },
  {
    q: 'Can WUM customize capacity-building programmes for our team?',
    a: 'Yes. All our leadership, educational transformation, and institutional governance modules can be customized into dedicated multi-week cohorts or intensive executive retreats tailored to your organization’s unique operational context.',
  },
];

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get('subject') || '';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const contactEmail = 'waqasanalyst@yahoo.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <span>Institutional Dialogue</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
          Contact WUM Advisory Services
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          Whether you are seeking strategic institutional advisory, capacity-building programs, research collaboration, or CRIT toolkit deployment, our leadership team is ready to assist.
        </p>
      </section>

      {/* Contact Details & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Cards & Corporate Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#10243A] text-white rounded-2xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <div className="bg-white/95 p-1.5 rounded-lg">
                <img
                  src={wumLogo}
                  alt="WUM Advisory Services Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A] block">
                  Institutional Contact
                </span>
                <span className="font-heading font-bold text-sm text-white">WUM Advisory Services</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">Location</strong>
                  <span>Pakistan (Global Cause Support)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">Direct Correspondence</strong>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-mono text-xs text-[#D5A64A] hover:underline"
                    >
                      {contactEmail}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1 text-slate-400 hover:text-white transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">Working Hours</strong>
                  <span>Monday - Friday: 09:00 - 18:00 PKT</span>
                  <span className="block text-xs text-slate-400">Response timeframe: 24 - 48 business hours</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D5A64A] block">
                Founder & Director
              </span>
              <p className="text-sm text-white font-medium">
                Waqas Umer Malik
              </p>
              <p className="text-xs text-slate-400">
                Institutional Advisory & Capacity-Building Lead
              </p>
            </div>
          </div>

          {/* Institutional Compliance Reference Card */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-[#E2E8F0] space-y-3 text-xs text-[#64748B]">
            <div className="flex items-center gap-2 text-[#10243A]">
              <Building2 className="w-4 h-4 text-[#087F8C]" />
              <span className="font-bold text-sm font-heading">Statutory & Governance Verification</span>
            </div>
            <p className="leading-relaxed">
              WUM Advisory Services (SMC-Private) Limited operates under statutory incorporation standards. Corporate certifications, legal identity documents, and verification portals are detailed in our official statutory compliance section.
            </p>
            <a
              href="/about#compliance"
              className="inline-flex items-center gap-1.5 font-semibold text-[#087F8C] hover:underline pt-1"
            >
              <ShieldCheck className="w-4 h-4 text-[#438B62]" />
              <span>View Statutory Compliance & Legal Identity on About Page</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xs space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
              Inquiry Submission
            </span>
            <h2 className="text-2xl font-bold font-heading text-[#10243A] mt-1">
              Send an Institutional Message
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Please complete all required fields below. Your message will be routed directly to Director Waqas Umer Malik and the advisory practice team.
            </p>
          </div>

          <ContactForm defaultSubject={subjectParam} />
        </div>
      </div>

      {/* Frequently Asked Questions (Accordion) */}
      <section className="space-y-6 pt-8 border-t border-[#E2E8F0]">
        <SectionHeader
          kicker="FAQ"
          title="Frequently Asked Questions"
          description="Common inquiries regarding our corporate certification, advisory practices, and toolkit adoption."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#10243A] hover:text-[#087F8C] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#087F8C] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
