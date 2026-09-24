'use client';

import React from 'react';
import { EDUCATION_LIST, EXTRACURRICULAR_ACTIVITIES, REFERENCES } from '@/lib/data';
import { GraduationCap, Award, BookOpen, UserCheck, Calendar, MapPin, Mail, Phone } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              08 • Academic &amp; Professional Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Academic Background &amp; Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            A strong quantitative foundation in statistics and algorithms from the University of Peradeniya, combined with specialized industrial software engineering and DevOps training.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="glass-surface p-6 sm:p-7 rounded-2xl border border-slate-800 bg-[#0b0f1e]/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-sky-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-1">{edu.degree}</h3>
                <h4 className="text-sm font-medium text-slate-300 mb-4">{edu.institution}</h4>

                {edu.gradeOrRank && (
                  <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-800/50">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{edu.gradeOrRank}</span>
                  </div>
                )}

                {edu.coursework && (
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Key Coursework &amp; Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {edu.highlights && (
                <div className="pt-3 border-t border-slate-800/80">
                  {edu.highlights.map((h, i) => (
                    <p key={i} className="text-xs text-slate-400 leading-relaxed">
                      • {h}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extracurricular Leadership & Community */}
        <div className="pt-10 border-t border-slate-800">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <span>Leadership &amp; Extracurricular Contributions</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Active engagement in academic societies, technical workshop coordination, and university athletics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXTRACURRICULAR_ACTIVITIES.map((item, idx) => (
              <div
                key={idx}
                className="glass-surface p-4 rounded-xl border border-slate-800/80 bg-slate-900/40"
              >
                <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-sky-400">
                  <span className="font-semibold">{item.year}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-100 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional & Academic References */}
        <div className="pt-10 border-t border-slate-800">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-400" />
              <span>Professional &amp; Academic References</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Referees available for verification of academic standing and enterprise software engineering performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REFERENCES.map((ref, idx) => (
              <div
                key={idx}
                className="glass-surface p-6 rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-slate-100">{ref.name}</h4>
                  <p className="text-xs text-sky-400 font-mono mt-0.5">{ref.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{ref.department}</p>
                  <p className="text-xs text-slate-400">{ref.institution}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>{ref.email}</span>
                  </a>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{ref.phone}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
