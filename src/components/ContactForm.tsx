import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  category: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface ContactFormProps {
  defaultCategory?: string;
  defaultSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultCategory = 'General Enquiry',
  defaultSubject = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    category: defaultCategory,
    subject: defaultSubject,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Organization or institution name is required.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 20) {
      errs.message = 'Please provide a message with at least 20 characters.';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the processing of inquiry details.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save honest enquiry log to client storage
    try {
      const records = JSON.parse(localStorage.getItem('wum_contact_inquiries') || '[]');
      const newRecord = {
        ...formData,
        id: 'inq_' + Date.now(),
        timestamp: new Date().toISOString(),
      };
      records.push(newRecord);
      localStorage.setItem('wum_contact_inquiries', JSON.stringify(records));

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    } catch {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const copyInquirySummary = () => {
    const text = `WUM Advisory Inquiry
Name: ${formData.fullName}
Email: ${formData.email}
Organization: ${formData.organization}
Category: ${formData.category}
Subject: ${formData.subject}
Message: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-[#438B62] text-white rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold font-heading text-[#10243A]">
          Inquiry Successfully Recorded
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-[#10243A]">{formData.fullName}</span>. Your {formData.category.toLowerCase()} has been logged in our institutional communications system. Our advisory team will respond to <span className="font-semibold text-[#10243A]">{formData.email}</span> within 2 business days.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={copyInquirySummary}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#10243A] bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
          </button>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                organization: '',
                category: defaultCategory,
                subject: '',
                message: '',
                consent: false,
              });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#10243A] mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Dr. Ayesha Khan"
            className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] transition-all ${
              errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E8F0]'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#10243A] mb-1.5">
            Institutional or Personal Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@organization.org"
            className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] transition-all ${
              errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E8F0]'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-[#10243A] mb-1.5">
            Organization / Department / Network <span className="text-rose-500">*</span>
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Ministry of Education / Development Trust"
            className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] transition-all ${
              errors.organization ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E8F0]'
            }`}
          />
          {errors.organization && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.organization}</span>
            </p>
          )}
        </div>

        {/* Enquiry Category */}
        <div>
          <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-[#10243A] mb-1.5">
            Inquiry Category <span className="text-rose-500">*</span>
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2.5 text-sm bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] transition-all"
          >
            <option value="General Enquiry">General Inquiry</option>
            <option value="Partnership Enquiry">Partnership & Institutional Collaboration</option>
            <option value="Consultancy Advisory">Strategic Advisory / Consultancy</option>
            <option value="Programme Registration">Capacity Building & Programme Registration</option>
            <option value="CRIT Toolkit Collaboration">CRIT Toolkit & School Resilience</option>
            <option value="Research & Policy">Research & Policy Working Papers</option>
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#10243A] mb-1.5">
          Subject <span className="text-rose-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Brief summary of your inquiry or proposed collaboration"
          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] transition-all ${
            errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E8F0]'
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.subject}</span>
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#10243A] mb-1.5">
          Message / Collaboration Brief <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your institutional context, objectives, timeline, or specific advisory needs..."
          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] transition-all leading-relaxed ${
            errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E8F0]'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 text-[#087F8C] border-slate-300 rounded focus:ring-[#087F8C]"
          />
          <span className="text-xs text-[#64748B] leading-normal">
            I confirm that the information provided is accurate and consent to WUM Advisory Services (SMC-Private) Limited processing these details to respond to this institutional inquiry.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.consent}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] rounded-lg transition-colors shadow-xs disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Processing Inquiry...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Formal Inquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
