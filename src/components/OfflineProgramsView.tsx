import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface OfflineProgramsViewProps {
  onApplyOffline: () => void;
  onRequestCallback: () => void;
}

export const OfflineProgramsView: React.FC<OfflineProgramsViewProps> = ({
  onApplyOffline,
  onRequestCallback
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Active step in "What Makes Us Different"
  const [activeDiffStep, setActiveDiffStep] = useState(0);

  // Active Career Journey focus row
  const [activeJourneyIdx, setActiveJourneyIdx] = useState(0);

  // Filter tab for "Classroom To Career Program"
  const [activeCourseCategory, setActiveCourseCategory] = useState<
    'all' | 'web' | 'python' | 'java' | 'ignite'
  >('all');

  // Mentor carousel state (0 = Page 1, 1 = Page 2)
  const [mentorPage, setMentorPage] = useState(0);

  // Placement Assistance Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  const polaroids = [
    {
      title: 'Leadership & Public Speaking',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80',
      rotate: -3
    },
    {
      title: 'Debug Battles & Competitions',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80',
      rotate: 2
    },
    {
      title: 'Inertia & Community Culture',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80',
      rotate: -2
    },
    {
      title: 'Career & Placement Activities',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80',
      rotate: 3
    },
    {
      title: 'Tech Masterclasses',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=80',
      rotate: -2
    },
    {
      title: 'Real Project & Product Building',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=80',
      rotate: 2
    }
  ];

  const classroomCourses = [
    {
      id: 'web-dev',
      category: 'web',
      title: 'Full Stack Web Development with Gen AI',
      badge: 'VS CODE • REACT 19',
      desc: 'Learn in a focused, distraction-free classroom environment with expert mentors guiding every line of code.',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
      mentors: 'Ali, Harsh & Sarthak'
    },
    {
      id: 'data-science',
      category: 'python',
      title: 'Python Data Science with Gen AI',
      badge: 'NUMPY • PYTORCH • LLM',
      desc: 'Master mathematical modeling, data pipelines, deep neural architectures, and autonomous AI agents.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
      mentors: 'Devendra & Data Specialists'
    },
    {
      id: 'campus-placement',
      category: 'java',
      title: 'Campus Placement Track',
      badge: 'DSA IN JAVA • APTITUDE',
      desc: 'Crack top product interviews with rigorous logic building, LeetCode 450 question patterns, and mock interviews.',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
      mentors: 'Ankur & Placement Cell'
    }
  ];

  const filteredClassroomCourses = classroomCourses.filter((c) => {
    if (activeCourseCategory === 'all') return true;
    if (activeCourseCategory === 'web') return c.category === 'web';
    if (activeCourseCategory === 'python') return c.category === 'python';
    if (activeCourseCategory === 'java') return c.category === 'java';
    return true;
  });

  const allMentors = [
    {
      name: 'ALI ANSARI',
      role: 'THECODESPARK',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'MUSKAN RAI',
      role: 'THECODESPARK',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'HARSH SHARMA',
      role: 'THECODESPARK',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'SARTHAK SHARMA',
      role: 'THECODESPARK',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'ANKUR PRAJAPATI',
      role: 'THECODESPARK',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'DEVENDRA DHOTE',
      role: 'THECODESPARK',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80'
    }
  ];

  const visibleMentors =
    mentorPage === 0 ? allMentors.slice(0, 5) : allMentors.slice(1, 6);

  const placedStudents = [
    {
      name: 'KUSHAGRA PATIDAR',
      comp: 'amazon',
      logoText: 'amazon',
      lpa: '47 LPA',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'SHIVAM MISHRA',
      comp: 'Razorpay',
      logoText: 'Razorpay',
      lpa: '24 LPA',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'KRITIKA B DAS',
      comp: 'accenture',
      logoText: 'accenture',
      lpa: '16 LPA',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'RISHITA JAIN',
      comp: 'cisco',
      logoText: 'CISCO',
      lpa: '17+ LPA',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'MANSI SAHU',
      comp: 'airtel',
      logoText: 'airtel',
      lpa: '18+ LPA',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'SHRUTI SARAWAGI',
      comp: 'synchrony',
      logoText: 'synchrony',
      lpa: '12+ LPA',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80'
    }
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Beginner Foundation',
      desc: 'Start From Absolute Zero And Build A Strong Foundation In Programming And Problem-Solving. No Prior Experience Needed. Just Consistency And Curiosity. We Turn Confusion Into Clarity From Day One.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80',
      isRed: true
    },
    {
      num: '02',
      title: 'Industry-Focused Training',
      desc: 'Structured, Hands-On Training Designed To Make You Industry-Ready. Learn By Building, Not Just Watching. Real Tasks, Real Challenges. Every Concept Is Backed With Practical Implementation.',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
      isRed: false
    },
    {
      num: '03',
      title: 'Learn From Industry Experts',
      desc: 'Learn Directly From Professionals Working At Top Tech Companies. Get Real-World Insights, Career Guidance, And Advanced Strategies.',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
      isRed: true
    },
    {
      num: '04',
      title: 'Build Real-World Products',
      desc: 'Build Real-World, Production-Level Projects, Not Basic Clones. Focus On Scalability, Performance, And Problem-Solving. Create A Portfolio That Stands Out In Interviews.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
      isRed: false
    },
    {
      num: '05',
      title: 'Real Industrial Experience',
      desc: 'Work In An Environment That Simulates Real Tech Companies. Follow Professional Workflows, Tools, And Team Collaboration. Experience How Real Products Are Built And Deployed.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80',
      isRed: true
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050507] text-slate-900 dark:text-[#f3f4f6] pb-28 relative overflow-x-clip transition-colors duration-300">
      {/* ===================================================================== */}
      {/* SECTION 1: HERO                                                       */}
      {/* ===================================================================== */}
      <section className="relative pt-14 sm:pt-20 pb-20 border-b border-slate-200 dark:border-white/[0.06] bg-slate-50/70 dark:bg-[#060609]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white dark:bg-white/[0.04] border border-[#ff5722]/30 shadow-lg shadow-[#ff5722]/10 backdrop-blur-md">
                <img
                  src={brandLogo}
                  onError={(e) => {
                    e.currentTarget.src = '/logo.png';
                  }}
                  alt="TheCodeSpark Logo"
                  className="h-7 w-auto object-contain filter drop-shadow shrink-0"
                />
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-tight block font-display">
                    TheCodeSpark Technologies{' '}
                    <span className="text-[#ff5722]">Private Limited</span>
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono tracking-wider uppercase block">
                    Lucknow On-Campus • In-Person Engineering
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-tight">
                Learn Coding from India&apos;s <br />
                <span className="text-[#ff5722]">renowned professors</span>
              </h1>

              {/* 3 Stat Boxes in a row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111116] border border-slate-200 dark:border-white/[0.08] space-y-1 shadow-md dark:shadow-lg"
                >
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono tabular-nums block">
                    1,000,000+
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-neutral-400 leading-snug font-mono">
                    Brilliant Students Taught in TheCodeSpark Technologies
                    Private Limited
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111116] border border-slate-200 dark:border-white/[0.08] space-y-1 shadow-md dark:shadow-lg"
                >
                  <span className="text-2xl sm:text-3xl font-black text-[#ff5722] font-mono tabular-nums block">
                    733K+
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-neutral-400 leading-snug font-mono">
                    YouTube Subscribers On Our Channel
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111116] border border-slate-200 dark:border-white/[0.08] space-y-1 shadow-md dark:shadow-lg"
                >
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono tabular-nums block">
                    20+
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-neutral-400 leading-snug font-mono">
                    Professional Instructors With Industry Level Experience
                  </p>
                </motion.div>
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    document
                      .getElementById('classroom-to-career')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3 rounded-lg bg-gradient-to-r from-[#ff5722] to-[#e63e00] hover:from-[#f4511e] hover:to-[#d83800] text-white text-xs font-bold shadow-lg shadow-[#ff5722]/30 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn More →</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative aspect-[4/5] bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
                  alt="Mentor Keynote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      In-Person On-Campus Labs
                    </h3>
                    <p className="text-xs text-neutral-300 font-mono">
                      Indrapuri / Gomti Nagar Lucknow Campus
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: "What Makes Us Different From Others"                      */}
      {/* ===================================================================== */}
      <section className="py-24 bg-white dark:bg-[#050507] border-b border-slate-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-2"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
              What Makes Us{' '}
              <span className="text-[#ff5722] italic font-serif">Different</span>{' '}
              From Others
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
              Learn in a focused, distraction-free expert learning environment
              with expert mentors guiding you at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Connected Numbers (01 / 02 / 03) */}
            <div className="lg:col-span-5 space-y-6 relative">
              <div className="absolute left-9 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#ff5722] via-[#ff5722]/40 to-slate-200 dark:to-neutral-800" />

              {/* 01: Learn By Building */}
              <motion.div
                whileHover={{ x: 4 }}
                onClick={() => setActiveDiffStep(0)}
                className={`flex items-start gap-5 cursor-pointer p-3.5 rounded-2xl transition-all ${
                  activeDiffStep === 0
                    ? 'bg-slate-100 dark:bg-white/[0.05] shadow-sm'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black font-mono text-2xl shrink-0 z-10 transition-colors ${
                    activeDiffStep === 0
                      ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30'
                      : 'bg-slate-200 dark:bg-[#16161c] text-slate-600 dark:text-neutral-400'
                  }`}
                >
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Learn By Building
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    No boring lectures, build 10+ real-world projects with
                    hands-on learning from day one.
                  </p>
                </div>
              </motion.div>

              {/* 02: Strong Community Backing */}
              <motion.div
                whileHover={{ x: 4 }}
                onClick={() => setActiveDiffStep(1)}
                className={`flex items-start gap-5 cursor-pointer p-3.5 rounded-2xl transition-all ${
                  activeDiffStep === 1
                    ? 'bg-slate-100 dark:bg-white/[0.05] shadow-sm'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black font-mono text-2xl shrink-0 z-10 transition-colors ${
                    activeDiffStep === 1
                      ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30'
                      : 'bg-slate-200 dark:bg-[#16161c] text-slate-600 dark:text-neutral-400'
                  }`}
                >
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Strong Community Backing
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    Be part of 25,000+ active learners, peer coding, group
                    learning &amp; real growth culture.
                  </p>
                </div>
              </motion.div>

              {/* 03: Job-Focused Learning */}
              <motion.div
                whileHover={{ x: 4 }}
                onClick={() => setActiveDiffStep(2)}
                className={`flex items-start gap-5 cursor-pointer p-3.5 rounded-2xl transition-all ${
                  activeDiffStep === 2
                    ? 'bg-slate-100 dark:bg-white/[0.05] shadow-sm'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black font-mono text-2xl shrink-0 z-10 transition-colors ${
                    activeDiffStep === 2
                      ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30'
                      : 'bg-slate-200 dark:bg-[#16161c] text-slate-600 dark:text-neutral-400'
                  }`}
                >
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Job-Focused Learning
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    Everything you learn is aligned to real interviews, real
                    skills, real hiring needs.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Interactive Showcase Box */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {activeDiffStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 p-3 bg-slate-100 dark:bg-[#0d0d12] shadow-xl dark:shadow-2xl"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                        alt="Learn By Building"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5">
                        <div className="flex items-center justify-between w-full text-xs font-mono text-white">
                          <span className="font-bold text-white">
                            25,000+ Enrolled Students
                          </span>
                          <span>•</span>
                          <span>90 Days Structured Program</span>
                          <span>•</span>
                          <span className="text-emerald-400 font-bold">
                            100+ Placements
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeDiffStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 p-3 bg-slate-100 dark:bg-[#0d0d12] shadow-xl dark:shadow-2xl"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80"
                        alt="TheCodeSpark Community"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-5">
                        <div>
                          <h4 className="text-base font-bold text-white font-display">
                            TheCodeSpark Technologies Private Limited Community
                            Culture
                          </h4>
                          <p className="text-xs text-neutral-300 font-mono">
                            Keep Learning After Hours With Peer Discussions
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeDiffStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 p-3 bg-slate-100 dark:bg-[#0d0d12] shadow-xl dark:shadow-2xl"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
                        alt="Job Focused Learning"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-5">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-xs font-mono text-emerald-400 font-bold">
                            Kushagra Patidar • Placed at Amazon
                          </span>
                          <span className="text-xs font-mono text-white">
                            ₹47 LPA
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3: "Be The Part Of TheCodeSpark Community" (`00:00 – 00:05`)  */}
      {/* Fiery Orange Diagonal Beam Backdrop + Sliding Tilted Polaroid Parade  */}
      {/* ===================================================================== */}
      <section className="relative py-28 sm:py-36 overflow-hidden text-white bg-[#d93608]">
        {/* Animated Fiery Diagonal Sheen Beams matching 00:00 - 00:05 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#be2302] via-[#ef4a13] to-[#ff6b2c]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: ['-12%', '12%', '-12%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-y-16 -inset-x-1/4 pointer-events-none opacity-45"
          style={{
            background:
              'repeating-linear-gradient(125deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 140px, rgba(255,190,140,0.28) 210px, rgba(255,255,255,0) 290px)'
          }}
        />

        {/* Centered Headline Behind Sliding Polaroids (Exact 00:01 - 00:05 Composition) */}
        <div className="relative min-h-[380px] sm:min-h-[430px] flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3 pointer-events-none select-none">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.15] drop-shadow-[0_4px_20px_rgba(0,0,0,0.22)]">
              Be The Part Of <br />
              <span className="italic font-serif font-semibold">
                TheCodeSpark Technologies Private Limited Community
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto">
              Campus life in Lucknow: Hackathons, public speaking, code battles
              &amp; late-night project defense.
            </p>
          </div>

          {/* Continuous Sliding Horizontal Polaroid Filmstrip Gliding Over Title (Pauses on Hover) */}
          <div className="group/marquee absolute inset-0 z-20 flex items-center overflow-hidden">
            <div className="flex w-max items-center gap-6 sm:gap-10 py-8 animate-[communitySlide_28s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
              {[...polaroids, ...polaroids].map((p, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  style={{ rotate: `${p.rotate}deg` }}
                  className="w-[220px] sm:w-[270px] shrink-0 bg-white text-slate-900 p-3 pb-4 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.38)] cursor-pointer transition-shadow"
                >
                  <div className="aspect-[4/3.6] rounded-xl overflow-hidden bg-neutral-200">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="pt-3 text-center px-1">
                    <p className="text-xs sm:text-sm font-bold font-display text-slate-900 line-clamp-1 leading-tight">
                      {p.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keyframe style tag strictly for horizontal sliding Polaroid conveyor */}
      <style>{`
        @keyframes communitySlide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ===================================================================== */}
      {/* SECTION 4: "Code Studio To Career Program" (`00:06`)                  */}
      {/* Left-Aligned Header, Pill Tabs & 3 Clean Dark Photo Cards             */}
      {/* ===================================================================== */}
      <section
        id="classroom-to-career"
        className="py-24 bg-white dark:bg-[#050507] border-b border-slate-200 dark:border-white/[0.06]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              TheCodeSpark Technologies Private Limited{' '}
              <span className="text-[#ff5722]">Code Studio</span> To Career
              Program
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
              From our code studio to career success, build real skills that get
              you hired.
            </p>
          </div>

          {/* Left-Aligned Filter Pills matching 00:06 */}
          <div className="flex flex-wrap items-center gap-2.5">
            {[
              { id: 'all', label: 'All' },
              { id: 'web', label: 'Web Development' },
              { id: 'python', label: 'Python with Data Science' },
              { id: 'java', label: 'Java & DSA' },
              {
                id: 'ignite',
                label: 'TheCodeSpark Technologies Private Limited IGNITE'
              }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCourseCategory(tab.id as any)}
                className={`relative px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCourseCategory === tab.id
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-white bg-slate-100 dark:bg-[#111116] border border-slate-200 dark:border-white/10'
                }`}
              >
                {activeCourseCategory === tab.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#ff5722] rounded-full shadow-lg shadow-[#ff5722]/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {filteredClassroomCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl p-5 bg-slate-50 dark:bg-[#0e0e12] border border-slate-200 dark:border-white/[0.08] hover:border-[#ff5722]/45 transition-all flex flex-col justify-between space-y-5 shadow-lg dark:shadow-2xl group"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-200 dark:bg-neutral-900 relative">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono text-[#ff5722] font-bold border border-white/10">
                      {course.badge}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-[#ff5722] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-2">
                  <button
                    onClick={onApplyOffline}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff5722] to-[#e63e00] hover:from-[#f4511e] hover:to-[#d83800] text-white text-xs font-bold shadow-md shadow-[#ff5722]/25 cursor-pointer transition-all"
                  >
                    Explore More →
                  </button>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400">
                    {course.mentors}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5: "Solve Real time doubts" (`00:06 – 00:07`)                 */}
      {/* Warm Illuminated Mentor Card with Glowing Orange CTA                  */}
      {/* ===================================================================== */}
      <section className="py-20 bg-slate-50 dark:bg-[#050507] border-b border-slate-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-gradient-to-r dark:from-[#120e0c] dark:via-[#0d0c10] dark:to-[#1d1106] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Photo */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-video bg-slate-200 dark:bg-neutral-900 border border-slate-200 dark:border-white/10">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
                alt="Mentor Coaching"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right content & 3 cards */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#ff5722] uppercase tracking-wider font-bold">
                  Learn Directly From The Experts
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                  Solve Real time doubts and Problems with Live challenges
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.07] space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">
                    Live Doubt Solving
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-neutral-400">
                    Solve Problems Instantly During Sessions
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.07] space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">
                    Live Coding Challenge
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-neutral-400">
                    Test Your Skills With Real-Time Challenges
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.07] space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">
                    Interactive Sessions
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-neutral-400">
                    Engage, Ask, And Learn Actively
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={onRequestCallback}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#ff5722] to-[#e63e00] hover:from-[#f4511e] hover:to-[#d83800] text-white text-xs font-bold shadow-lg shadow-[#ff5722]/25 cursor-pointer"
              >
                Learn More →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 6: MacBook Video Split Horizon (`00:07 – 00:09`)              */}
      {/* White Top Horizon seamlessly transitioning into Deep Black MacBook Base*/}
      {/* ===================================================================== */}
      <section className="relative pt-20 pb-20 bg-white text-slate-900 overflow-hidden">
        {/* Bottom Half Pitch-Black Band matching 00:08 horizon split */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[44%] bg-[#050507] pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              How Students Are Being Taught At{' '}
              <span className="text-[#ff5722] italic font-serif">
                TheCodeSpark Technologies Private Limited Code Studio
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Learn In A Focused, Distraction-Free Code Studio Environment With
              Expert Mentors Guiding You At Every Step.
            </p>
          </div>

          {/* Authentic Aluminum MacBook Pro Mockup Spanning the White -> Black Horizon */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl mx-auto"
          >
            {/* MacBook Lid Bezel */}
            <div className="mx-auto w-[92%] sm:w-[88%] rounded-t-[26px] p-2.5 sm:p-3.5 bg-[#121216] border border-neutral-700/80 shadow-2xl">
              <div className="rounded-xl overflow-hidden aspect-video bg-black relative group">
                <video
                  ref={videoRef}
                  src="/assets/aistudio/20261101-1004-44.1480787_b68d94d4.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                />

                {/* Centered Fiery Orange Play/Pause Circle Button matching 00:08 */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ff5722] hover:bg-[#e63e00] text-white flex items-center justify-center shadow-[0_0_32px_rgba(255,87,34,0.6)] opacity-90 group-hover:scale-110 transition-all cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  )}
                </button>

                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    className="p-2 rounded-full bg-black/65 hover:bg-black/85 text-white backdrop-blur-md cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white">
                  Live Expert Learning Session Recording • Lucknow Campus
                </div>
              </div>
            </div>

            {/* Metallic Aluminum MacBook Lower Lip with Centered Notch */}
            <div className="relative h-4 sm:h-5 w-full rounded-b-2xl bg-gradient-to-b from-[#d4d4d8] via-[#a1a1aa] to-[#71717a] shadow-[0_18px_36px_rgba(0,0,0,0.6)] flex justify-center">
              <div className="w-20 sm:w-28 h-1.5 sm:h-2 rounded-b-md bg-neutral-600/80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7: "Learn From Industry Level Experts" (`00:09 – 00:12`)      */}
      {/* 5 Tall Fiery-Orange Vertical Portrait Cards w/ Elevated Center Card    */}
      {/* ===================================================================== */}
      <section className="py-24 bg-slate-50 dark:bg-[#050507] border-b border-slate-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Learn From <span className="text-[#ff5722]">Industry Level</span>{' '}
              Experts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
              Learn directly from industry experts working on real-world
              products and technologies.
            </p>
          </div>

          {/* 5 Portrait Cards with Elevated Center Focal Card matching 00:10 - 00:12 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center pt-2">
            {visibleMentors.map((m, idx) => {
              const isCenter = idx === 2;
              return (
                <motion.div
                  key={`${mentorPage}-${m.name}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -10, scale: isCenter ? 1.07 : 1.03 }}
                  className={`relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#ff5e28] via-[#d93608] to-[#5e1402] border border-white/15 shadow-2xl cursor-pointer transition-all ${
                    isCenter
                      ? 'lg:scale-105 lg:z-20 aspect-[3/4.3] shadow-[0_24px_60px_rgba(255,87,34,0.35)]'
                      : 'aspect-[3/4.1] opacity-95 hover:opacity-100'
                  }`}
                >
                  {/* Top-Right Tiny Emblem Badge matching 00:10 */}
                  <div className="absolute top-3.5 right-3.5 z-20 w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>

                  {/* Full-Bleed Portrait */}
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />

                  {/* Deep Bottom Scrim + Bold Tracked Typography matching 00:10 */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 pb-5 px-3 bg-gradient-to-t from-black via-black/70 to-transparent text-center z-10">
                    <h4 className="text-sm sm:text-base font-extrabold text-white font-display uppercase tracking-tight leading-none">
                      {m.name}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-300 block tracking-[0.28em] mt-1.5 font-semibold">
                      {m.role}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Numbered Circular Carousel Buttons `1` `2` matching 00:11 */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setMentorPage(0)}
              className={`w-8 h-8 rounded-full font-mono text-xs font-bold transition-all cursor-pointer border ${
                mentorPage === 0
                  ? 'bg-[#ff5722] text-white border-[#ff5722] shadow-lg shadow-[#ff5722]/35'
                  : 'bg-white dark:bg-transparent text-slate-700 dark:text-neutral-400 border-slate-300 dark:border-white/25 hover:border-[#ff5722]'
              }`}
              aria-label="Previous Page"
            >
              1
            </button>
            <button
              onClick={() => setMentorPage(1)}
              className={`w-8 h-8 rounded-full font-mono text-xs font-bold transition-all cursor-pointer border ${
                mentorPage === 1
                  ? 'bg-[#ff5722] text-white border-[#ff5722] shadow-lg shadow-[#ff5722]/35'
                  : 'bg-white dark:bg-transparent text-slate-700 dark:text-neutral-400 border-slate-300 dark:border-white/25 hover:border-[#ff5722]'
              }`}
              aria-label="Next Page"
            >
              2
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 8: "Get Yourself Placed In 8 Months!" (`00:13`)               */}
      {/* Left CTA + Right 3x2 Placed Alumni Showcase with PLACED Backdrop      */}
      {/* ===================================================================== */}
      <section className="py-24 bg-white dark:bg-[#050507] border-b border-slate-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
                Get Yourself <br />
                <span className="text-[#ff5722]">Placed In 8 Months!</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                Learn in a focused, distraction-free expert learning
                environment with expert mentors guiding you at every step.
              </p>
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onApplyOffline}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#ff5722] to-[#e63e00] hover:from-[#f4511e] hover:to-[#d83800] text-white text-xs font-bold transition-all shadow-lg shadow-[#ff5722]/25 cursor-pointer"
                >
                  Learn More →
                </motion.button>
              </div>
            </div>

            {/* 3x2 Placed Alumni Grid matching 00:13 */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {placedStudents.map((p, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#0e0e13] border border-slate-200 dark:border-white/[0.08] hover:border-[#ff5722]/40 transition-all group pt-4 px-3 pb-3.5 text-center shadow-md"
                >
                  {/* Large Background Watermark Text `PLACED` matching 00:13 */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute top-2 inset-x-0 text-center text-2xl font-black font-display tracking-widest text-slate-900/[0.05] dark:text-white/[0.05]"
                  >
                    PLACED
                  </span>

                  <div className="relative z-10 aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-neutral-900 mx-auto w-20 h-20 mb-3 shadow-md">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="relative z-10 space-y-0.5">
                    <span className="text-sm font-black text-slate-900 dark:text-white font-display block tracking-tight">
                      {p.logoText}
                    </span>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-neutral-300 font-display block uppercase">
                      {p.name}
                    </span>
                    <span className="text-[10px] font-mono tabular-nums text-emerald-600 dark:text-emerald-400 font-bold block">
                      {p.lpa}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 9: "Your Career Journey" (`00:14 – 00:16`)                    */}
      {/* Clean White Editorial Rows w/ Oversized Numbers & Hairline Dividers   */}
      {/* ===================================================================== */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
              Your <span className="italic font-serif text-[#ff5722]">Career</span>{' '}
              Journey At TheCodeSpark Technologies Private Limited
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              From Beginner To Job-Ready, We Guide Your Complete Journey With
              Skills, Projects, And Career Support.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {journeySteps.map((step, idx) => {
              const isHighlighted = activeJourneyIdx === idx;
              return (
                <motion.div
                  key={step.num}
                  onMouseEnter={() => setActiveJourneyIdx(idx)}
                  onClick={() => setActiveJourneyIdx(idx)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4 }}
                  className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center cursor-pointer group transition-colors"
                >
                  {/* Left: Oversized Display Step Number */}
                  <div className="md:col-span-2">
                    <span
                      className={`text-4xl sm:text-6xl font-light font-mono tabular-nums transition-colors duration-300 ${
                        step.isRed || isHighlighted
                          ? 'text-[#ff5722]'
                          : 'text-slate-300 group-hover:text-slate-500'
                      }`}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Center: Horizontal Rounded Image */}
                  <div className="md:col-span-4">
                    <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 shadow-md group-hover:shadow-xl transition-all duration-300">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Right: Title & Narrative Copy */}
                  <div className="md:col-span-6 space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-display group-hover:text-[#ff5722] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 10: "Transform Your Learning Journey" (`00:17`)               */}
      {/* Full-Bleed Blurred Dark Campus Photo + Centered Fiery CTA             */}
      {/* ===================================================================== */}
      <section className="relative py-28 sm:py-36 bg-[#060609] text-white text-center overflow-hidden">
        {/* Background Atmospheric Classroom Image with Dark Vignette & Blur */}
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25 blur-sm scale-105 pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-[#050507] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight text-balance">
            Transform Your{' '}
            <span className="text-[#ff5722] italic font-serif">Learning</span>{' '}
            Journey <br className="hidden sm:inline" />
            Into A Career Breakthrough With TheCodeSpark Technologies Private
            Limited
          </h2>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onApplyOffline}
              className="px-7 py-3 rounded-lg bg-[#ff5722] hover:bg-[#e63e00] text-white text-xs font-bold transition-all shadow-xl shadow-[#ff5722]/35 cursor-pointer"
            >
              Learn More →
            </motion.button>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 11: "Apply For Placement Assistance" (`00:18 – 00:19`)        */}
      {/* ===================================================================== */}
      <section className="py-24 bg-white dark:bg-[#050507] border-t border-slate-200 dark:border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              Apply For{' '}
              <span className="text-[#ff5722]">Placement Assistance</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
              Register for the upcoming On-Campus cohort at our Lucknow campus.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#101014] border border-emerald-500/40 text-center space-y-3 shadow-xl dark:shadow-2xl">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Application Received!
              </h3>
              <p className="text-xs text-slate-600 dark:text-neutral-300">
                Thank you,{' '}
                <strong className="text-slate-900 dark:text-white">
                  {name}
                </strong>
                . Our campus admissions team will call you at{' '}
                <span className="font-mono text-[#ff5722]">{phone}</span> to
                schedule your in-person campus visit and demo class.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#101014] border border-slate-200 dark:border-white/10 space-y-4 shadow-xl dark:shadow-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-neutral-300 block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Full Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#18181f] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-neutral-300 block mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#18181f] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722] font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-neutral-300 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#18181f] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-neutral-300 block mb-1.5">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City (e.g. Lucknow, Kanpur, Bhopal)"
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#18181f] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-neutral-300 block mb-1.5">
                  Notes / Doubts
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Have any questions or doubts? Share them here..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#18181f] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#ff5722] to-[#e63e00] hover:from-[#f4511e] hover:to-[#d83800] text-white text-xs font-bold transition-all shadow-lg shadow-[#ff5722]/30 cursor-pointer"
              >
                Submit Application →
              </button>

              <div className="pt-2 text-center text-xs text-slate-500 dark:text-neutral-400 font-mono">
                <span>Campus Helpline: </span>
                <a
                  href="tel:+917398839769"
                  className="text-slate-900 dark:text-white hover:text-[#ff5722] font-bold"
                >
                  +91 7398839769
                </a>
                <span className="mx-1.5 text-slate-400 dark:text-neutral-600">
                  /
                </span>
                <a
                  href="tel:+919548248925"
                  className="text-slate-900 dark:text-white hover:text-[#ff5722] font-bold"
                >
                  +91 9548248925
                </a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* Floating Bottom Sticky Bar                                            */}
      {/* ===================================================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="p-1.5 rounded-2xl bg-white/95 dark:bg-[#141419]/95 border border-slate-200 dark:border-white/15 backdrop-blur-xl shadow-2xl shadow-slate-900/15 dark:shadow-black/80 flex items-center gap-2">
          <button
            onClick={onRequestCallback}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            Request Callback
          </button>

          <button
            onClick={onApplyOffline}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#ff5722] to-[#f4511e] hover:from-[#f4511e] hover:to-[#e64a19] text-white text-xs font-bold shadow-lg shadow-[#ff5722]/30 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            Visit Lucknow Campus →
          </button>
        </div>
      </div>
    </div>
  );
};
