"use client";

import React from "react";
import { STUDENT_PROJECTS } from "@/lib/courses-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  Building2, 
  Sparkles, 
  Code2, 
  CheckCircle2 
} from "lucide-react";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAFBFC] border-b border-slate-200/80">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <FolderGit2 className="w-4 h-4 text-brand-purple" />
            <span>Alumni Portfolio Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Projects That Landed Our Students <br />
            <span className="gradient-text">FAANG & Startup AI Offers.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No toy calculator apps or basic chat tutorials. Our students build verified, open-source AI infrastructure that hiring managers inspect during technical interviews.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDENT_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-soft card-subtle-glow p-7 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Hired At Pill */}
                <div className="flex items-center justify-between">
                  <Badge variant="success" className="text-2xs font-bold flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    Hired at {proj.hiredAt}
                  </Badge>

                  <div className="flex items-center gap-1 text-2xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>{proj.stars} stars</span>
                  </div>
                </div>

                {/* Project Title & Description */}
                <div>
                  <h3 className="text-xl font-extrabold text-navy-950 group-hover:text-brand-purple transition-colors tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Architecture Specs */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-xs font-mono text-slate-700">
                  <span className="text-3xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Production Architecture
                  </span>
                  {proj.architecture}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-2xs font-semibold px-2.5 py-0.5 rounded-lg bg-violet-50 text-violet-700 border border-violet-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Student Bio & Links */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-navy-950 text-xs block">
                    {proj.studentName}
                  </span>
                  <span className="text-2xs text-slate-500">
                    {proj.studentRole}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-700 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
