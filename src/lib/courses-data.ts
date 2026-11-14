import { Course, StudentProject, Testimonial, FAQItem, CareerPath } from "@/types";

export const SAMPLE_COURSES: Course[] = [
  {
    id: "genai-llm-systems",
    slug: "genai-llm-systems",
    title: "Generative AI & LLM Systems Engineering",
    subtitle: "Architect enterprise RAG pipelines, fine-tune open-weights models, and build production LLM backends.",
    description: "An intensive hands-on engineering program designed to transition developers and CS graduates into production GenAI engineers. You will build resilient semantic search engines, multi-stage retrieval pipelines with rerankers, hybrid sparse-dense indexes, and deploy local inference microservices.",
    level: "Intermediate",
    category: "Generative AI",
    duration: "10 Weeks",
    weeklyCommitment: "8-10 hrs/week",
    rating: 4.96,
    reviewCount: 428,
    studentsEnrolled: 3120,
    badge: "Most Popular",
    price: 599,
    originalPrice: 999,
    studentPrice: 359,
    nextCohortDate: "Starts April 15, 2026",
    technologies: ["LangChain", "LlamaIndex", "Pinecone", "Qdrant", "Hugging Face", "DSPy", "FastAPI", "vLLM"],
    keyHighlights: [
      "Production-grade Hybrid RAG with Cohere Rerank",
      "Fine-tuning Llama-3.3 70B & Mistral with QLoRA & Unsloth",
      "Evaluation & Observability with Langfuse and Ragas",
      "4 Production Portfolio Projects pushed to GitHub",
      "1-on-1 Code Reviews from Meta & OpenAI AI Engineers"
    ],
    instructor: {
      id: "dr-alex-chen",
      name: "Dr. Alexander Chen",
      role: "Ex-Staff AI Engineer",
      company: "Anthropic / DeepMind Alumni",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      bio: "Former Research Engineer at DeepMind and Staff ML Engineer at scale-up labs. Has trained dozens of production foundation model pipelines serving 10M+ daily requests.",
      previousCompany: "DeepMind"
    },
    prerequisites: [
      "Proficiency in Python (functions, async, OOP)",
      "Basic understanding of APIs & HTTP requests",
      "Familiarity with Linear Algebra & basic ML concepts helpful but not strictly required"
    ],
    capstoneProject: {
      title: "OmniSearch: Enterprise Multimodal Knowledge Retrieval Engine",
      description: "Build a production RAG system that ingests PDFs, charts, audio, and GitHub repos. Implements semantic chunking, reciprocal rank fusion (RRF), and real-time hallucination guardrails with streaming UI.",
      deliverables: [
        "Fully deployed FastAPI backend on Docker & AWS",
        "Vector search engine benchmarked for latency <120ms",
        "Automated evaluation pipeline reporting faithfulness & answer relevancy"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "Foundations of Modern LLMs & API Orchestration",
        description: "Deconstruct transformer architectures, tokenization mechanics, attention maps, context window optimization, and structured JSON outputs with Pydantic.",
        topics: ["Attention Mechanisms Decoded", "OpenAI / Claude / Gemini API Mastery", "Structured Outputs & Function Calling", "Rate Limiting & Fallback Architectures"],
        projectTitle: "Resilient Multi-Provider LLM Gateway with Fallbacks",
        estimatedHours: 8
      },
      {
        week: 2,
        title: "Advanced Vector Embeddings & Hybrid Retrieval",
        description: "Deep dive into embedding spaces, dense vs sparse search (BM25), reciprocal rank fusion, and managing vector databases at scale.",
        topics: ["Sentence Transformers & Matryoshka Embeddings", "Pinecone & Qdrant Deep Dive", "BM25 + Dense Hybrid Search", "Semantic Caching with Redis"],
        projectTitle: "Sub-50ms Hybrid Semantic Search Service",
        estimatedHours: 9
      },
      {
        week: 3,
        title: "Production RAG Architecture & Context Engineering",
        description: "Move beyond naive RAG. Master recursive character chunking, document hierarchy extraction, parent-child retrievers, and cross-encoder rerankers.",
        topics: ["Semantic Document Chunking", "Hypothetical Document Embeddings (HyDE)", "Cross-Encoder Reranking with Cohere", "GraphRAG & Knowledge Graph Integrations"],
        projectTitle: "Financial Document Analyzer with Zero Hallucination",
        estimatedHours: 10
      },
      {
        week: 4,
        title: "DSPy & Algorithmic Prompt Optimization",
        description: "Stop manual prompt engineering. Learn how to program LLMs using DSPy compilers, teleprompters, and declarative signature pipelines.",
        topics: ["DSPy Signatures & Modules", "BootstrapFewShot & MIPRO Optimizers", "Assertion-driven Error Correction", "Prompt Metric Engineering"],
        projectTitle: "Self-Optimizing Question-Answering Pipeline",
        estimatedHours: 9
      },
      {
        week: 5,
        title: "LLM Fine-Tuning with QLoRA & Parameter-Efficient Tuning",
        description: "Dataset curation, synthetic data generation with LLM judges, 4-bit quantization, and fine-tuning on consumer GPUs using Unsloth & Axolotl.",
        topics: ["Dataset Synthesis & Filtering", "LoRA / QLoRA Mathematical Intuition", "Hyperparameter Tuning for SFT", "Model Merging & GGUF Export"],
        projectTitle: "Domain-Specific Legal & Medical Assistant Fine-Tune",
        estimatedHours: 11
      },
      {
        week: 6,
        title: "Local Inference, Quantization & vLLM High-Throughput Serving",
        description: "Self-hosting models with vLLM, PagedAttention, TensorRT-LLM, continuous batching, and deploying on GPU cloud instances.",
        topics: ["PagedAttention & KV Cache Memory", "AWQ & FP8 Quantization", "vLLM Production Deployment", "Cost & Latency Benchmarking"],
        projectTitle: "Production Private Inference API with Streaming",
        estimatedHours: 10
      },
      {
        week: 7,
        title: "RAG Evaluation, Guardrails & LLM Red Teaming",
        description: "Implementing automated CI/CD evaluation pipelines using Ragas, DeepEval, and NeMo Guardrails to stop jailbreaks and data leakage.",
        topics: ["RAG Triad Metrics (Faithfulness, Relevancy, Recall)", "Automated Synthetic Test Set Generation", "Llama-Guard & Constitutional AI Safety", "CI/CD Evaluation Gates in GitHub Actions"],
        projectTitle: "Automated AI Security & Regression Test Harness",
        estimatedHours: 8
      },
      {
        week: 8,
        title: "Capstone Development, Mentorship & Portfolio Launch",
        description: "Finalize and benchmark your flagship portfolio capstone. Complete rigorous peer review and 1-on-1 mentor code audits.",
        topics: ["Architecture Review Sessions", "Performance Profiling & Stress Testing", "Production Cloud Deployment", "Technical Resume & Case Study Writeup"],
        projectTitle: "Enterprise OmniSearch Capstone Defense",
        estimatedHours: 12
      }
    ],
    careerOutcomes: [
      "AI Engineer ($120k - $165k)",
      "LLM Application Engineer ($115k - $155k)",
      "Applied Generative AI Specialist ($125k - $170k)"
    ]
  },
  {
    id: "autonomous-ai-agents",
    slug: "autonomous-ai-agents",
    title: "Autonomous AI Agents & Multi-Agent Swarms",
    subtitle: "Design autonomous cognitive loops, multi-agent collaboration swarms, and tool-augmented workflows.",
    description: "The breakthrough discipline of 2026: building software that doesn't just chat, but takes action. Master LangGraph, CrewAI, AutoGen, hierarchical task delegation, deterministic execution graphs, human-in-the-loop approvals, and external environment APIs.",
    level: "Advanced",
    category: "Artificial Intelligence",
    duration: "8 Weeks",
    weeklyCommitment: "8-10 hrs/week",
    rating: 4.98,
    reviewCount: 310,
    studentsEnrolled: 1840,
    badge: "Trending 2026",
    price: 649,
    originalPrice: 1099,
    studentPrice: 389,
    nextCohortDate: "Starts April 22, 2026",
    technologies: ["LangGraph", "CrewAI", "AutoGen", "Model Context Protocol (MCP)", "Docker", "Redis", "Temporal"],
    keyHighlights: [
      "State-Machine Agentic Architectures with LangGraph",
      "Model Context Protocol (MCP) Server & Client Implementations",
      "Multi-Agent Swarm Orchestration with Hierarchical Roles",
      "Fault-Tolerant Distributed Workflows with Temporal",
      "Live Student Hackathon with $5,000 in Grants"
    ],
    instructor: {
      id: "maya-patel",
      name: "Maya Patel",
      role: "Lead Agent Architect",
      company: "Cognitive AI Labs",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      bio: "Pioneer in multi-agent autonomous systems. Former Stanford AI Researcher and creator of popular open-source agent execution runtimes.",
      previousCompany: "Stanford AI Lab"
    },
    prerequisites: [
      "Strong Python fundamentals & Async IO",
      "Experience with REST APIs and stateful data structures",
      "Familiarity with basic LLM prompting concepts"
    ],
    capstoneProject: {
      title: "DevSprint: Autonomous AI Software Engineering Squad",
      description: "Build a swarm of specialized agents (Product Owner, Architect, Coder, Tester, Security Reviewer) that ingests a GitHub issue, writes unit tests, writes code, creates a PR, and iterates until CI passes.",
      deliverables: [
        "LangGraph state machine with deterministic cyclic control flow",
        "Sandbox execution container with git integration",
        "Interactive dashboard for human review and steering"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "ReAct, Tool Calling & The Cognitive Architecture",
        description: "Deconstruct reasoning loops, plan-and-solve paradigms, reflection mechanisms, and structured execution sandboxes.",
        topics: ["ReAct (Reasoning + Acting) Internals", "Parallel Tool Calling & Schema Generation", "Sandboxed Execution with E2B & Docker", "Memory Buffers & Persistent Checkpoints"],
        projectTitle: "Browser-Controlling Web Research Agent",
        estimatedHours: 8
      },
      {
        week: 2,
        title: "LangGraph: Cyclic Graphs & Stateful Agentic Control",
        description: "Build predictable, robust agents using LangGraph state channels, branching logic, conditional edges, and checkpointed rollbacks.",
        topics: ["Graph State Design & Reducers", "Conditional Edges & Dynamic Routing", "Human-in-the-Loop Interrupts & Approvals", "Time-Travel Debugging for Agent Cycles"],
        projectTitle: "Self-Correcting Data Analysis Agent with Matplotlib",
        estimatedHours: 9
      },
      {
        week: 3,
        title: "Model Context Protocol (MCP) & Universal Tooling",
        description: "Implement Anthropic's Model Context Protocol. Build custom MCP servers that safely expose databases, local tools, and enterprise APIs to agents.",
        topics: ["MCP Architecture & Protocol Spec", "Building Custom MCP FastMCP Servers", "Client Protocol Handshakes & Security", "Zero-Trust Agent Authorization Patterns"],
        projectTitle: "PostgreSQL & Slack Enterprise MCP Connector Suite",
        estimatedHours: 8
      },
      {
        week: 4,
        title: "Multi-Agent Collaboration: CrewAI & AutoGen",
        description: "Architect hierarchical agent organizations with designated roles, delegation protocols, memory sharing, and consensus mechanisms.",
        topics: ["Hierarchical vs Sequential Swarms", "CrewAI Processes & Custom Tools", "AutoGen Conversational Multi-Agent Patterns", "Conflict Resolution & Consensus Voting"],
        projectTitle: "Automated Competitive Market Intelligence Swarm",
        estimatedHours: 10
      },
      {
        week: 5,
        title: "Resilience, Long-Running Workflows & Temporal Integration",
        description: "Ensure agents can run for hours or days without dropping state. Integrate Temporal or Inngest for durable execution and retry semantics.",
        topics: ["Durable Execution Systems", "Temporal Workflows & Activity Retries", "Rate Limit Backoffs & Token Budgets", "Agent Deadlock Detection"],
        projectTitle: "Autonomous Overnight Codebase Refactoring System",
        estimatedHours: 9
      },
      {
        week: 6,
        title: "Agent Observability, Tracing & Evaluation",
        description: "Track execution traces, token consumption, intermediate tool outputs, and evaluate task completion accuracy at scale.",
        topics: ["OpenTelemetry & LangSmith Tracing", "Agent Trajectory Evaluation", "Cost Attribution & Bottleneck Analysis", "Safety Red Teaming for Agent Tool Actions"],
        projectTitle: "Agent Observability & Automated Benchmarking Suite",
        estimatedHours: 8
      },
      {
        week: 7,
        title: "Capstone Build: Autonomous Engineering Team",
        description: "Integrate multi-agent collaboration, MCP tools, and human oversight into your flagship capstone system.",
        topics: ["Full Architecture Assembly", "Handling Tool Failure Edge Cases", "UI/UX for Autonomous Agents", "Peer Code Reviews"],
        projectTitle: "DevSprint AI Engineering Squad MVP",
        estimatedHours: 12
      },
      {
        week: 8,
        title: "Capstone Launch, Demos & Hiring Day",
        description: "Present your autonomous agent system to partner engineering managers and founders from top AI startups.",
        topics: ["Live Demonstration Protocols", "Portfolio Presentation & Architecture Diagrams", "Technical Interview Prep for Agent Roles", "Hiring Network Introductions"],
        projectTitle: "Live Capstone Demo Day & Portfolio Audit",
        estimatedHours: 8
      }
    ],
    careerOutcomes: [
      "Autonomous Systems Engineer ($130k - $175k)",
      "Agentic AI Architect ($135k - $180k)",
      "Senior AI Automation Specialist ($120k - $160k)"
    ]
  },
  {
    id: "fullstack-ai-engineering",
    slug: "fullstack-ai-engineering",
    title: "Full-Stack AI Application Development",
    subtitle: "Build modern, responsive AI applications with Next.js 15, Vercel AI SDK, FastAPI, and WebSocket streaming.",
    description: "Ideal for web developers and CS graduates wanting to dominate the modern AI app layer. Learn streaming UX, optimistic UI, canvas interfaces, voice-enabled interaction, vector caching, and fullstack cloud deployment.",
    level: "All Levels",
    category: "Web Development",
    duration: "8 Weeks",
    weeklyCommitment: "6-8 hrs/week",
    rating: 4.94,
    reviewCount: 512,
    studentsEnrolled: 4200,
    badge: "Student Favorite",
    price: 499,
    originalPrice: 899,
    studentPrice: 299,
    nextCohortDate: "Starts April 8, 2026",
    technologies: ["Next.js 15", "TypeScript", "Vercel AI SDK", "Tailwind CSS", "FastAPI", "Supabase", "pgvector"],
    keyHighlights: [
      "Server-Sent Events (SSE) & Real-time Streaming UI",
      "Interactive Artifacts / Canvas UI (like Claude Artifacts)",
      "Postgres Vector Storage with Supabase & Prisma",
      "Auth, Rate Limiting & Stripe Subscription AI Billing",
      "Host 3 Production SaaS Applications on Custom Domains"
    ],
    instructor: {
      id: "sarah-jenkins",
      name: "Sarah Jenkins",
      role: "Principal Frontend Architect",
      company: "Vercel Alumni & Founder",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      bio: "Built AI interfaces scaled to 5M monthly active users. Frequent speaker at Next.js Conf and author of popular UI state libraries.",
      previousCompany: "Vercel"
    },
    prerequisites: [
      "Basic JavaScript / TypeScript fundamentals",
      "Familiarity with React components and modern CSS",
      "No prior AI / ML background required"
    ],
    capstoneProject: {
      title: "FlowMind: Collaborative AI Canvas with Live Code Execution",
      description: "Build an interactive, real-time AI canvas app that generates and renders live React widgets, charts, and diagrams with streaming generative UI and markdown.",
      deliverables: [
        "Full-stack Next.js 15 App Router application with Tailwind CSS",
        "Server actions with streaming responses and optimistic updates",
        "User authentication, project saving, and export to PDF/GitHub"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "Modern Fullstack AI Stack & Vercel AI SDK 4.0",
        description: "Set up Next.js 15 App Router, streaming text protocols, useChat and useCompletion hooks, and generative UI rendering.",
        topics: ["Next.js 15 Server Components & Actions", "Vercel AI SDK Core & React Hooks", "Stream Data & Tool Invocations in UI", "Custom Markdown & Syntax Highlighting"],
        projectTitle: "Perplexity-style AI Search Engine with Citations",
        estimatedHours: 7
      },
      {
        week: 2,
        title: "Generative UI & Dynamic React Component Synthesis",
        description: "Render rich visual UI widgets (charts, forms, buttons) directly from LLM streaming outputs safely.",
        topics: ["AI SDK Generative UI Patterns", "Safe Code Execution in iFrames", "Dynamic Chart & Graph Generation", "Tailwind UI Streaming Skeletons"],
        projectTitle: "AI Financial Analyst with Interactive Recharts",
        estimatedHours: 8
      },
      {
        week: 3,
        title: "Database Engineering with Postgres & pgvector",
        description: "Store documents, metadata, and embeddings in Supabase and PostgreSQL with efficient cosine distance queries.",
        topics: ["Supabase pgvector Setup & HNSW Indexes", "Hybrid SQL + Vector Queries with Prisma", "Row-Level Security (RLS) for Vector Stores", "Efficient Chunk Management"],
        projectTitle: "Multi-Tenant Document Q&A SaaS Backend",
        estimatedHours: 8
      },
      {
        week: 4,
        title: "Multi-Modal AI: Audio, Vision & Realtime APIs",
        description: "Integrate OpenAI Realtime WebSocket API, Whisper speech-to-text, ElevenLabs voice cloning, and image analysis.",
        topics: ["OpenAI Realtime WebRTC & WebSocket", "Voice Activity Detection (VAD)", "Vision Models for Document OCR", "Low-Latency Audio Streaming"],
        projectTitle: "Real-time Voice AI Interview Coach",
        estimatedHours: 9
      },
      {
        week: 5,
        title: "AI Auth, Rate Limiting & Monetization Billing",
        description: "Implement token metering, Clerk authentication, Stripe customer portals, and Redis rate limiters.",
        topics: ["Clerk / NextAuth v5 Setup", "Token Credit Metering with Upstash Redis", "Stripe Checkout & Webhook Handling", "Usage-Based AI Pricing Architecture"],
        projectTitle: "Monetized AI Micro-SaaS with Tiered Quotas",
        estimatedHours: 8
      },
      {
        week: 6,
        title: "FastAPI Microservices for Heavy Compute",
        description: "Bridge Python ML backends with Next.js frontends via authenticated asynchronous APIs.",
        topics: ["FastAPI Async Endpoints & Pydantic V2", "Background Worker Queues with Celery & Redis", "SSE Streaming from Python to Next.js", "Dockerizing Python AI Services"],
        projectTitle: "Hybrid Next.js + FastAPI AI Document Redactor",
        estimatedHours: 9
      },
      {
        week: 7,
        title: "Capstone: Collaborative FlowMind Canvas",
        description: "Build and deploy the interactive multi-modal canvas app with live multi-user collaboration.",
        topics: ["Liveblocks / Yjs Realtime Collaboration", "Canvas Drag-and-Drop Architecture", "Polishing UI Motion with Framer Motion", "Error Boundaries & Edge Cases"],
        projectTitle: "FlowMind Canvas Production Build",
        estimatedHours: 10
      },
      {
        week: 8,
        title: "Deployment, CI/CD, Domain Setup & Portfolio Review",
        description: "Deploy to Vercel and Railway, configure custom domains, set up automated tests, and launch publicly.",
        topics: ["Edge Middleware & Caching Strategies", "Lighthouse Performance & SEO Optimization", "Product Hunt & Twitter Launch Strategy", "Portfolio & Resume Showcase"],
        projectTitle: "Public Launch & Final Showcase",
        estimatedHours: 7
      }
    ],
    careerOutcomes: [
      "Full-Stack AI Developer ($110k - $150k)",
      "Frontend AI Engineer ($115k - $155k)",
      "AI Startup Founding Engineer ($120k - $170k + Equity)"
    ]
  },
  {
    id: "production-mlops-llmops",
    slug: "production-mlops-llmops",
    title: "Production MLOps & LLMOps at Scale",
    subtitle: "Deploy, monitor, scale, and optimize machine learning and LLM infrastructure in cloud environments.",
    description: "Bridge the gap between experimental notebook code and enterprise-grade, resilient production infrastructure. Learn Kubernetes, Ray, Triton Inference Server, continuous integration for models, and automated observability.",
    level: "Intermediate",
    category: "Cloud Computing",
    duration: "10 Weeks",
    weeklyCommitment: "8-10 hrs/week",
    rating: 4.92,
    reviewCount: 245,
    studentsEnrolled: 1650,
    badge: "High Demand",
    price: 699,
    originalPrice: 1199,
    studentPrice: 419,
    nextCohortDate: "Starts May 3, 2026",
    technologies: ["Kubernetes", "Ray", "Triton", "MLflow", "Docker", "Prometheus", "Grafana", "AWS"],
    keyHighlights: [
      "Deploy Scalable GPU Clusters on Kubernetes (EKS)",
      "Multi-Model Inference Serving with NVIDIA Triton",
      "Distributed Model Training with PyTorch FSDP & Ray",
      "Automated Drift Detection & Continuous Retraining",
      "AWS $300 Student Cloud Credits Included"
    ],
    instructor: {
      id: "marcus-vance",
      name: "Marcus Vance",
      role: "Head of Infrastructure",
      company: "Scale AI Alumni",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Built scalable ML clusters handling tens of thousands of GPUs. Advisor to enterprise platforms on cost-effective AI compute.",
      previousCompany: "Scale AI"
    },
    prerequisites: [
      "Comfortable with Linux CLI and Docker",
      "Intermediate Python knowledge",
      "Familiarity with cloud computing concepts (EC2, S3)"
    ],
    capstoneProject: {
      title: "ScaleServe: Distributed Auto-Scaling Multi-Model Inference Gateway",
      description: "Build an auto-scaling cluster on Kubernetes that dynamically routes inference requests across quantized open-source models with cold-start mitigation and Grafana telemetry.",
      deliverables: [
        "Terraform & Helm charts for automated cluster provisioning",
        "Prometheus & Grafana dashboards tracking token/sec, p99 latency, and GPU VRAM",
        "Canary deployment pipeline with automated rollback on accuracy degradation"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "Docker & Containerization for Machine Learning",
        description: "Master multi-stage Docker builds for PyTorch, CUDA driver layers, and reproducible ML environments.",
        topics: ["NVIDIA Container Toolkit", "Minimizing Image Sizes for Fast Pulls", "Reproducible Environments with Poetry", "GPU Passthrough in Containers"],
        projectTitle: "Optimized CUDA Container Image for Fast Cold Starts",
        estimatedHours: 8
      },
      {
        week: 2,
        title: "Kubernetes Fundamentals for ML Engineers",
        description: "Pods, Deployments, Services, ConfigMaps, and GPU resource scheduling on Kubernetes clusters.",
        topics: ["K8s Architecture for GPUs", "NodeSelectors & Tolerations for A100/H100 Nodes", "Horizontal Pod Autoscaler (HPA) with Custom Metrics", "Persistent Volumes for Large Checkpoints"],
        projectTitle: "Fault-Tolerant PyTorch Inference Pod on Minikube/EKS",
        estimatedHours: 9
      },
      {
        week: 3,
        title: "Model Serving with NVIDIA Triton & vLLM",
        description: "Dynamic batching, concurrent model execution, model ensembling, and high-throughput LLM serving.",
        topics: ["Triton Model Repository Architecture", "Dynamic Batching Configuration", "vLLM Integration with K8s Operator", "Inference Latency Profiling with Perf Analyzer"],
        projectTitle: "Production Multi-Model Triton Serving Cluster",
        estimatedHours: 10
      },
      {
        week: 4,
        title: "Distributed Training & Fine-Tuning with Ray & FSDP",
        description: "Scale model training across multiple GPUs and nodes using Ray Train and Fully Sharded Data Parallel (FSDP).",
        topics: ["Ray Core & Ray Train Architecture", "PyTorch Distributed Data Parallel vs FSDP", "Gradient Accumulation & Zero-Redundancy Optimizer", "Fault Tolerance During Training Runs"],
        projectTitle: "Distributed Fine-Tuning Job with Automated Checkpointing",
        estimatedHours: 10
      },
      {
        week: 5,
        title: "Experiment Tracking & Registry with MLflow",
        description: "Centralized metric logging, artifact storage, model lineage, and automated model governance.",
        topics: ["MLflow Tracking Server Architecture", "Model Registry & Transition Webhooks", "Dataset Versioning with DVC", "Automated Benchmark Verification"],
        projectTitle: "Automated CI/CD Model Promotion Pipeline",
        estimatedHours: 8
      },
      {
        week: 6,
        title: "LLMOps Observability, Metrics & Telemetry",
        description: "Monitor token throughput, time-to-first-token (TTFT), inter-token latency, GPU VRAM, and hallucination rates in real time.",
        topics: ["Prometheus Exporters for GPU Metrics", "Grafana Dashboards for LLM KPIs", "OpenTelemetry Distributed Tracing", "Alerting on P99 Spikes & Out-of-Memory Errors"],
        projectTitle: "Full-Stack Enterprise LLMOps Monitoring Dashboard",
        estimatedHours: 8
      },
      {
        week: 7,
        title: "Capstone Build: ScaleServe Kubernetes Infrastructure",
        description: "Synthesize containers, Kubernetes orchestration, telemetry, and automated testing into your capstone.",
        topics: ["Cluster Provisioning with Terraform", "Helm Chart Templating", "Load Testing with Locust", "Cost Optimization with Spot Instances"],
        projectTitle: "ScaleServe Gateway Implementation",
        estimatedHours: 11
      },
      {
        week: 8,
        title: "Defense, Cloud FinOps & Interview Mastery",
        description: "Master system design interviews for MLOps and Platform Engineering roles at top tech companies.",
        topics: ["Cloud FinOps: Slashing GPU Cloud Bills by 60%", "MLOps System Design Mock Interviews", "Architecture Presentation to Senior Engineers", "Resume Optimization"],
        projectTitle: "Capstone Presentation & MLOps System Design Defense",
        estimatedHours: 8
      }
    ],
    careerOutcomes: [
      "MLOps Engineer ($125k - $175k)",
      "AI Platform Engineer ($130k - $180k)",
      "Cloud AI Infrastructure Specialist ($120k - $165k)"
    ]
  },
  {
    id: "computer-vision-multimodal",
    slug: "computer-vision-multimodal",
    title: "Computer Vision & Multimodal Foundation Models",
    subtitle: "From YOLOv11 and Segment Anything to Vision Transformers, CLIP, and real-time edge deployment.",
    description: "Master modern visual intelligence. Build state-of-the-art vision models for real-world inspection, autonomous robotics, zero-shot segmentation, and multimodal visual question answering.",
    level: "Intermediate",
    category: "Machine Learning",
    duration: "8 Weeks",
    weeklyCommitment: "7-9 hrs/week",
    rating: 4.91,
    reviewCount: 189,
    studentsEnrolled: 1420,
    badge: "Hands-on Lab",
    price: 549,
    originalPrice: 949,
    studentPrice: 329,
    nextCohortDate: "Starts May 10, 2026",
    technologies: ["PyTorch", "YOLOv11", "Segment Anything 2 (SAM2)", "OpenCV", "TensorRT", "CLIP", "Hugging Face"],
    keyHighlights: [
      "Real-time Edge Object Detection with YOLOv11",
      "Zero-Shot Image Segmentation with Meta SAM 2",
      "Multimodal Embeddings with CLIP & Vision Transformers",
      "TensorRT Optimization for Real-time Video Streams (>60 FPS)",
      "Hardware Acceleration Labs for Raspberry Pi & Jetson"
    ],
    instructor: {
      id: "elena-rostova",
      name: "Dr. Elena Rostova",
      role: "Senior Robotics & CV Researcher",
      company: "Tesla Autopilot Alumni",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
      bio: "Specialist in real-time edge computer vision and multimodal sensor fusion. Has authored 14 CVPR/ICCV papers.",
      previousCompany: "Tesla"
    },
    prerequisites: [
      "Python programming experience",
      "Familiarity with matrix math and NumPy arrays",
      "PyTorch basics (tensors, forward passes)"
    ],
    capstoneProject: {
      title: "OmniVision: Real-Time Multimodal Video Intelligence System",
      description: "Build an edge-optimized system that processes multi-camera feeds at 60 FPS, tracks objects across cameras, segments key events, and answers natural language queries about video content.",
      deliverables: [
        "TensorRT-optimized inference pipeline running under 15ms per frame",
        "Web-based video analytics dashboard with live bounding boxes",
        "Natural language search across hours of recorded video streams"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "Modern Vision Architectures: CNNs to Vision Transformers (ViT)",
        description: "Deconstruct patch extraction, self-attention in 2D image spaces, and fine-tuning pre-trained ViTs.",
        topics: ["Convolutional vs Attention Paradigms", "Vision Transformers (ViT) Architecture", "Data Augmentation with Albumentations", "Transfer Learning in PyTorch"],
        projectTitle: "Fine-Tuned ViT for Fine-Grained Defect Classification",
        estimatedHours: 8
      },
      {
        week: 2,
        title: "Real-Time Object Detection with YOLOv11",
        description: "Train, evaluate, and optimize modern one-stage detectors on custom annotated datasets.",
        topics: ["YOLOv11 Architecture & Loss Formulations", "Dataset Labeling & Augmentation Strategies", "mAP@50 and mAP@50-95 Evaluation Metrics", "Non-Maximum Suppression (NMS) Optimization"],
        projectTitle: "Custom PPE & Safety Equipment Detection System",
        estimatedHours: 9
      },
      {
        week: 3,
        title: "Zero-Shot Foundation Segmentation: Segment Anything (SAM 2)",
        description: "Utilize Meta's SAM 2 for promptable point, box, and text-guided video segmentation.",
        topics: ["SAM 2 Image & Video Predictor APIs", "Promptable Mask Generation", "Tracking Objects Across Video Frames", "Combining Detectors with SAM 2"],
        projectTitle: "Interactive Medical Image Segmentation Tool",
        estimatedHours: 8
      },
      {
        week: 4,
        title: "Multimodal Alignment with CLIP & Vector Search",
        description: "Connect visual and text representations using contrastive language-image pre-training.",
        topics: ["CLIP Contrastive Learning Mechanics", "Zero-Shot Classification without Retraining", "Cross-Modal Image Search with Vector DBs", "Image Captioning with BLIP-2"],
        projectTitle: "Natural Language Image Search Engine",
        estimatedHours: 8
      },
      {
        week: 5,
        title: "Edge Optimization with ONNX & TensorRT",
        description: "Quantize models to INT8 and FP16 to run real-time inference on edge and embedded hardware.",
        topics: ["Exporting PyTorch Models to ONNX", "TensorRT Engine Compilation & Layer Fusion", "INT8 Post-Training Quantization (PTQ)", "Profiling GPU Memory & Compute Kernels"],
        projectTitle: "60 FPS Video Pipeline on Low-Power Hardware",
        estimatedHours: 9
      },
      {
        week: 6,
        title: "Capstone Development: OmniVision Video Intelligence",
        description: "Assemble multi-camera video ingest, real-time tracking (ByteTrack), and natural language retrieval.",
        topics: ["Multi-Object Tracking (DeepSORT / ByteTrack)", "Temporal Feature Aggregation", "WebRTC Video Ingest in Python", "Building the Analytics Dashboard"],
        projectTitle: "OmniVision System Integration",
        estimatedHours: 10
      },
      {
        week: 7,
        title: "Stress Testing & Edge Case Hardening",
        description: "Test your vision models under challenging lighting, occlusion, and network latency scenarios.",
        topics: ["Adversarial Robustness in Vision", "Handling Low-Light & Motion Blur", "Automated Visual Quality QA", "Model Documentation & Benchmarking"],
        projectTitle: "Robustness Audit & Edge Benchmark Report",
        estimatedHours: 8
      },
      {
        week: 8,
        title: "Portfolio Launch & Computer Vision Career Coaching",
        description: "Prepare CV technical interview live-coding, take-home challenge strategies, and portfolio walkthrough.",
        topics: ["CV Interview Technical Coding Patterns", "System Design for Visual Perception", "GitHub Repository Polish & Video Demos", "Alumni Networking"],
        projectTitle: "Capstone Showcase & Interview Readiness Audit",
        estimatedHours: 7
      }
    ],
    careerOutcomes: [
      "Computer Vision Engineer ($120k - $165k)",
      "Perception Systems Engineer ($125k - $170k)",
      "Applied Deep Learning Scientist ($130k - $175k)"
    ]
  },
  {
    id: "ai-prompt-engineering-governance",
    slug: "ai-prompt-engineering-governance",
    title: "AI Prompt Engineering, Red Teaming & Governance",
    subtitle: "Enterprise LLM security, jailbreak mitigation, constitutional AI, and compliance evaluation.",
    description: "Crucial for graduates entering enterprise environments. Master advanced structured prompting, few-shot optimization, safety guardrails, automated red-teaming, and EU AI Act compliance frameworks.",
    level: "Beginner",
    category: "Artificial Intelligence",
    duration: "6 Weeks",
    weeklyCommitment: "5-7 hrs/week",
    rating: 4.89,
    reviewCount: 380,
    studentsEnrolled: 2900,
    badge: "Beginner Friendly",
    price: 399,
    originalPrice: 699,
    studentPrice: 239,
    nextCohortDate: "Starts April 10, 2026",
    technologies: ["OpenAI Evals", "Garak Red Teaming", "NeMo Guardrails", "Llama-Guard", "Promptfoo", "Python"],
    keyHighlights: [
      "Automated Security Testing with Garak & Promptfoo",
      "Jailbreak Prevention & Prompt Injection Defense",
      "Constitutional AI & Alignment Principles",
      "Enterprise Governance & Compliance Audit Templates",
      "Official AI Safety & Governance Certificate"
    ],
    instructor: {
      id: "david-kim",
      name: "David Kim",
      role: "Head of AI Safety & Trust",
      company: "Ex-Google AI Ethics",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      bio: "Advises Fortune 500 enterprises on deploying safe GenAI systems without compliance or reputational risk.",
      previousCompany: "Google AI"
    },
    prerequisites: [
      "No coding background required (introductory Python covered in Week 1)",
      "Interest in AI ethics, compliance, or prompt engineering",
      "Curiosity about AI security and safety vulnerabilities"
    ],
    capstoneProject: {
      title: "Enterprise AI Trust & Safety Audit Suite",
      description: "Build an automated audit harness that stress-tests enterprise LLM endpoints for 50+ known prompt injection techniques, data extraction attacks, and bias vectors.",
      deliverables: [
        "Promptfoo evaluation matrix covering 500+ automated test cases",
        "NeMo Guardrails configuration preventing unauthorized system leaks",
        "Executive governance compliance report mapped to the EU AI Act"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "Advanced Prompt Engineering Architecture",
        description: "Zero-shot, few-shot, chain-of-thought (CoT), tree-of-thought, and self-consistency prompting strategies.",
        topics: ["System Prompt Design & Role Prompting", "Chain-of-Thought & Reasoning Traces", "Delimiters, Formatting & Schema Constraints", "Token Bias & Logit Bias Controls"],
        projectTitle: "Enterprise Structured Customer Extraction System",
        estimatedHours: 6
      },
      {
        week: 2,
        title: "Prompt Injection, Jailbreaks & Adversarial Attacks",
        description: "Understand how attackers bypass LLM constraints via direct/indirect injections, ASCII art, and encoded payloads.",
        topics: ["Direct vs Indirect Prompt Injections", "Universal Adversarial Suffixes", "Markdown & Exfiltration Attacks", "Jailbreak Taxonomies"],
        projectTitle: "Vulnerability Assessment on Commercial Chatbots",
        estimatedHours: 7
      },
      {
        week: 3,
        title: "Defensive Guardrails & Input/Output Sanitization",
        description: "Deploy real-time runtime defenses using NeMo Guardrails, regex sanitizers, and LLM verification gates.",
        topics: ["NeMo Guardrails Colang Programming", "Input Validation & Output Verification", "Llama-Guard 3 Integration", "Detecting PII & Sensitive IP Exfiltration"],
        projectTitle: "Zero-Trust Financial Chat Guardrail Architecture",
        estimatedHours: 8
      },
      {
        week: 4,
        title: "Automated AI Red Teaming with Promptfoo & Garak",
        description: "Build continuous regression testing to automatically probe models for hallucinations, bias, and vulnerabilities.",
        topics: ["Promptfoo Automated Assertions", "Garak LLM Vulnerability Scanner", "CI/CD Security Gates for LLM Deployments", "Benchmark Tracking Over Model Upgrades"],
        projectTitle: "Automated Red Teaming Test Harness in GitHub Actions",
        estimatedHours: 8
      },
      {
        week: 5,
        title: "AI Governance, Privacy & Compliance (EU AI Act & NIST)",
        description: "Navigate global AI regulations, copyright implications, data retention policies, and SOC2 requirements.",
        topics: ["EU AI Act Risk Categorization", "NIST AI Risk Management Framework", "Data Privacy & GDPR in RAG Pipelines", "Model Cards & System Documentation"],
        projectTitle: "Complete Enterprise AI Compliance Audit Dossier",
        estimatedHours: 7
      },
      {
        week: 6,
        title: "Capstone Defense & AI Governance Certification",
        description: "Deliver your security audit report and complete the Academy AI Governance certification.",
        topics: ["Presenting AI Risk to Executive Stakeholders", "AI Safety Career Pathways", "Certification Exam & Portfolio Verification", "Alumni Security Network"],
        projectTitle: "Enterprise AI Trust Suite Final Submission",
        estimatedHours: 6
      }
    ],
    careerOutcomes: [
      "AI Safety & Governance Analyst ($95k - $135k)",
      "Prompt Engineer & LLM Evaluator ($90k - $130k)",
      "AI Compliance Specialist ($105k - $145k)"
    ]
  },
  {
    id: "python-ai-high-performance",
    slug: "python-ai-high-performance",
    title: "Python Programming for AI & High-Performance Systems",
    subtitle: "From advanced OOP and asynchronous concurrency to NumPy vectorization, PyTorch CUDA kernels, and memory optimization.",
    description: "Built for college students and developers transitioning to AI engineering. Deep dive into the language mechanics behind production ML runtimes: AsyncIO pipelines, memory profiling, C-extensions, Cython, and vector-accelerated compute.",
    level: "All Levels",
    category: "Python Programming",
    duration: "8 Weeks",
    weeklyCommitment: "6-8 hrs/week",
    rating: 4.95,
    reviewCount: 360,
    studentsEnrolled: 3890,
    badge: "Core Foundation",
    price: 449,
    originalPrice: 799,
    studentPrice: 269,
    nextCohortDate: "Starts April 18, 2026",
    technologies: ["Python 3.12", "NumPy", "AsyncIO", "PyTorch", "Numba", "Poetry", "Profiling", "FastAPI"],
    keyHighlights: [
      "Master Python Concurrency with AsyncIO & Multiprocessing",
      "Vectorized Numerical Acceleration with NumPy & Numba",
      "Memory Profiling & C-extension Interoperability",
      "Production Packaging, Type Hints & Automated Testing",
      "Build a High-Concurrency Custom Vector Storage Engine"
    ],
    instructor: {
      id: "dr-alex-chen",
      name: "Dr. Alexander Chen",
      role: "Ex-Staff AI Engineer",
      company: "Anthropic / DeepMind Alumni",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      bio: "Former Research Engineer at DeepMind and Staff ML Engineer at scale-up labs.",
      previousCompany: "DeepMind"
    },
    prerequisites: [
      "Basic programming experience in any language (Python, C++, Java, or JS)",
      "Desire to write production-grade, fast, vectorized code"
    ],
    capstoneProject: {
      title: "PyVector: High-Throughput Embedded Vector Database Engine",
      description: "Build an in-memory embedded vector similarity engine in pure Python + NumPy with HNSW indexing, concurrent batch queries, and memory-mapped persistence.",
      deliverables: [
        "Concurrent Python vector index handling 10,000 QPS",
        "Comprehensive pytest test suite with 98% coverage",
        "Automated benchmark harness comparing speeds against Faiss"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "Python 3.12 Internals & Advanced Data Models",
        description: "Dunder methods, descriptors, metamodels, generator pipelines, and zero-copy byte buffers.",
        topics: ["Python Memory Model & Ref Counting", "Generators & Itertools at Scale", "Custom Decorators & Metaclasses", "TypeVar, Generic Protocols & Mypy"],
        projectTitle: "Zero-Copy Data Stream Processor",
        estimatedHours: 8
      },
      {
        week: 2,
        title: "Asynchronous Concurrency & Event Loops (AsyncIO)",
        description: "Build high-throughput I/O pipelines that query dozens of AI models and web APIs concurrently.",
        topics: ["Event Loop Mechanics & Coroutines", "TaskGroups, Semaphores & Rate Limiters", "Async Context Managers & HTTP Clients", "Thread & Process Pool Executors"],
        projectTitle: "Distributed Async Model Batch Ingestion Client",
        estimatedHours: 8
      },
      {
        week: 3,
        title: "Vectorized Scientific Computing with NumPy & Numba",
        description: "Eliminate slow Python loops using SIMD instructions, broadcasting, and JIT compilation.",
        topics: ["Memory Layouts: C-contiguous vs Fortran", "Strides, Slicing & Views without Copying", "Vectorized Matrix Arithmetic", "Numba JIT Accelerated GPU Kernels"],
        projectTitle: "Sub-Millisecond Cosine Similarity Engine",
        estimatedHours: 9
      },
      {
        week: 4,
        title: "Packaging, Testing & Production CI/CD",
        description: "Enterprise software engineering standards: Poetry, Ruff linting, Pytest fixtures, and GitHub Actions.",
        topics: ["Modern Poetry & Pyproject.toml", "Pytest Parameterization & Mocks", "Automated GitHub Actions CI Matrix", "Building Binary Wheels for PyPI"],
        projectTitle: "Published Open-Source Python Package",
        estimatedHours: 8
      }
    ],
    careerOutcomes: [
      "Python AI Engineer ($115k - $155k)",
      "High-Performance Python Developer ($120k - $160k)",
      "Backend ML Systems Developer ($110k - $150k)"
    ]
  },
  {
    id: "data-science-statistical-modeling",
    slug: "data-science-statistical-modeling",
    title: "Modern Data Science, Statistical Modeling & Big Data Analytics",
    subtitle: "From exploratory data analysis and Bayesian modeling to Polars, DuckDB, Apache Arrow, and predictive ML.",
    description: "Learn how modern enterprise data science is practiced in 2026. Transition from slow Pandas to blazingly fast Polars and DuckDB, master causal inference, predictive feature engineering, and automated dashboards.",
    level: "Intermediate",
    category: "Data Science",
    duration: "8 Weeks",
    weeklyCommitment: "7-9 hrs/week",
    rating: 4.93,
    reviewCount: 295,
    studentsEnrolled: 2450,
    badge: "High Growth",
    price: 499,
    originalPrice: 899,
    studentPrice: 299,
    nextCohortDate: "Starts April 25, 2026",
    technologies: ["Polars", "DuckDB", "Apache Arrow", "Scikit-Learn", "XGBoost", "Streamlit", "SQL", "Plotly"],
    keyHighlights: [
      "Process 100M+ Rows on Laptop with Polars & DuckDB",
      "Bayesian Statistics, A/B Testing & Causal Inference",
      "Predictive Modeling with XGBoost & LightGBM",
      "Interactive Real-Time Analytical Web Dashboards",
      "Production Data Pipeline Hosted on AWS"
    ],
    instructor: {
      id: "maya-patel",
      name: "Maya Patel",
      role: "Lead Agent Architect",
      company: "Cognitive AI Labs",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      bio: "Pioneer in data science and algorithmic inference. Former Stanford AI Researcher.",
      previousCompany: "Stanford AI Lab"
    },
    prerequisites: [
      "Basic Python knowledge (variables, loops, lists)",
      "High school mathematics or introductory statistics"
    ],
    capstoneProject: {
      title: "OmniPulse: Real-Time Big Data Analytics & Forecasting Suite",
      description: "Analyze 20GB of real-world financial transaction logs using DuckDB and Polars, build predictive churn and fraud models, and deploy an interactive Streamlit dashboard.",
      deliverables: [
        "Blazingly fast DuckDB + Parquet querying pipeline",
        "Tuned XGBoost predictive classifier with SHAP explainability",
        "Publicly deployed cloud analytics dashboard"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "Next-Gen Data Wrangling with Polars & DuckDB",
        description: "Replace slow Pandas with modern vectorized columnar engines operating in parallel.",
        topics: ["Polars LazyFrame & Query Optimization", "DuckDB In-Process Analytical SQL", "Apache Arrow In-Memory Format", "Reading Terabyte Parquet Partitions"],
        projectTitle: "10-Million Row Analytical Ingestion Engine",
        estimatedHours: 8
      },
      {
        week: 2,
        title: "Statistical Modeling, Hypothesis Testing & A/B Experiments",
        description: "Master rigorous experiment design, statistical power, p-values, bootstrap confidence intervals, and Bayesian estimation.",
        topics: ["Null Hypothesis Significance Testing", "Sample Size & Minimum Detectable Effect", "Bootstrapping & Non-parametric Tests", "Bayesian A/B Testing with PyMC"],
        projectTitle: "Enterprise Conversion Rate A/B Test Engine",
        estimatedHours: 8
      },
      {
        week: 3,
        title: "Supervised & Unsupervised Machine Learning",
        description: "Feature engineering pipelines, Scikit-Learn estimators, XGBoost gradient boosting, and cross-validation strategies.",
        topics: ["Feature Scaling & Target Encoding", "XGBoost, LightGBM & CatBoost", "Hyperparameter Tuning with Optuna", "SHAP Feature Importance & Interpretability"],
        projectTitle: "Customer Lifetime Value Prediction Model",
        estimatedHours: 9
      },
      {
        week: 4,
        title: "Deploying Interactive Data Applications",
        description: "Build clean, professional executive dashboards with Streamlit, Plotly, and cloud hosting.",
        topics: ["Streamlit Session State & Caching", "Interactive Plotly Visualizations", "Fast Data Export to Excel & PDF", "Continuous Deployment to Cloud"],
        projectTitle: "OmniPulse Executive Predictive Dashboard",
        estimatedHours: 8
      }
    ],
    careerOutcomes: [
      "Data Scientist ($115k - $160k)",
      "Quantitative Data Analyst ($100k - $145k)",
      "Machine Learning Analyst ($110k - $150k)"
    ]
  },
  {
    id: "ai-digital-marketing-growth",
    slug: "ai-digital-marketing-growth",
    title: "AI-Driven Digital Marketing, SEO & Growth Automation",
    subtitle: "Scale organic traffic, programmatic SEO, personalized marketing funnels, and generative advertising with AI.",
    description: "The definitive 2026 growth engineering curriculum for young marketers and founders. Master AI-powered content syndication, programmatic SEO with LLMs, automated ad creative synthesis, Google Analytics 4 modeling, and multi-channel attribution.",
    level: "Beginner",
    category: "Digital Marketing",
    duration: "6 Weeks",
    weeklyCommitment: "5-7 hrs/week",
    rating: 4.90,
    reviewCount: 220,
    studentsEnrolled: 1980,
    badge: "Career Booster",
    price: 399,
    originalPrice: 699,
    studentPrice: 239,
    nextCohortDate: "Starts May 2, 2026",
    technologies: ["OpenAI API", "Python", "Google Analytics 4", "Search Console", "Semrush API", "Make.com", "Airtable"],
    keyHighlights: [
      "Programmatic SEO: Build 1,000+ High-Ranking Landing Pages with LLMs",
      "Automated Multi-Channel Creative & Copy Generation",
      "GA4 Predictive Modeling & Customer LTV Attribution",
      "No-Code + Low-Code AI Automations with Make & Airtable",
      "Complete Capstone Portfolio: Live High-Traffic Web Asset"
    ],
    instructor: {
      id: "david-kim",
      name: "David Kim",
      role: "Head of AI Safety & Trust",
      company: "Ex-Google AI Ethics",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      bio: "Growth and AI advisor helping modern startups scale user acquisition with automated intelligence.",
      previousCompany: "Google AI"
    },
    prerequisites: [
      "No prior coding experience required (introductory Python automation taught step-by-step)",
      "Interest in marketing, growth, SEO, or startup acquisition"
    ],
    capstoneProject: {
      title: "AutoGrowth: Automated Programmatic SEO & Content Marketing Engine",
      description: "Build an automated growth engine that scrapes competitor keywords, generates 500+ structured, search-optimized pages with internal linking, and publishes them to a live CMS.",
      deliverables: [
        "Live programmatic SEO website ranking in Google Search",
        "Automated AI copywriting pipeline with factual grounding",
        "Google Analytics 4 conversion tracking dashboard"
      ]
    },
    syllabus: [
      {
        week: 1,
        title: "AI-First Growth & Modern SEO Fundamentals",
        description: "Google Search Helpful Content algorithm, search intent analysis, Semrush keyword extraction, and topical authority maps.",
        topics: ["How Modern Search Engines Index AI Content", "Keyword Research & Search Intent Clustering", "Topical Authority & Content Hub Architecture", "Prompting LLMs for Brand Voice Consistency"],
        projectTitle: "Topical Authority Cluster Blueprint",
        estimatedHours: 6
      },
      {
        week: 2,
        title: "Programmatic SEO Architecture with Python & Airtable",
        description: "Build data-driven template pages that scale to thousands of long-tail search queries without spam flags.",
        topics: ["Database-Driven Page Architecture", "Airtable & Google Sheets Automation", "LLM Structured Output Generation with JSON", "Automated Metadata & OpenGraph Images"],
        projectTitle: "500-Page Programmatic Knowledge Hub",
        estimatedHours: 7
      },
      {
        week: 3,
        title: "Automated Ad Creative, Copywriting & Email Sequences",
        description: "Scale social ad variants, email welcome journeys, and landing page copy experiments using automated workflows.",
        topics: ["High-Converting Direct Response Copy Frameworks", "Automated Image Synthesis for Paid Social", "Personalized Email Drip Workflows", "A/B Testing Headlines at Scale"],
        projectTitle: "Multi-Variant Acquisition Funnel",
        estimatedHours: 7
      },
      {
        week: 4,
        title: "Marketing Analytics, Attribution & GA4 Predictive Modeling",
        description: "Track the user journey from click to paid conversion using GA4, BigQuery export, and conversion rate optimization.",
        topics: ["GA4 Custom Dimensions & Event Tracking", "Multi-Touch Attribution Models", "Slashing Customer Acquisition Cost (CAC)", "Capstone Growth Engine Launch"],
        projectTitle: "AutoGrowth Engine Live Deployment",
        estimatedHours: 6
      }
    ],
    careerOutcomes: [
      "AI Growth Marketing Manager ($95k - $135k)",
      "Programmatic SEO Specialist ($90k - $125k)",
      "Digital Marketing Strategist ($85k - $120k)"
    ]
  }
];

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "project-1",
    title: "NeuroDoc: Autonomous Clinical Trial Document Extractor",
    studentName: "Aiden Zhang",
    studentRole: "2025 CS Graduate, UC Berkeley",
    hiredAt: "OpenAI Applied Team",
    description: "Built a hybrid RAG system with vision models to parse complex medical tables and biochemical diagrams from 50,000+ FDA clinical trial PDFs with 99.2% precision.",
    architecture: "LangChain • Cohere Rerank • Qdrant • FastAPI • Docker • Next.js",
    tags: ["RAG", "Healthcare AI", "Hybrid Search", "vLLM"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    stars: 342
  },
  {
    id: "project-2",
    title: "AgentKube: Multi-Agent Cloud Incident Auto-Remediation",
    studentName: "Priyanjali Sen",
    studentRole: "College Senior, IIT Delhi",
    hiredAt: "Datadog AI Platform",
    description: "Autonomous swarm of 4 agents that ingests Kubernetes alert webhooks, queries Prometheus logs, isolates root causes, and generates tested Terraform/Kubectl patches.",
    architecture: "LangGraph • Model Context Protocol • Temporal • FastAPI • Redis",
    tags: ["Autonomous Agents", "DevOps", "MCP", "LangGraph"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    stars: 512
  },
  {
    id: "project-3",
    title: "Synthetix: Real-Time Edge Video Quality Inspector",
    studentName: "Liam O'Connor",
    studentRole: "Junior Developer, Dublin",
    hiredAt: "Stripe Machine Learning",
    description: "Trained custom YOLOv11 and TensorRT models processing 4 concurrent 4K industrial assembly feeds at 72 FPS with real-time anomaly alerting and edge caching.",
    architecture: "PyTorch • YOLOv11 • TensorRT • ONNX • OpenCV • WebRTC",
    tags: ["Computer Vision", "TensorRT", "Edge AI", "YOLOv11"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    stars: 289
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Kavya Murthy",
    role: "AI Engineer at Microsoft",
    company: "Microsoft",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    graduatedFrom: "CS Graduate, Class of 2025",
    quote: "University gave me theory, but AI Skills Academy gave me the exact tools production teams care about: vLLM, DSPy, and real hybrid RAG. The capstone code review from an ex-Meta engineer was what landed me my Microsoft offer.",
    courseTaken: "Generative AI & LLM Systems Engineering",
    salaryIncrease: "+125% Salary Increase ($68k -> $153k)",
    cohort: "Cohort 4 Alumni"
  },
  {
    id: "test-2",
    name: "Ethan Ramirez",
    role: "GenAI Software Engineer at Stripe",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    graduatedFrom: "Self-taught Developer & Junior Frontend",
    quote: "The Full-Stack AI track bridged everything for me. In 8 weeks, I went from building basic React forms to streaming generative interfaces with Vercel AI SDK and custom MCP servers. Worth 10x the tuition.",
    courseTaken: "Full-Stack AI Application Development",
    salaryIncrease: "Junior Dev -> Senior AI Role ($142k)",
    cohort: "Cohort 3 Alumni"
  },
  {
    id: "test-3",
    name: "Sophia Zhang",
    role: "Autonomous Agents Specialist at Scale AI",
    company: "Scale AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    graduatedFrom: "Senior, University of Waterloo",
    quote: "The 40% college student discount made it accessible on a student budget. Two months after finishing the multi-agent swarms track, I had three competing offers from AI startups before even walking across the graduation stage.",
    courseTaken: "Autonomous AI Agents & Multi-Agent Swarms",
    salaryIncrease: "Campus Hire Offer ($148k + Equity)",
    cohort: "Cohort 5 Alumni"
  }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: "ai-engineer",
    title: "Applied AI & LLM Engineer",
    targetRole: "Production AI / GenAI Engineer",
    avgStartingSalary: "$135,000 / year",
    duration: "16-20 Weeks",
    description: "The premier pathway for software engineers and CS graduates who want to architect production RAG systems, build agentic workflows, fine-tune models, and deploy reliable LLM applications at scale.",
    skills: ["RAG Architecture", "LangChain & LangGraph", "Vector Databases", "vLLM Inference", "DSPy Optimization", "Evaluation & Safety"],
    recommendedCourses: ["Generative AI & LLM Systems", "Autonomous AI Agents"],
    steps: [
      {
        phase: "Phase 1: Foundations",
        duration: "Weeks 1-4",
        title: "Modern LLM Orchestration & Embeddings",
        description: "Master structured outputs, function calling, vector embeddings, and sub-50ms hybrid search."
      },
      {
        phase: "Phase 2: Advanced Retrieval",
        duration: "Weeks 5-8",
        title: "Enterprise RAG & Context Engineering",
        description: "Implement recursive chunking, rerankers, semantic caching, and automated Ragas evaluation."
      },
      {
        phase: "Phase 3: Agentic Systems",
        duration: "Weeks 9-12",
        title: "Autonomous Agents & Tool Execution",
        description: "Build stateful multi-agent graphs with LangGraph, MCP protocol servers, and human-in-the-loop controls."
      },
      {
        phase: "Phase 4: Launch & Placement",
        duration: "Weeks 13-16",
        title: "Production Deployment & Capstone Defense",
        description: "Host microservices with Docker/vLLM, record portfolio demos, and complete technical mock interviews."
      }
    ]
  },
  {
    id: "fullstack-ai-builder",
    title: "Full-Stack AI Product Engineer",
    targetRole: "Full-Stack AI Developer / Founding Engineer",
    avgStartingSalary: "$125,000 / year",
    duration: "12-16 Weeks",
    description: "Designed for web developers and frontend engineers who want to build high-conversion AI SaaS products with streaming UX, live generative interfaces, and Postgres vector backends.",
    skills: ["Next.js 15", "Vercel AI SDK", "FastAPI", "Supabase pgvector", "Generative UI", "Stripe AI Billing"],
    recommendedCourses: ["Full-Stack AI Application Development", "Generative AI & LLM Systems"],
    steps: [
      {
        phase: "Phase 1: App Router & Streaming",
        duration: "Weeks 1-4",
        title: "Next.js 15 & Real-time AI Streaming",
        description: "Master useChat, server actions, SSE streaming, and dynamic UI skeleton generation."
      },
      {
        phase: "Phase 2: Database & Vectors",
        duration: "Weeks 5-8",
        title: "Postgres Vector & Multi-Tenant Data",
        description: "Design scalable vector tables in Supabase with pgvector, HNSW indexing, and row-level security."
      },
      {
        phase: "Phase 3: Multi-modal & Voice",
        duration: "Weeks 9-12",
        title: "Voice AI, Canvas UI & Monetization",
        description: "Implement OpenAI Realtime API, interactive code sandboxes, and Stripe usage-based subscription tiers."
      }
    ]
  },
  {
    id: "mlops-platform",
    title: "MLOps & Cloud AI Infrastructure Engineer",
    targetRole: "AI Platform / MLOps Engineer",
    avgStartingSalary: "$145,000 / year",
    duration: "16-20 Weeks",
    description: "Designed for backend engineers and DevOps practitioners eager to manage multi-node GPU clusters, Triton inference engines, and enterprise model registries.",
    skills: ["Kubernetes", "Ray Distributed", "NVIDIA Triton", "MLflow", "Docker CUDA", "Prometheus & Grafana"],
    recommendedCourses: ["Production MLOps & LLMOps at Scale", "Computer Vision & Multimodal"],
    steps: [
      {
        phase: "Phase 1: Containers & CUDA",
        duration: "Weeks 1-4",
        title: "CUDA Containerization & Hardware Layer",
        description: "Master multi-stage Docker builds, NVIDIA Container Toolkit, and GPU memory profiling."
      },
      {
        phase: "Phase 2: Orchestration",
        duration: "Weeks 5-8",
        title: "Kubernetes GPU Cluster Scheduling",
        description: "Deploy Triton and vLLM servers on K8s with custom metrics autoscaling."
      },
      {
        phase: "Phase 3: Distributed Scale",
        duration: "Weeks 9-14",
        title: "Ray Train, FSDP & Model Observability",
        description: "Execute multi-node distributed fine-tuning with full Prometheus/Grafana telemetry."
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Students & Pricing",
    question: "Do you offer a student discount for college students and recent graduates?",
    answer: "Yes! Verified university and college students (with a valid .edu or university email) receive an automatic 40% discount on all courses and tracks. Use discount code 'STUDENT40' at checkout or submit your student ID for instant verification. Recent graduates (within 12 months) are also eligible."
  },
  {
    id: "faq-2",
    category: "Curriculum",
    question: "How is AI Skills Academy different from standard Coursera or YouTube tutorials?",
    answer: "Most online courses teach high-level theory or outdated 2023 prompting tricks. AI Skills Academy is built around real-world production engineering: you build and deploy production systems using tools industry teams use right now (vLLM, DSPy, LangGraph, Model Context Protocol, and pgvector). Every capstone is reviewed line-by-line by working AI engineers at top tier tech companies."
  },
  {
    id: "faq-3",
    category: "General",
    question: "What is the weekly time commitment, and can I do this alongside college or a job?",
    answer: "All programs are designed specifically for busy college students and working professionals. The typical commitment is 7-9 hours per week: 2 hours of weekend live/interactive sessions, and 5-7 hours of hands-on project building and code labs on your own schedule. All live sessions are recorded and archived with searchable transcripts."
  },
  {
    id: "faq-4",
    category: "Careers & Placement",
    question: "What career support and hiring partner placement do you provide?",
    answer: "Students gain access to our proprietary AI Hiring Network of 200+ partner startups and tech leaders. We provide 1-on-1 resume reviews tailored to AI engineering roles, technical mock interviews (covering RAG system design and live Python coding), and private hiring demo days where top performers present directly to engineering directors."
  },
  {
    id: "faq-5",
    category: "Curriculum",
    question: "Do I need an expensive GPU or Mac to complete the coursework?",
    answer: "No! All heavy GPU workloads, model fine-tuning, and inference tasks run on our cloud development environments and partner GPU credits (provided free of charge to enrolled students). You only need a standard laptop (Mac, Windows, or Linux) with an internet browser and code editor."
  },
  {
    id: "faq-6",
    category: "Students & Pricing",
    question: "What is your refund policy if the course isn't the right fit for me?",
    answer: "We offer a 100% money-back guarantee within the first 14 days of any cohort start date. If you complete the initial modules and feel the program does not exceed your expectations, simply email us for an immediate, no-questions-asked refund."
  }
];

export const HIRING_PARTNERS = [
  { name: "OpenAI", logo: "OpenAI" },
  { name: "Google", logo: "Google" },
  { name: "Meta", logo: "Meta" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Anthropic", logo: "Anthropic" },
  { name: "Stripe", logo: "Stripe" },
  { name: "Scale AI", logo: "Scale AI" },
  { name: "Datadog", logo: "Datadog" }
];
