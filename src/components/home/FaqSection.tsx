"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/courses-data";
import { ChevronDown, HelpCircle, GraduationCap } from "lucide-react";

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const categories = ["All", "Students & Pricing", "Curriculum", "Careers & Placement"];

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <HelpCircle className="w-4 h-4 text-brand-purple" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Frequently Asked Questions. <br />
            <span className="gradient-text">Clear Answers for Students.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about cohorts, student scholarships, prerequisites, and job support.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-navy-950 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:text-navy-900 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-navy-950 text-sm sm:text-base"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 transition-transform ${isOpen ? "rotate-180 bg-violet-50 text-brand-purple" : "text-slate-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
