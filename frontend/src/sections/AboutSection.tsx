'use client';

import React from 'react';
import { DEVELOPER_PROFILE } from '@/lib/data';
import { Server, Database, Code2, ShieldCheck, CheckCircle2, FileSpreadsheet, Building2, GraduationCap } from 'lucide-react';

export function AboutSection() {
  const focusAreas = [
    {
      title: 'Backend Engineering',
      desc: 'Robust microservice architectures, Spring Boot services, Spring Security authentication, and declarative transaction management.',
      icon: <Server className="w-4 h-4 text-sky-400" />,
    },
    {
      title: 'Database-Driven Systems',
      desc: 'Relational data modeling with Microsoft SQL Server, index tuning, execution plan analysis, and complex T-SQL stored procedures.',
      icon: <Database className="w-4 h-4 text-rose-400" />,
    },
    {
      title: 'Full-Stack Integration',
      desc: 'Type-safe frontend development using Next.js App Router, React, and TypeScript connected to standardized REST APIs.',
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'Financial & Insurance Software',
      desc: 'Domain modeling for underwriting, policy issuance, claims lifecycle, reinsurance verification, and financial accounting ledger reconciliation.',
      icon: <Building2 className="w-4 h-4 text-amber-400" />,
    },
    {
      title: 'Enterprise Document Pipelines',
      desc: 'High-volume server-side document compilation generating policy schedules (OpenPDF/iText) and analytical workbooks (Apache POI).',
      icon: <FileSpreadsheet className="w-4 h-4 text-indigo-400" />,
    },
    {
      title: 'Clean Architecture & Testing',
      desc: 'Strict separation of concerns, SOLID principles, comprehensive unit test suites (JUnit 5, Mockito), and Azure DevOps CI/CD automation.',
      icon: <ShieldCheck className="w-4 h-4 text-teal-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full">
              01 • Professional Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering Real-World Enterprise Software
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Bridging quantitative analytical thinking with robust backend systems engineering and modern web interfaces.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong className="text-slate-100">Software Engineer</strong> specializing in backend development, full-stack systems, and enterprise application architecture. Currently serving as an <strong className="text-sky-300">Associate Software Engineer at ICP Technologies</strong>, I design, optimize, and maintain production software across insurance, HRMS, and fintech domains.
            </p>

            <p>
              My engineering approach is grounded in a rigorous quantitative education from the <strong className="text-slate-100">University of Peradeniya</strong> (BSc Honours in Statistics and Operations Research). This mathematical foundation provides a distinct advantage in algorithm optimization, complexity analysis, database transaction safety, and handling complex financial calculations.
            </p>

            <p>
              In production environments, I focus on what truly matters: <strong className="text-slate-100">architectural maintainability, predictable REST API contracts, database query performance, and continuous deployment reliability</strong>. Rather than over-engineering or following ephemeral trends, I advocate for clean code, SOLID design principles, and comprehensive automated testing.
            </p>

            {/* Key Factual Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Production microservices deployed with Spring Boot &amp; MS SQL Server</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>60% manual operation reduction via Org Connect HRMS platform</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>High-volume PDF &amp; Excel pipelines with OpenPDF and Apache POI</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Azure DevOps multi-stage CI/CD pipelines &amp; Docker containerization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-between">
              <span>Core Engineering Specializations</span>
              <span className="text-sky-400">Production Experience</span>
            </div>

            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="glass-surface p-4 rounded-xl border border-slate-800 bg-[#0d1222]/70 hover:border-slate-700 transition-colors flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 mt-0.5">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-100 mb-1">{area.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
