'use client';

import React, { useEffect } from 'react';
import { Download, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/lib/data';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-[#0c101c] border border-slate-700/80 rounded-xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d17]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-950/60 border border-sky-800/60 rounded-lg text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-base font-semibold text-slate-100 flex items-center gap-2">
                {DEVELOPER_PROFILE.name} — Curriculum Vitae
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 hidden sm:inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Official CV
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Associate Software Engineer • Spring Boot &amp; Next.js Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={DEVELOPER_PROFILE.cvUrl}
              download="Janitha_Sandanuwan_CV.pdf"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-sm font-mono"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={DEVELOPER_PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              title="Open in new window"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close CV viewer"
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Viewer */}
        <div className="flex-1 bg-[#151926] relative">
          <iframe
            src={`${DEVELOPER_PROFILE.cvUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full border-0"
            title={`${DEVELOPER_PROFILE.name} CV`}
          />
        </div>

        {/* Modal Footer info */}
        <div className="px-6 py-2.5 border-t border-slate-800 bg-[#090d17] text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono">
            Direct Contact: <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="text-sky-400 hover:underline">{DEVELOPER_PROFILE.email}</a> • {DEVELOPER_PROFILE.phone}
          </span>
          <span className="text-slate-500 font-mono text-[11px]">
            Format: PDF (2 Pages) • Updated 2026
          </span>
        </div>
      </div>
    </div>
  );
}
