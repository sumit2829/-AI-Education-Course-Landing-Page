"use client";

import React from "react";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FaqAccordionSectionProps {
  onOpenContact?: () => void;
}

export function FaqAccordionSection({ onOpenContact }: FaqAccordionSectionProps) {
  const faqData = [
    {
      id: "faq-1",
      question: "Who can join the courses?",
      answer: "Our courses are open to college students, fresh graduates, career switchers, and working professionals from all academic and professional backgrounds. Whether you are currently studying Computer Science, transitioning into technology from another field, or looking to augment your current skill set with AI, our programmes provide structured entry points from foundational coding to advanced application architecture."
    },
    {
      id: "faq-2",
      question: "Do I need prior programming knowledge?",
      answer: "Not for our beginner courses! Programmes such as 'Python for Beginners' and 'Artificial Intelligence Fundamentals' are designed from the ground up with zero programming prerequisites. For intermediate tracks (such as 'Machine Learning with Python' or 'Full Stack Web Development'), basic familiarity with programming fundamentals (variables, functions, loops) in any language is helpful."
    },
    {
      id: "faq-3",
      question: "Are practical projects included?",
      answer: "Yes, absolutely. Every single course is centered around hands-on application rather than passive video lectures. You will build functional software projects—such as data parsers, neural network classifiers, RAG knowledge search engines, and full-stack web applications—to apply concepts directly and create real artifacts."
    },
    {
      id: "faq-4",
      question: "How can I register?",
      answer: "Registering is simple and fast. Click the 'Register Now' or 'Enquire Now' buttons on any course card or in the top navigation bar. Fill out your name, contact email, and preferred batch schedule (weekend interactive or weekday evening). Our admissions team will review your selection, confirm your seat, and email your onboarding orientation packet."
    },
    {
      id: "faq-5",
      question: "What technologies will I learn?",
      answer: "Depending on your selected track, you will work hands-on with industry-standard technologies and toolchains. These include Python 3, SQL, ChatGPT / LLM APIs, TensorFlow, PyTorch, Scikit-Learn, Next.js, React, Git, GitHub, PostgreSQL, Power BI, and Tailwind CSS."
    },
    {
      id: "faq-6",
      question: "How can I contact the academy?",
      answer: "You can reach our team at any time by clicking the 'Contact' link in the top navigation bar to open our direct message form. You can also email our advising desk directly at admissions@aiskillsacademy.edu or submit an enquiry on any course card to receive syllabus brochures and schedule batch advice."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-100">
            <HelpCircle className="w-3.5 h-3.5 text-brand-purple" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find quick answers to common questions about prerequisites, learning formats, curriculum technologies, and registration.
          </p>
        </div>

        {/* shadcn/ui Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3.5">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-14 max-w-xl mx-auto text-center space-y-3 p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
          <div className="w-10 h-10 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center mx-auto">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-navy-950 text-sm sm:text-base">
            Have a question that isn&apos;t answered here?
          </h4>
          <p className="text-xs text-slate-500">
            Our admissions advisors are available to guide you on track selection, prerequisites, and schedules.
          </p>
          <div className="pt-1">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onOpenContact}
              className="font-bold text-xs border-slate-300 hover:border-violet-300"
            >
              <span>Contact Admissions Team</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
