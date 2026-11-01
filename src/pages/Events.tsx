import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { eventsData, EventItem } from '../data/events';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  X,
  ArrowRight,
  Filter
} from 'lucide-react';

const eventTypes = [
  'All Opportunities',
  'Leadership Workshop',
  'Training Programme',
  'Seminar',
  'Webinar',
  'Call for Collaboration',
] as const;

export const Events: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All Opportunities');
  const [activeEventModal, setActiveEventModal] = useState<EventItem | null>(null);

  const filteredEvents = eventsData.filter((ev) => {
    if (selectedType === 'All Opportunities') return true;
    return ev.type === selectedType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'Events & Opportunities' }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <span>Institutional Calendar</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
          Upcoming Events, Masterclasses & Collaboration Calls
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          Join our leadership seminars, climate resilience symposiums, and professional capacity-building workshops across Pakistan and online.
        </p>
      </section>

      {/* Type Filter Toolbar */}
      <section className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-fit">
        {eventTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              selectedType === type
                ? 'bg-white text-[#10243A] shadow-xs'
                : 'text-[#64748B] hover:text-[#10243A]'
            }`}
          >
            {type}
          </button>
        ))}
      </section>

      {/* Events List */}
      <section className="space-y-6">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="space-y-3 max-w-3xl">
              {/* Unboxed Metadata (Zero-pill compliance) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                <span className="font-semibold text-[#087F8C] uppercase tracking-wider text-[11px]">
                  {ev.type}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-medium text-[#10243A]">
                  <Calendar className="w-3.5 h-3.5 text-[#087F8C]" />
                  <span>{ev.date}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ev.location}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span
                  className={`font-semibold ${
                    ev.status === 'Registration Open' || ev.status === 'Call Open'
                      ? 'text-[#438B62]'
                      : 'text-[#D5A64A]'
                  }`}
                >
                  {ev.status}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-[#10243A] leading-snug">
                {ev.title}
              </h3>

              <p className="text-sm text-[#64748B] leading-relaxed">
                {ev.summary}
              </p>

              <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ev.time}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ev.format}</span>
                </span>
              </div>
            </div>

            {/* Event CTA */}
            <div className="w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 flex flex-col sm:flex-row lg:flex-col gap-2">
              <button
                onClick={() => setActiveEventModal(ev)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>View Details & Register</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Demonstration Content Disclosure (Honesty Compliance) */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#64748B] flex items-start gap-2.5">
        <div className="w-4 h-4 text-[#D5A64A] shrink-0 font-bold mt-0.5">ℹ</div>
        <p className="leading-relaxed">
          <strong>Calendar Notice:</strong> The listed dates and workshop itineraries represent upcoming WUM Advisory scheduled offerings and demonstration pilot cohorts for Q4 2026 / Q1 2027. Early registration allows participants to reserve seats prior to final institutional confirmation.
        </p>
      </div>

      {/* Event Details & RSVP Modal */}
      {activeEventModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveEventModal(null)}
        >
          <div
            className="bg-white text-[#10243A] max-w-xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEventModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Unboxed Metadata (Zero-pill compliance) */}
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <span className="font-semibold text-[#087F8C]">{activeEventModal.type}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#438B62]">{activeEventModal.status}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {activeEventModal.title}
            </h3>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-[#172B3A]">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-semibold">{activeEventModal.date} ({activeEventModal.time})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold">{activeEventModal.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Registration Deadline:</span>
                <span className="font-semibold text-[#D5A64A]">{activeEventModal.registrationDeadline}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                Description & Objectives
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeEventModal.summary}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
                Target Audience
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeEventModal.audience}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveEventModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <Link
                to={`/contact?subject=Event Registration: ${encodeURIComponent(activeEventModal.title)}`}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors"
              >
                Register / RSVP Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
