'use client';

import React, { useEffect, useRef, useState } from 'react';
import { DEVELOPER_PROFILE } from '@/lib/data';
import { ArrowDown, Download, Layers, ShieldCheck, Terminal, Cpu, Database } from 'lucide-react';
import { CvModal } from '@/components/CvModal';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Subtle animated architecture/network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Nodes representing microservices and databases
    const nodeCount = Math.min(35, Math.floor(width / 40));
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; tier: 'api' | 'service' | 'db' }[] = [];

    const tiers: ('api' | 'service' | 'db')[] = ['api', 'service', 'db'];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.5,
        tier: tiers[Math.floor(Math.random() * tiers.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.tier === 'db' ? 'rgba(244, 63, 94, 0.4)' : node.tier === 'service' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(56, 189, 248, 0.5)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
      />

      {/* Atmospheric Radial Gradients */}
      <div className="subtle-glow -top-40 -left-40 w-96 h-96 bg-sky-500/20" />
      <div className="subtle-glow top-1/2 -right-40 w-96 h-96 bg-blue-600/15" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Engineering Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-md backdrop-blur">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">
            Associate Software Engineer @ ICP Technologies
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-sky-400 font-medium">Enterprise Systems</span>
        </div>

        {/* Identity & Headline */}
        <div className="space-y-4">
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold">
            {DEVELOPER_PROFILE.name}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.08]">
            Software Engineer <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
            &ldquo;Building reliable, scalable software systems with <span className="text-slate-100 font-medium">Java</span>, <span className="text-slate-100 font-medium">Spring Boot</span>, <span className="text-slate-100 font-medium">Next.js</span>, and <span className="text-slate-100 font-medium">Microsoft SQL Server</span>.&rdquo;
          </p>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg text-sm font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all font-mono shadow-lg hover:shadow-sky-500/20 hover:-translate-y-0.5"
          >
            [ View Projects ]
          </a>

          <a
            href={DEVELOPER_PROFILE.cvUrl}
            download="Janitha_Sandanuwan_CV.pdf"
            className="px-6 py-3 rounded-lg text-sm font-semibold bg-slate-900 text-slate-100 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all font-mono inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>[ Download CV ]</span>
          </a>

          <button
            onClick={() => setCvModalOpen(true)}
            type="button"
            className="px-5 py-3 rounded-lg text-sm font-medium bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white transition-all font-mono"
          >
            Inspect CV in Browser
          </button>
        </div>

        {/* Core Technology Stack Pill Display */}
        <div className="pt-6 border-t border-slate-800/80 max-w-3xl mx-auto">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>Primary Enterprise Stack</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { name: 'Java', color: 'text-amber-400 border-amber-900/60 bg-amber-950/30' },
              { name: 'Spring Boot', color: 'text-emerald-400 border-emerald-900/60 bg-emerald-950/30' },
              { name: 'Next.js', color: 'text-slate-200 border-slate-700 bg-slate-900/80' },
              { name: 'TypeScript', color: 'text-sky-400 border-sky-900/60 bg-sky-950/30' },
              { name: 'MS SQL Server', color: 'text-rose-400 border-rose-900/60 bg-rose-950/30' },
              { name: 'Docker', color: 'text-blue-400 border-blue-900/60 bg-blue-950/30' },
              { name: 'Azure DevOps', color: 'text-indigo-400 border-indigo-900/60 bg-indigo-950/30' },
            ].map((tech) => (
              <span
                key={tech.name}
                className={`font-mono text-xs px-3 py-1 rounded-md border font-medium ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Live System Spec Console Preview */}
        <div className="max-w-2xl mx-auto bg-[#07090f]/90 border border-slate-800 rounded-xl p-3.5 text-left font-mono text-[11px] text-slate-400 shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-slate-400 mb-2">
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>system_status.log</span>
            </span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> ONLINE • 99.98%
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300">
            <div>
              <span className="text-slate-400 block text-[10px]">BACKEND</span>
              <span>Java 17 / Spring Boot 3</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">DATABASE</span>
              <span>MS SQL Server 2022</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">CLIENT</span>
              <span>Next.js 16 App Router</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">CI/CD</span>
              <span>Azure DevOps / Docker</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-slate-400 hover:text-sky-400 transition-colors p-2"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
}
