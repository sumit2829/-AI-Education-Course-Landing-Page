"use client";

import React from "react";
import { Users, TrendingUp, DollarSign, Award, GraduationCap } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      icon: Users,
      value: "14,500+",
      label: "Graduated Engineers",
      sublabel: "Across 48 countries",
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      icon: TrendingUp,
      value: "94.8%",
      label: "Job Placement Rate",
      sublabel: "Hired within 120 days",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: DollarSign,
      value: "$128,500",
      label: "Average Starting Salary",
      sublabel: "+64% average comp jump",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: GraduationCap,
      value: "40% Off",
      label: "College Student Grant",
      sublabel: "Verified .edu scholarship",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-slate-50 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-navy-800">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
