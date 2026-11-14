import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProviders } from "@/components/layout/AppProviders";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AI Skills Academy | Applied AI Engineering for College Students & Young Pros",
  description:
    "Master Generative AI, Autonomous Agent Swarms, LLM Orchestration, and Production MLOps. Build production portfolios with 1-on-1 FAANG mentor reviews and a 40% college student discount.",
  keywords: [
    "AI Education",
    "Generative AI Course",
    "LangChain",
    "Autonomous Agents",
    "LLM Engineering",
    "MLOps",
    "Vector Databases",
    "Student AI Discount",
    "Tech Career Accelerator",
  ],
  authors: [{ name: "AI Skills Academy" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-[#FAFBFC] text-navy-900 selection:bg-violet-600/15 selection:text-violet-700">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
