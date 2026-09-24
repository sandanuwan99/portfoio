import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { PhilosophySection } from '@/sections/PhilosophySection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ArchitectureSection } from '@/sections/ArchitectureSection';
import { CaseStudiesSection } from '@/sections/CaseStudiesSection';
import { EducationSection } from '@/sections/EducationSection';
import { ConnectSection } from '@/sections/ConnectSection';
import { ContactSection } from '@/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 flex flex-col font-sans selection:bg-sky-900/60 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Assembly */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Engineering Philosophy: How I Think About Software */}
        <PhilosophySection />

        {/* 4. Production Technical Skills */}
        <SkillsSection />

        {/* 5. Professional Experience Timeline */}
        <ExperienceSection />

        {/* 6. Featured Projects & Case Studies */}
        <ProjectsSection />

        {/* 7. Architecture: How I Build Software */}
        <ArchitectureSection />

        {/* 8. Engineering Case Studies (Investigation -> Remediation) */}
        <CaseStudiesSection />

        {/* 9. Education, Extracurricular & References */}
        <EducationSection />

        {/* 10. GitHub, Repositories & LinkedIn */}
        <ConnectSection />

        {/* 11. Contact Form & Backend Integration */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
