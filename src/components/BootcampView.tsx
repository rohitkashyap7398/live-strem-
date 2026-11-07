import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Users, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  XCircle, 
  Linkedin, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Check, 
  Zap, 
  Briefcase, 
  Code2,
  GraduationCap,
  Globe,
  Plus,
  Minus,
  Layers,
  FolderGit2,
  Phone
} from 'lucide-react';
import brandLogo from '../assets/logo.png';
import rohitPhoto from '../assets/Rohit.png';

interface BootcampViewProps {
  onApplyNow: () => void;
  onRequestCallback: () => void;
  onViewSyllabus?: () => void;
}

export const BootcampView: React.FC<BootcampViewProps> = ({
  onApplyNow,
  onRequestCallback,
  onViewSyllabus
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

  // 5 Modules matching the Video (00:12 - 00:15)
  const bootcampModules = [
    {
      id: "01",
      badge: "Module 01",
      title: "Frontend Foundations",
      subtitle: "Master the fundamental building blocks of modern web applications: semantic layout, responsive styling, and modern JavaScript.",
      projects: "06+ Projects",
      months: "01 Months",
      learnTopics: [
        {
          num: "01",
          title: "HTML5 Semantic Standards & DOM Architecture",
          items: [
            "Semantic structure, accessibility tree, DOM & CSSOM parsing pipelines.",
            "Modern CSS Grid, Flexbox layouts, utility-first Tailwind design systems.",
            "Core JavaScript: execution context, closures, event loop, and asynchronous DOM manipulation."
          ]
        },
        {
          num: "02",
          title: "TypeScript & Production Build Tooling",
          items: [
            "Static typing, interfaces, generics, and strict TypeScript configurations.",
            "Vite module bundler, tree-shaking, hot module replacement, and asset optimization.",
            "Git & GitHub collaboration workflows, branching strategies, and CI pull request hygiene."
          ]
        }
      ]
    },
    {
      id: "02",
      badge: "Module 02",
      title: "React & Next.js",
      subtitle: "Component architecture, Server Components, client state orchestration, custom hooks, and modern full-stack performance.",
      projects: "08+ Projects",
      months: "01 Months",
      learnTopics: [
        {
          num: "01",
          title: "React 19 & Component Architecture",
          items: [
            "Virtual DOM reconciliation, compiler optimizations, custom hooks orchestration.",
            "Complex state management with Zustand, React Query for server cache synchronization.",
            "Framer Motion micro-interactions, spring physics animations, and responsive layout polish."
          ]
        },
        {
          num: "02",
          title: "Next.js App Router & Full-Stack SSR",
          items: [
            "Server Components, streaming SSR with Suspense boundaries, and Server Actions.",
            "Dynamic routing, parallel and intercepting routes, and metadata optimization for SEO.",
            "Edge middleware, authentication guards, and edge caching strategies."
          ]
        }
      ]
    },
    {
      id: "03",
      badge: "Module 03",
      title: "Backend Engineering with Node, Express & MongoDB",
      subtitle: "Design scalable REST APIs, secure authentication flows, and manage SQL and NoSQL database schemas.",
      projects: "08+ Projects",
      months: "01 Months",
      learnTopics: [
        {
          num: "01",
          title: "REST API Design & Node Core",
          items: [
            "Node.js asynchronous event loop, event emitters, streams, and file system operations.",
            "Express middleware architecture, Request/response pipelines, global error handlers, and validation layers.",
            "Security: JWT authentication, bcrypt password hashing, CORS, rate-limiting, and Helmet integration."
          ]
        },
        {
          num: "02",
          title: "Database Design with MongoDB",
          items: [
            "Data Modeling Mongoose schemas, relationships, indexing, and aggregations.",
            "Transactions: implementing ACID operations across multiple document collections.",
            "Migration Strategy for databases updates, backups, and staging deployments."
          ]
        }
      ]
    },
    {
      id: "04",
      badge: "Module 04",
      title: "DevOps, Cloud & Deployment",
      subtitle: "Ship applications with confidence using Docker containers, AWS cloud infrastructure, and automated CI/CD pipelines.",
      projects: "05+ Cloud Apps",
      months: "0.5 Months",
      learnTopics: [
        {
          num: "01",
          title: "Dockerization & Multi-Stage Production Builds",
          items: [
            "Containerizing full-stack microservices, multi-stage Dockerfiles, and minimal image layers.",
            "Docker Compose networks, persistent volumes, environment isolation, and health checks.",
            "Reverse proxying with NGINX, SSL certificates with Let's Encrypt, and domain DNS setup."
          ]
        },
        {
          num: "02",
          title: "AWS Cloud Infrastructure & GitHub Actions",
          items: [
            "Deploying on AWS EC2, S3 asset buckets, CloudFront CDN caching, and RDS databases.",
            "GitHub Actions automated lint, test, build, and zero-downtime deployment workflows.",
            "Application logging, Datadog / PM2 process monitoring, and cloud cost optimization."
          ]
        }
      ]
    },
    {
      id: "05",
      badge: "Module 05",
      title: "Scaling, Reliability & Microservices",
      subtitle: "Learn how high-traffic tech platforms handle millions of concurrent users with load balancers, caching, and message queues.",
      projects: "04+ Systems",
      months: "0.5 Months",
      learnTopics: [
        {
          num: "01",
          title: "High-Scale Distributed Architecture",
          items: [
            "Horizontal vs vertical scaling, CAP theorem, database read-replicas, and sharding.",
            "Redis distributed caching, cache-invalidation strategies, and pub/sub message brokers.",
            "WebSockets real-time events, socket clustering, and message delivery guarantees."
          ]
        },
        {
          num: "02",
          title: "System Design & Interview Case Studies",
          items: [
            "Designing scalable systems: Netflix video streaming, Uber ride-matching, Twitter timeline.",
            "Rate limiting algorithms (Token Bucket, Leaky Bucket), idempotency keys, and circuit breakers.",
            "Mock system design interviews with senior tech leads from Tier-1 product companies."
          ]
        }
      ]
    }
  ];

  // Projects list matching Video (00:15 - 00:17)
  const bootcampProjects = [
    {
      title: "AI Powered Business Dashboard",
      desc: "A real-world product dashboard with authentication, analytics, reporting, user roles and decision-focused UI. Learn how data-driven products are structured and shipped with live revenue forecasting and PDF exports."
    },
    {
      title: "Collaboration SaaS",
      desc: "Multiplayer document editor with WebSockets, CRDT conflict resolution, live cursor tracking, presence channels, and real-time permission access control."
    },
    {
      title: "Quick-Commerce Platform",
      desc: "End-to-end e-commerce store with geospatial delivery routing, inventory synchronization, Razorpay payments, real-time rider tracking, and order dispatch engine."
    },
    {
      title: "AI-Powered Resume Reviewer",
      desc: "Enterprise ATS simulation using Google Gemini API embeddings, semantic vector similarity search, and automated rubric scoring with actionable candidate feedback."
    }
  ];

  // Mentors list matching Video (00:26 - 00:28) with Mr. Rohit Kashyap as Founder & Chief Mentor
  const mentors = [
    { 
      name: "Mr. Rohit Kashyap", 
      role: "Founder & CEO, TheCodeSpark", 
      subrole: "Chief Mentor & Guide",
      badge: "FOUNDER",
      img: rohitPhoto,
      isFounder: true
    },
    { 
      name: "Ali Ansari", 
      role: "Frontend Architect", 
      subrole: "TheCodeSpark Mentors",
      badge: "MENTOR",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" 
    },
    { 
      name: "Devendra Dhote", 
      role: "Backend & Cloud Lead", 
      subrole: "TheCodeSpark Mentors",
      badge: "MENTOR",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" 
    },
    { 
      name: "Harsh Sharma", 
      role: "Lead Tech Mentor", 
      subrole: "TheCodeSpark Mentors",
      badge: "MENTOR",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80" 
    },
    { 
      name: "Sarthak Sharma", 
      role: "Full Stack Engineer", 
      subrole: "TheCodeSpark Mentors",
      badge: "MENTOR",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80" 
    },
    { 
      name: "Ankur Prajapati", 
      role: "DSA & System Coach", 
      subrole: "TheCodeSpark Mentors",
      badge: "MENTOR",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80" 
    }
  ];

  const bootcampFaqs = [
    {
      q: "Do I need any prior coding experience to join the Bootcamp?",
      a: "Yes, basic programming knowledge is required. This Bootcamp is designed for students who already understand programming fundamentals and want to become industry-ready full stack developers. We start with frontend foundations and gradually move towards advanced backend, DevOps, cloud deployment, and system design, so having basic coding familiarity will help you get the most out of the program."
    },
    {
      q: "Will you help me get placed, and what kind of career support is included?",
      a: "Yes! 100% placement support is integrated throughout the 100 days. Includes technical resume reviews, mock interviews with hiring managers from top product companies, portfolio defenses, LinkedIn branding, and direct referral access to our 300+ hiring partner companies."
    },
    {
      q: "How much time should I dedicate to the Bootcamp every day?",
      a: "This is an intensive full-time program running from 11:00 AM to 5:00 PM (Monday to Saturday). Every day blends technical classes, guided practice, live debugging labs, mentor doubt resolution, and build challenges."
    },
    {
      q: "Is the curriculum up to date with what companies are actually hiring for?",
      a: "Absolutely. Our curriculum is reviewed every quarter with engineering leads from Amazon, Walmart, and high-growth venture-backed startups, incorporating React 19, Next.js, Node.js microservices, Docker, AWS cloud, and GenAI APIs."
    },
    {
      q: "Is accommodation and food included in the TheCodeSpark Bootcamp?",
      a: "We have partnered verified student PGs and hostels within walking distance of our Lucknow campus (Indrapuri Sector C). Our admissions team assists you with comfortable accommodation options upon enrollment."
    }
  ];

  const handlePrevMentor = () => {
    setMentorSlide((prev) => (prev > 0 ? prev - 1 : mentors.length - 1));
  };

  const handleNextMentor = () => {
    setMentorSlide((prev) => (prev < mentors.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-[#f3f4f6] pb-24 relative overflow-hidden selection:bg-purple-600 selection:text-white">
      {/* GIANT OUTLINE WATERMARK (Video exact: large background text SPARK / KODR) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-stroke-purple text-[130px] sm:text-[220px] lg:text-[320px] font-black uppercase tracking-tighter opacity-15 pointer-events-none select-none font-display z-0 leading-none">
        SPARK
      </div>

      {/* Background Radial Purple Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-purple-600/20 blur-[170px] pointer-events-none rounded-full z-0" />

      {/* 1. HERO SECTION (Video exact: 00:00 - 00:01) */}
      <section className="relative z-10 pt-16 sm:pt-20 pb-12 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.15]"
        >
          You&apos;re Just <span className="text-[#4ade80] drop-shadow-[0_0_25px_rgba(74,222,128,0.4)]">100 Days</span> Away<br />
          From Becoming A Full-Stack<br />
          Developer
        </motion.h1>

        {/* Subhead */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed font-sans"
        >
          From Debugging Code To Pitching Products, Every Day Is Built To Make You Sharper.
        </motion.p>

        {/* Explore Program CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onApplyNow}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] hover:from-[#6d28d9] hover:to-[#4f46e5] text-white text-xs sm:text-sm font-bold shadow-[0_0_35px_rgba(124,58,237,0.45)] transition-all inline-flex items-center gap-2 cursor-pointer border border-purple-400/40"
          >
            <span>Explore Program</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* 4 Stat Boxes (Video exact: 7.5 Lakh / 47 Lakh / 300+ / 10M+) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-8 max-w-4xl mx-auto">
          {/* Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-2xl bg-[#0c0c12]/90 border border-white/10 flex items-center justify-between shadow-lg hover:border-purple-500/40 transition-colors"
          >
            <div className="text-left">
              <span className="text-xl sm:text-2xl font-black text-white font-mono block">7.5 Lakh</span>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-sans">Average Package</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-2xl bg-[#0c0c12]/90 border border-white/10 flex items-center justify-between shadow-lg hover:border-purple-500/40 transition-colors"
          >
            <div className="text-left">
              <span className="text-xl sm:text-2xl font-black text-white font-mono block">47 Lakh</span>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-sans">Highest Package</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722] shrink-0">
              <Award className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-2xl bg-[#0c0c12]/90 border border-white/10 flex items-center justify-between shadow-lg hover:border-purple-500/40 transition-colors"
          >
            <div className="text-left">
              <span className="text-xl sm:text-2xl font-black text-white font-mono block">300+</span>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-sans">Hiring Partners</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
              <Users className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-2xl bg-[#0c0c12]/90 border border-white/10 flex items-center justify-between shadow-lg hover:border-purple-500/40 transition-colors"
          >
            <div className="text-left">
              <span className="text-xl sm:text-2xl font-black text-white font-mono block">10M+</span>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-sans">Monthly Tech Reach</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. HIRING PARTNERS MARQUEE TICKER (Video exact: 00:01 - 00:02) */}
      <section className="py-7 border-y border-white/5 bg-[#050508] overflow-hidden relative">
        <div className="animate-marquee flex items-center gap-14 sm:gap-20 opacity-80 whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-1.5 font-bold font-sans text-base text-white">
                <span className="text-blue-400">Walmart</span>
                <span className="text-amber-400 text-lg">✻</span>
              </div>
              <div className="flex items-center gap-2 font-mono font-bold text-base text-white">
                <span className="text-pink-500 font-black">tcs</span>
                <span className="text-[10px] text-neutral-400 font-sans leading-none block">TATA<br />CONSULTANCY SERVICES</span>
              </div>
              <div className="flex items-center gap-2 font-display font-bold text-base text-white">
                <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                  <div className="bg-[#f25022] rounded-[1px]" />
                  <div className="bg-[#7fba00] rounded-[1px]" />
                  <div className="bg-[#00a4ef] rounded-[1px]" />
                  <div className="bg-[#ffb900] rounded-[1px]" />
                </div>
                <span>Microsoft</span>
              </div>
              <div className="flex items-center gap-1 font-sans font-bold text-base text-white">
                <span>accenture</span>
                <span className="text-purple-400 font-black text-lg">&gt;</span>
              </div>
              <div className="flex items-center gap-1.5 font-sans font-bold text-base text-blue-400">
                <span className="w-4 h-4 rounded bg-blue-500 text-white font-mono text-[10px] flex items-center justify-center">R</span>
                <span>Razorpay</span>
              </div>
              <div className="flex items-center gap-1 font-display font-bold text-base text-white">
                <span>amazon</span>
              </div>
              <div className="flex items-center gap-1 font-display font-bold text-base text-white">
                <span className="text-blue-400">G</span>
                <span className="text-red-400">o</span>
                <span className="text-amber-400">o</span>
                <span className="text-blue-400">g</span>
                <span className="text-emerald-400">l</span>
                <span className="text-red-400">e</span>
              </div>
              <div className="flex items-center gap-1 font-sans font-bold text-base text-amber-400">
                <span>Flipkart</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 3. SPOTLIGHT SUCCESS STORY CARD: KUSHAGRA PATIDAR (Video exact: 00:02 - 00:04) */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Watermark Behind Kushagra */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stroke-purple text-[100px] sm:text-[180px] font-black uppercase tracking-tighter opacity-10 pointer-events-none select-none font-display">
          KODR
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 bg-[#0b0a12]/95 border border-purple-500/40 shadow-2xl shadow-purple-600/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
        >
          {/* Left: Video Preview Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-video bg-black relative border border-white/10 shadow-xl group">
            <video
              ref={videoRef}
              src="/assets/aistudio/20261101-0924-03.9986608_07acd9cf.mp4"
              className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all duration-500"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />

            {/* Top Video Controls */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md cursor-pointer transition-colors"
                aria-label="Toggle video playback"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md cursor-pointer transition-colors"
                aria-label="Toggle audio"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Video Overlays */}
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-neutral-300 border border-white/10">
              Before.
            </div>

            <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-mono text-white flex items-center gap-2.5 border border-white/10 shadow-lg">
              <img
                src={brandLogo}
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="Logo"
                className="h-5 w-auto object-contain shrink-0 filter drop-shadow"
              />
              <span className="font-semibold text-[11px]">I AM TheCodeSpark</span>
            </div>
          </div>

          {/* Right: Success Details */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md font-bold inline-block">
              PLACEMENT CYCLE
            </span>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                KUSHAGRA PATIDAR
              </h3>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                TheCodeSpark Placement Success Story
              </p>
            </div>

            <div className="py-1">
              <span className="text-3xl sm:text-4xl font-black text-[#4ade80] font-mono block drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                ₹47 LAKHS <span className="text-xs text-neutral-400 font-normal">/Annum</span>
              </span>
              <p className="text-xs text-neutral-300 font-medium mt-1">
                Secured A Package At <strong className="text-white">Amazon</strong>.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onApplyNow}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply Now →</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 4. COMPARISON: "Why Some Students Grow Faster Than Others" (Video exact: 00:04 - 00:07) */}
      <section className="py-20 bg-[#060609] border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Why Some Students Grow Faster Than Others
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              The honest breakdown of our rigorous execution environment versus traditional rush-through bootcamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Card: THECODESPARK BOOTCAMP (Glowing Neon Purple) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#0c0a14] border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.22)] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1 pb-2 border-b border-purple-500/20">
                  <h3 className="text-lg sm:text-xl font-black text-white font-display tracking-tight">
                    THECODESPARK BOOTCAMP
                  </h3>
                  <p className="text-xs text-neutral-300 font-mono">
                    100 full-time days. 11 AM to 5 PM. Built around execution, not attendance.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Point 1 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>DEPTH BEFORE DEADLINES</span>
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed pl-6">
                      5 core lectures every week, followed by guided practice, debugging and mentor support. Topics are not just introduced. Students are trained to use them.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>FROM CODER TO CREATOR</span>
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed pl-6">
                      2 activities every week, including full-day challenges, startup MVPs, team competitions and project defence. Students learn to identify problems, build solutions and present their thinking.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>YOUR PROGRESS CANNOT HIDE</span>
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed pl-6">
                      Daily tasks, submissions, assessments, attendance, mentor reviews, house points and leaderboards make every student&apos;s performance visible.
                    </p>
                  </div>

                  {/* Point 4 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>COMPLETE CAREER TRAINING</span>
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed pl-6">
                      Communication sessions every week, along with full-stack development, DSA, teamwork, presentations, interview preparation and startup thinking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onApplyNow}
                  className="w-full py-3.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30 cursor-pointer"
                >
                  Start with TheCodeSpark →
                </button>
              </div>
            </div>

            {/* Right Card: TYPICAL BOOTCAMP */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#101015] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1 pb-2 border-b border-white/5">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-300 font-display tracking-tight">
                    TYPICAL BOOTCAMP
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    Short classes. Rushed modules. Most of the real learning is left for you to figure out later.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Point 1 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white/5 text-neutral-400 flex items-center justify-center shrink-0 text-[10px]">
                        ✕
                      </div>
                      <span>THE CALENDAR DECIDES THE SPEED</span>
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed pl-6">
                      Topics keep moving because the syllabus must finish. Whether you understood, practiced or can apply them is often your problem.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white/5 text-neutral-400 flex items-center justify-center shrink-0 text-[10px]">
                        ✕
                      </div>
                      <span>PROJECTS YOU CAN SHOW, NOT DEFEND</span>
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed pl-6">
                      Students follow the instructor, copy familiar projects and submit rushed work. The project reaches the resume, but the understanding does not.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white/5 text-neutral-400 flex items-center justify-center shrink-0 text-[10px]">
                        ✕
                      </div>
                      <span>YOU CAN FALL BEHIND QUIETLY</span>
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed pl-6">
                      Assignments remain unchecked, doubts keep piling up and weak performance goes unnoticed until the course is almost over.
                    </p>
                  </div>

                  {/* Point 4 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wider flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white/5 text-neutral-400 flex items-center justify-center shrink-0 text-[10px]">
                        ✕
                      </div>
                      <span>THE CERTIFICATE COMES FIRST</span>
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed pl-6">
                      Communication, teamwork, interview preparation and real problem-solving are either rushed at the end or completely left out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] text-neutral-500 font-mono">
                  Avoid passive learning loops
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STUDENTS PLACED AT TOP COMPANIES (Video exact: 00:07 - 00:09) */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            TheCodeSpark Students Placed At Top Companies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { 
              name: "Kushagra Patidar", 
              lpa: "47 LPA", 
              comp: "amazon", 
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" 
            },
            { 
              name: "Mansi Sahu", 
              lpa: "18+ LPA", 
              comp: "airtel", 
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" 
            },
            { 
              name: "Rishita Jain", 
              lpa: "17+ LPA", 
              comp: "cisco", 
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80" 
            },
            { 
              name: "Shruti Sarawagi", 
              lpa: "12+ LPA", 
              comp: "synchrony", 
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80" 
            }
          ].map((student, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl p-5 bg-[#0e0e15] border border-white/10 space-y-3 relative group hover:border-purple-500/50 transition-all shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">{student.name}</h4>
                  <span className="text-xs font-mono font-bold text-[#4ade80]">{student.lpa}</span>
                </div>
                <div className="w-6 h-6 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Linkedin className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>

              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center py-1">
                <span className="text-xs font-mono uppercase tracking-wider text-white font-bold bg-white/5 border border-white/10 px-3 py-1 rounded inline-block">
                  {student.comp}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Placement Ticker Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0e0e15] border border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full border-2 border-[#0e0e15] bg-purple-500/80 flex items-center justify-center text-[10px] text-white font-bold">KP</div>
              <div className="w-7 h-7 rounded-full border-2 border-[#0e0e15] bg-pink-500/80 flex items-center justify-center text-[10px] text-white font-bold">MS</div>
              <div className="w-7 h-7 rounded-full border-2 border-[#0e0e15] bg-emerald-500/80 flex items-center justify-center text-[10px] text-white font-bold">RJ</div>
            </div>
            <span className="text-xs font-sans text-neutral-300">
              <strong className="text-white font-semibold">54+ Students</strong> Placed Last Month
            </span>
          </div>
          <button
            onClick={onApplyNow}
            className="text-xs text-neutral-300 hover:text-white px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-sans cursor-pointer transition-colors"
          >
            View All
          </button>
        </div>
      </section>

      {/* 6. ONE JOURNEY. EVERY SKILL THAT MATTERS (Video exact: 00:10 - 00:11) */}
      <section className="py-20 bg-[#050508] border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            One Journey. Every Skill That Matters.
          </h2>

          {/* Cinematic Creation of AI / Hand touching Robot Hand Illustration */}
          <div className="relative w-full max-w-4xl mx-auto h-48 sm:h-64 rounded-3xl overflow-hidden bg-gradient-to-r from-purple-950/20 via-black to-indigo-950/20 border border-purple-500/20 flex items-center justify-center">
            {/* Ambient Spark Beam */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-purple-500/30 blur-2xl animate-pulse" />
              <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_30px_#22d3ee]" />
            </div>

            {/* Left Hand Vector (Human) */}
            <div className="absolute left-6 sm:left-14 flex items-center gap-3">
              <div className="space-y-1 text-left hidden sm:block">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block">HUMAN LOGIC</span>
                <span className="text-xs text-neutral-300">Deep First-Principles</span>
              </div>
              <div className="text-4xl sm:text-6xl filter drop-shadow">👉</div>
            </div>

            {/* Glowing Connection Spark Text */}
            <div className="relative z-10 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                CODE × GEN-AI SYNERGY
              </span>
            </div>

            {/* Right Hand Vector (Robot / AI) */}
            <div className="absolute right-6 sm:right-14 flex items-center gap-3">
              <div className="text-4xl sm:text-6xl filter drop-shadow">👈</div>
              <div className="space-y-1 text-right hidden sm:block">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">AI PRODUCTION</span>
                <span className="text-xs text-neutral-300">Autonomous Tools</span>
              </div>
            </div>
          </div>

          {/* 4 Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0c14] border border-purple-500/30 text-center space-y-2 hover:border-purple-400 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-lg">
                🧠
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">Foundations</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Think and reason like an engineer, not just write syntax.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0c14] border border-purple-500/30 text-center space-y-2 hover:border-purple-400 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-lg">
                💻
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">Full Stack Dev</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ship real, deployed products end to end.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0c14] border border-purple-500/30 text-center space-y-2 hover:border-purple-400 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-lg">
                ⚡
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">AI Engineering</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Build with LLMs, not just talk about them.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0c14] border border-purple-500/30 text-center space-y-2 hover:border-purple-400 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-lg">
                🎯
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">Placement Prep</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Mock interviews, resumes, and referrals until you land it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. WHY YOU NEED TO BECOME A DEVELOPER: CURRICULUM TABS (Video exact: 00:12 - 00:15) */}
      <section className="py-20 bg-[#08080c] border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Why You Need To Become A Developer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Module Tabs */}
            <div className="lg:col-span-5 space-y-2.5">
              {bootcampModules.map((mod, idx) => {
                const active = activeModuleTab === idx;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModuleTab(idx)}
                    className={`relative w-full p-4 rounded-xl text-left transition-all border cursor-pointer flex items-center justify-between gap-3 ${
                      active
                        ? 'border-purple-500 bg-[#171324] text-white font-bold shadow-lg shadow-purple-600/20'
                        : 'bg-[#101015] border-white/5 text-neutral-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${active ? 'bg-purple-500 text-white' : 'bg-white/5 text-neutral-500'}`}>
                        &lt;/&gt;
                      </span>
                      <span className="text-xs sm:text-sm font-sans truncate">{mod.title}</span>
                    </div>

                    <span className="text-[10px] font-mono text-purple-400 shrink-0">
                      {mod.id}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Active Module Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeModuleTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl p-6 sm:p-8 bg-[#0f0e18] border border-purple-500/30 shadow-2xl space-y-6"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2.5 py-0.5 rounded font-bold inline-block">
                        {bootcampModules[activeModuleTab].badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-display pt-1">
                        {bootcampModules[activeModuleTab].title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-300 shrink-0">
                      <div className="text-center">
                        <span className="text-base font-bold text-white block">{bootcampModules[activeModuleTab].projects}</span>
                        <span className="text-[10px] text-neutral-400 uppercase">Projects</span>
                      </div>
                      <span className="text-neutral-600">|</span>
                      <div className="text-center">
                        <span className="text-base font-bold text-white block">{bootcampModules[activeModuleTab].months}</span>
                        <span className="text-[10px] text-neutral-400 uppercase">Duration</span>
                      </div>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {bootcampModules[activeModuleTab].subtitle}
                  </p>

                  {/* What You'll Learn Section */}
                  <div className="space-y-4 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
                      WHAT YOU&apos;LL LEARN
                    </span>

                    <div className="space-y-3">
                      {bootcampModules[activeModuleTab].learnTopics.map((topic, tIdx) => (
                        <div key={tIdx} className="p-4 sm:p-5 rounded-2xl bg-[#141320] border border-white/5 space-y-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white font-display flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-[10px] flex items-center justify-center shrink-0">
                              {topic.num}
                            </span>
                            <span>{topic.title}</span>
                          </h4>

                          <ul className="space-y-1.5 pl-7 text-xs text-neutral-300">
                            {topic.items.map((it, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">•</span>
                                <span className="leading-relaxed">{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <button
                      onClick={onApplyNow}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30 cursor-pointer"
                    >
                      Apply Now →
                    </button>
                    <button
                      onClick={onViewSyllabus || onRequestCallback}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-sans transition-colors cursor-pointer border border-white/10"
                    >
                      View Syllabus →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 8. REAL PROJECTS. REAL COMPLEXITY. REAL PROOF OF SKILL (Video exact: 00:15 - 00:17) */}
      <section className="py-20 bg-[#050508] border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Real Projects. Real Complexity.<br />Real Proof of Skill.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Glowing Purple Folder Asset / Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-64 sm:w-80 sm:h-72 rounded-3xl bg-gradient-to-br from-purple-600/25 via-indigo-600/20 to-transparent border-2 border-purple-500/40 p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(168,85,247,0.2)] group hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest bg-purple-500/20 px-2.5 py-1 rounded-md">
                    ATS-FRIENDLY
                  </span>
                </div>

                {/* Peeking preview sheets */}
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 shadow-lg text-xs font-mono text-neutral-300">
                    <div className="text-[10px] text-purple-400 font-bold">PROJECT REPO 01</div>
                    <div className="text-white font-semibold mt-0.5">Live Production Deployments</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-neutral-400 font-mono">
                    CI/CD Pipelines • Docker • AWS S3
                  </div>
                </div>

                <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Defended in Final Jury Evaluation</span>
                </div>
              </div>
            </div>

            {/* Right: Project Accordion List */}
            <div className="lg:col-span-7 space-y-3">
              {bootcampProjects.map((proj, idx) => {
                const isOpen = openProjectIdx === idx;
                return (
                  <div 
                    key={idx} 
                    className={`rounded-2xl border transition-all ${
                      isOpen ? 'border-purple-500/60 bg-[#12111d]' : 'border-white/10 bg-[#0e0e15]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenProjectIdx(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between hover:bg-white/[0.02] cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white font-display flex items-center gap-2.5">
                        <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{proj.title}</span>
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 transition-transform ${isOpen ? 'rotate-180 text-purple-400' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 border-t border-white/5 bg-[#141320]/60 leading-relaxed font-sans">
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

      {/* 9. BUILT AROUND EVERYTHING A STUDENT USUALLY MISSES (Video exact: 00:17 - 00:22) */}
      <section className="py-20 bg-[#08080c] border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Built Around Everything a Student Usually Misses
            </h2>
          </div>

          <div className="space-y-8">
            {/* Step 01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-8 bg-[#0d0c16] border border-white/10">
              <div className="md:col-span-6 space-y-3">
                <span className="text-4xl font-black text-purple-400 font-mono block">01</span>
                <h3 className="text-xl font-bold text-white font-display">Your 100 Days Are Already Designed</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  Every week combines technical learning, communication training and hands-on challenges. You learn, practice, build, present and get reviewed without wasting weeks figuring out what to do next.
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-neutral-300">
                  <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">05 Technical Classes</span>
                  <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">03 Communication</span>
                  <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">02 Build Challenges</span>
                </div>
              </div>
              <div className="md:col-span-6 rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
                  alt="Students Collaborating"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Step 02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-8 bg-[#0d0c16] border border-white/10">
              <div className="md:col-span-6 space-y-3">
                <span className="text-4xl font-black text-purple-400 font-mono block">02</span>
                <h3 className="text-xl font-bold text-white font-display">You Never Stay Stuck Alone</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  Mentors stay involved throughout your journey. From broken code and weak concepts to project decisions and career doubts, you get support while the problem is still in front of you.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#4ade80] bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-lg inline-block">
                    1:1 Code &amp; Doubt Support
                  </span>
                </div>
              </div>
              <div className="md:col-span-6 rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80"
                  alt="Mentor Helping Student"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-8 bg-[#0d0c16] border border-white/10">
              <div className="md:col-span-6 space-y-3">
                <span className="text-4xl font-black text-purple-400 font-mono block">03</span>
                <h3 className="text-xl font-bold text-white font-display">You Learn to Create, Not Just Code</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  Startup sprints, team challenges, product demos and competitions push you beyond following tutorials. You learn to find problems, build solutions and confidently defend what you create.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/25 px-3 py-1 rounded-lg inline-block">
                    The TheCodeSpark Builder Community
                  </span>
                </div>
              </div>
              <div className="md:col-span-6 rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80"
                  alt="Builder Community Celebration"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* 3-Photo Offline Lab Strip (Video exact: 00:21 - 00:22) */}
          <div className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl overflow-hidden p-2 bg-[#0b0a12] border border-white/10">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80"
                  alt="Workstations Lab"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80"
                  alt="Pair Programming"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80"
                  alt="Focused Lab Session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. 3D PERSPECTIVE ROTATING TILT CARDS (Video exact: 00:23 - 00:25) */}
      <section className="py-20 bg-[#050508] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
              IMMERSIVE RIGOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Built To Make You Sharper. Every Single Day.
            </h2>
          </div>

          {/* 3D Perspective Container */}
          <div className="perspective-1200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Card 1: 100 Days (Tilted rotateY(-14deg)) */}
            <motion.div 
              onMouseEnter={() => setHovered3dCard(1)}
              onMouseLeave={() => setHovered3dCard(null)}
              animate={{ 
                rotateY: hovered3dCard === 1 ? 0 : -12,
                scale: hovered3dCard === 1 ? 1.03 : 0.98
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0e0e15] border border-white/10 shadow-2xl flex flex-col justify-between h-[380px] cursor-pointer hover:border-purple-500/50 preserve-3d"
            >
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                  <div className="w-4 h-4 rounded-full border-2 border-white/40" />
                </div>
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono block">
                    100<span className="text-2xl text-neutral-400 font-normal"> Days</span>
                  </span>
                  <h3 className="text-base font-bold text-white font-display mt-2">
                    No Room for Passive Learning
                  </h3>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                You code, build, present and are challenged throughout the programme. Watching classes alone is never considered progress.
              </p>
            </motion.div>

            {/* Card 2: 500+ Hours (Glowing Violet Center Card) */}
            <motion.div 
              onMouseEnter={() => setHovered3dCard(2)}
              onMouseLeave={() => setHovered3dCard(null)}
              animate={{ 
                rotateY: 0,
                scale: hovered3dCard === 2 ? 1.05 : 1.02,
                y: -4
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#8b5cf6] to-[#6d28d9] text-white shadow-[0_0_50px_rgba(139,92,246,0.35)] flex flex-col justify-between h-[410px] cursor-pointer border border-purple-300/40 preserve-3d relative z-10"
            >
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <div className="w-4 h-4 rounded-full border-2 border-white" />
                </div>
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono block">
                    500+<span className="text-2xl text-purple-200 font-normal"> Hours</span>
                  </span>
                  <h3 className="text-base font-bold text-white font-display mt-2">
                    Professional learning space
                  </h3>
                </div>
              </div>

              <p className="text-xs text-purple-100 leading-relaxed font-sans">
                Daily training, live mentorship, hands-on practice and constant feedback designed to keep your growth on track.
              </p>
            </motion.div>

            {/* Card 3: 40 Challenges (Tilted rotateY(14deg)) */}
            <motion.div 
              onMouseEnter={() => setHovered3dCard(3)}
              onMouseLeave={() => setHovered3dCard(null)}
              animate={{ 
                rotateY: hovered3dCard === 3 ? 0 : 12,
                scale: hovered3dCard === 3 ? 1.03 : 0.98
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0e0e15] border border-white/10 shadow-2xl flex flex-col justify-between h-[380px] cursor-pointer hover:border-purple-500/50 preserve-3d"
            >
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                  <div className="w-4 h-4 rounded-full border-2 border-white/40" />
                </div>
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono block">
                    40<span className="text-2xl text-neutral-400 font-normal"> Challenges</span>
                  </span>
                  <h3 className="text-base font-bold text-white font-display mt-2">
                    Where Knowledge Gets Tested
                  </h3>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Design sprints, team competitions, startup activities and debugging challenges that reveal what you can actually do.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 11. "WHY SO MANY STUDENTS SAY, I SHOULD'VE JOINED EARLIER" (Video exact: 00:25 - 00:26) */}
      <section className="py-20 bg-[#07070a] border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Why So Many Students Say,<br />I Should&apos;ve Joined Earlier
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: 3 TIGADA */}
            <div className="p-6 rounded-3xl bg-[#0e0e16] border border-white/10 space-y-4 hover:border-purple-500/40 transition-colors shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/25 px-2.5 py-1 rounded">
                  STUDENTS SPOTLIGHT
                </span>
                <span className="text-[10px] font-mono text-neutral-400">HODEX BATCH</span>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
                  alt="Team 3 Tigada"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">WINNER TEAM</span>
                  <span className="text-lg font-black text-white font-display">3 TIGADA</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">Mini Hackprint Winner</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans pt-1">
                  Big congratulations to Team 3 Tigada for winning our Mini Hackprint in Batch. A well deserved win, and we hope this is just the beginning of many more milestones for the team. Keep building, keep learning, and keep inspiring!
                </p>
              </div>
            </div>

            {/* Card 2: GOT PLACED IN RECESSION */}
            <div className="p-6 rounded-3xl bg-[#0e0e16] border border-white/10 space-y-4 hover:border-purple-500/40 transition-colors shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded">
                  THECODESPARK SUCCESS
                </span>
                <span className="text-[10px] font-mono text-neutral-400">OFF-CAMPUS CRACKED</span>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                  alt="Placed Student"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-base sm:text-lg font-black text-white font-display">
                    GOT PLACED IN RECESSION
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">CRACKED SDE ROLE</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">How He Cracked 18+ LPA in Slowdown</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans pt-1">
                  He cracked a top package at high-growth tech startup during the market slowdown. Mastered backend architecture, microservices and system design from scratch through daily accountability.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 12. LEARN FROM PEOPLE WHO'VE ACTUALLY DONE THE WORK (Video exact: 00:26 - 00:28) */}
      <section className="py-20 bg-[#050508] border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Learn From People Who&apos;ve Actually Done the Work
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Taught directly by Founders, Tech Leads, and Senior System Architects.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                onClick={handlePrevMentor}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                aria-label="Previous mentor"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextMentor}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                aria-label="Next mentor"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mentors Grid / Slider Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {mentors.map((m, idx) => {
              const isSelected = mentorSlide === idx;
              return (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4 }}
                  onClick={() => setMentorSlide(idx)}
                  className={`rounded-2xl p-3 sm:p-3.5 border transition-all cursor-pointer flex flex-col justify-between ${
                    m.isFounder
                      ? 'bg-gradient-to-b from-[#1c1214] to-[#120a0d] border-red-500/60 shadow-lg shadow-red-500/10'
                      : 'bg-[#121218] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-white font-display truncate">
                        {m.name}
                      </h4>
                      <span className="text-[10px] font-mono text-purple-400 block truncate font-medium">
                        {m.role}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block truncate">
                      {m.subrole}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 13. PRICING & ADMISSION: "Build The Best Version Of Yourself In 4 Months." (Video exact: 00:28 - 00:31) */}
      <section className="py-20 bg-[#08080c] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Build The Best Version Of Yourself In 4 Months.
          </h2>

          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#12111d] to-[#0a0a12] border-2 border-purple-500/50 shadow-2xl shadow-purple-600/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left Pricing Column */}
            <div className="md:col-span-6 space-y-5 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-md font-bold inline-block">
                THECODESPARK BOOTCAMP
              </span>

              <div>
                <span className="text-4xl sm:text-5xl font-black text-white font-mono block">
                  ₹50,000 <span className="text-xs text-neutral-400 font-normal">(+GST)</span>
                </span>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  This fee is applicable only for the current upcoming cohort.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onApplyNow}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-xl shadow-purple-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply to Intensive Training →</span>
              </motion.button>
            </div>

            {/* Right Inclusions Checklist */}
            <div className="md:col-span-6 space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold block mb-2">
                WHAT YOUR 100 DAYS INCLUDE
              </span>

              <div className="space-y-2.5 text-xs text-neutral-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Full-Time Learning, 11 AM to 5 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>5 Technical Classes Every Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>3 Communication &amp; Career Sessions Every Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>2 Build Challenges Every Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>1-on-1 Code Reviews &amp; Doubt Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>100% Placement Support &amp; Referral Access</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 14. FREQUENTLY ASKED QUESTIONS (Video exact: 00:32 - 00:33) */}
      <section className="py-20 bg-[#050508] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white font-display text-center tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-3">
            {bootcampFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="rounded-2xl border border-white/10 bg-[#0e0e15] overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-white/[0.02] cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-display pr-4">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-neutral-400">
                      {isOpen ? <Minus className="w-4 h-4 text-purple-400" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 border-t border-white/5 bg-[#12121b] leading-relaxed font-sans">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 15. FOOTER WITH RICH PURPLE GRADIENT & GIANT WATERMARK (Video exact: 00:33 - 00:35) */}
      <footer className="relative bg-gradient-to-b from-[#0a0a10] via-[#1a0c2e] to-[#2e1065] text-white pt-16 pb-24 overflow-hidden border-t border-purple-500/20">
        
        {/* Giant Watermark at Footer Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stroke-purple text-[100px] sm:text-[180px] lg:text-[240px] font-black uppercase tracking-tighter opacity-15 pointer-events-none select-none font-display z-0 leading-none whitespace-nowrap">
          THECODESPARK
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Brand Column */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark Logo"
                  className="h-9 w-auto object-contain filter drop-shadow"
                />
                <div className="h-6 w-[1px] bg-white/20" />
                <div>
                  <span className="text-sm font-bold text-white font-display block leading-tight">TheCodeSpark</span>
                  <span className="text-[11px] text-neutral-300 block leading-tight">Technologies Private Limited</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Empowering the next generation of engineers with execution-first bootcamps, full-stack architectures, and 1-on-1 industry mentorship.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1 text-neutral-300">
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors text-xs font-mono">
                  YT
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors text-xs font-mono">
                  IG
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors text-xs font-mono">
                  IN
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors text-xs font-mono">
                  X
                </div>
              </div>
            </div>

            {/* 3 Nav Columns: ABOUT, COMPANY, CONTACT */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-sans">
              
              {/* About */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                  ABOUT
                </h4>
                <ul className="space-y-2 text-neutral-300">
                  <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Support</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Terms and Condition</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Submit Projects</li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                  COMPANY
                </h4>
                <ul className="space-y-2 text-neutral-300">
                  <li className="hover:text-white cursor-pointer transition-colors">Hire From Us</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Discord Community</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Pricing and Refund</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Jobs &amp; Careers</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                  CONTACT
                </h4>
                <div className="space-y-2 text-neutral-300">
                  <div>
                    <span className="font-bold text-white block">Online: 11am - 8pm</span>
                    <span className="text-purple-300 font-mono">+91 9993478545</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Offline: 11am - 8pm</span>
                    <span className="text-purple-300 font-mono">+91 9691778470</span>
                  </div>
                  <div className="pt-1 text-[11px] text-neutral-400">
                    hello@thecodespark.com<br />
                    23-B, Indrapuri Sector C, MP462001
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-2">
            <span>© 2026 TheCodeSpark Technologies Private Limited. All rights reserved.</span>
            <span>Founder &amp; CEO: Mr. Rohit Kashyap</span>
          </div>

        </div>
      </footer>

      {/* Sticky Bottom Action Bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[92vw]"
      >
        <div className="p-1.5 sm:p-2 rounded-2xl bg-[#141419]/95 border border-purple-500/40 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center gap-2">
          <button
            onClick={onRequestCallback}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            Request Callback
          </button>

          <a
            href="tel:+917398839769"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/5 border border-white/10"
            title="Helpline"
          >
            <Phone className="w-3 h-3 text-purple-400" />
            <span>7398839769 / 9548248925</span>
          </a>

          <button
            onClick={onApplyNow}
            className="px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition-all cursor-pointer whitespace-nowrap"
          >
            Apply to Intensive Training →
          </button>
        </div>
      </motion.div>
    </div>
  );
};
