import React from 'react';
import { Service } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div className="group bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Number & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-mono font-bold text-[#087F8C]">
            {service.number}
          </span>
          <span className="text-xs text-[#64748B] font-medium">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-heading text-[#10243A] group-hover:text-[#087F8C] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Highlighted outputs preview */}
        <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
          <p className="text-xs font-semibold text-[#10243A] uppercase tracking-wider">
            Key Deliverables
          </p>
          <ul className="space-y-1.5 text-xs text-[#64748B]">
            {service.potentialOutputs.slice(0, 2).map((output) => (
              <li key={output} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#438B62] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-6 pt-4">
        {onSelect ? (
          <button
            onClick={() => onSelect(service)}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-[#10243A] bg-slate-50 hover:bg-[#087F8C] hover:text-white transition-colors"
          >
            <span>View Full Service Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#087F8C]">
            <span>Explore Methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </div>
  );
};
