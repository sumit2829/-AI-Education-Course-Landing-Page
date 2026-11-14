"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Star, 
  Cpu, 
  Layers, 
  Code2, 
  Workflow,
  Copy,
  Check,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  BrainCircuit,
  Bot,
  Zap,
  Binary
} from "lucide-react";

interface HeroProps {
  onOpenEnroll?: () => void;
}

export function Hero({ onOpenEnroll }: HeroProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<"python" | "agent" | "rag">("python");
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const demoStats = [
    {
      value: "14,500+",
      label: "Students Enrolled",
      sublabel: "Across 48+ Universities",
      icon: Users,
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      value: "94.8%",
      label: "Career Placement",
      sublabel: "Hired within 120 Days",
      icon: TrendingUp,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      value: "4.94 / 5",
      label: "Average Rating",
      sublabel: "1,200+ Verified Reviews",
      icon: Star,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      value: "40+",
      label: "Capstone Projects",
      sublabel: "Production GitHub Portfolios",
      icon: Code2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const codeSnippets = {
    python: {
      file: "ai_model_pipeline.py",
      title: "Python & Data Science",
      code: `import torch
import pandas as pd
from transformers import pipeline

# 1. Load fine-tuned classification & reasoning pipeline
classifier = pipeline("text-classification", model="academy/llama3-sentiment")
data = pd.read_parquet("student_cohort_telemetry.parquet")

# 2. Extract inference vectors & evaluate accuracy
predictions = classifier(data["user_prompts"].tolist(), batch_size=64)
accuracy = torch.tensor([p["score"] for p in predictions]).mean().item()
print(f"✓ Model Accuracy: {accuracy:.2%} | Latency: 12ms/req")`,
      output: `✓ Model Accuracy: 98.40% | Latency: 12ms/req
↳ Evaluated 2,500 synthetic prompts with PyTorch CUDA runtime.
↳ Zero regression errors detected. All guardrails intact.`
    },
    agent: {
      file: "autonomous_swarm.py",
      title: "Agent Swarm Architecture",
      code: `from langgraph.graph import StateGraph
from mcp_client import FastMCPClient

# Autonomous multi-agent coordination loop
swarm = StateGraph(DevTeamState)
mcp = FastMCPClient("mcp://cluster.internal")

@swarm.node("engineer")
async def write_feature(state):
    tools = await mcp.discover_tools()
    patch = await claude_3_5.generate_patch(state.task, tools)
    return {"code": patch, "status": "TESTING"}`,
      output: `⚡ [LangGraph Swarm] 4 specialized agents initialized.
↳ Task: "Build semantic search endpoint with sub-50ms latency"
↳ Tests passed: 24/24 | Artifact synthesized & verified.`
    },
    rag: {
      file: "hybrid_rag_search.py",
      title: "Enterprise Hybrid RAG",
      code: `import qdrant_client
from cohere import Client as Cohere

qdrant = qdrant_client.QdrantClient(host="cloud.qdrant.io")
cohere = Cohere(api_key=API_KEY)

# Stage 1: Reciprocal Rank Fusion (BM25 + Dense)
matches = qdrant.hybrid_search("vector_docs", query=prompt, limit=25)
# Stage 2: Cross-Encoder Reranking
reranked = cohere.rerank(query=prompt, documents=matches, top_n=3)`,
      output: `🔍 Hybrid RAG Query: "Explain FP8 quantization on H100 GPUs"
↳ BM25 Keyword Search: 25 documents matched (8ms)
↳ Dense Cosine Embeddings: 25 vectors matched (14ms)
↳ Cohere Cross-Encoder Reranking: Top 3 passages extracted (score 0.992)
✓ Verified Grounded Context delivered to generation model.`
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 500);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-mesh-gradient bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-violet-400/15 via-blue-400/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, CTAs, Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Announcement Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-violet-200/80 shadow-soft"
            >
              <span className="flex h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
              <span className="text-xs font-bold text-navy-950 flex items-center gap-1.5">
                <span>🚀 Cohort 6 Spring 2026 Admissions</span>
                <span className="text-slate-300">•</span>
                <span className="text-violet-700 font-semibold">40% Student Scholar Discount</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight leading-[1.12]">
              Build Your Future with <br />
              <span className="gradient-text">AI &amp; Digital Skills</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Learn practical AI, Python, Data Science and emerging technologies through hands-on projects and industry-focused programmes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button 
                size="lg" 
                onClick={onOpenEnroll}
                className="shadow-lg shadow-violet-500/25 group font-bold text-sm px-7"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a href="#courses" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full sm:w-auto font-bold text-sm px-6 border-slate-200 hover:border-violet-300"
                >
                  <BookOpen className="w-4 h-4 mr-2 text-brand-purple" />
                  <span>Explore Courses</span>
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 space-y-3">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>1-on-1 FAANG Code Reviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>$300 Cloud GPU Credits Included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>14-Day 100% Refund Guarantee</span>
                </div>
              </div>

              {/* Hiring Logos Preview */}
              <div className="pt-2">
                <p className="text-3xs uppercase tracking-wider font-extrabold text-slate-600 mb-2">
                  Alumni hired by forward-thinking engineering teams:
                </p>
                <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-bold text-slate-600">
                  <span className="hover:text-navy-900 transition-colors">OpenAI</span>
                  <span>•</span>
                  <span className="hover:text-navy-900 transition-colors">Google DeepMind</span>
                  <span>•</span>
                  <span className="hover:text-navy-900 transition-colors">Meta AI</span>
                  <span>•</span>
                  <span className="hover:text-navy-900 transition-colors">Microsoft</span>
                  <span>•</span>
                  <span className="hover:text-navy-900 transition-colors">Anthropic</span>
                  <span>•</span>
                  <span className="hover:text-navy-900 transition-colors">Stripe</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Attractive AI / Technology Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background glowing halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-blue-500/15 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Floating Top Badge 1: Python & Data Science */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-violet-100 shadow-elevated flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
                <Binary className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-2xs font-extrabold text-navy-950 block">Python &amp; PyTorch</span>
                <span className="text-3xs text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Lab Active
                </span>
              </div>
            </motion.div>

            {/* Floating Bottom Badge 2: Career Placement */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -right-3 sm:-right-5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-blue-100 shadow-elevated flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-2xs font-extrabold text-navy-950 block">94.8% Placement</span>
                <span className="text-3xs text-slate-500 font-medium">Top AI Roles in 120 Days</span>
              </div>
            </motion.div>

            {/* Central Interactive Technology Workstation */}
            <div className="bg-navy-950 rounded-3xl border border-slate-700/70 shadow-2xl overflow-hidden p-1">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-navy-900 border-b border-navy-800 flex items-center justify-between rounded-t-[22px]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-3xs font-mono text-slate-400 ml-2 hidden sm:inline">
                    ~/ai-skills-academy/{codeSnippets[activeCodeTab].file}
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex bg-navy-950 p-0.5 rounded-lg border border-navy-800 text-3xs font-semibold">
                  <button
                    onClick={() => { setActiveCodeTab("python"); setShowOutput(false); }}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeCodeTab === "python" ? "bg-violet-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => { setActiveCodeTab("agent"); setShowOutput(false); }}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeCodeTab === "agent" ? "bg-violet-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Agents
                  </button>
                  <button
                    onClick={() => { setActiveCodeTab("rag"); setShowOutput(false); }}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeCodeTab === "rag" ? "bg-violet-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    RAG
                  </button>
                </div>

                <Button
                  size="sm"
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="h-7 px-2.5 text-3xs bg-emerald-500 hover:bg-emerald-600 text-white font-bold"
                >
                  <Play className={`w-3 h-3 mr-1 fill-current ${isRunning ? "animate-spin" : ""}`} />
                  {isRunning ? "Running..." : "Run"}
                </Button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 bg-[#080E1B] overflow-x-auto leading-relaxed">
                <pre>
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>

              {/* Console Output Strip */}
              <div className="px-4 py-3 bg-navy-950 border-t border-navy-800/90 text-3xs font-mono">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    GPU Telemetry Console
                  </span>
                  <span>PyTorch 2.5 • CUDA 12.4</span>
                </div>
                <div className="text-emerald-400 bg-navy-900/60 p-2.5 rounded-xl border border-navy-800 min-h-[46px] flex items-center">
                  {isRunning ? (
                    <span className="text-violet-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
                      Allocating GPU tensors &amp; streaming token output...
                    </span>
                  ) : showOutput ? (
                    codeSnippets[activeCodeTab].output
                  ) : (
                    <span className="text-slate-500 italic">
                      Click &ldquo;Run&rdquo; to execute this practical AI script...
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Student Learning Statistics Bar (Demo Figures) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 pt-10 border-t border-slate-200/80"
        >
          <div className="text-center mb-6">
            <span className="text-2xs uppercase tracking-widest font-extrabold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Student Learning Statistics • Verified Demo Metrics
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {demoStats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-soft hover:shadow-md hover:border-violet-200 transition-all flex items-start gap-3.5 group"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${st.bg} ${st.color} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-navy-950 tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-xs font-bold text-navy-900">
                      {st.label}
                    </div>
                    <div className="text-3xs text-slate-500 font-medium">
                      {st.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
