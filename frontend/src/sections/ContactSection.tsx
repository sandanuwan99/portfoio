'use client';

import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '@/lib/data';
import { portfolioService } from '@/services/portfolioService';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Terminal } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    } else if (formData.message.trim().length > 2000) {
      errs.message = 'Message must not exceed 2000 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessResponse(null);
    setErrorMessage(null);

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await portfolioService.submitContact(formData);
      if (response.success) {
        setSuccessResponse(response.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setErrorMessage(response.message);
      }
    } catch {
      setErrorMessage('Network or server error. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              10 • Direct Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Start an Engineering Conversation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Whether you are discussing senior backend roles, microservices architecture, or consulting on enterprise systems, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Coordinates & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-surface p-6 sm:p-7 rounded-2xl border border-slate-800 bg-[#0b0f1d] shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400">Direct Contact Coordinates</span>
                <h3 className="text-xl font-bold text-slate-100">{DEVELOPER_PROFILE.name}</h3>
                <p className="text-xs font-mono text-slate-400">{DEVELOPER_PROFILE.role}</p>
              </div>

              <div className="space-y-4 text-xs font-mono text-slate-300">
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-sky-950/60 border border-sky-800/60 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">PRIMARY EMAIL</span>
                    <span>{DEVELOPER_PROFILE.email}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${DEVELOPER_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">PHONE / WHATSAPP</span>
                    <span>{DEVELOPER_PROFILE.phoneFormatted}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">BASE LOCATION</span>
                    <span>{DEVELOPER_PROFILE.location} • Open to Remote &amp; Relocation</span>
                  </div>
                </div>
              </div>

              {/* Backend Storage Note */}
              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>Backend Integration:</span>
                </div>
                <p>
                  Submissions are transmitted via REST endpoint <code className="text-sky-300 font-bold">POST /api/contact</code>, validated via Jakarta constraints, and persisted in Microsoft SQL Server.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-surface p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#090d18] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Status Messages */}
              {successResponse && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Message Safely Dispatched!</strong>
                    <span>{successResponse}</span>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Submission Incomplete</strong>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. John Doe / Engineering Recruiter"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-slate-100 text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-slate-100 text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Topic / Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Senior Software Engineer Role / Enterprise Systems"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Technical Inquiry / Message <span className="text-rose-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">
                    {formData.message.length} / 2000 chars
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Describe your project, engineering role, or technical requirements..."
                  className={`w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-100 text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors leading-relaxed ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-lg text-xs sm:text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-mono flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Validating &amp; Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Message via REST API</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
