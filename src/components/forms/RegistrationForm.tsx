"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  submitCourseRegistration, 
  RegistrationFormData, 
  RegistrationResponse 
} from "@/services/registrationService";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Send, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  RotateCcw
} from "lucide-react";
import confetti from "canvas-confetti";

// Regex for valid 10-digit Indian mobile numbers (with optional +91, 91, or 0 prefix)
const indianMobileRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters long." })
    .max(80, { message: "Full Name cannot exceed 80 characters." })
    .regex(/^[a-zA-Z\s.'-]+$/, { 
      message: "Full Name can only contain letters, spaces, hyphens, and apostrophes." 
    }),
  email: z
    .string()
    .min(1, { message: "Email Address is required." })
    .email({ message: "Please enter a valid email address (e.g. student@example.com)." }),
  mobileNumber: z
    .string()
    .min(1, { message: "Mobile Number is required." })
    .refine((val) => {
      const clean = val.replace(/[\s-]/g, "");
      return indianMobileRegex.test(clean);
    }, {
      message: "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210 or +91 9876543210).",
    }),
  educationProfession: z
    .string()
    .min(1, { message: "Please select your current education or profession." }),
  courseInterestedIn: z
    .string()
    .min(1, { message: "Please select a course you are interested in." }),
  preferredLearningMode: z
    .string()
    .min(1, { message: "Please select your preferred learning mode." }),
  message: z
    .string()
    .max(500, { message: "Message cannot exceed 500 characters." })
    .optional()
    .or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the communication consent and privacy policy to proceed.",
    }),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  defaultCourse?: string;
  onSuccess?: (response: RegistrationResponse) => void;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function RegistrationForm({
  defaultCourse,
  onSuccess,
  className = "",
  title = "Register & Enquire for Courses",
  subtitle = "Complete this quick form to reserve your seat or request detailed syllabus information."
}: RegistrationFormProps) {
  const [submissionResult, setSubmissionResult] = useState<RegistrationResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      educationProfession: "",
      courseInterestedIn: defaultCourse || "",
      preferredLearningMode: "Weekend Batch (Live Interactive)",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    setServerError(null);
    try {
      const result = await submitCourseRegistration(data as RegistrationFormData);
      setSubmissionResult(result);
      if (onSuccess) {
        onSuccess(result);
      }
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback
      }
    } catch (err: any) {
      setServerError(
        err?.message || "An unexpected error occurred while submitting your registration. Please try again."
      );
    }
  };

  const handleResetForm = () => {
    setSubmissionResult(null);
    setServerError(null);
    reset({
      fullName: "",
      email: "",
      mobileNumber: "",
      educationProfession: "",
      courseInterestedIn: defaultCourse || "",
      preferredLearningMode: "Weekend Batch (Live Interactive)",
      message: "",
      consent: false,
    });
  };

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden transition-all duration-300 ${className}`}>
      {/* Top Gradient Bar */}
      <div className="h-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500" />

      {submissionResult ? (
        /* Success Confirmation Screen */
        <div className="p-8 sm:p-10 text-center space-y-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto border border-emerald-100 shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <Badge variant="success" className="px-3 py-1 font-bold text-2xs uppercase tracking-wider">
              Registration Received
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
              Thank You, {submissionResult.details.studentName}!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Your registration and enquiry has been submitted. Our admissions advisor will contact you shortly with the syllabus brochure and batch orientation instructions.
            </p>
          </div>

          {/* Reference Details Box */}
          <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5">
            <div className="flex justify-between items-center text-slate-500">
              <span>Application Reference:</span>
              <span className="font-mono font-bold text-navy-950 text-sm">
                {submissionResult.registrationId}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-500">
              <span>Selected Course:</span>
              <span className="font-semibold text-brand-purple">
                {submissionResult.details.course}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-500">
              <span>Batch Preference:</span>
              <span className="font-medium text-navy-900">
                {submissionResult.details.learningMode}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-500 pt-2 border-t border-slate-200/80">
              <span>Verification Status:</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Under Academic Review
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleResetForm}
              className="text-xs font-bold w-full sm:w-auto"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              Register for Another Course
            </Button>
          </div>
        </div>
      ) : (
        /* Registration Form Body */
        <div className="p-6 sm:p-10 space-y-6">
          {/* Header */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span>Admissions &amp; Course Enquiry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
              {title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {subtitle}
            </p>
          </div>

          {serverError && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. Rahul Sharma"
                    {...register("fullName")}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-200 focus:border-brand-purple focus:ring-brand-purple/20"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    disabled={isSubmitting}
                    placeholder="student@example.com"
                    {...register("email")}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-200 focus:border-brand-purple focus:ring-brand-purple/20"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Mobile Number (Indian Format) */}
              <div className="space-y-1.5">
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                  Mobile Number (India) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    disabled={isSubmitting}
                    placeholder="e.g. 9876543210 or +91 9876543210"
                    {...register("mobileNumber")}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-200 focus:border-brand-purple focus:ring-brand-purple/20"
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>

              {/* Current Education / Profession */}
              <div className="space-y-1.5">
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                  Current Education / Profession <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    disabled={isSubmitting}
                    {...register("educationProfession")}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.educationProfession
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-200 focus:border-brand-purple focus:ring-brand-purple/20"
                    }`}
                  >
                    <option value="">Select your background...</option>
                    <option value="College Student (Undergraduate / B.Tech / BCA / B.Sc)">College Student (Undergraduate / B.Tech / BCA / B.Sc)</option>
                    <option value="College Student (Postgraduate / M.Tech / MCA / M.Sc)">College Student (Postgraduate / M.Tech / MCA / M.Sc)</option>
                    <option value="Recent Graduate (Class of 2024 - 2026)">Recent Graduate (Class of 2024 - 2026)</option>
                    <option value="Working Professional (Software / IT)">Working Professional (Software / IT)</option>
                    <option value="Working Professional (Non-Tech Transition)">Working Professional (Non-Tech Transition)</option>
                    <option value="Freelancer / Entrepreneur">Freelancer / Entrepreneur</option>
                  </select>
                </div>
                {errors.educationProfession && (
                  <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.educationProfession.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Course Interested In */}
              <div className="space-y-1.5">
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                  Course Interested In <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    disabled={isSubmitting}
                    {...register("courseInterestedIn")}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.courseInterestedIn
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-200 focus:border-brand-purple focus:ring-brand-purple/20"
                    }`}
                  >
                    <option value="">Select a programme...</option>
                    <option value="Python for Beginners">Python for Beginners (6 Weeks)</option>
                    <option value="Artificial Intelligence Fundamentals">Artificial Intelligence Fundamentals (8 Weeks)</option>
                    <option value="Machine Learning with Python">Machine Learning with Python (10 Weeks)</option>
                    <option value="Generative AI and Prompt Engineering">Generative AI and Prompt Engineering (8 Weeks)</option>
                    <option value="Data Science and Analytics">Data Science and Analytics (8 Weeks)</option>
                    <option value="Full Stack Web Development">Full Stack Web Development (12 Weeks)</option>
                    <option value="Multiple Tracks / General Advising">Multiple Tracks / General Advising</option>
                  </select>
                </div>
                {errors.courseInterestedIn && (
                  <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.courseInterestedIn.message}
                  </p>
                )}
              </div>

              {/* Preferred Learning Mode */}
              <div className="space-y-1.5">
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                  Preferred Learning Mode <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    disabled={isSubmitting}
                    {...register("preferredLearningMode")}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.preferredLearningMode
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-200 focus:border-brand-purple focus:ring-brand-purple/20"
                    }`}
                  >
                    <option value="Weekend Batch (Live Interactive)">Weekend Batch (Live Interactive)</option>
                    <option value="Weekday Evening Batch">Weekday Evening Batch</option>
                    <option value="Flexible / Self-Paced with Mentor Support">Flexible / Self-Paced with Mentor Support</option>
                  </select>
                </div>
                {errors.preferredLearningMode && (
                  <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.preferredLearningMode.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message (Optional) */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-2xs font-bold uppercase tracking-wider text-navy-800">
                  Message or Questions (Optional)
                </label>
                <span className="text-3xs text-slate-600">Max 500 characters</span>
              </div>
              <div className="relative">
                <textarea
                  rows={3}
                  disabled={isSubmitting}
                  placeholder="Tell us about your learning goals, background, or specific questions about the curriculum..."
                  {...register("message")}
                  className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm text-navy-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 resize-none transition-all ${
                    errors.message
                      ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                      : "border-slate-200 focus:border-brand-purple focus:ring-brand-purple/20"
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  disabled={isSubmitting}
                  {...register("consent")}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-purple focus:ring-brand-purple accent-violet-600 cursor-pointer"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I agree to receive course updates, syllabus brochures, and batch communications from AI Skills Academy via email and WhatsApp. I acknowledge the privacy policy.
                </span>
              </label>
              {errors.consent && (
                <p className="text-2xs text-rose-600 font-semibold flex items-center gap-1 mt-1.5 ml-7">
                  <AlertCircle className="w-3 h-3" />
                  {errors.consent.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center group font-bold shadow-md shadow-violet-500/20"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Registration &amp; Enquiry...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Submit Course Registration &amp; Enquiry</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-3xs text-slate-600 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Your contact details are encrypted and will never be shared with third parties.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
