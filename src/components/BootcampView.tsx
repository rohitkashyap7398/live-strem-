import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Check,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Award,
  Code2,
  Database,
  Cpu,
  CheckCircle2,
  TrendingUp,
  Building2,
  Globe,
} from 'lucide-react';
import rohitPhoto from '../assets/Rohit.png';
import {
  SectionSeamDropSvg,
  HeroKineticThread,
  SemicircleBranchSvg,
  AnimatedRupeeCounter,
  FingerprintImprintSvg,
  InteractiveUntangleSvg,
  StickyStackedMissesSection,
  Perspective3DRigorCards,
} from './BootcampKineticSvgs';

interface BootcampViewProps {
  onApplyNow: () => void;
  onRequestCallback: () => void;
  onViewSyllabus?: () => void;
}

const HIRING_LOGOS = [
  { name: 'TCS', sub: 'CONSULTANCY SERVICES' },
  { name: 'Microsoft', sub: '' },
  { name: 'accenture', sub: '' },
  { name: 'Razorpay', sub: '' },
  { name: 'amazon', sub: '' },
  { name: 'Google', sub: '' },
  { name: 'Flipkart', sub: '' },
  { name: 'Walmart', sub: '*' },
];

export const BootcampView: React.FC<BootcampViewProps> = ({
  onApplyNow,
  onRequestCallback,
  onViewSyllabus,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Module tab state (Default: Module 03 Backend Engineering)
  const [activeModuleTab, setActiveModuleTab] = useState(2);

  // Project accordion state
  const [openProjectIdx, setOpenProjectIdx] = useState<number | null>(0);

  // FAQ accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Mentors carousel rotation offset
  const [mentorOffset, setMentorOffset] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // safe fallback
    }
  };

  const heroStats = [
    {
      value: '7.5 Lakh',
      label: 'Average Package',
      icon: <TrendingUp className="w-4 h-4 text-[#EA2814]" />,
    },
    {
      value: '47 Lakh',
      label: 'Highest Package',
      icon: <Award className="w-4 h-4 text-[#EA2814]" />,
    },
    {
      value: '300+',
      label: 'Hiring Partners',
      icon: <Building2 className="w-4 h-4 text-[#EA2814]" />,
    },
    {
      value: '10M+',
      label: 'Monthly Tech Reach',
      icon: <Globe className="w-4 h-4 text-[#EA2814]" />,
    },
  ];

  const placedAlumniCards = [
    {
      packageLpa: '47+ LPA',
      company: 'AMAZON',
      name: 'Rohan Gupta',
      photo: '/assets/aistudio/faculty_nirved_kumar.png',
    },
    {
      packageLpa: '18+ LPA',
      company: 'AIRTEL',
      name: 'Pooja Sharma',
      photo: '/assets/aistudio/faculty_aadhya.png',
    },
    {
      packageLpa: '17+ LPA',
      company: 'CISCO',
      name: 'Ananya Verma',
      photo: '/assets/aistudio/Warm_Office_Portrait_with_Colorful_Logo_2164f143.png',
    },
    {
      packageLpa: '12+ LPA',
      company: 'SYNCHRONY',
      name: 'Akshat Sahu',
      photo: '/assets/aistudio/faculty_ishu_sharma.png',
    },
  ];

  const syllabusModules = [
    {
      id: '01',
      label: 'Frontend Foundations',
      code: 'MODULE 01',
      title: 'Frontend Architecture, HTML5, Tailwind CSS & Modern JS',
      projects: '06+ Projects',
      duration: '01 Months',
      desc: 'Master responsive UI systems, semantic HTML5, CSS Grid/Flexbox, async JavaScript, DOM internals, and clean Git workflows.',
      subtopics: [
        'JavaScript ES6+, Event Loop, Closures, Promises & Async/Await',
        'Tailwind CSS design systems & component-driven architecture',
        'REST API consumption, error handling & browser DevTools profiling',
      ],
      dbTitle: 'UI Engineering & Git Workflows',
      dbPoints: [
        'Pixel-accurate responsive interfaces across mobile, tablet & desktop',
        'Clean Git branching, PR code reviews & semantic commit conventions',
        'Accessibility (WCAG AA) and Lighthouse performance optimization',
      ],
    },
    {
      id: '02',
      label: 'React & Next.js',
      code: 'MODULE 02',
      title: 'React 19, TypeScript & Full-Stack Next.js App Router',
      projects: '07+ Projects',
      duration: '01 Months',
      desc: 'Build type-safe, SSR/SSG production frontends with React Hooks, state management, dynamic routing, and Motion UI animations.',
      subtopics: [
        'React 19 Component Architecture, Hooks & Custom Hook Abstractions',
        'TypeScript Strict Typing, Generics, Interfaces & Zod Schema Guards',
        'Next.js App Router, Server Components, Middleware & SEO Optimization',
      ],
      dbTitle: 'State Architecture & Testing',
      dbPoints: [
        'Scalable client-server state syncing with caching & optimistic UI',
        'Form validation workflows & secure JWT cookie session management',
        'End-to-end component verification & bundle optimization',
      ],
    },
    {
      id: '03',
      label: 'Backend Engineering with Node, Express & MongoDB',
      code: 'MODULE 03',
      title: 'Backend Engineering with Node, Express & MongoDB',
      projects: '08+ Projects',
      duration: '01 Months',
      desc: 'Design scalable REST APIs, secure authentication flows, and manage SQL and NoSQL database schemas.',
      subtopics: [
        'Node.js asynchronous event loop, event emitters, streams, and file I/O',
        'Express.js routing, custom middleware pipelines & centralized error handlers',
        'JWT authentication, role-based access control (RBAC) & rate limiting',
      ],
      dbTitle: 'Database Design with MongoDB',
      dbPoints: [
        'Data Modeling: Mongoose schemas, relationships, indexing, and aggregations',
        'Transactions: Implementing ACID operations across multiple document collections',
        'Migration Strategy for database updates, backups, and staging deployments',
      ],
    },
    {
      id: '04',
      label: 'DevOps, Cloud & Deployment',
      code: 'MODULE 04',
      title: 'Docker Containers, AWS Infrastructure & CI/CD',
      projects: '05+ Projects',
      duration: '01 Months',
      desc: 'Containerize full-stack applications, configure reverse proxies, automate CI/CD pipelines, and deploy resilient services on AWS.',
      subtopics: [
        'Linux administration, SSH hardening & NGINX reverse proxy tuning',
        'Dockerfiles, multi-stage layer caching & Docker Compose stacks',
        'AWS EC2, S3 object storage, CloudFront CDN & GitHub Actions pipelines',
      ],
      dbTitle: 'Observability & Zero-Downtime Releases',
      dbPoints: [
        'Automated build, lint, test, and staging deploy workflows',
        'Environment secrets management & TLS SSL termination',
        'Production telemetry, structured logs & error alerting',
      ],
    },
    {
      id: '05',
      label: 'Scaling, Reliability & Microservices',
      code: 'MODULE 05',
      title: 'High-Level System Design, Redis & Microservices',
      projects: '06+ Projects',
      duration: '01 Months',
      desc: 'Architect fault-tolerant distributed backends with Redis caching, message queues, load balancing, and real-world system design case studies.',
      subtopics: [
        'Redis distributed caching, pub/sub messaging & sliding-window rate limiters',
        'Kafka/BullMQ asynchronous job queues & microservice communication',
        'Database sharding, read-replicas, CAP theorem & load balancer strategies',
      ],
      dbTitle: 'Enterprise Case Studies & Interviews',
      dbPoints: [
        'Designing scalable URL shorteners, live chat engines & payment switches',
        'GenAI RAG vector architecture with pgvector & streaming LLM endpoints',
        '1-on-1 System Design & DSA mock rounds until job offer',
      ],
    },
  ];

  const realProjects = [
    {
      title: 'AI Powered Business Dashboard',
      repoTag: 'PROJECT REPO 01',
      heading: 'Live Production Deployments',
      stack: 'CI/CD Pipeline • Docker • AWS S3',
      footer: 'Defended in Final Jury Evaluation',
      desc: 'A real-world product dashboard with authentication, analytics, reporting, user roles and decision-focused UI. Learn how data-driven products are structured and shipped with live revenue forecasting and PDF exports.',
    },
    {
      title: 'Collaboration SaaS',
      repoTag: 'PROJECT REPO 02',
      heading: 'Real-Time Multi-User Engine',
      stack: 'WebSockets • Redis • Next.js 15',
      footer: 'Stress Tested with 500+ Concurrent Sockets',
      desc: 'Shared team workspaces featuring live cursors, conflict-free task boards, instant role permissions, activity audit trails, and Slack/Discord webhook alerts.',
    },
    {
      title: 'Quick-Commerce Platform',
      repoTag: 'PROJECT REPO 03',
      heading: 'Distributed Order & Payment System',
      stack: 'Node.js • MongoDB ACID • Razorpay API',
      footer: 'Zero-Downtime Inventory Transaction Engine',
      desc: 'End-to-end storefront and rider dispatch console with real-time stock locking, geo-indexed hub routing, coupon validation, and idempotent payment webhooks.',
    },
    {
      title: 'AI-Powered Resume Reviewer',
      repoTag: 'PROJECT REPO 04',
      heading: 'Grounded Gemini RAG + AST Pipeline',
      stack: 'Gemini SDK • pgvector • TypeScript',
      footer: 'Live Streaming ATS Critique Engine',
      desc: 'Upload technical resumes to run structured ATS scoring, GitHub repo verification, skill-gap extraction, and targeted interview question generation.',
    },
  ];

  const mentors = [
    {
      name: 'Mr. Rohit Kashyap',
      role: 'Founder & CEO, TheCodeSpark',
      tag: 'CHIEF MENTOR & GUIDE',
      isChief: true,
      photo: '/assets/aistudio/rohit_kashyap_ceo_portrait.png',
    },
    {
      name: 'Ali Ansari',
      role: 'Backend & Cloud Lead',
      tag: 'THECODESPARK MENTORS',
      isChief: false,
      photo: '/assets/aistudio/faculty_nirved_kumar.png',
    },
    {
      name: 'Devendra Dhote',
      role: 'Full Stack Developer',
      tag: 'THECODESPARK MENTORS',
      isChief: false,
      photo: '/assets/aistudio/faculty_aadhya.png',
    },
    {
      name: 'Harsh Sharma',
      role: 'Senior Tech Lead',
      tag: 'THECODESPARK MENTORS',
      isChief: false,
      photo: '/assets/aistudio/faculty_ishu_sharma.png',
    },
    {
      name: 'Sarthak Sharma',
      role: 'Full Stack Engineer',
      tag: 'THECODESPARK MENTORS',
      isChief: false,
      photo: '/assets/aistudio/Warm_Office_Portrait_with_Colorful_Logo_2164f143.png',
    },
    {
      name: 'Ankur Prajapati',
      role: 'DSA & System Coach',
      tag: 'THECODESPARK MENTORS',
      isChief: false,
      photo: rohitPhoto,
    },
  ];

  const orderedMentors = mentors.map((_, idx) => mentors[(idx + mentorOffset) % mentors.length]);

  const faqs = [
    {
      q: 'Do I need any prior coding experience to join the Bootcamp?',
      a: 'Yes, basic programming knowledge is required. This Bootcamp is designed for students who already understand programming fundamentals and want to become industry-ready full stack developers. We start with frontend foundations and gradually move towards advanced backend, DevOps, cloud deployment, and system design, so having basic coding familiarity will help you get the most out of the program.',
    },
    {
      q: 'Will you help me get placed, and what kind of career support is included?',
      a: 'Yes! You receive 1-on-1 resume & GitHub portfolio reviews, weekly live mock interviews, communication & presentation training, aptitude drills, and direct placement referrals across our 300+ hiring partner network.',
    },
    {
      q: 'How much time does the Intensive Training take daily?',
      a: 'Plan for structured 11 AM to 5 PM full-time execution with daily lectures, live build challenges, problem sets, and mentor reviews. Consistent daily practice ensures every concept sticks through real shipped code.',
    },
    {
      q: 'What happens if I get stuck on bugs or assignments?',
      a: 'You never stay stuck alone—mentors and teaching assistants host live doubt-solving rooms, pull-request walkthroughs, and 1-on-1 debugging sessions throughout the cohort.',
    },
  ];

  const activeModule = syllabusModules[activeModuleTab];
  const currentProject = realProjects[openProjectIdx ?? 0];

  return (
    <div className="bg-[#F1EFE9] text-[#0E0E0E] min-h-screen selection:bg-[#EA2814] selection:text-white overflow-x-clip">
      {/* =========================================================================
          EDITORIAL SECTION NAV STRIP
          ========================================================================= */}
      <div className="bg-[#F1EFE9] border-b border-[#0E0E0E]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#0E0E0E]">
            <span className="w-2 h-2 rounded-full bg-[#EA2814] animate-pulse" />
            <span>TCS / INTENSIVE TRAINING · 100 DAYS</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-7 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#0E0E0E]/75">
            <button onClick={() => scrollToSection('it-outcomes')} className="hover:text-[#EA2814] cursor-pointer transition-colors">
              OUTCOMES
            </button>
            <button onClick={() => scrollToSection('it-comparison')} className="hover:text-[#EA2814] cursor-pointer transition-colors">
              COMPARISON
            </button>
            <button onClick={() => scrollToSection('it-modules')} className="hover:text-[#EA2814] cursor-pointer transition-colors">
              MODULES
            </button>
            <button onClick={() => scrollToSection('it-projects')} className="hover:text-[#EA2814] cursor-pointer transition-colors">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection('it-mentors')} className="hover:text-[#EA2814] cursor-pointer transition-colors">
              MENTORS
            </button>
            <button onClick={() => scrollToSection('it-cohort')} className="hover:text-[#EA2814] cursor-pointer transition-colors">
              COHORT
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BAND 1 (CREAM #F1EFE9): HERO + SCROLL-DRAWN RED THREAD + STATS + LOGOS
          Matches Video 00:00 - 00:01
          ========================================================================= */}
      <section className="bg-[#F1EFE9] text-[#0E0E0E] pt-10 sm:pt-16 pb-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Swiss Editorial Stacked Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-[78px] font-black font-display uppercase tracking-[-0.045em] leading-[0.88] text-[#0E0E0E]">
                FROM WHAT
                <br />
                STUDENTS NEED
                <br />
                TO WHAT
                <br />
                <span className="text-[#EA2814]">LANDS OFFERS.</span>
              </h1>

              <div className="pt-4 border-t border-[#0E0E0E]/15 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <p className="font-mono text-xs sm:text-sm text-[#0E0E0E]/75 max-w-md leading-relaxed">
                  100 full-time days, 11 AM to 5 PM. Structured around execution, live debugging, and production systems — not passive lectures.
                </p>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={onApplyNow}
                    className="px-5 py-3 bg-[#0E0E0E] hover:bg-[#EA2814] text-[#F1EFE9] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  {onViewSyllabus && (
                    <button
                      onClick={onViewSyllabus}
                      className="px-5 py-3 border border-[#0E0E0E]/30 hover:border-[#0E0E0E] text-[#0E0E0E] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Syllabus →
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Organic Scroll-Drawn Red Thread */}
            <div className="lg:col-span-5">
              <HeroKineticThread />
            </div>
          </div>

          {/* 4-Metric Ledger Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#0E0E0E]/20 bg-white/60">
            {heroStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-5 flex items-center gap-3.5 ${
                  idx < 3 ? 'border-b lg:border-b-0 lg:border-r border-[#0E0E0E]/15' : ''
                }`}
              >
                <div className="w-10 h-10 border border-[#0E0E0E]/20 bg-[#F1EFE9] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[#0E0E0E] leading-none">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#0E0E0E]/65 mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hiring Partners Monochrome Marquee */}
          <div className="relative overflow-hidden py-3 border-y border-[#0E0E0E]/15">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F1EFE9] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F1EFE9] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-12 sm:gap-16">
              {[...HIRING_LOGOS, ...HIRING_LOGOS, ...HIRING_LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-[#0E0E0E]/75 hover:text-[#EA2814] transition-colors select-none shrink-0"
                >
                  {logo.name === 'TCS' ? (
                    <div className="flex items-center gap-2 leading-none">
                      <span className="font-black text-lg tracking-tight">tcs</span>
                      <div className="flex flex-col text-[7px] font-mono uppercase tracking-wider opacity-75 leading-tight">
                        <span>TATA</span>
                        <span>CONSULTANCY</span>
                        <span>SERVICES</span>
                      </div>
                    </div>
                  ) : (
                    <span className="font-display font-extrabold text-base sm:text-lg tracking-tight">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BAND 2 (VOID BLACK #0A0A0A): "WE TRAIN THE BUILDER." + 8-NODE SEMICIRCLE ARC
          Matches Video 00:02 - 00:05
          ========================================================================= */}
      <section className="bg-[#0A0A0A] text-[#F5F4F0] py-16 sm:py-24 relative">
        <SectionSeamDropSvg variant="center" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
              ONE JOURNEY · EVERY SKILL THAT MATTERS
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-black font-display uppercase tracking-[-0.04em] leading-[0.88] text-white">
              WE TRAIN THE BUILDER.
              <br />
              AND THE SYSTEM THINKING
              <br />
              <span className="text-[#EA2814]">BEHIND IT.</span>
            </h2>
          </motion.div>

          {/* Center Kinetic Bridge Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-neutral-400">
              <span className="text-[#EA2814] font-bold">HUMAN LOGIC:</span> Deep First-Principles
            </div>
            <div className="px-5 py-2 border border-[#EA2814] bg-[#EA2814]/15 font-mono text-xs font-black tracking-[0.2em] text-white uppercase shadow-[0_0_25px_rgba(234,40,20,0.35)]">
              CODE + GEN-AI + SHIP
            </div>
            <div className="font-mono text-xs text-neutral-400">
              <span className="text-[#EA2814] font-bold">AI PRODUCTIVITY:</span> Autonomous Tools
            </div>
          </div>

          {/* Scroll-Drawn 8-Node Semicircle Branch */}
          <SemicircleBranchSvg
            leftLabel="HUMAN LOGIC · FIRST PRINCIPLES"
            rightLabel="AI SYSTEMS · PRODUCTION DEPLOY"
            leftNodes={[
              {
                title: 'Foundations',
                sub: 'Think and reason like an engineer, not just write syntax.',
              },
              {
                title: 'Clean Architecture',
                sub: 'Write maintainable TypeScript, React, and backend modules.',
              },
              {
                title: 'Full Stack Dev',
                sub: 'Ship real, deployed products end-to-end with CI/CD pipelines.',
              },
              {
                title: 'System Design',
                sub: 'Scale APIs, Redis caching, queues, and distributed databases.',
              },
            ]}
            rightNodes={[
              {
                title: 'AI Engineering',
                sub: 'Build with LLMs and autonomous workflows, not just talk about them.',
              },
              {
                title: 'RAG & Vector Ops',
                sub: 'Ground responses in pgvector retrieval and structured tool calling.',
              },
              {
                title: 'Cloud & Docker',
                sub: 'Containerize services and ship zero-downtime AWS deployments.',
              },
              {
                title: 'Placement Prep',
                sub: 'Mock interviews, resumes, and direct referrals until you land it.',
              },
            ]}
          />
        </div>
      </section>

      {/* =========================================================================
          BAND 3 (CREAM #F1EFE9): 01 / PLACEMENT OUTCOMES (EIGNA BLUEPRINT PARALLAX)
          Matches Video 00:06 - 00:08
          ========================================================================= */}
      <section id="it-outcomes" className="bg-[#F1EFE9] text-[#0E0E0E] py-16 sm:py-24 relative">
        <SectionSeamDropSvg variant="center" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Section Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#0E0E0E]/15 pb-4">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#0E0E0E]">
              01 / PLACEMENT OUTCOMES
            </span>
            <span className="font-mono text-xs text-[#0E0E0E]/70">
              Verified offers, live classroom training, and real student breakthroughs.
            </span>
          </div>

          {/* Blueprint Overlapping Showcase with Desk-Angle Parallax */}
          <div className="relative py-4">
            {/* Giant Display Wordmark */}
            <div className="text-[12vw] sm:text-[96px] lg:text-[124px] font-black font-display tracking-[-0.05em] leading-[0.85] text-[#0E0E0E] uppercase select-none">
              KUSHAGRA
              <span className="block text-[#0E0E0E]/20">₹47 LAKHS</span>
            </div>

            {/* Overlapping Schematic Video + Offer Ledger Cards connected by red SVG line */}
            <div className="relative -mt-6 sm:-mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Red Schematic Connector SVG on Desktop */}
              <svg
                viewBox="0 0 900 120"
                fill="none"
                className="hidden lg:block absolute -top-10 left-0 w-full h-24 pointer-events-none z-20"
                aria-hidden="true"
              >
                <motion.path
                  d="M 180 60 L 420 60 C 445 60, 455 20, 485 20 L 680 20"
                  stroke="#EA2814"
                  strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.9 }}
                />
                <circle cx="180" cy="60" r="4" fill="#EA2814" />
                <circle cx="680" cy="20" r="4" fill="#EA2814" />
              </svg>

              {/* Left Classroom Lab Video Blueprint Card with Tilt-to-Level Entrance */}
              <motion.div
                initial={{ opacity: 0, rotate: -2, y: 24 }}
                whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="lg:col-span-6 bg-white border-2 border-[#0E0E0E] p-3 shadow-[8px_8px_0px_#0E0E0E] relative z-10"
              >
                <div className="aspect-video relative overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src="/assets/aistudio/tcs_actual_classroom_lab.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#EA2814] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                    LIVE CLASSROOM LAB
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      className="w-8 h-8 bg-[#0E0E0E]/85 hover:bg-[#EA2814] text-white flex items-center justify-center cursor-pointer transition-colors"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      className="w-8 h-8 bg-[#0E0E0E]/85 hover:bg-[#EA2814] text-white flex items-center justify-center cursor-pointer transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[11px]">
                    <span>Lucknow &amp; Live Online Cohort</span>
                    <span className="px-2 py-0.5 bg-white text-[#0E0E0E] font-bold">
                      THECODESPARK
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Paper Offer Ledger Card with Tilt-to-Level Entrance */}
              <motion.div
                initial={{ opacity: 0, rotate: 2, y: 24 }}
                whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
                className="lg:col-span-6 bg-[#FAF8F3] border-2 border-[#0E0E0E] p-6 sm:p-8 shadow-[8px_8px_0px_#EA2814] space-y-5 relative z-10"
              >
                <div className="flex items-center justify-between border-b border-[#0E0E0E]/20 pb-3 font-mono text-[11px]">
                  <span className="font-bold uppercase tracking-widest text-[#EA2814]">
                    PLACEMENT CYCLE · RECORD 01
                  </span>
                  <span className="px-2 py-0.5 border border-[#0E0E0E] text-[#0E0E0E] font-bold">
                    AMAZON
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-[#0E0E0E]">
                    KUSHAGRA PATIDAR
                  </h3>
                  <p className="font-mono text-xs text-[#0E0E0E]/70 mt-1">
                    TheCodeSpark Placement Success Story
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-dashed border-[#0E0E0E]/25 font-mono">
                  <div>
                    <div className="text-[10px] uppercase text-[#0E0E0E]/60">ANNUAL PACKAGE</div>
                    <div className="text-2xl sm:text-3xl font-black font-display text-[#0E0E0E]">
                      ₹47 LAKHS
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#0E0E0E]/60">SECURED AT</div>
                    <div className="text-xl sm:text-2xl font-black font-display text-[#EA2814]">
                      amazon
                    </div>
                  </div>
                </div>

                <button
                  onClick={onApplyNow}
                  className="w-full py-3.5 px-5 bg-[#0E0E0E] hover:bg-[#EA2814] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>Apply to Intensive Training</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* 4 Placed Alumni Paper Dossiers + 64+ Placed Strip */}
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {placedAlumniCards.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-white border border-[#0E0E0E]/25 hover:border-[#EA2814] p-3 space-y-2.5 transition-colors group"
                >
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="font-bold text-[#0E0E0E]">{item.packageLpa}</span>
                    <span className="w-5 h-5 bg-[#0E0E0E] text-white text-[10px] font-black flex items-center justify-center">
                      in
                    </span>
                  </div>
                  <div className="aspect-[4/5] overflow-hidden bg-[#ECEAE3]">
                    <img
                      src={item.photo}
                      onError={(e) => {
                        e.currentTarget.src = rohitPhoto;
                      }}
                      alt={item.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center pt-1 font-mono text-xs font-bold tracking-[0.2em] text-[#0E0E0E]">
                    {item.company}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white border border-[#0E0E0E]/25 px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    { init: 'KP', bg: 'bg-[#0E0E0E]' },
                    { init: 'RG', bg: 'bg-[#EA2814]' },
                    { init: 'PS', bg: 'bg-[#333333]' },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full ${avatar.bg} border-2 border-white flex items-center justify-center text-[10px] font-mono font-bold text-white`}
                    >
                      {avatar.init}
                    </div>
                  ))}
                </div>
                <span className="font-mono text-xs font-bold text-[#0E0E0E]">
                  64+ Students Placed Last Month
                </span>
              </div>

              <button
                onClick={onApplyNow}
                className="px-4 py-1.5 bg-[#0E0E0E] hover:bg-[#EA2814] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                View All ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BAND 4 (VOID BLACK #0A0A0A): 02 / COMPARISON & ORBIT SATELLITE MODULES
          Matches Video 00:08 - 00:10
          ========================================================================= */}
      <section id="it-comparison" className="bg-[#0A0A0A] text-[#F5F4F0] py-16 sm:py-24 relative overflow-hidden">
        <SectionSeamDropSvg variant="right" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
          {/* Part A: Why Some Students Grow Faster Than Others */}
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#EA2814]">
                  02 / EXECUTION ENVIRONMENT
                </div>
                <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-[-0.03em] leading-[0.95] text-white mt-2">
                  Why Some Students Grow
                  <br />
                  Faster Than Others
                </h2>
              </div>
              <p className="font-mono text-xs text-neutral-400 max-w-sm">
                The honest breakdown of our rigorous education environment versus traditional walk-through bootcamps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Left: THECODESPARK BOOTCAMP */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-[#111111] border-2 border-[#EA2814] p-7 sm:p-8 flex flex-col justify-between space-y-7 shadow-[0_0_50px_-20px_rgba(234,40,20,0.4)]"
              >
                <div className="space-y-6">
                  <div className="space-y-2 border-b border-white/10 pb-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black font-display tracking-wide text-white uppercase">
                        THECODESPARK BOOTCAMP
                      </h3>
                      <span className="px-2 py-0.5 bg-[#EA2814] text-white font-mono text-[10px] font-bold">
                        RECOMMENDED
                      </span>
                    </div>
                    <p className="text-xs font-mono text-neutral-300">
                      100 full-time days, 11 AM to 5 PM. Built around execution, not attendance.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        title: 'DEPTH BEFORE DEADLINES',
                        desc: '5 core lectures every week, followed by guided practice, debugging and mentor support. Topics are not just introduced. Students are trained to use them.',
                      },
                      {
                        title: 'FROM CODES TO CREATOR',
                        desc: '2 activities every week, including full-day challenges, startup MVPs, team competitions and project defenses. Students learn to identify problems, build solutions and present their thinking.',
                      },
                      {
                        title: 'YOUR PROGRESS CANNOT HIDE',
                        desc: 'Daily tasks, submissions, assessments, attendance, mentor reviews, house points, and leaderboards make every student’s performance visible.',
                      },
                      {
                        title: 'COMPLETE CAREER TRAINING',
                        desc: 'Communication sessions every week, along with full-stack development, AI research, presentations, interview preparation and startup thinking.',
                      },
                    ].map((pt) => (
                      <div key={pt.title} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#EA2814] shrink-0 mt-1" />
                        <div className="space-y-1">
                          <div className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                            {pt.title}
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">{pt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onApplyNow}
                  className="w-full py-3.5 px-5 bg-[#EA2814] hover:bg-white hover:text-[#0E0E0E] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Start with TheCodeSpark →
                </button>
              </motion.div>

              {/* Right: TYPICAL BOOTCAMP */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0D0D0D] border border-white/15 p-7 sm:p-8 flex flex-col justify-between space-y-7"
              >
                <div className="space-y-6">
                  <div className="space-y-2 border-b border-white/10 pb-5">
                    <h3 className="text-xl font-black font-display tracking-wide text-neutral-400 uppercase">
                      TYPICAL BOOTCAMP
                    </h3>
                    <p className="text-xs font-mono text-neutral-500">
                      Short classes. Rushed modules. Most of the real learning is left for you to figure out later.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        title: 'THE CALENDAR DECIDES THE SPEED',
                        desc: 'Topics keep moving because the syllabus must finish. Whether you understand, practice or can apply them is often your problem.',
                      },
                      {
                        title: 'PROJECTS YOU CAN SHOW, NOT DEFEND',
                        desc: 'Students follow the instructor, copy similar projects and submit similar work. The project reaches the resume, but the understanding does not.',
                      },
                      {
                        title: 'YOU CAN FALL BEHIND QUIETLY',
                        desc: 'Assignments remain unchecked, doubts keep piling up and weak performance goes unnoticed until the course is almost over.',
                      },
                      {
                        title: 'THE CERTIFICATE COMES FIRST',
                        desc: 'Communication, teamwork, interview preparation and real problem-solving are either rushed at the end or completely left out.',
                      },
                    ].map((pt) => (
                      <div key={pt.title} className="flex items-start gap-3">
                        <X className="w-4 h-4 text-neutral-500 shrink-0 mt-1" />
                        <div className="space-y-1">
                          <div className="text-xs font-mono font-bold text-neutral-300 tracking-wider uppercase">
                            {pt.title}
                          </div>
                          <p className="text-xs text-neutral-500 leading-relaxed">{pt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="py-3 text-center text-xs font-mono text-neutral-500 border-t border-white/[0.08] uppercase tracking-widest">
                  Avoid passive learning loops
                </div>
              </motion.div>
            </div>
          </div>

          {/* Part B: Interactive 5-Module Syllabus (ORBIT Floating Satellite Cards + Sweeping Red Orbit Curves) */}
          <div id="it-modules" className="relative space-y-8 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#EA2814]">
                  CURRICULUM ARCHITECTURE
                </div>
                <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-[-0.03em] text-white mt-1">
                  Why You Need To Become A Developer
                </h2>
              </div>
              <span className="font-mono text-xs text-neutral-400">
                5 Core Modules • Select to Inspect
              </span>
            </div>

            {/* Satellite Terminal Strip (Orbiting Telemetry Cards matching video 00:09 - 00:10) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
              {[
                { tag: 'DAILY SCHEDULE', val: '11 AM – 5 PM', sub: '100 Full-Time Days' },
                { tag: 'DOUBT ROOMS', val: 'LIVE 1-ON-1', sub: 'Instant Mentor Breakdown' },
                { tag: 'PROJECT REPOS', val: '40+ BUILDS', sub: 'Defended Before Jury' },
                { tag: 'HIRING TARGET', val: '300+ PARTNERS', sub: 'Direct Referrals' },
              ].map((sat, i) => (
                <motion.div
                  key={sat.tag}
                  animate={{ y: [0, i % 2 === 0 ? -4 : 4, 0] }}
                  transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-[#121212] border border-white/15 p-3.5 space-y-1 font-mono"
                >
                  <div className="text-[9px] text-[#EA2814] font-bold tracking-widest flex items-center justify-between">
                    <span>{sat.tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA2814]" />
                  </div>
                  <div className="text-sm font-black text-white font-display">{sat.val}</div>
                  <div className="text-[10px] text-neutral-500">{sat.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Giant Background Watermark Typography + Red Orbit Loop */}
            <div className="relative">
              <svg
                viewBox="0 0 1000 180"
                fill="none"
                className="hidden lg:block absolute -top-12 left-0 w-full h-36 pointer-events-none z-0"
                aria-hidden="true"
              >
                <motion.path
                  d="M 80 10 C 200 110, 380 40, 520 90 C 680 140, 820 40, 940 120"
                  stroke="#EA2814"
                  strokeOpacity="0.55"
                  strokeWidth="1.6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 1.1 }}
                />
              </svg>

              <div
                aria-hidden="true"
                className="text-[16vw] sm:text-[130px] font-black font-display uppercase tracking-[-0.06em] text-white/[0.05] leading-none select-none text-center -mb-8 sm:-mb-14 pointer-events-none"
              >
                MODULES
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
                {/* Left 5 Selector Cards */}
                <div className="lg:col-span-5 space-y-2.5">
                  {syllabusModules.map((mod, idx) => {
                    const isActive = idx === activeModuleTab;
                    return (
                      <button
                        key={mod.id}
                        onClick={() => setActiveModuleTab(idx)}
                        className={`w-full text-left px-5 py-4 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isActive
                            ? 'bg-[#EA2814] border-[#EA2814] text-white shadow-[0_0_30px_rgba(234,40,20,0.4)]'
                            : 'bg-[#121212] border-white/10 text-neutral-300 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Cpu className="w-4 h-4 shrink-0" />
                          <span className="text-xs sm:text-sm font-bold truncate font-display">
                            {mod.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold shrink-0">{mod.id}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Cream Floating Terminal Window (ORBIT center window style) */}
                <div className="lg:col-span-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule.code}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="bg-[#F1EFE9] text-[#0E0E0E] border-2 border-white p-6 sm:p-8 space-y-6 shadow-[10px_10px_0px_#EA2814]"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#0E0E0E]/15 pb-4">
                        <div className="space-y-1 max-w-md">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#EA2814]">
                            {activeModule.code}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black font-display leading-snug text-[#0E0E0E]">
                            {activeModule.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-5 text-right font-mono">
                          <div>
                            <div className="text-lg font-black text-[#0E0E0E]">{activeModule.projects}</div>
                            <div className="text-[10px] text-[#0E0E0E]/60 uppercase">Projects</div>
                          </div>
                          <div>
                            <div className="text-lg font-black text-[#0E0E0E]">{activeModule.duration}</div>
                            <div className="text-[10px] text-[#0E0E0E]/60 uppercase">Duration</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#0E0E0E]/80 leading-relaxed">
                        {activeModule.desc}
                      </p>

                      <div className="space-y-2">
                        {activeModule.subtopics.map((t, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-[#0E0E0E] bg-white border border-[#0E0E0E]/15 px-4 py-3 font-mono"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#EA2814] shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white border border-[#0E0E0E]/20 p-5 space-y-2.5">
                        <div className="text-xs font-mono font-bold text-[#0E0E0E] flex items-center gap-2 uppercase">
                          <Database className="w-4 h-4 text-[#EA2814]" />
                          <span>{activeModule.dbTitle}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#0E0E0E]/75 list-disc pl-5">
                          {activeModule.dbPoints.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <button
                          onClick={onApplyNow}
                          className="px-5 py-2.5 bg-[#0E0E0E] hover:bg-[#EA2814] text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                        >
                          Apply Now →
                        </button>
                        {onViewSyllabus && (
                          <button
                            onClick={onViewSyllabus}
                            className="px-5 py-2.5 border border-[#0E0E0E]/30 hover:border-[#0E0E0E] text-[#0E0E0E] font-mono text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                          >
                            View Syllabus →
                          </button>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BAND 5 (CREAM #F1EFE9): 03 / REAL PROJECTS (MEALOPS EDITORIAL STYLE)
          Matches Video 00:11
          ========================================================================= */}
      <section id="it-projects" className="bg-[#F1EFE9] text-[#0E0E0E] py-16 sm:py-24 relative">
        <SectionSeamDropSvg variant="left" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#0E0E0E]/15 pb-4">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#0E0E0E]">
              03 / REAL PRODUCTION PROJECTS
            </span>
            <span className="font-mono text-xs text-[#0E0E0E]/70">
              Real Projects. Real Complexity. Real Proof of Skill.
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
            <div className="text-[13vw] sm:text-[104px] font-black font-display uppercase tracking-[-0.05em] leading-[0.86] text-[#0E0E0E]">
              REAL PROOF.
            </div>

            {/* Speech-bubble + Connector Badge (MEALOPS style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-[#0E0E0E] text-white px-4 py-3 font-mono text-[11px] border border-[#0E0E0E] shadow-[4px_4px_0px_#EA2814] max-w-xs"
            >
              <div className="text-[#EA2814] font-bold uppercase">DEPLOYMENT STATUS</div>
              <div className="mt-0.5">CI/CD pipeline passed. Live production URL verified.</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Dynamic Project Repo Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#0E0E0E] p-6 sm:p-8 space-y-6 shadow-[8px_8px_0px_#EA2814]">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[11px] text-[#EA2814] font-bold">
                    {currentProject.repoTag}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#0E0E0E] text-white text-[10px] font-bold">
                    ATS-FRIENDLY
                  </span>
                </div>

                <div className="space-y-2 py-4 border-y border-dashed border-[#0E0E0E]/20">
                  <h3 className="text-2xl font-black text-[#0E0E0E] font-display uppercase">
                    {currentProject.heading}
                  </h3>
                  <div className="text-xs font-mono text-[#0E0E0E]/70">
                    {currentProject.stack}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#0E0E0E] font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#EA2814] shrink-0" />
                  <span>{currentProject.footer}</span>
                </div>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 space-y-3">
              {realProjects.map((proj, idx) => {
                const isOpen = openProjectIdx === idx;
                return (
                  <div
                    key={proj.title}
                    className={`border transition-colors ${
                      isOpen
                        ? 'bg-white border-[#0E0E0E] shadow-[4px_4px_0px_#0E0E0E]'
                        : 'bg-white/60 border-[#0E0E0E]/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenProjectIdx(isOpen ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold font-display text-[#0E0E0E] flex items-center gap-2.5">
                        <Code2 className="w-4 h-4 text-[#EA2814] shrink-0" />
                        <span>{proj.title}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0E0E0E]/60 transition-transform ${
                          isOpen ? 'rotate-180 text-[#EA2814]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#0E0E0E]/75 leading-relaxed border-t border-[#0E0E0E]/10">
                            {proj.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BAND 6 (VOID BLACK #0A0A0A): 04 / BUILT AROUND EVERYTHING (STICKY STACKING DECK)
          Matches Video 00:00 - 00:03
          ========================================================================= */}
      <section className="bg-[#0A0A0A] text-[#F5F4F0] py-16 sm:py-24 relative overflow-x-clip">
        <SectionSeamDropSvg variant="center" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#EA2814]">
                04 / WHAT STUDENTS MISS
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-[-0.03em] text-white mt-1">
                Built Around Everything a Student Usually Misses
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#EA2814] animate-pulse">
                SCANNING DAILY EXECUTION...
              </span>
              <span className="px-2.5 py-1 border border-[#EA2814] text-[#EA2814] font-mono text-[10px] font-bold uppercase -rotate-3">
                VERIFIED ✓
              </span>
            </div>
          </div>

          {/* Animated Red Laser Scanner Line */}
          <div className="relative h-0.5 bg-white/10 overflow-hidden">
            <motion.div
              animate={{ x: ['-30%', '130%'] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#EA2814] to-transparent"
            />
          </div>

          {/* Sticky Stacking Card Deck (01 -> 02 -> 03) + Classroom Showcase */}
          <StickyStackedMissesSection
            fallbackPhoto={rohitPhoto}
            onMeetMentors={() => scrollToSection('it-mentors')}
          />
        </div>
      </section>

      {/* =========================================================================
          BAND 7 (CREAM #F1EFE9): 05 / IMMERSIVE RIGOR + SPOTLIGHTS (SCRIBE CALLOUT)
          Matches Video 00:13 - 00:14
          ========================================================================= */}
      <section className="bg-[#F1EFE9] text-[#0E0E0E] py-16 sm:py-24 relative">
        <SectionSeamDropSvg variant="right" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* 100 Days / 500+ Hours / 40 Challenges */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#0E0E0E]/15 pb-4">
              <div>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#EA2814]">
                  05 / IMMERSIVE RIGOR
                </div>
                <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-[-0.03em] text-[#0E0E0E] mt-1">
                  Built To Make You Sharper. Every Single Day.
                </h2>
              </div>

              {/* SCRIBE-style Floating Dashed Callout Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 160, damping: 16 }}
                className="px-4 py-2 border border-dashed border-[#EA2814] bg-white font-mono text-[11px] font-bold text-[#0E0E0E] shrink-0"
              >
                <span className="text-[#EA2814]">●</span> Updated every cohort • Live Reviews ✓
              </motion.div>
            </div>

            <Perspective3DRigorCards />
          </div>

          {/* Student Spotlights */}
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-[#0E0E0E]">
              Why So Many Students Say, I Should’ve Joined Earlier
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#0E0E0E] p-5 sm:p-6 space-y-4 shadow-[6px_6px_0px_#0E0E0E]">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 bg-[#0E0E0E] text-white font-bold">
                    STUDENTS SPOTLIGHT
                  </span>
                  <span className="text-[#0E0E0E]/60 font-bold">MERN BATCH</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden border border-[#0E0E0E]/20">
                  <img
                    src="/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png"
                    onError={(e) => {
                      e.currentTarget.src = rohitPhoto;
                    }}
                    alt="Winner Team 3 Tigada"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-[#EA2814] font-bold">
                    WINNER TEAM · 3 TIGADA
                  </div>
                  <h4 className="text-lg font-black text-[#0E0E0E] font-display uppercase">
                    Mini HedSprint Winner
                  </h4>
                  <p className="text-xs text-[#0E0E0E]/75 leading-relaxed">
                    Big congratulations to Team 3 Tigada for winning our Mini HedSprint in Batch. A well deserved win, and we hope this is just the beginning of many more milestones for the team. Keep building, keep learning, and keep inspiring!
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#0E0E0E] p-5 sm:p-6 space-y-4 shadow-[6px_6px_0px_#EA2814]">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 bg-[#EA2814] text-white font-bold">
                    THECODESPARK SUCCESS
                  </span>
                  <span className="text-[#0E0E0E]/60 font-bold">OFF-CAMPUS CRACKED</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden border border-[#0E0E0E]/20 relative">
                  <img
                    src="/assets/aistudio/faculty_nirved_kumar.png"
                    onError={(e) => {
                      e.currentTarget.src = rohitPhoto;
                    }}
                    alt="Off-Campus Cracked Offer"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#EA2814] text-white text-[10px] font-mono font-bold">
                    GOT PLACED IN RECESSION
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-[#EA2814] font-bold">
                    CRACKED SDE ROLE
                  </div>
                  <h4 className="text-lg font-black text-[#0E0E0E] font-display uppercase">
                    How He Cracked 18+ LPA in Slowdown
                  </h4>
                  <p className="text-xs text-[#0E0E0E]/75 leading-relaxed">
                    He cracked a top package at a high-growth tech startup during the market slowdown. Mastered backend architecture, microservices, and system design from scratch through daily accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BAND 8 (VOID BLACK #0A0A0A): 06 / MENTORS & CREDIFLOW ROLLING PRICING LEDGER
          Matches Video 00:15 - 00:19
          ========================================================================= */}
      <section id="it-mentors" className="bg-[#0A0A0A] text-[#F5F4F0] py-16 sm:py-24 relative">
        <SectionSeamDropSvg variant="center" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
          {/* 6-Card Mentor Grid */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#EA2814]">
                  06 / FACULTY &amp; MENTORS
                </div>
                <h2 className="text-2xl sm:text-4xl font-black font-display uppercase text-white mt-1">
                  Learn From People Who’ve Actually Done the Work
                </h2>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Taught directly by Founders, Tech Leads &amp; Principal Engineers
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setMentorOffset((p) => (p - 1 + mentors.length) % mentors.length)}
                  aria-label="Previous mentor"
                  className="w-10 h-10 bg-white/5 hover:bg-[#EA2814] border border-white/15 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setMentorOffset((p) => (p + 1) % mentors.length)}
                  aria-label="Next mentor"
                  className="w-10 h-10 bg-white/5 hover:bg-[#EA2814] border border-white/15 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {orderedMentors.map((mentor) => (
                <motion.div
                  key={mentor.name}
                  layout
                  transition={{ duration: 0.28 }}
                  className="bg-[#111111] border border-white/15 hover:border-[#EA2814] flex flex-col justify-between group transition-colors"
                >
                  <div className="aspect-[4/4.3] overflow-hidden bg-black">
                    <img
                      src={mentor.photo}
                      onError={(e) => {
                        e.currentTarget.src = rohitPhoto;
                      }}
                      alt={mentor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-display leading-snug truncate">
                        {mentor.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 leading-tight truncate mt-0.5">
                        {mentor.role}
                      </div>
                    </div>
                    <div className="pt-1">
                      <span
                        className={`inline-block w-full text-center px-1.5 py-1 text-[8px] font-mono font-bold tracking-wider uppercase truncate ${
                          mentor.isChief
                            ? 'bg-[#EA2814] text-white'
                            : 'bg-white/[0.05] border border-white/10 text-neutral-400'
                        }`}
                      >
                        {mentor.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cohort Pricing (CREDIFLOW Rolling Number Counter + Checklist) */}
          <div id="it-cohort" className="space-y-8">
            <div className="text-center space-y-2">
              <div className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#EA2814]">
                UPCOMING COHORT ADMISSIONS
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-[-0.03em] text-white leading-tight">
                Build The Best Version Of Yourself In 4 Months.
              </h2>
            </div>

            <div className="bg-[#111111] border-2 border-[#EA2814] p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch shadow-[0_0_70px_-20px_rgba(234,40,20,0.35)]">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3.5">
                    <div className="text-[11px] font-mono font-bold tracking-widest text-[#EA2814] uppercase">
                      THECODESPARK BOOTCAMP
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider font-bold">
                      ● COHORT OPEN
                    </span>
                  </div>

                  {/* Live Animated Rolling Rupee Counter */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                      TOTAL PROGRAM INVESTMENT
                    </div>
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-5xl sm:text-6xl font-black font-display text-white tracking-tight">
                        <AnimatedRupeeCounter target={35000} />
                      </span>
                      <span className="text-xs text-neutral-400 font-mono font-semibold">
                        (+GST)
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed border-l-2 border-[#EA2814] pl-3.5 py-0.5">
                    Special cohort fee applicable exclusively for the upcoming 100-day batch. Includes full studio access, live project defenses, and career placement support.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button
                    onClick={onApplyNow}
                    className="w-full py-4 px-6 bg-[#EA2814] hover:bg-white hover:text-[#0E0E0E] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Apply to Intensive Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center font-mono text-[10px] tracking-wider uppercase text-neutral-500">
                    Limited Seats Per Cohort • Seat Reservation &amp; EMI Available
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F1EFE9] text-[#0E0E0E] border-2 border-white p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b-2 border-[#0E0E0E] pb-3 mb-2">
                  <span className="text-[11px] font-mono font-black tracking-widest text-[#EA2814] uppercase">
                    WHAT YOUR 100 DAYS INCLUDE
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#0E0E0E]/60 uppercase">
                    06 CORE DELIVERABLES
                  </span>
                </div>

                <div className="divide-y divide-[#0E0E0E]/15">
                  {[
                    {
                      title: 'Full-Time Immersive Studio (11 AM – 5 PM)',
                      sub: '6 hours of daily structured execution, coding drills, and live studio mentorship.',
                    },
                    {
                      title: '5 Technical Engineering Classes Every Week',
                      sub: 'Hands-on mastery across Frontend, Backend, System Design, Cloud & GenAI.',
                    },
                    {
                      title: '3 Communication & Career Sessions Every Week',
                      sub: 'Dedicated fluency, technical presentation, and HR/behavioral confidence training.',
                    },
                    {
                      title: '2 Full-Day Build Challenges Every Week',
                      sub: 'Real-world sprints, startup MVPs, and live jury project defenses under deadlines.',
                    },
                    {
                      title: '1-on-1 Code Reviews & Doubt Mentorship',
                      sub: 'Line-by-line PR walkthroughs and direct debugging so you never stay stuck.',
                    },
                    {
                      title: '100% Placement Support & Referral Access',
                      sub: 'ATS resume engineering, mock interviews, and direct referrals to 300+ partners.',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      className="py-3 first:pt-2 last:pb-0 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#EA2814] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-display font-extrabold text-[#0E0E0E] leading-snug">
                          {item.title}
                        </div>
                        <p className="text-[11px] font-mono text-[#0E0E0E]/70 leading-relaxed">
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BAND 9 (CREAM #F1EFE9): "EVERY ENGINEER CARRIES A REAL IMPRINT."
          + SCROLL-DRAWN RED FINGERPRINT + FREQUENTLY ASKED QUESTIONS
          Matches Video 00:19 - 00:22
          ========================================================================= */}
      <section className="bg-[#F1EFE9] text-[#0E0E0E] py-16 sm:py-24 relative">
        <SectionSeamDropSvg variant="left" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
          {/* Human Imprint + Scroll-Drawn Red Fingerprint */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-[-0.04em] leading-[0.9] text-[#0E0E0E]">
                EVERY ENGINEER
                <br />
                CARRIES A
                <br />
                <span className="text-[#EA2814]">REAL IMPRINT.</span>
              </h2>

              <p className="font-mono text-xs sm:text-sm text-[#0E0E0E]/75 max-w-md leading-relaxed">
                Mine comes from enforcing daily accountability, shaping how engineers think, and building production systems that hold up in real interviews.
              </p>

              <div className="pt-4 border-t border-[#0E0E0E]/20 max-w-sm">
                <div className="text-lg font-black font-display uppercase text-[#0E0E0E]">
                  MR. ROHIT KASHYAP.
                </div>
                <div className="font-mono text-xs text-[#0E0E0E]/65">
                  Founder &amp; CEO, TheCodeSpark Technologies Private Limited.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <FingerprintImprintSvg />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-8 border-t border-[#0E0E0E]/15 pt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <h3 className="text-2xl sm:text-4xl font-black font-display uppercase text-[#0E0E0E]">
                Frequently Asked Questions
              </h3>
              <span className="font-mono text-xs text-[#0E0E0E]/65">
                Admissions &amp; Curriculum Support
              </span>
            </div>

            <div className="space-y-3">
              {faqs.map((f, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={f.q}
                    className={`border transition-colors ${
                      isOpen ? 'bg-white border-[#0E0E0E]' : 'bg-white/60 border-[#0E0E0E]/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold font-display text-[#0E0E0E]">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0E0E0E]/60 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#EA2814]' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-2 border-t border-[#0E0E0E]/10 text-xs sm:text-sm text-[#0E0E0E]/75 leading-relaxed">
                            {f.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BAND 10 (VOID BLACK #0A0A0A): "HAVE A CAREER WORTH UNTANGLING?"
          + DRAGGABLE / HOVERABLE UNTANGLE THREAD
          Matches Video 00:23 - 00:25
          ========================================================================= */}
      <section className="bg-[#0A0A0A] text-[#F5F4F0] pt-16 sm:pt-24 pb-28 relative">
        <SectionSeamDropSvg variant="center" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-4xl sm:text-6xl lg:text-[74px] font-black font-display uppercase tracking-[-0.04em] leading-[0.88] text-white">
                HAVE A CAREER
                <br />
                WORTH
                <br />
                <span className="text-[#EA2814]">UNTANGLING?</span>
              </h2>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onApplyNow}
                  className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-white border-b-2 border-[#EA2814] pb-1.5 hover:text-[#EA2814] transition-colors cursor-pointer"
                >
                  <span>APPLY TO INTENSIVE TRAINING</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>

                <button
                  onClick={onRequestCallback}
                  className="px-5 py-2.5 border border-white/25 hover:border-[#EA2814] font-mono text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  REQUEST CALLBACK →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <InteractiveUntangleSvg />
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#EA2814] transition-colors cursor-pointer uppercase tracking-widest"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <span>© 2026 TheCodeSpark Technologies Private Limited • 7398839769 / 9548248925</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FLOATING STICKY BOTTOM ACTION PILL BAR
          ========================================================================= */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-2xl">
        <div className="bg-[#0E0E0E]/95 backdrop-blur-md border border-white/20 px-4 sm:px-5 py-2.5 shadow-2xl flex items-center justify-between gap-3">
          <button
            onClick={onRequestCallback}
            className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-200 hover:text-[#EA2814] cursor-pointer shrink-0 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#EA2814]" />
            <span>Request Callback</span>
          </button>

          <span className="hidden sm:inline text-xs font-mono text-neutral-400">
            7398839769 / 9548248925
          </span>

          <button
            onClick={onApplyNow}
            className="px-4 py-2 bg-[#EA2814] hover:bg-white hover:text-[#0E0E0E] text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer shrink-0 transition-colors"
          >
            Apply to Intensive Training →
          </button>
        </div>
      </div>
    </div>
  );
};
