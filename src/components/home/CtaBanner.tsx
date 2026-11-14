"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu,
  Compass,
  Headphones,
  CalendarCheck
} from "lucide-react";

interface CtaBannerProps {
  onOpenEnroll?: () => void;
  onOpenContact?: () => void;
}

export function CtaBanner({ onOpenEnroll, onOpenContact }: CtaBannerProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFC] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden border border-slate-700/60">
          
          {/* Ambient Glowing Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-violet-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Admissions Open • 2026 Cohorts</span>
            </div>

            {/* Exact Required Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15]">
              Your Future Starts with the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                Right Skills.
              </span>
            </h2>

            {/* Exact Required Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
              Take the next step towards building your AI and digital skills.
            </p>

            {/* Action Buttons: Register Now, Explore Programmes, Talk to an Advisor */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              
              {/* Button 1: Register Now */}
              <Button
                size="lg"
                onClick={onOpenEnroll}
                className="w-full sm:w-auto bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 hover:from-violet-500 hover:to-blue-400 text-white font-black shadow-lg shadow-violet-500/30 group px-7 py-3 text-sm"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Button 2: Explore Programmes */}
              <Link href="/courses" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:text-white font-bold px-6 py-3 text-sm flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-cyan-300" />
                  <span>Explore Programmes</span>
                </Button>
              </Link>

              {/* Button 3: Talk to an Advisor */}
              <Button
                size="lg"
                variant="subtle"
                onClick={onOpenContact}
                className="w-full sm:w-auto bg-violet-950/80 hover:bg-violet-900/90 text-violet-200 border border-violet-700/50 hover:text-white font-bold px-6 py-3 text-sm flex items-center justify-center gap-2"
              >
                <Headphones className="w-4 h-4 text-violet-300" />
                <span>Talk to an Advisor</span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-300 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                Next Cohort Begins April 2026
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                14-Day 100% Satisfaction Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-violet-400 shrink-0" />
                Hands-on Lab Environments Included
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
