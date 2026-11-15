import React from 'react';
import { Clock, Award, Headphones, ArrowRight, Sparkles } from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { COURSES, Course } from '../data/coursesData';
import { MagneticButton } from './MagneticButton';

interface CourseCardsSectionProps {
  onSelectCourse: (course: Course) => void;
  onExploreAll: () => void;
  onEnrollCourse: (course: Course) => void;
}

export const CourseCardsSection: React.FC<CourseCardsSectionProps> = ({
  onSelectCourse,
  onExploreAll,
  onEnrollCourse
}) => {
  // We feature the 3-4 flagship cohorts matching the user's video:
  // Card 1: Light/White card (Visual on Left, Details on Right)
  // Card 2: Orange/Terracotta card (Details on Left, Visual on Right)
  // Card 3: Dark Black card (Visual on Left, Details on Right)
  // Card 4: Indigo/Slate card (Details on Left, Visual on Right)

  const flagshipCards = [
    {
      course: COURSES[0], // IGNITE 1.0
      cardType: 'light' as const,
      badge: '🔥 LIVE NOW',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'IGNITE 1.0 – Your Gateway to a Job-Ready Tech Career',
      desc: 'Transform your passion for technology into professional skills with our AI-powered learning program. Master Full Stack Web Development, Generative AI, Data Structures & Algorithms, Aptitude & Reasoning, DevOps, Web3, and System Design through practical learning and real-world projects. Build your skills, strengthen your problem-solving abilities, and prepare for opportunities in the technology industry.',
      duration: '260+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.5999',
      originalPrice: 'Rs.11999',
      imageSide: 'left' as const,
      visualType: 'instructor-web' as const,
      isComingSoon: false,
      tags: ['Job Ready', 'Full Stack + GenAI', 'DSA', 'DevOps & Web3', 'System Design']
    },
    {
      course: COURSES[1], // IGNITE 2.0
      cardType: 'orange' as const,
      badge: 'COMING SOON',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Future-Ready Developer Program: Full Stack Engineering + AI Integration + Data Structures & Algorithms + Logical Reasoning + Cloud & DevOps + System Architecture',
      desc: 'Complete 9 Master Episodes: Web Fundamentals, React 19 & Next.js, Node.js & MongoDB, GenAI Engineering, DevOps, Micro-Services & Web3, DSA in Java, Aptitude & System Design.',
      duration: '8 Months',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.7999',
      originalPrice: 'Rs.16999',
      imageSide: 'right' as const,
      visualType: 'data-ai' as const,
      isComingSoon: true,
      tags: ['Coming Soon', 'Full Stack Eng', 'AI Integration', 'Cloud & DevOps']
    },
    {
      course: COURSES[2] || COURSES[0], // IGNITE 3.0 / Next-Gen Developer Cohort
      cardType: 'dark' as const,
      badge: 'COMING SOON',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Next-Gen Developer Cohort: Web Technologies + MERN Stack + AI Applications + Problem Solving + Cloud Computing + System Design',
      desc: 'Master enterprise full-stack development, modern DSA problem solving, and generative AI workflow integration with placement roadmaps.',
      duration: '200+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.5999',
      originalPrice: 'Rs.11999',
      imageSide: 'left' as const,
      visualType: 'laptop-code' as const,
      isComingSoon: true,
      tags: ['Coming Soon', 'MERN Stack', 'AI Applications', 'Cloud Computing', 'System Design']
    },
    {
      course: COURSES.find((c) => c.id === 'ai-agents') || COURSES[1], // Autonomous AI Agents
      cardType: 'terracotta' as const,
      badge: 'COMING SOON',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Autonomous AI Agents & Full-Stack LLM Engineering',
      desc: 'Build production-grade multi-agent swarms, custom fine-tuned models, vector databases, and real-time multimodal applications.',
      duration: '4 Months',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.4999',
      originalPrice: 'Rs.9999',
      imageSide: 'right' as const,
      visualType: 'ai-agents' as const,
      isComingSoon: true,
      tags: ['Coming Soon', 'LangChain', 'Gemini API', 'Vector DB', 'Multi-Agent']
    },
    {
      course: COURSES.find((c) => c.id === 'ignite-4') || COURSES[3] || COURSES[0], // Java & DSA Domination
      cardType: 'light' as const,
      badge: 'COMING SOON',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Java & DSA Domination: Core Java + Data Structures & Algorithms + Logic Building + Deep Learning',
      desc: 'Master Object-Oriented Java, Data Structures & Algorithms, deep problem-solving logic, and FAANG-level coding interview patterns with structured live mentorship.',
      duration: '160+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.4236',
      originalPrice: 'Rs.10000',
      imageSide: 'left' as const,
      visualType: 'java-dsa' as const,
      isComingSoon: true,
      tags: ['Coming Soon', 'Java & DSA', 'Logic Building', 'Deep Learning']
    },
    {
      course: COURSES.find((c) => c.id === 'dev-toolkit') || COURSES[4] || COURSES[0], // Complete Developer Toolkit
      cardType: 'dark' as const,
      badge: 'COMING SOON • AI • CODING • TOOLS',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Complete Developer Toolkit: Programming Languages + Code Editors (Free) + AI Coding Tools & Workflow',
      desc: 'Learn multiple languages (Python, C++, JS, Java, C#, TypeScript, Go, Kotlin, Swift), industry-standard code editors (VS Code, Visual Studio, IntelliJ IDEA, WebStorm, GoLand), and AI coding tools (GitHub Copilot, Replit AI, Google Colab AI, Codeium, Cursor IDE, Windsurf) from Code → Build → Test → Deploy → Automate → Scale.',
      duration: '120+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.4999',
      originalPrice: 'Rs.9999',
      imageSide: 'right' as const,
      visualType: 'dev-toolkit' as const,
      isComingSoon: true,
      tags: ['Coming Soon', 'Languages', 'Code Editors', 'AI Coding Tools', 'Dev Workflow']
    },
    {
      course: COURSES.find((c) => c.id === 'summer-training') || COURSES[0], // Summer Training
      cardType: 'light' as const,
      badge: '☀️ LIVE NOW • 45 DAYS SUMMER TRAINING',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: '45-Day Summer Industrial Training – 5 Tech Tracks, GenAI & Live Hosted Projects',
      desc: '45-Day B.Tech, Diploma, BCA & MCA industrial training (Lucknow Campus + Live Online) across MERN+AI, Python/Django, Java Spring Boot, Flutter & Data BI. Includes 2 Minor + 1 Major Live Project, Hardbound Report, 1-Yr Free Hosting & Dual QR Certificates.',
      duration: '45 Days (120+ Hrs)',
      certified: 'Dual QR Cert + Hardbound Report',
      support: '1-Yr Free Hosting + NOC',
      price: 'Rs.3999',
      originalPrice: 'Rs.7999',
      imageSide: 'left' as const,
      visualType: 'summer-training' as const,
      isComingSoon: false,
      tags: ['45 Days Industrial', '5 Tech Tracks', '1-Yr Free Hosting', 'Hardbound Report + Cert']
    },
    {
      course: COURSES.find((c) => c.id === 'winter-training') || COURSES[0], // Winter Training
      cardType: 'dark' as const,
      badge: '❄️ LIVE NOW • WINTER TRAINING',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Winter Training Program – Hands-On Software Engineering, DSA & Hackathon Lab',
      desc: 'Accelerated 4–6 weeks winter coding cohort focused on DSA algorithms, clean backend APIs, weekend hackathon prototyping, and full college project readiness.',
      duration: '6 Weeks (100+ Hrs)',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.3999',
      originalPrice: 'Rs.7999',
      imageSide: 'right' as const,
      visualType: 'winter-training' as const,
      isComingSoon: false,
      tags: ['Winter Training', 'Python / Java / Web', 'DSA & Logic', 'Hackathon Lab']
    },
    {
      course: COURSES.find((c) => c.id === 'ignite-6') || COURSES[0], // Apprenticeship
      cardType: 'orange' as const,
      badge: 'APPRENTICESHIP PROGRAM',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Apprenticeship Program: Corporate Production Engineering, Agile Sprints & Stipend Track',
      desc: '6-Month corporate engineering apprenticeship. Work directly on production client repos, Agile sprints, PR code reviews, and get verified work experience with stipend assistance.',
      duration: '6 Months (300+ Hrs)',
      certified: 'Work Experience Letter',
      support: 'Corporate Leads',
      price: 'Rs.5000',
      originalPrice: 'Rs.10000',
      imageSide: 'left' as const,
      visualType: 'apprenticeship' as const,
      isComingSoon: true,
      tags: ['Apprenticeship', 'Paid Stipend Track', 'Live Client Projects', 'Placement Support']
    },
    {
      course: COURSES.find((c) => c.id === 'internship-training') || COURSES[0], // Internship Training
      cardType: 'light' as const,
      badge: '💼 LIVE NOW • INTERNSHIP TRAINING',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Internship Training Program – Real-World Production Deployment & 1-on-1 Industry Mentorship',
      desc: 'Bridge college to industry with real-time Agile sprints, production feature commits, senior Git PR reviews, Official Offer Letter, Experience Certificate & Letter of Recommendation.',
      duration: '3–6 Months (200+ Hrs)',
      certified: 'Offer + Experience Letter',
      support: '1-on-1 Industry Mentors',
      price: 'Rs.4499',
      originalPrice: 'Rs.9999',
      imageSide: 'right' as const,
      visualType: 'internship-training' as const,
      isComingSoon: false,
      tags: ['Internship Training', 'Live Codebase', 'Git & PR Reviews', 'Offer Letter']
    },
    {
      course: COURSES.find((c) => c.id === 'trading-mastery') || COURSES[COURSES.length - 1], // Stock Market, Crypto & Algo Trading Mastery
      cardType: 'terracotta' as const,
      badge: 'COMING SOON',
      brandSubtitle: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      title: 'Stock Market, Options & Algo Trading Mastery: Price Action + Crypto Spot + F&O & Automated Bots',
      desc: 'Master candlestick price action, order book depth, BTC/USDT & equity spot markets, NIFTY/BankNifty options, multi-timeframe risk management, and Python algorithmic trading bots.',
      duration: '140+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.6499',
      originalPrice: 'Rs.14999',
      imageSide: 'left' as const,
      visualType: 'trading-pro' as const,
      isComingSoon: true,
      tags: ['Coming Soon', 'Price Action', 'Crypto & Spot', 'Options & F&O', 'Algo Trading']
    }
  ];

  return (
    <section id="courses-section" className="py-16 md:py-24 bg-slate-50 dark:bg-[#C0C0C0] text-[#111116] relative transition-colors border-t border-slate-200 dark:border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Block exactly matching Screen_Recording_2026-11-04_215816_ec2e6877.mp4 */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3.5">
          {/* Badge: [ COURSES ] in rounded outline pill with dark red/orange borders */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest text-[#E10600] border border-[#E10600]/30 bg-[#E10600]/10 uppercase shadow-xs">
            [ COURSES ]
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111116] font-display tracking-tight leading-tight">
            Find Your Path. Master Your Skills. Build Your Future.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-700 max-w-xl mx-auto font-medium">
            Choose from our specialized industry-curated cohorts designed by engineering leads at TheCodeSpark Technologies Private Limited.
          </p>

          {/* Explore Courses Button */}
          <div className="pt-2">
            <MagneticButton
              onClick={onExploreAll}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              text="Explore Courses"
              className="!rounded-xl shadow-lg shadow-[#E10600]/25"
            />
          </div>
        </div>

        {/* 
          STACKING / STICKY CARDS CONTAINER 
          Works identically on both mobile & desktop:
          Each card is compact enough to fit inside the viewport and sticks cleanly as subsequent cards stack over it.
        */}
        <div className="relative space-y-6 sm:space-y-8 lg:space-y-12 pb-10 sm:pb-16">
          {flagshipCards.map((item, idx) => {
            const isLight = item.cardType === 'light';
            const isOrange = item.cardType === 'orange';
            const isDark = item.cardType === 'dark';
            const isTerracotta = item.cardType === 'terracotta';

            // Stepped sticky offset creates visible card-deck tabs below the compact scrolled navbar on all screens
            const stickyTop = `calc(clamp(48px, 6.5vh, 66px) + ${Math.min(idx, 5) * 6}px)`;

            return (
              <div
                key={item.badge + idx}
                className="sticky"
                style={{ top: stickyTop, zIndex: 11 + idx }}
              >
                <div
                  className={`rounded-2xl p-3.5 sm:p-5 lg:p-7 shadow-lg lg:shadow-xl border ${
                    isLight
                      ? 'bg-white dark:bg-[#d8d8d8] text-[#111116] border-slate-200 dark:border-black/10 shadow-slate-200/70 dark:shadow-black/25'
                      : isOrange
                      ? 'bg-gradient-to-r from-[#E10600] via-[#c70500] to-[#b30500] text-white border-white/20 shadow-[#E10600]/30'
                      : isDark
                      ? 'bg-[#2A2A2A] text-white border-white/10 shadow-black/60'
                      : 'bg-gradient-to-br from-[#1c1c1c] via-[#242424] to-[#161616] text-white border-[#E10600]/40 shadow-xl lg:shadow-2xl'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-10 items-center">
                    
                    {/* VISUAL COLUMN (If imageSide === 'left') */}
                    {item.imageSide === 'left' && (
                      <div
                        onClick={() => onSelectCourse(item.course)}
                        className="lg:col-span-5 order-1 cursor-pointer"
                      >
                        <VisualMockup
                          type={item.visualType}
                          tags={item.tags}
                        />
                      </div>
                    )}

                    {/* DETAILS COLUMN */}
                    <div className={`space-y-2.5 sm:space-y-4 lg:space-y-5 ${item.imageSide === 'left' ? 'lg:col-span-7 order-2' : 'lg:col-span-7 order-2 lg:order-1'}`}>
                      {/* Pill Badge */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isLight
                            ? 'bg-[#d84414]/10 text-[#d84414] border border-[#d84414]/20'
                            : isOrange
                            ? 'bg-black/25 text-white border border-white/25'
                            : 'bg-[#ff5722]/20 text-[#ff7849] border border-[#ff5722]/30'
                        }`}>
                          {item.badge}
                        </span>
                        <span className={`hidden sm:inline text-[10px] sm:text-[11px] font-mono ${
                          isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                        }`}>
                          {'brandSubtitle' in item && item.brandSubtitle ? item.brandSubtitle : 'TheCodeSpark Technologies Private Limited'}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3
                        onClick={() => onSelectCourse(item.course)}
                        className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold font-display tracking-tight leading-snug cursor-pointer hover:underline line-clamp-2 lg:line-clamp-none ${
                        isLight ? 'text-[#111116]' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-[11.5px] sm:text-sm leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-3 lg:line-clamp-none ${
                        isLight ? 'text-neutral-700' : isOrange ? 'text-white/90' : 'text-neutral-400'
                      }`}>
                        {item.desc}
                      </p>

                      {/* Meta Stats Badges Row (Clock, Certified, Mentor Support) */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:gap-6 pt-0.5">
                        <div className={`flex items-center gap-1 sm:gap-2 text-[10.5px] sm:text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLight ? 'text-[#d84414]' : isOrange ? 'text-white' : 'text-[#ff5722]'}`} />
                          <span>{item.duration}</span>
                        </div>

                        <div className={`flex items-center gap-1 sm:gap-2 text-[10.5px] sm:text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Award className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLight ? 'text-emerald-600' : isOrange ? 'text-white' : 'text-emerald-400'}`} />
                          <span>{item.certified}</span>
                        </div>

                        <div className={`flex items-center gap-1 sm:gap-2 text-[10.5px] sm:text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Headphones className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLight ? 'text-[#d84414]' : isOrange ? 'text-white' : 'text-[#ff5722]'}`} />
                          <span>{item.support}</span>
                        </div>
                      </div>

                      {/* Price & CTA Action Row */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 border-t border-black/5 dark:border-white/10">
                        <div className="flex items-baseline gap-1 sm:gap-2">
                          <span className={`text-[10px] sm:text-xs font-mono uppercase ${
                            isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                          }`}>
                            Price
                          </span>
                          <span className={`text-base sm:text-2xl font-black font-mono ${
                            isLight ? 'text-[#111116]' : 'text-white'
                          }`}>
                            {item.price}
                          </span>
                          <span className={`text-[10.5px] sm:text-xs line-through font-mono ${
                            isLight ? 'text-neutral-400' : isOrange ? 'text-white/60' : 'text-neutral-500'
                          }`}>
                            {item.originalPrice}
                          </span>
                          <span className={`text-[9px] sm:text-[10px] font-sans font-medium ${
                            isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                          }`}>
                            (+GST)
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2.5">
                          <MagneticButton
                            onClick={() => onSelectCourse(item.course)}
                            variant={isLight ? 'secondary' : isOrange ? 'primary' : 'primary'}
                            size="sm"
                            icon={<ArrowRight className="w-3.5 h-3.5" />}
                            iconPosition="right"
                            text="Check Course"
                            className={`!rounded-xl ${
                              isLight
                                ? '!bg-[#141419] hover:!bg-black !text-white'
                                : isOrange
                                ? '!bg-white hover:!bg-neutral-100 !text-[#E10600]'
                                : '!bg-white hover:!bg-neutral-200 !text-[#111116]'
                            }`}
                          />

                          <MagneticButton
                            onClick={() => onEnrollCourse(item.course)}
                            variant="ghost"
                            size="sm"
                            text={'isComingSoon' in item && item.isComingSoon ? 'Pre-Book' : 'Enroll Now'}
                            className={`!rounded-xl ${
                              isLight
                                ? '!text-neutral-700 hover:!text-black hover:!bg-black/5'
                                : isOrange
                                ? '!text-white/90 hover:!text-white hover:!bg-white/10'
                                : '!text-neutral-300 hover:!text-white hover:!bg-white/10'
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* VISUAL COLUMN (If imageSide === 'right') */}
                    {item.imageSide === 'right' && (
                      <div
                        onClick={() => onSelectCourse(item.course)}
                        className="lg:col-span-5 order-1 lg:order-2 cursor-pointer"
                      >
                        <VisualMockup
                          type={item.visualType}
                          tags={item.tags}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

type VisualMockupType =
  | 'instructor-web'
  | 'data-ai'
  | 'laptop-code'
  | 'ai-agents'
  | 'java-dsa'
  | 'dev-toolkit'
  | 'trading-pro'
  | 'summer-training'
  | 'winter-training'
  | 'apprenticeship'
  | 'internship-training';

const VISUAL_POSTERS: Record<
  VisualMockupType,
  { src: string; alt: string; label: string; ringClass: string; bgClass: string }
> = {
  'instructor-web': {
    src: '/assets/aistudio/Ignite_1.0_Portrait_Poster_05139a11.png',
    alt: 'IGNITE 1.0 – Your Gateway to a Job-Ready Tech Career',
    label: 'LIVE NOW • IGNITE 1.0',
    ringClass: 'ring-emerald-400/50',
    bgClass: 'bg-[#2b1000]'
  },
  'data-ai': {
    src: '/assets/aistudio/Ignite_2.0_Developer_Program_Poster_0af3eb9a.png',
    alt: 'IGNITE 2.0 - Future-Ready Developer Program',
    label: 'COMING SOON • IGNITE 2.0',
    ringClass: 'ring-blue-400/50',
    bgClass: 'bg-[#051238]'
  },
  'laptop-code': {
    src: '/assets/aistudio/IGNITE_3.0_Developer_Cohort_Poster_2_2e0454b4.png',
    alt: 'Next-Gen Developer Cohort: Web Technologies + MERN Stack + AI Applications + Problem Solving + Cloud Computing + System Design',
    label: 'COMING SOON • IGNITE 3.0',
    ringClass: 'ring-orange-400/50',
    bgClass: 'bg-[#0b0907]'
  },
  'ai-agents': {
    src: '/assets/aistudio/Autonomous_AI_Agents_Tech_Talk_Poster_db3b38b0.png',
    alt: 'Autonomous AI Agents & Full-Stack LLM Engineering',
    label: 'COMING SOON • IGNITE 4.0',
    ringClass: 'ring-emerald-400/50',
    bgClass: 'bg-[#062b16]'
  },
  'java-dsa': {
    src: '/assets/aistudio/JAVALogic__Building_Deep_Learning_399f2731.png',
    alt: 'Java & DSA Domination - Logic Building & Deep Learning',
    label: 'COMING SOON • JAVA & DSA',
    ringClass: 'ring-indigo-400/50',
    bgClass: 'bg-[#b8c4de]'
  },
  'dev-toolkit': {
    src: '/assets/aistudio/TheCodeSpark_Developer_Toolkit_Poster_1d5ebe66.png',
    alt: 'Complete Developer Toolkit - Languages, Code Editors & AI Coding Tools',
    label: 'COMING SOON • DEV TOOLKIT',
    ringClass: 'ring-amber-400/50',
    bgClass: 'bg-[#120b04]'
  },
  'summer-training': {
    src: '/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png',
    alt: 'Summer Training Program',
    label: 'LIVE NOW • 45 DAYS SUMMER TRAINING',
    ringClass: 'ring-amber-400/50',
    bgClass: 'bg-[#180c24]'
  },
  'winter-training': {
    src: '/assets/aistudio/TCS_Hackathon_Badge_Desk_Scene_04b4ab8b.png',
    alt: 'Winter Training Program',
    label: 'LIVE NOW • WINTER TRAINING',
    ringClass: 'ring-cyan-400/50',
    bgClass: 'bg-[#071526]'
  },
  apprenticeship: {
    src: '/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png',
    alt: 'Apprenticeship Program',
    label: 'COHORT OPEN • APPRENTICESHIP',
    ringClass: 'ring-orange-400/50',
    bgClass: 'bg-[#1a120b]'
  },
  'internship-training': {
    src: '/assets/aistudio/Warm_Office_Portrait_with_Colorful_Logo_2164f143.png',
    alt: 'Internship Training Program',
    label: 'LIVE NOW • INTERNSHIP',
    ringClass: 'ring-emerald-400/50',
    bgClass: 'bg-[#1c140e]'
  },
  'trading-pro': {
    src: '/assets/aistudio/Focused_Crypto_Trading_Workspace_58db5cbb.png',
    alt: 'Stock Market, Options & Algo Trading Mastery',
    label: 'COMING SOON • TRADING PRO',
    ringClass: 'ring-emerald-400/50',
    bgClass: 'bg-[#0a0b0e]'
  }
};

// High-fidelity visual mockup container: compact horizontal card on phones (< lg) so sticky cards fit 100% on screen,
// and full 4:5 poster showcase on desktop (lg+).
const VisualMockup: React.FC<{
  type: VisualMockupType;
  tags: string[];
}> = ({ type, tags }) => {
  const poster = VISUAL_POSTERS[type];

  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/10 p-2.5 sm:p-4 lg:p-5 shadow-inner lg:min-h-[300px] flex flex-row lg:flex-col items-center lg:items-stretch justify-between gap-3 lg:gap-0 group">
      {/* Subtle tech background grid pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Desktop Top Header Badges (hidden on mobile where they sit neatly beside the poster) */}
      <div className="hidden lg:flex relative z-10 items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/85 border border-white/15 text-[10px] font-mono text-white">
          <Sparkles className="w-3 h-3 text-[#ff5722]" />
          <span>{poster.label}</span>
        </div>

        {tags[1] && (
          <span className="px-2.5 py-1 rounded-md bg-[#c83b0f] text-white text-[10px] font-mono font-bold shadow-md">
            {tags[1]}
          </span>
        )}
      </div>

      {/* Centerpiece Poster (Compact thumbnail on mobile < lg, full 4:5 poster on lg+) */}
      <div className="relative z-10 lg:my-auto lg:py-2.5 flex items-center justify-center shrink-0">
        <div className="relative w-[84px] sm:w-[110px] lg:w-full lg:max-w-[340px] mx-auto">
          <div className={`relative w-full aspect-[4/5] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden ring-2 ${poster.ringClass} shadow-lg lg:shadow-2xl lg:group-hover:scale-[1.02] transition-transform duration-500 ${poster.bgClass}`}>
            <img
              src={poster.src}
              alt={poster.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Mobile Right Info Column (< lg): Badges + Tags beside thumbnail so card height stays compact for smooth sticky stacking */}
      <div className="flex lg:hidden flex-1 min-w-0 flex-col justify-between gap-2 relative z-10">
        <div className="flex flex-wrap items-center gap-1.5">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/85 border border-white/15 text-[9px] font-mono text-white max-w-full truncate">
            <Sparkles className="w-2.5 h-2.5 text-[#ff5722] shrink-0" />
            <span className="truncate">{poster.label}</span>
          </div>
          {tags[1] && (
            <span className="px-2 py-0.5 rounded-md bg-[#c83b0f] text-white text-[9px] font-mono font-bold">
              {tags[1]}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1">
          {tags.slice(0, 4).map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Bottom Tech Tags */}
      <div className="hidden lg:flex relative z-10 flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
        {tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
