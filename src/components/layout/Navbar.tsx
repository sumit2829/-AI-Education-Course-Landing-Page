"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Sparkles, 
  Search, 
  Menu, 
  X, 
  GraduationCap, 
  ArrowRight,
  LogIn,
  Zap,
  PhoneCall,
  UserCheck
} from "lucide-react";

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenEnroll?: () => void;
  onOpenLogin?: () => void;
  onOpenContact?: () => void;
}

export function Navbar({ onOpenSearch, onOpenEnroll, onOpenLogin, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Career Support", href: "/career-tracks" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-all shadow-[0_2px_15px_-3px_rgba(15,23,42,0.03)]">
        {/* Top Mini Announcement Bar */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-2 py-0.5 text-2xs uppercase tracking-wide font-bold">
            <Zap className="w-3 h-3 text-amber-300 fill-amber-300" /> 2026 Admissions
          </span>
          <span className="truncate">
            Spring cohorts now enrolling • <strong className="underline decoration-white/60">40% College Student Scholarship Active</strong>
          </span>
          <span className="hidden md:inline opacity-80 text-2xs">• Code: STUDENT40</span>
        </div>

        {/* Main Nav Container */}
        <div className="container mx-auto flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-violet-500/25"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-navy-950 tracking-tight flex items-center gap-1.5">
                AI Skills <span className="gradient-text">Academy</span>
              </span>
              <span className="text-2xs text-slate-500 font-semibold tracking-wider uppercase -mt-1">
                Applied AI &amp; Digital Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-brand-purple ${
                    isActive ? "text-brand-purple font-bold" : ""
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            {/* Contact Trigger / Link */}
            <button
              onClick={onOpenContact}
              className="py-1 transition-colors hover:text-brand-purple font-semibold text-slate-600 text-sm"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100/90 hover:bg-slate-200/80 px-3 py-2 rounded-xl border border-slate-200 transition-colors"
              title="Search curriculum"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search...</span>
              <kbd className="bg-white px-1.5 py-0.5 rounded text-3xs font-mono border border-slate-200 shadow-2xs text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Login Button */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onOpenLogin}
              className="text-navy-900 font-bold hover:text-brand-purple hover:bg-violet-50 text-xs px-3.5 flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </Button>

            {/* Register Now CTA */}
            <Button 
              size="sm" 
              onClick={onOpenEnroll} 
              className="group shadow-sm hover:shadow-violet-500/25 px-4 font-bold text-xs"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-navy-900 rounded-xl hover:bg-slate-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 rounded-xl hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[90px] z-30 bg-white/95 backdrop-blur-xl lg:hidden p-6 overflow-y-auto border-b border-slate-200 shadow-2xl"
          >
            <div className="space-y-4">
              <div className="p-3.5 bg-violet-50 rounded-2xl border border-violet-100 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-brand-purple shrink-0" />
                <div>
                  <p className="text-xs font-bold text-violet-900">Student Scholar Benefit Active</p>
                  <p className="text-2xs text-violet-700">40% tuition deduction with code STUDENT40</p>
                </div>
              </div>

              <nav className="flex flex-col space-y-1 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-bold text-navy-900 hover:bg-slate-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-bold text-navy-900 hover:bg-slate-100 transition-colors"
                >
                  Contact
                </button>
              </nav>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenLogin) onOpenLogin();
                  }}
                  className="w-full justify-center text-sm font-bold"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login to Student Portal
                </Button>

                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnroll) onOpenEnroll();
                  }} 
                  className="w-full justify-center text-sm font-bold shadow-md shadow-violet-500/20"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
