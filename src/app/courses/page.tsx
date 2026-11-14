"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SAMPLE_COURSES } from "@/lib/courses-data";
import { Course, CourseCategory, CourseLevel } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useModals } from "@/components/layout/AppProviders";
import { 
  Search, 
  SlidersHorizontal, 
  Clock, 
  Star, 
  Users, 
  Check, 
  ArrowRight, 
  GraduationCap, 
  Sparkles,
  BookOpen
} from "lucide-react";
import Image from "next/image";

const CATEGORIES: CourseCategory[] = [
  "All",
  "Artificial Intelligence",
  "Machine Learning",
  "Python Programming",
  "Data Science",
  "Generative AI",
  "Web Development",
  "Cloud Computing",
  "Digital Marketing",
];

const LEVELS: CourseLevel[] = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
];

function CoursesContent() {
  const { openCourseModal, openEnrollModal } = useModals();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>("All");
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>("All Levels");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "rating" | "price-asc">("popular");

  useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam as CourseCategory)) {
      setSelectedCategory(categoryParam as CourseCategory);
    }
  }, [categoryParam]);

  const filtered = SAMPLE_COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      course.technologies.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesLevel && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price-asc") return a.studentPrice - b.studentPrice;
    return b.studentsEnrolled - a.studentsEnrolled;
  });

  return (
    <div className="bg-[#FAFBFC] min-h-screen py-12 lg:py-16">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
            <BookOpen className="w-3.5 h-3.5 text-brand-purple" />
            <span>2026 Academic Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Explore All <span className="gradient-text">Applied AI Tracks</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every course includes real production lab environments, cloud GPU credits, 4 portfolio capstones, and line-by-line FAANG pull request reviews.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-soft mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by keyword (e.g. LangChain, vLLM, Agents)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 self-end md:self-auto">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:outline-none font-medium cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Tuition: Low to High</option>
              </select>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="pt-2 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-navy-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-navy-900 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <span className="text-2xs uppercase tracking-wider text-slate-400">Level:</span>
              {LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2.5 py-1 rounded-lg text-2xs font-semibold transition-colors ${
                    selectedLevel === lvl
                      ? "bg-violet-100 text-violet-800 font-bold"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span>Showing {filtered.length} Programs</span>
          <span className="text-violet-700">Code STUDENT40 grants 40% off</span>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((course) => (
            <div
              key={course.id}
              id={course.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-soft card-subtle-glow flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Header Badge Row */}
                <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <Badge variant="blue">{course.category}</Badge>
                  {course.badge && <Badge variant="purple">{course.badge}</Badge>}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-navy-900">{course.rating}</span>
                      <span className="text-slate-400 font-normal">({course.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h2 
                      onClick={() => openCourseModal(course)}
                      className="text-xl font-extrabold text-navy-950 group-hover:text-brand-purple transition-colors cursor-pointer tracking-tight"
                    >
                      {course.title}
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Syllabus Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {course.keyHighlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {course.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-2xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Instructor */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200">
                      <Image
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-navy-900 block">{course.instructor.name}</span>
                      <span className="text-2xs text-slate-500">{course.instructor.company}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price and Action Buttons */}
              <div className="p-6 pt-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-extrabold text-navy-950">
                      {formatCurrency(course.studentPrice)}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {formatCurrency(course.originalPrice)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-2xs text-emerald-600 font-bold">
                    <GraduationCap className="w-3 h-3" />
                    <span>Student Scholar Rate</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openCourseModal(course)}
                    className="text-xs px-3"
                  >
                    Syllabus
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => openEnrollModal(course)}
                    className="text-xs px-3.5 shadow-sm"
                  >
                    Enroll
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#FAFBFC] min-h-screen py-24 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-semibold text-slate-500">Loading course curriculum...</p>
          </div>
        </div>
      }
    >
      <CoursesContent />
    </Suspense>
  );
}
