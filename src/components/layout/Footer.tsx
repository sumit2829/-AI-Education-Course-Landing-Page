"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Send, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Explore Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Career Support", href: "/career-tracks" },
    { label: "Student Projects", href: "/#projects" },
    { label: "Admissions & Registration", href: "/#register" },
    { label: "Frequently Asked Questions", href: "/#faq" },
  ];

  const courseCategories = [
    { label: "Artificial Intelligence", href: "/courses?category=Artificial+Intelligence" },
    { label: "Machine Learning", href: "/courses?category=Machine+Learning" },
    { label: "Python Programming", href: "/courses?category=Python+Programming" },
    { label: "Data Science", href: "/courses?category=Data+Science" },
    { label: "Generative AI", href: "/courses?category=Generative+AI" },
    { label: "Web Development", href: "/courses?category=Web+Development" },
    { label: "Cloud Computing", href: "/courses?category=Cloud+Computing" },
    { label: "Digital Marketing", href: "/courses?category=Digital+Marketing" },
  ];

  return (
    <footer className="bg-[#0B0F19] text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top subtle ambient violet glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Logo & About (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Academy Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/25 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight leading-none">
                  AI Skills <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">Academy</span>
                </span>
                <span className="text-3xs uppercase tracking-widest text-violet-400/90 font-semibold mt-1">
                  Empowering Digital Careers
                </span>
              </div>
            </Link>

            {/* About Description */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              AI Skills Academy is a premier technology institute providing college students, fresh graduates, and young professionals with project-driven training in Artificial Intelligence, Machine Learning, Python, and modern digital technologies.
            </p>

            {/* Newsletter & Syllabus Download */}
            <div className="pt-2 max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <span className="text-2xs font-bold uppercase tracking-wider text-slate-200">
                  Free 2026 AI Learning Roadmap
                </span>
              </div>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Roadmap sent! Check your inbox for the PDF guide.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter student or work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shrink-0 px-3.5"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="hover:text-violet-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-violet-400 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Course Categories (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Course Categories
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs text-slate-400">
              {courseCategories.map((category) => (
                <li key={category.label}>
                  <Link 
                    href={category.href} 
                    className="hover:text-violet-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <BookOpen className="w-3 h-3 text-slate-500 group-hover:text-violet-400 transition-colors shrink-0" />
                    <span className="truncate">{category.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details (Clearly Marked Demo Info) (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Contact Details
              </h4>
              <span className="text-3xs text-violet-400 font-medium">
                (Demo / Sample Contact Information)
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>
                  Tech Innovation Hub, Corridor Road, Bengaluru, Karnataka 560103, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210 (Admissions Demo)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:admissions@aiskillsacademy.edu" className="hover:text-white transition-colors">
                  admissions@aiskillsacademy.edu
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM IST (Academic Advisory)</span>
              </div>
            </div>

            {/* Direct Register Link Badge */}
            <div className="pt-2">
              <Link href="/#register">
                <span className="inline-flex items-center gap-1.5 text-2xs font-bold text-violet-300 bg-violet-950/70 border border-violet-800/60 rounded-xl px-3 py-1.5 hover:bg-violet-900/60 hover:text-white transition-all cursor-pointer">
                  <span>Enquire or Register Online</span>
                  <ArrowRight className="w-3 h-3 text-violet-400" />
                </span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Social Icons, Policies & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          {/* Copyright Notice */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2026 AI Skills Academy. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400 text-3xs sm:text-xs">
              Demo educational platform concept created for instructional showcase.
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/60 hover:text-violet-300 hover:bg-violet-950/40 transition-all"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/60 hover:text-violet-300 hover:bg-violet-950/40 transition-all"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0-.01-3 1.5 1.5 0 0 0 .01 3m1.4 9.74v-8.37H5.06v8.37z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/60 hover:text-violet-300 hover:bg-violet-950/40 transition-all"
              aria-label="Twitter / X"
              title="Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/60 hover:text-violet-300 hover:bg-violet-950/40 transition-all"
              aria-label="YouTube"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Discord */}
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/60 hover:text-violet-300 hover:bg-violet-950/40 transition-all"
              aria-label="Discord Community"
              title="Discord Community"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>

          {/* Privacy Policy and Terms and Conditions Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="text-xs text-slate-400 hover:text-violet-300 underline-offset-4 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-xs text-slate-400 hover:text-violet-300 underline-offset-4 hover:underline transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
