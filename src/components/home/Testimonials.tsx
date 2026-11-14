"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/courses-data";
import { Badge } from "@/components/ui/Badge";
import { Star, Quote, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFC] border-b border-slate-200/80">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span>Alumni Career Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Hear from Students Who Made the Leap <br />
            <span className="gradient-text">Into Frontier AI Engineering.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From university classrooms and junior frontend gigs to architecting core LLM systems at tech leaders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-soft card-subtle-glow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Rating & Salary Bump Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Badge variant="success" className="text-3xs font-extrabold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {t.salaryIncrease}
                  </Badge>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Course Tag */}
                <div className="pt-1">
                  <span className="text-3xs font-semibold px-2 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60 block truncate">
                    Course: {t.courseTaken}
                  </span>
                </div>
              </div>

              {/* Student Profile Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-xs">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs font-semibold text-brand-purple">
                    {t.role}
                  </p>
                  <p className="text-2xs text-slate-400">
                    {t.graduatedFrom} • {t.cohort}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
