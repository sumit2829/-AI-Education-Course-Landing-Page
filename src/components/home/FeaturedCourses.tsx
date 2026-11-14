"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FEATURED_COURSES, COURSE_CATEGORIES, CourseItem } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseDetailsModal } from "@/components/modals/CourseDetailsModal";
import { EnquireModal } from "@/components/modals/EnquireModal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  SlidersHorizontal,
  X,
  Layers
} from "lucide-react";

interface FeaturedCoursesProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export function FeaturedCourses({
  selectedCategory: propCategory,
  onSelectCategory: propOnSelectCategory,
}: FeaturedCoursesProps) {
  const [localCategory, setLocalCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");

  // State for modals
  const [detailsCourse, setDetailsCourse] = useState<CourseItem | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const [enquireCourse, setEnquireCourse] = useState<CourseItem | null>(null);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);

  const currentCategory = propCategory ?? localCategory;
  const setCategory = (cat: string) => {
    if (propOnSelectCategory) {
      propOnSelectCategory(cat);
    } else {
      setLocalCategory(cat);
    }
  };

  const handleOpenDetails = (course: CourseItem) => {
    setDetailsCourse(course);
    setDetailsModalOpen(true);
  };

  const handleOpenEnquire = (course: CourseItem) => {
    setEnquireCourse(course);
    setEnquireModalOpen(true);
  };

  // Filter courses based on category and skill level
  const filteredCourses = FEATURED_COURSES.filter((course) => {
    const matchesCategory =
      currentCategory === "All" || course.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#FAFBFC] relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span>Industry-Focused Programmes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
              Featured <span className="gradient-text">Courses</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore hands-on technology courses designed for students and professionals. Master foundational programming, machine learning, and digital skills.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link href="/courses">
              <Button variant="outline" className="text-xs sm:text-sm font-semibold">
                Explore All Programmes
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-soft mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {COURSE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  currentCategory === cat
                    ? "bg-navy-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-navy-900 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Level Filter Dropdown / Pills */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 self-end md:self-auto shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Skill Level:</span>
            <div className="flex gap-1">
              {["All Levels", "Beginner", "Intermediate"].map((lvl) => (
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

        {/* Active Category Filter Status Banner */}
        {currentCategory !== "All" && (
          <div className="mb-8 flex items-center justify-between bg-violet-50/70 border border-violet-100 rounded-2xl px-5 py-3">
            <span className="text-xs text-violet-900 font-semibold">
              Showing courses in: <strong className="text-brand-purple">{currentCategory}</strong> ({filteredCourses.length} course{filteredCourses.length === 1 ? "" : "s"} found)
            </span>
            <button
              onClick={() => setCategory("All")}
              className="text-xs font-bold text-violet-700 hover:text-violet-950 flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset Category Filter
            </button>
          </div>
        )}

        {/* Responsive Grid with Reusable CourseCard components */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={handleOpenDetails}
                onEnquire={handleOpenEnquire}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-soft">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-navy-950">No courses match this filter combination</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try selecting &ldquo;All Levels&rdquo; or reset the category filter to view all sample programmes.
            </p>
            <Button size="sm" onClick={() => { setCategory("All"); setSelectedLevel("All Levels"); }}>
              Reset Filters
            </Button>
          </div>
        )}

        {/* Details & Enquire Modals */}
        <CourseDetailsModal
          course={detailsCourse}
          isOpen={detailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
          onEnquire={(c) => {
            setDetailsModalOpen(false);
            handleOpenEnquire(c);
          }}
        />

        <EnquireModal
          course={enquireCourse}
          isOpen={enquireModalOpen}
          onClose={() => setEnquireModalOpen(false)}
        />
      </div>
    </section>
  );
}
