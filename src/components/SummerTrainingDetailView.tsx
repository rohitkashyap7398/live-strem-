import React, { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Minus,
  Percent,
  Phone,
  Plus,
  QrCode,
  Rocket,
  Users,
  X,
} from 'lucide-react';
import brandLogo from '../assets/logo.png';
import rohitPhoto from '../assets/Rohit.png';
import { Course, COURSES } from '../data/coursesData';
import {
  BATCH_TIMINGS,
  DAY_BY_DAY_ROADMAP,
  DELIVERABLES_KIT,
  ELIGIBILITY_MATRIX,
  SUMMER_FAQS,
  SUMMER_TRACKS,
  TRAINING_MODES,
} from '../data/summerTrainingData';
import { CourseReviewWall } from './CourseReviewWall';

interface SummerTrainingDetailViewProps {
  course: Course;
  onSelectAnotherCourse: (course: Course) => void;
  onRequestCallback: () => void;
  onBuyNow: (course: Course) => void;
  onViewSyllabus: (course: Course) => void;
  onNavigateCourses: () => void;
  onNavigateHome: () => void;
}

type SummerFaqCategory =
  | 'All'
  | 'Eligibility & NOC'
  | 'Tracks & Projects'
  | 'Report & Certificates'
  | 'Campus & Fees';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SummerTrainingDetailView: React.FC<SummerTrainingDetailViewProps> = ({
  course,
  onSelectAnotherCourse,
  onRequestCallback,
  onBuyNow,
  onViewSyllabus,
  onNavigateCourses,
  onNavigateHome,
}) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(SUMMER_TRACKS[0].id);
  const [selectedSlotIdx, setSelectedSlotIdx] = useState<number>(0);
  const [openModuleId, setOpenModuleId] = useState<number | null>(
    course.modules[0]?.id ?? 1
  );
  const [faqCategory, setFaqCategory] = useState<SummerFaqCategory>('All');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  const activeTrack =
    SUMMER_TRACKS.find((t) => t.id === selectedTrackId) || SUMMER_TRACKS[0];

  const uploadedLogo =
    '/assets/aistudio/tcs_logo_cropped-removebg-preview_8334b4c5.png';
  const posterImg =
    course.posterImg ||
    '/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png';

  const filteredFaqs =
    faqCategory === 'All'
      ? SUMMER_FAQS
      : SUMMER_FAQS.filter((f) => f.category === faqCategory);

  const handleClaimDiscount = () => {
    setIsDiscountModalOpen(false);
    onBuyNow(course);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#FFFFFF] text-[#0D1410] min-h-screen selection:bg-[#9BFF6E] selection:text-[#062B1A] font-sans overflow-x-clip">
        {/* Top Breadcrumb & Cohort Switcher */}
        <div className="bg-[#F8FAFC] border-b border-black/10 py-2.5 px-4 sticky top-18 z-30">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-xs text-[#4B5563] font-mono whitespace-nowrap">
              <button
                onClick={onNavigateHome}
                className="hover:text-[#062B1A] font-medium transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-black/30">/</span>
              <button
                onClick={onNavigateCourses}
                className="hover:text-[#062B1A] font-medium transition-colors cursor-pointer"
              >
                Courses
              </button>
              <span className="text-black/30">/</span>
              <span className="text-[#062B1A] font-bold">45-DAY SUMMER TRAINING</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-mono text-[#6B7280] uppercase whitespace-nowrap mr-1 hidden sm:inline">
                All Programs:
              </span>
              {COURSES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelectAnotherCourse(c)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    c.id === course.id
                      ? 'bg-[#062B1A] text-[#9BFF6E] font-bold shadow-xs'
                      : 'bg-black/5 text-[#4B5563] hover:text-[#062B1A] hover:bg-black/10'
                  }`}
                >
                  {c.codeName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================================
            1. HERO SECTION + TRUST SEAL BAR
            ===================================================================== */}
        <section className="relative bg-gradient-to-b from-white via-[#F9FCFA] to-[#E6F8EC] border-b border-black/10 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 lg:pt-14 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Hero Column */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6 space-y-5"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5563] font-medium">
                  <span className="px-2.5 py-1 rounded-md bg-[#062B1A] text-[#9BFF6E] font-mono text-[11px] font-bold">
                    45 DAYS INDUSTRIAL TRAINING
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#062B1A]">
                    Lucknow Campus + Live Online
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight leading-[1.06] [text-wrap:balance]">
                  45-Day Summer Industrial Training Built for Real Engineers
                </h1>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl">
                  Conducted directly by{' '}
                  <span className="font-semibold text-[#062B1A]">
                    TheCodeSpark Technologies Private Limited
                  </span>{' '}
                  under <span className="font-semibold text-[#062B1A]">Mr. Rohit Kashyap</span>.
                  Choose from 5 live engineering tracks, build{' '}
                  <span className="font-semibold text-[#0A140F]">
                    2 Minor + 1 Major Live Hosted Project
                  </span>
                  , and graduate with a{' '}
                  <span className="font-semibold text-[#0A140F]">
                    Hardbound College Report, 1-Year Free Cloud Hosting &amp; Dual QR-Verified Certificates
                  </span>
                  .
                </p>

                {/* Price + Group Offer */}
                <div className="rounded-2xl bg-white/90 border border-[#062B1A]/15 p-4 space-y-2 max-w-lg shadow-xs">
                  <div className="flex flex-wrap items-baseline gap-2.5 font-mono tabular-nums">
                    <span className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold">
                      All-Inclusive Fee
                    </span>
                    <span className="text-3xl font-black text-[#062B1A]">
                      Rs.{course.price.toLocaleString('en-IN')}
                    </span>
                    {course.originalPrice && (
                      <span className="text-sm text-[#9CA3AF] line-through">
                        Rs.{course.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-xs text-[#047857] font-bold">
                      (50% Merit Scholarship)
                    </span>
                  </div>
                  <div className="text-[11px] text-[#4B5563] flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="inline-flex items-center gap-1 text-[#062B1A] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                      No extra fee for Report, Synopsis &amp; Certificates
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#ff5722] font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      Extra Group Discount (3+ Friends)
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsDiscountModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-sm transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Enroll in 45-Day Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onViewSyllabus(course)}
                    className="px-5 py-3.5 rounded-xl bg-[#062B1A] hover:bg-[#0D3D27] text-white text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-[#9BFF6E]" />
                    <span>45-Day Syllabus</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onRequestCallback}
                    className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#F3F4F6] border border-black/15 text-[#0D1410] text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Get NOC / Campus Call
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Hero Column: Poster + Live 45-Day Program Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-3xl bg-white border border-black/10 p-4 sm:p-6 shadow-[0_20px_50px_-20px_rgba(6,43,26,0.18)]">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                    {/* Poster */}
                    <div className="sm:col-span-5 rounded-2xl bg-[#F8FAFC] border border-black/10 p-3 flex flex-col justify-between">
                      <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#180c24] border border-black/5">
                        <img
                          src={posterImg}
                          alt="TheCodeSpark 45-Day Summer Industrial Training"
                          onError={(e) => {
                            e.currentTarget.src = rohitPhoto;
                          }}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-[#4B5563]">
                        <span className="font-bold text-[#062B1A]">45 DAYS • 2026</span>
                        <span className="text-[#ff5722] font-bold">ADMISSIONS OPEN</span>
                      </div>
                    </div>

                    {/* Dark Program Blueprint Card */}
                    <div className="sm:col-span-7 rounded-2xl bg-[#062B1A] text-white p-4 sm:p-5 flex flex-col justify-between font-mono relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="text-[11px] text-[#9BFF6E] font-bold">
                          summer-training · 45d
                        </span>
                        <span className="text-[10px] text-white/70">120+ LAB HRS</span>
                      </div>

                      <div className="space-y-2.5 my-4 text-[11px]">
                        {[
                          { label: 'DAYS 01–08', val: 'CORE + GIT WORKFLOW', accent: true },
                          { label: 'DAYS 09–22', val: 'TRACK + MINOR PROJ #1', accent: true },
                          { label: 'DAYS 23–34', val: 'GENAI + MINOR PROJ #2', accent: false },
                          { label: 'DAYS 35–45', val: 'LIVE HOST + REPORT + VIVA', accent: false },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center justify-between gap-2 py-2 px-2.5 rounded-lg bg-white/5 border border-white/10"
                          >
                            <span className="text-white/70 shrink-0">{item.label}</span>
                            <span
                              className={`truncate font-bold ${
                                item.accent ? 'text-[#9BFF6E]' : 'text-white'
                              }`}
                            >
                              {item.val}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/15 space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between text-white/80">
                          <span>Campus:</span>
                          <span className="text-white font-semibold">Gomti Nagar, Lucknow</span>
                        </div>
                        <div className="flex items-center justify-between text-white/80">
                          <span>Hosting + Report:</span>
                          <span className="text-[#9BFF6E] font-bold">100% Included</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Trust Strip */}
          <div className="border-t border-black/10 bg-white/85 backdrop-blur-xs">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
                <div className="lg:col-span-1 text-xs text-[#374151] leading-snug font-semibold">
                  AKTU · BTEUP · Lucknow University &amp; AICTE Training Format
                </div>

                {[
                  { badge: '45D', title: '45 Days Intensive', sub: '120+ Guided Lab Hours' },
                  { badge: '05', title: '5 Industry Tracks', sub: 'MERN, Python, Java, Flutter, BI' },
                  { badge: '03', title: '2 Minor + 1 Major', sub: '1-Year Free Cloud Hosting' },
                  { badge: '2X', title: 'Dual QR Cert + File', sub: 'Hardbound Report & Synopsis' },
                ].map((seal) => (
                  <div key={seal.title} className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border-2 border-[#062B1A] bg-[#EAF7EE] flex items-center justify-center shrink-0 text-xs font-black font-mono text-[#062B1A]">
                      {seal.badge}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0A140F]">{seal.title}</div>
                      <div className="text-[11px] text-[#6B7280]">{seal.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. INTERACTIVE 5-TRACK SELECTOR (PICK YOUR SPECIALIZATION)
            ===================================================================== */}
        <section className="py-20 bg-white border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff5722] font-bold">
                CHOOSE YOUR 45-DAY SPECIALIZATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight [text-wrap:balance]">
                5 Industry Tracks. Built Around Real Deployment.
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563]">
                Unlike institutes teaching outdated Bootstrap 3 or localhost slides, every TheCodeSpark Summer Training track includes modern frameworks, real databases, and cloud hosting.
              </p>
            </div>

            {/* Track Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {SUMMER_TRACKS.map((track) => {
                const isActive = track.id === selectedTrackId;
                return (
                  <button
                    key={track.id}
                    onClick={() => setSelectedTrackId(track.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#062B1A]'
                        : 'bg-[#F3F4F6] text-[#4B5563] hover:text-[#062B1A] hover:bg-[#E5E7EB]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="summer-track-pill"
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        className="absolute inset-0 rounded-xl bg-[#9BFF6E] shadow-xs border border-[#062B1A]/15"
                      />
                    )}
                    <span className="relative z-10">{track.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Track Interactive Blueprint */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                className="rounded-3xl bg-[#FAFBFB] border border-black/10 p-6 sm:p-8 lg:p-10 shadow-sm space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Track Info + Tech Stack + Day Plan */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#062B1A] text-[#9BFF6E] text-[10px] font-mono font-bold tracking-wider">
                        {activeTrack.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0A140F] font-display">
                        {activeTrack.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563]">
                        <span className="font-semibold text-[#062B1A]">Best For: </span>
                        {activeTrack.idealFor}
                      </p>
                    </div>

                    {/* Stack Chips */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B7280] font-bold">
                        Technologies Covered in 45 Days
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeTrack.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-white border border-black/10 text-xs font-mono font-semibold text-[#062B1A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 4-Sprint 45-Day Plan */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeTrack.dayPlan.map((sprint) => (
                        <div
                          key={sprint.days}
                          className="p-4 rounded-2xl bg-white border border-black/10 space-y-1.5"
                        >
                          <div className="text-[11px] font-mono font-bold text-[#ff5722]">
                            {sprint.days}
                          </div>
                          <div className="text-sm font-bold text-[#0A140F] font-display">
                            {sprint.phase}
                          </div>
                          <p className="text-xs text-[#4B5563] leading-relaxed">
                            {sprint.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Minor + Major Live Projects Built in This Track */}
                  <div className="lg:col-span-5 rounded-2xl bg-[#062B1A] text-white p-6 space-y-5 shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3">
                      <span className="text-xs font-mono font-bold text-[#9BFF6E]">
                        PROJECTS YOU BUILD &amp; HOST
                      </span>
                      <Rocket className="w-4 h-4 text-[#9BFF6E]" />
                    </div>

                    {/* Minor Projects */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-mono text-white/60 uppercase">
                        2 Hands-On Minor Projects
                      </div>
                      {activeTrack.minorProjects.map((mp) => (
                        <div
                          key={mp}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#9BFF6E] shrink-0 mt-0.5" />
                          <span>{mp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Major Live Project */}
                    <div className="p-4 rounded-2xl bg-[#9BFF6E]/10 border border-[#9BFF6E]/35 space-y-2.5">
                      <div className="text-[10px] font-mono font-bold text-[#9BFF6E] uppercase tracking-wider">
                        1 Major Live Hosted Capstone
                      </div>
                      <div className="text-base font-bold text-white font-display">
                        {activeTrack.majorProject.name}
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {activeTrack.majorProject.desc}
                      </p>
                      <div className="pt-2 border-t border-white/15 space-y-1.5">
                        {activeTrack.majorProject.deliverables.map((del) => (
                          <div
                            key={del}
                            className="flex items-start gap-2 text-[11px] text-[#9BFF6E]"
                          >
                            <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setIsDiscountModalOpen(true)}
                      className="w-full py-3 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Select {activeTrack.shortName} &amp; Enroll</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* =====================================================================
            3. DAY 1 TO DAY 45 EXECUTION ROADMAP
            ===================================================================== */}
        <section className="py-20 bg-[#FAFBFB] border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold">
                STRUCTURED 45-DAY EXECUTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight [text-wrap:balance]">
                From Day 1 Setup to Day 45 Viva Defense
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563]">
                Every single week of your 45-Day Summer Training has clear daily lab milestones — so you never waste a week on theory without shipping code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {DAY_BY_DAY_ROADMAP.map((phase, idx) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.06, duration: 0.45, ease: EASE_OUT_EXPO }}
                  className={`rounded-2xl p-5 flex flex-col justify-between space-y-4 border ${
                    idx === 3 || idx === 4
                      ? 'bg-[#062B1A] text-white border-[#062B1A] shadow-lg'
                      : 'bg-white text-[#0A140F] border-black/10'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          idx >= 3
                            ? 'bg-[#9BFF6E] text-[#062B1A]'
                            : 'bg-[#EAF7EE] text-[#062B1A]'
                        }`}
                      >
                        {phase.days}
                      </span>
                      <span
                        className={`text-[10px] font-mono ${
                          idx >= 3 ? 'text-white/60' : 'text-[#6B7280]'
                        }`}
                      >
                        {phase.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-display leading-snug">
                      {phase.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        idx >= 3 ? 'text-white/80' : 'text-[#4B5563]'
                      }`}
                    >
                      {phase.summary}
                    </p>
                  </div>

                  <div
                    className={`pt-3 border-t space-y-1.5 ${
                      idx >= 3 ? 'border-white/15' : 'border-black/10'
                    }`}
                  >
                    {phase.outcomes.map((out) => (
                      <div key={out} className="flex items-start gap-1.5 text-[11px]">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            idx >= 3 ? 'text-[#9BFF6E]' : 'text-[#059669]'
                          }`}
                        />
                        <span className={idx >= 3 ? 'text-white/90' : 'text-[#374151]'}>
                          {out}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. ELIGIBILITY & ACCEPTED UNIVERSITIES MATRIX
            ===================================================================== */}
        <section className="py-20 bg-white border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5722] font-bold">
                  WHO CAN JOIN &amp; COLLEGE APPROVAL
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0A140F] font-display tracking-tight">
                  Designed for B.Tech, Diploma, BCA, MCA &amp; B.Sc Students
                </h2>
              </div>
              <button
                onClick={onRequestCallback}
                className="px-4 py-2.5 rounded-xl bg-[#EAF7EE] hover:bg-[#D5F0DD] text-[#062B1A] text-xs font-bold transition-colors cursor-pointer self-start md:self-auto shrink-0 inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Instant College NOC Letter</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ELIGIBILITY_MATRIX.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl bg-[#FAFBFB] border border-black/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#062B1A]/35 transition-colors"
                >
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#062B1A] text-[#9BFF6E] flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A140F] font-display">
                      {item.degree}
                    </h3>
                    <p className="text-xs font-semibold text-[#059669]">{item.branches}</p>
                    <p className="text-xs text-[#4B5563]">{item.years}</p>
                  </div>
                  <div className="pt-3 border-t border-black/10 text-[11px] font-mono text-[#062B1A] font-semibold">
                    ✓ {item.compliance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. DAY-45 OFFICIAL DELIVERABLES KIT (WHAT EVERY TRAINEE RECEIVES)
            ===================================================================== */}
        <section className="py-20 bg-[#062B1A] text-white border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9BFF6E] font-bold">
                  EVERYTHING INCLUDED IN RS.3,999
                </span>
                <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight [text-wrap:balance]">
                  What You Walk Away With on Day 45
                </h2>
                <p className="text-sm sm:text-base text-white/75">
                  Zero hidden fees for reports, hosting, or certificates. Your college viva submission and recruiter portfolio are 100% covered.
                </p>
              </div>
              <button
                onClick={() => setIsDiscountModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold transition-colors cursor-pointer shrink-0 self-start lg:self-auto"
              >
                Book Your 45-Day Seat →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {DELIVERABLES_KIT.map((kit, idx) => (
                <motion.div
                  key={kit.tag}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.06, duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="rounded-2xl bg-white/5 border border-white/15 p-6 space-y-3 hover:border-[#9BFF6E]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#9BFF6E] tracking-wider">
                      {kit.tag}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#9BFF6E]/15 text-[#9BFF6E]">
                      INCLUDED
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{kit.title}</h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">{kit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. OFFLINE LUCKNOW CAMPUS VS LIVE HYBRID + BATCH TIMINGS
            ===================================================================== */}
        <section className="py-20 bg-white border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff5722] font-bold">
                FLEXIBLE LEARNING MODES &amp; SLOTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A140F] font-display tracking-tight">
                Join Offline in Lucknow or Live Interactive Online
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563]">
                Whether you stay in Lucknow (with PG/Hostel support near our campus) or join live from your college hostel anywhere in India, you get the exact same mentor attention.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {TRAINING_MODES.map((mode) => (
                <div
                  key={mode.id}
                  className="rounded-3xl bg-[#FAFBFB] border border-black/10 p-7 space-y-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg bg-[#062B1A] text-[#9BFF6E] text-[10px] font-mono font-bold">
                      {mode.badge}
                    </span>
                    {mode.id === 'offline' ? (
                      <Building2 className="w-5 h-5 text-[#062B1A]" />
                    ) : (
                      <Laptop className="w-5 h-5 text-[#062B1A]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A140F] font-display">
                      {mode.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5563] mt-1.5 leading-relaxed">
                      {mode.subtitle}
                    </p>
                  </div>
                  <div className="space-y-2.5 pt-2 border-t border-black/10">
                    {mode.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Batch Slot Selector */}
            <div className="rounded-3xl bg-[#F8FAFC] border border-black/10 p-6 sm:p-8 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono font-bold text-[#059669] uppercase">
                    PICK YOUR PREFERRED DAILY BATCH TIMING (MON – SAT)
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A140F] font-display mt-0.5">
                    4 Daily Shifts Available for 45-Day Summer Training
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#062B1A] font-semibold">
                  Selected: {BATCH_TIMINGS[selectedSlotIdx].slot}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {BATCH_TIMINGS.map((b, idx) => {
                  const active = idx === selectedSlotIdx;
                  return (
                    <button
                      key={b.slot}
                      onClick={() => setSelectedSlotIdx(idx)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        active
                          ? 'bg-[#062B1A] text-white border-[#062B1A] shadow-md'
                          : 'bg-white text-[#0A140F] border-black/10 hover:border-[#062B1A]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={active ? 'text-[#9BFF6E] font-bold' : 'text-[#059669] font-bold'}>
                          {b.slot}
                        </span>
                        <Clock className={`w-3.5 h-3.5 ${active ? 'text-[#9BFF6E]' : 'text-[#6B7280]'}`} />
                      </div>
                      <div className="text-sm font-bold mt-1.5 font-mono tabular-nums">
                        {b.time}
                      </div>
                      <div className={`text-[11px] mt-1 ${active ? 'text-white/75' : 'text-[#6B7280]'}`}>
                        {b.mode}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. THECODESPARK VS TRADITIONAL TRAINING INSTITUTES
            ===================================================================== */}
        <section className="py-20 bg-[#FAFBFB] border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A140F] font-display tracking-tight">
                Why Students Switch to TheCodeSpark for Summer Training
              </h2>
              <p className="text-sm text-[#4B5563]">
                Real engineering mentorship vs crowded legacy coaching batches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch rounded-3xl overflow-hidden border border-black/10 shadow-sm">
              <div className="bg-white p-6 sm:p-8 space-y-5 border-b md:border-b-0 md:border-r border-black/10">
                <div className="text-sm font-bold text-[#4B5563] font-display pb-3 border-b border-black/10">
                  Traditional Lucknow Institutes
                </div>
                <div className="space-y-3.5 text-xs text-[#4B5563]">
                  {[
                    'Crowded 100–150 student seminar halls',
                    'Old HTML/Bootstrap/jQuery slide templates',
                    'Copied college projects running only on localhost',
                    'Extra charges or delayed project files & reports',
                    'No Generative AI APIs or modern React/Spring stack',
                  ].map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#062B1A] text-white p-6 sm:p-8 space-y-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-base font-black text-[#9BFF6E] font-display">
                    TheCodeSpark (45 Days)
                  </span>
                  <span className="text-[10px] font-mono text-[#9BFF6E] font-bold">
                    INDUSTRY STANDARD
                  </span>
                </div>
                <div className="space-y-3.5 text-xs sm:text-sm text-white/95">
                  {[
                    'Small 1:15 mentor lab ratio + Founder code reviews',
                    '5 Modern AI-Ready Stacks (MERN+AI, Python, Java, Flutter, BI)',
                    '2 Minor + 1 Major Live Hosted Project (1-Yr Free Hosting)',
                    'Hardbound College Report + Dual QR Certificates included',
                    'Paid Apprenticeship fast-track & ATS placement prep',
                  ].map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#9BFF6E] text-[#062B1A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 space-y-5 border-t md:border-t-0 md:border-l border-black/10">
                <div className="text-sm font-bold text-[#4B5563] font-display pb-3 border-b border-black/10">
                  Random YouTube Playlists
                </div>
                <div className="space-y-3.5 text-xs text-[#4B5563]">
                  {[
                    'No valid 45-Day NOC or Industrial Certificate for college',
                    'No Hardbound Project Report or Viva Synopsis',
                    'Zero doubt resolution when APIs or bugs fail',
                    'Tutorial hell with unfinished GitHub repositories',
                    'No mock interviews or peer coding accountability',
                  ].map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            8. 7-MODULE CURRICULUM ACCORDION + DUAL OFFICIAL CERTIFICATE PREVIEW
            ===================================================================== */}
        <section className="py-20 bg-white border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sticky Summary */}
              <div className="lg:col-span-4 rounded-3xl bg-[#062B1A] text-white p-6 sm:p-7 space-y-5 lg:sticky lg:top-28">
                <div>
                  <div className="text-xs font-mono text-[#9BFF6E] font-bold">
                    45-DAY SYLLABUS SUMMARY
                  </div>
                  <h3 className="text-xl font-bold font-display mt-1">
                    7 Modules · 120+ Lab Hours
                  </h3>
                  <p className="text-xs text-white/75 mt-1">
                    {course.prerequisites.level}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono tabular-nums">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-white/60 text-[10px]">DURATION</div>
                    <div className="font-bold text-[#9BFF6E] mt-0.5">45 Days</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-white/60 text-[10px]">LANGUAGE</div>
                    <div className="font-bold text-white mt-0.5">Hinglish</div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-white/15">
                  {course.prerequisites.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#9BFF6E] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onViewSyllabus(course)}
                  className="w-full py-3 px-4 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Full Interactive Syllabus</span>
                </button>
              </div>

              {/* Right 7 Modules Accordion */}
              <div className="lg:col-span-8 space-y-3">
                {course.modules.map((m) => {
                  const isOpen = openModuleId === m.id;
                  return (
                    <div
                      key={m.id}
                      className="rounded-2xl bg-[#FAFBFB] border border-black/10 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenModuleId(isOpen ? null : m.id)}
                        className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-[#F3F4F6] transition-colors cursor-pointer"
                      >
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono font-bold text-[#059669] block">
                            {m.name}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-[#0A140F] font-display">
                            {m.title}
                          </h4>
                          <p className="text-xs text-[#4B5563] leading-relaxed">{m.desc}</p>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-white border border-black/10 text-[#062B1A] flex items-center justify-center shrink-0 mt-1">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                            className="overflow-hidden border-t border-black/10 bg-white"
                          >
                            <div className="px-5 pb-5 pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {m.topics.map((topic) => (
                                <div
                                  key={topic}
                                  className="flex items-start gap-2 text-xs text-[#374151]"
                                >
                                  <Check className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dual Official Certificate Showcase */}
            <div className="rounded-3xl bg-[#FAFBFB] border border-black/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono font-bold text-[#ff5722]">
                  DUAL QR-VERIFIED CREDENTIALS
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A140F] font-display">
                  Industrial Training + Live Project Certificates
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#4B5563]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>
                      Officially formatted for AKTU, BTEUP, Lucknow University &amp; AICTE credit submission
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>
                      Includes unique QR Verification ID + Live Hosted Project URL on your credential
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>
                      Signed by Mr. Rohit Kashyap, Founder &amp; CEO, TheCodeSpark Technologies Pvt. Ltd.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#062B1A] text-white p-6 sm:p-8 border-4 border-[#EAF7EE] shadow-xl space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={uploadedLogo}
                        onError={(e) => {
                          e.currentTarget.src = brandLogo;
                        }}
                        alt="TheCodeSpark Logo"
                        className="h-7 w-auto object-contain"
                      />
                      <span className="text-xs font-bold tracking-tight">
                        TheCodeSpark Technologies Pvt. Ltd.
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#9BFF6E] font-bold">
                      45-DAY SUMMER TRAINING
                    </span>
                  </div>

                  <div className="space-y-1.5 py-2">
                    <div className="text-2xl font-black font-display tracking-wide text-[#9BFF6E]">
                      INDUSTRIAL TRAINING CERTIFICATE
                    </div>
                    <div className="text-xs text-white/75">
                      This is to certify that
                    </div>
                    <div className="text-xl font-extrabold text-white font-display pt-1">
                      Ananya Verma · B.Tech (CSE)
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed max-w-lg">
                      has successfully completed{' '}
                      <span className="font-semibold text-white">
                        45-Day Summer Industrial Training in {activeTrack.title}
                      </span>{' '}
                      and deployed a production Major Live Project at TheCodeSpark Technologies Private Limited.
                    </p>
                  </div>

                  <div className="flex items-end justify-between pt-3 border-t border-white/15 text-xs">
                    <div>
                      <div className="font-bold">Rohit Kashyap</div>
                      <div className="text-[10px] text-white/70 font-mono">
                        Founder &amp; CEO · TheCodeSpark
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right font-mono">
                        <div className="text-[#9BFF6E] font-bold text-[11px]">
                          Verified #TCS-ST45
                        </div>
                        <div className="text-[10px] text-white/70">QR Authenticated</div>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-white text-[#062B1A] flex items-center justify-center">
                        <QrCode className="w-7 h-7" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            9. STUDENT REVIEWS + SUMMER TRAINING FAQS + FOOTER
            ===================================================================== */}
        <CourseReviewWall course={course} />

        <section className="py-20 bg-[#FAFBFB] border-t border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight leading-[1.08]">
                Summer Training Questions?
                <br />
                Clear Answers.
              </h2>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {(
                  [
                    'All',
                    'Eligibility & NOC',
                    'Tracks & Projects',
                    'Report & Certificates',
                    'Campus & Fees',
                  ] as SummerFaqCategory[]
                ).map((cat) => {
                  const isActive = faqCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setFaqCategory(cat);
                        setOpenFaqIdx(0);
                      }}
                      className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'text-white'
                          : 'bg-white border border-black/10 text-[#4B5563] hover:text-[#062B1A]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="summer-faq-tab"
                          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                          className="absolute inset-0 rounded-xl bg-[#062B1A] shadow-xs"
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-white border border-black/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-semibold text-[#0A140F]">
                        {faq.q}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#F3F4F6] text-[#062B1A] flex items-center justify-center shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
                          className="overflow-hidden border-t border-black/5"
                        >
                          <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Campus & Registration Footer Card */}
        <footer className="bg-white pt-10 pb-8 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-[#062B1A] text-white p-8 sm:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-[#9BFF6E] font-bold">
                    THECODESPARK SUMMER TRAINING DESK
                  </span>
                  <h3 className="text-2xl font-black font-display">
                    Reserve Your 45-Day Batch Today
                  </h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Get instant college NOC letter, choose your specialization track, and lock your 50% scholarship seat at Rs.3,999.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => setIsDiscountModalOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-xs font-bold cursor-pointer transition-colors"
                    >
                      Enroll Now →
                    </button>
                    <button
                      onClick={onRequestCallback}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Campus Inquiry
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-white/80">
                  <div className="text-white font-semibold text-sm mb-2">
                    Lucknow Tech Campus &amp; Helpline
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#9BFF6E] shrink-0" />
                    <a href="tel:+917398839769" className="hover:text-white font-mono">
                      +91 7398839769
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#9BFF6E] shrink-0" />
                    <a
                      href="mailto:thecodespark3464@gmail.com"
                      className="hover:text-white font-mono"
                    >
                      thecodespark3464@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#9BFF6E] shrink-0 mt-0.5" />
                    <span>Gomti Nagar Tech Campus, Lucknow (UP) · Offline + Live Hybrid</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-white/80">
                  <div className="text-white font-semibold text-sm mb-2">
                    Quick Links
                  </div>
                  <button
                    onClick={onNavigateCourses}
                    className="block hover:text-[#9BFF6E] cursor-pointer"
                  >
                    All Programs &amp; Training Tracks
                  </button>
                  <button
                    onClick={() => onViewSyllabus(course)}
                    className="block hover:text-[#9BFF6E] cursor-pointer"
                  >
                    Download 45-Day Syllabus Brochure
                  </button>
                  <button
                    onClick={onNavigateHome}
                    className="block hover:text-[#9BFF6E] cursor-pointer"
                  >
                    Back to Home
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-white/60">
                <p>© 2026 TheCodeSpark Technologies Private Limited · 45-Day Summer Training.</p>
                <div className="flex items-center gap-2">
                  <img
                    src={uploadedLogo}
                    onError={(e) => {
                      e.currentTarget.src = brandLogo;
                    }}
                    alt="TheCodeSpark Logo"
                    className="h-6 w-auto object-contain"
                  />
                  <span className="font-bold text-white text-sm">TheCodeSpark</span>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* =====================================================================
            SCHOLARSHIP MODAL
            ===================================================================== */}
        <AnimatePresence>
          {isDiscountModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
              onClick={() => setIsDiscountModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 12 }}
                transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                className="relative w-full max-w-sm rounded-3xl bg-white border border-black/10 p-6 sm:p-8 text-center space-y-5 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsDiscountModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 text-[#6B7280] hover:text-[#0A140F] rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-14 h-14 rounded-2xl bg-[#062B1A] text-[#9BFF6E] flex items-center justify-center mx-auto shadow-md">
                  <Percent className="w-7 h-7 stroke-[2.5]" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-black text-[#0A140F] font-display">
                    50% Summer Scholarship Applied
                  </h3>
                  <p className="text-xs text-[#4B5563]">
                    45-Day Summer Training · Track:{' '}
                    <span className="font-bold text-[#062B1A]">{activeTrack.shortName}</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EAF7EE] border border-[#059669]/20 text-xs text-[#062B1A] font-mono space-y-1">
                  <div>
                    All-Inclusive Fee:{' '}
                    <span className="font-black">Rs.{course.price.toLocaleString('en-IN')}</span>{' '}
                    {course.originalPrice && (
                      <span className="line-through text-[#6B7280]">
                        Rs.{course.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-[#047857]">
                    Includes Report, Synopsis, 1-Yr Hosting &amp; Dual QR Certs
                  </div>
                </div>

                <button
                  onClick={handleClaimDiscount}
                  className="w-full py-3.5 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-sm transition-colors cursor-pointer"
                >
                  Proceed to Enrollment
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};
