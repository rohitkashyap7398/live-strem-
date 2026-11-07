import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, ChevronRight, X, ExternalLink, Sparkles, Youtube, CheckCircle2 } from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface TutorialVideo {
  id: string;
  title: string;
  views: string;
  likes: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
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
    title: 'How to Get Placed in Tech in 2025/2026 (No Luck, Just Skills)',
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
    title: 'Complete Web Development Roadmap 2025/2026',
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<TutorialVideo | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#2A2A2A] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background glow matching sibling sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#E10600]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container strictly matching max-w-5xl display size */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Block matching max-w-5xl standard */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-10 pb-4 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-2.5">
            {/* Top Tag: YOUTUBE pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span className="text-[#E10600] font-bold uppercase tracking-wider text-[11px]">Free YouTube Tutorials</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              200+ Free Coding Tutorials On TheCodeSpark Technologies Private Limited
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              High-yield, zero-fluff video tutorials covering Data Structures, Modern Full Stack Web Development, Generative AI, and Placement Roadmaps.
            </p>
          </div>

          {/* Carousel Arrow Controls & Channel Link */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://youtube.com/@thecodespark"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600/15 hover:bg-red-600/25 border border-red-500/40 text-white text-xs font-semibold transition-all cursor-pointer shadow-lg shadow-red-600/10 group"
            >
              <Youtube className="w-3.5 h-3.5 text-red-500 fill-current group-hover:scale-110 transition-transform" />
              <span>Channel</span>
              <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-white" />
            </a>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
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
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-5 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6"
        >
          {TUTORIAL_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="w-[260px] sm:w-[285px] md:w-[305px] shrink-0 bg-[#1e1e1e] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E10600]/40 transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-[#E10600]/15 group cursor-pointer snap-start flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

                {/* Play Button Icon that smoothly pops in on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-black/80 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

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
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display line-clamp-2 group-hover:text-red-400 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-[11.5px] text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {video.summary}
                  </p>
                </div>

                {/* Views & Likes Row */}
                <div className="pt-2.5 border-t border-white/5 mt-3 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>{video.views} • {video.likes}</span>
                  <span className="text-[10.5px] text-[#ff5722] font-semibold group-hover:underline">
                    Watch Free →
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
            <span>TheCodeSpark YouTube Channel • 200+ Free Video Tutorials</span>
          </div>
          <span className="hidden sm:inline">Use arrows or swipe to explore tutorials</span>
        </div>
      </div>

      {/* Interactive Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111116] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {selectedVideo.title}
                    </h4>
                    <span className="text-[11px] text-neutral-400">
                      TheCodeSpark Free Tutorial • {selectedVideo.duration} • {selectedVideo.views}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  src="/assets/aistudio/20261101-1411-36.8921526_efb55882.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>

              {/* Details & Related Course CTA */}
              <div className="p-5 bg-[#0a0a0d] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-neutral-300 block">{selectedVideo.summary}</span>
                  <span className="text-neutral-500 font-mono">
                    Related Live Cohort: <strong className="text-white">{selectedVideo.relatedCohort}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href="#courses-section"
                    onClick={() => setSelectedVideo(null)}
                    className="px-4 py-2 rounded-xl bg-[#ff5722] hover:bg-[#e64a19] text-white font-semibold transition-all cursor-pointer whitespace-nowrap shadow-md"
                  >
                    Explore Related Live Cohort
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
