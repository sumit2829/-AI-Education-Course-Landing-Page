/**
 * Course Registration & Enquiry Submission Service
 * 
 * Structured to support mock submissions in development, with an easy drop-in
 * transition to an actual REST API or database endpoint (e.g. Next.js Route Handler / Supabase / Postgres).
 */

export interface RegistrationFormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  educationProfession: string;
  courseInterestedIn: string;
  preferredLearningMode: string;
  message?: string;
  consent: boolean;
}

export interface RegistrationResponse {
  success: boolean;
  registrationId: string;
  message: string;
  timestamp: string;
  details: {
    studentName: string;
    course: string;
    learningMode: string;
  };
}

/**
 * Submits the registration form data.
 * Currently uses an asynchronous mock service that simulates network latency and returns a generated registration ID.
 */
export async function submitCourseRegistration(
  data: RegistrationFormData
): Promise<RegistrationResponse> {
  // Simulate network request latency (1.2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // In production, connect directly to backend:
  // const res = await fetch("/api/registrations", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Failed to submit registration");
  // return await res.json();

  const generatedId = `ASA-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    success: true,
    registrationId: generatedId,
    message: "Your course registration and enquiry has been recorded successfully.",
    timestamp: new Date().toISOString(),
    details: {
      studentName: data.fullName,
      course: data.courseInterestedIn,
      learningMode: data.preferredLearningMode,
    },
  };
}
