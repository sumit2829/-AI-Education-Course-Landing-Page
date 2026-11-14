"use client";

import React from "react";
import Link from "next/link";
import { CAREER_PATHS, HIRING_PARTNERS } from "@/lib/courses-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useModals } from "@/components/layout/AppProviders";
import { 
  Compass, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Award,
  Terminal,
  Cpu
} from "lucide-react";

export default function CareerTracksPage() {
  const { openEnrollModal } = useModals();

  return (
    <div className="bg-[#FAFBFC] min-h-screen py-12 lg:py-16">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <Compass className="w-3.5 h-3.5 text-brand-purple" />
            <span>2026 Career Blueprints</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Role-Based Pathways & <br />
            <span className="gradient-text">Salary Benchmarks.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The tech industry is experiencing a generational shift from general software engineering to specialized AI systems engineering. Here are the 4 highest-demand career blueprints for college graduates and ambitious developers.
          </p>
        </div>

        {/* Career Paths List */}
        <div className="space-y-12">
          {CAREER_PATHS.map((path, idx) => (
            <div
              key={path.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6 sm:p-10 space-y-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-violet-100 text-brand-purple font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <Badge variant="blue">{path.duration} Track</Badge>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
                    {path.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shrink-0 text-left lg:text-right">
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 block">
                    Starting Compensation
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 block">
                    {path.avgStartingSalary}
                  </span>
                  <span className="text-3xs text-slate-500">2026 Campus &amp; Junior Dev Benchmark</span>
                </div>
              </div>

              {/* Required Skills Grid */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                  Production Competencies Required:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 text-navy-800 text-xs font-semibold border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step progression */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {path.steps.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2"
                  >
                    <div className="flex justify-between items-center text-3xs font-mono text-slate-400">
                      <span className="font-bold text-violet-700">{st.phase}</span>
                      <span>{st.duration}</span>
                    </div>
                    <h4 className="font-bold text-navy-950 text-xs sm:text-sm">
                      {st.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600">
                  Associated Courses: <strong className="text-navy-900">{path.recommendedCourses.join(", ")}</strong>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <Link href="/courses">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      View Syllabus
                    </Button>
                  </Link>
                  <Button 
                    size="sm" 
                    onClick={() => openEnrollModal()}
                    className="w-full sm:w-auto group"
                  >
                    <span>Apply for this Track</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Bar */}
        <div className="mt-20 p-10 rounded-3xl bg-white border border-slate-200 shadow-soft text-center space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Our Graduates are Interviewing &amp; Working With
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-600 font-extrabold text-lg">
            {HIRING_PARTNERS.map((p) => (
              <span key={p.name} className="hover:text-brand-purple transition-colors">
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
