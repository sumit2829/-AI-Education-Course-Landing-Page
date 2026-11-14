"use client";

import React from "react";
import { motion } from "framer-motion";
import { CourseCategory } from "@/types";
import { 
  BrainCircuit, 
  Cpu, 
  Terminal, 
  Database, 
  Sparkles, 
  Globe, 
  Cloud, 
  TrendingUp,
  ArrowRight,
  BookOpen,
  Check
} from "lucide-react";

export interface CategoryInfo {
  id: CourseCategory;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  borderHover: string;
  badge: string;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: "Artificial Intelligence",
    title: "Artificial Intelligence",
    description: "Design cognitive agents, autonomous swarms, and enterprise AI safety guardrails.",
    icon: BrainCircuit,
    color: "text-violet-600",
    bg: "bg-violet-50",
    borderHover: "hover:border-violet-300",
    badge: "2 Tracks",
  },
  {
    id: "Machine Learning",
    title: "Machine Learning",
    description: "Master PyTorch, computer vision with YOLOv11, and multimodal foundation models.",
    icon: Cpu,
    color: "text-blue-600",
    bg: "bg-blue-50",
    borderHover: "hover:border-blue-300",
    badge: "1 Track",
  },
  {
    id: "Python Programming",
    title: "Python Programming",
    description: "Write clean, async, and high-performance Python tailored for AI backend runtimes.",
    icon: Terminal,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    borderHover: "hover:border-indigo-300",
    badge: "1 Track",
  },
  {
    id: "Data Science",
    title: "Data Science",
    description: "Transform raw data into predictive intelligence with Polars, DuckDB, and statistical ML.",
    icon: Database,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderHover: "hover:border-emerald-300",
    badge: "1 Track",
  },
  {
    id: "Generative AI",
    title: "Generative AI",
    description: "Architect enterprise RAG pipelines, fine-tune open-weights models, and deploy vLLM.",
    icon: Sparkles,
    color: "text-purple-600",
    bg: "bg-purple-50",
    borderHover: "hover:border-purple-300",
    badge: "1 Track",
  },
  {
    id: "Web Development",
    title: "Web Development",
    description: "Build full-stack AI SaaS apps with Next.js 15, Vercel AI SDK, and streaming generative UI.",
    icon: Globe,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    borderHover: "hover:border-cyan-300",
    badge: "1 Track",
  },
  {
    id: "Cloud Computing",
    title: "Cloud Computing",
    description: "Deploy scalable GPU clusters on Kubernetes, Triton inference, and automated MLOps.",
    icon: Cloud,
    color: "text-sky-600",
    bg: "bg-sky-50",
    borderHover: "hover:border-sky-300",
    badge: "1 Track",
  },
  {
    id: "Digital Marketing",
    title: "Digital Marketing",
    description: "Automate growth funnels, programmatic SEO, and multi-channel marketing campaigns with AI.",
    icon: TrendingUp,
    color: "text-amber-600",
    bg: "bg-amber-50",
    borderHover: "hover:border-amber-300",
    badge: "1 Track",
  },
];

interface CourseCategoriesProps {
  selectedCategory: CourseCategory;
  onSelectCategory: (category: CourseCategory) => void;
}

export function CourseCategories({
  selectedCategory,
  onSelectCategory,
}: CourseCategoriesProps) {
  const handleCategoryClick = (category: CourseCategory) => {
    onSelectCategory(category);
    // Smooth scroll down to course section so user immediately sees the filtered results
    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="categories" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <BookOpen className="w-3.5 h-3.5 text-brand-purple" />
            <span>Curriculum Domains</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Explore Course <span className="gradient-text">Categories</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select a learning track below to explore hands-on projects, industry technologies, and career-ready curricula.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group cursor-pointer rounded-3xl p-6 bg-slate-50/60 border transition-all duration-300 flex flex-col justify-between shadow-soft hover:shadow-card-hover ${
                  isSelected
                    ? "bg-white border-brand-purple ring-2 ring-brand-purple/20 shadow-elevated"
                    : `hover:bg-white border-slate-200/80 ${cat.borderHover}`
                }`}
              >
                <div>
                  {/* Card Header: Icon & Track Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <span className={`text-2xs font-extrabold px-2.5 py-1 rounded-full border transition-colors ${
                      isSelected
                        ? "bg-violet-600 text-white border-violet-600"
                        : "bg-white text-slate-500 border-slate-200"
                    }`}>
                      {isSelected ? "Active Filter" : cat.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-navy-950 group-hover:text-brand-purple transition-colors tracking-tight mb-2">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Courses Link */}
                <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold">
                  <span className={`flex items-center gap-1.5 transition-colors ${
                    isSelected ? "text-brand-purple" : "text-navy-900 group-hover:text-brand-purple"
                  }`}>
                    Explore Courses
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clear Filter Prompt if one is selected */}
        {selectedCategory !== "All" && (
          <div className="mt-8 text-center animate-in fade-in">
            <button
              onClick={() => onSelectCategory("All")}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 px-4 py-2 rounded-full border border-slate-300 transition-colors shadow-2xs"
            >
              <span>Currently filtering by: <strong>{selectedCategory}</strong></span>
              <span className="text-violet-600 font-extrabold ml-1">× Reset to All Categories</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
