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
  image?: string;
  videoUrl?: string;
  type: 'image' | 'video';
  location: string;
}

const CAMPUS_CARDS: CampusCard[] = [
  {
    id: 'keynote-tour',
    category: 'Auditorium Keynote',
    tag: 'Live Coding',
    type: 'image',
    title: "TheCodeSpark Technologies Private Limited AI & Next.js Keynote",
    desc: 'Grand auditorium conference showcasing production Next.js architectures, AI coding workflows, and real engineering guidance to over 1,500 developers.',
    image: '/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png',
    location: 'National Auditorium • Lucknow'
  },
  {
    id: 'learning-platform-conference',
    category: 'Project Keynote',
    tag: 'EdTech Summit',
    type: 'image',
    title: 'AI-Powered Learning Platform Launch',
    desc: 'Presenting end-to-end full-stack architectures, live system design, and placement roadmaps to thousands of passionate engineers.',
    image: '/assets/aistudio/AI-Powered_Learning_Platform_Conference_4d9a70e4.png',
    location: 'TheCodeSpark Technologies Private Limited Annual Summit'
  },
  {
    id: 'developer-mindset-focus',
    category: 'Developer Mindset',
    tag: 'Builder Spirit',
    type: 'video',
    title: 'Inner Focus & Builder Mentality',
    desc: 'Block out distractions and focus on mastery. Cultivating the mental resilience, grit, and focus needed to crack top-tier engineering roles.',
    videoUrl: '/assets/aistudio/dfef7c106c7be779a3beaa99bfcc24bf_bcbd35b4.mp4',
    location: 'Mindset & Leadership Series'
  },
  {
    id: 'hackathon-badges',
    category: 'Hackathon Sprints',
    tag: 'Build & Deploy',
    type: 'image',
    title: 'TCS Hackathon Participant Day',
    desc: 'Official hacker badges, participant lanyards, and late-night coding sprints where students build, innovate, and deploy live production code.',
    image: '/assets/aistudio/TCS_Hackathon_Badge_Desk_Scene_04b4ab8b.png',
    location: '24/7 Hacker Hub & Labs'
  },
  {
    id: 'campus-lecture-hall',
    category: 'University Seminar',
    tag: 'Live Lecture',
    type: 'video',
    title: 'University Tech Keynote & Lecture',
    desc: 'Interactive university lecture hall sessions exploring scalable systems, AI applications, and hands-on coding roadmaps with collegiate audiences.',
    videoUrl: '/assets/aistudio/From_Klickpin.com-_Try_Easy_family_dinner_ideas_that_make_your_next_project_look_polished_and_expensive_for_ideas_worth_saving_right_now-pin-id-75_e4d8fbb9.mp4',
    location: 'University Auditorium Tour'
  },
  {
    id: 'classroom-students',
    category: 'Classroom Labs',
    tag: 'Offline Campus',
    type: 'video',
    title: 'In-Person Coding & Mentorship Lab',
    desc: 'Students coding side-by-side on high-performance machines with senior mentors resolving live doubts and doing real code reviews.',
    videoUrl: '/assets/aistudio/From_Klickpin.com-_Dreamy_vision_board_ideas_that_are_trending_right_now_across_Pinterest_boards_using_ideas_that_balance_beauty_and_everyday_func_4f0cd93c.mp4',
    location: 'Offline Classroom • Lucknow'
  },
  {
    id: 'humanoid-ai-lab',
    category: 'Autonomous AI',
    tag: 'Robotics & Vision',
    type: 'video',
    title: 'Next-Gen Humanoid AI & Vision Lab',
    desc: 'Exploring computer vision, conversational speech models, and physical AI embodiment in cutting-edge robotics.',
    videoUrl: '/assets/aistudio/ai_humanoid_robot.mp4',
    location: 'AI Innovation Lab'
  }
];

export const ImpactGallery: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>('keynote-tour');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState('/assets/aistudio/dfef7c106c7be779a3beaa99bfcc24bf_bcbd35b4.mp4');

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
                onClick={() => {
                  setActiveCardId(card.id);
                  if (card.type === 'video' && card.videoUrl) {
                    setModalVideoUrl(card.videoUrl);
                    setIsVideoModalOpen(true);
                  }
                }}
                className={`relative w-[250px] sm:w-[275px] md:w-[290px] h-[390px] sm:h-[430px] shrink-0 rounded-2xl overflow-hidden cursor-pointer snap-start border transition-all duration-500 group select-none ${
                  isSelected
                    ? 'border-[#ff5722]/60 shadow-2xl shadow-[#ff5722]/20 ring-1 ring-[#ff5722]/30 scale-[1.01]'
                    : 'border-white/10 shadow-xl shadow-black/60 hover:border-white/30'
                } bg-[#111116]`}
              >
                {/* Background Media: Video autoplay loop or High-res Image */}
                {card.type === 'video' && card.videoUrl ? (
                  <video
                    src={card.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                )}

                {/* Subtle vignette darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

                {/* Card Top Badges */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 shadow-md">
                    {card.category}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {card.type === 'video' && (
                      <span className="inline-flex items-center gap-1 text-[9.5px] font-mono font-bold uppercase tracking-wider text-white bg-[#E10600] px-2 py-0.5 rounded-full shadow-md">
                        <Play className="w-2 h-2 fill-white" /> Video
                      </span>
                    )}
                    <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center justify-center group-hover:bg-[#ff5722] group-hover:border-[#ff5722] transition-colors shadow-lg">
                      {card.type === 'video' ? (
                        <Play className="w-3 h-3 fill-white ml-0.5" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      )}
                    </div>
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
                  <span className="text-[10.5px] text-neutral-400 mt-0.5 flex items-center gap-1">
                    {card.type === 'video' ? 'Click to watch video with sound →' : 'Hover to view details →'}
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
                    <span>TheCodeSpark Technologies Private Limited Impact</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white font-display leading-tight tracking-tight mb-1.5">
                    {card.title}
                  </h3>

                  <p className="text-xs text-white/95 leading-relaxed font-normal">
                    {card.desc}
                  </p>

                  <div className="pt-2.5 mt-2.5 border-t border-white/20 flex items-center justify-between text-[10.5px] text-white/90 font-mono">
                    <span>{card.location}</span>
                    {card.type === 'video' ? (
                      <span className="font-semibold underline underline-offset-2 flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-white" /> Watch Fullscreen
                      </span>
                    ) : (
                      <span className="font-semibold underline underline-offset-2">Live Session</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom subtle indicator line */}
        <div className="mt-3.5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span>TheCodeSpark Technologies Private Limited • Campus Tours</span>
          <span className="hidden sm:inline">Use arrows or swipe to navigate through campus experiences & videos</span>
        </div>
      </div>

      {/* Video Modal playing the user's uploaded videos */}
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
                      TheCodeSpark Technologies Private Limited • Campus Media Showcase
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

              {/* Video Switcher Tabs inside Modal */}
              <div className="px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[11px] font-mono text-neutral-400 shrink-0">Switch Video:</span>
                {[
                  {
                    name: 'Inner Focus & Mindset',
                    url: '/assets/aistudio/dfef7c106c7be779a3beaa99bfcc24bf_bcbd35b4.mp4'
                  },
                  {
                    name: 'University Lecture',
                    url: '/assets/aistudio/From_Klickpin.com-_Try_Easy_family_dinner_ideas_that_make_your_next_project_look_polished_and_expensive_for_ideas_worth_saving_right_now-pin-id-75_e4d8fbb9.mp4'
                  },
                  {
                    name: 'Classroom Coding Lab',
                    url: '/assets/aistudio/From_Klickpin.com-_Dreamy_vision_board_ideas_that_are_trending_right_now_across_Pinterest_boards_using_ideas_that_balance_beauty_and_everyday_func_4f0cd93c.mp4'
                  },
                  {
                    name: 'Full Campus Tour',
                    url: '/assets/aistudio/20261104-1617-28.3796497_bbcbce02.mp4'
                  }
                ].map((item) => (
                  <button
                    key={item.url}
                    onClick={() => setModalVideoUrl(item.url)}
                    className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      modalVideoUrl === item.url
                        ? 'bg-[#E10600] text-white font-bold shadow-md shadow-[#E10600]/30'
                        : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                    }`}
                  >
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  key={modalVideoUrl}
                  src={modalVideoUrl}
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
