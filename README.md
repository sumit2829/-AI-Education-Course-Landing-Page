# AI Skills Academy 🚀
> Premium, modern education platform for college students, fresh graduates, and ambitious engineers breaking into applied AI, autonomous multi-agent systems, and production MLOps.

---

## 🌟 Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript with strict type validation
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with customized edtech design tokens
- **Component Primitives**: shadcn/ui inspired modular architecture with `class-variance-authority` (cva), `clsx`, and `tailwind-merge`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Delight Effects**: `canvas-confetti` celebrations for enrollment and promo validation

---

## 🎨 Design System & Branding

- **Modern EdTech Startup Aesthetic**: Authoritative, clean, sleek, high conversion
- **Color Palette**:
  - Background: Pristine white (`#FFFFFF`) and slate surface tiers (`#FAFBFC`, `#F8FAFC`, `#F1F5F9`)
  - Deep Navy Typography: Primary `#0F172A`, Dark `#070E1C`, Secondary `#334E68`
  - Electric Accents: Electric Purple (`#7C3AED`, `#8B5CF6`) and Electric Blue (`#2563EB`, `#0062FF`, `#06B6D4`)
  - Semantic Status: Emerald `#10B981` for verified metrics and placement badges
- **Visual Elements**:
  - Subtle glowing radial mesh gradients
  - Multi-stop gradient badges and CTA buttons (`from-violet-600 via-indigo-600 to-blue-600`)
  - Rounded cards (`rounded-3xl`) with multi-layer soft shadows and subtle hover elevation (`card-subtle-glow`)
  - Responsive mobile drawer navigation and sticky blurred header

---

## 🎯 Target Audience Features (Students & Young Pros)

1. **40% College Scholar Grant**:
   - Automatic 40% discount on all programs for verified `.edu` students and recent graduates (within 12 months)
   - Code `STUDENT40` verified interactively with celebration confetti in the enrollment modal
2. **$300 Cloud GPU Hardware Stipend**:
   - No high-end Mac or NVIDIA RTX GPU required; cloud development sandboxes included
3. **FAANG 1-on-1 Code Audits**:
   - Pull request reviews from senior AI engineers at OpenAI, Meta, and Google alumni
4. **Interactive Live Architecture Playground**:
   - Interactive browser preview of LangGraph agent swarms, hybrid BM25 + vector RAG with cross-encoders, and high-throughput vLLM serving
5. **Interactive Tuition ROI Calculator**:
   - Live slider calculating payback period in days and 3-year compensation growth
6. **Career Pathways & Transparent Salary Data**:
   - Step-by-step roadmaps from college senior to $130K–$175K AI roles

---

## 📂 Pages & Routes

| Route | Description |
|---|---|
| `/` | High-impact homepage featuring the Hero, Interactive Playground, Course Explorer, Student Perks, Career Pathways, Project Showcase, ROI Calculator, Testimonials, FAQs, and CTA Banner |
| `/courses` | Complete searchable catalog with multi-facet category filters (Generative AI, Agents, MLOps, Full-Stack AI, Computer Vision), level filters, sorting, and syllabus previews |
| `/courses/[slug]` | Dedicated in-depth course syllabus page with week-by-week curriculum accordion, capstone requirements, and sticky enrollment sidebar |
| `/career-tracks` | Role blueprints for Applied AI Engineer, Agent Swarm Architect, Full-Stack AI Developer, and MLOps Platform Engineer |
| `/pricing` | Transparent tuition breakdown, student scholar discount codes, 3-month interest-free installment plans, and 14-day refund guarantee |
| `/about` | Academy mission, pedagogical principles, faculty bios, and comparison matrix with traditional university CS degrees |

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build
```bash
npm run build
npm start
```
