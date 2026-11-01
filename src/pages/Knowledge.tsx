import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { PublicationCard } from '../components/PublicationCard';
import { publicationsData, Publication } from '../data/publications';
import {
  Search,
  BookOpen,
  Download,
  X,
  FileText,
  Calendar,
  User,
  Clock,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const categories = [
  'All Publications',
  'Policy Briefs',
  'Working Papers',
  'Education & Leadership',
  'Sustainability & Climate',
  'Toolkits & Frameworks',
] as const;

export const Knowledge: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Publications');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeReadingModal, setActiveReadingModal] = useState<Publication | null>(null);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const filteredPublications = useMemo(() => {
    return publicationsData.filter((pub) => {
      const matchesCat =
        selectedCategory === 'All Publications' || pub.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Client-side text/PDF summary download
  const handleDownload = (pub: Publication) => {
    const textContent = `=================================================================
WUM ADVISORY SERVICES (SMC-PRIVATE) LIMITED
RESEARCH & KNOWLEDGE HUB
=================================================================
Title: ${pub.title}
Category: ${pub.category}
Date: ${pub.date}
Author: ${pub.author}
Estimated Read Time: ${pub.readTime}
-----------------------------------------------------------------
EXECUTIVE SUMMARY:
${pub.summary}

KEY FINDINGS & STRATEGIC INSIGHTS:
${pub.keyInsights.map((k) => '• ' + k).join('\n')}

FULL TEXT & ADVISORY NARRATIVE:
${pub.fullContent || 'Full working paper published in the WUM Institutional Repository.'}

-----------------------------------------------------------------
Citation: WUM Advisory Services (SMC-Private) Limited, ${pub.date}.
Website: https://wum-advisoryservices.github.io/#/knowledge
=================================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = pub.downloadFilename.replace('.pdf', '.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccessMessage(`Document "${pub.title.substring(0, 40)}..." downloaded successfully.`);
    setTimeout(() => setDownloadSuccessMessage(null), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'Knowledge Hub' }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <span>Institutional Research & Publications</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
          Evidence, Policy Briefs & Strategic Toolkits
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          Ground-truthed research bridging academic rigor and practical policymaking across education reform, climate resilience, and public sector governance.
        </p>
      </section>

      {/* Download Alert Toast */}
      {downloadSuccessMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{downloadSuccessMessage}</span>
          </div>
          <button
            onClick={() => setDownloadSuccessMessage(null)}
            className="text-emerald-700 hover:text-emerald-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search and Category Filter Toolbar */}
      <section className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="relative max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search working papers by topic, title, or author..."
            className="w-full px-4 py-2.5 pl-10 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills (Functional filter buttons) */}
        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#087F8C] text-white shadow-xs'
                  : 'bg-slate-50 text-[#64748B] hover:bg-slate-100 hover:text-[#10243A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
        <span>
          Showing <strong className="text-[#10243A]">{filteredPublications.length}</strong> publications
        </span>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Publications');
            }}
            className="text-[#087F8C] hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Publications Grid */}
      {filteredPublications.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold font-heading text-[#10243A]">
            No publications found
          </h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or selecting a different publication category.
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPublications.map((pub) => (
            <PublicationCard
              key={pub.id}
              publication={pub}
              onRead={(p) => setActiveReadingModal(p)}
              onDownload={(p) => handleDownload(p)}
            />
          ))}
        </section>
      )}

      {/* Publication Reading Modal */}
      {activeReadingModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveReadingModal(null)}
        >
          <div
            className="bg-white text-[#10243A] max-w-3xl w-full rounded-2xl p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveReadingModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Unboxed Metadata Header (Zero-pill compliance) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
              <span className="font-semibold text-[#087F8C] uppercase tracking-wider text-[11px]">
                {activeReadingModal.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{activeReadingModal.date}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{activeReadingModal.readTime}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A] leading-tight">
              {activeReadingModal.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
              <span>Authored by <strong className="text-[#10243A]">{activeReadingModal.author}</strong></span>
              <span aria-hidden="true">·</span>
              <span>WUM Advisory Services</span>
            </div>

            {/* Executive Summary */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                Executive Summary
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {activeReadingModal.summary}
              </p>
            </div>

            {/* Key Insights */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                Key Empirical Insights & Findings
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#172B3A]">
                {activeReadingModal.keyInsights.map((insight) => (
                  <li key={insight} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#438B62] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Body Content */}
            {activeReadingModal.fullContent && (
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                  Full Policy Analysis
                </h4>
                <div className="text-xs sm:text-sm text-[#172B3A] space-y-3 leading-relaxed whitespace-pre-line font-sans">
                  {activeReadingModal.fullContent}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Open knowledge resource. Free to distribute with attribution.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveReadingModal(null)}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleDownload(activeReadingModal)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
