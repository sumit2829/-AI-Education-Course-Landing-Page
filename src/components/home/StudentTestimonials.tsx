"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Star, User, BookOpen, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface TestimonialItem {
  name: string;
  course: string;
  feedback: string;
  initials: string;
  avatarBg: string;
  batch: string;
}

export function StudentTestimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Liam Walker",
      course: "Python for Beginners",
      feedback: "The step-by-step coding exercises helped me understand loops, functions, and OOP without feeling overwhelmed. I built my first functional automation script within three weeks.",
      initials: "LW",
      avatarBg: "from-violet-500 to-indigo-600",
      batch: "Sample Cohort 2026",
    },
    {
      name: "Priya Sharma",
      course: "Generative AI and Prompt Engineering",
      feedback: "Learning systematic prompt patterns and how to build a working RAG pipeline with vector databases gave me practical skills I could immediately apply to my web apps.",
      initials: "PS",
      avatarBg: "from-blue-500 to-cyan-500",
      batch: "Sample Cohort 2026",
    },
    {
      name: "Daniel Kim",
      course: "Machine Learning with Python",
      feedback: "The hands-on focus on Scikit-Learn and PyTorch made complex concepts approachable. Training models on real datasets helped bridge the gap from math theory to code.",
      initials: "DK",
      avatarBg: "from-emerald-500 to-teal-600",
      batch: "Sample Cohort 2026",
    },
    {
      name: "Elena Rossi",
      course: "Full Stack Web Development",
      feedback: "Next.js App Router and PostgreSQL felt daunting at first, but the live clinics and weekly project milestones made full-stack application architecture crystal clear.",
      initials: "ER",
      avatarBg: "from-purple-500 to-pink-500",
      batch: "Sample Cohort 2026",
    },
    {
      name: "Marcus Chen",
      course: "Data Science and Analytics",
      feedback: "From writing multi-table SQL queries to building clean interactive dashboards in Power BI, this course provided direct, practical data analysis skills.",
      initials: "MC",
      avatarBg: "from-sky-500 to-blue-600",
      batch: "Sample Cohort 2026",
    },
    {
      name: "Sophie Martin",
      course: "Artificial Intelligence Fundamentals",
      feedback: "A structured, accessible introduction to search algorithms, neural logic, and AI ethics. The labs were practical and directly relevant to current technologies.",
      initials: "SM",
      avatarBg: "from-amber-500 to-orange-500",
      batch: "Sample Cohort 2026",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAFBFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-purple" />
            <span>Student Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Student <span className="gradient-text">Testimonials</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read sample feedback from learners who have participated in our hands-on AI and software engineering programmes.
          </p>

          <div className="pt-1">
            <span className="inline-block text-3xs font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Demo Testimonial Profiles • Representative Student Reviews
            </span>
          </div>
        </div>

        {/* 6 Responsive Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-violet-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Row: Demo Tag & Star Rating Representation */}
                <div className="flex items-center justify-between">
                  <span className="text-3xs font-extrabold uppercase tracking-wider text-violet-700 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-100">
                    Sample Review
                  </span>

                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Short Feedback */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{t.feedback}&rdquo;
                </p>

                {/* Course Name Tag */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-2xs font-semibold px-2.5 py-1 rounded-lg bg-slate-50 text-navy-800 border border-slate-200/70">
                    <BookOpen className="w-3 h-3 text-brand-purple" />
                    <span>{t.course}</span>
                  </span>
                </div>
              </div>

              {/* Student Details Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3.5">
                {/* Student Avatar / Initials */}
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                  {t.initials}
                </div>

                <div>
                  <h4 className="font-extrabold text-navy-950 text-sm group-hover:text-brand-purple transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-2xs text-slate-500 font-medium">
                    Learner • {t.batch}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
