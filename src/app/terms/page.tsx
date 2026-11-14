import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FileCheck, ArrowLeft, BookOpen, AlertCircle, Award } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | AI Skills Academy",
  description: "Terms and conditions of enrolment and curriculum use for AI Skills Academy.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAFBFC] min-h-screen py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-xs text-slate-600 hover:text-navy-950">
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-brand-purple" />
            <span>Academic Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: January 2026 • Demo Platform Terms of Enrolment
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft space-y-8 text-sm text-slate-600 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-purple" />
              1. Enrolment &amp; Course Participation
            </h2>
            <p>
              By submitting an application or registering for a course at AI Skills Academy, students agree to participate in scheduled live cohorts, adhere to the code of academic integrity, and engage constructively in project code reviews and peer learning sessions.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              2. Demo Content &amp; Transparency Notice
            </h2>
            <p>
              All course curriculum details, student numbers, instructor profiles, and testimonials shown across this showcase site are realistic sample data designed to demonstrate the complete user experience of modern digital edtech platforms. AI Skills Academy is an instructional demonstrator and does not promise guaranteed job placement or formal statutory university accreditation.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-blue" />
              3. Intellectual Property &amp; Student Capstones
            </h2>
            <p>
              Students retain 100% intellectual property ownership of the code, architectures, and projects they build during their cohort capstones. Code repositories created during the coursework may be published publicly to personal GitHub accounts to enhance career portfolios.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              4. Code of Conduct
            </h2>
            <p>
              All cohort members, mentors, and staff are expected to maintain an inclusive, welcoming, and supportive learning environment. Harassment or inappropriate conduct in community Discord channels or live lecture sessions will result in immediate disqualification.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
