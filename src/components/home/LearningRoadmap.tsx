"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Binary, 
  Bot, 
  Laptop, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  GitBranch, 
  Layers, 
  Rocket,
  Compass
} from "lucide-react";

interface StageData {
  number: string;
  title: string;
  phaseTitle: string;
  description: string;
  icon: React.ElementType;
  technologies: {
    name: string;
    icon?: React.ElementType;
    highlight?: boolean;
  }[];
  milestone: string;
  practicalTasks: string[];
  themeColor: string;
  badgeBg: string;
}

export function LearningRoadmap() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: StageData[] = [
    {
      number: "01",
      title: "Learn Fundamentals",
      phaseTitle: "Core Logic & Data Foundations",
      description: "Build a rock-solid foundation in programming principles, relational data modeling, and mathematical concepts essential for software and AI.",
      icon: Terminal,
      technologies: [
        { name: "Python", highlight: true },
        { name: "SQL", highlight: true },
        { name: "Data Structures" },
        { name: "Algorithms" },
      ],
      milestone: "Write modular scripts & query multi-table databases",
      practicalTasks: [
        "Master Python syntax, object-oriented design, and file operations",
        "Design relational schemas and write multi-table SQL queries",
        "Implement essential searching and sorting algorithms from scratch"
      ],
      themeColor: "from-violet-600 to-indigo-600",
      badgeBg: "bg-violet-50 text-violet-700 border-violet-200",
    },
    {
      number: "02",
      title: "Practice with Tools",
      phaseTitle: "AI Frameworks & Workflows",
      description: "Experiment with modern AI engines, machine learning libraries, and prompt engineering frameworks through interactive sandbox exercises.",
      icon: Cpu,
      technologies: [
        { name: "ChatGPT", highlight: true },
        { name: "TensorFlow", highlight: true },
        { name: "Scikit-Learn" },
        { name: "Jupyter" },
      ],
      milestone: "Train neural models & orchestrate generative prompts",
      practicalTasks: [
        "Build prompt engineering chains and zero-shot reasoning flows with ChatGPT",
        "Train classification and regression models using TensorFlow and Scikit-Learn",
        "Visualize neural loss functions and validate predictive accuracy"
      ],
      themeColor: "from-blue-600 to-cyan-500",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      number: "03",
      title: "Build Real-World Projects",
      phaseTitle: "Full-Stack Software Architecture",
      description: "Synthesize your skills into deployed, end-to-end applications combining responsive frontends, backend APIs, and modern version control.",
      icon: Laptop,
      technologies: [
        { name: "Next.js", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "React" },
        { name: "FastAPI" },
      ],
      milestone: "Ship interactive web applications with cloud backends",
      practicalTasks: [
        "Architect modern App Router user interfaces with Next.js and Tailwind CSS",
        "Collaborate using Git branching, commits, and pull requests on GitHub",
        "Connect client applications to asynchronous AI backend endpoints"
      ],
      themeColor: "from-emerald-600 to-teal-500",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "04",
      title: "Showcase Skills & Prepare",
      phaseTitle: "Portfolio Defense & Career Launch",
      description: "Organize your production code repositories, record live project demonstrations, and practice technical problem-solving for tech roles.",
      icon: Rocket,
      technologies: [
        { name: "GitHub Portfolio", highlight: true },
        { name: "Live Demos" },
        { name: "System Design" },
        { name: "CI / CD" },
      ],
      milestone: "Public portfolio ready for interviews and technical audits",
      practicalTasks: [
        "Polish comprehensive READMEs and architecture diagrams on GitHub",
        "Demonstrate live deployed projects to peers and mentors",
        "Review real-world system design questions and technical interview patterns"
      ],
      themeColor: "from-purple-600 to-pink-600",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  return (
    <section id="learning-roadmap" className="py-20 lg:py-28 bg-[#FAFBFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[300px] bg-gradient-to-r from-violet-300/10 via-blue-300/10 to-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <Compass className="w-3.5 h-3.5 text-brand-purple" />
            <span>Structured Student Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Your 4-Stage <span className="gradient-text">Learning Roadmap</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From your very first line of code to shipping production-grade applications. Here is the step-by-step pathway you will follow at AI Skills Academy.
          </p>
        </div>

        {/* Visual Timeline (Desktop Horizontal Track & Mobile Vertical Track) */}
        <div className="relative">
          {/* Desktop Connecting Timeline Bar */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 rounded-full z-0 opacity-40" />

          {/* 4 Responsive Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
            {stages.map((st, idx) => {
              const Icon = st.icon;
              const isSelected = activeStage === idx;

              return (
                <motion.div
                  key={st.number}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={() => setActiveStage(idx)}
                  className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between shadow-soft hover:shadow-card-hover cursor-pointer relative group ${
                    isSelected
                      ? "border-brand-purple ring-2 ring-brand-purple/20 shadow-elevated"
                      : "border-slate-200/90 hover:border-violet-200"
                  }`}
                >
                  <div>
                    {/* Stage Number Node & Icon Bubble */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        {/* Number Indicator Node */}
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${st.themeColor} text-white font-black text-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                          {st.number}
                        </div>
                        {isSelected && (
                          <span className="absolute -inset-1 rounded-2xl border-2 border-brand-purple/40 animate-pulse pointer-events-none" />
                        )}
                      </div>

                      <div className={`w-10 h-10 rounded-xl ${st.badgeBg} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1 mb-3">
                      <span className="text-3xs font-extrabold uppercase tracking-wider text-slate-600 block">
                        Stage {st.number}
                      </span>
                      <h3 className="text-xl font-black text-navy-950 group-hover:text-brand-purple transition-colors tracking-tight">
                        {st.title}
                      </h3>
                      <p className="text-2xs font-semibold text-brand-purple">
                        {st.phaseTitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {st.description}
                    </p>

                    {/* Highlighted Technologies Covered */}
                    <div className="pt-2 mb-4">
                      <span className="text-3xs font-extrabold uppercase tracking-wider text-slate-600 block mb-2">
                        Core Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {st.technologies.map((tech) => (
                          <span
                            key={tech.name}
                            className={`text-2xs font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                              tech.highlight
                                ? "bg-violet-50 text-violet-900 border-violet-200 shadow-3xs"
                                : "bg-slate-50 text-slate-700 border-slate-200"
                            }`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Milestone Banner at Bottom of Card */}
                  <div className="pt-4 border-t border-slate-100 mt-2">
                    <span className="text-3xs font-extrabold uppercase tracking-wider text-emerald-600 block mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Stage Milestone:
                    </span>
                    <p className="text-2xs text-slate-700 font-semibold leading-snug">
                      {st.milestone}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Deep-Dive Showcase Card */}
        <motion.div 
          key={activeStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12 max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-soft"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 text-2xs font-extrabold">
                  Stage {stages[activeStage].number} Deep Dive
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {stages[activeStage].title}
                </span>
              </div>
              <h4 className="text-lg font-bold text-navy-950 mt-1">
                Practical Learning Activities &amp; Hands-On Checkpoints
              </h4>
            </div>

            <span className="text-2xs text-slate-600">
              Click any stage card above to inspect tasks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5">
            {stages[activeStage].practicalTasks.map((task, tIdx) => (
              <div 
                key={tIdx} 
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 text-xs text-slate-700 space-y-1.5"
              >
                <div className="flex items-center gap-1.5 font-bold text-navy-900">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-3xs flex items-center justify-center font-bold">
                    {tIdx + 1}
                  </span>
                  <span>Checkpoint {tIdx + 1}</span>
                </div>
                <p className="text-2xs text-slate-600 leading-relaxed">
                  {task}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
