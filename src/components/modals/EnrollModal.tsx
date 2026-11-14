"use client";

import React from "react";
import { Course } from "@/types";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { X } from "lucide-react";

interface EnrollModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EnrollModal({ course, isOpen, onClose }: EnrollModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-navy-900 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <RegistrationForm
          defaultCourse={course?.title || "Artificial Intelligence Fundamentals"}
          title={course ? `Register: ${course.title}` : "Course Registration & Enquiry"}
          subtitle={
            course
              ? `Complete this registration to reserve your cohort seat or receive the curriculum and scholarship packet for ${course.title}.`
              : "Complete this quick form to reserve your seat or request detailed syllabus and scholarship information."
          }
          className="border-none shadow-none"
        />
      </div>
    </div>
  );
}
