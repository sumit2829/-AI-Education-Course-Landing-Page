export type CourseLevel = "All Levels" | "Beginner" | "Intermediate" | "Advanced";

export type CourseCategory =
  | "All"
  | "Artificial Intelligence"
  | "Machine Learning"
  | "Python Programming"
  | "Data Science"
  | "Generative AI"
  | "Web Development"
  | "Cloud Computing"
  | "Digital Marketing";

export interface Instructor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  linkedin?: string;
  previousCompany?: string;
}

export interface SyllabusModule {
  week: number;
  title: string;
  description: string;
  topics: string[];
  projectTitle?: string;
  estimatedHours: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: CourseLevel;
  category: CourseCategory;
  duration: string;
  weeklyCommitment: string;
  rating: number;
  reviewCount: number;
  studentsEnrolled: number;
  badge?: string;
  price: number;
  originalPrice: number;
  studentPrice: number;
  nextCohortDate: string;
  technologies: string[];
  keyHighlights: string[];
  instructor: Instructor;
  prerequisites: string[];
  capstoneProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  syllabus: SyllabusModule[];
  careerOutcomes: string[];
}

export interface StudentProject {
  id: string;
  title: string;
  studentName: string;
  studentRole: string;
  hiredAt: string;
  description: string;
  architecture: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  stars: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo?: string;
  avatar: string;
  graduatedFrom: string;
  quote: string;
  courseTaken: string;
  salaryIncrease: string;
  cohort: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Students & Pricing" | "Curriculum" | "Careers & Placement";
}

export interface CareerPath {
  id: string;
  title: string;
  targetRole: string;
  avgStartingSalary: string;
  duration: string;
  description: string;
  skills: string[];
  recommendedCourses: string[];
  steps: {
    phase: string;
    duration: string;
    title: string;
    description: string;
  }[];
}
