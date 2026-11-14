"use client";

import React from "react";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { Badge } from "@/components/ui/Badge";
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  HelpCircle,
  PhoneCall,
  Mail,
  CalendarCheck
} from "lucide-react";

export function CourseRegistrationSection() {
  return (
    <section id="register" className="py-20 lg:py-28 bg-[#FAFBFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Admissions Guidance & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                <span>Admissions &amp; Course Enquiry</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight leading-tight">
                Take the Next Step in Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">Tech Career</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are a college undergraduate looking to master Python or a young professional transitioning into Generative AI, our advisors are here to help you select the ideal programme.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-brand-purple flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">
                    Comprehensive Curriculum Guidance
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Receive detailed week-by-week syllabi, capstone project blueprints, and prerequisite checklists for every course.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">
                    Flexible Batch Schedules
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Interactive live weekend sessions and weekday evening batches designed to fit alongside college lectures and work hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">
                    1-on-1 Academic Counseling
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Speak directly with a learning mentor to map your prior background to the highest-growth technology pathways.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-900 text-white space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-2xs uppercase tracking-wider font-bold text-violet-300">
                  Direct Admissions Desk
                </span>
                <Badge variant="electric" className="text-3xs py-0.5">IST Support</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>admissions@aiskills.edu</span>
                </div>
              </div>

              <p className="text-3xs text-slate-400 pt-2 border-t border-slate-800">
                Admissions desk is available Mon - Sat, 9:30 AM to 7:00 PM IST. Enquiries submitted after hours receive a response on the next business morning.
              </p>
            </div>
          </div>

          {/* Right Column: Reusable Registration & Enquiry Form */}
          <div className="lg:col-span-7">
            <RegistrationForm
              title="Course Registration & Enquiry"
              subtitle="Fill out this form with your details to receive the syllabus, cohort schedule, and speak with an advisor."
              className="shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
