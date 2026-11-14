import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AI Skills Academy",
  description: "Privacy policy and data protection terms for students and applicants of AI Skills Academy.",
};

export default function PrivacyPage() {
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
            <Lock className="w-3.5 h-3.5 text-brand-purple" />
            <span>Legal &amp; Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: January 2026 • Demo Educational Platform Policy
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft space-y-8 text-sm text-slate-600 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-purple" />
              1. Overview &amp; Educational Notice
            </h2>
            <p>
              AI Skills Academy (&ldquo;the Academy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to safeguarding student and visitor privacy. This document outlines our data collection, usage, and safeguarding procedures. Please note that this website is an educational showcase platform featuring realistic demo courses, curricula, and sample contact details.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-blue" />
              2. Information We Collect
            </h2>
            <p>
              When you submit a course registration, enquiry, or contact form, we collect the following student details:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Full Name and contact email address.</li>
              <li>10-digit Indian mobile number for admissions counseling and cohort updates.</li>
              <li>Current educational level or profession (Undergraduate, Postgraduate, Working Professional).</li>
              <li>Course track preferences and chosen learning modes (Weekend live batch or weekday evening batch).</li>
              <li>Optional student messages or curriculum questions.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              3. Purpose of Processing
            </h2>
            <p>
              Collected information is exclusively utilized for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Sending course syllabi, orientation schedules, and batch onboarding packets.</li>
              <li>Verifying eligibility for college student scholarship discounts.</li>
              <li>Answering student enquiries regarding prerequisites and learning pathways.</li>
              <li>We strictly uphold a zero-spam policy and never sell or lease your personal information to third-party commercial marketing brokers.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-violet-600" />
              4. Data Retention &amp; Rights
            </h2>
            <p>
              You reserve the right at any time to request access to, rectification of, or deletion of your admissions enquiry records. For any privacy requests or questions regarding this demo policy, contact our academic desk at <strong className="text-navy-900">admissions@aiskillsacademy.edu</strong>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
