import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Trophy, Users, Zap } from 'lucide-react';

interface HomeKraftShowcaseProps {
  onStartJourney: () => void;
  onRequestCallback: () => void;
  onExploreCourses: () => void;
}

interface FolderCardConfig {
  id: string;
  tabLabel: string;
  tabIcon: React.ComponentType<{ className?: string }>;
  tabLeftClass: string;
  stickyTopClass: string;
  zIndexClass: string;
  spacingClass: string;
  cardBgHex: string;
  title: string;
  bullets: string[];
  ctaLabel: string;
  action: 'start' | 'courses' | 'callback';
  image: string;
  imageBgClass: string;
  imageFitClass: string;
  stickerType: 'seal' | 'trophy' | 'bus';
}

const FOLDER_CARDS: FolderCardConfig[] = [
  {
    id: 'scenario-learning',
    tabLabel: 'Scenario Based Learning',
    tabIcon: BookOpen,
    tabLeftClass: 'left-0',
    stickyTopClass: 'top-[74px] sm:top-[84px]',
    zIndexClass: 'z-10',
    spacingClass: 'mb-10 sm:mb-14',
    cardBgHex: '#EB3315',
    title: 'SCENARIO BASED LEARNING',
    bullets: [
      'Real production debugging',
      'System architecture drills',
      'Chaos to clean engineering',
    ],
    ctaLabel: 'START LEARNING',
    action: 'start',
    image: '/assets/aistudio/image_a03177c0.png',
    imageBgClass: 'bg-[#040814]',
    imageFitClass: 'object-cover object-center',
    stickerType: 'seal',
  },
  {
    id: 'win-work-prep',
    tabLabel: 'Win Work Prep',
    tabIcon: Trophy,
    tabLeftClass: 'left-6 sm:left-[236px]',
    stickyTopClass: 'top-[82px] sm:top-[92px]',
    zIndexClass: 'z-20',
    spacingClass: 'mb-10 sm:mb-14',
    cardBgHex: '#B3220E',
    title: 'WIN WORK PREP',
    bullets: [
      'GitHub & portfolio review',
      'Live mock tech interviews',
      'Production case studies prep',
    ],
    ctaLabel: 'EXPLORE TRACKS',
    action: 'courses',
    image: '/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png',
    imageBgClass: 'bg-[#1a1412]',
    imageFitClass: 'object-cover object-top',
    stickerType: 'trophy',
  },
  {
    id: 'community',
    tabLabel: 'Community',
    tabIcon: Users,
    tabLeftClass: 'left-12 sm:left-[414px]',
    stickyTopClass: 'top-[90px] sm:top-[100px]',
    zIndexClass: 'z-30',
    spacingClass: 'mb-2',
    cardBgHex: '#7A1306',
    title: 'COMMUNITY',
    bullets: [
      'Benchmark against top builders',
      'Give & get real code reviews',
      'Join live sprint hackathons',
    ],
    ctaLabel: 'JOIN COHORT',
    action: 'callback',
    image: '/assets/aistudio/TheCodeSpark_Team_Portraits_09829bd4.png',
    imageBgClass: 'bg-[#F4F6F8]',
    imageFitClass: 'object-contain object-center',
    stickerType: 'bus',
  },
];

const STRUGGLE_STAMPS = [
  {
    quote:
      'I solved 300+ online coding puzzles alone, yet froze when an interviewer asked me to debug a real webhook timing out under load.',
    author: 'KARTIK M.',
    role: 'Final Year B.Tech • Lucknow',
    tiltClass: 'lg:-rotate-[4deg]',
  },
  {
    quote:
      'Most tutorials stop right where real engineering starts — handling auth refresh tokens, Docker networks, rate limits, and server logs.',
    author: 'DIKSHA P.',
    role: 'Junior Engineer • Pune',
    tiltClass: 'lg:rotate-[3deg] lg:translate-y-4',
  },
  {
    quote:
      'I cloned five full-stack apps from videos, yet couldn’t explain why an unindexed database join stalled an entire checkout service.',
    author: 'HARSHIT V.',
    role: 'CS Undergrad • Bengaluru',
    tiltClass: 'lg:-rotate-[2.5deg] lg:-translate-y-1',
  },
  {
    quote:
      'I knew React syntax and Express routes, but lacked real confidence defending system architecture choices with senior engineers.',
    author: 'TANVI R.',
    role: 'Developer Track • Hyderabad',
    tiltClass: 'lg:rotate-[4deg] lg:translate-y-5',
  },
];

const ScallopStrip: React.FC<{ fillClass: string; flip?: boolean }> = ({ fillClass, flip = false }) => (
  <div
    aria-hidden="true"
    className={`w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? 'rotate-180' : ''}`}
  >
    <svg viewBox="0 0 1200 44" preserveAspectRatio="none" className={`w-full h-6 sm:h-9 ${fillClass}`}>
      <path d="M0,44 L0,22 Q25,0 50,22 T100,22 T150,22 T200,22 T250,22 T300,22 T350,22 T400,22 T450,22 T500,22 T550,22 T600,22 T650,22 T700,22 T750,22 T800,22 T850,22 T900,22 T950,22 T1000,22 T1050,22 T1100,22 T1150,22 T1200,22 L1200,44 Z" />
    </svg>
  </div>
);

const CardSticker: React.FC<{ type: 'seal' | 'trophy' | 'bus' }> = ({ type }) => {
  if (type === 'seal') {
    return (
      <div
        aria-hidden="true"
        className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 z-20 pointer-events-none select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]"
      >
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16 rotate-6">
          <path
            d="M40 4 C46 4 49 10 55 11 C61 12 66 8 70 13 C74 18 70 24 72 29 C74 35 79 38 78 44 C77 50 71 52 70 58 C69 64 73 69 68 73 C63 77 57 73 52 75 C46 77 43 80 37 78 C31 76 29 71 23 70 C17 69 12 73 8 68 C4 63 8 57 6 52 C4 46 1 43 3 37 C5 31 10 29 11 23 C12 17 8 12 13 8 C18 4 24 8 29 6 C34 4 36 4 40 4 Z"
            fill="#D8F938"
            stroke="#141414"
            strokeWidth="3"
          />
          <circle cx="40" cy="41" r="18" fill="none" stroke="#141414" strokeWidth="2.5" strokeDasharray="3 2" />
          <path
            d="M34 42 L39 47 L49 34"
            fill="none"
            stroke="#141414"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (type === 'trophy') {
    return (
      <div
        aria-hidden="true"
        className="absolute bottom-3 -left-3 sm:-left-6 z-20 pointer-events-none select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]"
      >
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16 -rotate-6">
          <path
            d="M24 14 H56 V32 C56 43 49 50 40 50 C31 50 24 43 24 32 Z"
            fill="#D8F938"
            stroke="#141414"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path
            d="M24 20 H14 C14 31 18 36 25 36"
            fill="none"
            stroke="#D8F938"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M24 20 H14 C14 31 18 36 25 36"
            fill="none"
            stroke="#141414"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M56 20 H66 C66 31 62 36 55 36"
            fill="none"
            stroke="#D8F938"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M56 20 H66 C66 31 62 36 55 36"
            fill="none"
            stroke="#141414"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <rect x="36" y="50" width="8" height="12" fill="#D8F938" stroke="#141414" strokeWidth="3" />
          <rect x="26" y="62" width="28" height="8" rx="3" fill="#D8F938" stroke="#141414" strokeWidth="3" />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.4)]"
    >
      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#D8F938] text-[#141414] border-[2.5px] border-[#141414] -rotate-2">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-2.5 rounded-sm bg-white border border-[#141414]" />
          <span className="w-3 h-2.5 rounded-sm bg-white border border-[#141414]" />
          <span className="w-3 h-2.5 rounded-sm bg-white border border-[#141414]" />
        </div>
        <span className="font-display font-black text-[11px] sm:text-xs tracking-wider uppercase">
          CODESPARK
        </span>
        <span className="absolute -bottom-2 left-4 w-3.5 h-3.5 rounded-full bg-[#141414] border-2 border-[#D8F938]" />
        <span className="absolute -bottom-2 right-4 w-3.5 h-3.5 rounded-full bg-[#141414] border-2 border-[#D8F938]" />
      </div>
    </div>
  );
};

export const HomeKraftShowcase: React.FC<HomeKraftShowcaseProps> = ({
  onStartJourney,
  onRequestCallback,
  onExploreCourses,
}) => {
  const triggerAction = (type: 'start' | 'courses' | 'callback') => {
    if (type === 'start') onStartJourney();
    else if (type === 'courses') onExploreCourses();
    else onRequestCallback();
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-[28px] sm:rounded-[36px] overflow-x-clip border border-slate-200/90 dark:border-white/10 shadow-2xl bg-[#FAF6EE] dark:bg-[#17171B] text-[#141414] dark:text-white">
      {/* =====================================================================
          BAND 1: STREET BILLBOARD VIDEO + TILTING CRIMSON CARDS
         ===================================================================== */}
      <div className="p-3 sm:p-6 md:p-8 bg-[#FAF6EE] dark:bg-[#19191E] relative overflow-hidden rounded-t-[28px] sm:rounded-t-[36px]">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-[#141414] bg-[#141414]">
          <video
            src="/assets/aistudio/billboard_tcs_street.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="TheCodeSpark Technologies Private Limited Street Billboard Showcase"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mt-4 sm:-mt-5 relative z-10 px-1 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="relative group"
          >
            <div className="hidden sm:block absolute inset-0 translate-y-3 rounded-2xl bg-[#EFE9DA] dark:bg-white/5 border border-black/10 dark:border-white/10" />
            <div className="relative rounded-2xl bg-[#CC1E12] text-white p-6 sm:p-7 border-2 border-[#141414] shadow-xl md:-rotate-[2.5deg] md:group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
              <span className="w-6 h-6 rounded-full bg-[#FAF6EE] dark:bg-[#19191E] absolute -top-3 right-10" />
              <span className="w-5 h-5 rounded-full bg-[#FAF6EE] dark:bg-[#19191E] absolute top-4 -right-2.5" />

              <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight leading-tight">
                BEYOND{' '}
                <span className="italic font-semibold lowercase tracking-normal text-[#DBFF3E]">
                  college
                </span>{' '}
                SYLLABUS
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                College grades never teach architecture tradeoffs, crisp pull requests, or calm debugging at 2 AM — the exact instincts that win offers and earn trust.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative group"
          >
            <div className="hidden sm:block absolute inset-0 translate-y-3 rounded-2xl bg-[#EFE9DA] dark:bg-white/5 border border-black/10 dark:border-white/10" />
            <div className="relative rounded-2xl bg-[#CC1E12] text-white p-6 sm:p-7 border-2 border-[#141414] shadow-xl md:rotate-[2.5deg] md:group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
              <span className="w-6 h-6 rounded-full bg-[#FAF6EE] dark:bg-[#19191E] absolute -top-3 left-10" />
              <span className="w-5 h-5 rounded-full bg-[#FAF6EE] dark:bg-[#19191E] absolute top-4 -left-2.5" />

              <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight leading-tight">
                ENGINEERING{' '}
                <span className="italic font-semibold lowercase tracking-normal text-[#DBFF3E]">
                  never
                </span>{' '}
                WAITS
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                Boilerplate generators write syntax in seconds. High-growth startups hire engineers who understand memory, concurrency, product ownership, and reliability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scalloped Transition into Clean White Band 2 */}
      <div className="bg-[#FAF6EE] dark:bg-[#19191E]">
        <ScallopStrip fillClass="fill-white dark:fill-[#111115]" />
      </div>

      {/* =====================================================================
          BAND 2: STICKY STACKING FOLDER-TAB EXPERIENCE ("HOW YOU'LL MASTER CRAFT")
         ===================================================================== */}
      <div
        className="px-4 sm:px-8 pt-6 pb-16 bg-white dark:bg-[#111115] relative"
        style={{
          backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {/* Header Row */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#EB3315] text-white text-[10px] font-mono font-bold uppercase tracking-[0.2em] -rotate-2 shadow-sm">
            STUDIO WORKFLOW
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#141414] dark:text-white leading-tight">
            HOW YOU&apos;LL{' '}
            <span className="inline-block px-3 py-0.5 rounded-lg bg-[#D8F938] text-[#141414] border-2 border-[#141414] rotate-2 shadow-sm">
              BUILD
            </span>{' '}
            REAL SKILLS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto">
            Three daily engineering habits that separate confident software builders from endless video watchers.
          </p>
        </div>

        {/* Sticky Stacked Folder Tabs (Exact Scroll-Stacking Video Design) */}
        <div className="max-w-4xl mx-auto relative pb-4">
          {FOLDER_CARDS.map((card, idx) => {
            const TabIcon = card.tabIcon;

            return (
              <div
                key={card.id}
                className={`sticky ${card.stickyTopClass} ${card.zIndexClass} ${card.spacingClass} pt-9`}
              >
                {/* Seamless Protruding Folder Tab */}
                <div
                  style={{ backgroundColor: card.cardBgHex }}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 h-9 rounded-t-2xl text-white text-[11px] sm:text-xs font-semibold tracking-wide absolute top-0 ${card.tabLeftClass} z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]`}
                >
                  {/* Concave left fillet when tab is shifted right */}
                  {idx > 0 && (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="w-4 h-4 absolute -left-4 bottom-0 pointer-events-none"
                    >
                      <path d="M16 0 V16 H0 C9 16 16 9 16 0 Z" fill={card.cardBgHex} />
                    </svg>
                  )}

                  <TabIcon className="w-3.5 h-3.5 text-white/95 shrink-0" />
                  <span className="whitespace-nowrap">{card.tabLabel}</span>

                  {/* Concave right fillet blending smoothly into card body */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="w-4 h-4 absolute -right-4 bottom-0 pointer-events-none"
                  >
                    <path d="M0 0 V16 H16 C7 16 0 9 0 0 Z" fill={card.cardBgHex} />
                  </svg>
                </div>

                {/* Main Folder Card Body (Borderless vibrant sheet matching video) */}
                <div
                  style={{ backgroundColor: card.cardBgHex }}
                  className={`relative z-20 p-6 sm:p-8 md:p-10 text-white shadow-[0_-6px_24px_rgba(0,0,0,0.16),0_18px_36px_rgba(0,0,0,0.22)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
                    idx === 0
                      ? 'rounded-b-2xl rounded-tr-2xl sm:rounded-b-3xl sm:rounded-tr-3xl'
                      : 'rounded-2xl sm:rounded-3xl'
                  }`}
                >
                  {/* Left: Condensed Uppercase Headline, 3 White Star Bullets & Lime Pill CTA */}
                  <div className="lg:col-span-5 space-y-5">
                    <h3 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight leading-[0.96]">
                      {card.title}
                    </h3>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-white/95 font-medium">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span className="text-white/95 font-black leading-tight mt-0.5 text-sm">✸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => triggerAction(card.action)}
                        className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#D8F938] hover:bg-[#e5ff5f] text-[#141414] font-display font-black text-xs sm:text-[13px] uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                      >
                        <span>{card.ctaLabel}</span>
                        <span className="w-6 h-6 rounded-full bg-[#EB3315] text-white inline-flex items-center justify-center shrink-0">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.6]" />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Rounded Showcase Media + Playful Floating Lime Sticker */}
                  <div className="lg:col-span-7 relative">
                    <div
                      className={`rounded-2xl overflow-hidden aspect-[16/10] shadow-xl ${card.imageBgClass}`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full ${card.imageFitClass}`}
                      />
                    </div>

                    <CardSticker type={card.stickerType} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          BAND 3: "YOU'RE NOT ALONE ⚡" DARK ATMOSPHERE + 4 SCALLOPED QUOTE STAMPS
         ===================================================================== */}
      <div className="relative overflow-hidden bg-[#150A09] text-white rounded-b-[28px] sm:rounded-b-[36px]">
        <img
          src="/assets/aistudio/Autonomous_AI_Agents_Tech_Talk_Poster_db3b38b0.png"
          alt="Builders Community"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#150A09]/65 via-[#1A0C0A]/75 to-[#120706]/95 pointer-events-none" />

        {/* Top Scallop Strip cutting cleanly from White Band 2 */}
        <div className="relative z-10">
          <ScallopStrip fillClass="fill-white dark:fill-[#111115]" flip />
        </div>

        <div className="relative z-10 px-4 sm:px-8 pt-6 pb-14 max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight inline-flex items-center justify-center flex-wrap gap-2.5">
              <span>YOU&apos;RE</span>
              <span className="italic font-semibold lowercase text-[#D8F938]">not</span>
              <span>ALONE</span>
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#D8F938] text-[#141414] border-2 border-[#141414] rotate-6 shadow-md">
                <Zap className="w-5 h-5 fill-current" />
              </span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-lg mx-auto">
              Every serious engineer hits this wall before learning how real production systems actually work.
            </p>
          </div>

          {/* 4 Scalloped Cloud-Stamp Red Quote Cards matching the video */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 items-center pt-2">
            {STRUGGLE_STAMPS.map((item) => (
              <div
                key={item.author}
                className={`relative rounded-[28px] bg-[#EB3315] p-6 shadow-2xl text-white transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] ${item.tiltClass}`}
              >
                {/* Scalloped decorative bumps around top & bottom edges */}
                <div
                  aria-hidden="true"
                  className="absolute -top-2.5 left-5 right-5 flex justify-between pointer-events-none"
                >
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute -bottom-2.5 left-5 right-5 flex justify-between pointer-events-none"
                >
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                  <span className="w-5 h-5 rounded-full bg-[#EB3315]" />
                </div>

                <div className="relative z-10">
                  <div className="text-3xl font-black text-[#141414]/75 leading-none mb-2 font-display text-center">
                    &ldquo;&rdquo;
                  </div>
                  <p className="text-xs leading-relaxed text-white/95 font-medium min-h-[84px]">
                    {item.quote}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/25">
                    <div className="text-[11px] font-black font-display uppercase tracking-wider text-[#D8F938]">
                      {item.author}
                    </div>
                    <div className="text-[10px] font-mono text-white/85">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeKraftShowcase;
