"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CAREER_PATHS } from "@/lib/courses-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Compass, 
  ArrowRight, 
  Briefcase, 
  CheckCircle2, 
  Calendar, 
  DollarSign, 
  Code2, 
  Sparkles 
} from "lucide-react";

export function CareerRoadmap() {
  const [activePathId, setActivePathId] = useState(CAREER_PATHS[0].id);

  const activePath = CAREER_PATHS.find((p) => p.id === activePathId) || CAREER_PATHS[0];

  return (
    <section id="career-tracks" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <Compass className="w-4 h-4 text-brand-purple" />
            <span>Structured Career Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            From College Graduate to <br />
            <span className="gradient-text">High-Earning AI Engineer.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose your target engineering role. We provide the step-by-step roadmap, required tech stack, and portfolio benchmarks to get hired.
          </p>
        </div>

        {/* Pathway Role Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CAREER_PATHS.map((path) => (
            <button
              key={path.id}
              onClick={() => setActivePathId(path.id)}
              className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2.5 ${
                activePathId === path.id
                  ? "bg-navy-950 text-white shadow-md scale-102"
                  : "bg-slate-100 text-slate-600 hover:text-navy-950 hover:bg-slate-200/80"
              }`}
            >
              <Briefcase className="w-4 h-4 text-violet-400" />
              <span>{path.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Roadmap Details Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-10 shadow-elevated">
          {/* Top Info Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="electric">Target Role</Badge>
                <span className="text-xs text-slate-500 font-semibold">{activePath.duration}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
                {activePath.targetRole}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
                {activePath.description}
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs shrink-0 text-left lg:text-right">
              <span className="text-2xs uppercase tracking-wider font-bold text-slate-400 block">
                Average Starting Compensation
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">
                {activePath.avgStartingSalary}
              </span>
              <span className="text-2xs text-slate-500 block mt-0.5">Based on 2025-2026 alumni offers</span>
            </div>
          </div>

          {/* Core Skills Chips */}
          <div className="py-6 border-b border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-navy-900 mr-2 uppercase tracking-wider">
              Core Skills Mastered:
            </span>
            {activePath.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-semibold px-3 py-1 rounded-xl bg-white text-navy-800 border border-slate-200 shadow-2xs"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Timeline Phases */}
          <div className="pt-8 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Curriculum Progression Phases
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activePath.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-violet-300 transition-colors"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-2xs font-extrabold text-brand-purple uppercase tracking-wider">
                        {st.phase}
                      </span>
                      <span className="text-3xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                        {st.duration}
                      </span>
                    </div>

                    <h5 className="font-bold text-navy-950 text-sm">
                      {st.title}
                    </h5>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-2xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Graduation Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              Recommended Track: <strong className="text-navy-900 font-bold">{activePath.recommendedCourses.join(" + ")}</strong>
            </div>

            <Link href="/courses">
              <Button size="sm" className="group">
                <span>View Track Curriculum</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
