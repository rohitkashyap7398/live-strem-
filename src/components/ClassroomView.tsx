import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Search, 
  Bell, 
  HelpCircle, 
  MessageSquare, 
  Send, 
  FileCode, 
  Download, 
  Flame, 
  Trophy, 
  Award, 
  ChevronDown, 
  Sparkles, 
  Radio, 
  RotateCcw,
  BookOpen,
  Share2,
  Calendar,
  ExternalLink
} from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface ClassroomViewProps {
  onNavigateHome: () => void;
  onRequestSupport: () => void;
}

export const ClassroomView: React.FC<ClassroomViewProps> = ({
  onNavigateHome,
  onRequestSupport
}) => {
  // Mode: 'dashboard' | 'lecture'
  const [activeMode, setActiveMode] = useState<'dashboard' | 'lecture'>('dashboard');
  const [selectedCourseId, setSelectedCourseId] = useState<'ignite-1' | 'summer-training' | 'apprenticeship'>('ignite-1');

  // Lecture player & studio workspace states
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeTabUnderVideo, setActiveTabUnderVideo] = useState<'chat' | 'notes' | 'resources'>('chat');
  const [completedLessons, setCompletedLessons] = useState<string[]>([
    'Welcome & Onboarding to TheCodeSpark Technologies Private Limited',
    'Setting up IDE, Terminal & Git Keys',
    '5-Track Architecture & Project Scoping',
    'Corporate GitFlow, Jira Sprints & Code Ownership'
  ]);
  const [copiedCode, setCopiedCode] = useState(false);
  const [resourceFeedback, setResourceFeedback] = useState<string | null>(null);

  // Search in dashboard
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('oldest');

  // Right sidebar widgets state
  const [notificationFilter, setNotificationFilter] = useState<'all' | 'unread'>('all');
  const [readNotificationIds, setReadNotificationIds] = useState<number[]>([3]);
  const [heatmapRange, setHeatmapRange] = useState<'30d' | '60d'>('60d');
  const [selectedHeatmapDay, setSelectedHeatmapDay] = useState<number | null>(59);
  const [showActivityInfo, setShowActivityInfo] = useState(false);

  // Live chat state
  const [chatMessages, setChatMessages] = useState<{ id: number; user: string; text: string; time: string; isMentor?: boolean }[]>([
    { id: 1, user: "Kushagra P.", text: "Sir, should we validate API payloads on the server action boundary as well?", time: "2m ago" },
    { id: 2, user: "Rohit Kashyap (Mentor)", text: "Yes—always validate inputs with Zod at the server boundary before touching PostgreSQL.", time: "1m ago", isMentor: true },
    { id: 3, user: "Shruti S.", text: "Tried the lab setup on local Vite + Node, running cleanly now.", time: "Just now" }
  ]);
  const [inputChat, setInputChat] = useState('');

  // Modules list in lecture player
  const [openModuleKey, setOpenModuleKey] = useState<string>('core');
  const [activeLectureTitle, setActiveLectureTitle] = useState('React 19 Compiler, Server Actions & Type-Safe Forms');

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

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputChat.trim()) return;
    setChatMessages([
      ...chatMessages,
      { id: Date.now(), user: "You (Student)", text: inputChat.trim(), time: "Just now" }
    ]);
    setInputChat('');
  };

  // Heatmap squares generation (17 activities completed)
  const heatmapDays = Array.from({ length: 60 }).map((_, i) => {
    if (i % 7 === 0 || i % 5 === 0) return 3; // high
    if (i % 3 === 0) return 2; // medium
    if (i % 2 === 0) return 1; // low
    return 0; // none
  });

  const displayedHeatmapDays = heatmapRange === '30d' ? heatmapDays.slice(30) : heatmapDays;
  const activeCountInView = displayedHeatmapDays.filter((lvl) => lvl > 0).length;

  const studioNotifications = [
    {
      id: 1,
      courseId: 'ignite-1' as const,
      program: 'IGNITE 1.0',
      title: 'Live Architecture Review at 7:00 PM',
      detail: 'React 19 Server Actions & Prisma production schema walkthrough',
      time: 'Today · 7:00 PM'
    },
    {
      id: 2,
      courseId: 'summer-training' as const,
      program: 'Summer Training',
      title: 'Project Deployment Checkpoints Open',
      detail: 'Submit your live hosted GenAI project URL for mentor evaluation',
      time: 'Yesterday'
    },
    {
      id: 3,
      courseId: 'apprenticeship' as const,
      program: 'Apprenticeship',
      title: 'Sprint 4 Code Review Feedback Ready',
      detail: 'Mentor remarks added to your PR #18 microservices repository',
      time: '2d ago'
    }
  ];

  const unreadCount = studioNotifications.filter((n) => !readNotificationIds.includes(n.id)).length;
  const visibleNotifications = notificationFilter === 'unread'
    ? studioNotifications.filter((n) => !readNotificationIds.includes(n.id))
    : studioNotifications;

  const enrolledCourses = [
    {
      id: "ignite-1" as const,
      title: "IGNITE 1.0 – Your Gateway to a Job-Ready Tech Career",
      date: "Bought on September 17, 2025",
      enrolledTimestamp: 20250917,
      badge: "FULL STACK + GENAI",
      progress: 3.47,
      modulesCompleted: 0,
      totalModules: 13,
      subModulesCompleted: 99,
      totalSubModules: 357,
      score: "1.07% / 31.42%",
      image: "/assets/aistudio/Ignite_1.0_Portrait_Poster_05139a11.png",
      isLiveRecording: true
    },
    {
      id: "summer-training" as const,
      title: "45-Day Summer Industrial Training – 5 Tech Tracks, GenAI & Live Hosted Projects",
      date: "Enrolled on May 15, 2026 • Active Batch",
      enrolledTimestamp: 20260515,
      badge: "45 DAYS SUMMER TRAINING",
      progress: 42.8,
      modulesCompleted: 3,
      totalModules: 7,
      subModulesCompleted: 18,
      totalSubModules: 42,
      score: "88.5% / 100%",
      image: "/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png",
      isLiveRecording: true
    },
    {
      id: "apprenticeship" as const,
      title: "Apprenticeship Program: Corporate Production Engineering, Agile Sprints & Stipend Track",
      date: "Enrolled on July 01, 2026 • Corporate Track",
      enrolledTimestamp: 20260701,
      badge: "6 MONTHS APPRENTICESHIP",
      progress: 25.0,
      modulesCompleted: 2,
      totalModules: 6,
      subModulesCompleted: 12,
      totalSubModules: 48,
      score: "92.0% / 100%",
      image: "/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png",
      isLiveRecording: false
    }
  ];

  const filteredEnrolledCourses = enrolledCourses
    .filter((course) =>
      course.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      course.badge.toLowerCase().includes(searchQuery.trim().toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'newest'
        ? b.enrolledTimestamp - a.enrolledTimestamp
        : a.enrolledTimestamp - b.enrolledTimestamp
    );

  const selectedCourse =
    enrolledCourses.find((course) => course.id === selectedCourseId) || enrolledCourses[0];

  const courseCurriculums: Record<
    'ignite-1' | 'summer-training' | 'apprenticeship',
    {
      videoPoster: string;
      codeTitle: string;
      codeSnippet: string;
      starterFile: string;
      slidesFile: string;
      modules: {
        key: string;
        title: string;
        lessons: { title: string; duration: string }[];
      }[];
    }
  > = {
    'ignite-1': {
      videoPoster: '/assets/aistudio/Corporate_Training_Auditorium_Session_76c6f74e.png',
      codeTitle: 'React 19 Server Action · Validation & Persistence',
      codeSnippet: `async function submitDoubtAction(formData: FormData) {
  'use server';
  const query = String(formData.get('query') ?? '').trim();
  if (!query) return { ok: false, error: 'Prompt required' };

  await db.doubts.create({
    data: { query, cohort: 'IGNITE-1', createdAt: new Date() }
  });
  return { ok: true };
}`,
      starterFile: 'IGNITE-1-Module-14-Starter.zip',
      slidesFile: 'IGNITE-1-React-Server-Actions.pdf',
      modules: [
        {
          key: 'intro',
          title: 'Onboarding & Environment Setup',
          lessons: [
            { title: 'Welcome & Onboarding to TheCodeSpark Technologies Private Limited', duration: '12m' },
            { title: 'Setting up IDE, Terminal & Git Keys', duration: '25m' }
          ]
        },
        {
          key: 'core',
          title: 'Full-Stack React 19 & TypeScript',
          lessons: [
            { title: 'Browser Critical Rendering Path', duration: '52m' },
            { title: 'React 19 Compiler, Server Actions & Type-Safe Forms', duration: '1h 15m' },
            { title: 'Distributed State Patterns with Zustand', duration: '58m' }
          ]
        },
        {
          key: 'backend',
          title: 'Node.js Microservices & PostgreSQL',
          lessons: [
            { title: 'REST API Design, Rate Limiting & JWT Auth', duration: '1h 05m' },
            { title: 'PostgreSQL Indexing & Query Optimization', duration: '1h 20m' }
          ]
        },
        {
          key: 'genai',
          title: 'GenAI Pipelines & Production Deployment',
          lessons: [
            { title: 'Streaming LLM Responses with Structured Outputs', duration: '1h 10m' },
            { title: 'Dockerized Cloud Run CI/CD Pipeline', duration: '48m' }
          ]
        }
      ]
    },
    'summer-training': {
      videoPoster: '/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png',
      codeTitle: 'GenAI Streaming Endpoint · Express + TypeScript',
      codeSnippet: `app.post('/api/project-mentor', async (req, res) => {
  const { track, prompt } = req.body;
  if (!prompt?.trim()) return res.status(400).json({ error: 'Empty prompt' });

  const guidance = await aiClient.generateReview({ track, prompt });
  res.json({ track, guidance, reviewedAt: new Date().toISOString() });
});`,
      starterFile: 'Summer-Training-5Tracks-Kit.zip',
      slidesFile: 'Summer-Training-GenAI-Deployment.pdf',
      modules: [
        {
          key: 'intro',
          title: 'Track Orientation & Project Blueprint',
          lessons: [
            { title: '5-Track Architecture & Project Scoping', duration: '18m' },
            { title: 'GitHub Branching Strategy for Team Sprints', duration: '32m' }
          ]
        },
        {
          key: 'core',
          title: 'Modern UI Engineering & API Integration',
          lessons: [
            { title: 'Responsive Component Architecture in Tailwind v4', duration: '46m' },
            { title: 'Live REST API Integration & Error Handling', duration: '1h 04m' },
            { title: 'Interactive Data Dashboards & Filtering', duration: '54m' }
          ]
        },
        {
          key: 'genai',
          title: 'GenAI Feature Lab & Cloud Hosting',
          lessons: [
            { title: 'Prompt Workflows & Server-Side AI Proxy Routes', duration: '1h 12m' },
            { title: 'Live Production Hosting & Domain SSL Setup', duration: '40m' }
          ]
        }
      ]
    },
    apprenticeship: {
      videoPoster: '/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png',
      codeTitle: 'Production PR Check · Typed Service Middleware',
      codeSnippet: `export async function auditRequestLatency(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const startedAt = performance.now();
  res.on('finish', () => {
    const durationMs = Math.round(performance.now() - startedAt);
    metrics.recordRoute(req.path, res.statusCode, durationMs);
  });
  next();
}`,
      starterFile: 'Apprenticeship-Sprint4-Service.zip',
      slidesFile: 'Apprenticeship-Production-Runbook.pdf',
      modules: [
        {
          key: 'intro',
          title: 'Corporate Engineering Foundations',
          lessons: [
            { title: 'Corporate GitFlow, Jira Sprints & Code Ownership', duration: '28m' },
            { title: 'PR Review Standards & Automated Testing', duration: '42m' }
          ]
        },
        {
          key: 'core',
          title: 'Production Services & Observability',
          lessons: [
            { title: 'Zero-Downtime Database Migrations', duration: '55m' },
            { title: 'Latency Profiling, Structured Logs & Alerts', duration: '1h 08m' }
          ]
        },
        {
          key: 'delivery',
          title: 'Client Delivery & Stipend Evaluation',
          lessons: [
            { title: 'Staging Release Sign-Off & QA Checklist', duration: '44m' },
            { title: 'Monthly Sprint Demo & Mentor Assessment', duration: '35m' }
          ]
        }
      ]
    }
  };

  const activeCurriculum = courseCurriculums[selectedCourseId];
  const flatLessons = activeCurriculum.modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({ ...lesson, moduleKey: mod.key }))
  );
  const currentLessonIndex = Math.max(
    0,
    flatLessons.findIndex((item) => item.title === activeLectureTitle)
  );
  const handleSelectLessonIndex = (index: number) => {
    const target = flatLessons[index];
    if (!target) return;
    setOpenModuleKey(target.moduleKey);
    setActiveLectureTitle(target.title);
  };

  const leaderboardRanks = [
    { rank: 1, name: "Aarav Sharma", points: "34.80k" },
    { rank: 2, name: "Priya Verma", points: "32.15k" },
    { rank: 3, name: "Rohan Tiwari", points: "30.40k" },
    { rank: 4, name: "Ananya Gupta", points: "29.65k" },
    { rank: 5, name: "Kushagra Pandey", points: "28.90k" },
    { rank: 6, name: "Shruti Singh", points: "28.20k" },
    { rank: 7, name: "Vikram Patel", points: "27.55k" },
    { rank: 8, name: "Neha Mishra", points: "26.80k" },
    { rank: 9, name: "Siddharth Nair", points: "25.95k" },
    { rank: 10, name: "Aditi Kulkarni", points: "24.60k" }
  ];

  return (
    <div className="min-h-screen pt-[90px] lg:pt-[68px] bg-slate-50 dark:bg-[#07070a] text-slate-900 dark:text-[#f3f4f6] transition-colors duration-300">
      {/* View 1: Main Classroom Dashboard (Video 5: 00:00 - 00:06) */}
      {activeMode === 'dashboard' ? (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/5">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 px-2.5 py-1 rounded-xl bg-white dark:bg-white/5 border border-[#ff5722]/30 flex items-center justify-center shrink-0 shadow-sm dark:shadow-md">
                  <img
                    src={brandLogo}
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                    alt="TheCodeSpark Technologies Private Limited"
                    className="h-9 w-auto object-contain filter drop-shadow"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                      TheCodeSpark Technologies <span className="text-[#ff5722]">Private Limited</span>
                    </h1>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-neutral-400 font-mono mt-0.5">
                    Official Student Learning Portal • Expert Learning Studio
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-neutral-300 bg-white dark:bg-white/5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-xs dark:shadow-none">
                <span className="text-[#ff5722]">Helpline:</span>
                <a href="tel:+917398839769" className="hover:text-slate-950 dark:hover:text-white font-bold">+91 7398839769</a>
                <span className="text-slate-300 dark:text-white/20">/</span>
                <a href="tel:+919548248925" className="hover:text-slate-950 dark:hover:text-white font-bold">+91 9548248925</a>
              </div>

              <button
                onClick={onRequestSupport}
                className="px-4 py-2 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-semibold shadow-md shadow-[#ff5722]/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Support</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Main Column: Your Enrolled Courses (col 1-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Your Enrolled Courses
                </h2>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400 dark:text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Search enrolled..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-xl bg-white dark:bg-[#101015] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                    />
                  </div>

                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#101015] border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-neutral-300 font-mono focus:outline-none"
                  >
                    <option value="oldest">Sort By: Oldest</option>
                    <option value="newest">Sort By: Newest</option>
                  </select>
                </div>
              </div>

              {/* Course Cards List */}
              <div className="space-y-4">
                {filteredEnrolledCourses.length === 0 ? (
                  <div className="p-8 rounded-2xl bg-white dark:bg-[#0e0e14] border border-slate-200 dark:border-white/10 text-center space-y-2">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      No matching studio courses found
                    </p>
                    <p className="text-xs text-slate-500 dark:text-neutral-400">
                      Try clearing your search filter to view IGNITE 1.0, Summer Training, and Apprenticeship.
                    </p>
                  </div>
                ) : (
                  filteredEnrolledCourses.map((c, idx) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0e0e14] border border-slate-200 dark:border-white/10 hover:border-[#ff5722]/40 transition-all shadow-md dark:shadow-xl space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        <div className="w-40 sm:w-36 mx-auto sm:mx-0 aspect-[4/5] rounded-xl overflow-hidden bg-slate-200 dark:bg-neutral-900 border border-slate-200 dark:border-white/10 shrink-0">
                          <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-top"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#ff5722]/10 border border-[#ff5722]/25 text-[#ff5722] text-[10px] font-mono font-bold tracking-wider uppercase">
                              {c.badge}
                            </div>
                            {c.isLiveRecording && (
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-600/90 text-white text-[9px] font-mono font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                RECORDING
                              </div>
                            )}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display leading-snug">
                            {c.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-neutral-400 font-mono">
                            {c.date}
                          </p>

                          {/* Progress bar */}
                          <div className="space-y-1 pt-1">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-neutral-400">
                              <span>Progress</span>
                              <span className="text-[#ff5722] font-bold">{c.progress}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-[#181822] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.max(c.progress, 2)}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-[#ff5722] to-amber-500 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom action buttons */}
                      <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
                        <div className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                          {c.subModulesCompleted}/{c.totalSubModules} Lectures • {c.modulesCompleted}/{c.totalModules} Modules
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSelectedCourseId(c.id);
                              const firstMod = courseCurriculums[c.id].modules[1] || courseCurriculums[c.id].modules[0];
                              setOpenModuleKey(firstMod.key);
                              setActiveLectureTitle(firstMod.lessons[0]?.title || c.title);
                              setResourceFeedback(null);
                              setActiveMode('lecture');
                            }}
                            className="px-5 py-2.5 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold shadow-md shadow-[#ff5722]/20 flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Resume Learning</span>
                          </motion.button>

                          <button
                            onClick={onRequestSupport}
                            className="px-4 py-2.5 rounded-xl bg-[#5865F2]/10 dark:bg-[#5865F2]/20 hover:bg-[#5865F2] text-[#4752c4] dark:text-[#7289da] hover:text-white border border-[#5865F2]/40 text-xs font-mono font-semibold transition-colors cursor-pointer"
                          >
                            Connect Discord &amp; Mentor
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column: Redesigned Widgets (col 9-12) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Widget 1: Studio Notifications & Updates */}
              <div className="rounded-2xl bg-white dark:bg-[#0e0e14] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none overflow-hidden">
                <div className="p-5 pb-4 flex items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#ff5722]/10 text-[#ff5722] flex items-center justify-center shrink-0">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display leading-tight">
                        All Notifications
                      </h3>
                      <p className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                        {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-100 dark:bg-white/5">
                    <button
                      onClick={() => setNotificationFilter('all')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        notificationFilter === 'all'
                          ? 'bg-white dark:bg-[#1a1a24] text-slate-900 dark:text-white shadow-xs'
                          : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setNotificationFilter('unread')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        notificationFilter === 'unread'
                          ? 'bg-white dark:bg-[#1a1a24] text-slate-900 dark:text-white shadow-xs'
                          : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Unread
                    </button>
                  </div>
                </div>

                {visibleNotifications.length === 0 ? (
                  <div className="px-5 py-8 text-center space-y-3">
                    <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-neutral-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white">
                        No unread notifications
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-neutral-400">
                        You have reviewed all session links and sprint updates.
                      </p>
                    </div>
                    <button
                      onClick={() => setNotificationFilter('all')}
                      className="text-xs font-semibold text-[#ff5722] hover:underline cursor-pointer"
                    >
                      View all updates
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 dark:divide-white/5">
                    {visibleNotifications.map((item) => {
                      const isUnread = !readNotificationIds.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (isUnread) {
                              setReadNotificationIds((prev) => [...prev, item.id]);
                            }
                            setSelectedCourseId(item.courseId);
                            const firstMod = courseCurriculums[item.courseId].modules[1] || courseCurriculums[item.courseId].modules[0];
                            setOpenModuleKey(firstMod.key);
                            setActiveLectureTitle(firstMod.lessons[0]?.title || item.title);
                            setResourceFeedback(null);
                            setActiveMode('lecture');
                          }}
                          className="w-full text-left px-5 py-3.5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors flex items-start gap-3 cursor-pointer group"
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                              isUnread ? 'bg-[#ff5722]' : 'bg-slate-300 dark:bg-neutral-700'
                            }`}
                          />
                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex items-center justify-between gap-2 text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                              <span className="truncate font-semibold text-slate-700 dark:text-neutral-300">
                                {item.program}
                              </span>
                              <span className="shrink-0">{item.time}</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-[#ff5722] transition-colors leading-snug">
                              {item.title}
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                              {item.detail}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {unreadCount > 0 && (
                  <div className="px-5 py-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-neutral-400">
                      Click any update to open studio
                    </span>
                    <button
                      onClick={() => setReadNotificationIds(studioNotifications.map((n) => n.id))}
                      className="text-[11px] font-semibold text-[#ff5722] hover:underline cursor-pointer whitespace-nowrap"
                    >
                      Mark all read
                    </button>
                  </div>
                )}
              </div>

              {/* Widget 2: Progress Heatmap & Coding Streak */}
              <div className="rounded-2xl bg-white dark:bg-[#0e0e14] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none overflow-hidden">
                <div className="p-5 pb-4 flex items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display leading-tight">
                        Progress Heatmap
                      </h3>
                      <p className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                        17 activities completed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-100 dark:bg-white/5">
                    {(['30d', '60d'] as const).map((range) => (
                      <button
                        key={range}
                        onClick={() => {
                          setHeatmapRange(range);
                          setSelectedHeatmapDay(range === '30d' ? 29 : 59);
                        }}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono uppercase transition-colors cursor-pointer whitespace-nowrap ${
                          heatmapRange === range
                            ? 'bg-white dark:bg-[#1a1a24] text-slate-900 dark:text-white font-semibold shadow-xs'
                            : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tabular Key Metrics Strip */}
                <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-white/5 border-b border-slate-100 dark:border-white/5">
                  <div className="px-4 py-3">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400">Active Days</div>
                    <div className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white mt-0.5">
                      {activeCountInView}
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400">Streak</div>
                    <div className="text-sm font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400 mt-0.5">
                      6 days
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400">On-Time</div>
                    <div className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white mt-0.5">
                      94%
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  {/* Heatmap Matrix */}
                  <div className="grid grid-cols-10 gap-1.5">
                    {displayedHeatmapDays.map((level, idx) => {
                      const isSelected = selectedHeatmapDay === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedHeatmapDay(idx)}
                          className={`aspect-square rounded-[4px] cursor-pointer transition-transform hover:scale-110 focus:outline-none ${
                            isSelected ? 'ring-2 ring-slate-900 dark:ring-white ring-offset-1 ring-offset-white dark:ring-offset-[#0e0e14]' : ''
                          } ${
                            level === 3
                              ? 'bg-emerald-500'
                              : level === 2
                              ? 'bg-emerald-500/70 dark:bg-emerald-600/80'
                              : level === 1
                              ? 'bg-emerald-300 dark:bg-emerald-900/70'
                              : 'bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/15'
                          }`}
                          title={`Day ${idx + 1}: ${level > 0 ? `${level * 2} coding activities` : 'Rest day'}`}
                          aria-label={`Day ${idx + 1}: ${level > 0 ? `${level * 2} activities` : 'No activity'}`}
                        />
                      );
                    })}
                  </div>

                  {/* Selected Day Readout */}
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono tabular-nums text-slate-600 dark:text-neutral-300 pt-1">
                    {selectedHeatmapDay !== null && displayedHeatmapDays[selectedHeatmapDay] !== undefined ? (
                      <span>
                        Day {selectedHeatmapDay + 1} ·{' '}
                        {displayedHeatmapDays[selectedHeatmapDay] > 0
                          ? `${displayedHeatmapDays[selectedHeatmapDay] * 2} coding tasks completed`
                          : 'No scheduled tasks'}
                      </span>
                    ) : (
                      <span>Select a square to inspect day</span>
                    )}
                    <div className="flex items-center gap-1 shrink-0 text-[10px] text-slate-400 dark:text-neutral-500">
                      <span>Less</span>
                      <span className="w-2 h-2 rounded-[2px] bg-slate-100 dark:bg-white/[0.06]" />
                      <span className="w-2 h-2 rounded-[2px] bg-emerald-300 dark:bg-emerald-900/70" />
                      <span className="w-2 h-2 rounded-[2px] bg-emerald-500/70 dark:bg-emerald-600/80" />
                      <span className="w-2 h-2 rounded-[2px] bg-emerald-500" />
                      <span>More</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-2">
                    <button
                      type="button"
                      onClick={() => setShowActivityInfo((prev) => !prev)}
                      className="w-full flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <span>How activities are counted</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showActivityInfo ? 'rotate-180' : ''}`} />
                    </button>
                    {showActivityInfo && (
                      <p className="text-[11px] text-slate-500 dark:text-neutral-400 leading-relaxed">
                        Each attended live lecture, pushed GitHub lab commit, or completed module quiz counts as 1 activity toward your daily coding streak.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* View 2: Completely Redesigned Code Studio Lecture Workspace */
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#07070a]">
          {/* Top Classroom Studio Bar */}
          <header className="px-4 sm:px-6 py-3.5 bg-white dark:bg-[#0d0d12] border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setActiveMode('dashboard')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 hover:text-slate-900 dark:text-neutral-200 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer shrink-0"
                title="Back to Enrolled Courses"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Courses</span>
              </button>

              <div className="min-w-0">
                <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display truncate">
                  {selectedCourse.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                  <span className="text-[#ff5722] font-semibold">{selectedCourse.progress}% Complete</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCourse.modulesCompleted}/{selectedCourse.totalModules} Modules</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCourse.subModulesCompleted}/{selectedCourse.totalSubModules} Lectures</span>
                  <span aria-hidden="true">·</span>
                  <span>Score {selectedCourse.score}</span>
                </div>
              </div>
            </div>

            {/* Prev / Next Lesson Navigation */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleSelectLessonIndex(currentLessonIndex - 1)}
                disabled={currentLessonIndex <= 0}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs font-medium text-slate-700 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                Previous
              </button>
              <button
                onClick={() => handleSelectLessonIndex(currentLessonIndex + 1)}
                disabled={currentLessonIndex >= flatLessons.length - 1}
                className="px-3.5 py-1.5 rounded-lg bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                Next Lesson
              </button>
            </div>
          </header>

          {/* 3-Column Studio Workspace */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Track-Specific Curriculum (col 1-3) */}
            <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 bg-white dark:bg-[#09090d] p-4 lg:max-h-[calc(100vh-70px)] lg:overflow-y-auto space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  Curriculum
                </span>
                <span className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                  {activeCurriculum.modules.length} Sections
                </span>
              </div>

              <div className="space-y-2">
                {activeCurriculum.modules.map((m) => {
                  const isOpen = openModuleKey === m.key;
                  const allDone = m.lessons.every((l) => completedLessons.includes(l.title));
                  return (
                    <div
                      key={m.key}
                      className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#0f0e15] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenModuleKey(isOpen ? '' : m.key)}
                        className="w-full p-3 text-left flex items-center justify-between gap-2 hover:bg-slate-100/80 dark:hover:bg-white/[0.03] cursor-pointer"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {allDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-slate-400 dark:border-neutral-600 shrink-0" />
                          )}
                          <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                            {m.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-500 dark:text-neutral-500 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-2 pb-2 pt-1 space-y-1 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#0b0a10]">
                          {m.lessons.map((lesson, lIdx) => {
                            const isCurrent = activeLectureTitle === lesson.title;
                            const isDone = completedLessons.includes(lesson.title);
                            return (
                              <button
                                key={lIdx}
                                type="button"
                                onClick={() => setActiveLectureTitle(lesson.title)}
                                className={`w-full text-left p-2 rounded-lg text-xs cursor-pointer flex items-center justify-between gap-2 transition-colors ${
                                  isCurrent
                                    ? 'bg-[#ff5722]/10 text-[#ff5722] font-semibold'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  {isDone ? (
                                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                                  ) : (
                                    <Play className="w-3 h-3 shrink-0" />
                                  )}
                                  <span className="truncate">{lesson.title}</span>
                                </div>
                                <span className="text-[10px] font-mono tabular-nums shrink-0 opacity-75">
                                  {lesson.duration}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Center Column: Classroom Stage & Interactive Workspace (col 4-9) */}
            <div className="lg:col-span-6 p-4 sm:p-5 space-y-5 lg:max-h-[calc(100vh-70px)] lg:overflow-y-auto">
              {/* Split Theatre Stage: Widescreen Session Backdrop + Authentic Classroom Cam */}
              <div className="rounded-2xl overflow-hidden bg-[#0b0c10] border border-slate-200 dark:border-white/10 shadow-lg grid grid-cols-1 md:grid-cols-12">
                {/* Left 8 cols: Widescreen Session Frame & Playback Controls */}
                <div className="md:col-span-8 relative min-h-[240px] sm:min-h-[300px] flex flex-col justify-end">
                  <img
                    src={activeCurriculum.videoPoster}
                    alt={selectedCourse.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

                  <div className="relative z-10 p-5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono tabular-nums text-[#ff5722] font-semibold">
                        Lesson {currentLessonIndex + 1} of {flatLessons.length} · Rohit Kashyap
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white font-display leading-snug line-clamp-2">
                        {activeLectureTitle}
                      </h4>
                    </div>

                    {/* Controls Bar */}
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/15">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={togglePlay}
                          className="p-2 rounded-full bg-[#ff5722] hover:bg-[#f4511e] text-white cursor-pointer transition-colors"
                          aria-label={isPlaying ? 'Pause session' : 'Play session'}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md cursor-pointer transition-colors"
                          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <span className="text-xs font-mono tabular-nums text-white/85">
                          {isPlaying ? 'Playing Lab Feed' : 'Paused'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono tabular-nums">
                        <button
                          onClick={() => handleSpeedChange(playbackSpeed === 1 ? 1.5 : playbackSpeed === 1.5 ? 2 : 1)}
                          className="px-2.5 py-1 rounded-md bg-black/60 border border-white/15 text-white hover:bg-white/10 cursor-pointer"
                        >
                          {playbackSpeed}x
                        </button>
                        <span className="px-2.5 py-1 rounded-md bg-black/60 border border-white/15 text-emerald-400">
                          1080p HD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 4 cols: Vertical Classroom Lab Feed */}
                <div className="md:col-span-4 relative min-h-[260px] md:min-h-[300px] bg-black border-t md:border-t-0 md:border-l border-white/10">
                  <video
                    ref={videoRef}
                    src="/assets/aistudio/tcs_actual_classroom_lab.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                  />
                  <div className="absolute inset-x-0 top-0 p-3 bg-gradient-to-b from-black/75 to-transparent flex items-center justify-between text-[10px] font-mono text-white/90">
                    <span>Lucknow Studio Lab</span>
                    <span className="text-emerald-400">HD Feed</span>
                  </div>
                </div>
              </div>

              {/* Active Lesson Header + Stateful Completion Action */}
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="space-y-1 min-w-0 flex-1">
                  <p className="text-[11px] font-mono text-[#ff5722] font-semibold">
                    TheCodeSpark Code Studio · {selectedCourse.badge}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display leading-snug">
                    {activeLectureTitle}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    setCompletedLessons((prev) =>
                      prev.includes(activeLectureTitle)
                        ? prev.filter((item) => item !== activeLectureTitle)
                        : [...prev, activeLectureTitle]
                    );
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                    completedLessons.includes(activeLectureTitle)
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {completedLessons.includes(activeLectureTitle) ? 'Completed' : 'Mark Complete'}
                  </span>
                </button>
              </div>

              {/* Clean Segmented Tabs under Stage */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-white/5 w-fit">
                  {[
                    { id: 'chat', label: `Live Doubts (${chatMessages.length})` },
                    { id: 'notes', label: 'Session Notes' },
                    { id: 'resources', label: 'Starter Files & Slides' }
                  ].map((tab) => {
                    const active = activeTabUnderVideo === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTabUnderVideo(tab.id as 'chat' | 'notes' | 'resources')}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                          active
                            ? 'bg-white dark:bg-[#1a1a24] text-slate-900 dark:text-white font-semibold shadow-xs'
                            : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: Live Doubts / Chat */}
                {activeTabUnderVideo === 'chat' && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0e0e15] border border-slate-200 dark:border-white/10 space-y-3">
                    <div className="max-h-52 overflow-y-auto divide-y divide-slate-100 dark:divide-white/5">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className="py-2.5 first:pt-0 last:pb-0 text-xs space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`font-semibold ${
                                msg.isMentor ? 'text-[#ff5722]' : 'text-slate-800 dark:text-neutral-200'
                              }`}
                            >
                              {msg.user}
                            </span>
                            <span className="text-[11px] text-slate-400 dark:text-neutral-500 font-mono tabular-nums">
                              {msg.time}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-neutral-300 leading-relaxed">{msg.text}</p>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendChat} className="flex gap-2 pt-3 border-t border-slate-100 dark:border-white/5">
                      <input
                        type="text"
                        placeholder="Ask a doubt from batch mentors..."
                        value={inputChat}
                        onChange={(e) => setInputChat(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#14141f] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-semibold cursor-pointer flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send</span>
                      </button>
                    </form>
                  </div>
                )}

                {/* Tab 2: Session Notes & Code */}
                {activeTabUnderVideo === 'notes' && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0e0e15] border border-slate-200 dark:border-white/10 space-y-3 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-slate-500 dark:text-neutral-400">
                        {activeCurriculum.codeTitle}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(activeCurriculum.codeSnippet).catch(() => {});
                          setCopiedCode(true);
                          setTimeout(() => setCopiedCode(false), 1800);
                        }}
                        className="text-xs font-semibold text-[#ff5722] hover:underline cursor-pointer"
                      >
                        {copiedCode ? 'Copied to clipboard' : 'Copy Code'}
                      </button>
                    </div>
                    <pre className="p-3.5 rounded-xl bg-slate-900 dark:bg-black/70 border border-slate-800 dark:border-white/10 overflow-x-auto text-emerald-400 text-[11px] font-mono leading-relaxed">
                      {activeCurriculum.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* Tab 3: Starter Files & Slides */}
                {activeTabUnderVideo === 'resources' && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0e0e15] border border-slate-200 dark:border-white/10 divide-y divide-slate-100 dark:divide-white/5 text-xs">
                    <div className="pb-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileCode className="w-4 h-4 text-[#ff5722] shrink-0" />
                        <span className="font-mono text-slate-900 dark:text-white truncate">
                          {activeCurriculum.starterFile}
                        </span>
                      </div>
                      <button
                        onClick={() => setResourceFeedback(`Prepared ${activeCurriculum.starterFile} for download.`)}
                        className="text-xs text-[#ff5722] hover:underline font-semibold cursor-pointer shrink-0"
                      >
                        Download (4.2 MB)
                      </button>
                    </div>

                    <div className="pt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="font-mono text-slate-900 dark:text-white truncate">
                          {activeCurriculum.slidesFile}
                        </span>
                      </div>
                      <button
                        onClick={() => setResourceFeedback(`Opened ${activeCurriculum.slidesFile} summary deck.`)}
                        className="text-xs text-[#ff5722] hover:underline font-semibold cursor-pointer shrink-0"
                      >
                        View Slides
                      </button>
                    </div>

                    {resourceFeedback && (
                      <div className="pt-3 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                        {resourceFeedback}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Batch Leaderboard & Standing (col 10-12) */}
            <aside className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10 bg-white dark:bg-[#09090d] p-4 lg:max-h-[calc(100vh-70px)] lg:overflow-y-auto space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-white/5">
                <span className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>Cohort Leaderboard</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400">
                  Top 10
                </span>
              </div>

              {/* Clean Sorted Leaderboard Table */}
              <div className="divide-y divide-slate-100 dark:divide-white/5">
                {leaderboardRanks.map((student) => (
                  <div
                    key={student.rank}
                    className="py-2.5 flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-6 text-[11px] font-mono tabular-nums font-bold shrink-0 ${
                          student.rank === 1
                            ? 'text-amber-500'
                            : student.rank === 2
                            ? 'text-slate-400'
                            : student.rank === 3
                            ? 'text-orange-500'
                            : 'text-slate-400 dark:text-neutral-500'
                        }`}
                      >
                        #{student.rank}
                      </span>
                      <span className="font-medium text-slate-800 dark:text-neutral-200 truncate">
                        {student.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono tabular-nums text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
                      {student.points}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                  <span>Batch Standing</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Top 48%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                  <div className="h-full w-[52%] bg-emerald-500 rounded-full" />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-neutral-400">
                  Complete modules and daily labs to climb into the top 10.
                </p>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
};
