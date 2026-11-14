"use client";

import React, { useState, useEffect } from "react";
import { SAMPLE_COURSES } from "@/lib/courses-data";
import { Course } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Search, X, ArrowRight, Sparkles, BookOpen } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export function SearchModal({ isOpen, onClose, onSelectCourse }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // Toggle or open handled by parent
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = SAMPLE_COURSES.filter((course) => {
    const q = query.toLowerCase();
    return (
      course.title.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      course.technologies.some((t) => t.toLowerCase().includes(q)) ||
      course.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-purple shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search courses, skills, technologies (e.g. LangChain, Agents, RAG)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base sm:text-lg text-navy-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-navy-900 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {filtered.length > 0 ? (
            filtered.map((course) => (
              <div
                key={course.id}
                onClick={() => {
                  onSelectCourse(course);
                  onClose();
                }}
                className="p-3.5 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 group flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="blue" className="text-2xs">{course.category}</Badge>
                    <span className="text-xs text-slate-500 font-medium">{course.duration}</span>
                  </div>
                  <h4 className="font-bold text-navy-900 group-hover:text-brand-purple transition-colors text-sm sm:text-base">
                    {course.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {course.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-2xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-bold text-navy-950 text-sm block">${course.studentPrice}</span>
                  <span className="text-2xs text-emerald-600 font-medium">Student Price</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500">
              <BookOpen className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm">No courses matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for &ldquo;RAG&rdquo;, &ldquo;Agents&rdquo;, &ldquo;Next.js&rdquo;, or &ldquo;Vision&rdquo;</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 px-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
            <span>AI Skills Academy Curriculum Search</span>
          </div>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
