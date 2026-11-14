"use client";

import React, { useState } from "react";
import { SAMPLE_COURSES } from "@/lib/courses-data";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useModals } from "@/components/layout/AppProviders";
import { 
  Check, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Percent, 
  CreditCard, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";

export default function PricingPage() {
  const { openEnrollModal } = useModals();
  const [billingCycle, setBillingCycle] = useState<"upfront" | "installments">("upfront");
  const [verifiedCode, setVerifiedCode] = useState("STUDENT40");
  const [codeApplied, setCodeApplied] = useState(true);

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifiedCode.toUpperCase().includes("STUDENT") || verifiedCode.toUpperCase().includes("AI")) {
      setCodeApplied(true);
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      } catch (err) {}
    }
  };

  const plans = [
    {
      name: "Single Course Intensive",
      subtitle: "Focus deeply on one specialized AI engineering domain.",
      originalPrice: 899,
      standardPrice: 499,
      studentPrice: 299,
      popular: false,
      features: [
        "Full 8-10 weeks of live interactive curriculum",
        "1 Flagship capstone portfolio project",
        "$150 Cloud GPU sandbox credits",
        "1-on-1 code review by senior AI engineer",
        "Lifetime access to recordings & codebase repos",
        "Official Certificate of Completion",
        "14-day 100% money-back guarantee",
      ],
      cta: "Enroll in a Course",
    },
    {
      name: "AI Engineer Fellowship",
      subtitle: "Complete dual-track career accelerator with full hiring support.",
      originalPrice: 1699,
      standardPrice: 999,
      studentPrice: 599,
      popular: true,
      features: [
        "2 Complete intensive courses (GenAI + Agents or MLOps)",
        "3 Flagship production portfolio capstones",
        "$350 Cloud GPU sandbox & AWS compute credits",
        "Weekly 1-on-1 mentor audits from FAANG engineers",
        "Dedicated Technical Resume & LinkedIn rewrite",
        "2 Live mock AI system design interviews",
        "Direct introductions to 200+ AI hiring partners",
        "Priority access to monthly $5,000 hackathon grants",
      ],
      cta: "Apply for Fellowship",
    },
    {
      name: "Enterprise & Club Sponsorship",
      subtitle: "For university AI clubs, labs, or startup engineering teams.",
      originalPrice: 2999,
      standardPrice: 1899,
      studentPrice: 1199,
      popular: false,
      features: [
        "Bulk cohort access for up to 5 students or team members",
        "Dedicated private Slack/Discord channel with faculty",
        "Custom capstone project tailored to team goals",
        "$1,000 pooled GPU compute infrastructure stipend",
        "Guest lecture workshop from ex-DeepMind researcher",
        "Co-branded certificate and university partner page",
      ],
      cta: "Contact Club Lead",
    },
  ];

  return (
    <div className="bg-[#FAFBFC] min-h-screen py-12 lg:py-20">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <Percent className="w-3.5 h-3.5 text-brand-purple" />
            <span>Transparent Student-Friendly Tuition</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            World-Class AI Education. <br />
            <span className="gradient-text">Affordable for Students.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We believe tuition should never gate talented students from frontier technology. Verified students receive an automatic 40% scholar grant.
          </p>

          {/* Student code promo banner */}
          <div className="p-3 bg-violet-50/80 border border-violet-200/80 rounded-2xl max-w-md mx-auto flex items-center justify-between text-xs text-violet-900 font-medium">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-purple shrink-0" />
              <span>Use student code: <strong>STUDENT40</strong></span>
            </div>
            <span className="text-2xs bg-violet-600 text-white px-2 py-0.5 rounded-full font-bold">
              40% Off Active
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const price = codeApplied ? plan.studentPrice : plan.standardPrice;
            const installmentPrice = Math.round(price / 3);

            return (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl p-8 border flex flex-col justify-between shadow-soft transition-all duration-300 ${
                  plan.popular
                    ? "border-brand-purple ring-2 ring-brand-purple/20 shadow-elevated"
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="electric" className="px-3.5 py-1 text-2xs font-bold uppercase tracking-wider shadow-md">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular for Graduates
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-navy-950">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-navy-950">
                        {formatCurrency(price)}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        {formatCurrency(plan.originalPrice)}
                      </span>
                    </div>

                    <div className="text-2xs text-slate-500 mt-1">
                      or 3 student installments of <strong className="text-navy-900">{formatCurrency(installmentPrice)}/month</strong> (0% interest)
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900 block">
                      Everything Included:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100">
                  <Button
                    onClick={() => openEnrollModal()}
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full justify-center group font-bold"
                    size="lg"
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-navy-950 text-sm">
              100% Risk-Free 14-Day Money Back Guarantee
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Try the first two weeks of assignments, live classes, and GPU labs. If the program isn&apos;t the absolute highest-quality learning experience of your life, get an immediate, full refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
