"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  FolderGit2, 
  GraduationCap, 
  CalendarClock, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
  iconBg: string;
  iconColor: string;
  borderHover: string;
}

export function WhyChooseUs() {
  const benefits: BenefitItem[] = [
    {
      icon: Code2,
      title: "Hands-on Practical Learning",
      description: "Learn by writing real code in interactive labs. Every module emphasizes applied coding exercises and sandbox experimentation over passive video watching.",
      tag: "Applied Practice",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      borderHover: "hover:border-violet-300",
    },
    {
      icon: Cpu,
      title: "Industry-Relevant Curriculum",
      description: "Course contents are continuously updated to reflect modern tools and emerging frameworks used by technology teams in Python, Data Science, and AI.",
      tag: "Modern Tools",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      borderHover: "hover:border-blue-300",
    },
    {
      icon: FolderGit2,
      title: "Real-World Projects",
      description: "Build functional software applications and end-to-end pipelines that demonstrate practical problem-solving to prospective employers and collaborators.",
      tag: "Portfolio Building",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderHover: "hover:border-emerald-300",
    },
    {
      icon: GraduationCap,
      title: "Expert-Led Learning",
      description: "Gain insights from experienced software practitioners and technology specialists who share practical architectural patterns and engineering best practices.",
      tag: "Mentorship",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      borderHover: "hover:border-amber-300",
    },
    {
      icon: CalendarClock,
      title: "Flexible Learning Options",
      description: "Balance your studies alongside college classes or jobs with structured weekend batches, self-paced modules, and 24/7 access to course materials.",
      tag: "Self-Paced & Live",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderHover: "hover:border-cyan-300",
    },
    {
      icon: TrendingUp,
      title: "Career-Focused Skill Development",
      description: "Bridge the gap between theoretical concepts and in-demand digital competencies, preparing you to contribute effectively on modern engineering teams.",
      tag: "Job Readiness",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      borderHover: "hover:border-purple-300",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
            <span>Why AI Skills Academy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Designed for Real Understanding. <br />
            <span className="gradient-text">Engineered for Practical Growth.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We focus on what matters most for aspiring developers, data professionals, and students: practical proficiency, modern tooling, and authentic project experience.
          </p>
        </div>

        {/* 6 Responsive Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group ${benefit.borderHover}`}
              >
                <div>
                  {/* Top Bar: Icon Bubble & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 w-12 h-12 rounded-2xl ${benefit.iconBg} ${benefit.iconColor} flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-3xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-500 border border-slate-200 shadow-2xs">
                      {benefit.tag}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-950 group-hover:text-brand-purple transition-colors tracking-tight mb-3">
                    {benefit.title}
                  </h3>

                  {/* Short Explanation */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Highlight Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-2xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Integrated across all Academy programmes</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-50 via-white to-violet-50/50 border border-slate-200/90 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-navy-950">
              Ready to begin your journey in AI and digital technologies?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Browse our course catalog or get in touch with our team for batch advisement.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link href="/courses">
              <Button size="sm" className="font-bold text-xs px-5 shadow-xs">
                <span>Explore All Courses</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
