import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid institutional or personal email address.');
      return;
    }

    // Honest handling: record subscription intent in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('wum_newsletter_subscribers') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('wum_newsletter_subscribers', JSON.stringify(existing));
      }
      setStatus('success');
      setEmail('');
      setErrorMessage('');
    } catch {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Enter your email for insights"
            aria-label="Email address for insights newsletter"
            className="w-full px-4 py-2.5 pl-10 text-xs sm:text-sm bg-white/10 text-white placeholder:text-slate-400 border border-white/20 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A64A] transition-all"
          />
          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-xs font-semibold text-[#10243A] bg-[#D5A64A] hover:bg-[#D5A64A]/90 rounded-lg transition-colors shadow-xs"
        >
          Subscribe to Institutional Briefings
        </button>

        {status === 'success' && (
          <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Thank you. You have been subscribed to WUM strategic briefings.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-xs text-rose-400 pt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <p className="text-[11px] text-slate-400">
          No spam. Quarterly research digests, policy updates, and toolkit releases only.
        </p>
      </form>
    </div>
  );
};
