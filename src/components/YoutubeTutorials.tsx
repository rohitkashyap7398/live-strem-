import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Youtube } from 'lucide-react';

interface TutorialVideo {
  id: string;
  title: string;
  views: string;
  likes: string;
  duration: string;
  category: string;
  thumbnail: string;
  summary: string;
  relatedCohort: string;
}

const TUTORIAL_VIDEOS: TutorialVideo[] = [
  {
    id: 'yt-portfolio',
    title: 'Build a Portfolio Website From Scratch',
    views: '82K Views',
    likes: '3.4K Likes',
    duration: '1:42:00',
    category: 'Creative Design',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    summary: 'Awwwards-level interactive portfolio with Framer Motion, Tailwind CSS, custom cursors, and responsive layouts.',
    relatedCohort: 'IGNITE 1.0 Web Dev'
  },
  {
    id: 'yt-placement-2025',
    title: 'How to Get Placed in Tech in 2024 (No Luck, Just Skills)',
    views: '46.5K Views',
    likes: '2.5K Likes',
    duration: '24:18',
    category: 'Career Roadmap',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    summary: 'Honest, realistic roadmap to crack high-paying tech jobs without relying on college referrals or luck.',
    relatedCohort: 'All IGNITE Cohorts'
  },
  {
    id: 'yt-webdev-roadmap',
    title: 'Complete Web Development Roadmap 2024',
    views: '140.6K Views',
    likes: '6.6K Likes',
    duration: '45:10',
    category: 'Full Stack Roadmap',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    summary: 'Frontend to Backend, Databases, Docker, and Generative AI integration explained step by step.',
    relatedCohort: 'IGNITE 1.0 Flagship'
  },
  {
    id: 'yt-master-js',
    title: 'Master JavaScript in 30 Days (Learn Everything)',
    views: '230K Views',
    likes: '39.4K Likes',
    duration: '3:15:00',
    category: 'JavaScript Core',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    summary: 'Execution contexts, closures, call stack, asynchronous event loop, and modern ES6+ patterns from zero.',
    relatedCohort: 'IGNITE 1.0 Web Dev'
  },
  {
    id: 'yt-genai-gemini',
    title: 'Generative AI & LLM Agents with Gemini: Practical Deep Dive',
    views: '98K Views',
    likes: '12K Likes',
    duration: '52:40',
    category: 'Gen AI & LLMs',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    summary: 'Build autonomous agents, multi-turn chat applications, and RAG search pipelines with Google Gemini API.',
    relatedCohort: 'IGNITE 2.0 AI & Data'
  },
  {
    id: 'yt-react-next',
    title: 'React 19 & Next.js 15: Build & Deploy Full Stack SaaS',
    views: '185K Views',
    likes: '18K Likes',
    duration: '2:10:00',
    category: 'Full Stack SaaS',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    summary: 'React 19 compiler, Server Actions, PostgreSQL with Prisma ORM, and automated GitHub Actions CI/CD.',
    relatedCohort: 'IGNITE 1.0 Flagship'
  },
  {
    id: 'yt-system-design',
    title: 'System Design & High-Throughput Microservices in Node.js',
    views: '112K Views',
    likes: '9.8K Likes',
    duration: '1:18:00',
    category: 'System Design',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    summary: 'Horizontal scaling, Redis caching, message queues, rate limiting, and microservices architecture.',
    relatedCohort: 'IGNITE 3.0 Intensive'
  }
];

export const YoutubeTutorials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const floatScrollRef = useRef<number>(0);
  const targetScrollRef = useRef<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(!document.hidden);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting && !document.hidden),
      { threshold: 0.08 }
    );
    observer.observe(el);
    const onVisibility = () => {
      if (document.hidden) setIsInView(false);
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Continuous smooth horizontal auto-scroll across tutorial cards when visible
  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 64);
      lastTime = now;

      const container = carouselRef.current;
      if (container) {
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          if (targetScrollRef.current !== null) {
            const diff = targetScrollRef.current - floatScrollRef.current;
            if (Math.abs(diff) < 1.5) {
              floatScrollRef.current = ((targetScrollRef.current % halfWidth) + halfWidth) % halfWidth;
              targetScrollRef.current = null;
            } else {
              floatScrollRef.current += diff * Math.min(1, dt * 0.012);
            }
            const wrapped = ((floatScrollRef.current % halfWidth) + halfWidth) % halfWidth;
            container.scrollLeft = wrapped;
          } else if (!isPaused && isInView) {
            floatScrollRef.current += (dt / 1000) * 62;
            if (floatScrollRef.current >= halfWidth) {
              floatScrollRef.current -= halfWidth;
            } else if (floatScrollRef.current < 0) {
              floatScrollRef.current += halfWidth;
            }
            container.scrollLeft = floatScrollRef.current;
          } else {
            floatScrollRef.current = container.scrollLeft;
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, isInView]);

  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;
    const halfWidth = container.scrollWidth / 2;
    if (halfWidth <= 0) return;
    const base = targetScrollRef.current ?? floatScrollRef.current;
    const step = direction === 'left' ? -340 : 340;
    targetScrollRef.current = base + step;
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white dark:bg-[#2A2A2A] text-slate-900 dark:text-white relative overflow-hidden border-t border-b border-slate-200 dark:border-white/[0.08] transition-colors">
      {/* GPU-free ambient glow matching sibling sections */}
      <div
        className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[380px] pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(225, 6, 0, 0.1), transparent)' }}
      />

      {/* Main Container strictly matching max-w-5xl display size */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Block matching max-w-5xl standard */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-10 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
          <div className="max-w-2xl space-y-2.5">
            {/* Top Tag: YOUTUBE pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 text-xs font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span className="text-[#E10600] font-bold uppercase tracking-wider text-[11px]">Free YouTube Tutorials</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-tight">
              Learn In-Demand Technologies. Build Real-World Projects.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
              Explore Industry-Focused Courses, Practical Coding Lessons &amp; Career-Ready Learning Resources.
            </p>
          </div>

          {/* Carousel Arrow Controls & Channel Link */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://www.youtube.com/@TheCodeSpark_73"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600/10 dark:bg-red-600/15 hover:bg-red-600/20 dark:hover:bg-red-600/25 border border-red-500/40 text-slate-900 dark:text-white text-xs font-semibold transition-all cursor-pointer shadow-md dark:shadow-lg shadow-red-600/10 group"
            >
              <Youtube className="w-3.5 h-3.5 text-red-500 fill-current group-hover:scale-110 transition-transform" />
              <span>Channel</span>
              <ExternalLink className="w-3 h-3 text-slate-500 dark:text-neutral-400 group-hover:text-slate-950 dark:group-hover:text-white" />
            </a>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Next Video"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 
          HORIZONTAL VIDEO CAROUSEL / SLIDER
          Proportionately scaled for max-w-5xl display standard
        */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-5 pt-1 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6"
        >
          {[...TUTORIAL_VIDEOS, ...TUTORIAL_VIDEOS].map((video, idx) => (
            <div
              key={`${video.id}-${idx}`}
              className="w-[260px] sm:w-[285px] md:w-[305px] shrink-0 bg-slate-50 dark:bg-[#1e1e1e] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-[#E10600]/40 transition-all duration-300 shadow-md dark:shadow-xl dark:shadow-black/50 hover:shadow-[#E10600]/15 group flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-white border border-white/10">
                  {video.duration}
                </div>

                {/* Category Tag */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[9.5px] font-mono font-semibold uppercase text-red-400 border border-white/10">
                  {video.category}
                </div>
              </div>

              {/* Title & Stats */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display line-clamp-2 group-hover:text-[#E10600] dark:group-hover:text-red-400 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-[11.5px] text-slate-600 dark:text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {video.summary}
                  </p>
                </div>

                {/* Views & Cohort Row */}
                <div className="pt-2.5 border-t border-slate-200 dark:border-white/5 mt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-neutral-400 font-mono">
                  <span>{video.views} • {video.likes}</span>
                  <span className="text-[10.5px] text-[#ff5722] font-semibold">
                    {video.relatedCohort}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Bottom Info */}
        <div className="mt-3.5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>TheCodeSpark Technologies Private Limited YouTube Channel • 200+ Free Video Tutorials</span>
          </div>
        </div>
      </div>
    </section>
  );
};
