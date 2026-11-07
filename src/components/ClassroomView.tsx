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
  const [selectedCourseId, setSelectedCourseId] = useState<'ignite-1' | 'dsa-java'>('ignite-1');

  // Lecture player states
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeTabUnderVideo, setActiveTabUnderVideo] = useState<'notes' | 'chat' | 'resources'>('chat');

  // Search in dashboard
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('oldest');

  // Live chat state
  const [chatMessages, setChatMessages] = useState<{ id: number; user: string; text: string; time: string; isMentor?: boolean }[]>([
    { id: 1, user: "Kushagra P.", text: "Sir what is the optimal time complexity for this DP approach?", time: "2m ago" },
    { id: 2, user: "Aditya (Mentor)", text: "We are using memoization with O(N*W) time and O(N*W) auxiliary space.", time: "1m ago", isMentor: true },
    { id: 3, user: "Shruti S.", text: "Audio and video are crystal clear! Recording is smooth.", time: "Just now" }
  ]);
  const [inputChat, setInputChat] = useState('');

  // Modules list in lecture player
  const [openModuleKey, setOpenModuleKey] = useState<string>('frontend');
  const [activeLectureTitle, setActiveLectureTitle] = useState('Episode 14: React 19 Compiler, Actions & Server Components');

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

  // Heatmap squares generation (Video 5: 17 activities crushed)
  const heatmapDays = Array.from({ length: 60 }).map((_, i) => {
    if (i % 7 === 0 || i % 5 === 0) return 3; // high
    if (i % 3 === 0) return 2; // medium
    if (i % 2 === 0) return 1; // low
    return 0; // none
  });

  const enrolledCourses = [
    {
      id: "ignite-1",
      title: "TheCodeSpark IGNITE 1.0: 2.0 Job Ready AI Powered Cohort",
      date: "Bought on September 17, 2025",
      progress: 3.47,
      modulesCompleted: 0,
      totalModules: 13,
      subModulesCompleted: 99,
      totalSubModules: 357,
      score: "1.07% / 31.42%",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80",
      isLiveRecording: true
    },
    {
      id: "dsa-java",
      title: "Complete DSA with Java: Logic Building & FAANG Algorithms",
      date: "Bought on May 11, 2025",
      progress: 0,
      modulesCompleted: 0,
      totalModules: 10,
      subModulesCompleted: 0,
      totalSubModules: 240,
      score: "0% / 0%",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80",
      isLiveRecording: false
    }
  ];

  const classroomModules = [
    {
      key: "intro",
      title: "Before We Start",
      completed: true,
      lessons: [
        { title: "Welcome & Onboarding to TheCodeSpark", duration: "12m", done: true },
        { title: "Setting up IDE, Terminal & Git Keys", duration: "25m", done: true }
      ]
    },
    {
      key: "git",
      title: "Git & GitHub Pro Workflows",
      completed: false,
      lessons: [
        { title: "Version Control from First Principles", duration: "38m", done: true },
        { title: "Branching, Pull Requests & Merge Conflicts", duration: "44m", done: false }
      ]
    },
    {
      key: "frontend",
      title: "Front-End & Modern React 19",
      completed: false,
      lessons: [
        { title: "Episode 13: Browser Critical Rendering Path", duration: "52m", done: true },
        { title: "Episode 14: React 19 Compiler, Actions & Server Components", duration: "1h 15m", done: false, isCurrent: true },
        { title: "Episode 15: State Orchestration with Zustand", duration: "58m", done: false }
      ]
    },
    {
      key: "projects",
      title: "React Full-Stack Projects",
      completed: false,
      lessons: [
        { title: "Project 1: FinTech Dashboard Setup", duration: "1h 30m", done: false },
        { title: "Project 2: Real-Time Chat with WebSockets", duration: "2h 10m", done: false }
      ]
    },
    {
      key: "backend",
      title: "Backend Microservices & Node.js",
      completed: false,
      lessons: [
        { title: "Node.js Streams, Buffers & Architecture", duration: "1h 05m", done: false },
        { title: "PostgreSQL Database Joins & Indexing", duration: "1h 20m", done: false }
      ]
    },
    {
      key: "hackathon",
      title: "Hackathon 1 Announcement",
      completed: true,
      lessons: [
        { title: "Hackathon Rules & Theme Briefing", duration: "18m", done: true }
      ]
    },
    {
      key: "animations",
      title: "Creative Frontend Animations (Framer Motion)",
      completed: false,
      lessons: [
        { title: "Physics-Based Springs & Gesture Handling", duration: "45m", done: false }
      ]
    }
  ];

  const leaderboardRanks = [
    { rank: 1, name: "Tajinder", points: "30.15k", tag: "1st" },
    { rank: 2, name: "DEEPANSHU", points: "12.06k", tag: "2nd" },
    { rank: 3, name: "Brij", points: "10.91k", tag: "3rd" },
    { rank: 4, name: "Absharash Sarraf", points: "35.6k" },
    { rank: 5, name: "Vikas", points: "30.72k" },
    { rank: 6, name: "Mr. Davis", points: "30.70k" },
    { rank: 7, name: "SAYAJI", points: "30.70k" },
    { rank: 8, name: "Abhishek", points: "30.70k" },
    { rank: 9, name: "RAHUL.A", points: "30.70k" },
    { rank: 10, name: "Mohd Sheikh", points: "30.70k" }
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-[#f3f4f6]">
      {/* View 1: Main Classroom Dashboard (Video 5: 00:00 - 00:06) */}
      {activeMode === 'dashboard' ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 px-2.5 py-1 rounded-xl bg-white/5 border border-[#ff5722]/30 flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src={brandLogo}
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                    alt="TheCodeSpark Technologies Private Limited"
                    className="h-9 w-auto object-contain filter drop-shadow"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <h1 className="text-xl sm:text-2xl font-black text-white font-display">
                      TheCodeSpark Technologies <span className="text-[#ff5722]">Private Limited</span>
                    </h1>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    Official Student Learning Portal • Expert Learning Studio
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-300 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-[#ff5722]">Helpline:</span>
                <a href="tel:+917398839769" className="hover:text-white font-bold">+91 7398839769</a>
                <span className="text-white/20">/</span>
                <a href="tel:+919548248925" className="hover:text-white font-bold">+91 9548248925</a>
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
                <h2 className="text-lg font-bold text-white font-display">
                  Your Enrolled Courses
                </h2>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Search enrolled..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-xl bg-[#101015] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                    />
                  </div>

                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="px-3 py-1.5 rounded-xl bg-[#101015] border border-white/10 text-xs text-neutral-300 font-mono focus:outline-none"
                  >
                    <option value="oldest">Sort By: Oldest</option>
                    <option value="newest">Sort By: Newest</option>
                  </select>
                </div>
              </div>

              {/* Course Cards List */}
              <div className="space-y-4">
                {enrolledCourses.map((c, idx) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#ff5722]/40 transition-all shadow-xl space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                      <div className="w-full sm:w-44 aspect-video rounded-xl overflow-hidden bg-neutral-900 shrink-0 relative">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {c.isLiveRecording && (
                          <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded bg-red-600/90 text-white text-[9px] font-mono font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            RECORDING
                          </div>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">
                          {c.title}
                        </h3>
                        <p className="text-xs text-neutral-400 font-mono">
                          {c.date}
                        </p>

                        {/* Progress bar */}
                        <div className="space-y-1 pt-1">
                          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                            <span>Progress</span>
                            <span className="text-[#ff5722] font-bold">{c.progress}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-[#181822] overflow-hidden">
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
                    <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                      <div className="text-xs font-mono text-neutral-400">
                        {c.subModulesCompleted}/{c.totalSubModules} Lectures
                      </div>

                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setSelectedCourseId(c.id as any);
                            setActiveMode('lecture');
                          }}
                          className="px-5 py-2.5 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold shadow-md shadow-[#ff5722]/20 flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Resume Learning</span>
                        </motion.button>

                        <button
                          onClick={() => alert("Connecting student ID to TheCodeSpark Discord community bot...")}
                          className="px-4 py-2.5 rounded-xl bg-[#5865F2]/20 hover:bg-[#5865F2]/30 text-[#5865F2] hover:text-white border border-[#5865F2]/40 text-xs font-mono font-semibold transition-colors cursor-pointer"
                        >
                          Connect your Discord Account
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Widgets (col 9-12) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Widget 1: All Notifications */}
              <div className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <Bell className="w-4 h-4 text-[#ff5722]" /> All Notifications
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-500">Live Sync</span>
                </div>
                <div className="p-6 rounded-xl bg-[#12121a] border border-white/5 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto text-neutral-400">
                    🔔
                  </div>
                  <h4 className="text-xs font-bold text-white">No notifications available</h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    You&apos;re all caught up! Check back later for assignment reviews and live lecture links.
                  </p>
                </div>
              </div>

              {/* Widget 2: Progress Heatmap (Crushed 17 activities so far!) */}
              <div className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <Flame className="w-4 h-4 text-emerald-400" /> Progress Heatmap
                  </h3>
                </div>

                <div className="text-xs font-mono">
                  <span className="text-white font-bold">Crushed 17 activities so far!</span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-10 gap-1.5 p-3 rounded-xl bg-[#12121a] border border-white/5">
                  {heatmapDays.map((level, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.35 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`aspect-square rounded-sm cursor-pointer transition-colors ${
                        level === 3
                          ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50'
                          : level === 2
                          ? 'bg-emerald-600/80'
                          : level === 1
                          ? 'bg-emerald-800/60'
                          : 'bg-white/5 hover:bg-white/20'
                      }`}
                      title={`Day ${idx + 1}: ${level > 0 ? `${level * 2} coding activities` : 'No activity'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-xs bg-white/5" />
                    <div className="w-2 h-2 rounded-xs bg-emerald-800/60" />
                    <div className="w-2 h-2 rounded-xs bg-emerald-600/80" />
                    <div className="w-2 h-2 rounded-xs bg-emerald-500" />
                  </div>
                  <span>More</span>
                </div>

                <div className="text-[10px] font-mono text-neutral-400 hover:text-white cursor-pointer transition-colors text-right">
                  Learn how we count activities →
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* View 2: Live Stream & Recorded Lecture Studio (Video 5: 00:07 - 00:10) */
        <div className="min-h-screen flex flex-col">
          {/* Top Classroom Studio Bar */}
          <header className="px-4 py-3 bg-[#0d0d12] border-b border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveMode('dashboard')}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Back to Expert Learning"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-white font-display line-clamp-1">
                  TheCodeSpark IGNITE 1.0: 2.0 Job Ready AI Powered Cohort
                </h2>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                  <span className="text-[#ff5722] font-semibold">3.47% Complete</span>
                  <span>•</span>
                  <span>Modules: 0/13</span>
                  <span>•</span>
                  <span>Sub-Modules: 99/357</span>
                  <span>•</span>
                  <span>Score: 1.07% / 31.42%</span>
                </div>
              </div>
            </div>

            {/* Live Recording Indicator */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-[11px] font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                LIVE CLASS RECORDING
              </span>
            </div>
          </header>

          {/* 3-Column Studio Layout */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            {/* Left Column: Modules Navigation (col 1-3) */}
            <div className="lg:col-span-3 border-r border-white/5 bg-[#09090d] p-4 overflow-y-auto max-h-[calc(100vh-60px)] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
                  Course Content
                </span>
                <span className="text-[10px] font-mono text-emerald-400">13 Modules</span>
              </div>

              <div className="space-y-2">
                {classroomModules.map((m) => {
                  const isOpen = openModuleKey === m.key;
                  return (
                    <div key={m.key} className="rounded-xl border border-white/5 bg-[#0f0e15] overflow-hidden">
                      <button
                        onClick={() => setOpenModuleKey(isOpen ? '' : m.key)}
                        className="w-full p-3 text-left flex items-center justify-between gap-2 hover:bg-white/[0.02] cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          {m.completed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-neutral-600 shrink-0" />
                          )}
                          <span className="text-xs font-semibold text-white truncate">{m.title}</span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-white/5 bg-[#0b0a10]">
                          {m.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              onClick={() => setActiveLectureTitle(lesson.title)}
                              className={`p-2 rounded-lg text-xs cursor-pointer flex items-center justify-between gap-2 transition-colors ${
                                activeLectureTitle === lesson.title
                                  ? 'bg-[#ff5722]/15 text-[#ff5722] font-semibold border border-[#ff5722]/30'
                                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                <Play className="w-3 h-3 shrink-0" />
                                <span className="truncate">{lesson.title}</span>
                              </div>
                              <span className="text-[10px] font-mono shrink-0">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center Column: Live Stream & Video Player Studio (col 4-9) */}
            <div className="lg:col-span-6 bg-[#060609] p-4 flex flex-col justify-between overflow-y-auto max-h-[calc(100vh-60px)] space-y-4">
              {/* Video Player */}
              <div className="rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative aspect-video flex flex-col justify-end">
                <video
                  ref={videoRef}
                  src="/assets/aistudio/20261101-0935-42.7658177_c4f6adda.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                />

                {/* Overlaid Player Controls */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs font-mono text-white/90">24:18 / 1:15:00</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <button
                      onClick={() => handleSpeedChange(playbackSpeed === 1 ? 1.5 : playbackSpeed === 1.5 ? 2 : 1)}
                      className="px-2.5 py-1 rounded bg-black/60 border border-white/15 text-white hover:bg-white/10 cursor-pointer"
                    >
                      {playbackSpeed}x
                    </button>
                    <span className="px-2.5 py-1 rounded bg-black/60 border border-white/15 text-emerald-400">
                      1080p HD
                    </span>
                  </div>
                </div>
              </div>

              {/* Lecture Title & Navigation Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#ff5722] font-semibold">
                    NOW PLAYING • EXPERT LEARNING RECORDING
                  </span>
                  <button
                    onClick={() => alert("Marked this lecture as completed! +50 House Points earned.")}
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mark Complete
                  </button>
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {activeLectureTitle}
                </h3>
              </div>

              {/* Interactive Tabs under Video */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 relative">
                  {[
                    { id: 'chat', label: `💬 Live Doubts & Chat (${chatMessages.length})` },
                    { id: 'notes', label: '📝 Lecture Notes & Code' },
                    { id: 'resources', label: '📂 GitHub Repo & Resources' }
                  ].map((tab) => {
                    const active = activeTabUnderVideo === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTabUnderVideo(tab.id as any)}
                        className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                          active ? 'text-white' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {active && (
                          <motion.div
                            layoutId="classroomUnderVideoTabPill"
                            className="absolute inset-0 bg-[#ff5722] rounded-lg shadow-sm"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: Live Doubts / Chat */}
                {activeTabUnderVideo === 'chat' && (
                  <div className="p-4 rounded-xl bg-[#0e0e15] border border-white/5 space-y-3">
                    <div className="max-h-48 overflow-y-auto space-y-2.5 pr-2">
                      {chatMessages.map((msg) => (
                        <motion.div 
                          key={msg.id} 
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs space-y-0.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className={`font-mono font-bold ${msg.isMentor ? 'text-[#ff5722]' : 'text-neutral-300'}`}>
                              {msg.user} {msg.isMentor && '⭐'}
                            </span>
                            <span className="text-[10px] text-neutral-500 font-mono">{msg.time}</span>
                          </div>
                          <p className="text-neutral-300 pl-2 border-l border-white/10">{msg.text}</p>
                        </motion.div>
                      ))}
                    </div>

                    <form onSubmit={handleSendChat} className="flex gap-2 pt-2 border-t border-white/5">
                      <input
                        type="text"
                        placeholder="Ask a doubt from the mentor..."
                        value={inputChat}
                        onChange={(e) => setInputChat(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl bg-[#14141f] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </motion.button>
                    </form>
                  </div>
                )}

                {/* Tab 2: Lecture Notes */}
                {activeTabUnderVideo === 'notes' && (
                  <div className="p-4 rounded-xl bg-[#0e0e15] border border-white/5 space-y-3 text-xs text-neutral-300 font-mono">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>KEY CODE SNIPPET (React 19 Server Actions)</span>
                      <button onClick={() => alert("Copied to clipboard!")} className="hover:text-white">Copy Code</button>
                    </div>
                    <pre className="p-3 rounded-lg bg-black/60 border border-white/5 overflow-x-auto text-emerald-400 text-[11px]">
{`async function submitDoubtAction(formData: FormData) {
  'use server';
  const doubt = formData.get('query');
  await db.doubts.create({ data: { doubt, timestamp: new Date() } });
  revalidatePath('/classroom');
}`}
                    </pre>
                  </div>
                )}

                {/* Tab 3: Resources */}
                {activeTabUnderVideo === 'resources' && (
                  <div className="p-4 rounded-xl bg-[#0e0e15] border border-white/5 space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-purple-400" />
                        <span className="font-mono text-white">Starter-Code-Episode-14.zip</span>
                      </div>
                      <button onClick={() => alert("Downloading starter code bundle...")} className="text-xs text-[#ff5722] hover:underline font-mono">
                        Download (4.2 MB)
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                        <span className="font-mono text-white">React-19-DeepDive-Slides.pdf</span>
                      </div>
                      <button onClick={() => alert("Opening presentation slides...")} className="text-xs text-[#ff5722] hover:underline font-mono">
                        View Slides
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Leaderboard Widget (col 10-12) (Video 5: 00:07 - 00:10) */}
            <div className="lg:col-span-3 border-l border-white/5 bg-[#09090d] p-4 overflow-y-auto max-h-[calc(100vh-60px)] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" /> Leaderboard
                </span>
                <span className="text-[10px] font-mono text-[#ff5722]">Cohort Rank</span>
              </div>

              {/* Podium (Top 3) */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                {/* 2nd Place */}
                <div className="p-2.5 rounded-xl bg-[#12121a] border border-cyan-500/30 flex flex-col items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-cyan-400">2nd</span>
                  <span className="text-xs font-bold text-white truncate max-w-full">{leaderboardRanks[1].name}</span>
                  <span className="text-[10px] font-mono text-neutral-400">{leaderboardRanks[1].points}</span>
                </div>

                {/* 1st Place */}
                <div className="p-3 rounded-xl bg-gradient-to-t from-amber-500/20 to-[#12121a] border border-amber-500/50 flex flex-col items-center justify-between shadow-lg shadow-amber-500/10">
                  <span className="text-xs font-mono font-black text-amber-400">1st 👑</span>
                  <span className="text-xs font-extrabold text-white truncate max-w-full">{leaderboardRanks[0].name}</span>
                  <span className="text-[10px] font-mono text-amber-300 font-bold">{leaderboardRanks[0].points}</span>
                </div>

                {/* 3rd Place */}
                <div className="p-2.5 rounded-xl bg-[#12121a] border border-rose-500/30 flex flex-col items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-rose-400">3rd</span>
                  <span className="text-xs font-bold text-white truncate max-w-full">{leaderboardRanks[2].name}</span>
                  <span className="text-[10px] font-mono text-neutral-400">{leaderboardRanks[2].points}</span>
                </div>
              </div>

              {/* Ranks 4 to 10 List */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                {leaderboardRanks.slice(3).map((student) => (
                  <div
                    key={student.rank}
                    className="p-2 rounded-lg bg-[#0e0e15] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 text-[10px] font-mono text-neutral-500 font-bold">{student.rank}</span>
                      <span className="font-medium text-neutral-200">{student.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">{student.points}</span>
                  </div>
                ))}
              </div>

              {/* Cohort percentile */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-xs font-mono text-emerald-400">
                You are ahead of <strong>52.87%</strong> of students in this batch! 🔥
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
