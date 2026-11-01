import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ProgrammeCard } from '../components/ProgrammeCard';
import { programmesData, Programme } from '../data/programmes';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  CheckCircle2,
  X,
  ArrowRight,
  BookOpen,
  Calendar,
  Users
} from 'lucide-react';

const categories = [
  'All Categories',
  'Leadership Development',
  'Education & Professional Learning',
  'Organizational Development',
  'Sustainability & Development',
] as const;

export const Programmes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Categories';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Upcoming Batch Intake' | 'Under Development / Proposed'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProgrammeModal, setActiveProgrammeModal] = useState<Programme | null>(null);

  const filteredProgrammes = useMemo(() => {
    return programmesData.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || p.category === selectedCategory;
      const matchesStatus =
        statusFilter === 'All' || p.status === statusFilter;
      const matchesSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, statusFilter, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All Categories') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'Programmes' }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <span>Executive & Practitioner Academies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
          Capacity-Building Programmes & Learning Journeys
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          Interactive, evidence-informed leadership cohorts and professional masterclasses designed to equip development practitioners, school heads, and institutional executives.
        </p>
      </section>

      {/* Search & Filtering Toolbar */}
      <section className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programmes by keyword, topic, or pedagogy..."
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

          {/* Status Filter */}
          <div className="md:col-span-6 flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs text-[#64748B] font-medium shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Status:</span>
            </span>
            {(['All', 'Upcoming Batch Intake', 'Under Development / Proposed'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  statusFilter === st
                    ? 'bg-[#10243A] text-white'
                    : 'bg-slate-100 text-[#64748B] hover:text-[#10243A]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills (Functional filter buttons) */}
        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
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

      {/* Results Count & Status Indicator */}
      <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
        <span>
          Showing <strong className="text-[#10243A]">{filteredProgrammes.length}</strong> capacity-building programmes
        </span>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Categories');
              setStatusFilter('All');
            }}
            className="text-[#087F8C] hover:underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Programmes Directory Grid */}
      {filteredProgrammes.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold font-heading text-[#10243A]">
            No matching programmes found
          </h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Try adjusting your search terms or clearing the selected category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Categories');
              setStatusFilter('All');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#10243A] rounded-lg hover:bg-[#087F8C] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((programme) => (
            <ProgrammeCard
              key={programme.id}
              programme={programme}
              onEnquire={(p) => setActiveProgrammeModal(p)}
              onViewDetails={(p) => setActiveProgrammeModal(p)}
            />
          ))}
        </section>
      )}

      {/* Institutional Cohort Customization CTA */}
      <section className="bg-[#10243A] text-white rounded-2xl p-8 sm:p-12 border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D5A64A]">
              Dedicated Institutional Cohorts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Commission a Tailored Cohort for Your Organization
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We customize any of our leadership or teacher development curricula for specific school chains, university faculties, government departments, or non-profit field teams.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/contact?subject=Commission Tailored Programme Cohort"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#10243A] bg-[#D5A64A] hover:bg-white rounded-lg transition-colors shadow-xs"
            >
              Discuss Customized Cohort
            </Link>
          </div>
        </div>
      </section>

      {/* Programme Detail & Syllabus Modal */}
      {activeProgrammeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveProgrammeModal(null)}
        >
          <div
            className="bg-white text-[#10243A] max-w-2xl w-full rounded-2xl p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProgrammeModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Unboxed Metadata (anti-pill) */}
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <span className="font-semibold text-[#087F8C]">
                {activeProgrammeModal.category}
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeProgrammeModal.duration}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#438B62]">
                {activeProgrammeModal.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A]">
              {activeProgrammeModal.title}
            </h3>

            <p className="text-sm text-[#172B3A] leading-relaxed">
              {activeProgrammeModal.description}
            </p>

            {/* Delivery Methods & Intended Audience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-100">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#087F8C]" />
                  <span>Delivery Format</span>
                </h4>
                <ul className="space-y-1 text-xs text-[#64748B]">
                  {activeProgrammeModal.deliveryMethods.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D5A64A]" />
                  <span>Target Audience</span>
                </h4>
                <ul className="space-y-1 text-xs text-[#64748B]">
                  {activeProgrammeModal.intendedParticipants.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                Key Learning Objectives
              </h4>
              <ul className="space-y-2 text-xs text-[#64748B]">
                {activeProgrammeModal.learningObjectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#438B62] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                Expected Participant Outcomes
              </h4>
              <ul className="space-y-1.5 text-xs text-[#64748B]">
                {activeProgrammeModal.learningOutcomes.map((out) => (
                  <li key={out} className="flex items-start gap-2">
                    <span className="text-[#087F8C] font-bold">•</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setActiveProgrammeModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <Link
                to={`/contact?subject=Registration Inquiry: ${encodeURIComponent(activeProgrammeModal.title)}`}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Submit Enrollment Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
