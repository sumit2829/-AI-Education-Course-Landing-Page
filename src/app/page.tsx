"use client";

import React, { useState } from "react";
import { CourseCategory } from "@/types";
import { Hero } from "@/components/home/Hero";
import { CourseCategories } from "@/components/home/CourseCategories";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { LearningRoadmap } from "@/components/home/LearningRoadmap";
import { InteractivePlayground } from "@/components/home/InteractivePlayground";
import { StudentPerks } from "@/components/home/StudentPerks";
import { CareerRoadmap } from "@/components/home/CareerRoadmap";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { StudentTestimonials } from "@/components/home/StudentTestimonials";
import { CourseRegistrationSection } from "@/components/home/CourseRegistrationSection";
import { FaqAccordionSection } from "@/components/home/FaqAccordionSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { useModals } from "@/components/layout/AppProviders";

export default function HomePage() {
  const { openEnrollModal, openCourseModal, openContactModal } = useModals();
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>("All");

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Professional Navbar & Hero Section with Framer Motion, Illustration & Student Learning Stats */}
      <Hero onOpenEnroll={() => openEnrollModal()} />

      {/* 2. Course Categories Section (8 Target Domains with Interactive Filter Trigger) */}
      <CourseCategories
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 3. Featured Courses Section with Reusable CourseCard and Category Filtering */}
      <FeaturedCourses
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat as any)}
      />

      {/* 4. Why Choose AI Skills Academy Section (6 Core Benefits) */}
      <WhyChooseUs />

      {/* 5. 4-Stage Visual Learning Roadmap (Student Journey Timeline) */}
      <LearningRoadmap />

      {/* 6. Interactive Live Code Architecture Playground */}
      <InteractivePlayground />

      {/* 7. Student & Young Professional Dedicated Perks */}
      <StudentPerks onOpenEnroll={() => openEnrollModal()} />

      {/* 8. Career Roadmaps & Compensation Pathways */}
      <CareerRoadmap />

      {/* 9. Student Capstone Project Showcase */}
      <ProjectsShowcase />

      {/* 10. Interactive Tuition & Salary ROI Calculator */}
      <RoiCalculator onOpenEnroll={() => openEnrollModal()} />

      {/* 11. Student Testimonials (Clean Labelled Sample/Demo Reviews) */}
      <StudentTestimonials />

      {/* 12. Course Registration & Enquiry Form (React Hook Form + Zod Validation) */}
      <CourseRegistrationSection />

      {/* 13. Frequently Asked Questions (shadcn/ui Accordion) */}
      <FaqAccordionSection onOpenContact={openContactModal} />

      {/* 14. Final High-Converting Call to Action Banner */}
      <CtaBanner 
        onOpenEnroll={() => openEnrollModal()} 
        onOpenContact={openContactModal} 
      />
    </div>
  );
}
