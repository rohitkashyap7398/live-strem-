import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Layers,
  Sparkles
} from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { COURSES, Course } from '../data/coursesData';
import { FAQS } from '../data/websiteContent';
import { MagneticButton } from './MagneticButton';
import { TrendingUp } from 'lucide-react';

interface CoursesCatalogViewProps {
  onSelectCourse: (course: Course) => void;
  onPreBook: (course: Course) => void;
  onViewSyllabus: (course: Course) => void;
  onRequestCallback?: () => void;
}

export const CoursesCatalogView: React.FC<CoursesCatalogViewProps> = ({
  onSelectCourse,
  onPreBook,
  onViewSyllabus,
  onRequestCallback
}) => {
  const tradingCourse = COURSES.find((c) => c.id === 'trading-mastery') || COURSES[0];

  // Exact cards matching Video 20261114-0844-31.0595314_9b653dc9.mp4 + new Trading card + IGNITE 1.0 as Card 1 + IGNITE 2.0 as Card 2
  const catalogCards = [
    {
      id: 'ignite-1-cohort-2',
      targetCourse: COURSES[0],
      bannerImg: '/assets/aistudio/IGNITE_1.0_Job-Ready_Tech_Career_Poster_13daf013.png',
      isPortraitPoster: true,
      isLive: true,
      accentDot: true,
      badgeText: '🔥 LIVE NOW • IGNITE 1.0',
      companySub: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      tags: ['Job Ready', 'Full Stack + GenAI', 'DevOps & Web3'],
      title: 'IGNITE 1.0 – Your Gateway to a Job-Ready Tech Career',
      price: 5999,
      originalPrice: 11998,
      discountPct: '50%',
      isTrading: false,
      showFullTitle: false,
    },
    {
      id: 'ignite-2-flagship',
      targetCourse: COURSES[1] || COURSES[0],
      bannerImg: '/assets/aistudio/Ignite_2.0_Developer_Program_Poster_0af3eb9a.png',
      isPortraitPoster: true,
      isLive: false,
      accentDot: false,
      badgeText: 'COMING SOON • IGNITE 2.0',
      companySub: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      tags: ['Full Stack Eng', 'AI Integration', 'Cloud & DevOps'],
      title: 'Future-Ready Developer Program: Full Stack Engineering + AI Integration + Data Structures & Algorithms + Logical Reasoning + Cloud & DevOps + System Architecture',
      price: 7999,
      originalPrice: 16999,
      discountPct: '53%',
      isTrading: false,
      showFullTitle: true,
    },
    {
      id: 'ignite-3-live',
      targetCourse: COURSES[2] || COURSES[0],
      bannerImg: '/assets/aistudio/IGNITE_3.0_Developer_Cohort_Poster_2_2e0454b4.png',
      isPortraitPoster: true,
      isLive: false,
      accentDot: false,
      badgeText: 'COMING SOON • IGNITE 3.0',
      companySub: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      tags: ['Web Technologies', 'MERN Stack', 'AI Applications'],
      title: 'Next-Gen Developer Cohort: Web Technologies + MERN Stack + AI Applications + Problem Solving + Cloud Computing + System Design',
      price: 5999,
      originalPrice: 11999,
      discountPct: '50%',
      isTrading: false,
      showFullTitle: true,
    },
    {
      id: 'autonomous-ai-agents',
      targetCourse: COURSES[3] || COURSES[1],
      bannerImg: '/assets/aistudio/Autonomous_AI_Agents_Tech_Talk_Poster_db3b38b0.png',
      isPortraitPoster: true,
      isLive: false,
      accentDot: false,
      badgeText: 'COMING SOON',
      companySub: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      tags: ['AI Agents', 'Full-Stack LLMs', 'Multi-Agent'],
      title: 'Autonomous AI Agents & Full-Stack LLM Engineering',
      price: 4999,
      originalPrice: 9999,
      discountPct: '50%',
      isTrading: false,
      showFullTitle: true,
    },
    {
      id: 'java-dsa-domination',
      targetCourse: COURSES[3] || COURSES[0],
      bannerImg: '/assets/aistudio/JAVALogic__Building_Deep_Learning_399f2731.png',
      isPortraitPoster: true,
      isLive: false,
      accentDot: false,
      badgeText: 'COMING SOON',
      companySub: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      tags: ['JAVA', 'Logic Building', 'Deep Learning'],
      title: 'Java & DSA Domination: Core Java + Data Structures & Algorithms + Logic Building + Deep Learning',
      price: 4236,
      originalPrice: 10000,
      discountPct: '58%',
      isTrading: false,
      showFullTitle: true,
    },
    {
      id: 'complete-developer-toolkit',
      targetCourse: COURSES[4] || COURSES[0],
      bannerImg: '/assets/aistudio/TheCodeSpark_Developer_Toolkit_Poster_1d5ebe66.png',
      isPortraitPoster: true,
      isLive: false,
      accentDot: false,
      badgeText: 'COMING SOON • AI & TOOLS',
      companySub: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      tags: ['Languages', 'Code Editors', 'AI Coding Tools'],
      title: 'Complete Developer Toolkit: Languages + Code Editors (VS Code, IntelliJ) + AI Coding Tools (Copilot, Cursor, Windsurf)',
      price: 4999,
      originalPrice: 9999,
      discountPct: '50%',
      isTrading: false,
      showFullTitle: true,
    },
    {
      id: 'trading-mastery-pro',
      targetCourse: tradingCourse,
      bannerImg: '/assets/aistudio/Focused_Crypto_Trading_Workspace_58db5cbb.png',
      isPortraitPoster: true,
      isLive: false,
      accentDot: false,
      badgeText: 'COMING SOON • TRADING PRO',
      companySub: 'THECODESPARK TECHNOLOGIES PRIVATE LIMITED',
      tags: ['Price Action', 'Options & F&O', 'Algo Trading'],
      title: 'Stock Market, Options & Algo Trading Mastery: Price Action + Crypto Spot + F&O & Automated Bots',
      price: 6499,
      originalPrice: 14999,
      discountPct: '57%',
      isTrading: false,
      showFullTitle: true,
    }
  ];

  // FAQs state for exact matching accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = FAQS.map((faq) => ({
    q: faq.question,
    a: faq.answer
  }));

  return (
    <section className="py-12 sm:py-16 bg-[#070709] min-h-screen text-[#f3f4f6] relative overflow-hidden">
      
      {/* Background subtle radial glow behind heading */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#5346ff]/12 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Exact Heading matching Video */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-widest text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5b4bff]" />
            <span>TheCodeSpark Cohorts &amp; Trading Academy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Level Up Your Skills With<br className="hidden sm:inline" /> Expert-Led Courses
          </h1>
        </div>

        {/* 7-CARD GRID EXACTLY MATCHING VIDEO DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {catalogCards.map((item) => {
            const course = item.targetCourse;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-[#101016] border border-white/10 hover:border-white/25 p-4 transition-all duration-300 flex flex-col justify-between group shadow-2xl hover:shadow-[0_20px_50px_-15px_rgba(91,75,255,0.22)] relative overflow-hidden"
              >
                <div>
                  {/* Top Graphic Art Banner (No 3 dots — exact match to reference video) */}
                  <div 
                    onClick={() => onSelectCourse(course)}
                    className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#161622] mb-4 cursor-pointer select-none shadow-md border border-white/10"
                  >
                    {item.isTrading ? (
                      /* Custom High-Craft FinTech Candlestick & Algo Trading Banner */
                      <div className="w-full h-full relative bg-gradient-to-br from-[#061813] via-[#09101d] to-[#140a1c] p-3.5 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Subtle chart grid */}
                        <div
                          className="absolute inset-0 opacity-20 pointer-events-none"
                          style={{
                            backgroundImage:
                              'linear-gradient(to right, rgba(45,212,191,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,212,191,0.12) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        />

                        {/* Glowing ambient orb */}
                        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-emerald-500/25 blur-2xl rounded-full pointer-events-none" />

                        {/* Top Ticker Badges */}
                        <div className="relative z-10 flex items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-[9px] font-mono font-bold text-emerald-300">
                            <TrendingUp className="w-2.5 h-2.5" />
                            NIFTY +1.42%
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[9px] font-mono text-cyan-300">
                            ALGO BOT
                          </span>
                        </div>

                        {/* SVG Candlestick Chart Artwork */}
                        <div className="relative z-10 my-auto flex items-end justify-between gap-1.5 h-16 px-2 pt-2">
                          {[
                            { h: 26, top: 24, bull: true },
                            { h: 18, top: 28, bull: false },
                            { h: 32, top: 18, bull: true },
                            { h: 22, top: 22, bull: true },
                            { h: 16, top: 26, bull: false },
                            { h: 38, top: 12, bull: true },
                            { h: 28, top: 16, bull: true },
                            { h: 18, top: 20, bull: false },
                            { h: 44, top: 6, bull: true },
                            { h: 52, top: 2, bull: true },
                          ].map((candle, cIdx) => (
                            <div key={cIdx} className="relative flex-1 flex flex-col items-center justify-end h-full">
                              {/* Wick */}
                              <div
                                className={`w-[1.5px] rounded-full ${candle.bull ? 'bg-emerald-400/80' : 'bg-rose-400/80'}`}
                                style={{ height: `${candle.h + 12}px` }}
                              />
                              {/* Candle body */}
                              <div
                                className={`absolute w-2.5 sm:w-3 rounded-[2px] shadow-md ${
                                  candle.bull
                                    ? 'bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-emerald-500/30'
                                    : 'bg-gradient-to-b from-rose-400 to-rose-600 shadow-rose-500/30'
                                }`}
                                style={{
                                  height: `${candle.h}px`,
                                  bottom: `${Math.max(4, 48 - candle.top - candle.h * 0.4)}px`,
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        {/* Bottom Banner Label */}
                        <div className="relative z-10 flex items-center justify-between pt-1">
                          <div>
                            <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-300/90 block">
                              Institutional Trading Desk
                            </span>
                            <span className="text-xs font-extrabold text-white font-display tracking-tight">
                              PRICE ACTION • F&amp;O • ALGO
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#00e5c3]/15 border border-[#00e5c3]/40 text-[9px] font-mono font-bold text-[#00e5c3]">
                            9:15 AM LIVE
                          </span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.bannerImg}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = '/Rohit.png';
                        }}
                      />
                    )}

                    {/* Optional Top-Left Brand Accent Dot (matching IGNITE 1.0 video card) */}
                    {item.accentDot && (
                      <div className="absolute top-2.5 left-2.5 z-10 w-6 h-6 rounded-lg bg-gradient-to-br from-[#ff5722] to-[#E10600] border border-white/30 flex items-center justify-center shadow-md">
                        <span className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    )}

                    {/* LIVE BADGE for Course 1, COMING SOON Badge for all others */}
                    {item.isLive ? (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-black text-[10px] font-bold shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          <span className="text-red-600 font-extrabold font-mono tracking-wider">LIVE</span>
                        </span>
                      </div>
                    ) : (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-extrabold font-mono tracking-wider shadow-lg">
                          COMING SOON
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Optional Badge & Company Subtitle (e.g. IGNITE 1.0 / IGNITE 2.0) */}
                  {(item.badgeText || item.companySub) && (
                    <div className="mb-2 space-y-1">
                      {item.badgeText && (
                        <span className="inline-block px-2 py-0.5 rounded-full bg-[#5b4bff]/15 border border-[#5b4bff]/35 text-[#a59dff] text-[9.5px] font-mono font-bold uppercase tracking-wider">
                          {item.badgeText}
                        </span>
                      )}
                      {item.companySub && (
                        <p className="text-[9px] font-mono font-semibold uppercase tracking-widest text-neutral-400">
                          {item.companySub}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Course Title directly below banner */}
                  <h3 
                    onClick={() => onSelectCourse(course)}
                    className={`font-bold text-white font-display leading-snug cursor-pointer group-hover:text-[#7c70ff] transition-colors mb-3 ${
                      item.showFullTitle
                        ? 'text-sm sm:text-[15px]'
                        : 'text-[15px] sm:text-base line-clamp-2 min-h-[2.6rem]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Horizontal Divider + TOPICS / PRICE 2-Column Block (Exact Match to Video) */}
                  <div className="border-t border-white/10 pt-3 mb-4">
                    <div className="grid grid-cols-12 gap-2.5 items-start">
                      
                      {/* Left Column: TOPICS */}
                      <div className="col-span-7">
                        <span className="text-[9.5px] font-mono font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
                          TOPICS
                        </span>
                        <div className="flex flex-col items-start gap-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-full text-[10.5px] font-medium text-neutral-200 border border-white/15 bg-white/[0.04] leading-snug whitespace-nowrap max-w-full truncate"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: PRICE */}
                      <div className="col-span-5 flex flex-col items-start">
                        <span className="text-[9.5px] font-mono font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
                          PRICE
                        </span>

                        {item.price ? (
                          <div className="flex flex-col items-start">
                            <div className="flex items-baseline gap-1.5 flex-wrap font-mono">
                              <span className="text-lg sm:text-xl font-extrabold text-[#10e8b8] leading-none">
                                ₹{item.price.toLocaleString('en-IN')}
                              </span>
                              {item.originalPrice && (
                                <span className="text-[10px] line-through text-neutral-500 font-mono">
                                  ₹{item.originalPrice.toLocaleString('en-IN')}
                                </span>
                              )}
                            </div>

                            {item.discountPct && (
                              <div className="mt-2.5 w-10 h-10 rounded-full bg-white/[0.04] border border-white/20 flex flex-col items-center justify-center text-[9px] font-extrabold font-mono leading-tight text-white shadow-inner">
                                <span>{item.discountPct}</span>
                                <span className="text-[7.5px] text-neutral-300 font-semibold">OFF</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-xs italic font-medium text-neutral-300 mt-1">
                            Course page par
                          </span>
                        )}
                      </div>

                    </div>
                  </div>
                </div>

                {/* Bottom Button Row: Vibrant Indigo Pill 'Check Course →' + Dark Pill 'Syllabus' */}
                <div className="pt-1 flex items-center gap-2.5">
                  <MagneticButton
                    onClick={() => onSelectCourse(course)}
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                    text="Check Course"
                    glow={false}
                    className="flex-1 !rounded-full !py-2 !bg-gradient-to-r !from-[#5b4bff] !to-[#4338ca] hover:!from-[#695aff] hover:!to-[#4f46e5] !border-indigo-400/30 shadow-lg shadow-[#5346ff]/30 !text-xs !font-bold"
                  />

                  <MagneticButton
                    onClick={() => onViewSyllabus(course)}
                    variant="ghost"
                    size="sm"
                    icon={<FileText className="w-3.5 h-3.5 text-neutral-300" />}
                    iconPosition="right"
                    text="Syllabus"
                    className="!rounded-full !py-2 !px-3.5 !bg-[#1a1a22] hover:!bg-[#242430] border border-white/15 !text-neutral-200 hover:!text-white !text-xs"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            COMPARISON SECTION (Exact matching Video 20261106-1501-44.8191487_302b3e4d.mp4 00:04 - 00:05)
            ========================================================================= */}
        <div className="mt-28 sm:mt-32 pt-8">
          {/* Comparison Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff5722] text-xs font-mono font-bold tracking-widest uppercase">
              : COMPARISON :
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
              What Sets TheCodeSpark Technologies Private Limited <span className="text-[#ff5722] italic font-normal">*Apart*</span> From Other Coders
            </h2>
          </div>

          {/* Comparison 2-Column Container */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#08080c] border border-white/10 p-4 sm:p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: TheCodeSpark Coding School (Green Glowing Border) */}
              <div className="rounded-2xl p-6 sm:p-7 bg-[#0b0c10] border border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.15)] space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="h-9 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <img
                      src={brandLogo}
                      onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                      alt="TheCodeSpark Technologies Private Limited"
                      className="h-6 w-auto object-contain filter drop-shadow"
                    />
                  </div>
                  <div className="border-l border-white/20 pl-3">
                    <span className="text-sm sm:text-base font-bold text-white font-display block leading-tight">
                      TheCodeSpark Technologies Private Limited
                    </span>
                    <span className="text-xs text-neutral-400 font-mono block">
                      Coding School &amp; Accelerator
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    'Highly Affordable, No Quality Cuts',
                    'Project-Based, Skill-First Learning',
                    'Continuously Updated With Industry Trends',
                    'Internal Hackathons, Challenges & Face-Offs',
                    'Industry-Relevant, Job-Oriented Curriculum'
                  ].map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Others */}
              <div className="rounded-2xl p-6 sm:p-7 bg-[#0a0a0d] border border-white/5 space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                    <Layers className="w-5 h-5 text-neutral-400" />
                  </div>
                  <span className="text-base font-bold text-neutral-300 font-display">
                    Others
                  </span>
                </div>

                <ul className="space-y-4">
                  {[
                    'High Fees With Compromised Quality',
                    'Theory-Centric Learning',
                    'Outdated, Static Curriculum',
                    'No Competitive Learning Environment',
                    'Limited Practical Exposure'
                  ].map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400">
                      <XCircle className="w-4 h-4 text-red-500/80 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            FAQS SECTION (Exact matching Video 20261106-1501-44.8191487_302b3e4d.mp4 00:06 - 00:07)
            ========================================================================= */}
        <div className="mt-28 sm:mt-32">
          {/* FAQ Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff5722] text-xs font-mono font-bold tracking-widest uppercase">
              : FAQS :
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-neutral-400">
              Find answers to common questions about our training programs, certifications, and more
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#0c0c11] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-display">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#ff5722]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans border-t border-white/5 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CTA BANNER (Exact matching Video 20261106-1501-44.8191487_302b3e4d.mp4 00:08)
            ========================================================================= */}
        <div className="mt-28 sm:mt-32 rounded-3xl p-10 sm:p-16 bg-[#0c0c12] border border-white/10 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle blurred background particles */}
          <div className="absolute inset-0 bg-radial from-[#ff5722]/10 via-transparent to-transparent opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-snug">
              Transform Your Learning Journey<br />
              Into A Career Breakthrough With<br />
              <span className="text-[#ff5722] border border-[#ff5722]/30 px-3 py-1 rounded-xl bg-[#ff5722]/10 inline-block mt-2">
                TheCodeSpark
              </span>
            </h2>

            <div className="pt-2">
              <button
                onClick={() => {
                  try {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } catch {
                    // fallback
                  }
                }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d84414] via-[#e24817] to-[#ea580c] hover:from-[#c23b0f] hover:to-[#d84414] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#d84414]/30 hover:shadow-2xl hover:shadow-[#d84414]/40 active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Courses →</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
