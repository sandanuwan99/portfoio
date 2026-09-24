'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DEVELOPER_PROFILE } from '@/lib/data';
import { Download, Menu, X, FileText, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CvModal } from './CvModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-[#080b13]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
            : 'py-4 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 text-slate-100 hover:text-sky-400 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 font-mono text-sm font-bold group-hover:border-sky-500 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight block text-slate-100 group-hover:text-sky-300">
                JANITHA SANDANUWAN
              </span>
              <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1 rounded-full hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={DEVELOPER_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Quick CV Viewer */}
            <button
              onClick={() => setCvModalOpen(true)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors font-mono"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Inspect CV</span>
            </button>

            {/* Download CV */}
            <a
              href={DEVELOPER_PROFILE.cvUrl}
              download="Janitha_Sandanuwan_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors font-mono shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setCvModalOpen(true)}
              type="button"
              aria-label="View CV"
              className="px-2.5 py-1 text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 rounded-lg"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-[#080b13]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
            <nav className="grid grid-cols-2 gap-1 text-xs font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-800/80 hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
              <a
                href={DEVELOPER_PROFILE.cvUrl}
                download="Janitha_Sandanuwan_CV.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-950 bg-sky-400 rounded-lg font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCvModalOpen(true);
                }}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded-lg font-mono"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Preview CV</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2 text-slate-400 text-xs">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={DEVELOPER_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sky-400"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      {/* CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
