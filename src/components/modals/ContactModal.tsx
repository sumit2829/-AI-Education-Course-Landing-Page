"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  X, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Course Inquiry & Advising");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500" />

        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-900 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy-950">
              Message Sent to Admissions!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Thank you, <strong className="text-navy-900">{name || "Student"}</strong>. One of our lead AI engineering advisors will review your inquiry and email you back at <strong className="text-violet-700">{email}</strong> within 12 hours.
            </p>
            <div className="pt-2">
              <Button onClick={handleReset} className="w-full">
                Back to AI Skills Academy
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 text-2xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                Student Support &amp; Admissions
              </div>
              <h3 className="text-2xl font-black text-navy-950 tracking-tight">
                Get in Touch with Our Team
              </h3>
              <p className="text-xs text-slate-500">
                Have questions about prerequisites, cohort dates, or student scholarship eligibility? We&apos;re here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Chen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
                />
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                  Email Address (.edu or personal)
                </label>
                <input
                  type="email"
                  required
                  placeholder="maya@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
                />
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
                >
                  <option value="Course Inquiry & Advising">Course Inquiry &amp; Advising</option>
                  <option value="Student 40% Discount Verification">Student 40% Discount Verification</option>
                  <option value="University AI Club Sponsorship">University AI Club Sponsorship</option>
                  <option value="Career & Hiring Partner Inquiries">Career &amp; Hiring Partner Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about your background or questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 resize-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full justify-center group font-bold">
                  <Send className="w-4 h-4 mr-1.5" />
                  Send Message to Admissions
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
