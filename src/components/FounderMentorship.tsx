import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, MessageSquare, CheckCircle2, Mic, Sparkles, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import brandLogo from '../assets/logo.png';
import rohitPhoto from '../assets/Rohit.png';

interface FounderMentorshipProps {
  onRequestCallback: () => void;
  onExploreCourses: () => void;
}

interface ChatTabContent {
  id: string;
  label: string;
  heading: string;
  paragraph: string;
  messages: {
    sender: string;
    senderColor: string;
    text: string;
  }[];
}

const TABS_DATA: ChatTabContent[] = [
  {
    id: 'details',
    label: 'The details',
    heading: 'Get the details right.',
    paragraph: 'From absolute beginners to engineering leads, TheCodeSpark Technologies Private Limited is built on direct founder mentorship by Mr. Rohit Kashyap. We focus on production code, live system design, and placement roadmaps that actually matter in technical interviews.',
    messages: [
      {
        sender: 'Aryan (Student)',
        senderColor: 'text-[#9c27b0]',
        text: 'Rohit Sir, can you guide me on which cohort to start with on Monday?'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'Tuesday is better. I want to start by reviewing your JavaScript fundamentals and DSA logic first.'
      },
      {
        sender: 'Aryan (Student)',
        senderColor: 'text-[#9c27b0]',
        text: 'Great, I will add the live masterclass to the calendar.'
      },
      {
        sender: 'Pooja (Placed Alum)',
        senderColor: 'text-[#e91e63]',
        text: 'Make sure the PostgreSQL & Next.js 15 dashboard is ready.'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'On it! Every student deploys live to production before final defense.'
      },
      {
        sender: 'Stephen (Student)',
        senderColor: 'text-[#2e7d32]',
        text: 'Rohit Sir, how is the campus placement review going?'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: '50+ tech partners lined up for hiring drives. Build your portfolio with discipline!'
      },
      {
        sender: 'Nathalie (Student)',
        senderColor: 'text-[#e91e63]',
        text: 'Reviewing my pull request on GitHub right now!'
      }
    ]
  },
  {
    id: 'ask',
    label: 'Ask anything',
    heading: 'Direct answers, zero fluff.',
    paragraph: 'Confused between Full Stack Web Development and Generative AI? Mr. Rohit Kashyap personally answers student doubts, reviews career backgrounds, and recommends the exact engineering track suited for 2024 hiring standards.',
    messages: [
      {
        sender: 'Rahul (Non-Tech)',
        senderColor: 'text-[#e91e63]',
        text: 'Rohit Sir, I have zero coding background. Can I really crack a 10+ LPA tech job?'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'Over 60% of our placed students come from non-CS backgrounds! In IGNITE 1.0, we teach from scratch with daily 1-on-1 doubt desks.'
      },
      {
        sender: 'Rahul (Non-Tech)',
        senderColor: 'text-[#e91e63]',
        text: 'That gives me huge confidence! How many projects will I build?'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'At least 5 real production SaaS products with authentication, Redis caching, and real cloud deployment.'
      },
      {
        sender: 'Stephen (Mentor)',
        senderColor: 'text-[#2e7d32]',
        text: 'And we hold weekly AMA sessions where you can ask any technical blocker directly.'
      },
      {
        sender: 'Rahul (Non-Tech)',
        senderColor: 'text-[#e91e63]',
        text: 'Joining this upcoming batch for sure!'
      }
    ]
  },
  {
    id: 'missed',
    label: 'What did I miss?',
    heading: 'Never fall behind a single lecture.',
    paragraph: 'Missed a live session due to college exams? Every single masterclass, code walkthrough, and mentor code review is recorded in ultra-high resolution and indexed in your TheCodeSpark Technologies Private Limited student portal with lifetime access.',
    messages: [
      {
        sender: 'Ananya (Student)',
        senderColor: 'text-[#9c27b0]',
        text: 'Rohit Sir, I had semester exams today and missed the Docker containerization masterclass.'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'No worries Ananya! The HD recording with timestamps and GitHub starter repo is already uploaded to your portal.'
      },
      {
        sender: 'Aditya (Lead Mentor)',
        senderColor: 'text-[#2e7d32]',
        text: 'And our Discord doubt desk is open right now if you need help with the Dockerfile.'
      },
      {
        sender: 'Ananya (Student)',
        senderColor: 'text-[#9c27b0]',
        text: 'Awesome! Reviewing the recording now and pushing to GitHub.'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'Tag me in your PR once your container builds without errors!'
      }
    ]
  },
  {
    id: 'summary',
    label: 'Summary',
    heading: 'Placement & Career Roadmap.',
    paragraph: 'We prepare you for the toughest technical interview rounds—Live Coding, DSA Data Structures, System Design, and Cultural Fit. We partner directly with 50+ hiring companies across Bangalore, Hyderabad, Pune, and Gurgaon.',
    messages: [
      {
        sender: 'Mukti (Placed TCS)',
        senderColor: 'text-[#e91e63]',
        text: 'Rohit Sir, the mock interview rounds you conducted simulated the exact interview I faced!'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'That is the TheCodeSpark Technologies Private Limited way! We simulate high-pressure tech interviews so the real one feels effortless.'
      },
      {
        sender: 'Akshat (Student)',
        senderColor: 'text-[#9c27b0]',
        text: 'Can we book another mock round before Friday?'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'Scheduled for Thursday 7 PM. Prepare your Redis & WebSockets architecture.'
      },
      {
        sender: 'Mukti (Placed TCS)',
        senderColor: 'text-[#e91e63]',
        text: 'All the best Akshat! You will definitely clear the technical round.'
      }
    ]
  },
  {
    id: 'campus',
    label: 'Indrapuri Campus',
    heading: 'On-Campus Lucknow Lab.',
    paragraph: 'Experience our high-energy offline tech campus at Indrapuri, Lucknow. Ultra-fast fiber internet, ergonomic workstations, and senior mentors sitting right beside you to debug code line by line.',
    messages: [
      {
        sender: 'Harsh (Lucknow)',
        senderColor: 'text-[#9c27b0]',
        text: 'Rohit Sir, are offline lab seats open for the next cohort at Indrapuri?'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'Yes Harsh! The Indrapuri tech hub is open 6 days a week with in-person desk mentorship.'
      },
      {
        sender: 'Harsh (Lucknow)',
        senderColor: 'text-[#9c27b0]',
        text: 'Coming tomorrow morning to visit the lab and meet the team!'
      },
      {
        sender: 'Mr. Rohit Kashyap (CEO)',
        senderColor: 'text-[#14141a] font-bold',
        text: 'Looking forward to meeting you. Coffee is on us!'
      },
      {
        sender: 'Stephen (Mentor)',
        senderColor: 'text-[#2e7d32]',
        text: 'Workstation 14 is reserved for your offline trial session.'
      }
    ]
  }
];

// Faculty & Engineering Mentors Truths
interface FacultyTruth {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  quote: string;
  photo: string;
  skills: string[];
}

const FACULTY_TRUTHS: FacultyTruth[] = [
  {
    id: 'fac-aadhya',
    name: 'Aadhya',
    role: 'Gen-AI & Vector Architectures Lead',
    department: 'AI & Machine Learning',
    experience: 'AI Engineer • LLM Specialist',
    quote: 'AI won\'t replace software engineers, but engineers who build autonomous agents, RAG pipelines, and intelligent workflows will lead the next decade of tech.',
    photo: '/assets/aistudio/faculty_aadhya.png',
    skills: ['LangChain', 'Gemini API', 'RAG Pipelines', 'Vector DBs']
  },
  {
    id: 'fac-ishu',
    name: 'Ishu Sharma',
    role: 'Placement & Technical Strategy Lead',
    department: 'Career & Placements',
    experience: '500+ Placed Tech Engineers',
    quote: 'We simulate real interview pressure and live code defenses until answering complex technical architecture questions becomes second nature.',
    photo: '/assets/aistudio/faculty_ishu_sharma.png',
    skills: ['Mock Interviews', 'Resume Audits', 'System Design', 'Tech Hiring']
  },
  {
    id: 'fac-nirved',
    name: 'Nirved Kumar',
    role: 'Tech Lead & Senior Full Stack Mentor',
    department: 'Full Stack Engineering',
    experience: 'Ex-SDE • 6+ Yrs Exp',
    quote: 'Code quality is not an afterthought; it is our foundation. We teach students to write clean, modular, production code that senior engineering teams are proud to deploy.',
    photo: '/assets/aistudio/faculty_nirved_kumar.png',
    skills: ['Next.js 15', 'PostgreSQL', 'System Design', 'Microservices']
  }
];

export const FounderMentorship: React.FC<FounderMentorshipProps> = ({
  onRequestCallback,
  onExploreCourses
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('details');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [facultyOffset, setFacultyOffset] = useState<number>(0);
  const [isFacultyPaused, setIsFacultyPaused] = useState<boolean>(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const currentTab = TABS_DATA.find((t) => t.id === activeTabId) || TABS_DATA[0];

  // Auto-rotate the 2 stacked cards on right every 6 seconds, pauses on hover
  useEffect(() => {
    if (isFacultyPaused) return;
    const fTimer = setInterval(() => {
      setFacultyOffset((prev) => (prev + 1) % FACULTY_TRUTHS.length);
    }, 6000);
    return () => clearInterval(fTimer);
  }, [isFacultyPaused]);

  const handleNextFaculty = () => {
    setFacultyOffset((prev) => (prev + 1) % FACULTY_TRUTHS.length);
  };

  const handlePrevFaculty = () => {
    setFacultyOffset((prev) => (prev - 1 + FACULTY_TRUTHS.length) % FACULTY_TRUTHS.length);
  };

  const topFaculty = FACULTY_TRUTHS[facultyOffset % FACULTY_TRUTHS.length];
  const bottomFaculty = FACULTY_TRUTHS[(facultyOffset + 1) % FACULTY_TRUTHS.length];

  // 1. Automatic Tab Cycling every 7 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const tabTimer = setInterval(() => {
      setActiveTabId((prev) => {
        const currentIndex = TABS_DATA.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % TABS_DATA.length;
        return TABS_DATA[nextIndex].id;
      });
    }, 7000);

    return () => clearInterval(tabTimer);
  }, [isPaused]);

  // 2. Automatic Continuous Smooth Scrolling inside the Chat Container
  useEffect(() => {
    const container = chatScrollRef.current;
    if (!container) return;

    container.scrollTop = 0;
    if (isPaused) return;

    const scrollInterval = setInterval(() => {
      if (!container || isPaused) return;

      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return;

      if (container.scrollTop >= maxScroll - 4) {
        setTimeout(() => {
          if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1200);
      } else {
        container.scrollBy({ top: 32, behavior: 'smooth' });
      }
    }, 1800);

    return () => clearInterval(scrollInterval);
  }, [activeTabId, isPaused]);

  return (
    <div className="relative">
      {/* 
        ========================================================================
        PART 1: INTERACTIVE CHAT WITH FOUNDER & CEO MR. ROHIT KASHYAP (VIDEO 1)
        ========================================================================
      */}
      {/* 
        ========================================================================
        PART 1: INTERACTIVE CHAT WITH FOUNDER & CEO MR. ROHIT KASHYAP (VIDEO 1)
        ========================================================================
      */}
      <section className="py-20 md:py-28 bg-[#C0C0C0] text-[#1c1c24] relative overflow-hidden transition-colors border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E10600]/15 border border-[#E10600]/30 text-[#E10600] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
              <img
                src={brandLogo}
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="Logo"
                className="h-5 w-auto object-contain filter drop-shadow shrink-0"
              />
              <span>TheCodeSpark Technologies Private Limited</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14141a] font-display tracking-tight leading-tight">
              Founder & CEO: <span className="text-[#E10600]">Mr. Rohit Kashyap</span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-700 max-w-2xl mx-auto font-medium">
              Live interactive guidance, honest tech mentorship, and personal cohort recommendations straight from the founder of TheCodeSpark Technologies Private Limited.
            </p>
          </div>

          {/* EXACT MATCHING CARD FROM VIDEO 1 (20261104-1740-47.2099386_edf02599.mp4) */}
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="rounded-[28px] sm:rounded-[36px] bg-[#d5d5d5] border border-black/10 p-4 sm:p-10 lg:p-12 shadow-xl shadow-black/5 relative group overflow-hidden"
          >
            {/* Auto-scroll indicator badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-mono text-neutral-500 bg-white/70 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-black/5">
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
              <span>{isPaused ? 'Paused' : 'Live Chat'}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
              
              {/* COLUMN 1: LEFT VERTICAL NAVIGATION TABS */}
              <div className="lg:col-span-3 space-y-2 sm:space-y-4">
                {TABS_DATA.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`block w-full text-left py-1 text-sm sm:text-base transition-all cursor-pointer font-sans ${
                        isActive
                          ? 'border-l-2 border-[#d94412] pl-3.5 font-bold text-[#d94412]'
                          : 'border-l-2 border-transparent pl-3.5 font-normal text-neutral-500 hover:text-black'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}

                <div className="pt-1 text-[11px] text-neutral-400 font-mono">
                  Click any topic or let it auto-play
                </div>
              </div>

              {/* COLUMN 2: CENTER CHAT CARD WITH FLOATING PHOTO TILES & AUTO-SCROLL */}
              <div className="lg:col-span-5 relative py-6 sm:py-8 flex justify-center">
                
                {/* FLOATING TILE 1: Top-Right (Mr. Rohit Kashyap Photo Tile) */}
                <div className="absolute -top-2 right-1 sm:-top-3 sm:right-2 z-20 flex flex-col items-center">
                  <div className="w-14 h-16 sm:w-20 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-white shadow-xl bg-black">
                    <img
                      src={rohitPhoto}
                      alt="Mr. Rohit Kashyap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded-full bg-[#d94412] text-white text-[8px] sm:text-[9px] font-mono font-bold shadow-md">
                    Rohit Kashyap
                  </span>
                </div>

                {/* FLOATING TILE 2: Right-Middle (Stephen / Lead Mentor Photo Tile) */}
                <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 z-20 flex-col items-center">
                  <div className="w-14 h-16 sm:w-16 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-white shadow-xl bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
                      alt="Stephen / Mentor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded-full bg-black/80 text-white text-[9px] font-mono font-semibold shadow-md">
                    Stephen
                  </span>
                </div>

                {/* FLOATING TILE 3: Bottom-Left (Student / Nathalie Photo Tile) */}
                <div className="absolute -bottom-2 left-1 sm:-bottom-3 sm:-left-4 z-20 flex flex-col items-center">
                  <div className="w-14 h-16 sm:w-20 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-white shadow-xl bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                      alt="Student Nathalie"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[8px] sm:text-[9px] font-mono font-bold shadow-md">
                    Nathalie
                  </span>
                </div>

                {/* MAIN CHAT WINDOW CONTAINER (Pure white background with AUTO-SCROLL) */}
                <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-3xl bg-[#ffffff] border border-black/5 p-5 sm:p-6 shadow-xl shadow-black/5 flex flex-col justify-between h-[380px] sm:h-[410px] relative z-10 overflow-hidden">
                  
                  {/* AUTOMATIC SMOOTH SCROLLING CHAT STREAM */}
                  <div 
                    ref={chatScrollRef}
                    className="space-y-3.5 text-xs leading-relaxed font-sans overflow-y-auto scrollbar-none pr-1 scroll-smooth max-h-[300px]"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3.5"
                      >
                        {currentTab.messages.map((msg, mIdx) => (
                          <div 
                            key={mIdx} 
                            className="space-y-0.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
                          >
                            <span className={`text-[11px] font-semibold block ${msg.senderColor}`}>
                              {msg.sender}
                            </span>
                            <p className="text-[#2b2b36] font-normal text-xs sm:text-[13px] leading-snug">
                              {msg.text}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* BOTTOM AUDIO / RECORDING PILL (Exact matching: [ ||| Live Desk ]) */}
                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111116] text-white shadow-md">
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-3 rounded-full bg-[#10b981] animate-pulse" />
                        <span className="w-1 h-2 rounded-full bg-[#10b981]" />
                        <span className="w-1 h-3.5 rounded-full bg-[#10b981] animate-pulse" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider font-semibold text-neutral-200 uppercase">
                        Live Desk
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-neutral-400">
                      TheCodeSpark Live
                    </span>
                  </div>

                </div>
              </div>

              {/* COLUMN 3: RIGHT EDITORIAL HEADLINE & COPY */}
              <div className="lg:col-span-4 space-y-4 lg:pl-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111116] font-display tracking-tight leading-tight">
                  {currentTab.heading}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {currentTab.paragraph}
                </p>

                <div className="pt-3 space-y-2.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <a
                      href="https://wa.me/917398839769?text=Hello%20Rohit%20Sir%2C%20I%20want%20to%20discuss%20courses%20at%20TheCodeSpark%20Technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#25D366]/20 transition-all cursor-pointer hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="tel:+917398839769"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#d94412] hover:bg-[#c23b0e] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#d94412]/20 transition-all cursor-pointer hover:scale-[1.02]"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Rohit Sir</span>
                    </a>

                    <button
                      onClick={onRequestCallback}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-black/60 hover:bg-black/90 text-neutral-300 hover:text-white border border-black/10 text-xs font-semibold transition-all cursor-pointer"
                    >
                      <span>Request Callback</span>
                    </button>
                  </div>

                  <div className="flex flex-col text-[11px] text-neutral-400 font-mono">
                    <span>Direct Desk: <a href="tel:+917398839769" className="text-white hover:text-[#ea580c] font-bold">+91 7398839769</a> / <a href="tel:+919548248925" className="text-white hover:text-[#ea580c] font-bold">+91 9548248925</a></span>
                    <span className="text-neutral-500 text-[10px]">Personalized 1-on-1 counseling • Lucknow &amp; Online</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        PART 2: EXACT LAYOUT AS DRAWN IN USER DIAGRAM (image_dda56b12.png)
        - Big Outer Enclosing Container Border
        - LEFT: "CEO Name And photo ok" (Mr. Rohit Kashyap with centered image)
        - RIGHT: TWO STACKED CARDS (Top card & Bottom card with centered employee images)
        - Interactive pagination/auto-cycle to view all 3 mentors seamlessly
        ========================================================================
      */}
      <section className="py-16 md:py-24 bg-[#2A2A2A] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
        {/* Subtle radial ambient backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#E10600]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 sm:mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
            <span>Meet Our Team &amp; Leadership</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Meet the Team Behind TheCodeSpark Technologies Private Limited.
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            A passionate team of engineers, educators, and technology professionals working together to deliver innovative solutions, industry-focused learning, and excellence in technology.
          </p>
        </div>

        {/* BIG OUTER ENCLOSING CONTAINER BORDER (Exact outer rectangle from user image) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="border border-white/10 rounded-3xl p-5 sm:p-7 md:p-8 bg-[#0b0b0f]/95 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/80">
            {/* Ambient orange glow in corner */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ea580c]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* ==============================================================
                  LEFT BOX: "CEO Name And photo ok" (Exact left box from image)
                  ============================================================== */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#181310] via-[#100e0e] to-[#0b0b0f] border-2 border-[#ea580c]/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/70 relative overflow-hidden group">
                <div className="space-y-4">
                  {/* Top Status */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#ea580c] bg-[#ea580c]/15 border border-[#ea580c]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
                      Leadership &amp; Founder
                    </span>
                    <span className="bg-emerald-500/90 text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <CheckCircle2 className="w-3 h-3" /> Active
                    </span>
                  </div>

                  {/* CENTERED Photo of CEO in the middle (mx-auto) with uploaded sweater portrait */}
                  <div className="relative mx-auto w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-[#ea580c]/60 shadow-[0_0_35px_rgba(234,88,12,0.3)] bg-[#181412] group-hover:ring-[#ea580c] transition-all duration-500 my-1">
                    <img
                      src="/assets/aistudio/ChatGPT_Image_Apr_16__2026__02_38_30_AM_9625e7e8.png"
                      onError={(e) => {
                        e.currentTarget.src = "/Rohit.png";
                      }}
                      alt="Mr. Rohit Kashyap - Founder & CEO"
                      className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold text-white bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                      Founder Desk
                    </div>

                    <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white bg-black/90 backdrop-blur-md border border-[#ea580c]/60 px-3.5 py-1 rounded-full shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
                        Founder &amp; CEO
                      </span>
                    </div>
                  </div>

                  {/* CEO Name & Title */}
                  <div className="text-center sm:text-left space-y-1">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight leading-tight">
                      Mr. Rohit Kashyap
                    </h4>
                    <p className="text-xs sm:text-[13px] text-orange-200/90 font-mono font-semibold">
                      Founder &amp; CEO, TheCodeSpark Technologies Private Limited
                    </p>
                    <p className="text-[11px] text-neutral-400 font-mono">
                      Curriculum Head • Lucknow Indrapuri Campus
                    </p>
                  </div>

                  {/* Founder Quote */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1.5 relative">
                    <Quote className="w-4 h-4 text-[#ea580c]" />
                    <p className="text-xs sm:text-[12.5px] text-neutral-200 leading-relaxed italic">
                      &ldquo;At TheCodeSpark Technologies Private Limited, we do not sell pre-recorded video libraries. We make you write production code, deploy real servers, and build tech products that companies actually pay for.&rdquo;
                    </p>
                  </div>

                  {/* Credentials Grid */}
                  <div className="grid grid-cols-2 gap-2 text-center font-mono text-[11px]">
                    <div className="bg-black/50 p-2 rounded-lg border border-white/5">
                      <span className="text-white font-bold block text-xs sm:text-sm">3 Yrs</span>
                      <span className="text-neutral-400 text-[10px]">Mentorship</span>
                    </div>
                    <div className="bg-black/50 p-2 rounded-lg border border-white/5">
                      <span className="text-white font-bold block text-xs sm:text-sm">500+ Placed</span>
                      <span className="text-neutral-400 text-[10px]">Engineers</span>
                    </div>
                  </div>
                </div>

                {/* Direct CTA Options: WhatsApp, Direct Call, Request Callback */}
                <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href="https://wa.me/917398839769?text=Hello%20Rohit%20Sir%2C%20I%20want%20to%20connect%20with%20you%20regarding%20TheCodeSpark%20training"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#25D366]/20 transition-all cursor-pointer hover:scale-[1.01]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="tel:+917398839769"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#ea580c] hover:bg-[#d94412] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#ea580c]/30 transition-all cursor-pointer hover:scale-[1.01]"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Direct</span>
                    </a>
                  </div>

                  <button
                    onClick={onRequestCallback}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>Request A Scheduled Callback</span>
                  </button>

                  <div className="text-center text-[10.5px] font-mono text-neutral-400">
                    Direct Desk: <a href="tel:+917398839769" className="text-white hover:text-[#ea580c] font-bold">+91 7398839769</a>
                  </div>
                </div>
              </div>

              {/* ==============================================================
                  RIGHT BOX: TWO STACKED CARDS (Exact 2 stacked boxes from image)
                  ============================================================== */}
              <div 
                onMouseEnter={() => setIsFacultyPaused(true)}
                onMouseLeave={() => setIsFacultyPaused(false)}
                className="lg:col-span-7 flex flex-col justify-between space-y-4"
              >
                {/* Header above the 2 stacked cards with pagination controls */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                      Faculty &amp; Engineering Mentors
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
                      ({facultyOffset + 1} &amp; {((facultyOffset + 1) % FACULTY_TRUTHS.length) + 1} of {FACULTY_TRUTHS.length})
                    </span>
                  </div>

                  {/* Next / Previous & Auto-cycle indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
                      {isFacultyPaused ? 'Paused' : 'Auto-cycles'}
                    </span>
                    <div className="inline-flex items-center rounded-lg border border-white/10 bg-black/60 p-0.5">
                      <button
                        onClick={handlePrevFaculty}
                        className="p-1 sm:p-1.5 rounded-md hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                        title="Previous Mentor"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNextFaculty}
                        className="p-1 sm:p-1.5 rounded-md hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                        title="Next Mentor"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* STACKED CARD 1 (Top Box in user diagram) */}
                <HorizontalFacultyCard faculty={topFaculty} />

                {/* STACKED CARD 2 (Bottom Box in user diagram) */}
                <HorizontalFacultyCard faculty={bottomFaculty} />

                {/* Footer notes under right side */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 px-1 pt-1">
                  <span>Continuous Desk Mentorship • Lucknow Indrapuri Campus</span>
                  <div className="flex items-center gap-1.5">
                    {FACULTY_TRUTHS.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setFacultyOffset(dotIdx)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          dotIdx === facultyOffset % FACULTY_TRUTHS.length
                            ? 'bg-[#ea580c] w-5'
                            : 'bg-white/20 hover:bg-white/40'
                        }`}
                        title={`View Mentor ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Section Footer Note */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-500 text-center sm:text-left">
              <span>TheCodeSpark Technologies Private Limited • Verified Engineering Leadership</span>
              <span>Indrapuri Campus / Live Online Cohorts</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

// Horizontal Faculty Card for the two stacked boxes on the right
const HorizontalFacultyCard: React.FC<{ faculty: FacultyTruth }> = ({ faculty }) => {
  return (
    <div className="bg-[#0e0e13] border border-white/10 hover:border-[#ea580c]/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl shadow-black/60 flex flex-col justify-between group hover:bg-[#121218]">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        
        {/* CENTERED Employee Image in the Middle of photo column (mx-auto) */}
        <div className="sm:col-span-4 flex flex-col items-center justify-center">
          <div className="relative mx-auto w-32 sm:w-36 aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-white/15 group-hover:ring-[#ea580c]/60 transition-all duration-500 shadow-lg bg-[#1a1410] flex items-center justify-center">
            <img
              src={faculty.photo}
              alt={faculty.name}
              className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

            {/* Department tag on top */}
            <div className="absolute top-1.5 inset-x-1.5 text-center pointer-events-none">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                {faculty.department}
              </span>
            </div>

            {/* Experience tag on bottom */}
            <div className="absolute bottom-1.5 inset-x-1.5 text-center pointer-events-none">
              <span className="text-[9.5px] font-mono font-bold text-white bg-[#ea580c]/90 backdrop-blur-md px-2 py-0.5 rounded-full shadow-md">
                {faculty.experience}
              </span>
            </div>
          </div>
        </div>

        {/* Details & Quote on right */}
        <div className="sm:col-span-8 space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Active Mentor
            </span>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight leading-tight">
              {faculty.name}
            </h4>
            <p className="text-xs sm:text-[13px] text-[#ea580c] font-mono font-semibold mt-0.5 leading-tight">
              {faculty.role}
            </p>
          </div>

          {/* Quote */}
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-left">
            <p className="text-xs text-neutral-300 leading-relaxed italic line-clamp-2">
              &ldquo;{faculty.quote}&rdquo;
            </p>
          </div>

          {/* Skills tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1">
            {faculty.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-[10px] font-mono group-hover:border-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

