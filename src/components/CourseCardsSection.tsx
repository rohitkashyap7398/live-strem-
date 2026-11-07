import React from 'react';
import { motion } from 'motion/react';
import { Clock, Award, Headphones, ArrowRight, Laptop, Sparkles, Layers, Cpu, Database, Terminal, Flame } from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { COURSES, Course } from '../data/coursesData';

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
      course: COURSES[0], // IGNITE 1.0: 2.0 Job Ready AI Powered Cohort
      cardType: 'light' as const,
      badge: '2.0 LIVE',
      title: '2.0 Job Ready AI Powered Cohort',
      desc: 'Become a job-ready software engineer with our Cohort 2.0. An intensive program covering MERN stack development, DSA, and aptitude training.',
      duration: '260+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.5999',
      originalPrice: 'Rs.11999',
      imageSide: 'left' as const,
      visualType: 'instructor-web' as const,
      tags: ['Job Ready', 'MERN Stack', 'DSA With JS', 'Placement Focused', 'AI Powered']
    },
    {
      course: COURSES[1], // IGNITE 2.0
      cardType: 'orange' as const,
      badge: 'IGNITE 2.0 Flagship',
      title: 'Job Ready AI Powered Cohort: Complete Web Development + GenAI + DSA + Aptitude & Reasoning + DevOps + Web3 + System Design',
      desc: 'Complete 9 Master Episodes: Web Fundamentals, React 19 & Next.js, Node.js & MongoDB, GenAI Engineering, DevOps, Micro-Services & Web3, DSA in Java, Aptitude & System Design.',
      duration: '8 Months',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.7999',
      originalPrice: 'Rs.16999',
      imageSide: 'right' as const,
      visualType: 'data-ai' as const,
      tags: ['Loveable Ai', 'Pixxo (ImageKit)', 'DSA in Java', 'GenAI + System Design']
    },
    {
      course: COURSES[2] || COURSES[0], // IGNITE 3.0 / 2.0 Job Ready Cohort
      cardType: 'dark' as const,
      badge: '2.0 Intensive',
      title: '2.0 Job Ready AI Powered Cohort: Complete Web Development + DSA + Gen-AI + Aptitude',
      desc: 'Master enterprise full-stack development, modern DSA problem solving, and generative AI workflow integration with placement roadmaps.',
      duration: '200+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.5999',
      originalPrice: 'Rs.11999',
      imageSide: 'left' as const,
      visualType: 'laptop-code' as const,
      tags: ['React 19', 'Docker', 'PostgreSQL', 'DSA in Java']
    },
    {
      course: COURSES[3] || COURSES[1], // IGNITE 4.0 / Modern AI Agent Architecture
      cardType: 'terracotta' as const,
      badge: 'Advanced AI',
      title: 'Autonomous AI Agents & Full-Stack LLM Engineering',
      desc: 'Build production-grade multi-agent swarms, custom fine-tuned models, vector databases, and real-time multimodal applications.',
      duration: '4 Months',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.4999',
      originalPrice: 'Rs.9999',
      imageSide: 'right' as const,
      visualType: 'ai-agents' as const,
      tags: ['LangChain', 'Gemini API', 'Vector DB', 'Multi-Agent']
    }
  ];

  return (
    <section id="courses-section" className="py-16 md:py-24 bg-[#C0C0C0] text-[#111116] relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block exactly matching Screen_Recording_2026-11-04_215816_ec2e6877.mp4 */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          {/* Badge: [ COURSES ] in rounded outline pill with dark red/orange borders */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest text-[#E10600] border border-[#E10600]/30 bg-[#E10600]/10 uppercase shadow-xs">
            [ COURSES ]
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111116] font-display tracking-tight leading-tight">
            Not Sure Which Course Fits You? Don't Worry,<br className="hidden sm:inline" />
            We're Here To Help.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-700 max-w-xl mx-auto font-medium">
            Choose from our specialized industry-curated cohorts designed by engineering leads at TheCodeSpark Technologies Private Limited.
          </p>

          {/* Explore Courses Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onExploreAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#E10600] hover:bg-[#c70500] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E10600]/25 transition-all cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* 
          STACKING / STICKY CARDS CONTAINER 
          Directly matching Screen_Recording_2026-11-04_215816_ec2e6877.mp4:
          Each card sticks at top-24 / top-28, and as the user scrolls, the next card 
          slides up and stacks over the previous card with smooth shadow & alternating side images.
        */}
        <div className="relative space-y-12 sm:space-y-16 pb-12">
          {flagshipCards.map((item, idx) => {
            const isLight = item.cardType === 'light';
            const isOrange = item.cardType === 'orange';
            const isDark = item.cardType === 'dark';
            const isTerracotta = item.cardType === 'terracotta';

            // Z-index increases so subsequent cards cleanly overlap previous cards on scroll
            const zIndexClass = idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : idx === 2 ? 'z-30' : 'z-40';
            const stickyTop = `calc(88px + ${idx * 16}px)`;

            return (
              <div
                key={item.badge + idx}
                className={`sticky ${zIndexClass} transition-all`}
                style={{ top: stickyTop }}
              >
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 border ${
                    isLight
                      ? 'bg-[#d8d8d8] text-[#111116] border-black/10 shadow-black/15 hover:shadow-black/25'
                      : isOrange
                      ? 'bg-gradient-to-r from-[#E10600] via-[#c70500] to-[#b30500] text-white border-white/20 shadow-[#E10600]/30'
                      : isDark
                      ? 'bg-[#2A2A2A] text-white border-white/10 shadow-black/60'
                      : 'bg-gradient-to-br from-[#1c1c1c] via-[#242424] to-[#161616] text-white border-[#E10600]/40 shadow-2xl'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    
                    {/* VISUAL COLUMN (If imageSide === 'left') */}
                    {item.imageSide === 'left' && (
                      <div className="lg:col-span-5 order-1">
                        <VisualMockup
                          type={item.visualType}
                          tags={item.tags}
                          isDarkCard={isDark || isTerracotta}
                          isOrangeCard={isOrange}
                        />
                      </div>
                    )}

                    {/* DETAILS COLUMN */}
                    <div className={`space-y-5 ${item.imageSide === 'left' ? 'lg:col-span-7 order-2' : 'lg:col-span-7 order-2 lg:order-1'}`}>
                      {/* Pill Badge */}
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isLight
                            ? 'bg-[#d84414]/10 text-[#d84414] border border-[#d84414]/20'
                            : isOrange
                            ? 'bg-black/25 text-white border border-white/25'
                            : 'bg-[#ff5722]/20 text-[#ff7849] border border-[#ff5722]/30'
                        }`}>
                          {item.badge}
                        </span>
                        <span className={`text-[11px] font-mono ${
                          isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                        }`}>
                          TheCodeSpark Cohort
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-extrabold font-display tracking-tight leading-snug ${
                        isLight ? 'text-[#111116]' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
                        isLight ? 'text-neutral-600' : isOrange ? 'text-white/90' : 'text-neutral-400'
                      }`}>
                        {item.desc}
                      </p>

                      {/* Meta Stats Badges Row (Clock, Certified, Mentor Support) */}
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                        <div className={`flex items-center gap-2 text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Clock className={`w-4 h-4 ${isLight ? 'text-[#d84414]' : isOrange ? 'text-white' : 'text-[#ff5722]'}`} />
                          <span>{item.duration}</span>
                        </div>

                        <div className={`flex items-center gap-2 text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Award className={`w-4 h-4 ${isLight ? 'text-emerald-600' : isOrange ? 'text-white' : 'text-emerald-400'}`} />
                          <span>{item.certified}</span>
                        </div>

                        <div className={`flex items-center gap-2 text-xs font-mono font-medium ${
                          isLight ? 'text-neutral-700' : isOrange ? 'text-white' : 'text-neutral-300'
                        }`}>
                          <Headphones className={`w-4 h-4 ${isLight ? 'text-[#d84414]' : isOrange ? 'text-white' : 'text-[#ff5722]'}`} />
                          <span>{item.support}</span>
                        </div>
                      </div>

                      {/* Price & CTA Action Row */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 dark:border-white/10">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-xs font-mono uppercase ${
                            isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                          }`}>
                            Price
                          </span>
                          <span className={`text-xl sm:text-2xl font-black font-mono ${
                            isLight ? 'text-[#111116]' : 'text-white'
                          }`}>
                            {item.price}
                          </span>
                          <span className={`text-xs line-through font-mono ${
                            isLight ? 'text-neutral-400' : isOrange ? 'text-white/60' : 'text-neutral-500'
                          }`}>
                            {item.originalPrice}
                          </span>
                          <span className={`text-[10px] font-sans font-medium ${
                            isLight ? 'text-neutral-500' : isOrange ? 'text-white/80' : 'text-neutral-400'
                          }`}>
                            (+GST)
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => onSelectCourse(item.course)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                              isLight
                                ? 'bg-[#141419] hover:bg-black text-white'
                                : isOrange
                                ? 'bg-white hover:bg-neutral-100 text-[#E10600]'
                                : 'bg-white hover:bg-neutral-200 text-[#111116]'
                            }`}
                          >
                            <span>Check Course</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </motion.button>

                          <button
                            onClick={() => onEnrollCourse(item.course)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                              isLight
                                ? 'text-neutral-700 hover:text-black hover:bg-black/5'
                                : isOrange
                                ? 'text-white/90 hover:text-white hover:bg-white/10'
                                : 'text-neutral-300 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* VISUAL COLUMN (If imageSide === 'right') */}
                    {item.imageSide === 'right' && (
                      <div className="lg:col-span-5 order-1 lg:order-2">
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
  type: 'instructor-web' | 'data-ai' | 'laptop-code' | 'ai-agents';
  tags: string[];
  isDarkCard?: boolean;
  isOrangeCard?: boolean;
}> = ({ type, tags, isDarkCard, isOrangeCard }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/10 p-5 shadow-inner min-h-[260px] sm:min-h-[300px] flex flex-col justify-between group">
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
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white">
          <Sparkles className="w-3 h-3 text-[#ff5722]" />
          <span>Interactive Cohort</span>
        </div>

        {tags[1] && (
          <span className="px-2.5 py-1 rounded-md bg-[#c83b0f] text-white text-[10px] font-mono font-bold shadow-md">
            {tags[1]}
          </span>
        )}
      </div>

      {/* Centerpiece Visual */}
      <div className="relative z-10 my-auto py-2 flex items-center justify-center">
        {type === 'instructor-web' && (
          <div className="relative w-full max-w-[280px] text-center">
            <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
                alt="Tech Lead Instructor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 inset-x-0 text-center">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Senior Lead</span>
              </div>
            </div>

            {/* Floating pill tags */}
            <div className="absolute -top-2 -left-2 bg-black/80 border border-white/20 text-white text-[10px] font-mono px-2.5 py-1 rounded-full shadow-lg">
              Next.js 15
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#d84414] text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-lg">
              Gen-AI + DSA
            </div>
          </div>
        )}

        {type === 'data-ai' && (
          <div className="relative w-full text-center">
            <div className="mx-auto w-full max-w-[280px] p-4 rounded-xl bg-[#14141d] border border-white/10 shadow-2xl space-y-2.5 text-left">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-b border-white/10 pb-2">
                <span className="text-emerald-400 font-bold">● model_training.py</span>
                <span>Accuracy: 98.4%</span>
              </div>
              <div className="space-y-1 font-mono text-[10px] text-neutral-300">
                <div className="text-blue-400">&gt; import torch.nn as nn</div>
                <div className="text-purple-300">&gt; gemini_agent = Agent(llm=gemini)</div>
                <div className="text-emerald-300">&gt; pipeline.fit(train_dataset)</div>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#d84414] to-yellow-400 w-4/5" />
              </div>
            </div>
          </div>
        )}

        {type === 'laptop-code' && (
          <div className="relative w-full max-w-[300px] text-center">
            <div className="p-4 rounded-2xl bg-[#14141e] border border-white/15 shadow-2xl space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-neutral-400 ml-1">fullstack-production-app</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[9px] font-mono text-neutral-400 block">Frontend</span>
                  <span className="text-[11px] font-bold text-white font-mono">React 19 + Vite</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[9px] font-mono text-neutral-400 block">Backend</span>
                  <span className="text-[11px] font-bold text-emerald-400 font-mono">Node & Postgres</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'ai-agents' && (
          <div className="relative w-full max-w-[280px]">
            <div className="p-4 rounded-2xl bg-[#16131c] border border-purple-500/20 shadow-2xl space-y-2 text-left">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-purple-300 font-bold">Autonomous Swarm</span>
                <span className="text-emerald-400">Online</span>
              </div>
              <div className="flex items-center gap-2 py-1">
                <div className="w-7 h-7 rounded-lg bg-purple-900/60 flex items-center justify-center text-purple-200">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono text-white leading-tight">
                  <div>Planner & Executor</div>
                  <div className="text-[9px] text-neutral-400">RAG Vector Search</div>
                </div>
              </div>
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
