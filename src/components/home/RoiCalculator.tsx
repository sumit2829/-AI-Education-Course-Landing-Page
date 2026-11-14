"use client";

import React, { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface RoiCalculatorProps {
  onOpenEnroll?: () => void;
}

export function RoiCalculator({ onOpenEnroll }: RoiCalculatorProps) {
  const [currentSalary, setCurrentSalary] = useState<number>(65000);
  const [targetRole, setTargetRole] = useState<{ name: string; avgSalary: number }>({
    name: "AI Systems Engineer",
    avgSalary: 145000,
  });

  const tuitionCost = 359; // Student rate
  const annualGain = Math.max(0, targetRole.avgSalary - currentSalary);
  const weeklyGain = annualGain / 52;
  const daysToRecoup = weeklyGain > 0 ? Math.ceil((tuitionCost / weeklyGain) * 7) : 1;
  const threeYearGain = annualGain * 3;

  const roles = [
    { name: "AI Systems Engineer", avgSalary: 145000 },
    { name: "Autonomous Agents Architect", avgSalary: 155000 },
    { name: "Full-Stack AI Developer", avgSalary: 132000 },
    { name: "MLOps Platform Engineer", avgSalary: 150000 },
    { name: "AI Governance & Safety Analyst", avgSalary: 120000 },
  ];

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>Career Investment & ROI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Calculate Your Return on Tuition. <br />
            <span className="gradient-text">See the Concrete Career Math.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See how quickly verified production AI skills recoup your tuition investment.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-elevated p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Controls */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-navy-900 block mb-2">
                  1. Your Current Annual Compensation or Status:
                </label>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-2xl font-black text-navy-950">
                    {formatCurrency(currentSalary)}
                  </span>
                  <span className="text-xs text-slate-500">
                    {currentSalary === 0 ? "College Student ($0)" : currentSalary < 70000 ? "Junior / Fresh Grad" : "Mid-level Dev"}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120000"
                  step="5000"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
                <div className="flex justify-between text-2xs text-slate-400 mt-1 font-mono">
                  <span>$0 (Student)</span>
                  <span>$60,000</span>
                  <span>$120,000</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-navy-900 block mb-2.5">
                  2. Select Your Target 2026 AI Role:
                </label>
                <div className="space-y-2">
                  {roles.map((r) => (
                    <button
                      key={r.name}
                      onClick={() => setTargetRole(r)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                        targetRole.name === r.name
                          ? "bg-white border-brand-purple text-navy-950 shadow-xs ring-1 ring-brand-purple/20"
                          : "bg-white/60 border-slate-200 text-slate-600 hover:bg-white"
                      }`}
                    >
                      <span>{r.name}</span>
                      <span className="font-mono text-emerald-600 font-bold">{formatCurrency(r.avgSalary)}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output ROI Metrics Card */}
            <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="electric">Estimated ROI Impact</Badge>
                  <span className="text-2xs text-slate-400 font-mono">Student Rate: {formatCurrency(tuitionCost)}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-medium">
                      Projected Annual Compensation Bump
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 block">
                      +{formatCurrency(annualGain)} / yr
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-navy-800">
                    <div>
                      <span className="text-2xs uppercase tracking-wider text-slate-400 block">
                        Time to Recoup Tuition
                      </span>
                      <span className="text-2xl font-bold text-white mt-1 block">
                        ~{daysToRecoup} Days
                      </span>
                      <span className="text-3xs text-slate-400">At standard 40hr work week</span>
                    </div>

                    <div>
                      <span className="text-2xs uppercase tracking-wider text-slate-400 block">
                        3-Year Career Earnings Delta
                      </span>
                      <span className="text-2xl font-bold text-emerald-300 mt-1 block">
                        +{formatCurrency(threeYearGain)}
                      </span>
                      <span className="text-3xs text-slate-400">Cumulative comp growth</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-navy-800">
                <Button 
                  onClick={onOpenEnroll} 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold group"
                >
                  <span>Enroll with Student Grant ({formatCurrency(tuitionCost)})</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-3xs text-slate-400 text-center mt-2.5 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% money-back guarantee within the first 14 days of cohort start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
