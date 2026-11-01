import React from 'react';
import { Publication } from '../data/publications';
import { Download, BookOpen, ChevronRight } from 'lucide-react';

interface PublicationCardProps {
  publication: Publication;
  onRead?: (publication: Publication) => void;
  onDownload?: (publication: Publication) => void;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({
  publication,
  onRead,
  onDownload,
}) => {
  return (
    <article className="bg-white rounded-xl p-6 sm:p-7 border border-[#E2E8F0] hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Unboxed Metadata (Zero-pill compliance) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] mb-3">
          <span className="font-semibold text-[#087F8C] uppercase tracking-wider text-[11px]">
            {publication.category}
          </span>
          <span aria-hidden="true">·</span>
          <span>{publication.date}</span>
          <span aria-hidden="true">·</span>
          <span>{publication.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-heading text-[#10243A] leading-snug">
          {publication.title}
        </h3>

        {/* Author */}
        <p className="mt-1 text-xs text-[#64748B] italic">
          By {publication.author}
        </p>

        {/* Summary */}
        <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
          {publication.summary}
        </p>

        {/* Key Insights Preview */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
          <p className="text-xs font-semibold text-[#10243A] uppercase tracking-wider">
            Key Findings & Recommendations
          </p>
          <ul className="space-y-1.5 text-xs text-[#64748B]">
            {publication.keyInsights.slice(0, 2).map((insight) => (
              <li key={insight} className="line-clamp-2">
                • {insight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={() => onRead?.(publication)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#10243A] transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Read Executive Summary</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onDownload?.(publication)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#10243A] bg-slate-100 hover:bg-[#087F8C] hover:text-white transition-colors"
          title="Download PDF Brief"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </button>
      </div>
    </article>
  );
};
