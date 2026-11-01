import React from 'react';
import { Programme } from '../data/programmes';
import { ArrowRight, Clock, BookOpen, Check } from 'lucide-react';

interface ProgrammeCardProps {
  programme: Programme;
  onEnquire?: (programme: Programme) => void;
  onViewDetails?: (programme: Programme) => void;
}

export const ProgrammeCard: React.FC<ProgrammeCardProps> = ({
  programme,
  onEnquire,
  onViewDetails,
}) => {
  const isOffered = programme.status === 'Upcoming Batch Intake';

  return (
    <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#E2E8F0] hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Unboxed Metadata Header (Anti-pill compliance) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] mb-3">
          <span className="font-medium text-[#087F8C]">{programme.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{programme.duration}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span
            className={`font-semibold ${
              isOffered ? 'text-[#438B62]' : 'text-[#D5A64A]'
            }`}
          >
            {programme.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-heading text-[#10243A] leading-snug">
          {programme.title}
        </h3>

        {/* Short description */}
        <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
          {programme.shortDescription}
        </p>

        {/* Key learning objective preview */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
          <p className="text-xs font-semibold text-[#10243A] uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#087F8C]" />
            <span>Core Focus</span>
          </p>
          <ul className="space-y-1.5 text-xs text-[#64748B]">
            {programme.learningObjectives.slice(0, 2).map((obj) => (
              <li key={obj} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                <span className="line-clamp-2">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
        {onViewDetails && (
          <button
            onClick={() => onViewDetails(programme)}
            className="flex-1 py-2 px-3 text-xs font-medium text-[#10243A] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
          >
            View Syllabus
          </button>
        )}
        <button
          onClick={() => (onEnquire ? onEnquire(programme) : onViewDetails?.(programme))}
          className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>Enquire</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
