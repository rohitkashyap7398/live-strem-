import React, { useRef, useState, useEffect } from 'react';
import { motion, type Variants } from 'motion/react';
import { Play, Pause, ArrowRight, Star, Phone, Sparkles } from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { HomeKraftShowcase } from './HomeKraftShowcase';
import { MagneticButton } from './MagneticButton';

interface HeroBentoProps {
  onStartJourney: () => void;
  onGetInTouch: () => void;
  onExploreCourses: () => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({
  onStartJourney,
  onGetInTouch,
  onExploreCourses
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // User provided branded artwork images for Peer Learning Culture
  const peerImages = [
    '/assets/aistudio/Neon_AI_Coding_in_the_Cosmos_d8fdb42f.png',
    '/assets/aistudio/TheCodeSpark_Neon_Hand_Interface_74a47cc3.png'
  ];
  const [peerImageIndex, setPeerImageIndex] = useState(0);

  // User provided video for Start Learning card (Humanoid AI Robot looking around)
  const [selectedVideo, setSelectedVideo] = useState('/assets/aistudio/ai_humanoid_robot.mp4');

  // Smooth live frequency percentage oscillation (+50% <-> +39% <-> +56%) matching reference motion
  const [growthPercent, setGrowthPercent] = useState(50);
  useEffect(() => {
    const targets = [50, 39, 56, 44];
    let step = 0;
    const interval = window.setInterval(() => {
      step = (step + 1) % targets.length;
      setGrowthPercent(targets[step]);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      if (isPlaying) {
        const p = videoRef.current.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      }
    }
  }, [isPlaying, selectedVideo]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isPlaying) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(vid);
    return () => observer.disconnect();
  }, [isPlaying]);

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

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative pt-24 lg:pt-20 pb-14 overflow-x-clip">
      {/* GPU-free radial ambient glow (zero blur pass repaints) */}
      <div
        className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[420px] pointer-events-none"
        style={{
          background: 'radial-gradient(closest-side, rgba(225, 6, 0, 0.14), transparent)'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* ======================================================== */}
        {/* NEW TOP HERO SECTION: Exactly matching image_4fd053f0.png */}
        {/* Placed directly above 'TheCodeSpark OS • Live Intelligence' */}
        {/* ======================================================== */}
        <div className="relative pt-4 sm:pt-8 pb-10 sm:pb-14 text-center overflow-hidden">
          {/* Subtle Square Grid Pattern Overlay matching reference */}
          <div
            className="absolute inset-0 pointer-events-none opacity-35 dark:opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
              backgroundSize: '44px 44px'
            }}
          />

          {/* Left Large Red Curved Crescent Arc (GPU-free soft gradient ring) */}
          <div
            className="hidden sm:block absolute top-1/2 -left-28 sm:-left-36 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(closest-side, transparent 58%, rgba(225, 6, 0, 0.18) 78%, transparent 100%)'
            }}
          />

          {/* Right Soft Teal/Cyan Ambient Glow */}
          <div
            className="hidden sm:block absolute top-1/2 -right-28 sm:-right-36 -translate-y-1/2 w-[440px] h-[440px] pointer-events-none"
            style={{
              background: 'radial-gradient(closest-side, rgba(20, 184, 166, 0.14), transparent)'
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-5 sm:space-y-6">
            {/* 1. Avatars + 5 Stars Ratings Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-lg"
            >
              {/* 3 Overlapping Student Avatars */}
              <div className="flex -space-x-2 overflow-hidden py-0.5">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-black object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                  alt="Student"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-black object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80"
                  alt="Student"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-black object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80"
                  alt="Student"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-0.5 text-[#E10600] dark:text-white">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>

              <span className="text-xs font-mono text-slate-700 dark:text-neutral-300">
                From 2000+ ratings
              </span>
            </motion.div>

            {/* 2. Main Grand Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto"
            >
              Bridging the Gap Between Technology Education and Industry Excellence Through Practical Coding, Advanced Learning, and Innovation.
            </motion.h1>

            {/* 3. Subtitle customized for TheCodeSpark */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed px-2"
            >
              Develop in-demand technical skills, work on real-world projects, and prepare yourself for the evolving world of software development.
            </motion.p>

            {/* Start Journey Button with magnetic pull and rolling text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 sm:pt-3"
            >
              <MagneticButton
                onClick={onStartJourney}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                text="Start Journey"
                className="!px-8 !py-3.5 shadow-xl shadow-[#E10600]/35 text-sm sm:text-base font-bold"
              />
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HOME EDITORIAL & STACKED CRAFT SHOWCASE */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 sm:mb-16"
        >
          <HomeKraftShowcase
            onStartJourney={onStartJourney}
            onRequestCallback={onGetInTouch}
            onExploreCourses={onExploreCourses}
          />
        </motion.div>

        {/* ======================================================== */}
        {/* Official Brand Badge & Start Journey CTA Row (KEPT INTACT) */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-[#E10600]/30 shadow-md dark:shadow-lg shadow-[#E10600]/10 backdrop-blur-md max-w-full"
          >
            <img
              src={brandLogo}
              onError={(e) => {
                e.currentTarget.src = '/logo.png';
              }}
              alt="TheCodeSpark Technologies Private Limited"
              className="h-7 sm:h-9 w-auto object-contain filter drop-shadow shrink-0"
            />
            <div className="text-left min-w-0">
              <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-tight block font-display truncate">
                TheCodeSpark Technologies <span className="text-[#E10600]">Private Limited</span>
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-neutral-400 font-mono tracking-wider uppercase block truncate">
                Official Coding Institute & Accelerator • Lucknow
              </span>
            </div>
          </motion.div>

          {/* Start Journey Button */}
          <MagneticButton
            onClick={onStartJourney}
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            iconPosition="right"
            text="Start Journey"
          />
        </div>

        {/* ======================================================== */}
        {/* 01 — SKILLS TO SUCCESS SHOWCASE (3-COLUMN HAIRLINE GRID) */}
        {/* ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto rounded-[28px] bg-[#060608] text-white border border-white/[0.08] shadow-2xl overflow-hidden relative"
        >
          {/* Ambient Soft Violet / Indigo Top Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.12),transparent_58%)]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* COLUMN 1: Recessed Rising Arcs Visual Card + Centered Display Typography */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-4 px-7 py-9 sm:px-9 sm:py-11 flex flex-col justify-between items-center text-center gap-8 lg:min-h-[520px]"
            >
              {/* Recessed Visual Box with Animated Rising Concentric Arcs */}
              <div className="w-full max-w-[270px] rounded-2xl bg-[#0E0B14] border border-white/[0.06] pt-7 pb-5 px-5 relative overflow-hidden">
                <motion.div
                  aria-hidden="true"
                  animate={{ opacity: [0.55, 1, 0.55], scale: [0.96, 1.06, 0.96] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(167,139,250,0.26),transparent_68%)]"
                />

                <div className="relative h-32 flex items-end justify-center">
                  {/* Staggered Concentric Glowing Radar Ripple Arcs */}
                  <motion.div
                    animate={{ scale: [0.98, 1.04, 0.98], opacity: [0.2, 0.55, 0.2] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                    className="absolute -bottom-10 w-52 h-52 rounded-full border border-purple-200/20"
                  />
                  <motion.div
                    animate={{ scale: [0.98, 1.05, 0.98], opacity: [0.28, 0.7, 0.28] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
                    className="absolute -bottom-8 w-40 h-40 rounded-full border border-purple-300/30"
                  />
                  <motion.div
                    animate={{ scale: [0.97, 1.06, 0.97], opacity: [0.45, 0.9, 0.45] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-6 w-28 h-28 rounded-full border border-purple-300/45 bg-purple-500/[0.10]"
                  />

                  {/* Center Levitating Illuminated Square Tile */}
                  <motion.div
                    animate={{ y: [0, -4, 0], scale: [1, 1.04, 1] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 mb-5 w-11 h-11 rounded-xl bg-gradient-to-b from-purple-300/30 to-purple-900/30 border border-purple-200/40 flex items-center justify-center shadow-[0_0_26px_rgba(167,139,250,0.34)]"
                  >
                    <Sparkles className="w-4 h-4 text-purple-100" />
                  </motion.div>

                  {/* Animated Orbiting Telemetry Badge (+50% <-> +39% smooth drift matching video) */}
                  <motion.div
                    animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-6 right-1 rounded-full bg-[#191424]/95 border border-purple-200/30 px-2.5 py-1 flex items-center gap-1.5 shadow-lg"
                  >
                    <span className="text-[10px] text-neutral-300">Growth</span>
                    <motion.span
                      key={growthPercent}
                      initial={{ opacity: 0.4, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="text-[10px] font-mono font-semibold text-white tabular-nums"
                    >
                      ↗ +{growthPercent}%
                    </motion.span>
                  </motion.div>
                </div>

                <p className="relative z-10 text-[11px] font-sans text-neutral-300/90 tracking-wide mt-4">
                  Learn. Build. Deploy.
                </p>
              </div>

              {/* Column 1 Title & Summary */}
              <div className="space-y-3 pb-1">
                <h2 className="text-[26px] sm:text-[30px] font-medium font-display tracking-tight text-white leading-[1.15]">
                  01 — Skills to Success
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-[230px] mx-auto">
                  Tap into the frequency of top-tier software engineering
                </p>
              </div>
            </motion.div>

            {/* COLUMN 2: Centered Top Typography + Sequential Ripple Rings + Small Video Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-4 px-7 py-9 sm:px-9 sm:py-11 flex flex-col justify-between items-center text-center gap-6 lg:min-h-[520px]"
            >
              {/* Top Centered Heading & Subtitle */}
              <div className="space-y-2.5 pt-1">
                <h3 className="text-[26px] sm:text-[30px] font-medium font-display tracking-tight text-white leading-[1.15]">
                  Supercharged Coding Labs
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-[240px] mx-auto">
                  AI-guided live sprints to level up your tech career
                </p>
              </div>

              {/* Animated Sequential Ripple Concentric Rings + Start Transformation */}
              <div className="relative flex flex-col items-center justify-center py-2">
                <motion.div
                  aria-hidden="true"
                  animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.94, 1.06, 0.94] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_50%_62%,rgba(168,85,247,0.28),transparent_68%)]"
                />

                {/* Outer ripple ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                    borderColor: ['rgba(255,255,255,0.06)', 'rgba(192,132,252,0.24)', 'rgba(255,255,255,0.06)']
                  }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="relative p-3.5 rounded-full border border-white/[0.06] bg-white/[0.01]"
                >
                  {/* Middle ripple ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.025, 1],
                      borderColor: ['rgba(216,180,254,0.14)', 'rgba(216,180,254,0.45)', 'rgba(216,180,254,0.14)']
                    }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    className="p-3 rounded-full border border-purple-300/[0.16] bg-purple-500/[0.03]"
                  >
                    <motion.button
                      type="button"
                      onClick={onStartJourney}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      animate={{
                        boxShadow: [
                          '0 0 18px rgba(167,139,250,0.18)',
                          '0 0 34px rgba(167,139,250,0.42)',
                          '0 0 18px rgba(167,139,250,0.18)'
                        ]
                      }}
                      transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative overflow-hidden px-7 py-3 rounded-full bg-[#16121D] hover:bg-[#1E1829] border border-purple-200/40 text-xs sm:text-[13px] font-medium text-white cursor-pointer whitespace-nowrap"
                    >
                      <motion.span
                        aria-hidden="true"
                        animate={{ x: ['-120%', '220%'] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
                        className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-purple-200/20 to-transparent skew-x-[-20deg]"
                      />
                      <span className="relative z-10">Start transformation</span>
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Circular Icon Node Centered on Lower Edge */}
                <motion.button
                  type="button"
                  onClick={onGetInTouch}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                  aria-label="Speak with a mentor"
                  title="Get in touch with a mentor"
                  className="relative z-10 -mt-3.5 w-8 h-8 rounded-full bg-[#14111A] hover:bg-[#221C2E] border border-purple-200/30 inline-flex items-center justify-center text-purple-200 shadow-[0_0_16px_rgba(167,139,250,0.28)] transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              {/* Compact Rounded Video Card (Existing Section Video Embedded Inside Small Card) */}
              <div className="w-full max-w-[270px] rounded-2xl overflow-hidden border border-white/15 bg-[#0E0C13] relative group h-[88px] shadow-lg">
                <video
                  ref={videoRef}
                  src={selectedVideo}
                  preload="metadata"
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-[filter] duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  aria-label={isPlaying ? 'Pause studio video' : 'Play studio video'}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/75 hover:bg-black text-white border border-white/15 inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white" />}
                </button>

                <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[10.5px]">
                  <span className="font-medium text-white truncate">
                    TheCodeSpark Studio
                  </span>
                  <a
                    href="tel:+917398839769"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-purple-200 hover:text-white tabular-nums shrink-0"
                  >
                    7398839769
                  </a>
                </div>
              </div>
            </motion.div>

            {/* COLUMN 3: Balanced Top & Bottom Halves Divided Horizontally */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-4 flex flex-col divide-y divide-white/[0.08] lg:min-h-[520px]"
            >
              {/* Top Half: Left Text + Right Animated Flowing Spline Curve Box */}
              <div className="px-6 py-7 sm:px-7 sm:py-8 flex items-center justify-between gap-4 flex-1">
                <div className="space-y-2.5 flex-1 min-w-0 text-left">
                  <h3 className="text-xl sm:text-[23px] font-medium font-display tracking-tight text-white leading-[1.18]">
                    AI-Powered Code Intelligence
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Track and elevate your coding speed for faster mastery
                  </p>
                </div>

                {/* Recessed Animated Curve Graph Box */}
                <div
                  onClick={() => setPeerImageIndex((prev) => (prev + 1) % peerImages.length)}
                  title="Click to switch studio preview"
                  className="w-[152px] sm:w-[172px] h-[160px] shrink-0 rounded-2xl bg-[#0E0B14] border border-white/[0.07] p-3 relative overflow-hidden cursor-pointer hover:border-purple-300/30 transition-colors flex flex-col justify-center"
                >
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.45, 0.95, 0.45] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(167,139,250,0.22),transparent_65%)]"
                  />

                  <svg viewBox="0 0 150 96" className="w-full h-24 overflow-visible relative z-10" fill="none">
                    <defs>
                      <linearGradient id="primaryWave" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.35" />
                        <stop offset="55%" stopColor="#A78BFA" stopOpacity="1" />
                        <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="74" x2="150" y2="74" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="46" x2="150" y2="46" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    {/* Gently undulating secondary curve */}
                    <motion.path
                      d="M4 72 C 34 68, 56 36, 90 48 C 118 58, 132 34, 146 38"
                      stroke="rgba(167,139,250,0.28)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      animate={{ translateY: [0, -3, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {/* Bright primary spline wave */}
                    <motion.path
                      d="M6 82 C 32 78, 48 48, 82 54 C 110 59, 126 14, 146 18"
                      stroke="url(#primaryWave)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      animate={{ translateY: [0, 2.5, 0] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {/* Traveling luminous pulse along the spline */}
                    <motion.path
                      d="M6 82 C 32 78, 48 48, 82 54 C 110 59, 126 14, 146 18"
                      stroke="#FFFFFF"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeDasharray="32 180"
                      animate={{ strokeDashoffset: [212, -212] }}
                      transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.circle
                      cx="52"
                      cy="54"
                      r={3.5}
                      fill="#A78BFA"
                      style={{ transformOrigin: '52px 54px' }}
                      animate={{ scale: [1, 1.45, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="122"
                      cy="30"
                      r={3}
                      fill="#EDE9FE"
                      style={{ transformOrigin: '122px 30px' }}
                      animate={{ scale: [1, 1.45, 1], opacity: [0.75, 1, 0.75] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                    />
                  </svg>

                  {/* Floating Peer Culture Avatar Node on Curve */}
                  <div className="relative z-10 flex items-center justify-between pt-1">
                    <motion.img
                      src={peerImages[peerImageIndex]}
                      alt="TheCodeSpark AI Peer Learning"
                      referrerPolicy="no-referrer"
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-8 h-8 rounded-full object-cover border border-purple-200/45 shadow-md"
                    />
                    <span className="text-[10px] font-mono text-purple-200/80 tabular-nums">
                      {peerImageIndex === 0 ? 'AI Mode' : 'Lab Mode'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Half: Left Metric Summary Card + Right-Aligned Editorial Copy */}
              <div className="px-6 py-7 sm:px-7 sm:py-8 flex items-center justify-between gap-4 flex-1">
                {/* Recessed Metric Box with Animated Upper-Right Violet Halo & Mini Wave */}
                <div className="w-[152px] sm:w-[172px] shrink-0 rounded-2xl bg-[#0E0B14] border border-white/[0.08] p-3.5 relative overflow-hidden space-y-2.5">
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.4, 0.95, 0.4], scale: [0.92, 1.12, 0.92] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.38),transparent_70%)]"
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-2xl font-normal font-display tabular-nums text-white leading-none">
                      12
                    </span>
                    <motion.span
                      animate={{ opacity: [0.75, 1, 0.75] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="px-2 py-0.5 rounded-full bg-purple-400/20 border border-purple-300/35 text-[10px] font-medium text-purple-100"
                    >
                      AI
                    </motion.span>
                  </div>

                  <p className="relative z-10 text-[10px] text-neutral-400 leading-snug">
                    12 live tracks &amp; AI mentor feedback tailored for your goals.
                  </p>

                  <div className="relative z-10 grid grid-cols-2 gap-1.5 pt-0.5 text-[9.5px] font-mono">
                    <div className="rounded-lg bg-white/[0.04] border border-white/10 px-2 py-1.5 text-neutral-200 overflow-hidden relative">
                      <span className="relative z-10 block truncate">Sprints</span>
                      {/* Animated subtle frequency wave inside Sprints pill matching video */}
                      <svg viewBox="0 0 60 14" className="w-full h-2.5 mt-0.5 overflow-visible" fill="none">
                        <motion.path
                          d="M0 9 Q 15 2, 30 8 T 60 5"
                          stroke="#C4B5FD"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeDasharray="18 42"
                          animate={{ strokeDashoffset: [60, -60] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                        />
                      </svg>
                    </div>
                    <div className="rounded-lg bg-white/[0.04] border border-white/10 px-2 py-1.5 text-neutral-300 relative overflow-hidden flex items-center">
                      <motion.span
                        aria-hidden="true"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
                        className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-purple-300/15 to-transparent"
                      />
                      <span className="relative z-10 truncate">in Progress</span>
                    </div>
                  </div>
                </div>

                {/* Right-Aligned Editorial Text */}
                <div className="space-y-2.5 flex-1 min-w-0 text-right">
                  <h3 className="text-xl sm:text-[23px] font-medium font-display tracking-tight text-white leading-[1.18]">
                    Daily Labs &amp; AI Feedback
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Build, refactor, and grow every day
                  </p>
                  <button
                    type="button"
                    onClick={onGetInTouch}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-200 hover:text-white transition-colors cursor-pointer pt-1"
                  >
                    <span>Get in touch</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
