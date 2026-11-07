import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Phone, ArrowRight, MessageSquare, CheckCircle2, Mic, Sparkles, Quote } from 'lucide-react';
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
    paragraph: 'Confused between Full Stack Web Development and Generative AI? Mr. Rohit Kashyap personally answers student doubts, reviews career backgrounds, and recommends the exact engineering track suited for 2026 hiring standards.',
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
    paragraph: 'Missed a live session due to college exams? Every single masterclass, code walkthrough, and mentor code review is recorded in ultra-high resolution and indexed in your TheCodeSpark student portal with lifetime access.',
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
        text: 'That is the TheCodeSpark way! We simulate high-pressure tech interviews so the real one feels effortless.'
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

// Faculty & Engineering Mentors Truths (Matching user's diagram with CEO on left & scrolling employee list on right)
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
    id: 'fac-1',
    name: 'Aditya Kumar',
    role: 'Tech Lead & Senior Full Stack Mentor',
    department: 'Full Stack & System Design',
    experience: 'Ex-SDE • 6+ Yrs Exp',
    quote: 'Code quality is not an afterthought; it is our foundation. We teach students to write clean, modular, production code that senior engineering teams are proud to deploy.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
    skills: ['Next.js 15', 'PostgreSQL', 'System Design', 'Microservices']
  },
  {
    id: 'fac-2',
    name: 'Stephen Francis',
    role: 'Lead DSA & Algorithms Instructor',
    department: 'Algorithms & Problem Solving',
    experience: 'Competitive Programmer • 400+ LeetCode Mentor',
    quote: 'Algorithms aren\'t about memorizing tricks; they are about understanding invariants, recursion trees, and building spatial logic from first principles.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    skills: ['Data Structures', 'Dynamic Programming', 'Graphs', 'Problem Solving']
  },
  {
    id: 'fac-3',
    name: 'Neha Choudhary',
    role: 'Gen-AI & Vector Architectures Lead',
    department: 'AI & Machine Learning',
    experience: 'AI Engineer • Production LLM Specialist',
    quote: 'AI won\'t replace software engineers, but engineers who build autonomous agents and RAG pipelines will replace those who don\'t.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    skills: ['LangChain', 'Gemini API', 'RAG', 'pgvector']
  },
  {
    id: 'fac-4',
    name: 'Aryan Mehrotra',
    role: 'DevOps & Cloud Infrastructure Lead',
    department: 'Cloud & Reliability',
    experience: 'AWS Certified • Kubernetes Expert',
    quote: 'A project isn\'t finished when it works on localhost. Every student must master Docker containerization, CI/CD pipelines, and cloud telemetry.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    skills: ['Docker', 'Kubernetes', 'AWS Cloud', 'CI/CD Pipelines']
  },
  {
    id: 'fac-5',
    name: 'Pooja Sharma',
    role: 'Placement & Technical Interview Lead',
    department: 'Career Strategy',
    experience: '500+ Engineering Candidates Placed',
    quote: 'We simulate real interview pressure until answering complex technical questions under scrutiny becomes effortless natural instinct.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
    skills: ['Mock Interviews', 'Resume Audits', 'Tech Placement']
  },
  {
    id: 'fac-6',
    name: 'Harsh Vardhan',
    role: 'Indrapuri Campus Operations & Lab Mentor',
    department: 'On-Campus Mentorship',
    experience: 'Senior Frontend Specialist • Lucknow Hub',
    quote: 'Having an experienced developer sitting across the table to debug an asynchronous bug or database index saves weeks of isolated struggle.',
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300&auto=format&fit=crop&q=80',
    skills: ['React 19', 'Tailwind CSS', 'TypeScript', 'Desk Mentorship']
  },
  {
    id: 'fac-7',
    name: 'Priya Nair',
    role: 'Backend & Distributed Systems Architect',
    department: 'Backend Engineering',
    experience: 'Distributed Systems • 5+ Yrs Exp',
    quote: 'Real software engineering begins when you think about latency, database concurrency, connection pools, and memory bottlenecks.',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80',
    skills: ['Node.js', 'Redis', 'PostgreSQL', 'Microservices']
  },
  {
    id: 'fac-8',
    name: 'Samarth Jain',
    role: 'React & UI Architecture Guide',
    department: 'Frontend Engineering',
    experience: 'Design Systems & Web Performance',
    quote: 'Clean components, zero layout shifts, and exceptional user experience are non-negotiable standards for modern web applications.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
    skills: ['React 19', 'Next.js', 'UI Performance', 'Design Systems']
  }
];

export const FounderMentorship: React.FC<FounderMentorshipProps> = ({
  onRequestCallback,
  onExploreCourses
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('details');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const currentTab = TABS_DATA.find((t) => t.id === activeTabId) || TABS_DATA[0];

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
            className="rounded-[32px] sm:rounded-[36px] bg-[#d5d5d5] border border-black/10 p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/5 relative group"
          >
            {/* Auto-scroll indicator badge */}
            <div className="absolute top-4 right-6 z-20 flex items-center gap-2 text-[10px] font-mono text-neutral-500 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full border border-black/5">
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
              <span>{isPaused ? 'Auto-scroll Paused (Hovering)' : 'Auto-scrolling Live Chat'}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* COLUMN 1: LEFT VERTICAL NAVIGATION TABS */}
              <div className="lg:col-span-3 space-y-3 sm:space-y-4">
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

                <div className="pt-2 text-[11px] text-neutral-400 font-mono">
                  Click any topic or let it auto-play
                </div>
              </div>

              {/* COLUMN 2: CENTER CHAT CARD WITH FLOATING PHOTO TILES & AUTO-SCROLL */}
              <div className="lg:col-span-5 relative py-6 sm:py-8 flex justify-center">
                
                {/* FLOATING TILE 1: Top-Right (Mr. Rohit Kashyap Photo Tile) */}
                <div className="absolute -top-3 right-0 sm:right-2 z-20 flex flex-col items-center">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-white shadow-xl bg-black">
                    <img
                      src={rohitPhoto}
                      alt="Mr. Rohit Kashyap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded-full bg-[#d94412] text-white text-[9px] font-mono font-bold shadow-md">
                    Rohit Kashyap
                  </span>
                </div>

                {/* FLOATING TILE 2: Right-Middle (Stephen / Lead Mentor Photo Tile) */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 z-20 flex flex-col items-center">
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
                <div className="absolute -bottom-3 -left-2 sm:-left-4 z-20 flex flex-col items-center">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-white shadow-xl bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                      alt="Student Nathalie"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-mono font-bold shadow-md">
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
                  <button
                    onClick={onRequestCallback}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#d94412] hover:bg-[#c23b0e] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#d94412]/20 transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Talk with Rohit Sir</span>
                  </button>

                  <div className="flex flex-col text-[11px] text-neutral-400 font-mono">
                    <span>Helpline: <a href="tel:+917398839769" className="text-white hover:text-[#ea580c] font-bold">+91 7398839769</a> / <a href="tel:+919548248925" className="text-white hover:text-[#ea580c] font-bold">+91 9548248925</a></span>
                    <span className="text-neutral-500 text-[10px]">Personalized 1-on-1 counseling • Lucknow & Online</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        PART 2: ENGINEERING TRUTHS THAT DRIVE OUR CULTURE
        Display size strictly matching "We Help Learners Become Industry-Ready Developers":
        - Display container: max-w-5xl mx-auto px-4 sm:px-6
        - Viewport height: h-[540px] sm:h-[600px]
        - Header size: max-w-4xl mx-auto text-center mb-10 sm:mb-14
        - Layout matching user diagram (image_196a1cab.png): CEO Card on left & scrolling employee list on right
        ========================================================================
      */}
      <section className="py-16 md:py-24 bg-[#2A2A2A] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
        {/* Subtle radial ambient backdrop matching StudentReviews */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#E10600]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Header Container matching StudentReviews */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 sm:mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
            <span>Leadership & Faculty Culture</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            Engineering Truths That Drive Our Culture.
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Direct vision from our Founder & CEO Mr. Rohit Kashyap alongside our core engineering mentors and faculty.
          </p>
        </div>

        {/* Main Display Container matching StudentReviews exact display size: max-w-5xl */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          
          {/* Outer Bordered Container Box matching image_196a1cab.png */}
          <div className="border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-[#09090d]/95 relative overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/80">
            
            {/* Split Content: CEO Card on Left & Scrolling Employee List on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              
              {/* LEFT: CEO Card ("CEO Name And photo ok") */}
              <div className="lg:col-span-5 bg-[#0e0e13] border border-[#ea580c]/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/60 relative overflow-hidden group">
                <div className="space-y-4">
                  {/* Top status */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#ea580c] bg-[#ea580c]/10 border border-[#ea580c]/20 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                      Founder & CEO
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">Curriculum Head</span>
                  </div>

                  {/* Framed Photo of CEO */}
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900 group-hover:ring-[#ea580c]/40 transition-all shadow-inner">
                    <img
                      src={rohitPhoto}
                      alt="Mr. Rohit Kashyap"
                      className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-3.5">
                      <h4 className="text-base sm:text-lg font-bold text-white font-display tracking-tight leading-tight">
                        Mr. Rohit Kashyap
                      </h4>
                      <p className="text-[11px] text-neutral-300 font-medium">
                        Founder & CEO, TheCodeSpark Technologies
                      </p>
                    </div>
                  </div>

                  {/* Founder's Engineering Truth Quote */}
                  <div className="space-y-1.5 pt-0.5">
                    <Quote className="w-4 h-4 text-[#ea580c]/70" />
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-neutral-200 font-normal">
                      &ldquo;At TheCodeSpark Technologies, we do not sell pre-recorded video libraries. We make you write production code, deploy real servers, and build tech products that companies actually pay for.&rdquo;
                    </p>
                  </div>

                  {/* Key Credentials Strip */}
                  <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-white/[0.08] text-[10.5px] font-mono text-neutral-400">
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.05]">
                      <span className="text-white font-bold block text-xs">10+ Years</span>
                      Mentoring
                    </div>
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.05]">
                      <span className="text-white font-bold block text-xs">500+ Placed</span>
                      Engineers
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <button
                    onClick={onRequestCallback}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#ea580c] hover:bg-[#d94412] text-white text-xs font-bold shadow-lg shadow-[#ea580c]/25 transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Connect With Rohit Sir</span>
                  </button>
                </div>
              </div>

              {/* RIGHT: Scrolling Employee / Mentors List */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Faculty & Engineering Mentors
                  </span>
                  <span className="text-[11px] font-mono text-[#ea580c] bg-[#ea580c]/10 border border-[#ea580c]/20 px-2 py-0.5 rounded">
                    {FACULTY_TRUTHS.length} Active Mentors
                  </span>
                </div>

                {/* Vertical Scrolling Container matching StudentReviews height */}
                <div className="relative overflow-hidden h-[540px] sm:h-[600px] rounded-2xl border border-white/[0.06] bg-black/40">
                  {/* Top and Bottom Fading Gradient Masks */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#09090d] via-[#09090d]/80 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#09090d] via-[#09090d]/80 to-transparent z-10 pointer-events-none" />

                  {/* Continuous Vertical Scrolling Track */}
                  <div className="p-3 sm:p-4 overflow-hidden h-full flex flex-col pointer-events-none select-none">
                    <div className="animate-marquee-vertical flex flex-col gap-4">
                      {[...FACULTY_TRUTHS, ...FACULTY_TRUTHS].map((fac, idx) => (
                        <FacultyCard key={`${fac.id}-${idx}`} faculty={fac} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer info line */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500">
              <span>TheCodeSpark Technologies Private Limited • Founder & Mentors Desk</span>
              <span className="text-neutral-400">Continuous Faculty Feed • Lucknow Indrapuri Campus</span>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

// Faculty Card Component matching compact styling
const FacultyCard: React.FC<{ faculty: FacultyTruth }> = ({ faculty }) => {
  const initials = faculty.name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

  return (
    <div className="bg-[#0e0e13] border border-white/[0.08] rounded-2xl p-4 sm:p-4.5 transition-all duration-300 shadow-md shadow-black/40 flex flex-col justify-between">
      <div className="space-y-3">
        {/* Top Header: Avatar + Name + Role + Dept */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/15 bg-neutral-800 shrink-0">
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-white bg-gradient-to-tr from-neutral-800 to-neutral-700 -z-10">
                {initials}
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-tight truncate">
                {faculty.name}
              </h4>
              <p className="text-[10.5px] text-[#ea580c] font-mono leading-tight truncate mt-0.5">
                {faculty.role}
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-neutral-400 shrink-0 whitespace-nowrap">
            {faculty.experience}
          </span>
        </div>

        {/* Engineering Truth Quote */}
        <p className="text-xs sm:text-[12.5px] leading-relaxed text-neutral-200/90 font-normal italic">
          &ldquo;{faculty.quote}&rdquo;
        </p>
      </div>

      {/* Footer Tags */}
      <div className="pt-2.5 mt-2.5 border-t border-white/[0.05] flex items-center justify-between gap-2 text-[10px] font-mono">
        <div className="flex flex-wrap gap-1.5 items-center">
          {faculty.skills.slice(0, 3).map((skill, sIdx) => (
            <span
              key={sIdx}
              className="px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-neutral-400"
            >
              {skill}
            </span>
          ))}
        </div>
        <span className="text-emerald-400 shrink-0 flex items-center gap-1">
          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
          <span>Faculty</span>
        </span>
      </div>
    </div>
  );
};
