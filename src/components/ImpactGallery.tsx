import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, ArrowUpRight, X, Sparkles, MapPin } from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface CampusCard {
  id: string;
  category: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  location: string;
}

const CAMPUS_CARDS: CampusCard[] = [
  {
    id: 'keynote-tour',
    category: 'Keynote Series',
    tag: 'Auditorium',
    title: "TheCodeSpark's Keynote Series",
    desc: 'Packed auditoriums across top engineering colleges delivering unfiltered career truths, engineering roadmaps, and industry standards.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&auto=format&fit=crop&q=80',
    location: 'IIT & NIT Campuses'
  },
  {
    id: 'seminar-tour',
    category: 'Campus Seminars',
    tag: 'Engineering Tour',
    title: "TheCodeSpark's Seminar Tour",
    desc: 'We Delivered Impactful Seminars Across Multiple Campuses, Sharing Real Engineering Guidance.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    location: 'Lucknow & Pan-India'
  },
  {
    id: 'meet-and-greet',
    category: 'Networking',
    tag: 'Mentorship',
    title: 'Meet And Greet',
    desc: 'Open Conversations About Careers, Coding, Intensive Training, Internships, Real-World Engineering, And Placement Roadmaps.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
    location: 'TheCodeSpark Tech Hub'
  },
  {
    id: 'campus-life',
    category: 'Peer Culture',
    tag: 'Community',
    title: 'Campus Life & Lawn Meetups',
    desc: 'Lifelong Friendships, Late-Night Brainstorming, And Peer Bonding That Fuels Engineering Ambition.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80',
    location: 'Green Lawn & Coding Zones'
  },
  {
    id: 'hackathon-sprints',
    category: 'Production Sprints',
    tag: 'Ship Overnight',
    title: 'Hackathon Sprints & Product Defense',
    desc: 'Late-night architecture sprints, deploying live full-stack apps to production, and defending codebase before technical panels.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    location: '24/7 Hacker Lab'
  },
  {
    id: 'desk-mentorship',
    category: '1-on-1 Guidance',
    tag: 'Doubt Desk',
    title: 'In-Person Desk Mentorship',
    desc: 'Senior tech leads sitting side-by-side with learners, debugging complex state management, optimizing queries, and polishing resumes.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    location: 'Counselor & Mentor Hub'
  }
];

export const ImpactGallery: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>('seminar-tour');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="impact-section" className="py-16 md:py-24 bg-[#2A2A2A] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Subtle background ambient glows matching other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#E10600]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container strictly matching max-w-5xl display size */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Block with synchronized typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-10 pb-4 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span>Campus Impact & Culture</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              How We Are Doing It Faster And Better Than Others!
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Experience the energy inside our seminars, tech campuses, and community meetups where real builders connect, write production code, and launch high-impact tech careers.
            </p>
          </div>

          {/* Action buttons: Video highlight button + Left/Right carousel arrows */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#E10600]/15 hover:bg-[#E10600]/25 border border-[#E10600]/40 text-white text-xs font-semibold transition-all cursor-pointer shadow-lg shadow-[#E10600]/10 group"
            >
              <div className="w-4 h-4 rounded-full bg-[#E10600] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-2 h-2 fill-current ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Horizontal Cards Filmstrip */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-5 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6"
        >
          {CAMPUS_CARDS.map((card) => {
            const isSelected = activeCardId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onClick={() => setActiveCardId(card.id)}
                className={`relative w-[250px] sm:w-[275px] md:w-[290px] h-[390px] sm:h-[430px] shrink-0 rounded-2xl overflow-hidden cursor-pointer snap-start border transition-all duration-500 group select-none ${
                  isSelected
                    ? 'border-[#ff5722]/60 shadow-2xl shadow-[#ff5722]/20 ring-1 ring-[#ff5722]/30 scale-[1.01]'
                    : 'border-white/10 shadow-xl shadow-black/60 hover:border-white/30'
                } bg-[#111116]`}
              >
                {/* Background Photo */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle vignette darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

                {/* Card Top Badges */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 shadow-md">
                    {card.category}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center justify-center group-hover:bg-[#ff5722] group-hover:border-[#ff5722] transition-colors shadow-lg">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Default Bottom Peek (shown when drawer is folded) */}
                <div
                  className={`absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300 pointer-events-none ${
                    isSelected ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[10.5px] text-[#ff7849] font-mono mb-0.5">
                    <MapPin className="w-2.5 h-2.5" />
                    <span>{card.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-display leading-tight">
                    {card.title}
                  </h3>
                  <span className="text-[10.5px] text-neutral-400 mt-0.5 block">
                    Hover to view details →
                  </span>
                </div>

                {/* Orange Drawer Slide-up Animation */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#c2410c] via-[#d94819] to-[#ea580c] text-white p-4 sm:p-5 rounded-t-2xl shadow-2xl transition-all duration-400 ease-out z-20 flex flex-col justify-end ${
                    isSelected
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                  }`}
                >
                  <div className="inline-flex items-center gap-1.5 text-[9.5px] font-mono uppercase tracking-widest text-orange-200 mb-1 font-bold">
                    <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
                    <span>TheCodeSpark Impact</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white font-display leading-tight tracking-tight mb-1.5">
                    {card.title}
                  </h3>

                  <p className="text-xs text-white/95 leading-relaxed font-normal">
                    {card.desc}
                  </p>

                  <div className="pt-2.5 mt-2.5 border-t border-white/20 flex items-center justify-between text-[10.5px] text-white/90 font-mono">
                    <span>{card.location}</span>
                    <span className="font-semibold underline underline-offset-2">Live Session</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom subtle indicator line */}
        <div className="mt-3.5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span>TheCodeSpark Technologies Private Limited • Campus Tours</span>
          <span className="hidden sm:inline">Use arrows or swipe to navigate through campus experiences</span>
        </div>
      </div>

      {/* Video Modal playing the user's uploaded video */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111116] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-3">
                  <img
                    src={brandLogo}
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                    alt="Logo"
                    className="h-6 w-auto object-contain filter drop-shadow"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      How We Are Doing It Faster And Better Than Others!
                    </h4>
                    <span className="text-[11px] text-neutral-400">
                      TheCodeSpark Technologies Private Limited • Campus Tour
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  src="/assets/aistudio/20261104-1617-28.3796497_bbcbce02.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#0a0a0d] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-300">
                <span>Join our next offline seminar tour or on-campus cohort in Lucknow.</span>
                <a
                  href="#contact-form"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#ff5722] hover:bg-[#ff5722]/90 text-white font-semibold transition-all cursor-pointer whitespace-nowrap"
                >
                  Book Seat in Next Seminar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
