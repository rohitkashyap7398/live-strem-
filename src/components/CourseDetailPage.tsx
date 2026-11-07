import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  X, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Clock, 
  Award, 
  Star,
  Check, 
  Percent,
  TrendingUp,
  FileText,
  ShieldCheck,
  Download,
  Users,
  Compass,
  Briefcase,
  HelpCircle,
  ExternalLink,
  Layers,
  Terminal,
  Bot,
  Gauge,
  Cpu,
  FolderGit2
} from 'lucide-react';
import brandLogo from '../assets/logo.png';
import rohitPhoto from '../assets/Rohit.png';
import { Course, COURSES } from '../data/coursesData';
import { StudentReviews } from './StudentReviews';

interface CourseDetailPageProps {
  course: Course;
  onSelectAnotherCourse: (course: Course) => void;
  onRequestCallback: () => void;
  onBuyNow: (course: Course) => void;
  onViewSyllabus: (course: Course) => void;
  onNavigateCourses: () => void;
  onNavigateHome: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onSelectAnotherCourse,
  onRequestCallback,
  onBuyNow,
  onViewSyllabus,
  onNavigateCourses,
  onNavigateHome
}) => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);
  const [showAllModules, setShowAllModules] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [curriculumTab, setCurriculumTab] = useState<'episodes' | 'products' | 'dsa' | 'capstones'>('episodes');
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  const handleLearnMore = () => {
    const el = document.getElementById('curriculum-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDiscount = () => {
    setIsDiscountModalOpen(true);
  };

  const handleClaimDiscount = () => {
    setIsDiscountModalOpen(false);
    onBuyNow(course);
  };

  const visibleModules = showAllModules ? course.modules : course.modules.slice(0, 5);

  const comparisonPointsTheCodeSpark = [
    "Daily Live, Interactive Sessions By Industry Experts",
    "Complete Placement-Focused Ecosystem (Full Stack, DSA, GenAI, Aptitude & Reasoning)",
    "Learn Modern Industry Tools",
    "Instant Doubt Resolution Via Discord",
    "AI-Powered Tools And Real-World Projects",
    "Industry-Relevant Projects And Assignments",
    "Active Peer-to-Peer And Mentor-Led Learning Community"
  ];

  const comparisonPointsOthers = [
    "Mostly Pre-Recorded Or Outdated Content",
    "Limited To A Single Domain With No Holistic Preparation",
    "Slow Or No Adoption Of Modern Tools",
    "Little To No Doubt-Solving Or Mentorship Support",
    "No Real Exposure To AI-Driven Workflows",
    "Projects Are Minimal, Guided, Or Purely Academic",
    "No Structured Learning Or Peer Community"
  ];

  const studentReviews = [
    {
      name: "Mohd Siraj",
      role: "Web Developer",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      review: "I Had A Great Experience At TheCodeSpark. The Teachers Are Highly Supportive And Knowledgeable. They Explain Every Complex DSA Concept Very Clearly!"
    },
    {
      name: "Parth gupta",
      role: "Frontend Developer",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      review: "Learning at TheCodeSpark Has Been An Amazing Experience! The Mentors Explain Everything From Scratch, And The Discord Community Is Always Active."
    },
    {
      name: "Mukti Prasad Dash",
      role: "Full Stack Developer",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      review: "TheCodeSpark Is An Excellent Institute For Learning Coding. The Teachers Explain Concepts In Hindi/Hinglish With Real-World Industry Projects."
    },
    {
      name: "Pragati Nayak",
      role: "Junior Web Developer",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      review: "This Institute Is Not Just A Coding Platform But A Full Career Transformation! Rohit Sir's Guidance In GenAI And Aptitude Helped Me Clear My Off-Campus SDE Rounds."
    },
    {
      name: "Samarth Jain",
      role: "AI & Full Stack Guide",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      review: "Very Very Amazing Place To Learn New Technologies And Life Facts Too. Calling All Aspiring Coders And Tech Enthusiasts To Join This Cohort!"
    },
    {
      name: "Akshat Sahu",
      role: "Software Developer",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      review: "The Best Institute For Career Readiness. Rohit Sir Takes Extra Doubts Late At Night And Ensures No Student Is Left Behind In Logic Building."
    }
  ];

  const faqs = [
    {
      q: "What is included in this cohort?",
      a: "It covers web development, DSA, aptitude training, and practical use of AI tools to build skills needed for job readiness. You'll master React, Node.js, MongoDB, Generative AI APIs, System Design, and 1,000+ coding challenges."
    },
    {
      q: "Do I need prior coding experience?",
      a: "No! The cohort begins from absolute fundamentals of programming, internet mechanics, and JavaScript before advancing to full-stack engineering, GenAI tools, and advanced Data Structures."
    },
    {
      q: "How does AI help in this program?",
      a: "You will build AI-powered applications, leverage LLM APIs (Gemini, LangChain), implement RAG pipelines, and use modern AI workflows that modern tech companies look for in 2026."
    },
    {
      q: "Will this cohort help me get job-ready?",
      a: "Yes. Along with full stack and DSA training, we include dedicated Aptitude, Quant, and Logical Reasoning modules, resume building, mock interviews, and direct referral access."
    },
    {
      q: "Are there project reviews and 1-on-1 mentor support?",
      a: "Yes, every assignment and capstone product is reviewed by senior engineers with detailed rubrics and feedback. You also get dedicated 24/7 Discord doubt resolution."
    }
  ];

  const hiringCompanies = ["Google", "Amazon", "Walmart", "TCS Digital", "Rapidops", "Microsoft", "Paytm", "Cognizant"];

  return (
    <div className="min-h-screen bg-[#070709] text-[#e5e7eb] pb-32 relative selection:bg-[#ff5722] selection:text-white">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#0e0e13] border-b border-white/5 py-2.5 px-4 sticky top-18 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono whitespace-nowrap">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <span>/</span>
            <button onClick={onNavigateCourses} className="hover:text-white transition-colors cursor-pointer">
              Courses
            </button>
            <span>/</span>
            <span className="text-[#ff5722] font-semibold">{course.codeName}</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-[11px] font-mono text-neutral-400 uppercase whitespace-nowrap mr-1 hidden sm:inline">
              IGNITE Series:
            </span>
            {COURSES.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectAnotherCourse(c)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  c.id === course.id
                    ? 'bg-[#ff5722] text-white font-bold shadow-sm'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {c.codeName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION (Video exact: 00:01 - 00:03) */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff5722]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-block text-xs font-mono font-bold tracking-widest text-[#ff5722] uppercase">
                {course.kicker || 'CODE. CREATE. CONQUER.'}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                {course.subtitle}
              </p>

              {/* Price Row: Price Rs.5999 Rs.11999 (+GST) */}
              <div className="flex items-baseline gap-2.5 pt-2">
                <span className="text-base text-neutral-300 font-mono">Price</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5722] font-mono">
                  Rs.{course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-sm text-neutral-500 line-through font-mono">
                    Rs.{course.originalPrice}
                  </span>
                )}
                <span className="text-xs text-neutral-400 font-mono">
                  (+GST)
                </span>
              </div>

              {/* CTA Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleOpenDiscount}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-[#ff5722] to-[#e64a19] hover:from-[#f4511e] hover:to-[#d84315] text-white text-sm font-bold shadow-lg shadow-[#ff5722]/30 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleLearnMore}
                  className="px-6 py-3 rounded-full bg-transparent hover:bg-white/5 border border-white/20 text-white text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Hero Column: macOS Browser Mockup with Instructor & Floating Widgets */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e14] shadow-2xl p-2.5">
                {/* Browser top bar with red, yellow, green dots */}
                <div className="px-3.5 py-2.5 bg-[#14141c] rounded-t-2xl flex items-center gap-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 text-center text-[11px] font-mono text-neutral-400 truncate">
                    thecodespark.io/cohorts/{course.id}
                  </div>
                </div>

                {/* Main Visual Display */}
                <div className="relative aspect-video rounded-b-2xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={rohitPhoto}
                    onError={(e) => { e.currentTarget.src = course.instructorImg || '/Rohit.png'; }}
                    alt="Instructor Mr. Rohit Kashyap"
                    className="w-full h-full object-cover object-top filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Floating Widget 1: Login Widget top left */}
                  <div className="absolute top-4 left-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-2 text-xs text-white shadow-lg pointer-events-none">
                    <div className="w-5 h-5 rounded-full bg-[#ff5722] flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>
                    <span className="font-mono text-[11px]">Login</span>
                  </div>

                  {/* Floating Widget 2: Websites pill center left */}
                  <div className="absolute bottom-16 left-6 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white shadow-lg pointer-events-none flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Websites</span>
                  </div>

                  {/* Floating Widget 3: $62,970 Revenue badge top right */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-emerald-500/30 text-right shadow-lg pointer-events-none">
                    <div className="text-[10px] text-neutral-400 font-mono uppercase">Revenue</div>
                    <div className="text-sm font-mono font-bold text-emerald-400">$62,970</div>
                  </div>

                  {/* Floating Widget 4: DSA pill with cursor click bottom right */}
                  <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#ff5722]/40 text-xs font-mono text-white shadow-lg pointer-events-none flex items-center gap-2">
                    <span className="text-[#ff5722] font-bold">DSA</span>
                    <span className="text-xs">👆</span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <button 
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-[#ff5722]/90 hover:bg-[#ff5722] text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                </div>
              </div>

              {/* 5 Pill Badges beneath the video mockup (exact Video 00:03) */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {(course.tags && course.tags.length > 0 ? course.tags : ['Job Ready', 'MERN Stack', 'DSA With JS', 'Placement Focused', 'AI Powered']).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-[#121217] border border-white/10 text-xs font-mono text-neutral-300 hover:border-[#ff5722]/40 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "Get Placed with job ready AI powered cohort*" Section (Video exact: 00:08 - 00:11) */}
      <section className="py-20 bg-[#070709] relative overflow-hidden border-b border-white/5 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Main Heading */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                Get Placed
              </span>
            </h2>
            <p className="text-lg sm:text-2xl font-light text-neutral-300 tracking-wide font-sans">
              with job ready AI powered cohort*
            </p>
          </div>

          {/* 3D Illustrated Graphic Centerpiece with Laptop and floating company logos */}
          <div className="relative max-w-2xl mx-auto py-8">
            {/* Glowing laptop mockup */}
            <div className="relative mx-auto w-full max-w-lg aspect-[16/10] rounded-2xl bg-gradient-to-b from-neutral-800 to-black p-2 shadow-[0_20px_60px_-15px_rgba(255,87,34,0.3)] border border-neutral-700/60">
              <div className="w-full h-full rounded-xl overflow-hidden bg-[#050508] relative flex items-center justify-center">
                {/* Galaxy background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/60 via-purple-950/40 to-black" />
                <div className="relative text-center space-y-1 z-10">
                  <Sparkles className="w-8 h-8 text-[#ff5722] mx-auto animate-pulse" />
                  <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    Placement Engineering Lab
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    TheCodeSpark Technologies Private Limited
                  </div>
                </div>
              </div>
              <div className="h-2 w-28 bg-neutral-600 rounded-b-md mx-auto mt-1" />
            </div>

            {/* Floating 3D/Tech Badges around the laptop (Amazon, Google, Microsoft, Resume, Padlock, Up Arrow) */}
            {/* Amazon */}
            <div className="absolute -top-4 right-10 sm:right-16 px-3.5 py-1.5 rounded-xl bg-[#13131a] border border-amber-500/40 text-amber-300 text-xs font-bold font-mono shadow-xl flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '4s' }}>
              <span>📦</span> amazon
            </div>

            {/* Google */}
            <div className="absolute top-16 -left-2 sm:left-4 px-3 py-1.5 rounded-xl bg-[#13131a] border border-blue-500/40 text-blue-300 text-xs font-bold font-mono shadow-xl flex items-center gap-1.5">
              <span>🌐</span> Google
            </div>

            {/* Microsoft */}
            <div className="absolute bottom-16 -right-2 sm:right-6 px-3 py-1.5 rounded-xl bg-[#13131a] border border-cyan-500/40 text-cyan-300 text-xs font-bold font-mono shadow-xl flex items-center gap-1.5">
              <span>💻</span> Microsoft
            </div>

            {/* Resume Sheet */}
            <div className="absolute bottom-20 -left-4 sm:left-12 px-3 py-1.5 rounded-xl bg-[#13131a] border border-emerald-500/40 text-emerald-300 text-xs font-mono shadow-xl flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>RESUME</span>
            </div>

            {/* Golden Padlock */}
            <div className="absolute top-2 left-1/4 px-2.5 py-1 rounded-lg bg-[#13131a] border border-yellow-500/30 text-yellow-400 text-xs font-mono shadow-lg">
              🔒 Verified
            </div>

            {/* Growth Arrow */}
            <div className="absolute -top-6 right-1/3 p-2 rounded-full bg-[#ff5722]/20 border border-[#ff5722]/40 text-[#ff5722] text-xs">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          {/* 3. The 3 Glowing Stat Boxes (Video exact: 00:11 - 00:12) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
            {/* Box 1: 260+ Hours */}
            <div className="p-8 rounded-3xl bg-[#091016] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] text-center group hover:border-cyan-400 transition-all">
              <span className="text-4xl sm:text-5xl font-black text-cyan-300 font-mono block">
                {course.hours || '260+'}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-200/80 mt-2 block font-bold">
                HOURS
              </span>
            </div>

            {/* Box 2: 180+ Lectures */}
            <div className="p-8 rounded-3xl bg-[#160d09] border-2 border-[#ff5722]/50 shadow-[0_0_30px_rgba(255,87,34,0.15)] text-center group hover:border-[#ff5722] transition-all">
              <span className="text-4xl sm:text-5xl font-black text-[#ff5722] font-mono block">
                {course.modulesCount || '180+'}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff8a65] mt-2 block font-bold">
                LECTURES
              </span>
            </div>

            {/* Box 3: 1k+ Questions */}
            <div className="p-8 rounded-3xl bg-[#140b0d] border-2 border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.15)] text-center group hover:border-rose-500 transition-all">
              <span className="text-4xl sm:text-5xl font-black text-rose-400 font-mono block">
                {course.questionsCount || '1k+'}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-rose-300 mt-2 block font-bold">
                QUESTIONS
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMPARISON SECTION: "What Sets TheCodeSpark Apart From Other Coders" (Video exact: 00:13 - 00:15) */}
      <section className="py-20 bg-[#070709] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest text-[#ff5722] border border-[#ff5722]/30 bg-[#ff5722]/10 uppercase">
              [ COMPARISON ]
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              What Sets TheCodeSpark Apart From Other Coders
            </h2>
          </div>

          {/* 2 Comparison Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Card: TheCodeSpark Technologies */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0b130e] border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/10 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-emerald-500/20">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark Logo"
                  className="h-8 w-auto object-contain filter drop-shadow"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    TheCodeSpark Technologies
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    {course.codeName} Flagship
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPointsTheCodeSpark.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Others */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#121217] border border-white/10 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-300 font-display">
                    Others
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    Generic Online Bootcamps
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPointsOthers.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CURRICULUM SECTION: "Structured Curriculum Designed For Real Growth" (Video exact: 00:15 - 00:18) */}
      <section id="curriculum-section" className="py-20 bg-[#09090c] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest text-[#ff5722] border border-[#ff5722]/30 bg-[#ff5722]/10 uppercase">
              [ CURRICULUM & CAPSTONE PRODUCTS ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Structured Curriculum Designed For Real Growth
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto">
              Master the exact engineering stack demanded by top tech companies, from foundational episodes to production AI products and 350+ DSA problems.
            </p>

            {/* DISTINCT TRACK SELECTOR TABS (For IGNITE 2.0, IGNITE 3.0 or courses with Products / DSA / Capstones) */}
            {(Boolean(course.productsBreakdown) || Boolean(course.dsaJavaCohort) || Boolean(course.capstonesBreakdown)) && (
              <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
                <button
                  onClick={() => setCurriculumTab('episodes')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    curriculumTab === 'episodes'
                      ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30 border border-[#ff5722]'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{course.capstonesBreakdown ? `${course.modules.length} Analytics Phases` : `${course.modules.length} Master Episodes`}</span>
                </button>

                {course.capstonesBreakdown && (
                  <button
                    onClick={() => setCurriculumTab('capstones')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      curriculumTab === 'capstones'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
                    <span>6 Industry Capstones</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white font-mono">Portfolio Ready</span>
                  </button>
                )}

                {course.productsBreakdown && (
                  <button
                    onClick={() => setCurriculumTab('products')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      curriculumTab === 'products'
                        ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-lg shadow-pink-500/25 border border-pink-400'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                    <span>Products: Loveable Ai + Pixxo (ImageKit)</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white font-mono">2 Products</span>
                  </button>
                )}

                {course.dsaJavaCohort && (
                  <button
                    onClick={() => setCurriculumTab('dsa')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      curriculumTab === 'dsa'
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 border border-emerald-500'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-300" />
                    <span>DSA in Java | Cohort 3.0</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white font-mono">350+ Problems</span>
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Context Card based on active track */}
            <div className="lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-[#101016] border border-white/10 space-y-6 sticky top-28">
              {curriculumTab === 'episodes' && (
                <>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Course Prerequisites</h3>
                    <p className="text-xs text-neutral-400 mt-1">Zero prior coding required. Starts from internet fundamentals.</p>
                  </div>

                  {/* Badges: Intermediate | 20 Weeks */}
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#ff5722]" />
                      <span>{course.prerequisites.level || 'Intermediate'}</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#ff5722]" />
                      <span>{course.prerequisites.duration || '20 Weeks'}</span>
                    </div>
                  </div>

                  {/* Checklist: A QUICK OVERVIEW OF THE COURSE */}
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      A QUICK OVERVIEW OF THE COURSE
                    </div>
                    {course.prerequisites.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {curriculumTab === 'products' && course.productsBreakdown && (
                <>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-pink-400 font-bold">
                      FLAGSHIP CAPSTONE PROJECTS
                    </span>
                    <h3 className="text-xl font-bold text-white font-display mt-0.5">Industry Products Built</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Students build and deploy 2 production-grade SaaS engines that demonstrate real enterprise architecture.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="p-3 rounded-2xl bg-black/40 border border-pink-500/30 space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-pink-400" />
                        <span>Product 1: Loveable Ai</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        Autonomous multi-agent product builder with Zod validation, streaming code execution & project workspaces.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-black/40 border border-cyan-500/30 space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Product 2: Pixxo (ImageKit)</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        Media processing engine with real-time URL transformations, Amazon CloudFront CDN edge caching & sub-500ms latency.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {curriculumTab === 'dsa' && course.dsaJavaCohort && (
                <>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      COHORT 3.0 TRACK
                    </span>
                    <h3 className="text-xl font-bold text-white font-display mt-0.5">DSA in Java Mastery</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      From basics of variables and pattern programming to 350+ placement problems and 25+ coding patterns.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30">
                      <span className="text-xs font-bold text-emerald-300 block">350+</span>
                      <span className="text-[10px] text-neutral-400">Problems</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30">
                      <span className="text-xs font-bold text-emerald-300 block">25+</span>
                      <span className="text-[10px] text-neutral-400">Patterns</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30">
                      <span className="text-xs font-bold text-emerald-300 block">30</span>
                      <span className="text-[10px] text-neutral-400">Modules</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30">
                      <span className="text-xs font-bold text-emerald-300 block">300</span>
                      <span className="text-[10px] text-neutral-400">MCQs</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block font-semibold">
                      Bonus Sheets:
                    </span>
                    {course.dsaJavaCohort.bonusSheets.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-emerald-200">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {curriculumTab === 'capstones' && course.capstonesBreakdown && (
                <>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                      PHASE 12 CAPSTONES
                    </span>
                    <h3 className="text-xl font-bold text-white font-display mt-0.5">Enterprise Industry Capstones</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Complete end-to-end data analytics pipelines, executive Power BI suites, ML forecasting, and automated data engineering projects for your professional portfolio.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-blue-500/30">
                      <span className="text-xs font-bold text-blue-300 block">6</span>
                      <span className="text-[10px] text-neutral-400">Capstones</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-blue-500/30">
                      <span className="text-xs font-bold text-blue-300 block">6</span>
                      <span className="text-[10px] text-neutral-400">Domains</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-blue-500/30">
                      <span className="text-xs font-bold text-blue-300 block">100%</span>
                      <span className="text-[10px] text-neutral-400">Production</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-blue-500/30">
                      <span className="text-xs font-bold text-blue-300 block">Cloud</span>
                      <span className="text-[10px] text-neutral-400">Deployed</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block font-semibold">
                      Enterprise Domains Covered:
                    </span>
                    {[
                      'Retail & E-commerce (RFM + Churn)',
                      'HR Tech & Workforce Analytics (RLS)',
                      'Financial KPI & Cash Variance Forecasting',
                      'Marketing Multi-Touch Attribution & A/B',
                      'IoT Telemetry & Predictive Maintenance',
                      'Production ETL Pipeline (Airflow + S3)'
                    ].map((d, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-blue-200">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* View Full Syllabus Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => onViewSyllabus(course)}
                  className="w-full py-3 px-4 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold transition-all shadow-lg shadow-[#ff5722]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Full Syllabus in Detail →</span>
                </button>
              </div>
            </div>

            {/* Right Column: Dynamic Content based on active track */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* TRACK 1: EPISODES */}
              {curriculumTab === 'episodes' && (
                <>
                  {visibleModules.map((module) => {
                    const isOpen = openModuleId === module.id;
                    return (
                      <div
                        key={module.id}
                        className="rounded-2xl border border-white/10 bg-[#121218] overflow-hidden transition-all hover:border-white/20"
                      >
                        <button
                          onClick={() => toggleModule(module.id)}
                          className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                        >
                          <div className="space-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff5722] font-semibold block">
                              {module.name}
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-white font-display">
                              {module.title}
                            </h4>
                            <p className="text-xs text-neutral-400 leading-relaxed max-w-xl">
                              {module.desc}
                            </p>
                          </div>

                          <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-neutral-400 transition-transform ${isOpen ? 'rotate-180 text-[#ff5722]' : ''}`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        {isOpen && module.topics && (
                          <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-[#0e0e13]">
                            <div className="text-[11px] font-mono uppercase text-neutral-400 mb-2 font-semibold">
                              TOPICS COVERED:
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {module.topics.map((t, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                                  <span className="text-[#ff5722] mt-0.5">▹</span>
                                  <span>{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Show More Button */}
                  {course.modules.length > 5 && (
                    <div className="text-center pt-2">
                      <button
                        onClick={() => setShowAllModules(!showAllModules)}
                        className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-semibold border border-white/10 transition-colors inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>{showAllModules ? 'Show Less Modules' : `${course.modules.length - 5} More →`}</span>
                        {showAllModules ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* TRACK 2: PRODUCTS BUILT: LOVEABLE AI + PIXXO (IMAGEKIT) */}
              {curriculumTab === 'products' && course.productsBreakdown && (
                <div className="space-y-5">
                  {/* Product Switcher Pills */}
                  <div className="grid grid-cols-2 gap-3">
                    {course.productsBreakdown.map((prod, idx) => {
                      const isSel = activeProductIndex === idx;
                      return (
                        <button
                          key={prod.id}
                          onClick={() => setActiveProductIndex(idx)}
                          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSel
                              ? 'bg-[#151522] border-pink-500/60 shadow-lg shadow-pink-500/10'
                              : 'bg-[#0f0f15] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <span className="text-[10px] font-mono uppercase text-[#ff5722] font-bold block">
                            {prod.badge}
                          </span>
                          <h4 className="text-base font-bold text-white font-display mt-0.5">
                            {prod.name}
                          </h4>
                          <span className="text-[11px] text-neutral-400 truncate block mt-0.5">
                            11 Modules Breakdown
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Product Details */}
                  {(() => {
                    const activeProd = course.productsBreakdown[activeProductIndex];
                    return (
                      <div className="space-y-4">
                        {/* Banner Card */}
                        <div className={`p-6 rounded-3xl bg-gradient-to-br ${activeProd.bgGradient} border border-white/10 space-y-4`}>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff5722] font-bold">
                              {activeProd.badge}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-1">
                              {activeProd.name} — {activeProd.tagline}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                              {activeProd.description}
                            </p>
                          </div>

                          {/* Tech stack */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                              Production Tech Stack:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {activeProd.techStack.map((tech, idx) => (
                                <span key={idx} className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/15 text-xs font-mono text-neutral-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* 4 Architecture Highlights */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {activeProd.architectureHighlights.map((arch, idx) => (
                              <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span>{arch.title}</span>
                                </div>
                                <p className="text-[11px] text-neutral-400 leading-snug">
                                  {arch.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 11 Modules Preview List */}
                        <div className="space-y-2.5">
                          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center justify-between">
                            <span>11 Granular Architecture Modules</span>
                            <button
                              onClick={() => onViewSyllabus(course)}
                              className="text-xs text-[#ff5722] hover:underline cursor-pointer font-sans"
                            >
                              Expand All in Syllabus Modal →
                            </button>
                          </div>

                          {activeProd.modules.map((m) => (
                            <div key={m.number} className="p-4 rounded-xl bg-[#121218] border border-white/10 space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-mono font-bold text-white">
                                  Section {m.number}: {m.title}
                                </span>
                                <span className="text-[10px] font-mono text-neutral-400">
                                  {m.items.length} items
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {m.items.slice(0, 4).map((it, i) => (
                                  <span key={i} className="text-[11px] font-mono text-neutral-300 bg-white/5 px-2 py-0.5 rounded">
                                    • {it}
                                  </span>
                                ))}
                                {m.items.length > 4 && (
                                  <span className="text-[11px] font-mono text-neutral-400 px-1 py-0.5">
                                    +{m.items.length - 4} more
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* TRACK 3: DATA STRUCTURES & ALGORITHMS IN JAVA */}
              {curriculumTab === 'dsa' && course.dsaJavaCohort && (
                <div className="space-y-4">
                  {/* Stats Card */}
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                        COHORT 3.0 • BASICS TO PLACEMENT LEVEL
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-0.5">
                        {course.dsaJavaCohort.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                        {course.dsaJavaCohort.subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {course.dsaJavaCohort.overviewHighlights.slice(0, 6).map((hl, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-black/40 border border-emerald-500/20 text-xs text-neutral-200 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 30 Modules Preview */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center justify-between">
                      <span>30 Deep Topic Modules (355 Coding Problems)</span>
                      <button
                        onClick={() => onViewSyllabus(course)}
                        className="text-xs text-emerald-400 hover:underline cursor-pointer font-sans"
                      >
                        Open Problem Tables in Modal →
                      </button>
                    </div>

                    {course.dsaJavaCohort.topics.slice(0, 8).map((top) => (
                      <div key={top.id} className="p-4 rounded-xl bg-[#121218] border border-white/10 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                              {top.badge}
                            </span>
                            <span className="text-xs font-bold text-white font-display">
                              {top.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {top.problems.length} problems
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {top.concepts.map((c, i) => (
                            <span key={i} className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="text-center pt-2">
                      <button
                        onClick={() => onViewSyllabus(course)}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30 transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>View All 30 Modules & Problem Tables in Full Syllabus →</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TRACK 4: 6 INDUSTRY CAPSTONES (IGNITE 3.0 DATA ANALYTICS & ENGINEERING) */}
              {curriculumTab === 'capstones' && course.capstonesBreakdown && (
                <div className="space-y-4">
                  {/* Capstone Banner Card */}
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent border border-blue-500/30 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                        PHASE 12 CAPSTONES • 6 ENTERPRISE PORTFOLIO ARTIFACTS
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-0.5">
                        6 Production-Grade Industry Capstones
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                        Designed to reflect real enterprise analytics challenges — complete with raw messy data ingestion, SQL warehouse models, ML forecasting, and executive Power BI dashboards with Row-Level Security.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <div className="text-[10px] font-mono text-neutral-400">Dashboards</div>
                        <div className="text-xs font-bold text-white mt-0.5">Power BI + DAX</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <div className="text-[10px] font-mono text-neutral-400">SQL Database</div>
                        <div className="text-xs font-bold text-white mt-0.5">PostgreSQL CTEs</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <div className="text-[10px] font-mono text-neutral-400">ETL Pipelines</div>
                        <div className="text-xs font-bold text-white mt-0.5">Airflow + S3</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <div className="text-[10px] font-mono text-neutral-400">App Deployment</div>
                        <div className="text-xs font-bold text-white mt-0.5">Streamlit Cloud</div>
                      </div>
                    </div>
                  </div>

                  {/* 6 Capstones Cards List */}
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center justify-between">
                      <span>Enterprise Capstone Projects</span>
                      <button
                        onClick={() => onViewSyllabus(course)}
                        className="text-xs text-blue-400 hover:underline cursor-pointer font-sans"
                      >
                        Open Capstone Deep Dive in Modal →
                      </button>
                    </div>

                    {course.capstonesBreakdown.map((capstone, index) => (
                      <div
                        key={capstone.id}
                        className="p-5 sm:p-6 rounded-2xl bg-[#121218] border border-white/10 hover:border-blue-500/30 transition-all space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/25 px-2 py-0.5 rounded">
                                Capstone #{index + 1}
                              </span>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                                {capstone.domain}
                              </span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-white font-display pt-1">
                              {capstone.title}
                            </h4>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          {capstone.description}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="pt-2 border-t border-white/5">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                            Tech Stack:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {capstone.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables Preview */}
                        <div className="pt-2 border-t border-white/5">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                            Core Deliverables:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {capstone.deliverables.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="text-center pt-2">
                      <button
                        onClick={() => onViewSyllabus(course)}
                        className="px-6 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-mono font-bold border border-blue-500/30 transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>View Full 13-Phase Syllabus & Capstone Specs in Modal →</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 6. HIRING PARTNERS & STUDENT REVIEWS */}
      <section className="pt-16 pb-4 bg-[#050507] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          {/* Hiring Partners Logos Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 filter grayscale hover:grayscale-0 transition-all">
            {hiringCompanies.map((comp, idx) => (
              <span key={idx} className="text-base sm:text-xl font-bold font-display text-neutral-400 tracking-wider">
                {comp}
              </span>
            ))}
          </div>
        </div>
        <StudentReviews />
      </section>

      {/* 7. CERTIFICATE OF COMPLETION (Video exact: 00:20 - 00:21) */}
      <section className="py-20 bg-[#09090d] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Benefits */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Earn Certificate Of Completion
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <span className="text-[#ff5722] mt-0.5 text-base">•</span>
                  <span>Build and Showcase Real Projects, Gain hands-on experience by working on live projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff5722] mt-0.5 text-base">•</span>
                  <span>Receive Expert Mentorship and Evaluation, Get detailed feedback from TheCodeSpark mentors</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff5722] mt-0.5 text-base">•</span>
                  <span>Earn a Globally Recognized Certificate On completion, receive a verified certificate</span>
                </div>
              </div>
            </div>

            {/* Right Column: Certificate Graphic Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 sm:p-7 bg-white text-slate-900 border-4 border-[#ff5722] shadow-2xl relative font-sans space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={brandLogo}
                      onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                      alt="Logo"
                      className="h-7 w-auto object-contain shrink-0"
                    />
                    <span className="text-[10px] font-bold font-mono tracking-wider text-slate-800">
                      TheCodeSpark Technologies
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                    VERIFIED #TC-2026-COHORT
                  </span>
                </div>

                <div className="text-center py-2 space-y-1">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                    CERTIFICATE OF COMPLETION
                  </div>
                  <div className="text-[11px] text-slate-500">Presented To:</div>
                  <h3 className="text-xl font-extrabold font-serif text-slate-950">
                    JOHN DOE
                  </h3>
                  <p className="text-[11px] text-slate-600 max-w-xs mx-auto">
                    For successfully completing the intensive <span className="font-bold text-slate-900">{course.title}</span> covering Full Stack, Generative AI, and Data Structures.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t text-[10px] text-slate-500 font-mono">
                  <span>Mr. Rohit Kashyap (CEO)</span>
                  <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center text-[8px] font-mono">
                    QR
                  </div>
                  <span>Authorized Certificate</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQS SECTION (Video exact: 00:21 - 00:23) */}
      <section className="py-20 bg-[#070709] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest text-[#ff5722] border border-[#ff5722]/30 bg-[#ff5722]/10 uppercase">
              [ FAQS ]
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              Frequently Asked Questions From Our Students
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#0e0e14] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180 text-[#ff5722]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. BIG OUTLINE TEXT IN FOOTER (Video exact: 00:23 - 00:25) */}
      <section className="py-16 bg-[#050507] overflow-hidden text-center relative select-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl text-transparent tracking-tighter opacity-15 stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}>
            TheCodeSpark
          </div>
        </div>
      </section>

      {/* 10. PERSISTENT FLOATING BOTTOM PILL (Video exact: visible at bottom across the whole video) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="p-1.5 rounded-full bg-[#141419]/95 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center gap-2">
          <button
            onClick={onNavigateCourses}
            className="px-4 py-2 rounded-full text-xs font-semibold text-neutral-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            Courses
          </button>
          
          <button
            onClick={onRequestCallback}
            className="px-4 py-2 rounded-full text-xs font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            Request Callback
          </button>

          <button
            onClick={handleOpenDiscount}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#ff5722] to-[#e64a19] hover:from-[#f4511e] hover:to-[#d84315] text-white text-xs font-bold shadow-lg shadow-[#ff5722]/30 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            Buy Now →
          </button>
        </div>
      </div>

      {/* 11. "GET DISCOUNT" POPUP MODAL (Video exact: 00:04 - 00:06) */}
      {isDiscountModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsDiscountModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-sm rounded-3xl bg-[#14141c] border border-white/10 p-6 sm:p-8 text-center space-y-5 shadow-2xl card-inner-glow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDiscountModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Discount Star/Flower Badge */}
            <div className="w-16 h-16 rounded-2xl bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff5722] flex items-center justify-center mx-auto shadow-lg">
              <Percent className="w-8 h-8 stroke-[2.5]" />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <h3 className="text-2xl font-black text-white font-display">
                Get Discount
              </h3>
              <p className="text-xs text-neutral-300">
                Join the <span className="text-[#ff5722] font-semibold">{course.title}</span> Program
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-300">
              Special offer applied: <span className="font-bold text-emerald-400 font-mono">50% Instant Scholarship Discount</span>
            </div>

            {/* Button */}
            <button
              onClick={handleClaimDiscount}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ff5722] to-[#e64a19] hover:from-[#f4511e] hover:to-[#d84315] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#ff5722]/30 active:scale-95 transition-all cursor-pointer"
            >
              Get My Discount
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
