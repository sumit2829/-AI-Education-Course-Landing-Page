"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SAMPLE_COURSES } from "@/lib/courses-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useModals } from "@/components/layout/AppProviders";
import { 
  Sparkles, 
  Target, 
  GraduationCap, 
  Users, 
  Code2, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  XCircle
} from "lucide-react";

export default function AboutPage() {
  const { openEnrollModal } = useModals();

  const instructors = SAMPLE_COURSES.map((c) => c.instructor).filter(
    (inst, idx, self) => self.findIndex((i) => i.id === inst.id) === idx
  );

  return (
    <div className="bg-[#FAFBFC] min-h-screen py-12 lg:py-20">
      <div className="container mx-auto space-y-20">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <Target className="w-3.5 h-3.5 text-brand-purple" />
            <span>Our Mission &amp; Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Built by AI Researchers &amp; Engineers. <br />
            <span className="gradient-text">Designed for the Next Generation.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Most university computer science programs were designed before transformer architectures and foundation models transformed software. We started AI Skills Academy to teach what actual production engineering teams do every day.
          </p>
        </div>

        {/* University vs AI Skills Academy Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-navy-950">
              Traditional CS Degrees vs. AI Skills Academy
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Why 14,500+ college students and graduates augment their degrees with our cohorts.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-navy-950">
                  <th className="py-3 px-4 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold text-slate-500">Traditional University CS</th>
                  <th className="py-3 px-4 font-bold text-violet-700 bg-violet-50/50 rounded-t-xl">
                    AI Skills Academy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-4 px-4 font-semibold text-navy-900">Curriculum Refresh Rate</td>
                  <td className="py-4 px-4 text-slate-500">Every 4-6 years (academic committee approvals)</td>
                  <td className="py-4 px-4 font-semibold text-violet-900 bg-violet-50/30">
                    Updated monthly with every major model &amp; framework release
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-navy-900">Project Deliverables</td>
                  <td className="py-4 px-4 text-slate-500">Toy command-line homework &amp; Jupyter notebooks</td>
                  <td className="py-4 px-4 font-semibold text-violet-900 bg-violet-50/30">
                    Deployed production web apps, Docker containers &amp; GitHub repos
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-navy-900">Code Reviews</td>
                  <td className="py-4 px-4 text-slate-500">Undergraduate TAs checking automated unit tests</td>
                  <td className="py-4 px-4 font-semibold text-violet-900 bg-violet-50/30">
                    1-on-1 Pull Request audits from senior engineers at OpenAI &amp; Meta
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-navy-900">GPU Compute Resources</td>
                  <td className="py-4 px-4 text-slate-500">Queuing for shared departmental cluster queues</td>
                  <td className="py-4 px-4 font-semibold text-violet-900 bg-violet-50/30">
                    $300 personal cloud GPU credits &amp; Modal sandbox environments
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-navy-900">Tuition &amp; Accessibility</td>
                  <td className="py-4 px-4 text-slate-500">$20,000 - $60,000 / year + student debt</td>
                  <td className="py-4 px-4 font-semibold text-emerald-600 bg-violet-50/30">
                    $299 - $599 with verified 40% college scholarship grant
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Meet Our Faculty &amp; Instructors
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Active practitioners and former researchers from frontier labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((inst) => (
              <div
                key={inst.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-4 border border-slate-200 shadow-xs">
                    <Image
                      src={inst.avatar}
                      alt={inst.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-extrabold text-navy-950 text-base">
                    {inst.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-purple mt-0.5">
                    {inst.role} • {inst.company}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {inst.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <Button size="lg" onClick={() => openEnrollModal()} className="font-bold">
            <GraduationCap className="w-5 h-5 mr-2" />
            Apply with 40% Student Discount
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
