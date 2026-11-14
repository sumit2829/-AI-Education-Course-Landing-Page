"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CourseItem } from "@/data/courses";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  X, 
  Clock, 
  BarChart, 
  BookOpen, 
  Check, 
  ChevronDown, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  HelpCircle
} from "lucide-react";

interface CourseDetailsModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (course: CourseItem) => void;
}

export function CourseDetailsModal({ course, isOpen, onClose, onEnquire }: CourseDetailsModalProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Thumbnail Banner */}
        <div className="relative h-44 sm:h-52 bg-slate-900 shrink-0">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-navy-950/60 hover:bg-navy-950 text-white rounded-full transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Metadata inside banner */}
          <div className="absolute bottom-5 left-6 right-6 z-10 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="electric" className="text-2xs font-bold">
                {course.category}
              </Badge>
              <Badge variant="outline" className="text-2xs text-white border-white/30 bg-white/10 font-bold">
                {course.level} Level
              </Badge>
              <span className="text-2xs text-slate-300 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-violet-300" />
                {course.duration}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Course Overview
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {course.shortDescription}
            </p>
          </div>

          {/* Schedule & Prerequisites Info Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
            <div>
              <span className="font-bold text-navy-900 block mb-0.5">Delivery Schedule:</span>
              <span className="text-slate-600">{course.schedule}</span>
            </div>
            <div>
              <span className="font-bold text-navy-900 block mb-0.5">Prerequisites:</span>
              <span className="text-slate-600">{course.prerequisites}</span>
            </div>
          </div>

          {/* Technologies Covered */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Technologies &amp; Tools Covered
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-violet-50 text-violet-900 text-xs font-semibold border border-violet-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learning Outcomes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Key Learning Outcomes
            </h3>
            <div className="space-y-2">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Modules Accordion */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Curriculum Modules ({course.modules.length} Modules)
              </h3>
            </div>

            <div className="space-y-2">
              {course.modules.map((mod, idx) => {
                const isExpanded = expandedModule === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => setExpandedModule(isExpanded ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-navy-950 text-xs sm:text-sm">
                        {mod.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <div className="p-4 border-t border-slate-100 text-xs text-slate-600 bg-white leading-relaxed">
                        {mod.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have questions about syllabus or upcoming batch start dates?
          </div>

          <div className="flex gap-2.5 w-full sm:w-auto">
            <Button variant="outline" onClick={onClose} className="flex-1 sm:flex-none text-xs">
              Close
            </Button>
            <Button
              onClick={() => {
                onClose();
                onEnquire(course);
              }}
              className="flex-1 sm:flex-none text-xs font-bold group shadow-sm"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
