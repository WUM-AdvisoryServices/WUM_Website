import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const categories = [
  'All Initiatives',
  'Climate Resilience & Infrastructure',
  'Education & Pedagogy',
  'Institutional Governance',
  'Community Development',
] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Initiatives');

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedCategory === 'All Initiatives') return true;
    return proj.category === selectedCategory;
  });

  const featuredProject = projectsData.find((p) => p.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'Projects & Initiatives' }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
          <span>Project Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#10243A] tracking-tight leading-tight">
          Development Initiatives, Toolkits & Scalable Models
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          Grounded interventions designed to strengthen school infrastructure resilience, upgrade pedagogical capacity, and bolster civic governance across Pakistan.
        </p>
      </section>

      {/* Featured Project Spotlight: CRIT */}
      {featuredProject && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D5A64A]">
            <ShieldCheck className="w-4 h-4 text-[#D5A64A]" />
            <span>Featured Open-Source Initiative</span>
          </div>
          <ProjectCard project={featuredProject} featuredHighlight={true} />
        </section>
      )}

      {/* Category Filter Tabs */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-[#10243A] shadow-xs'
                  : 'text-[#64748B] hover:text-[#10243A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Expansion & Proposal Co-Creation Section */}
      <section className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-[#E2E8F0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F8C]">
              Consortium & Field Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#10243A]">
              Co-Design or Implement Development Initiatives With WUM
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We collaborate with international donors, provincial governments, and local trusts to co-author grant proposals, conduct baseline diagnostics, and manage pilot deployments with rigorous data accountability.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/partnerships"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>Explore Partnership Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
