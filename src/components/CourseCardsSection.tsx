import React from 'react';
import { motion } from 'motion/react';
import { Clock, Award, Headphones, ArrowRight, Laptop, Sparkles, Layers, Cpu, Database, Terminal, Flame } from 'lucide-react';
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
    <section id="courses-section" className="py-16 md:py-24 bg-[#C0C0C0] text-[#111116] relative transition-colors">
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
          Directly matching desktop experience on both mobile & desktop:
          Each card sticks beneath the header and stacks progressively over previous cards on scroll.
        */}
        <div className="relative space-y-8 sm:space-y-12 pb-12 sm:pb-16">
          {flagshipCards.map((item, idx) => {
            const isLight = item.cardType === 'light';
            const isOrange = item.cardType === 'orange';
            const isDark = item.cardType === 'dark';
            const isTerracotta = item.cardType === 'terracotta';

            // Z-index increases so subsequent cards cleanly overlap previous cards on scroll while staying below Navbar (z-50)
            const zIndexClass =
              idx === 0
                ? 'z-[11]'
                : idx === 1
                ? 'z-[12]'
                : idx === 2
                ? 'z-[13]'
                : idx === 3
                ? 'z-[14]'
                : idx === 4
                ? 'z-[15]'
                : idx === 5
                ? 'z-[16]'
                : 'z-[17]';
            // Stepped sticky offset creates the visible card-deck tabs effect on both mobile and desktop
            const stickyTop = `calc(clamp(70px, 8.5vh, 90px) + ${idx * 14}px)`;

            return (
              <div
                key={item.badge + idx}
                className={`sticky ${zIndexClass} transition-all will-change-transform`}
                style={{ top: stickyTop }}
              >
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`rounded-2xl p-4 sm:p-6 md:p-7 shadow-xl transition-all duration-300 border ${
                    isLight
                      ? 'bg-[#d8d8d8] text-[#111116] border-black/10 shadow-black/20 hover:shadow-black/30'
                      : isOrange
                      ? 'bg-gradient-to-r from-[#E10600] via-[#c70500] to-[#b30500] text-white border-white/20 shadow-[#E10600]/30'
                      : isDark
                      ? 'bg-[#2A2A2A] text-white border-white/10 shadow-black/60'
                      : 'bg-gradient-to-br from-[#1c1c1c] via-[#242424] to-[#161616] text-white border-[#E10600]/40 shadow-2xl'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
                    
                    {/* VISUAL COLUMN (If imageSide === 'left') */}
                    {item.imageSide === 'left' && (
                      <div
                        onClick={() => onSelectCourse(item.course)}
                        className="lg:col-span-5 order-1 cursor-pointer"
                      >
                        <VisualMockup
                          type={item.visualType}
                          tags={item.tags}
                          isDarkCard={isDark || isTerracotta}
                          isOrangeCard={isOrange}
                        />
                      </div>
                    )}

                    {/* DETAILS COLUMN */}
                    <div className={`space-y-3.5 sm:space-y-5 ${item.imageSide === 'left' ? 'lg:col-span-7 order-2' : 'lg:col-span-7 order-2 lg:order-1'}`}>
                      {/* Pill Badge */}
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isLight
                            ? 'bg-[#d84414]/10 text-[#d84414] border border-[#d84414]/20'
                            : isOrange
                            ? 'bg-black/25 text-white border border-white/25'
                            : 'bg-[#ff5722]/20 text-[#ff7849] border border-[#ff5722]/30'
                        }`}>
                          {item.badge}
                        </span>
                        <span className={`text-[10px] sm:text-[11px] font-mono ${
                          isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                        }`}>
                          {'brandSubtitle' in item && item.brandSubtitle ? item.brandSubtitle : 'TheCodeSpark Technologies Private Limited'}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3
                        onClick={() => onSelectCourse(item.course)}
                        className={`text-lg sm:text-2xl md:text-3xl font-extrabold font-display tracking-tight leading-snug cursor-pointer hover:underline ${
                        isLight ? 'text-[#111116]' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
                        isLight ? 'text-neutral-700' : isOrange ? 'text-white/90' : 'text-neutral-400'
                      }`}>
                        {item.desc}
                      </p>

                      {/* Meta Stats Badges Row (Clock, Certified, Mentor Support) */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1">
                        <div className={`flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLight ? 'text-[#d84414]' : isOrange ? 'text-white' : 'text-[#ff5722]'}`} />
                          <span>{item.duration}</span>
                        </div>

                        <div className={`flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Award className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLight ? 'text-emerald-600' : isOrange ? 'text-white' : 'text-emerald-400'}`} />
                          <span>{item.certified}</span>
                        </div>

                        <div className={`flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Headphones className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLight ? 'text-[#d84414]' : isOrange ? 'text-white' : 'text-[#ff5722]'}`} />
                          <span>{item.support}</span>
                        </div>
                      </div>

                      {/* Price & CTA Action Row */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-t border-black/5 dark:border-white/10">
                        <div className="flex items-baseline gap-1.5 sm:gap-2">
                          <span className={`text-[11px] sm:text-xs font-mono uppercase ${
                            isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                          }`}>
                            Price
                          </span>
                          <span className={`text-lg sm:text-2xl font-black font-mono ${
                            isLight ? 'text-[#111116]' : 'text-white'
                          }`}>
                            {item.price}
                          </span>
                          <span className={`text-[11px] sm:text-xs line-through font-mono ${
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

                        <div className="flex items-center gap-2 sm:gap-2.5">
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
                          isDarkCard={isDark || isTerracotta}
                          isOrangeCard={isOrange}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// High-fidelity visual mockup container replicating the cards from the screen recording
const VisualMockup: React.FC<{
  type: 'instructor-web' | 'data-ai' | 'laptop-code' | 'ai-agents' | 'java-dsa' | 'dev-toolkit' | 'trading-pro';
  tags: string[];
  isDarkCard?: boolean;
  isOrangeCard?: boolean;
}> = ({ type, tags, isDarkCard, isOrangeCard }) => {
  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/10 p-3 sm:p-5 shadow-inner min-h-[160px] sm:min-h-[260px] md:min-h-[300px] flex flex-col justify-between group">
      {/* Subtle tech background grid pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Floating Badges Header */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-mono text-white">
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff5722]" />
          <span>
            {type === 'instructor-web'
              ? 'LIVE NOW • IGNITE 1.0'
              : type === 'data-ai'
              ? 'COMING SOON • IGNITE 2.0'
              : type === 'laptop-code'
              ? 'COMING SOON • IGNITE 3.0'
              : type === 'ai-agents'
              ? 'COMING SOON • IGNITE 4.0'
              : type === 'java-dsa'
              ? 'COMING SOON • JAVA & DSA'
              : type === 'dev-toolkit'
              ? 'COMING SOON • DEV TOOLKIT'
              : 'COMING SOON • TRADING PRO'}
          </span>
        </div>

        {tags[1] && (
          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#c83b0f] text-white text-[9px] sm:text-[10px] font-mono font-bold shadow-md">
            {tags[1]}
          </span>
        )}
      </div>

      {/* Centerpiece Visual */}
      <div className="relative z-10 my-auto py-2.5 flex items-center justify-center">
        {type === 'instructor-web' && (
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-emerald-400/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#ebeae6]">
              <img
                src="/assets/aistudio/IGNITE_1.0_Job-Ready_Tech_Career_Poster_13daf013.png"
                alt="IGNITE 1.0 – Your Gateway to a Job-Ready Tech Career"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        {type === 'data-ai' && (
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-blue-400/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#051238]">
              <img
                src="/assets/aistudio/Ignite_2.0_Developer_Program_Poster_0af3eb9a.png"
                alt="IGNITE 2.0 - Future-Ready Developer Program"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        {type === 'laptop-code' && (
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-orange-400/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#0b0907]">
              <img
                src="/assets/aistudio/IGNITE_3.0_Developer_Cohort_Poster_2_2e0454b4.png"
                alt="Next-Gen Developer Cohort: Web Technologies + MERN Stack + AI Applications + Problem Solving + Cloud Computing + System Design"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        {type === 'ai-agents' && (
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-emerald-400/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#062b16]">
              <img
                src="/assets/aistudio/Autonomous_AI_Agents_Tech_Talk_Poster_db3b38b0.png"
                alt="Autonomous AI Agents & Full-Stack LLM Engineering"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        {type === 'java-dsa' && (
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-indigo-400/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#b8c4de]">
              <img
                src="/assets/aistudio/JAVALogic__Building_Deep_Learning_399f2731.png"
                alt="Java & DSA Domination - Logic Building & Deep Learning"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        {type === 'dev-toolkit' && (
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-amber-400/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#120b04]">
              <img
                src="/assets/aistudio/TheCodeSpark_Developer_Toolkit_Poster_1d5ebe66.png"
                alt="Complete Developer Toolkit - Languages, Code Editors & AI Coding Tools"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        {type === 'trading-pro' && (
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-emerald-400/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#0a0b0e]">
              <img
                src="/assets/aistudio/Focused_Crypto_Trading_Workspace_58db5cbb.png"
                alt="Stock Market, Options & Algo Trading Mastery"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom Tech Tags */}
      <div className="relative z-10 flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
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
