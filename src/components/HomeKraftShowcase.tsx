import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, GitPullRequest, Layers, Zap, Terminal, Trophy, ShieldCheck } from 'lucide-react';

interface HomeKraftShowcaseProps {
  onStartJourney: () => void;
  onRequestCallback: () => void;
  onExploreCourses: () => void;
}

const FOLDER_CARDS = [
  {
    id: 'architecture',
    tabLabel: 'Architecture First',
    tabIcon: Layers,
    tabShiftClass: 'ml-0',
    bgColor: 'bg-[#CC1E12]',
    tabBgColor: 'bg-[#CC1E12]',
    title: 'SYSTEMS OVER SYNTAX',
    bullets: [
      'Trace race conditions & deadlocks',
      'Design idempotent payment APIs',
      'Profile memory & SQL query plans',
    ],
    ctaLabel: 'START BUILDING',
    action: 'start' as const,
    image: '/assets/aistudio/AI-Powered_Learning_Platform_Conference_4d9a70e4.png',
    stickerColor: '#DBFF3E',
    StickerIcon: ShieldCheck,
    stickerPosition: 'top-3 right-3',
  },
  {
    id: 'code-craft',
    tabLabel: 'PRs & Code Reviews',
    tabIcon: GitPullRequest,
    tabShiftClass: 'sm:ml-[24%]',
    bgColor: 'bg-[#9E160D]',
    tabBgColor: 'bg-[#9E160D]',
    title: 'ZERO-FLUFF CODE CRAFT',
    bullets: [
      'Refactor messy repos line-by-line',
      'Write tests catching real regressions',
      'Defend engineering tradeoffs live',
    ],
    ctaLabel: 'EXPLORE TRACKS',
    action: 'courses' as const,
    image: '/assets/aistudio/JAVALogic__Building_Deep_Learning_399f2731.png',
    stickerColor: '#DBFF3E',
    StickerIcon: Trophy,
    stickerPosition: 'bottom-3 -left-3 sm:left-3',
  },
  {
    id: 'guilds',
    tabLabel: 'Builder Guilds',
    tabIcon: Cpu,
    tabShiftClass: 'sm:ml-[48%]',
    bgColor: 'bg-[#730D06]',
    tabBgColor: 'bg-[#730D06]',
    title: 'SHIP WITH REAL GUILDS',
    bullets: [
      'Weekly production chaos sprints',
      'Build real developer CLI & cloud tools',
      'Peer architecture teardowns & demos',
    ],
    ctaLabel: 'BOOK MENTOR CALL',
    action: 'callback' as const,
    image: '/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png',
    stickerColor: '#DBFF3E',
    StickerIcon: Terminal,
    stickerPosition: '-bottom-2 right-4',
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
    <div className="w-full max-w-6xl mx-auto rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-2xl bg-[#FAF6EE] dark:bg-[#17171B] text-[#141414] dark:text-white">
      {/* =====================================================================
          BAND 1: 3-PANEL PHOTO STRIP + TILTED CRIMSON INSIGHT CARDS
         ===================================================================== */}
      <div className="p-3 sm:p-6 md:p-8 bg-[#FAF6EE] dark:bg-[#19191E] relative overflow-hidden">
        {/* Top 3-Panel Studio Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 rounded-2xl overflow-hidden shadow-xl border-2 border-[#141414] bg-[#141414]">
          {/* Left Candid Studio Photo */}
          <div className="hidden md:block md:col-span-4 h-[230px] sm:h-[290px] overflow-hidden relative">
            <img
              src="/assets/aistudio/TCS_Hackathon_Badge_Desk_Scene_04b4ab8b.png"
              alt="TheCodeSpark Hackathon War Room"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Center Punchy Editorial Poster */}
          <div className="md:col-span-4 h-[250px] sm:h-[290px] relative overflow-hidden bg-[#121216] group">
            <img
              src="/assets/aistudio/TheCodeSpark_Developer_Toolkit_Poster_1d5ebe66.png"
              alt="Developer Engineering Reality"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85" />
            <div className="absolute inset-0 p-5 flex flex-col items-center justify-between text-center text-white">
              <span className="px-2.5 py-0.5 rounded bg-[#CC1E12] text-[10px] font-mono font-bold tracking-[0.22em] uppercase">
                THECODESPARK BRIEF
              </span>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight leading-none">
                  GOT{' '}
                  <span className="inline-block px-2 py-0.5 bg-[#DBFF3E] text-[#141414] rounded-md -rotate-3">
                    5
                  </span>{' '}
                  MINUTES?
                </div>
                <p className="text-sm sm:text-base font-extrabold italic text-[#ff6b4a] tracking-tight">
                  escape tutorial autopilot
                </p>
              </div>

              <div className="text-[10px] font-mono uppercase tracking-widest text-white/85">
                Build Real Production Instincts Before Placement Season
              </div>
            </div>
          </div>

          {/* Right Auditorium Session Photo */}
          <div className="hidden md:block md:col-span-4 h-[230px] sm:h-[290px] overflow-hidden relative">
            <img
              src="/assets/aistudio/Corporate_Training_Auditorium_Session_76c6f74e.png"
              alt="Engineering Seminar Session"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Two Tilted Crimson Insight Cards Overlapping Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mt-5 sm:-mt-8 relative z-10 px-1 sm:px-4">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="relative group"
          >
            {/* Subtle Backing Layer */}
            <div className="hidden sm:block absolute inset-0 translate-y-3 rounded-2xl bg-[#EFE9DA] dark:bg-white/5 border border-black/10 dark:border-white/10" />
            <div className="relative rounded-2xl bg-[#CC1E12] text-white p-6 sm:p-7 border-2 border-[#141414] shadow-xl md:-rotate-[2.5deg] md:group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
              {/* Decorative corner notches mimicking ticket / biscuit cutouts */}
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

          {/* Card 2 */}
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

      {/* Scalloped Transition into Clean White/Ink Band 2 */}
      <div className="bg-[#FAF6EE] dark:bg-[#19191E]">
        <ScallopStrip fillClass="fill-white dark:fill-[#111115]" />
      </div>

      {/* =====================================================================
          BAND 2: STACKED STICKY FOLDER-TAB EXPERIENCE ("HOW YOU'LL BUILD")
         ===================================================================== */}
      <div
        className="px-4 sm:px-8 pt-6 pb-14 bg-white dark:bg-[#111115] relative"
        style={{
          backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.07) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {/* Header Row */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#CC1E12] text-white text-[10px] font-mono font-bold uppercase tracking-[0.2em] -rotate-2 shadow-sm">
            STUDIO WORKFLOW
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#141414] dark:text-white leading-tight">
            HOW YOU&apos;LL{' '}
            <span className="inline-block px-3 py-0.5 rounded-lg bg-[#DBFF3E] text-[#141414] border-2 border-[#141414] rotate-2 shadow-sm">
              MASTER
            </span>{' '}
            CRAFT
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto">
            Three daily engineering habits that separate confident software builders from endless video watchers.
          </p>
        </div>

        {/* Stacked Folder Tabs */}
        <div className="max-w-4xl mx-auto space-y-6">
          {FOLDER_CARDS.map((card, idx) => {
            const TabIcon = card.tabIcon;
            const StickerIcon = card.StickerIcon;

            return (
              <div
                key={card.id}
                className="relative pt-8"
              >
                {/* Protruding Top Folder Tab */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-t-xl ${card.tabBgColor} text-white text-xs font-bold font-mono tracking-wide border-2 border-b-0 border-[#141414] absolute top-0 left-4 ${card.tabShiftClass} z-10`}
                >
                  <TabIcon className="w-3.5 h-3.5 text-[#DBFF3E]" />
                  <span>0{idx + 1} · {card.tabLabel}</span>
                </div>

                {/* Main Folder Card Body */}
                <div
                  className={`rounded-2xl sm:rounded-3xl ${card.bgColor} text-white p-5 sm:p-7 md:p-8 border-2 border-[#141414] shadow-[0_14px_30px_rgba(0,0,0,0.22)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-20`}
                >
                  {/* Left: Headline, 3 Unique Star Bullets & Action Pill */}
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight leading-[1.02]">
                      {card.title}
                    </h3>

                    <ul className="space-y-2 text-xs sm:text-sm text-white/95 font-medium">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="text-[#DBFF3E] font-black leading-tight mt-0.5">✸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => triggerAction(card.action)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#DBFF3E] hover:bg-white text-[#141414] font-display font-black text-xs uppercase tracking-wider border-2 border-[#141414] shadow-[3px_3px_0px_#141414] active:translate-y-0.5 transition-colors cursor-pointer"
                      >
                        <span>{card.ctaLabel}</span>
                        <span className="w-5 h-5 rounded-full bg-[#CC1E12] text-white inline-flex items-center justify-center">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Rounded Scene Photo with Pinned Lime Sticker */}
                  <div className="lg:col-span-7 relative">
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#141414] aspect-[16/10] bg-black/40 shadow-inner">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Playful Scalloped Sticker Icon */}
                    <div
                      aria-hidden="true"
                      className={`absolute ${card.stickerPosition} w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#DBFF3E] text-[#141414] border-2 border-[#141414] shadow-[2px_3px_0px_#141414] flex items-center justify-center rotate-6`}
                    >
                      <StickerIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          BAND 3: "YOU'RE NOT ALONE ⚡" DARK ATMOSPHERE + 4 CRIMSON SEAL STAMPS
         ===================================================================== */}
      <div className="relative overflow-hidden bg-[#150A09] text-white">
        {/* Background Atmospheric Scene */}
        <img
          src="/assets/aistudio/Autonomous_AI_Agents_Tech_Talk_Poster_db3b38b0.png"
          alt="Builders Community"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#150A09]/70 via-[#1A0C0A]/75 to-[#120706]/95 pointer-events-none" />

        {/* Top Scallop Strip cutting cleanly from White Band 2 */}
        <div className="relative z-10">
          <ScallopStrip fillClass="fill-white dark:fill-[#111115]" flip />
        </div>

        <div className="relative z-10 px-4 sm:px-8 pt-6 pb-14 max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight inline-flex items-center justify-center flex-wrap gap-2">
              <span>YOU&apos;RE</span>
              <span className="italic font-semibold lowercase text-[#DBFF3E]">not</span>
              <span>ALONE</span>
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#DBFF3E] text-[#141414] border-2 border-[#141414] rotate-6">
                <Zap className="w-5 h-5 fill-current" />
              </span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-lg mx-auto">
              Every serious engineer hits this wall before learning how real production systems actually work.
            </p>
          </div>

          {/* 4 Tilted Scalloped Stamp Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-4 items-center">
            {STRUGGLE_STAMPS.map((item) => (
              <div
                key={item.author}
                className={`relative rounded-[28px] bg-[#CC1E12] border-2 border-dashed border-[#DBFF3E]/55 p-5 sm:p-6 shadow-2xl text-white transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] ${item.tiltClass}`}
              >
                <div className="text-3xl font-black text-[#DBFF3E]/90 leading-none mb-2 font-display">
                  &ldquo;
                </div>
                <p className="text-xs leading-relaxed text-white/95 font-medium min-h-[84px]">
                  {item.quote}
                </p>

                <div className="mt-4 pt-3 border-t border-white/20">
                  <div className="text-[11px] font-black font-display uppercase tracking-wider text-[#DBFF3E]">
                    {item.author}
                  </div>
                  <div className="text-[10px] font-mono text-white/80">
                    {item.role}
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
