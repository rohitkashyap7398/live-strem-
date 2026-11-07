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
  // Exact 5-6 cards structure matching Video 20261106-1501-44.8191487_302b3e4d.mp4
  const catalogCards = [
    {
      id: 'ignite-3-live',
      targetCourse: COURSES[2] || COURSES[0], // IGNITE 3.0 / Data Analytics & 3.0 Job Ready Cohort
      dots: true,
      bannerImg: '/course_banners/banner_cohort3.png',
      isLive: true,
      tags: ['Product Building', 'Community Access', 'Gamified Learning'],
      title: '3.0 Job Ready AI Powered Cohort',
      price: null,
      originalPrice: null,
      discount: null,
    },
    {
      id: 'data-science-genai',
      targetCourse: COURSES[2] || COURSES[1], // Data Science & Analytics with GenAI
      dots: true,
      bannerImg: '/course_banners/banner_datascience.png',
      isLive: false,
      tags: ['Machine Learning', 'Deep Learning', 'Gen-AI'],
      title: 'Data Science and Analytics with GenAI',
      price: 9799,
      originalPrice: 19999,
      discount: '51% OFF',
    },
    {
      id: 'complete-data-analytics',
      targetCourse: COURSES[2] || COURSES[0], // Complete Data Analytics
      dots: true,
      bannerImg: '/course_banners/banner_dataanalytics.png',
      isLive: false,
      tags: ['Python', 'Power BI / Tableau', 'Data-Analysis'],
      title: 'Complete Data Analytics',
      price: 4999,
      originalPrice: 9999,
      discount: '50% OFF',
    },
    {
      id: 'ignite-1-cohort-2',
      targetCourse: COURSES[0], // 2.0 Job Ready AI Powered Cohort
      dots: true,
      bannerImg: '/course_banners/banner_cohort2.png',
      isLive: true,
      tags: ['Job Ready', 'MERN Stack', 'DSA With JS'],
      title: '2.0 Job Ready AI Powered Cohort',
      price: 5999,
      originalPrice: 11998,
      discount: '50% OFF',
    },
    {
      id: 'java-dsa-domination',
      targetCourse: COURSES[3] || COURSES[0], // Java & DSA Domination
      dots: true,
      bannerImg: '/course_banners/banner_javadsa.png',
      isLive: false,
      tags: ['JAVA', 'Logic Building', 'Deep Learning'],
      title: 'Java & DSA Domination',
      price: 4236,
      originalPrice: 10000,
      discount: '58% OFF',
    },
    {
      id: 'ignite-2-flagship',
      targetCourse: COURSES[1] || COURSES[0], // IGNITE 2.0 Flagship
      dots: true,
      bannerImg: '/course_banners/banner_cohort2.png',
      isLive: true,
      tags: ['Loveable Ai', 'Pixxo (ImageKit)', 'DSA in Java'],
      title: 'Job Ready AI Powered Cohort: Complete Web Dev + GenAI + DSA',
      price: 7999,
      originalPrice: 16999,
      discount: '53% OFF',
    }
  ];

  // FAQs state for exact matching accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are TheCodeSpark courses suitable for beginners?',
      a: 'Yes, TheCodeSpark provides beginner-friendly courses along with advanced concepts. Our courses are designed in a way that suits beginners as well as professionals who want to learn advance concepts.'
    },
    {
      q: 'Does TheCodeSpark Coding School provide placement assistance?',
      a: 'Yes, we provide dedicated placement assistance including mock interviews, resume reviews, portfolio preparation, direct company referrals, and access to our 80+ hiring partner network.'
    },
    {
      q: 'What programming languages and technologies are covered in the courses?',
      a: 'We cover modern full-stack development (React 19, Next.js, Node.js, Express, MongoDB, PostgreSQL), Generative AI (LLMs, LangChain, RAG, Multi-Agent systems), Java & JavaScript DSA, and Cloud DevOps.'
    },
    {
      q: 'Are the classes live or pre-recorded, and can I access recordings later?',
      a: 'All our flagship cohorts are conducted through daily live interactive sessions. Every session is recorded in HD and uploaded to your dashboard with lifetime access and source code notes.'
    },
    {
      q: 'Do students get real-world project experience during the course?',
      a: 'Yes! You build production-grade scalable systems (such as Loveable AI builder, Pixxo media transformation engine, full-stack SaaS apps, and enterprise ETL data pipelines) deployed on AWS.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#070709] min-h-screen text-[#f3f4f6] relative overflow-hidden">
      
      {/* Background subtle radial glow behind heading */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#d84414]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Heading matching Video 20261106-1501-44.8191487_302b3e4d.mp4 (00:00) */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
            Level Up Your Coding Skills With<br className="hidden sm:inline" /> Expert-Led Courses
          </h1>
        </div>

        {/* 6-CARD GRID (Exact layout matching Video 20261106-1501-44.8191487_302b3e4d.mp4 00:00 - 00:03) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {catalogCards.map((item) => {
            const course = item.targetCourse;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl sm:rounded-3xl bg-[#0c0c11] border border-white/10 hover:border-white/20 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group shadow-2xl hover:shadow-[0_20px_50px_-15px_rgba(216,68,20,0.15)] relative"
              >
                <div>
                  {/* Top Mac Terminal 3 Dots (Red, Yellow, Green) exactly matching video */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Top Graphic Art Banner */}
                  <div 
                    onClick={() => onSelectCourse(course)}
                    className="relative rounded-xl overflow-hidden aspect-[16/9.5] bg-[#14141c] mb-5 cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 select-none shadow-md"
                  >
                    <img
                      src={item.bannerImg}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = '/Rohit.png';
                      }}
                    />

                    {/* LIVE BADGE (White pill with red pulsating dot and red LIVE text, exact matching video) */}
                    {item.isLive && (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold shadow-lg">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                          <span className="text-red-600 font-extrabold font-mono tracking-wider">LIVE</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tag Pills Row exactly matching video */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium text-neutral-300 border border-white/15 bg-white/[0.03] whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Course Title matching video */}
                  <h3 
                    onClick={() => onSelectCourse(course)}
                    className="text-xl sm:text-2xl font-bold text-white font-display leading-snug cursor-pointer group-hover:text-[#ff5722] transition-colors mb-3 line-clamp-2"
                  >
                    {item.title}
                  </h3>

                  {/* Price Row (If available in video: Price Rs.9799 Rs.19999 51% OFF) */}
                  {item.price && (
                    <div className="flex items-center justify-between pt-1 mb-4">
                      <div className="flex items-baseline gap-2 font-mono">
                        <span className="text-white text-base font-semibold">Price</span>
                        <span className="text-xl sm:text-2xl font-bold text-[#ff5722]">
                          Rs.{item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs line-through text-neutral-500 font-mono">
                            Rs.{item.originalPrice}
                          </span>
                        )}
                      </div>
                      {item.discount && (
                        <span className="px-2 py-0.5 rounded bg-white text-black text-[10px] font-bold font-mono uppercase tracking-wider shadow-xs">
                          {item.discount}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Button Row: Check Course → matching video */}
                <div className="pt-3 flex items-center justify-between gap-2 border-t border-white/5">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-[#ff5722] hover:border-[#ff5722] text-white text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md group-hover:border-[#ff5722]"
                  >
                    <span>Check Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Quick Syllabus Trigger */}
                  <button
                    onClick={() => onViewSyllabus(course)}
                    className="px-3 py-2 rounded-xl border border-white/10 hover:border-white/25 text-neutral-400 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#ff5722]" />
                    <span className="hidden sm:inline text-[11px]">Syllabus</span>
                  </button>
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
              What Sets TheCodeSpark <span className="text-[#ff5722] italic font-normal">*Apart*</span> From Other Coders
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
                      alt="TheCodeSpark"
                      className="h-6 w-auto object-contain filter drop-shadow"
                    />
                  </div>
                  <div className="border-l border-white/20 pl-3">
                    <span className="text-base font-bold text-white font-display block leading-tight">
                      TheCodeSpark
                    </span>
                    <span className="text-xs text-neutral-400 font-mono block">
                      Coding School
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
              Frequently Asked Questions From<br className="hidden sm:inline" /> Our Students
            </h2>
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
