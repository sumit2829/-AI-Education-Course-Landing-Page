"use client";

import React from "react";
import { 
  GraduationCap, 
  Laptop, 
  Users, 
  Briefcase, 
  Cpu, 
  Trophy, 
  Check, 
  ArrowRight,
  Sparkles,
  Percent
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface StudentPerksProps {
  onOpenEnroll?: () => void;
}

export function StudentPerks({ onOpenEnroll }: StudentPerksProps) {
  const perks = [
    {
      icon: Percent,
      title: "40% Scholar Discount",
      description: "Any student with a valid .edu email or student ID gets an instant 40% tuition deduction on all courses. Recent graduates (within 12 months) are also eligible.",
      tag: "Verified Scholarship",
      color: "from-violet-500 to-indigo-600",
      bg: "bg-violet-50",
      iconColor: "text-brand-purple"
    },
    {
      icon: Cpu,
      title: "$300 Cloud GPU Stipend",
      description: "No expensive MacBook M3 Max or RTX 4090 required. We provide cloud GPU sandbox environments and AWS/Modal compute credits for all training & fine-tuning labs.",
      tag: "Free Hardware",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      iconColor: "text-brand-blue"
    },
    {
      icon: Briefcase,
      title: "Production GitHub Portfolio",
      description: "Graduate with 4 deployed, resume-ready AI applications hosted on Vercel and AWS. Stand out dramatically against applicants who only know LeetCode.",
      tag: "Career Ready",
      color: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Users,
      title: "FAANG 1-on-1 Code Audits",
      description: "Receive line-by-line pull request reviews from senior AI engineers at Meta, OpenAI, and Google alumni. Learn enterprise architectural standards.",
      tag: "Elite Mentorship",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Trophy,
      title: "Monthly $5K AI Hackathons",
      description: "Compete in cohort-exclusive hackathons judged by startup founders and VC partners. Top projects receive cash grants and direct seed introductions.",
      tag: "Cash Grants",
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: Laptop,
      title: "Flexible Weekend Cohorts",
      description: "Designed specifically around university classes and full-time day jobs. Live interactive labs are scheduled on Saturdays with 24/7 asynchronous Discord support.",
      tag: "Fits Your Schedule",
      color: "from-cyan-500 to-blue-600",
      bg: "bg-cyan-50",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <section id="student-perks" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <GraduationCap className="w-4 h-4 text-brand-purple" />
            <span>Built For Students & Young Professionals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Everything You Need to Break Into <br />
            <span className="gradient-text">Top-Tier AI Roles in 2026.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            University curricula lag 3-5 years behind the frontier of AI. We give you the cutting-edge stack, compute resources, and verified credentials to compete with experienced engineers.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-violet-200 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${perk.bg} ${perk.iconColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-2xs font-bold">
                      {perk.tag}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-brand-purple transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-2xs font-semibold text-slate-500">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Included with every student enrollment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for University Clubs */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-violet-300 bg-white/10 px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-amber-300" />
              University Club Sponsorships
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Are you part of an AI, CS, or Robotics club at your university?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              We provide free cohort licenses, hackathon challenge bounties, and guest lecture workshops to student clubs at accredited universities worldwide.
            </p>
          </div>

          <div className="shrink-0 flex gap-3">
            <Button
              onClick={onOpenEnroll}
              className="bg-white text-navy-950 hover:bg-slate-100 font-bold"
            >
              Apply as a Student Club
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
