"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CourseItem } from "@/data/courses";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Clock, 
  BarChart, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  MessageSquareText, 
  Info,
  Calendar
} from "lucide-react";

interface CourseCardProps {
  course: CourseItem;
  onViewDetails?: (course: CourseItem) => void;
  onEnquire?: (course: CourseItem) => void;
}

export function CourseCard({ course, onViewDetails, onEnquire }: CourseCardProps) {
  const getLevelBadgeVariant = (level: CourseItem["level"]) => {
    switch (level) {
      case "Beginner":
        return "success";
      case "Intermediate":
        return "blue";
      case "Advanced":
        return "purple";
      default:
        return "outline";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-violet-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      <div>
        {/* Course Thumbnail Container */}
        <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Top category & level badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
            <Badge variant="dark" className="backdrop-blur-md bg-navy-950/80 text-white border border-white/20 text-2xs font-bold">
              {course.category}
            </Badge>
            <Badge variant={getLevelBadgeVariant(course.level)} className="text-2xs font-extrabold shadow-sm">
              {course.level}
            </Badge>
          </div>

          {/* Bottom Duration Overlay Pill */}
          <div className="absolute bottom-3 left-3.5 z-10 flex items-center gap-1.5 text-2xs text-white font-semibold bg-navy-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-violet-300" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div>
            <Link href={`/courses/${course.slug}`}>
              <h3 className="text-xl font-extrabold text-navy-950 group-hover:text-brand-purple transition-colors cursor-pointer tracking-tight line-clamp-1">
                {course.title}
              </h3>
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
              {course.shortDescription}
            </p>
          </div>

          {/* Metadata row: Duration & Skill level */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{course.level}</span>
            </div>
          </div>

          {/* Technologies Covered */}
          <div className="pt-1">
            <span className="text-3xs font-extrabold uppercase tracking-wider text-slate-600 block mb-2">
              Technologies Covered:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {course.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-2xs font-semibold px-2 py-0.5 rounded-lg bg-slate-100 text-navy-800 border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
              {course.technologies.length > 4 && (
                <span className="text-2xs font-medium px-1.5 py-0.5 text-slate-600">
                  +{course.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Buttons: View Details & Enquire Now */}
      <div className="p-6 pt-3 bg-slate-50/60 border-t border-slate-100 flex items-center gap-2.5">
        <Link href={`/courses/${course.slug}`} className="flex-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full text-xs font-bold border-slate-200 hover:border-violet-300 hover:bg-white text-navy-900"
          >
            <Info className="w-3.5 h-3.5 mr-1 text-slate-500" />
            View Details
          </Button>
        </Link>

        <Button
          type="button"
          size="sm"
          onClick={() => onEnquire?.(course)}
          className="flex-1 text-xs font-bold shadow-xs hover:shadow-violet-500/20 group/btn"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
