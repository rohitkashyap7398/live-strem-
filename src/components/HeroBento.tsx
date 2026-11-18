import React, { useRef, useState, useEffect } from 'react';
import { motion, type Variants } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Star, Phone, Sparkles } from 'lucide-react';
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
  const [isMuted, setIsMuted] = useState(true);

  // User provided branded artwork images for Peer Learning Culture
  const peerImages = [
    '/assets/aistudio/Neon_AI_Coding_in_the_Cosmos_d8fdb42f.png',
    '/assets/aistudio/TheCodeSpark_Neon_Hand_Interface_74a47cc3.png'
  ];
  const [peerImageIndex, setPeerImageIndex] = useState(0);

  // User provided video for Start Learning card (Humanoid AI Robot looking around)
  const [selectedVideo, setSelectedVideo] = useState('/assets/aistudio/ai_humanoid_robot.mp4');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.defaultMuted = isMuted;
      if (isPlaying) {
        const p = videoRef.current.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      }
    }
  }, [isPlaying, isMuted, selectedVideo]);

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

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
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
    <section ref={sectionRef} className="relative pt-24 lg:pt-20 pb-14 overflow-hidden">
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
            className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(128,128,128,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.14) 1px, transparent 1px)',
              backgroundSize: '44px 44px'
            }}
          />

          {/* Left Large Red Curved Crescent Arc (GPU-free soft gradient ring) */}
          <div
            className="hidden sm:block absolute top-1/2 -left-28 sm:-left-36 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(closest-side, transparent 58%, rgba(225, 6, 0, 0.22) 78%, transparent 100%)'
            }}
          />

          {/* Right Soft Teal/Cyan Ambient Glow */}
          <div
            className="hidden sm:block absolute top-1/2 -right-28 sm:-right-36 -translate-y-1/2 w-[440px] h-[440px] pointer-events-none"
            style={{
              background: 'radial-gradient(closest-side, rgba(20, 184, 166, 0.15), transparent)'
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
        {/* Single Outer Enclosing Bento Container */}
        {/* ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto rounded-[28px] sm:rounded-3xl p-3 sm:p-4 bg-slate-100/95 dark:bg-[#1c1c1c]/95 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-black/80 sm:backdrop-blur-xl transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
            {/* LEFT COLUMN: 2 Cards Top + 1 Wide Card Bottom */}
            <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4 justify-between">
              {/* Top Row: 2 Cards side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
                {/* Card 1: Beautiful Coding Image Card (User Provided Artwork) */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setPeerImageIndex((prev) => (prev + 1) % peerImages.length)}
                  className="rounded-2xl overflow-hidden relative group min-h-[170px] sm:min-h-[200px] border border-white/10 shadow-lg bg-[#121217] cursor-pointer"
                  title="Click to toggle TheCodeSpark Technologies Private Limited branded artwork"
                >
                  <img
                    src={peerImages[peerImageIndex]}
                    alt="TheCodeSpark Technologies Private Limited Peer Learning Culture"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end justify-between p-3.5">
                    <span className="text-[11px] font-mono text-white font-semibold px-2.5 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-[#E10600]" />
                      <span>Peer Learning Culture</span>
                    </span>
                    <span className="text-[9px] font-mono text-neutral-300 px-2 py-0.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xs">
                      {peerImageIndex === 0 ? 'AI Cosmos 1/2' : 'Neon Tech 2/2'}
                    </span>
                  </div>
                </motion.div>

                {/* Card 2: 01 — Skills to Success */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-slate-200 dark:border-white/5 bg-white dark:bg-[#121218] relative group hover:border-[#ff5722]/40 transition-all shadow-md dark:shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                      <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display tracking-tight leading-snug">
                        01 — Skills to Success
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 mt-4 leading-relaxed font-sans">
                    Transforming passionate learners into skilled professionals through hands-on training.
                  </p>
                </motion.div>
              </div>

              {/* Bottom Card: TRANSFORM YOUR POTENTIAL INTO PROFESSIONAL SUCCESS! */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -3 }}
                onClick={onGetInTouch}
                className="rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/5 bg-white dark:bg-[#121218] relative group cursor-pointer hover:border-[#ff5722]/40 transition-all shadow-md dark:shadow-lg flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display uppercase tracking-tight">
                      IGNITE
                    </span>
                    {/* 3 overlapping student avatars */}
                    <div className="flex -space-x-2 overflow-hidden py-1 items-center">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#121218] object-cover"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                        alt="Student"
                        referrerPolicy="no-referrer"
                      />
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#121218] object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                        alt="Student"
                        referrerPolicy="no-referrer"
                      />
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#121218] object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80"
                        alt="Student"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display uppercase tracking-tight">
                      YOUR
                    </span>
                  </div>

                  {/* Outline arrow pill button matching reference */}
                  <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full border border-[#E10600]/60 bg-[#E10600]/10 text-[#E10600] dark:text-[#ff5722] text-xs font-mono font-bold w-fit">
                    <span>GET STARTED</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display uppercase tracking-tight leading-tight">
                    CAREER WITH
                    <br />
                    HIGH-GROWTH TECH ROLES!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 font-sans leading-relaxed">
                    Join 2,500+ ambitious learners building production code and breaking into top engineering teams.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Tall Start Learning Card with Student Video */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="lg:col-span-6 min-h-[360px] sm:min-h-[460px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-white/10 relative group flex flex-col justify-between p-6 sm:p-8 bg-[#121218] shadow-2xl"
            >
              {/* Background Video (Student coding in classroom / studio) */}
              <video
                ref={videoRef}
                src={selectedVideo}
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-[filter] duration-700"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />

              {/* Gradient Overlay - balanced so the video stays vivid while text is perfectly legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/50 pointer-events-none" />

              {/* Top-left: Start Learning */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="max-w-md">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E10600]/25 border border-[#E10600]/40 text-[#ff5722] text-[10px] font-mono font-bold uppercase tracking-wider mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
                    <span>TheCodeSpark Technologies Private Limited</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight leading-snug">
                    01 — Skills to Success
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mt-2 drop-shadow-md">
                    Transforming passionate learners into skilled professionals through hands-on training.
                  </p>
                </div>

                {/* Video controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/15 transition-all cursor-pointer shadow-lg"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/15 transition-all cursor-pointer shadow-lg"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </button>
                </div>
              </div>


              {/* Bottom-left: Get in touch → Button */}
              <div className="relative z-10 pt-6 flex flex-wrap items-center gap-2.5">
                <MagneticButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onGetInTouch();
                  }}
                  variant="primary"
                  size="sm"
                  text="Get in touch →"
                  className="!rounded-xl border border-white/20"
                />

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 bg-black/70 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <Phone className="w-3 h-3 text-[#ff5722]" />
                  <a href="tel:+917398839769" className="hover:text-white font-bold" onClick={(e) => e.stopPropagation()}>
                    7398839769
                  </a>
                  <span className="text-white/30">/</span>
                  <a href="tel:+919548248925" className="hover:text-white font-bold" onClick={(e) => e.stopPropagation()}>
                    9548248925
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
