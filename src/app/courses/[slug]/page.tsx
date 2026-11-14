"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SAMPLE_COURSES } from "@/lib/courses-data";
import { FEATURED_COURSES, CourseItem } from "@/data/courses";
import { Course } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useModals } from "@/components/layout/AppProviders";
import { 
  Clock, 
  Calendar, 
  Star, 
  Users, 
  Check, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  FolderGit2, 
  BookOpen, 
  ArrowLeft 
} from "lucide-react";

function convertItemToCourse(item: CourseItem): Course {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    subtitle: item.shortDescription,
    description: item.shortDescription,
    level: (item.level === "All Levels" ? "Beginner" : item.level) as any,
    category: item.category as any,
    duration: item.duration,
    weeklyCommitment: "6-8 hrs/week",
    rating: 4.95,
    reviewCount: 310,
    studentsEnrolled: 2450,
    badge: "Featured Track",
    price: 499,
    originalPrice: 799,
    studentPrice: 299,
    nextCohortDate: "Starts April 15, 2026",
    technologies: item.technologies,
    keyHighlights: item.learningOutcomes,
    instructor: {
      id: "ai-faculty",
      name: "Academy Senior Faculty",
      role: "Lead Tech Instructor",
      company: "AI Skills Academy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      bio: "Industry practitioner with hands-on software engineering and AI systems experience.",
      previousCompany: "Industry Leader"
    },
    prerequisites: [item.prerequisites],
    capstoneProject: {
      title: `${item.title} Capstone Architecture`,
      description: `Complete an end-to-end portfolio project covering all modules of ${item.title}.`,
      deliverables: ["GitHub source repository with CI/CD", "Production deployment & documentation"]
    },
    syllabus: item.modules.map((m, idx) => ({
      week: idx + 1,
      title: m.title,
      description: m.description,
      topics: [m.title, "Practical lab session", "Code review & exercise"],
      projectTitle: `${m.title} Practical Implementation`,
      estimatedHours: 6
    })),
    careerOutcomes: [
      "Job-ready practical portfolio implementation",
      "Foundation for junior technical roles & internships",
      "End-to-end hands-on project experience"
    ]
  };
}

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openEnrollModal } = useModals();

  let course = SAMPLE_COURSES.find((c) => c.slug === slug);
  if (!course) {
    const featuredMatch = FEATURED_COURSES.find((c) => c.slug === slug);
    if (featuredMatch) {
      course = convertItemToCourse(featuredMatch);
    } else {
      course = SAMPLE_COURSES[0];
    }
  }

  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  if (!course) {
    return notFound();
  }

  return (
    <div className="bg-[#FAFBFC] min-h-screen py-10 lg:py-16">
      <div className="container mx-auto">
        {/* Back Link */}
        <Link 
          href="/courses" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-navy-950 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Courses</span>
        </Link>

        {/* Course Header Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Info (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="blue">{course.category}</Badge>
              <Badge variant="outline">{course.level}</Badge>
              {course.badge && <Badge variant="purple">{course.badge}</Badge>}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 pt-2 border-y border-slate-200/80 py-4">
              <div className="flex items-center gap-1.5 font-bold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-navy-950">{course.rating}</span>
                <span className="text-slate-400 font-normal">({course.reviewCount} student reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-purple" />
                <span>{course.studentsEnrolled.toLocaleString()} engineers graduated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-blue" />
                <span>{course.duration} • {course.weeklyCommitment}</span>
              </div>
            </div>

            {/* Course Overview */}
            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-bold text-navy-950">About This Program</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900">
                What Sets This Track Apart:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 bg-white rounded-xl border border-slate-200/80">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Accordion */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-navy-950">
                  Week-by-Week Hands-On Curriculum
                </h2>
                <span className="text-xs text-slate-500">
                  {course.syllabus.length} Modules
                </span>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((week) => {
                  const isExpanded = expandedWeek === week.week;
                  return (
                    <div
                      key={week.week}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs"
                    >
                      <button
                        onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 font-bold text-xs flex items-center justify-center shrink-0">
                            W{week.week}
                          </span>
                          <div>
                            <h3 className="font-bold text-navy-950 text-sm sm:text-base">
                              {week.title}
                            </h3>
                            <span className="text-2xs text-slate-500">
                              ~{week.estimatedHours} hours hands-on lab
                            </span>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      {isExpanded && (
                        <div className="p-5 border-t border-slate-100 space-y-3 text-xs sm:text-sm">
                          <p className="text-slate-600 leading-relaxed">
                            {week.description}
                          </p>

                          <div>
                            <span className="text-2xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                              Topics Covered:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {week.topics.map((t, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                                  <Check className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                                  <span>{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {week.projectTitle && (
                            <div className="p-3 bg-violet-50/70 border border-violet-100 rounded-xl text-xs text-violet-900 mt-2 flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                              <span>
                                <strong>Weekly Deliverable:</strong> {week.projectTitle}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Capstone Project Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-violet-50 via-white to-blue-50 border border-violet-200/80 space-y-4">
              <Badge variant="electric">Flagship Graduation Deliverable</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                {course.capstoneProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {course.capstoneProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  Graduation Deliverables:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {course.capstoneProject.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Enrollment Sidebar (Right 1 col) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl border border-slate-200/90 shadow-elevated p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="success">Cohort 6 Open</Badge>
                  <span className="text-2xs text-slate-500 font-mono">25 seats max</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-navy-950">
                    {formatCurrency(course.studentPrice)}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    {formatCurrency(course.originalPrice)}
                  </span>
                </div>

                <div className="p-2.5 bg-violet-50 rounded-xl border border-violet-100 text-xs text-violet-900 font-semibold mt-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-purple shrink-0" />
                  <span>40% Student Scholarship Applied</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-600">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>Next Cohort Start:</span>
                  <strong className="text-navy-900">{course.nextCohortDate}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>Duration:</span>
                  <strong className="text-navy-900">{course.duration}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>Weekly Commitment:</span>
                  <strong className="text-navy-900">{course.weeklyCommitment}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>GPU Compute Stipend:</span>
                  <strong className="text-emerald-600 font-bold">$300 Included</strong>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => openEnrollModal(course)}
                  size="lg"
                  className="w-full font-bold group shadow-md shadow-violet-500/20"
                >
                  <span>Enroll with Student Grant</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <span className="text-3xs text-slate-400 block text-center mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  14-day 100% money back guarantee
                </span>
              </div>

              {/* Instructor Mini Profile */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-navy-950 block">{course.instructor.name}</span>
                  <span className="text-2xs text-brand-purple font-medium">{course.instructor.role}</span>
                  <span className="text-3xs text-slate-400 block">{course.instructor.company}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
