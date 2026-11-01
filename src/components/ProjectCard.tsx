import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { ArrowRight, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featuredHighlight?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featuredHighlight = false }) => {
  return (
    <div
      className={`group bg-white rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-200 ${
        featuredHighlight
          ? 'border-[#087F8C]/60 shadow-md ring-1 ring-[#087F8C]/20'
          : 'border-[#E2E8F0] hover:border-[#087F8C]/40 hover:shadow-md'
      }`}
    >
      <div>
        {/* Project Visual / Image with Zero-Broken-Image Fallback */}
        <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback gracefully to styled CSS container
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/30 to-transparent" />

          {/* Location & Status overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 text-xs">
            <span className="flex items-center gap-1.5 text-white/90 bg-[#10243A]/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium border border-white/10">
              <MapPin className="w-3 h-3 text-[#D5A64A]" />
              <span className="truncate max-w-[180px]">{project.geographicFocus}</span>
            </span>

            <span
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${
                project.status === 'Ongoing'
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                  : project.status === 'In Formulation'
                  ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700'
              }`}
            >
              {project.status}
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-xs font-semibold uppercase tracking-wider text-[#D5A64A]">
            {project.category}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-heading text-[#10243A] group-hover:text-[#087F8C] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-1 text-xs text-[#087F8C] font-medium">
            {project.subtitle}
          </p>

          <p className="mt-3 text-sm text-[#64748B] leading-relaxed line-clamp-3">
            {project.overview}
          </p>

          {/* Key outputs preview */}
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
            <p className="text-xs font-semibold text-[#10243A] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#438B62]" />
              <span>Verified Focus & Objectives</span>
            </p>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              {project.objectives.slice(0, 2).map((obj) => (
                <li key={obj} className="line-clamp-2">
                  • {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-0 flex items-center gap-3">
        {project.id === 'crit-toolkit' ? (
          <Link
            to="/crit"
            className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#087F8C] hover:bg-[#10243A] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>Explore CRIT Toolkit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <Link
            to={`/projects`}
            className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#10243A] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View Project Brief</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-[#10243A] bg-slate-100 hover:bg-[#10243A] hover:text-white rounded-lg transition-colors"
            title="View Open-Source Repository on GitHub"
            aria-label="View on GitHub"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
