import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Award, 
  Clock, 
  BookOpen, 
  Laptop, 
  Calendar,
  Send,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Code2,
  ExternalLink
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

  // Filter tab for "Classroom To Career Program"
  const [activeCourseCategory, setActiveCourseCategory] = useState<'all' | 'web' | 'python' | 'java' | 'ignite'>('all');

  // Mentor carousel state
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
    { title: "Leadership & Public Speaking", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80", rotate: -3 },
    { title: "Debug Battles & Competitions", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80", rotate: 2 },
    { title: "Inertia & Community Culture", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80", rotate: -2 },
    { title: "Career & Placement Activities", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80", rotate: 3 },
    { title: "Tech Masterclasses", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=80", rotate: -2 },
    { title: "Real Project & Product Building", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=80", rotate: 1 },
  ];

  const classroomCourses = [
    {
      id: "web-dev",
      category: "web",
      title: "Full Stack Web Development with Gen AI",
      badge: "VS CODE • REACT 19",
      desc: "Learn in a focused, distraction-free classroom environment with expert mentors guiding every line of code.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
      mentors: "Ali, Harsh & Sarthak"
    },
    {
      id: "data-science",
      category: "python",
      title: "Python Data Science with Gen AI",
      badge: "NUMPY • PYTORCH • LLM",
      desc: "Master mathematical modeling, data pipelines, deep neural architectures, and autonomous AI agents.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
      mentors: "Devendra & Data Specialists"
    },
    {
      id: "campus-placement",
      category: "java",
      title: "Campus Placement Track",
      badge: "DSA IN JAVA • APTITUDE",
      desc: "Crack top product interviews with rigorous logic building, LeetCode 450 question patterns, and mock interviews.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
      mentors: "Ankur & Placement Cell"
    }
  ];

  const filteredClassroomCourses = classroomCourses.filter(c => {
    if (activeCourseCategory === 'all') return true;
    if (activeCourseCategory === 'web') return c.category === 'web';
    if (activeCourseCategory === 'python') return c.category === 'python';
    if (activeCourseCategory === 'java') return c.category === 'java';
    return true;
  });

  const allMentors = [
    { name: "ALI ANSARI", role: "THECODESPARK", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80" },
    { name: "MUSKAN RAI", role: "THECODESPARK", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80" },
    { name: "HARSH SHARMA", role: "THECODESPARK", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80" },
    { name: "SARTHAK SHARMA", role: "THECODESPARK", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80" },
    { name: "ANKUR PRAJAPATI", role: "THECODESPARK", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80" },
    { name: "DEVENDRA DHOTE", role: "THECODESPARK", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80" }
  ];

  const visibleMentors = mentorPage === 0 ? allMentors.slice(0, 5) : allMentors.slice(1, 6);

  const placedStudents = [
    { name: "KUSHAGRA PATIDAR", comp: "amazon", logoText: "amazon", lpa: "47 LPA", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" },
    { name: "SHIVAM MISHRA", comp: "Razorpay", logoText: "Razorpay", lpa: "24 LPA", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80" },
    { name: "KRITIKA B DAS", comp: "accenture", logoText: "accenture", lpa: "16 LPA", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" },
    { name: "RISHITA JAIN", comp: "cisco", logoText: "CISCO", lpa: "17+ LPA", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80" },
    { name: "MANSI SAHU", comp: "airtel", logoText: "airtel", lpa: "18+ LPA", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80" },
    { name: "SHRUTI SARAWAGI", comp: "synchrony", logoText: "synchrony", lpa: "12+ LPA", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80" }
  ];

  const journeySteps = [
    {
      num: "01",
      title: "Beginner Foundation",
      desc: "Start From Absolute Zero And Build A Strong Foundation In Programming And Problem-Solving. No Prior Experience Needed. Just Consistency And Curiosity. We Turn Confusion Into Clarity From Day One.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
      isRed: true
    },
    {
      num: "02",
      title: "Industry-Focused Training",
      desc: "Structured, Hands-On Training Designed To Make You Industry-Ready. Learn By Building, Not Just Watching. Real Tasks, Real Challenges. Every Concept Is Backed With Practical Implementation.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
      isRed: false
    },
    {
      num: "03",
      title: "Learn From Industry Experts",
      desc: "Learn Directly From Professionals Working At Top Tech Companies. Get Real-World Insights, Career Guidance, And Advanced Strategies.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
      isRed: true
    },
    {
      num: "04",
      title: "Build Real-World Products",
      desc: "Build Real-World, Production-Level Projects, Not Basic Clones. Focus On Scalability, Performance, And Problem-Solving. Create A Portfolio That Stands Out In Interviews.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
      isRed: false
    },
    {
      num: "05",
      title: "Real Industrial Experience",
      desc: "Work In An Environment That Simulates Real Tech Companies. Follow Professional Workflows, Tools, And Team Collaboration. Experience How Real Products Are Built And Deployed.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
      isRed: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-[#f3f4f6] pb-28 relative overflow-hidden">
      {/* SECTION 1: HERO (Video 7: 00:00) */}
      <section className="relative pt-16 pb-20 border-b border-white/5 bg-[#08080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.04] border border-[#ff5722]/30 shadow-lg shadow-[#ff5722]/10 backdrop-blur-md">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark Logo"
                  className="h-7 w-auto object-contain filter drop-shadow shrink-0"
                />
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-black text-white tracking-tight block font-display">
                    TheCodeSpark Technologies <span className="text-[#ff5722]">Private Limited</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase block">
                    Lucknow On-Campus • In-Person Engineering
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight leading-tight">
                Learn Coding from India&apos;s <br />
                <span className="text-[#ff5722]">renowned professors</span>
              </h1>

              {/* 3 Stat Boxes in a row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="p-5 rounded-2xl bg-[#14141d] border border-white/5 space-y-1 shadow-lg"
                >
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">1,000,000+</span>
                  <p className="text-[11px] text-neutral-400 leading-snug font-mono">
                    Brilliant Students Taught in TheCodeSpark Technologies Private Limited
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="p-5 rounded-2xl bg-[#14141d] border border-white/5 space-y-1 shadow-lg"
                >
                  <span className="text-2xl sm:text-3xl font-black text-[#ff5722] font-mono block">733K+</span>
                  <p className="text-[11px] text-neutral-400 leading-snug font-mono">
                    YouTube Subscribers On Our Channel
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="p-5 rounded-2xl bg-[#14141d] border border-white/5 space-y-1 shadow-lg"
                >
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">20+</span>
                  <p className="text-[11px] text-neutral-400 leading-snug font-mono">
                    Professional Instructors With Industry Level Experience
                  </p>
                </motion.div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    document.getElementById('classroom-to-career')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff5722] to-[#f4511e] hover:from-[#f4511e] hover:to-[#e64a19] text-white text-xs font-bold shadow-xl shadow-[#ff5722]/30 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn More →</span>
                </button>
              </div>
            </motion.div>

            {/* Right Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl relative aspect-[4/5] bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
                  alt="Mentor Keynote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">In-Person On-Campus Labs</h3>
                    <p className="text-xs text-neutral-300 font-mono">Indrapuri / Gomti Nagar Lucknow Campus</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: "What Makes Us Different From Others" (Video 7: 00:01 - 00:05) */}
      <section className="py-24 bg-[#07070a] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              What Makes Us <span className="text-[#ff5722] italic font-serif">Different</span> From Others
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Learn in a focused, distraction-free expert learning environment with expert mentors guiding you at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Connected Numbers (01 / 02 / 03) */}
            <div className="lg:col-span-5 space-y-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#ff5722] via-[#ff5722]/40 to-neutral-800" />

              {/* 01: Learn By Building */}
              <div 
                onClick={() => setActiveDiffStep(0)}
                className={`flex items-start gap-5 cursor-pointer p-3 rounded-2xl transition-all ${activeDiffStep === 0 ? 'bg-white/5' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black font-mono text-2xl shrink-0 z-10 ${activeDiffStep === 0 ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30' : 'bg-[#181820] text-neutral-400'}`}>
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-display">Learn By Building</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    No boring lectures, build 10+ real-world projects with hands-on learning from day one.
                  </p>
                </div>
              </div>

              {/* 02: Strong Community Backing */}
              <div 
                onClick={() => setActiveDiffStep(1)}
                className={`flex items-start gap-5 cursor-pointer p-3 rounded-2xl transition-all ${activeDiffStep === 1 ? 'bg-white/5' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black font-mono text-2xl shrink-0 z-10 ${activeDiffStep === 1 ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30' : 'bg-[#181820] text-neutral-400'}`}>
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-display">Strong Community Backing</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Be part of 25,000+ active learners, peer coding, group learning & real growth culture.
                  </p>
                </div>
              </div>

              {/* 03: Job-Focused Learning */}
              <div 
                onClick={() => setActiveDiffStep(2)}
                className={`flex items-start gap-5 cursor-pointer p-3 rounded-2xl transition-all ${activeDiffStep === 2 ? 'bg-white/5' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black font-mono text-2xl shrink-0 z-10 ${activeDiffStep === 2 ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30' : 'bg-[#181820] text-neutral-400'}`}>
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-display">Job-Focused Learning</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Everything you learn is aligned to real interviews, real skills, real hiring needs.
                  </p>
                </div>
              </div>
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
                    className="rounded-3xl overflow-hidden glass-card border border-white/10 p-3 bg-[#0d0d12] shadow-2xl"
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
                          <span className="font-bold text-white">25,000+ Enrolled Students</span>
                          <span>•</span>
                          <span>90 Days Structured Program</span>
                          <span>•</span>
                          <span className="text-emerald-400 font-bold">100+ Placements</span>
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
                    className="rounded-3xl overflow-hidden glass-card border border-white/10 p-3 bg-[#0d0d12] shadow-2xl"
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
                          <h4 className="text-base font-bold text-white font-display">TheCodeSpark Community Culture</h4>
                          <p className="text-xs text-neutral-300 font-mono">Keep Learning After Hours With Peer Discussions</p>
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
                    className="rounded-3xl overflow-hidden glass-card border border-white/10 p-3 bg-[#0d0d12] shadow-2xl"
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
                          <span className="text-xs font-mono text-emerald-400 font-bold">Kushagra Patidar • Placed at Amazon</span>
                          <span className="text-xs font-mono text-white">₹47 LPA</span>
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

      {/* SECTION 3: "Be The Part Of TheCodeSpark Community" Polaroid Cards (Video 7: 00:06 - 00:19) */}
      <section className="py-24 bg-gradient-to-b from-[#bd350d] via-[#a82d09] to-[#7f1d00] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
              Be The Part Of <span className="italic font-serif">TheCodeSpark Technologies Private Limited Community</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              Campus life in Lucknow: Hackathons, public speaking, code battles & late-night project defense.
            </p>
          </div>

          {/* Polaroid Cards Grid with Motion */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 pt-4">
            {polaroids.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ rotate: `${p.rotate}deg` }}
                className="bg-white text-slate-900 p-3 rounded-2xl shadow-2xl cursor-pointer"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-neutral-200">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-2.5 text-center">
                  <p className="text-[11px] font-bold font-display line-clamp-2 leading-tight">
                    {p.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: "TheCodeSpark Classroom To Career Program" (Video 7: 00:20 - 00:23) */}
      <section id="classroom-to-career" className="py-24 bg-[#07070a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              TheCodeSpark Technologies Private Limited <span className="text-[#ff5722]">Code Studio</span> To Career Program
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              From our code studio to career success, build real skills that get you hired.
            </p>
          </div>

          {/* Filter Pills with Motion */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'web', label: 'Web Development' },
              { id: 'python', label: 'Python with Data Science' },
              { id: 'java', label: 'Java & DSA' },
              { id: 'ignite', label: 'TheCodeSpark IGNITE' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCourseCategory(tab.id as any)}
                className={`relative px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCourseCategory === tab.id
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white bg-[#121218] border border-white/5'
                }`}
              >
                {activeCourseCategory === tab.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#ff5722] rounded-full shadow-lg shadow-[#ff5722]/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {filteredClassroomCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-3xl p-6 bg-[#0e0e15] border border-white/10 hover:border-[#ff5722]/40 transition-all flex flex-col justify-between space-y-6 shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900 relative">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono text-[#ff5722] font-bold border border-white/10">
                      {course.badge}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-[#ff5722] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400">{course.mentors}</span>
                  <button
                    onClick={onApplyOffline}
                    className="px-4 py-2 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Explore More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: "Solve Real time doubts and Problems with Live challenges" (Video 7: 00:24 - 00:25) */}
      <section className="py-20 bg-[#09090e] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 bg-gradient-to-r from-[#14121a] via-[#100e16] to-[#1c0f08] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-video bg-neutral-900">
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
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Solve Real time doubts and Problems with Live challenges
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <h4 className="text-xs font-bold text-white font-display">Live Doubt Solving</h4>
                  <p className="text-[11px] text-neutral-400">Solve Problems Instantly During Sessions</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <h4 className="text-xs font-bold text-white font-display">Live Coding Challenge</h4>
                  <p className="text-[11px] text-neutral-400">Test Your Skills With Real-Time Challenges</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <h4 className="text-xs font-bold text-white font-display">Interactive Sessions</h4>
                  <p className="text-[11px] text-neutral-400">Engage, Ask, And Learn Actively</p>
                </div>
              </div>

              <button
                onClick={onRequestCallback}
                className="px-6 py-2.5 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold shadow-md cursor-pointer"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: "How Students Are Being Taught At TheCodeSpark Classroom" MacBook Video (Video 7: 00:26 - 00:28) */}
      <section className="py-20 bg-[#07070a] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              How Students Are Being Taught At <span className="text-[#ff5722]">TheCodeSpark Technologies Private Limited Code Studio</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Learn In A Focused, Distraction-Free Code Studio Environment With Expert Mentors Guiding You At Every Step.
            </p>
          </div>

          {/* MacBook Pro Mockup Frame */}
          <div className="max-w-4xl mx-auto rounded-3xl p-3 sm:p-4 bg-[#23232a] border border-white/10 shadow-2xl">
            <div className="rounded-2xl overflow-hidden aspect-video bg-black relative">
              <video
                ref={videoRef}
                src="/assets/aistudio/20261101-1004-44.1480787_b68d94d4.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />

              <div className="absolute top-3 right-3 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white">
                Live Expert Learning Session Recording • Lucknow Campus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: "Learn From Industry Level Experts" Carousel (Video 7: 00:29 - 00:36) */}
      <section className="py-24 bg-[#07070a] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Learn From <span className="text-[#ff5722]">Industry Level</span> Experts
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Learn directly from industry experts working on real-world products and technologies.
            </p>
          </div>

          {/* Mentors Cards Grid with Smooth Motion */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {visibleMentors.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="rounded-3xl p-3 bg-gradient-to-b from-[#bd350d] to-[#7f1d00] border border-white/10 text-center space-y-3 shadow-xl"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pb-1">
                  <h4 className="text-xs sm:text-sm font-extrabold text-white font-display uppercase tracking-tight">{m.name}</h4>
                  <span className="text-[10px] font-mono text-white/80 block font-semibold">{m.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Dots & Controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setMentorPage(0)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${mentorPage === 0 ? 'bg-[#ff5722] w-6' : 'bg-white/20'}`}
              aria-label="Previous Page"
            />
            <button
              onClick={() => setMentorPage(1)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${mentorPage === 1 ? 'bg-[#ff5722] w-6' : 'bg-white/20'}`}
              aria-label="Next Page"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: "Get Yourself Placed In 8 Months!" (Video 7: 00:37 - 00:39) */}
      <section className="py-24 bg-[#09090e] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
                Get Yourself <br />
                <span className="text-[#ff5722]">Placed In 8 Months!</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Learn in a focused, distraction-free expert learning environment with expert mentors guiding you at every step.
              </p>
              <div className="pt-2">
                <button
                  onClick={onApplyOffline}
                  className="px-6 py-3 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Learn More →
                </button>
              </div>
            </div>

            {/* Placed Students Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {placedStudents.map((p, idx) => (
                <div key={idx} className="rounded-2xl p-4 bg-[#12121a] border border-white/5 text-center space-y-2 group hover:border-[#ff5722]/30 transition-all">
                  <div className="aspect-square rounded-xl overflow-hidden bg-neutral-900 mx-auto w-16 h-16">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-display block uppercase">{p.name}</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block">{p.lpa}</span>
                    <span className="text-[10px] font-mono text-neutral-400 block">{p.logoText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: "Your Career Journey At TheCodeSpark" White Section (Video 7: 00:40 - 00:44) */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
              Your <span className="italic font-serif text-[#ff5722]">Career</span> Journey At TheCodeSpark Technologies Private Limited
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From Beginner To Job-Ready, We Guide Your Complete Journey With Skills, Projects, And Career Support.
            </p>
          </div>

          <div className="space-y-6">
            {journeySteps.map((step) => (
              <div 
                key={step.num}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-8 hover:shadow-md transition-shadow"
              >
                <span className={`text-4xl sm:text-5xl font-black font-mono shrink-0 ${step.isRed ? 'text-[#ff5722]' : 'text-slate-400'}`}>
                  {step.num}
                </span>

                <div className="w-full sm:w-48 aspect-video rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1.5 flex-1">
                  <h4 className="text-lg font-bold text-slate-900 font-display">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: "Transform Your Learning Journey" Banner (Video 7: 00:45) */}
      <section className="py-20 bg-[#07070a] border-t border-white/5 text-center space-y-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Transform Your <span className="text-[#ff5722]">Learning</span> Journey <br />
            Into A Career Breakthrough With TheCodeSpark Technologies Private Limited
          </h2>
          <div className="pt-2">
            <button
              onClick={onApplyOffline}
              className="px-8 py-3 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 11: "Apply For Placement Assistance" Form (Video 7: 00:46 - 00:48) */}
      <section className="py-24 bg-[#09090e] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Apply For <span className="text-[#ff5722]">Placement Assistance</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Register for the upcoming On-Campus cohort at our Lucknow campus.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-3xl bg-[#0e0e15] border border-emerald-500/40 text-center space-y-3 shadow-2xl">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white font-display">Application Received!</h3>
              <p className="text-xs text-neutral-300">
                Thank you, <strong className="text-white">{name}</strong>. Our campus admissions team will call you at <span className="font-mono text-[#ff5722]">{phone}</span> to schedule your in-person campus visit and demo class.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="p-8 rounded-3xl bg-[#0e0e15] border border-white/10 space-y-4 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Full Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#14141f] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#14141f] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff5722] font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#14141f] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City (e.g. Lucknow, Kanpur, Bhopal)"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#14141f] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1">Notes / Doubts</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Have any questions or doubts? Share them here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#14141f] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff5722]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-bold transition-all shadow-lg shadow-[#ff5722]/30 cursor-pointer"
              >
                Submit Application →
              </button>

              <div className="pt-2 text-center text-xs text-neutral-400 font-mono">
                <span>Campus Helpline: </span>
                <a href="tel:+917398839769" className="text-white hover:text-[#ff5722] font-bold">+91 7398839769</a>
                <span className="mx-1.5 text-neutral-600">/</span>
                <a href="tel:+919548248925" className="text-white hover:text-[#ff5722] font-bold">+91 9548248925</a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Floating Bottom Sticky Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="p-1.5 rounded-2xl bg-[#141419]/95 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center gap-2">
          <button
            onClick={onRequestCallback}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
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
