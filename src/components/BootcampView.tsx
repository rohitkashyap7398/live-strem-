import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
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
  ShieldCheck,
  Terminal,
  Sparkles,
  Award,
  Code2,
  Database,
  Layers,
  Cpu,
  Users,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import rohitPhoto from '../assets/Rohit.png';

interface BootcampViewProps {
  onApplyNow: () => void;
  onRequestCallback: () => void;
  onViewSyllabus?: () => void;
}

export const BootcampView: React.FC<BootcampViewProps> = ({
  onApplyNow,
  onRequestCallback,
  onViewSyllabus,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Module tab state (Video default: Module 03 Backend Engineering)
  const [activeModuleTab, setActiveModuleTab] = useState(2);

  // Project accordion state
  const [openProjectIdx, setOpenProjectIdx] = useState<number | null>(0);

  // FAQ accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Mentors carousel slide state
  const [mentorSlide, setMentorSlide] = useState(0);

  // 3D card tilt hover states
  const [hovered3dCard, setHovered3dCard] = useState<number | null>(null);

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

  const placedAlumniCards = [
    {
      company: 'AMAZON',
      name: 'Rohan Gupta',
      role: 'SDE-I',
      photo: '/assets/aistudio/faculty_nirved_kumar.png',
    },
    {
      company: 'AIRTEL',
      name: 'Pooja Sharma',
      role: 'Backend Engineer',
      photo: '/assets/aistudio/faculty_aadhya.png',
    },
    {
      company: 'CISCO',
      name: 'Ananya Verma',
      role: 'Cloud Developer',
      photo: '/assets/aistudio/faculty_ishu_sharma.png',
    },
    {
      company: 'SYNCHRONY',
      name: 'Akshat Sahu',
      role: 'Full Stack Engineer',
      photo: '/Rohit.png',
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
      role: 'Founder & CEO · Principal Architect',
      company: 'TheCodeSpark Technologies Private Limited',
      photo: rohitPhoto,
      quote:
        'Students don’t struggle because coding is impossible—they struggle because nobody enforces daily execution, live debugging, and real architectural accountability.',
      badges: ['Full Stack Systems', 'GenAI Agents', 'System Design'],
    },
    {
      name: 'Aadhya',
      role: 'Senior Frontend & Product UI Mentor',
      company: 'TheCodeSpark Core Faculty',
      photo: '/assets/aistudio/faculty_aadhya.png',
      quote:
        'We review pull requests line-by-line just like senior product teams do, turning messy component trees into clean, responsive production interfaces.',
      badges: ['React 19', 'TypeScript', 'UI Architecture'],
    },
    {
      name: 'Ishu Sharma',
      role: 'Backend & Cloud Infrastructure Lead',
      company: 'TheCodeSpark Core Faculty',
      photo: '/assets/aistudio/faculty_ishu_sharma.png',
      quote:
        'From schema indexing to AWS deployments and Docker containers, every student learns to ship reliable services beyond localhost.',
      badges: ['Node.js', 'Docker & AWS', 'Database Tuning'],
    },
    {
      name: 'Nirved Kumar',
      role: 'DSA & Coding Interview Coach',
      company: 'TheCodeSpark Core Faculty',
      photo: '/assets/aistudio/faculty_nirved_kumar.png',
      quote:
        'Visualizing recursion trees, sliding windows, and graph patterns transforms intimidating interview problems into repeatable engineering muscle memory.',
      badges: ['Java Core', '350+ DSA Drills', 'Mock Rounds'],
    },
  ];

  const faqs = [
    {
      q: 'Do I need any prior coding experience to join the Bootcamp?',
      a: 'Yes, basic programming knowledge is helpful, or strong willingness to put in daily practice. The Intensive Training Bootcamp takes you systematically from Web & Programming fundamentals all the way to Full Stack Engineering, GenAI, DevOps, and System Design.',
    },
    {
      q: 'Will you help me get placed, and what kind of career support is included?',
      a: 'Yes! You receive 1-on-1 resume & GitHub portfolio reviews, weekly live mock interviews, communication & presentation training, aptitude drills, and direct placement referrals across our hiring partner network.',
    },
    {
      q: 'How much time does the Intensive Training take daily?',
      a: 'Plan for structured daily lectures, live build challenges, problem sets, and mentor reviews. Consistent daily execution ensures every concept sticks through real code rather than passive watching.',
    },
    {
      q: 'What happens if I get stuck on bugs or assignments?',
      a: 'You never stay stuck alone—mentors and teaching assistants host live doubt-solving rooms, pull-request walkthroughs, and 1-on-1 debugging sessions throughout the cohort.',
    },
  ];

  const activeModule = syllabusModules[activeModuleTab];
  const currentProject = realProjects[openProjectIdx ?? 0];
  const currentMentor = mentors[mentorSlide];

  return (
    <div className="bg-[#07070b] text-white min-h-screen pb-24 selection:bg-[#9333EA] selection:text-white overflow-x-clip">
      {/* =========================================================================
          1. HERO SECTION (100-DAY INTENSIVE COHORT + LIVE LAB VIDEO)
          ========================================================================= */}
      <section className="relative pt-14 pb-16 border-b border-white/[0.06] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-[#7C3AED]/20 rounded-full blur-[150px] pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-[#A855F7]">
              THECODESPARK INTENSIVE TRAINING · 100 DAYS OF EXECUTION
            </span>

            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight leading-[1.08] text-white">
              Structured Around <span className="text-[#A855F7]">Real Building</span>, Not Passive Lectures.
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
              Join an immersive engineering cohort by <span className="text-white font-semibold">TheCodeSpark Technologies Private Limited</span>. 500+ hours of guided sprints, 40+ build challenges, live project defenses, and dedicated career placement prep.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onApplyNow}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-[#7C3AED]/30 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Apply to Intensive Training</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onViewSyllabus && (
                <button
                  onClick={onViewSyllabus}
                  className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  View Syllabus →
                </button>
              )}
            </div>
          </motion.div>

          {/* Right Classroom Lab Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden bg-[#111118] border border-[#8B5CF6]/30 shadow-[0_0_50px_-15px_rgba(139,92,246,0.35)]">
              <div className="aspect-video relative">
                <video
                  ref={videoRef}
                  src="/assets/aistudio/tcs_actual_classroom_lab.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white border border-white/15 flex items-center justify-center cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white border border-white/15 flex items-center justify-center cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 text-xs font-mono text-white/90">
                  <span className="px-2.5 py-1 rounded-md bg-black/65 border border-white/10">
                    Live Cohort Classroom · Lucknow &amp; Online
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. COMPARISON: THECODESPARK BOOTCAMP vs TYPICAL BOOTCAMP (Frame 00:00)
          ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: THECODESPARK BOOTCAMP */}
          <div className="rounded-3xl bg-[#11101a] border border-[#8B5CF6]/45 p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_0_45px_-18px_rgba(139,92,246,0.4)]">
            <div className="space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-5">
                <h2 className="text-lg sm:text-xl font-black font-display tracking-wide text-white uppercase">
                  THECODESPARK BOOTCAMP
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300">
                  100 days. Structured 9 AM to 7 PM. Built around execution, not attendance.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: 'PRACTICE COMES BEFORE THEORY',
                    desc: '5 core lectures every week, followed by guided practice, problem sets, and mini tasks. Topics are not just introduced. Students are trained to use them.',
                  },
                  {
                    title: 'EVERYTHING IS BUILT IN REAL TIME',
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
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
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
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-lg shadow-[#7C3AED]/25 text-center"
            >
              Start With TheCodeSpark Technologies Private Limited →
            </button>
          </div>

          {/* Right: TYPICAL BOOTCAMP */}
          <div className="rounded-3xl bg-[#101014] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-5">
                <h2 className="text-lg sm:text-xl font-black font-display tracking-wide text-neutral-300 uppercase">
                  TYPICAL BOOTCAMP
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Only 2 to 3 hours of class a day. Most of the rest, learning is left for you to figure out later.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: 'THEORY IS KEPT LIMITED',
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
                    desc: 'Projects are given at the end, and interview preparation and real problem-solving are either rushed at the end or completely left out.',
                  },
                ].map((pt) => (
                  <div key={pt.title} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400/80 shrink-0 mt-1" />
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

            <div className="py-3 text-center text-xs font-mono text-neutral-500 border-t border-white/[0.06]">
              Avoid passive learning loops
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PLACED ALUMNI PORTRAITS + "64+ Students Placed Last Month" STRIP (Frame 00:01)
          ========================================================================= */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placedAlumniCards.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl overflow-hidden bg-[#121218] border border-white/10 group"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={item.photo}
                    onError={(e) => {
                      e.currentTarget.src = rohitPhoto;
                    }}
                    alt={item.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                </div>
                <div className="p-3 bg-[#101015] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-white">{item.company}</span>
                  <span className="text-neutral-400 truncate ml-2">{item.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#111118] border border-white/10 px-5 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['AP', 'SK', 'RG', 'PA'].map((init, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-[#7C3AED] border-2 border-[#111118] flex items-center justify-center text-[10px] font-mono font-bold text-white"
                  >
                    {init}
                  </div>
                ))}
              </div>
              <span className="text-xs font-semibold text-neutral-200">
                <strong className="text-white">64+ Students</strong> Placed Last Month
              </span>
            </div>

            <button
              onClick={onApplyNow}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. "One Journey. Every Skill That Matters." (Frame 00:01 - 00:02)
          ========================================================================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            One Journey. Every Skill That Matters.
          </h2>

          <div className="rounded-3xl bg-gradient-to-b from-[#171226] to-[#0f0f15] border border-[#8B5CF6]/35 p-6 sm:p-10 shadow-[0_0_60px_-20px_rgba(139,92,246,0.35)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                {
                  kicker: 'HUMAN LOGIC',
                  title: 'Deep First-Principles',
                  desc: 'Think and reason like an engineer, not just syntax-scanners.',
                },
                {
                  kicker: 'PRODUCTION APPS',
                  title: 'End-to-End Deploys',
                  desc: 'Ship real, deployed products end to end with CI/CD pipelines.',
                },
                {
                  kicker: 'AI WORKFLOWS',
                  title: 'LLM & RAG Ready',
                  desc: 'Build with LLMs and autonomous agents, not just talk about them.',
                },
                {
                  kicker: 'AI PRODUCTIVITY',
                  title: 'Autonomous Tools',
                  desc: 'Mock interviews, resumes, and referrals until you land it.',
                },
              ].map((col) => (
                <div
                  key={col.kicker}
                  className="rounded-2xl bg-black/35 border border-white/10 p-5 space-y-2"
                >
                  <div className="text-[10px] font-mono font-bold text-[#A855F7] tracking-widest">
                    {col.kicker}
                  </div>
                  <div className="text-base font-bold text-white font-display">
                    {col.title}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. "Why You Need To Become A Developer" — 5 INTERACTIVE MODULE TABS (Frames 00:02 - 00:03)
          ========================================================================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white text-center">
            Why You Need To Become A Developer
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 5 Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              {syllabusModules.map((mod, idx) => {
                const isActive = idx === activeModuleTab;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModuleTab(idx)}
                    className={`w-full text-left px-5 py-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#5B21B6]/45 to-[#7C3AED]/25 border-[#8B5CF6] text-white shadow-lg'
                        : 'bg-[#111118] border-white/[0.07] text-neutral-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Sparkles
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? 'text-[#C084FC]' : 'text-neutral-500'
                        }`}
                      />
                      <span className="text-xs sm:text-sm font-semibold truncate">
                        {mod.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400 shrink-0">
                      {mod.id}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Active Module Purple Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-gradient-to-b from-[#171126] to-[#111018] border border-[#8B5CF6]/40 p-7 sm:p-8 space-y-6 shadow-2xl"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                    <div className="space-y-1.5 max-w-sm">
                      <span className="text-[11px] font-mono font-bold text-[#A855F7]">
                        {activeModule.code}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-snug">
                        {activeModule.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-5 text-right font-mono">
                      <div>
                        <div className="text-lg font-black text-white">{activeModule.projects}</div>
                        <div className="text-[10px] text-neutral-400 uppercase">Projects</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-white">{activeModule.duration}</div>
                        <div className="text-[10px] text-neutral-400 uppercase">Duration</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {activeModule.desc}
                  </p>

                  <div className="space-y-2.5">
                    {activeModule.subtopics.map((t, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-neutral-200 bg-black/30 border border-white/[0.06] rounded-xl px-4 py-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-black/40 border border-white/[0.08] p-5 space-y-3">
                    <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#A855F7]" />
                      <span>{activeModule.dbTitle}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-400 list-disc pl-5">
                      {activeModule.dbPoints.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={onApplyNow}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-xs font-bold cursor-pointer hover:brightness-110 transition-all"
                    >
                      Apply Now →
                    </button>
                    {onViewSyllabus && (
                      <button
                        onClick={onViewSyllabus}
                        className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 text-xs font-semibold cursor-pointer transition-colors"
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
      </section>

      {/* =========================================================================
          6. "Real Projects. Real Complexity. Real Proof of Skill." (Frames 00:03 - 00:04)
          ========================================================================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white text-center leading-tight">
            Real Projects. Real Complexity.
            <br />
            Real Proof of Skill.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Dynamic Project Repo Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-b from-[#171126] to-[#111018] border border-[#8B5CF6]/40 p-6 sm:p-7 space-y-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#A855F7] font-bold">
                    {currentProject.repoTag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#7C3AED]/25 border border-[#8B5CF6]/40 text-[10px] font-mono font-bold text-[#C084FC]">
                    ATS-FRIENDLY
                  </span>
                </div>

                <div className="space-y-2 py-4">
                  <h3 className="text-xl font-black text-white font-display">
                    {currentProject.heading}
                  </h3>
                  <div className="text-xs font-mono text-neutral-300">
                    {currentProject.stack}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
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
                    className={`rounded-2xl border overflow-hidden transition-colors ${
                      isOpen
                        ? 'bg-[#171224] border-[#8B5CF6]/50'
                        : 'bg-[#111118] border-white/[0.08]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenProjectIdx(isOpen ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="text-sm font-bold text-white flex items-center gap-2.5">
                        <Code2 className="w-4 h-4 text-[#A855F7] shrink-0" />
                        <span>{proj.title}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 transition-transform ${
                          isOpen ? 'rotate-180 text-white' : ''
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
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
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
          7. "Built Around Everything a Student Usually Misses" — 01, 02, 03 STACK (Frames 00:05 - 00:06)
          ========================================================================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white text-center">
            Built Around Everything a Student Usually Misses
          </h2>

          <div className="space-y-5">
            {[
              {
                num: '01',
                title: 'Your 100 Days Are Already Designed',
                desc: 'Every week combines technical learning, communicative training and hands-on challenges. You learn, practice, build, present and get reviewed without wasting weeks figuring out what to do next.',
                chips: ['01 Technical Classes', '02 Communication', '03 Build Challenges'],
                img: '/assets/aistudio/AI-Powered_Learning_Platform_Conference_4d9a70e4.png',
              },
              {
                num: '02',
                title: 'You Never Stay Stuck Alone',
                desc: 'Mentors stay involved throughout your journey. Prompt review sessions, code breakdowns, dedicated doubt rooms, and career support ensure you get help while the problem is still right in front of you.',
                chips: ['1:1 Code & Doubt Support'],
                img: '/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png',
              },
              {
                num: '03',
                title: 'You Learn to Create, Not Just Code',
                desc: 'Startup sprints, team challenges, product demos and competitions push you beyond textbook projects. You learn how to spot problems, build solutions and confidently defend what you create.',
                chips: ['TheCodeSpark Technologies Pvt Ltd Live Sprints'],
                img: '/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-3xl bg-[#111118] border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-3xl font-black font-display text-[#A855F7]">
                    {step.num}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {step.chips.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b10]">
                    <img
                      src={step.img}
                      onError={(e) => {
                        e.currentTarget.src = rohitPhoto;
                      }}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. "Built To Make You Sharper. Every Single Day." — 3-CARD PURPLE SPOTLIGHT (Frame 00:07)
          ========================================================================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 text-center">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#A855F7]">
              IMMERSIVE RIGOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Built To Make You Sharper. Every Single Day.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Left Card */}
            <motion.div
              onMouseEnter={() => setHovered3dCard(0)}
              onMouseLeave={() => setHovered3dCard(null)}
              animate={{ y: hovered3dCard === 0 ? -4 : 0 }}
              className="rounded-3xl bg-[#111118] border border-white/10 p-8 flex flex-col justify-between text-left"
            >
              <div>
                <div className="text-4xl font-black text-white font-display">
                  100 <span className="text-lg font-normal text-neutral-400">Days</span>
                </div>
                <div className="text-xs font-mono font-bold text-[#A855F7] mt-1">
                  No Room for Passive Learning
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mt-8">
                You code, build, present and are challenged throughout the programme. Watching classes alone is never considered progress.
              </p>
            </motion.div>

            {/* Elevated Purple Center Card */}
            <motion.div
              onMouseEnter={() => setHovered3dCard(1)}
              onMouseLeave={() => setHovered3dCard(null)}
              animate={{ y: hovered3dCard === 1 ? -6 : 0 }}
              className="rounded-3xl bg-gradient-to-b from-[#6D28D9] to-[#4C1D95] border border-[#A855F7]/50 p-8 flex flex-col justify-between text-center shadow-[0_0_60px_-10px_rgba(139,92,246,0.6)] md:-my-3"
            >
              <div>
                <div className="text-5xl font-black text-white font-display">
                  500+ <span className="text-lg font-medium text-white/80">Hours</span>
                </div>
                <div className="text-xs font-semibold text-white/90 mt-1">
                  Professional learning space
                </div>
              </div>
              <p className="text-xs text-white/85 leading-relaxed mt-8">
                Daily training, live mentorship, hands-on practice, and constant feedback designed to keep your growth on track.
              </p>
            </motion.div>

            {/* Right Card */}
            <motion.div
              onMouseEnter={() => setHovered3dCard(2)}
              onMouseLeave={() => setHovered3dCard(null)}
              animate={{ y: hovered3dCard === 2 ? -4 : 0 }}
              className="rounded-3xl bg-[#111118] border border-white/10 p-8 flex flex-col justify-between text-left"
            >
              <div>
                <div className="text-4xl font-black text-white font-display">
                  40 <span className="text-lg font-normal text-neutral-400">Challenges</span>
                </div>
                <div className="text-xs font-mono font-bold text-[#A855F7] mt-1">
                  Where Knowledge Gets Tested
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mt-8">
                Design sprints, team competitions, startup activities and debugging challenges that reveal what you can actually do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. MENTORS CAROUSEL + STUDENT SPOTLIGHTS (Frames 00:08 - 00:11)
          ========================================================================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Mentors Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
                Learn From People Who’ve Actually Done the Work
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Taught directly by Founders, Tech Leads &amp; Principal Engineers
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMentorSlide((p) => (p - 1 + mentors.length) % mentors.length)}
                aria-label="Previous mentor"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMentorSlide((p) => (p + 1) % mentors.length)}
                aria-label="Next mentor"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentMentor.name}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-[#111118] border border-white/10 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-4 aspect-[4/4] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={currentMentor.photo}
                  onError={(e) => {
                    e.currentTarget.src = rohitPhoto;
                  }}
                  alt={currentMentor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="md:col-span-8 space-y-3">
                <div className="text-xs font-mono font-bold text-[#A855F7]">
                  {currentMentor.company}
                </div>
                <h3 className="text-2xl font-black text-white font-display">
                  {currentMentor.name}
                </h3>
                <div className="text-xs text-neutral-400">{currentMentor.role}</div>
                <p className="text-sm text-neutral-300 leading-relaxed pt-1">
                  “{currentMentor.quote}”
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentMentor.badges.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#8B5CF6]/30 text-[11px] font-mono text-[#C084FC]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Student Spotlights */}
          <div className="space-y-6 pt-4">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white text-center leading-tight">
              Why So Many Students Say,
              <br />
              I Should’ve Joined Earlier
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-[#111118] border border-white/10 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-[#7C3AED]/20 text-[#C084FC] font-bold">
                    STUDENTS SPOTLIGHT
                  </span>
                  <span className="text-neutral-400">MERN BATCH</span>
                </div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png"
                    onError={(e) => {
                      e.currentTarget.src = rohitPhoto;
                    }}
                    alt="Winner Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-[#A855F7] font-bold">
                    WINNER TEAM · 3 TIGADA
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    Mini Hedghest Winner
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Big congratulations to Team 3 Tigada for winning our Mini Project Batch. A well deserved win, and we hope this is just the beginning of many more milestones for the team. Keep building, keep learning, and keep leading!
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#111118] border border-white/10 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    THECODESPARK SUCCESS
                  </span>
                  <span className="text-neutral-400">OFF-CAMPUS CRACKED</span>
                </div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 relative">
                  <img
                    src="/assets/aistudio/faculty_nirved_kumar.png"
                    onError={(e) => {
                      e.currentTarget.src = rohitPhoto;
                    }}
                    alt="Off-Campus Cracked Offer"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#7C3AED] text-white text-[10px] font-mono font-bold">
                    GOT PLACED IN RECESSION
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-[#A855F7] font-bold">
                    CRACKED SDE ROLE
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    How He Cracked 18+ LPA in Slowdown
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    He cracked a top package at a high-growth tech startup during a tight hiring cycle. Mastered backend architecture, microservices, and system design from scratch through daily accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS & CTA (Frame 00:12)
          ========================================================================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Pre-FAQ Action Card */}
          <div className="rounded-3xl bg-gradient-to-r from-[#171126] to-[#111118] border border-[#8B5CF6]/35 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                <span>1-on-1 Code Review &amp; Doubt Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                <span>100% Placement Support &amp; Referral Access</span>
              </div>
            </div>

            <button
              onClick={onApplyNow}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 text-white text-xs sm:text-sm font-bold cursor-pointer shrink-0 shadow-lg shadow-[#7C3AED]/25"
            >
              Apply to Intensive Training →
            </button>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black font-display text-white text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((f, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={f.q}
                    className="rounded-2xl bg-[#111118] border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-sm font-bold text-white">{f.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#A855F7]' : ''
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
                          <div className="px-6 pb-5 pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-neutral-400 leading-relaxed">
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
          FLOATING STICKY BOTTOM ACTION PILL BAR (Exact match to video frames)
          ========================================================================= */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-2xl">
        <div className="rounded-2xl bg-[#14141d]/95 backdrop-blur-md border border-white/15 px-3.5 sm:px-5 py-2.5 shadow-2xl flex items-center justify-between gap-3">
          <button
            onClick={onRequestCallback}
            className="flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-white cursor-pointer shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Request Callback</span>
          </button>

          <span className="hidden sm:inline text-xs font-mono text-neutral-400">
            7398839769 / 9548248925
          </span>

          <button
            onClick={onApplyNow}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 text-white text-xs font-bold cursor-pointer shrink-0 shadow-md shadow-[#7C3AED]/30"
          >
            Apply to Intensive Training →
          </button>
        </div>
      </div>
    </div>
  );
};
