"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  X, 
  LogIn, 
  Sparkles, 
  Lock, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  GraduationCap
} from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

export function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 800);
  };

  const handleReset = () => {
    setLoggedIn(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
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

        {loggedIn ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy-950">
              Welcome Back to AI Skills Academy!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Logged in successfully as <strong className="text-navy-900">{email || "student@academy.ai"}</strong>. Redirecting to your interactive laboratory dashboard...
            </p>
            <div className="pt-2">
              <Button onClick={handleReset} className="w-full">
                Enter Student LMS Portal
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-7 sm:p-8 space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 text-2xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Student &amp; Member Portal
              </div>
              <h3 className="text-2xl font-black text-navy-950 tracking-tight">
                Sign in to your account
              </h3>
              <p className="text-xs text-slate-500">
                Access your cohort live classes, GPU cloud labs, and mentor feedback.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="student@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                    Password
                  </label>
                  <span className="text-3xs text-brand-purple hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" disabled={loading} className="w-full justify-center group font-bold">
                  <LogIn className="w-4 h-4 mr-1.5" />
                  {loading ? "Authenticating..." : "Sign In to Academy"}
                </Button>
              </div>
            </form>

            {/* Quick Demo Credentials Box */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-2xs text-slate-600 flex items-center justify-between">
              <div>
                <span className="font-semibold text-navy-900 block">Demo Student Access:</span>
                <span className="text-slate-500">demo@skills.ai / any password</span>
              </div>
              <button 
                type="button"
                onClick={() => { setEmail("student.demo@skills.ai"); setPassword("demo12345"); }}
                className="text-violet-700 font-bold hover:underline"
              >
                Auto-fill
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 text-center text-xs text-slate-500">
              Don&apos;t have an account yet?{" "}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onSwitchToRegister) onSwitchToRegister();
                }}
                className="font-bold text-brand-purple hover:underline ml-1"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
