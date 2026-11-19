import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionConfig
} from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  MapPin,
  Pause,
  Phone,
  Play,
  Plus,
  Minus,
  Sparkles,
  Terminal,
  Users,
  Briefcase,
  Code2,
  Cpu
} from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface OfflineProgramsViewProps {
  onApplyOffline: () => void;
  onRequestCallback: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Video-matching Mint Pill CTA with circular arrow badge
const MintPillButton: React.FC<{
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'mint' | 'dark' | 'outline';
  className?: string;
}> = ({ label, onClick, type = 'button', variant = 'mint', className = '' }) => {
  const baseStyles =
    variant === 'mint'
      ? 'bg-[#2CF585] hover:bg-[#1EE074] text-[#0D1E14]'
      : variant === 'dark'
      ? 'bg-[#161B18] hover:bg-[#0D1410] text-white border border-white/15'
      : 'bg-white hover:bg-[#F3F5F3] text-[#141916] border border-black/15';

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0 group ${baseStyles} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 ${
          variant === 'mint'
            ? 'bg-[#0D1E14]/10 text-[#0D1E14]'
            : variant === 'dark'
            ? 'bg-[#2CF585] text-[#0D1E14]'
            : 'bg-[#141916]/10 text-[#141916]'
        }`}
      >
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </motion.button>
  );
};

// Video-exact diagonal glowing emerald stardust & sparkling particle canvas (`00:00`, `00:18–00:21`)
const EmeraldStardustBackdrop: React.FC<{
  angle?: 'top-left' | 'diagonal-up';
}> = ({ angle = 'top-left' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number | null = null;
    let width = 0;
    let height = 0;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = window.innerWidth < 768 ? 60 : 110;

    interface StarParticle {
      t: number; // position along diagonal 0..1
      spread: number; // perpendicular offset -1..1
      size: number;
      alpha: number;
      phase: number;
      speed: number;
      mint: boolean;
    }

    const particles: StarParticle[] = Array.from({ length: particleCount }, () => ({
      t: Math.random(),
      spread: (Math.random() - 0.5) * 2 * Math.pow(Math.random(), 0.75),
      size: 0.6 + Math.random() * 1.4,
      alpha: 0.18 + Math.random() * 0.72,
      phase: Math.random() * Math.PI * 2,
      speed: 0.00018 + Math.random() * 0.00035,
      mint: Math.random() > 0.28
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let tick = 0;
    const drawFrame = () => {
      tick += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.t += p.speed;
        if (p.t > 1.05) p.t = -0.05;

        let x = 0;
        let y = 0;
        if (angle === 'top-left') {
          const bx = p.t * width * 0.95;
          const by = height * 0.12 + p.t * height * 0.62;
          x = bx + p.spread * width * 0.24;
          y = by + p.spread * height * 0.26;
        } else {
          const bx = p.t * width * 1.05;
          const by = height * 0.92 - p.t * height * 0.78;
          x = bx + p.spread * width * 0.22;
          y = by + p.spread * height * 0.24;
        }

        const twinkle = 0.55 + 0.45 * Math.sin(tick + p.phase);
        const a = p.alpha * twinkle;
        ctx.fillStyle = p.mint
          ? `rgba(74, 248, 152, ${a.toFixed(3)})`
          : `rgba(228, 252, 239, ${(a * 0.75).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const render = () => {
      if (!isVisible || document.hidden) {
        animId = null;
        return;
      }
      drawFrame();
      animId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (prefersReducedMotion) {
        drawFrame();
        return;
      }
      if (animId === null && isVisible && !document.hidden) {
        animId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (animId !== null) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    };

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              isVisible = entry.isIntersecting;
              if (isVisible) startLoop();
              else stopLoop();
            },
            { threshold: 0.01 }
          )
        : null;

    observer?.observe(container);

    const handleVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    startLoop();
    return () => {
      stopLoop();
      observer?.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', resize);
    };
  }, [angle]);

  return (
    <div ref={containerRef} aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#191C1A]" />
      {/* GPU-free glowing emerald diagonal nebula ribbon (soft multi-stop gradient, zero filter:blur repaints) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            angle === 'top-left'
              ? 'linear-gradient(148deg, transparent 10%, rgba(34, 211, 128, 0.08) 26%, rgba(44, 245, 133, 0.22) 48%, rgba(16, 185, 129, 0.09) 68%, transparent 86%)'
              : 'linear-gradient(32deg, transparent 12%, rgba(16, 185, 129, 0.07) 28%, rgba(44, 245, 133, 0.22) 50%, rgba(20, 184, 118, 0.09) 70%, transparent 88%)'
        }}
      />
      {/* Crisp ambient micro-grain / sparkling diagonal stardust */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Fine photographic speckle texture across the dark canvas */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(110, 245, 175, 0.45) 0.6px, transparent 0.6px), radial-gradient(rgba(255, 255, 255, 0.22) 0.5px, transparent 0.5px)',
          backgroundSize: '18px 18px, 11px 11px',
          backgroundPosition: '0 0, 5px 7px'
        }}
      />
    </div>
  );
};

// Video-exact sticky sheet wrapper with scroll-driven scale-down, lift & grey recede (`00:03–00:09`)
interface DifferenceSheetData {
  id: string;
  title: string;
  desc: string;
  items: { icon: React.ReactNode; label: string }[];
  img: string;
  caption: string;
  glyph: 'chevron' | 'linked' | 'bars';
}

const StickyDeckSheet: React.FC<{
  sheet: DifferenceSheetData;
  idx: number;
  onApplyOffline: () => void;
}> = ({ sheet, idx, onApplyOffline }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start 14%', 'end 14%']
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30
  });

  // Shrink slightly and shift upward as next sheet stacks over it (`00:05`, `00:07`, `00:09`)
  const cardScale = useTransform(smoothProgress, [0, 1], [1, 0.925]);
  const cardY = useTransform(smoothProgress, [0, 1], [0, -14]);
  const veilOpacity = useTransform(smoothProgress, [0, 1], [0, 0.16]);

  return (
    <div
      ref={wrapperRef}
      className="sticky"
      style={{
        top: `${76 + idx * 14}px`,
        zIndex: 12 + idx
      }}
    >
      <motion.div
        style={{ scale: cardScale, y: cardY, transformOrigin: 'top center' }}
        className="relative rounded-[28px] sm:rounded-[34px] bg-[#F3F4F3] border border-black/[0.08] shadow-[0_-12px_40px_rgba(0,0,0,0.08)] overflow-hidden will-change-transform"
      >
        {/* Darkening stack overlay when recessed behind next sheet */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: veilOpacity }}
          className="absolute inset-0 bg-[#8F9692] pointer-events-none z-20"
        />

        <div className="relative z-10 p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Editorial Column (`00:03 – 00:08`) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#059669]">
                0{idx + 1} · Pillar
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#141916] font-display tracking-tight leading-tight">
                {sheet.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5550] leading-relaxed max-w-lg">
                {sheet.desc}
              </p>
            </div>

            <MintPillButton
              label="Learn More"
              variant="mint"
              onClick={onApplyOffline}
            />

            {/* 3 Clean White Feature Rows matching `00:04 – 00:08` */}
            <div className="space-y-2.5 pt-2">
              {sheet.items.map((row) => (
                <div
                  key={row.label}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-center gap-3.5 hover:border-[#2CF585] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F3F4F3] flex items-center justify-center shrink-0">
                    {row.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#141916]">
                    {row.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Frosted Translucent 3D Mint Emblem + Photo Preview (`00:04 – 00:09`) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6">
            <div className="relative w-full max-w-[340px] h-32 flex items-center justify-center">
              {sheet.glyph === 'chevron' && (
                <motion.svg
                  viewBox="0 0 200 140"
                  className="w-48 h-32 drop-shadow-[0_18px_36px_rgba(44,245,133,0.45)]"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <defs>
                    <linearGradient id="mintGlassA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6BFFB0" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#14C967" stopOpacity="0.88" />
                    </linearGradient>
                    <linearGradient id="mintGlassB" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C8FFE0" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#2CF585" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="42"
                    y="16"
                    width="104"
                    height="34"
                    rx="17"
                    transform="rotate(32 94 33)"
                    fill="url(#mintGlassA)"
                  />
                  <rect
                    x="42"
                    y="88"
                    width="104"
                    height="34"
                    rx="17"
                    transform="rotate(-32 94 105)"
                    fill="url(#mintGlassB)"
                  />
                </motion.svg>
              )}

              {sheet.glyph === 'linked' && (
                <motion.svg
                  viewBox="0 0 220 140"
                  className="w-52 h-32 drop-shadow-[0_18px_36px_rgba(44,245,133,0.45)]"
                  animate={{ y: [-4, 5, -4] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <defs>
                    <linearGradient id="mintLoopA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A6FFD0" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#15C464" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="mintLoopB" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2CF585" stopOpacity="0.92" />
                      <stop offset="100%" stopColor="#0D964B" stopOpacity="0.82" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="30"
                    y="40"
                    width="96"
                    height="36"
                    rx="18"
                    transform="rotate(-38 78 58)"
                    fill="url(#mintLoopA)"
                  />
                  <rect
                    x="84"
                    y="58"
                    width="102"
                    height="36"
                    rx="18"
                    transform="rotate(-38 135 76)"
                    fill="url(#mintLoopB)"
                  />
                  <circle cx="96" cy="52" r="16" fill="#D5FFE8" fillOpacity="0.85" />
                </motion.svg>
              )}

              {sheet.glyph === 'bars' && (
                <motion.div
                  className="flex items-end gap-3 h-28"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[
                    { h: 'h-12', bg: 'from-[#C4FFE0] to-[#6BFFB0]', delay: 0 },
                    { h: 'h-16', bg: 'from-[#7EFFB9] to-[#2CF585]', delay: 0.08 },
                    { h: 'h-22', bg: 'from-[#42FA94] to-[#12C462]', delay: 0.16 },
                    { h: 'h-28', bg: 'from-[#2CF585] to-[#0A984B]', delay: 0.24 }
                  ].map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0.35, opacity: 0.6 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        scaleY: { duration: 0.5, delay: b.delay, ease: EASE_OUT_EXPO },
                        y: {
                          duration: 3 + i * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: b.delay
                        }
                      }}
                      style={{ transformOrigin: 'bottom center' }}
                      className={`w-7 ${b.h} rounded-full bg-gradient-to-b ${b.bg} shadow-[0_12px_28px_rgba(44,245,133,0.4)]`}
                    />
                  ))}
                </motion.div>
              )}
            </div>

            {/* Clean Rounded Photo Showcase */}
            <div className="w-full rounded-2xl overflow-hidden bg-[#141916] border border-black/10 relative aspect-[16/9] shadow-lg group">
              <img
                src={sheet.img}
                alt={sheet.title}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <span className="text-[11px] font-mono text-[#2CF585] font-semibold">
                  {sheet.caption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const OfflineProgramsView: React.FC<OfflineProgramsViewProps> = ({
  onApplyOffline,
  onRequestCallback
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroParallaxRef = useRef<HTMLDivElement>(null);
  const marqueeScrollRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  // Interactive sections state
  const [openMethodologyIdx, setOpenMethodologyIdx] = useState<number | null>(0);
  const [openDoubtPillIdx, setOpenDoubtPillIdx] = useState<number | null>(0);
  const [isHoveringTrack, setIsHoveringTrack] = useState(false);

  // Real drag-to-scroll state & cursor-following "Drag ↔" badge (`00:12 – 00:16`)
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const dragMovedRef = useRef(false);
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const smoothCursorX = useSpring(pointerX, { stiffness: 320, damping: 28 });
  const smoothCursorY = useSpring(pointerY, { stiffness: 320, damping: 28 });

  // Filter tab for "Classroom To Career Program"
  const [activeCourseCategory, setActiveCourseCategory] = useState<
    'all' | 'web' | 'python' | 'java' | 'ignite'
  >('all');

  // Mentor carousel state (0 = Page 1, 1 = Page 2)
  const [mentorPage, setMentorPage] = useState(0);

  // Placement Assistance Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. Scroll-linked hero parallax & white curtain lift (`00:00 – 00:02`)
  const { scrollYProgress: heroScrollRaw } = useScroll({
    target: heroParallaxRef,
    offset: ['start start', 'end start']
  });
  const heroScroll = useSpring(heroScrollRaw, { stiffness: 140, damping: 26 });
  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.09]);
  const heroImageY = useTransform(heroScroll, [0, 1], [0, 36]);
  const heroHeadlineY = useTransform(heroScroll, [0, 1], [0, -24]);
  const curtainY = useTransform(heroScroll, [0, 0.8], [32, 0]);

  // 2. Scroll-linked opposite sliding testimonial marquee (`00:10`)
  const { scrollYProgress: marqueeProgressRaw } = useScroll({
    target: marqueeScrollRef,
    offset: ['start end', 'end start']
  });
  const marqueeProgress = useSpring(marqueeProgressRaw, {
    stiffness: 110,
    damping: 26
  });
  const marqueeRow1X = useTransform(marqueeProgress, [0, 1], [-55, 55]);
  const marqueeRow2X = useTransform(marqueeProgress, [0, 1], [55, -55]);

  // 3. Scroll-linked floating parallax inset photo between methodology & doubt pills (`00:19`, `00:27`)
  const { scrollYProgress: methProgressRaw } = useScroll({
    target: methodologyRef,
    offset: ['start end', 'end start']
  });
  const methProgress = useSpring(methProgressRaw, { stiffness: 120, damping: 24 });
  const floatingInsetY = useTransform(methProgress, [0, 1], [50, -50]);
  const floatingInsetRotate = useTransform(methProgress, [0, 1], [-4, 4]);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^\d{10}$/.test(phone)) return;
    setIsSubmitted(true);
  };

  const scrollTrack = (dir: 'left' | 'right') => {
    if (!carouselTrackRef.current) return;
    carouselTrackRef.current.scrollBy({
      left: dir === 'left' ? -340 : 340,
      behavior: 'smooth'
    });
  };

  const handleTrackMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);

    if (isDraggingRef.current && carouselTrackRef.current) {
      const dx = e.pageX - dragStartXRef.current;
      if (Math.abs(dx) > 5) dragMovedRef.current = true;
      carouselTrackRef.current.scrollLeft = dragScrollLeftRef.current - dx * 1.15;
    }
  };

  const handleTrackMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselTrackRef.current) return;
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    dragStartXRef.current = e.pageX;
    dragScrollLeftRef.current = carouselTrackRef.current.scrollLeft;
  };

  const handleTrackMouseUpOrLeave = (leftTrack = false) => {
    isDraggingRef.current = false;
    if (leftTrack) setIsHoveringTrack(false);
  };

  const polaroids = [
    {
      tag: 'Campus Life',
      badge: 'Culture',
      title: 'Leadership & Public Speaking',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Engineering',
      badge: 'Competitions',
      title: 'Debug Battles & Competitions',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Community',
      badge: 'Culture',
      title: 'Inertia & Community Culture',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Placements',
      badge: 'Outcomes',
      title: 'Career & Placement Activities',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Workshops',
      badge: 'Live Lab',
      title: 'Tech Masterclasses',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Deployment',
      badge: 'Production',
      title: 'Real Project & Product Building',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const classroomCourses = [
    {
      id: 'web-dev',
      category: 'web',
      title: 'Full Stack Web Development with Gen AI',
      badge: 'VS CODE • REACT 19',
      desc: 'Learn in a focused, distraction-free classroom environment with expert mentors guiding every line of code.',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
      mentors: 'Ali, Harsh & Sarthak'
    },
    {
      id: 'data-science',
      category: 'python',
      title: 'Python Data Science with Gen AI',
      badge: 'NUMPY • PYTORCH • LLM',
      desc: 'Master mathematical modeling, data pipelines, deep neural architectures, and autonomous AI agents.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
      mentors: 'Devendra & Data Specialists'
    },
    {
      id: 'campus-placement',
      category: 'java',
      title: 'Campus Placement Track',
      badge: 'DSA IN JAVA • APTITUDE',
      desc: 'Crack top product interviews with rigorous logic building, LeetCode 450 question patterns, and mock interviews.',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
      mentors: 'Ankur & Placement Cell'
    }
  ];

  const filteredClassroomCourses = classroomCourses.filter((c) => {
    if (activeCourseCategory === 'all') return true;
    if (activeCourseCategory === 'web') return c.category === 'web';
    if (activeCourseCategory === 'python') return c.category === 'python';
    if (activeCourseCategory === 'java') return c.category === 'java';
    return true;
  });

  const allMentors = [
    {
      alt: 'TheCodeSpark Technologies Private Limited Industry Expert',
      img: '/assets/aistudio/Warm_Office_Portrait_with_Colorful_Logo_2164f143.png'
    },
    {
      alt: 'TheCodeSpark Technologies Private Limited Industry Expert',
      img: '/assets/aistudio/Gemini_Generated_Image_co7fiqco7fiqco7f_fcc62587.png'
    },
    {
      alt: 'Rohit Kashyap - TheCodeSpark Technologies Private Limited Founder',
      img: '/assets/aistudio/ChatGPT_Image_Apr_16__2026__02_38_30_AM_9625e7e8.png'
    },
    {
      alt: 'TheCodeSpark Technologies Private Limited Industry Expert',
      img: '/assets/aistudio/Gemini_Generated_Image_tt8i0xtt8i0xtt8i_8f6a348a.png'
    },
    {
      alt: 'TheCodeSpark Technologies Private Limited Industry Expert Team',
      img: '/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png'
    }
  ];

  const visibleMentors =
    mentorPage === 0
      ? allMentors
      : [
          allMentors[3],
          allMentors[4],
          allMentors[2],
          allMentors[0],
          allMentors[1]
        ];

  const placedStudents = [
    {
      name: 'AARAV VERMA',
      comp: 'amazon',
      logoText: 'amazon',
      lpa: '30 LPA',
      img: '/assets/aistudio/Confident_College_Portrait_in_Navy_Blazer1_e547f0b4.png'
    },
    {
      name: 'ROHAN TIWARI',
      comp: 'Razorpay',
      logoText: 'Razorpay',
      lpa: '21 LPA',
      img: '/assets/aistudio/College_Portrait_with_Coffee_Poster2_b9ab1503.png'
    },
    {
      name: 'MEERA SHARMA',
      comp: 'accenture',
      logoText: 'accenture',
      lpa: '14 LPA',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'KAVYA NAIR',
      comp: 'cisco',
      logoText: 'CISCO',
      lpa: '19 LPA',
      img: '/assets/aistudio/Confident_College_Uniform_Portrait_56f41936.png'
    },
    {
      name: 'ANANYA GUPTA',
      comp: 'airtel',
      logoText: 'airtel',
      lpa: '16 LPA',
      img: '/assets/aistudio/Smiling_College_Uniform_Portrait_2_e71e2625.png'
    },
    {
      name: 'PRIYA SINGH',
      comp: 'synchrony',
      logoText: 'synchrony',
      lpa: '13 LPA',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80'
    }
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Beginner Foundation',
      desc: 'Start From Absolute Zero And Build A Strong Foundation In Programming And Problem-Solving. No Prior Experience Needed. Just Consistency And Curiosity. We Turn Confusion Into Clarity From Day One.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80'
    },
    {
      num: '02',
      title: 'Industry-Focused Training',
      desc: 'Structured, Hands-On Training Designed To Make You Industry-Ready. Learn By Building, Not Just Watching. Real Tasks, Real Challenges. Every Concept Is Backed With Practical Implementation.',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80'
    },
    {
      num: '03',
      title: 'Learn From Industry Experts',
      desc: 'Learn Directly From Professionals Working At Top Tech Companies. Get Real-World Insights, Career Guidance, And Advanced Strategies.',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80'
    },
    {
      num: '04',
      title: 'Build Real-World Products',
      desc: 'Build Real-World, Production-Level Projects, Not Basic Clones. Focus On Scalability, Performance, And Problem-Solving. Create A Portfolio That Stands Out In Interviews.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80'
    },
    {
      num: '05',
      title: 'Real Industrial Experience',
      desc: 'Work In An Environment That Simulates Real Tech Companies. Follow Professional Workflows, Tools, And Team Collaboration. Experience How Real Products Are Built And Deployed.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const differenceSheets: DifferenceSheetData[] = [
    {
      id: 'learn-by-building',
      title: 'Learn By Building',
      desc: 'No boring lectures, build 10+ real-world projects with hands-on learning from day one.',
      items: [
        {
          icon: <Code2 className="w-4 h-4 text-[#141916]" />,
          label: '10+ Real-World Production Projects'
        },
        {
          icon: <Users className="w-4 h-4 text-[#141916]" />,
          label: '25,000+ Enrolled Students Community'
        },
        {
          icon: <Layers className="w-4 h-4 text-[#141916]" />,
          label: '90 Days Structured Program • 100+ Placements'
        }
      ],
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&auto=format&fit=crop&q=80',
      caption: '25,000+ Enrolled Students • 90 Days Structured Program • 100+ Placements',
      glyph: 'chevron'
    },
    {
      id: 'strong-community',
      title: 'Strong Community Backing',
      desc: 'Be part of 25,000+ active learners, peer coding, group learning & real growth culture.',
      items: [
        {
          icon: <Sparkles className="w-4 h-4 text-[#141916]" />,
          label: 'TheCodeSpark Technologies Private Limited Community Culture'
        },
        {
          icon: <Terminal className="w-4 h-4 text-[#141916]" />,
          label: 'Keep Learning After Hours With Peer Discussions'
        },
        {
          icon: <Briefcase className="w-4 h-4 text-[#141916]" />,
          label: 'Group Learning, Hackathons & Real Growth Culture'
        }
      ],
      img: '/assets/aistudio/Corporate_Training_Auditorium_Session_76c6f74e.png',
      caption: 'Keep Learning After Hours With Peer Discussions',
      glyph: 'linked'
    },
    {
      id: 'job-focused',
      title: 'Job-Focused Learning',
      desc: 'Everything you learn is aligned to real interviews, real skills, real hiring needs.',
      items: [
        {
          icon: <Cpu className="w-4 h-4 text-[#141916]" />,
          label: 'Interview-Aligned Problem Solving & Architecture'
        },
        {
          icon: <CheckCircle2 className="w-4 h-4 text-[#141916]" />,
          label: 'Aarav Verma • Placed at Amazon (₹30 LPA)'
        },
        {
          icon: <MapPin className="w-4 h-4 text-[#141916]" />,
          label: 'Indrapuri / Gomti Nagar Lucknow On-Campus Hiring Prep'
        }
      ],
      img: '/assets/aistudio/Confident_College_Portrait_in_Navy_Blazer1_e547f0b4.png',
      caption: 'Aarav Verma • Placed at Amazon • ₹30 LPA',
      glyph: 'bars'
    }
  ];

  const liveDoubtPills = [
    {
      title: 'Live Doubt Solving',
      desc: 'Solve Problems Instantly During Sessions — no waiting days for replies while building your projects.'
    },
    {
      title: 'Live Coding Challenge',
      desc: 'Test Your Skills With Real-Time Challenges alongside peers and senior mentors on campus.'
    },
    {
      title: 'Interactive Sessions',
      desc: 'Engage, Ask, And Learn Actively with small-batch Lucknow studio supervision every day.'
    }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen pt-[90px] lg:pt-[68px] bg-[#191C1A] text-white pb-28 relative overflow-x-clip font-sans selection:bg-[#2CF585] selection:text-[#0D1E14]">
        {/* =================================================================== */}
        {/* 1. HERO SPLIT FRAME + INLINE EXPANDING MINT STAT PILLS (`00:00-01`) */}
        {/* =================================================================== */}
        <section ref={heroParallaxRef} className="relative overflow-hidden">
          <EmeraldStardustBackdrop angle="top-left" />

          {/* Top Rounded Grayscale-Tinted Campus Photo Frame (`00:00`) */}
          <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 pt-2 sm:pt-3">
            <motion.div
              style={{ y: heroImageY }}
              className="relative rounded-b-[28px] sm:rounded-b-[36px] rounded-t-[18px] overflow-hidden border border-white/10 shadow-2xl bg-[#101412]"
            >
              <motion.img
                style={{ scale: heroImageScale }}
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&auto=format&fit=crop&q=85"
                alt="In-Person On-Campus Labs • Indrapuri / Gomti Nagar Lucknow Campus"
                className="w-full h-[330px] sm:h-[380px] lg:h-[420px] object-cover grayscale contrast-125 opacity-60"
                referrerPolicy="no-referrer"
              />
              {/* Bottom-left diagonal emerald glow inside hero image matching `00:00` */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_18%_75%,rgba(44,245,133,0.34),transparent_65%),linear-gradient(to_top,#0C130F_0%,rgba(12,19,15,0.45)_55%,rgba(12,19,15,0.25)_100%)]"
              />

              {/* Editorial Brand & Title inside Hero Image */}
              <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/45 border border-white/15 backdrop-blur-md self-start">
                  <img
                    src={brandLogo}
                    onError={(e) => {
                      e.currentTarget.src = '/logo.png';
                    }}
                    alt="TheCodeSpark Technologies Private Limited Logo"
                    className="h-6 w-auto object-contain shrink-0"
                  />
                  <div className="flex flex-wrap items-center gap-x-2 text-xs">
                    <span className="font-bold text-white font-display">
                      TheCodeSpark Technologies{' '}
                      <span className="text-[#2CF585]">Private Limited</span>
                    </span>
                    <span className="hidden sm:inline text-white/40">•</span>
                    <span className="text-[10px] font-mono text-[#2CF585] uppercase tracking-wider">
                      Lucknow On-Campus • In-Person Engineering
                    </span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.06] max-w-3xl"
                  >
                    Learn Coding from India&apos;s{' '}
                    <span className="text-[#2CF585]">renowned professors</span>
                  </motion.h1>

                  <div className="text-left lg:text-right space-y-1 shrink-0">
                    <div className="text-sm font-bold text-white font-display">
                      In-Person On-Campus Labs
                    </div>
                    <div className="text-[11px] font-mono text-white/75">
                      Indrapuri / Gomti Nagar Lucknow Campus
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Kinetic Inline Expanding Mint Pill Headline Block (`00:00 – 00:01`) */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-24 sm:pb-28">
            <motion.div
              style={{ y: heroHeadlineY }}
              className="space-y-8"
            >
              <div className="text-2xl sm:text-4xl lg:text-[44px] font-bold font-display text-white leading-[1.38] tracking-tight flex flex-wrap items-center gap-x-3 gap-y-3">
                <span>Trusted by</span>

                {/* Pill 1 expanding smoothly like `00:00 -> 00:01` */}
                <motion.span
                  initial={{ opacity: 0, scaleX: 0.35, width: 64 }}
                  whileInView={{ opacity: 1, scaleX: 1, width: 'auto' }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.05, ease: EASE_OUT_EXPO }}
                  whileHover={{ scale: 1.03 }}
                  style={{ originX: 0 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2CF585] text-[#0D1E14] shadow-[0_10px_30px_rgba(44,245,133,0.32)] overflow-hidden"
                >
                  <span className="text-lg sm:text-2xl font-black font-mono tabular-nums whitespace-nowrap">
                    1,000,000+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold leading-tight max-w-[140px]">
                    Brilliant Students Taught in TheCodeSpark Technologies Private Limited
                  </span>
                </motion.span>

                <span>with</span>

                {/* Pill 2 expanding smoothly */}
                <motion.span
                  initial={{ opacity: 0, scaleX: 0.35 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.14, ease: EASE_OUT_EXPO }}
                  whileHover={{ scale: 1.03 }}
                  style={{ originX: 0 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2CF585] text-[#0D1E14] shadow-[0_10px_30px_rgba(44,245,133,0.32)] overflow-hidden"
                >
                  <span className="text-lg sm:text-2xl font-black font-mono tabular-nums whitespace-nowrap">
                    733K+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold leading-tight max-w-[130px]">
                    YouTube Subscribers On Our Channel
                  </span>
                </motion.span>

                {/* Accent inline sliding mint pill spacer matching `00:01` rhythm */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0.2, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT_EXPO }}
                  className="hidden sm:inline-block w-14 h-8 rounded-full bg-[#2CF585] shadow-[0_6px_20px_rgba(44,245,133,0.3)]"
                />

                <span>&amp; guided by</span>

                {/* Pill 3 expanding smoothly */}
                <motion.span
                  initial={{ opacity: 0, scaleX: 0.35 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.26, ease: EASE_OUT_EXPO }}
                  whileHover={{ scale: 1.03 }}
                  style={{ originX: 0 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2CF585] text-[#0D1E14] shadow-[0_10px_30px_rgba(44,245,133,0.32)] overflow-hidden"
                >
                  <span className="text-lg sm:text-2xl font-black font-mono tabular-nums whitespace-nowrap">
                    20+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold leading-tight max-w-[155px]">
                    Professional Instructors With Industry Level Experience
                  </span>
                </motion.span>

                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.32, ease: EASE_OUT_EXPO }}
                  className="hidden sm:inline-block w-9 h-8 rounded-full bg-[#2CF585] shadow-[0_6px_20px_rgba(44,245,133,0.3)]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <MintPillButton
                  label="Learn More"
                  variant="mint"
                  onClick={() => {
                    document
                      .getElementById('classroom-to-career')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
                <MintPillButton
                  label="Visit Lucknow Campus"
                  variant="dark"
                  onClick={onApplyOffline}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 2. SCROLL-DRIVEN CURTAIN + STICKY RECEDING SHEET DECK (`00:02–09`)  */}
        {/* =================================================================== */}
        <motion.section style={{ y: curtainY }} className="relative z-20 -mt-10 px-2 sm:px-4">
          {/* Header Rounded Sheet (`00:02`) */}
          <div className="max-w-7xl mx-auto rounded-t-[28px] sm:rounded-t-[36px] bg-white text-[#141916] px-6 sm:px-12 pt-14 sm:pt-20 pb-12 sm:pb-16 text-center shadow-[0_-22px_55px_rgba(0,0,0,0.32)]">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.08] max-w-3xl mx-auto"
            >
              What Makes Us{' '}
              <span className="text-[#059669] italic font-serif">Different</span>{' '}
              From Others
            </motion.h2>
            <p className="text-xs sm:text-base text-[#525E56] max-w-2xl mx-auto mt-4">
              Learn in a focused, distraction-free expert learning environment
              with expert mentors guiding you at every step.
            </p>
          </div>

          {/* Scroll-Scale Sticky Stacking Cards (`00:03 – 00:09`) */}
          <div className="max-w-7xl mx-auto bg-white pb-8 space-y-6 px-2 sm:px-4">
            {differenceSheets.map((sheet, idx) => (
              <StickyDeckSheet
                key={sheet.id}
                sheet={sheet}
                idx={idx}
                onApplyOffline={onApplyOffline}
              />
            ))}

            {/* 4th Sticky Sheet: Code Studio To Career Program (`00:08–00:09`) */}
            <div
              id="classroom-to-career"
              className="sticky rounded-[28px] sm:rounded-[34px] bg-white border border-black/10 shadow-[0_-16px_45px_rgba(0,0,0,0.12)] overflow-hidden"
              style={{ top: '118px', zIndex: 16 }}
            >
              <div className="p-6 sm:p-10 lg:p-14 space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="space-y-2 max-w-3xl">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#141916] font-display tracking-tight">
                      TheCodeSpark Technologies Private Limited{' '}
                      <span className="text-[#059669]">Code Studio</span> To
                      Career Program
                    </h2>
                    <p className="text-xs sm:text-sm text-[#525E56]">
                      From our code studio to career success, build real skills
                      that get you hired.
                    </p>
                  </div>

                  {/* Category Filter Pills w/ spring layout pill */}
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { id: 'all', label: 'All' },
                      { id: 'web', label: 'Web Development' },
                      { id: 'python', label: 'Python with Data Science' },
                      { id: 'java', label: 'Java & DSA' },
                      {
                        id: 'ignite',
                        label: 'TheCodeSpark Technologies Private Limited IGNITE'
                      }
                    ].map((tab) => {
                      const active = activeCourseCategory === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveCourseCategory(tab.id as any)}
                          className={`relative px-4 py-2 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer ${
                            active
                              ? 'text-[#0D1E14]'
                              : 'text-[#4B5550] hover:text-[#141916] bg-[#F3F4F3] border border-black/[0.06]'
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="campus-studio-pill"
                              transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                              className="absolute inset-0 bg-[#2CF585] rounded-full shadow-xs"
                            />
                          )}
                          <span className="relative z-10">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3 Studio Program Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {filteredClassroomCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      layout
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl p-4 sm:p-5 bg-[#F3F4F3] border border-black/[0.07] hover:border-[#2CF585] transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3.5">
                        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#141916] relative">
                          <img
                            src={course.img}
                            alt={course.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-[#141916]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#2CF585] font-bold">
                            {course.badge}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#141916] font-display leading-snug">
                            {course.title}
                          </h3>
                          <p className="text-xs text-[#525E56] mt-1.5 leading-relaxed">
                            {course.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/[0.07] flex items-center justify-between gap-2">
                        <MintPillButton
                          label="Explore More"
                          variant="mint"
                          onClick={onApplyOffline}
                          className="!text-xs !py-1.5 !pl-3.5 !pr-1.5"
                        />
                        <span className="text-[11px] font-mono text-[#525E56] truncate">
                          {course.mentors}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* 3. SCROLL-GLIDING OVERLAPPING MINT CAPSULE MARQUEE (`00:10`)      */}
          {/* ================================================================= */}
          <div
            ref={marqueeScrollRef}
            className="max-w-7xl mx-auto bg-white pt-10 pb-14 px-2 sm:px-4 overflow-hidden space-y-3.5"
          >
            {/* Row 1 gliding horizontally on scroll */}
            <motion.div
              style={{ x: marqueeRow1X }}
              className="flex flex-wrap md:flex-nowrap gap-3 sm:gap-4 justify-center will-change-transform"
            >
              <div className="flex-1 min-w-0 sm:min-w-[280px] rounded-3xl sm:rounded-full bg-[#2CF585] text-[#0D1E14] px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 shadow-sm">
                <p className="text-xs sm:text-sm font-semibold leading-snug">
                  &ldquo;At TheCodeSpark Technologies Private Limited Tech Campus, daily mentor reviews and
                  live coding built my confidence for product interviews.&rdquo;
                </p>
                <span className="text-xs font-mono font-bold shrink-0">
                  — Aarav · Amazon
                </span>
              </div>

              <div className="flex-1 min-w-0 sm:min-w-[280px] rounded-3xl sm:rounded-full bg-[#2CF585] text-[#0D1E14] px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 shadow-sm">
                <p className="text-xs sm:text-sm font-semibold leading-snug">
                  &ldquo;An environment where you debug live, collaborate daily,
                  and build real production systems from scratch.&rdquo;
                </p>
                <span className="text-xs font-mono font-bold shrink-0">
                  — Rohan · Razorpay
                </span>
              </div>
            </motion.div>

            {/* Row 2 gliding in opposite direction on scroll matching `00:10` */}
            <motion.div
              style={{ x: marqueeRow2X }}
              className="flex justify-center will-change-transform"
            >
              <div className="w-full max-w-2xl rounded-3xl sm:rounded-full bg-[#2CF585] text-[#0D1E14] px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 shadow-sm">
                <p className="text-xs sm:text-sm font-semibold leading-snug">
                  &ldquo;Lucknow&apos;s best distraction-free studio culture for
                  serious coding, DSA, and full-stack launches.&rdquo;
                </p>
                <span className="text-xs font-mono font-bold shrink-0">
                  — Meera · Accenture
                </span>
              </div>
            </motion.div>
          </div>

          {/* ================================================================= */}
          {/* 4. COMMUNITY CAROUSEL WITH CURSOR-FOLLOWING "Drag ↔" (`00:11-17`) */}
          {/* ================================================================= */}
          <div className="max-w-7xl mx-auto bg-white rounded-b-[28px] sm:rounded-b-[36px] px-6 sm:px-12 pb-16 sm:pb-20 pt-4 space-y-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#141916] font-display tracking-tight leading-[1.1]">
                  Be The Part Of{' '}
                  <span className="italic font-serif text-[#059669]">
                    TheCodeSpark Technologies Private Limited Community
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5 space-y-4 lg:pl-8">
                <p className="text-xs sm:text-sm text-[#525E56] leading-relaxed">
                  Campus life in Lucknow: Hackathons, public speaking, code
                  battles &amp; late-night project defense.
                </p>
                <div className="flex items-center justify-between gap-3">
                  <MintPillButton
                    label="Explore Campus"
                    variant="mint"
                    onClick={onApplyOffline}
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => scrollTrack('left')}
                      aria-label="Scroll left"
                      className="w-9 h-9 rounded-full border border-black/15 text-[#141916] hover:bg-[#F3F4F3] flex items-center justify-center cursor-pointer transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => scrollTrack('right')}
                      aria-label="Scroll right"
                      className="w-9 h-9 rounded-full border border-black/15 text-[#141916] hover:bg-[#F3F4F3] flex items-center justify-center cursor-pointer transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Mouse-Drag Carousel Strip with Live Spring Cursor Pill (`00:12 – 00:16`) */}
            <div
              className="relative select-none"
              onMouseEnter={() => setIsHoveringTrack(true)}
              onMouseLeave={() => handleTrackMouseUpOrLeave(true)}
              onMouseMove={handleTrackMouseMove}
              onMouseDown={handleTrackMouseDown}
              onMouseUp={() => handleTrackMouseUpOrLeave(false)}
            >
              {/* Pointer-tracking dark frosted "Drag ↔" circular pill */}
              <AnimatePresence>
                {isHoveringTrack && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      x: smoothCursorX,
                      y: smoothCursorY,
                      translateX: '-50%',
                      translateY: '-50%'
                    }}
                    className="hidden md:flex pointer-events-none absolute left-0 top-0 z-30 w-16 h-16 rounded-full bg-[#141916]/85 backdrop-blur-md text-white text-[11px] font-mono font-semibold items-center justify-center shadow-2xl border border-white/15"
                  >
                    Drag ↔
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                ref={carouselTrackRef}
                className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
              >
                {polaroids.map((p) => (
                  <motion.div
                    key={p.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      if (!dragMovedRef.current) onApplyOffline();
                    }}
                    className="snap-start shrink-0 w-[260px] sm:w-[300px] aspect-[4/4.6] rounded-2xl overflow-hidden bg-[#141916] relative group cursor-pointer shadow-md"
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      draggable={false}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/15"
                    />

                    {/* Top-Right `+` Indicator matching `00:12` */}
                    <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center group-hover:bg-[#2CF585] group-hover:text-[#0D1E14] transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 space-y-2.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-white font-semibold">
                          {p.tag}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-mono text-[#2CF585] font-semibold">
                          {p.badge}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display leading-snug">
                        {p.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* =================================================================== */}
        {/* 5. DARK METHODOLOGY + FLOATING PARALLAX INSET (`00:18 – 00:21`)     */}
        {/* =================================================================== */}
        <section ref={methodologyRef} className="relative py-24 sm:py-28 overflow-hidden">
          <EmeraldStardustBackdrop angle="diagonal-up" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
            {/* Split Row (`00:18`) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight leading-[1.1]">
                    Your{' '}
                    <span className="text-[#2CF585] italic font-serif">Career</span>{' '}
                    Journey At TheCodeSpark Technologies Private Limited
                  </h2>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-xl">
                    From Beginner To Job-Ready, We Guide Your Complete Journey
                    With Skills, Projects, And Career Support.
                  </p>
                </div>

                <MintPillButton
                  label="Start Your Journey"
                  variant="mint"
                  onClick={onApplyOffline}
                />

                {/* White Rounded Accordion Stack matching `00:18` */}
                <div className="space-y-2.5 pt-2">
                  {journeySteps.map((step, idx) => {
                    const isOpen = openMethodologyIdx === idx;
                    return (
                      <div
                        key={step.num}
                        className="rounded-2xl bg-white text-[#141916] overflow-hidden shadow-md transition-all"
                      >
                        <button
                          onClick={() =>
                            setOpenMethodologyIdx(isOpen ? null : idx)
                          }
                          className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3F4F3] transition-colors"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <span className="w-8 h-8 rounded-lg bg-[#EAF9F0] text-[#059669] font-mono text-xs font-black flex items-center justify-center shrink-0">
                              {step.num}
                            </span>
                            <span className="text-sm sm:text-base font-bold font-display truncate">
                              {step.title}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-[#141916] shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180 text-[#059669]' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                              className="overflow-hidden border-t border-black/10 bg-[#FAFBFB]"
                            >
                              <div className="p-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <div className="sm:col-span-5 rounded-xl overflow-hidden aspect-video bg-[#141916]">
                                  <img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <p className="sm:col-span-7 text-xs sm:text-sm text-[#4B5550] leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Studio Recording Video Card (`00:18 – 00:19`) */}
              <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-24">
                <div className="rounded-[26px] overflow-hidden border border-white/15 bg-[#101412] shadow-2xl">
                  <div className="aspect-video relative group bg-black">
                    <video
                      ref={videoRef}
                      src="/assets/aistudio/20261118-0856-37.3384671_7d83c049.mp4"
                      preload="metadata"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />

                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#2CF585] hover:bg-[#1EE074] text-[#0D1E14] flex items-center justify-center shadow-[0_0_32px_rgba(44,245,133,0.55)] opacity-95 group-hover:scale-110 transition-all cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    <div className="absolute bottom-3.5 left-3.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-[#2CF585]">
                      Live Expert Learning Session Recording • Lucknow Campus
                    </div>
                  </div>

                  <div className="p-6 space-y-2 border-t border-white/10">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      How Students Are Being Taught At{' '}
                      <span className="text-[#2CF585]">
                        TheCodeSpark Technologies Private Limited Code Studio
                      </span>
                    </h3>
                    <p className="text-xs text-white/75 leading-relaxed">
                      Learn In A Focused, Distraction-Free Code Studio
                      Environment With Expert Mentors Guiding You At Every Step.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video-matching Floating Parallax Square Inset (`00:19` & `00:27`) */}
            <div className="hidden md:flex justify-start -my-8 pl-2">
              <motion.div
                style={{ y: floatingInsetY, rotate: floatingInsetRotate }}
                className="w-44 h-44 rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#101412] will-change-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80"
                  alt="Lucknow Code Studio Peer Collaboration"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* =============================================================== */}
            {/* 6. TWIN ELECTRIC MINT PILLS ("Solve Real time doubts" `00:20-21`) */}
            {/* =============================================================== */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[11px] font-mono text-[#2CF585] uppercase tracking-widest font-bold block">
                  Learn Directly From The Experts
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight leading-[1.08]">
                  Solve Real time doubts and Problems with Live challenges
                </h2>
                <div className="pt-2">
                  <MintPillButton
                    label="Learn More"
                    variant="mint"
                    onClick={onRequestCallback}
                  />
                </div>
              </div>

              {/* Stacked Electric Mint Pill Bars matching `00:20 – 00:21` */}
              <div className="lg:col-span-6 space-y-3">
                {liveDoubtPills.map((item, idx) => {
                  const isExpanded = openDoubtPillIdx === idx;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                      whileHover={{ x: 5 }}
                      className="rounded-[26px] bg-[#2CF585] text-[#0D1E14] shadow-[0_12px_32px_rgba(44,245,133,0.22)] overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenDoubtPillIdx(isExpanded ? null : idx)
                        }
                        className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <span className="text-sm sm:text-base font-bold font-display">
                          {item.title}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-[#0D1E14]/10 flex items-center justify-center shrink-0">
                          {isExpanded ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                            className="overflow-hidden border-t border-[#0D1E14]/15"
                          >
                            <p className="px-6 pb-4 pt-2.5 text-xs sm:text-sm font-medium text-[#0D1E14]/85">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 7. INDUSTRY LEVEL EXPERTS + PLACED IN 8 MONTHS SHOWCASE             */}
        {/* =================================================================== */}
        <section className="relative z-20 px-2 sm:px-4">
          <div className="max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] bg-white text-[#141916] px-6 sm:px-12 py-16 sm:py-20 space-y-20 shadow-2xl">
            {/* Experts Block */}
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">
                    Learn From{' '}
                    <span className="text-[#059669]">Industry Level</span>{' '}
                    Experts
                  </h2>
                  <p className="text-xs sm:text-sm text-[#525E56]">
                    Learn directly from industry experts working on real-world
                    products and technologies.
                  </p>
                </div>

                {/* Page 1 / 2 Circular Controls */}
                <div className="flex items-center gap-2.5">
                  {[0, 1].map((pg) => (
                    <button
                      key={pg}
                      onClick={() => setMentorPage(pg)}
                      className={`w-9 h-9 rounded-full font-mono text-xs font-bold transition-all cursor-pointer border ${
                        mentorPage === pg
                          ? 'bg-[#2CF585] text-[#0D1E14] border-[#2CF585] shadow-sm'
                          : 'bg-[#F3F4F3] text-[#4B5550] border-black/10 hover:border-[#2CF585]'
                      }`}
                    >
                      {pg + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
                {visibleMentors.map((m, idx) => {
                  const isCenter = idx === 2;
                  return (
                    <motion.div
                      key={`${mentorPage}-${idx}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      whileHover={{ y: -8 }}
                      className={`relative rounded-2xl overflow-hidden bg-[#141916] border border-black/10 shadow-lg cursor-pointer group ${
                        isCenter
                          ? 'lg:scale-105 lg:z-20 aspect-[3/4.2] ring-2 ring-[#2CF585]'
                          : 'aspect-[3/4]'
                      }`}
                    >
                      <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-[#2CF585] group-hover:text-[#0D1E14] transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                      </div>
                      <img
                        src={m.img}
                        alt={m.alt}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Placed In 8 Months Block */}
            <div className="pt-12 border-t border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
                  Get Yourself <br />
                  <span className="text-[#059669]">Placed In 8 Months!</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#525E56] leading-relaxed">
                  Learn in a focused, distraction-free expert learning
                  environment with expert mentors guiding you at every step.
                </p>
                <div className="pt-2">
                  <MintPillButton
                    label="Learn More"
                    variant="mint"
                    onClick={onApplyOffline}
                  />
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {placedStudents.map((p) => (
                  <motion.div
                    key={p.name}
                    whileHover={{ y: -4 }}
                    className="relative rounded-2xl overflow-hidden bg-[#F3F4F3] border border-black/[0.07] hover:border-[#2CF585] transition-all group pt-4 px-3 pb-4 text-center"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute top-2 inset-x-0 text-center text-2xl font-black font-display tracking-widest text-black/[0.04]"
                    >
                      PLACED
                    </span>
                    <div className="relative z-10 rounded-xl overflow-hidden bg-white mx-auto w-20 h-20 mb-3 shadow-sm">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="relative z-10 space-y-0.5">
                      <span className="text-sm font-black text-[#141916] font-display block tracking-tight">
                        {p.logoText}
                      </span>
                      <span className="text-[11px] font-bold text-[#4B5550] font-display block uppercase">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono tabular-nums text-[#059669] font-bold block">
                        {p.lpa}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 8. CLOSING ACTION SHEET ("Apply For Placement Assistance" `00:22-24`)*/}
        {/* =================================================================== */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <EmeraldStardustBackdrop angle="top-left" />

          <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="rounded-[28px] sm:rounded-[36px] bg-white text-[#141916] p-6 sm:p-10 lg:p-14 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Editorial Block + Unique Form Photo */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#059669] font-bold block">
                      Lucknow On-Campus Admissions
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight leading-tight">
                      Apply For Placement Assistance
                    </h2>
                    <p className="text-xs sm:text-sm text-[#525E56] leading-relaxed">
                      Transform Your Learning Journey Into A Career Breakthrough
                      With TheCodeSpark Technologies Private Limited. Register
                      for the upcoming On-Campus cohort at our Lucknow campus.
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-black/10 bg-[#F7F8F7] aspect-[4/3] shadow-sm">
                    <img
                      src="/assets/aistudio/Confident_College_Portrait_in_Navy_Blazer1_e547f0b4.png"
                      alt="Placement Assistance Advisor at TheCodeSpark Technologies Private Limited"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="text-xs font-mono text-[#525E56] space-y-1">
                    <div className="flex items-center gap-2 font-bold text-[#141916]">
                      <Phone className="w-3.5 h-3.5 text-[#059669]" />
                      <a href="tel:+917398839769" className="hover:underline">
                        +91 7398839769
                      </a>
                      <span>/</span>
                      <a href="tel:+919548248925" className="hover:underline">
                        +91 9548248925
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Video Mosaic (`00:22`): Minimal Underlined Form + Electric Mint Square + Dark Event Bar */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                    <div className="md:col-span-7 rounded-2xl bg-[#F7F8F7] border border-black/[0.06] p-5 sm:p-6 flex flex-col justify-between">
                      {isSubmitted ? (
                        <div className="py-8 text-center space-y-3">
                          <CheckCircle2 className="w-11 h-11 text-[#059669] mx-auto" />
                          <h3 className="text-lg font-bold font-display text-[#141916]">
                            Application Received!
                          </h3>
                          <p className="text-xs text-[#525E56]">
                            Thank you, <strong>{name}</strong>. Our campus
                            admissions team will call you at{' '}
                            <span className="font-mono font-bold text-[#059669]">
                              {phone}
                            </span>{' '}
                            to schedule your in-person campus visit and demo
                            class.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Full Name *"
                              className="w-full px-1 py-2.5 bg-transparent border-b border-black/15 text-xs text-[#141916] placeholder-[#9CA3AF] focus:outline-none focus:border-[#059669]"
                            />
                            <input
                              type="tel"
                              inputMode="numeric"
                              pattern="[0-9]{10}"
                              maxLength={10}
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                              placeholder="10-Digit Mobile Number *"
                              className="w-full px-1 py-2.5 bg-transparent border-b border-black/15 text-xs font-mono text-[#141916] placeholder-[#9CA3AF] focus:outline-none focus:border-[#059669]"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email Address *"
                              className="w-full px-1 py-2.5 bg-transparent border-b border-black/15 text-xs text-[#141916] placeholder-[#9CA3AF] focus:outline-none focus:border-[#059669]"
                            />
                            <input
                              type="text"
                              required
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="City (e.g. Lucknow) *"
                              className="w-full px-1 py-2.5 bg-transparent border-b border-black/15 text-xs text-[#141916] placeholder-[#9CA3AF] focus:outline-none focus:border-[#059669]"
                            />
                          </div>
                          <textarea
                            rows={2}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Notes / Doubts (optional)..."
                            className="w-full px-1 py-2 bg-transparent border-b border-black/15 text-xs text-[#141916] placeholder-[#9CA3AF] focus:outline-none focus:border-[#059669]"
                          />
                          <div className="flex items-center justify-end pt-2">
                            <MintPillButton
                              type="submit"
                              label="Submit Application"
                              variant="dark"
                            />
                          </div>
                        </form>
                      )}
                    </div>

                    {/* Electric Mint Interactive Tile (`00:22`) */}
                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      onClick={onApplyOffline}
                      className="md:col-span-5 rounded-2xl bg-[#2CF585] hover:bg-[#1EE074] text-[#0D1E14] p-6 flex flex-col justify-between cursor-pointer transition-colors shadow-sm min-h-[205px]"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0D1E14]/70 block">
                          In-Person Demo Class
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display leading-snug">
                          Let&apos;s plan your Lucknow Campus visit &amp; free
                          coding session
                        </h3>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-xs font-bold">Book Seat</span>
                        <span className="w-8 h-8 rounded-full bg-[#0D1E14]/15 flex items-center justify-center">
                          <Plus className="w-4 h-4" />
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Dark Bottom Horizontal Announcement Bar (`00:22 – 00:23`) */}
                  <div className="rounded-2xl bg-[#191C1A] text-white px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-[#2CF585] text-[#0D1E14] text-[10px] font-mono font-black shrink-0">
                        LUCKNOW 2026
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-white/90">
                        Indrapuri / Gomti Nagar On-Campus Code Studio · Daily
                        In-Person Mentor Support
                      </span>
                    </div>
                    <button
                      onClick={onRequestCallback}
                      className="text-xs font-mono font-bold text-[#2CF585] hover:underline shrink-0 cursor-pointer text-left sm:text-right"
                    >
                      Request Callback →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating Bottom Sticky Pill Dock (`00:24 – 00:27` style bar) */}
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
          <div className="p-1.5 rounded-full bg-[#161B18]/95 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-1.5">
            <button
              onClick={onRequestCallback}
              className="px-4 py-2 rounded-full text-xs font-semibold text-white/85 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
            >
              Request Callback
            </button>

            <button
              onClick={onApplyOffline}
              className="px-5 py-2 rounded-full bg-[#2CF585] hover:bg-[#1EE074] text-[#0D1E14] text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Visit Lucknow Campus →
            </button>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};
