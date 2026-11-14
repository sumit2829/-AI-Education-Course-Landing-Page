"use client";

import React, { useState } from "react";
import { Course } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  X, 
  Clock, 
  Calendar, 
  Star, 
  Users, 
  Check, 
  ChevronDown, 
  Layers, 
  Sparkles, 
  FolderGit2, 
  BookOpen,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export function CourseModal({ course, isOpen, onClose, onEnroll }: CourseModalProps) {
  const [activeTab, setActiveTab] = useState<"syllabus" | "capstone" | "instructor">("syllabus");
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-white to-violet-50/40 border-b border-slate-100 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-navy-900 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="electric">{course.category}</Badge>
            <Badge variant="outline">{course.level}</Badge>
            {course.badge && <Badge variant="purple">{course.badge}</Badge>}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            {course.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-1.5 font-semibold text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-navy-900">{course.rating}</span>
              <span className="text-slate-400 font-normal">({course.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-brand-purple" />
              <span>{course.studentsEnrolled.toLocaleString()} enrolled</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-blue" />
              <span>{course.duration} ({course.weeklyCommitment})</span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-6 sm:px-8 bg-white gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("syllabus")}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "syllabus"
                ? "border-brand-purple text-brand-purple"
                : "border-transparent text-slate-500 hover:text-navy-900"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Curriculum ({course.syllabus.length} Weeks)
          </button>
          <button
            onClick={() => setActiveTab("capstone")}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "capstone"
                ? "border-brand-purple text-brand-purple"
                : "border-transparent text-slate-500 hover:text-navy-900"
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            Capstone Project
          </button>
          <button
            onClick={() => setActiveTab("instructor")}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "instructor"
                ? "border-brand-purple text-brand-purple"
                : "border-transparent text-slate-500 hover:text-navy-900"
            }`}
          >
            <Layers className="w-4 h-4" />
            Instructor & Career
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {activeTab === "syllabus" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                  Detailed Syllabus & Hands-On Milestones
                </span>
                <span className="text-xs text-brand-purple font-medium">
                  {course.syllabus.reduce((acc, curr) => acc + curr.estimatedHours, 0)} total lab hours
                </span>
              </div>

              {course.syllabus.map((week) => {
                const isExpanded = expandedWeek === week.week;
                return (
                  <div 
                    key={week.week}
                    className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all bg-white hover:border-slate-300"
                  >
                    <button
                      onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 font-bold text-xs flex items-center justify-center shrink-0">
                          W{week.week}
                        </span>
                        <div>
                          <h4 className="font-bold text-navy-950 text-sm sm:text-base">
                            {week.title}
                          </h4>
                          <span className="text-xs text-slate-500">
                            ~{week.estimatedHours} hrs practical hands-on
                          </span>
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <div className="p-4 sm:p-5 border-t border-slate-100 bg-white space-y-3 text-sm">
                        <p className="text-slate-600 text-xs sm:text-sm">
                          {week.description}
                        </p>

                        <div>
                          <span className="text-xs font-semibold text-navy-800 uppercase tracking-wider block mb-2">
                            Key Core Topics:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {week.topics.map((t, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {week.projectTitle && (
                          <div className="mt-3 p-3 bg-violet-50/70 border border-violet-100 rounded-xl flex items-center gap-2.5 text-xs text-violet-900">
                            <Sparkles className="w-4 h-4 text-violet-600 shrink-0" />
                            <span>
                              <strong className="font-semibold">Weekly Deliverable:</strong> {week.projectTitle}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "capstone" && (
            <div className="space-y-5">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-violet-50/80 via-white to-blue-50/80 border border-violet-100 space-y-4">
                <Badge variant="electric">Flagship Graduation Project</Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  {course.capstoneProject.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {course.capstoneProject.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Production Deliverables Required for Graduation:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {course.capstoneProject.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                  Production Tech Stack Mastered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-navy-800 text-xs font-semibold border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "instructor" && (
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-sm">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy-950">
                    {course.instructor.name}
                  </h4>
                  <p className="text-xs font-semibold text-brand-purple">
                    {course.instructor.role} • {course.instructor.company}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2.5">
                  Target Career Roles & Compensations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {course.careerOutcomes.map((outcome, idx) => (
                    <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs">
                      <span className="font-bold text-navy-950 block">{outcome.split("(")[0]}</span>
                      <span className="text-emerald-600 font-semibold mt-1 block">
                        {outcome.includes("(") ? outcome.match(/\((.*?)\)/)?.[1] : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  Program Prerequisites:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {course.prerequisites.map((prereq, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-navy-950">
                {formatCurrency(course.studentPrice)}
              </span>
              <span className="text-sm text-slate-400 line-through">
                {formatCurrency(course.originalPrice)}
              </span>
              <Badge variant="success" className="text-2xs">Student Rate</Badge>
            </div>
            <span className="text-xs text-slate-500">
              {course.nextCohortDate} • Limited to 25 seats
            </span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" onClick={onClose} className="flex-1 sm:flex-none">
              Close
            </Button>
            <Button 
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              size="lg"
              className="flex-1 sm:flex-none group"
            >
              Enroll in Track
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
