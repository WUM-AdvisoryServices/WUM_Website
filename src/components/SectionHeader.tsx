import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  centered = false,
  dark = false,
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {kicker && (
        <div
          className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
            dark ? 'text-[#D5A64A]' : 'text-[#087F8C]'
          }`}
        >
          {kicker}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance leading-tight ${
          dark ? 'text-white' : 'text-[#10243A]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-[#64748B]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
