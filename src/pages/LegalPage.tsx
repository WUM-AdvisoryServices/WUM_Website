import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { legalDocumentsMap, LegalDocument } from '../data/legalDocuments';
import { Shield, FileText, CheckCircle2, ArrowRight, Printer, Share2, Mail, ExternalLink } from 'lucide-react';

interface LegalPageProps {
  docType?: 'privacy' | 'terms' | 'accessibility';
}

export const LegalPage: React.FC<LegalPageProps> = ({ docType: propDocType }) => {
  const { type } = useParams<{ type?: string }>();
  const activeType = propDocType || (type as 'privacy' | 'terms' | 'accessibility') || 'privacy';

  const doc: LegalDocument = legalDocumentsMap[activeType] || legalDocumentsMap.privacy;

  const handlePrint = () => {
    window.print();
  };

  const [copied, setCopied] = React.useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: 'Institutional Governance', to: '/about' },
          { label: doc.title.replace(/^[0-9.]+\s*/, '') },
        ]}
      />

      {/* Header Banner */}
      <header className="border-b border-slate-200 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <Shield className="w-4 h-4" />
          <span>Statutory & Digital Compliance</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#10243A] tracking-tight">
              {doc.title}
            </h1>
            <p className="mt-2 text-sm text-[#64748B]">
              Official institutional instrument · <span className="font-medium text-[#10243A]">Last updated: {doc.lastUpdated}</span>
            </p>
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#10243A] bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Document</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#10243A] bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
              title="Copy shareable link"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Tab switcher between the 3 official documents */}
        <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 print:hidden">
          <span className="text-xs text-slate-400 font-medium mr-2">Institutional Documents:</span>
          <Link
            to="/privacy"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeType === 'privacy'
                ? 'bg-[#10243A] text-white'
                : 'bg-slate-100 text-slate-600 hover:text-[#10243A] hover:bg-slate-200'
            }`}
          >
            1. Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeType === 'terms'
                ? 'bg-[#10243A] text-white'
                : 'bg-slate-100 text-slate-600 hover:text-[#10243A] hover:bg-slate-200'
            }`}
          >
            2. Terms & Conditions
          </Link>
          <Link
            to="/accessibility"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeType === 'accessibility'
                ? 'bg-[#10243A] text-white'
                : 'bg-slate-100 text-slate-600 hover:text-[#10243A] hover:bg-slate-200'
            }`}
          >
            3. Accessibility Statement
          </Link>
        </div>
      </header>

      {/* Main Legal Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Table of Contents sticky sidebar on desktop */}
        <aside className="lg:col-span-4 hidden lg:block sticky top-28 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 print:hidden">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#10243A]">
            Section Navigation
          </h2>
          <nav className="space-y-1 text-xs">
            {doc.sections.map((sec) => (
              <a
                key={sec.number}
                href={`#sec-${sec.number.replace('.', '-')}`}
                className="block py-1 text-slate-600 hover:text-[#087F8C] transition-colors truncate"
              >
                <span className="font-mono text-slate-400 mr-2">{sec.number}</span>
                {sec.title}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
            <p>
              Inquiries regarding governance or compliance may be directed to:
            </p>
            <a
              href="mailto:waqasanalyst@yahoo.com"
              className="font-mono text-[#087F8C] hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>waqasanalyst@yahoo.com</span>
            </a>
          </div>
        </aside>

        {/* Legal Text Column */}
        <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
          {/* Preamble Card */}
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-[#087F8C] border-t border-r border-b border-slate-200 text-sm text-[#10243A] leading-relaxed">
            <p className="font-medium italic">{doc.preamble}</p>
          </div>

          {/* Sections List */}
          <div className="divide-y divide-slate-100 space-y-8">
            {doc.sections.map((sec) => (
              <section
                key={sec.number}
                id={`sec-${sec.number.replace('.', '-')}`}
                className="pt-8 first:pt-0 space-y-3 scroll-mt-28"
              >
                <h2 className="text-lg font-bold font-heading text-[#10243A] flex items-center gap-2">
                  <span className="text-[#087F8C] font-mono font-semibold text-sm">
                    {sec.number}
                  </span>
                  <span>{sec.title}</span>
                </h2>

                {sec.content && (
                  <p className="text-sm text-[#172B3A] leading-relaxed">
                    {sec.content}
                  </p>
                )}

                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-2.5 pt-1 text-sm text-[#172B3A]">
                    {sec.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
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

          {/* Statutory Sign-off */}
          <div className="pt-8 border-t border-slate-200 text-xs text-[#64748B] space-y-2">
            <div className="flex items-center gap-2 text-[#10243A] font-bold">
              <FileText className="w-4 h-4 text-[#087F8C]" />
              <span>Official Corporate Instrument</span>
            </div>
            <p>
              Issued by WUM Advisory Services (SMC-Private) Limited under the Companies Act 2017. For official corporate registry details, consult the{' '}
              <Link to="/about#compliance" className="text-[#087F8C] font-semibold underline">
                Statutory Compliance & Legal Identity
              </Link>{' '}
              section on our About page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
