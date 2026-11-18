import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView, animate } from 'motion/react';

/**
 * 0. Section-to-Section Red Seam Drop (Connects alternating Cream/Black bands)
 */
export const SectionSeamDropSvg: React.FC<{ variant?: 'left' | 'center' | 'right' }> = ({
  variant = 'center',
}) => {
  const posClass =
    variant === 'left'
      ? 'left-[18%]'
      : variant === 'right'
      ? 'right-[18%]'
      : 'left-1/2 -translate-x-1/2';

  return (
    <div
      className={`pointer-events-none select-none absolute -top-7 ${posClass} z-20 w-16 h-14`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 56" fill="none" className="w-full h-full overflow-visible">
        <motion.path
          d="M 32 0 L 32 52"
          stroke="#EA2814"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        />
        <motion.circle
          cx="32"
          cy="52"
          r="4"
          fill="#EA2814"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/**
 * 1. Hero Organic Red Loop Thread (Draws dynamically on scroll, matching video 00:00 - 00:01)
 */
export const HeroKineticThread: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.15'],
  });
  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0.3, 1]), {
    stiffness: 110,
    damping: 22,
  });

  return (
    <div ref={containerRef} className="relative w-full h-[360px] sm:h-[440px] select-none pointer-events-none">
      <svg
        viewBox="0 0 420 440"
        fill="none"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {/* Ghost trace guide */}
        <path
          d="M 190 10 C 120 15, 70 70, 95 145 C 115 205, 195 215, 195 265 C 195 295, 160 305, 130 305 C 90 305, 90 355, 155 355 L 250 355 C 310 355, 315 280, 260 250 C 210 225, 225 140, 290 105 C 330 85, 345 25, 270 12"
          stroke="#EA2814"
          strokeOpacity="0.14"
          strokeWidth="1.5"
        />
        {/* Active scroll-drawn red thread */}
        <motion.path
          d="M 190 10 C 120 15, 70 70, 95 145 C 115 205, 195 215, 195 265 C 195 295, 160 305, 130 305 C 90 305, 90 355, 155 355 L 250 355 C 310 355, 315 280, 260 250 C 210 225, 225 140, 290 105 C 330 85, 345 25, 270 12"
          stroke="#EA2814"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        {/* Vertical drop tail */}
        <motion.path
          d="M 210 355 L 210 445"
          stroke="#EA2814"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        {/* Node dots */}
        <motion.circle
          cx="290"
          cy="105"
          r="4.5"
          fill="#EA2814"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <motion.circle
          cx="155"
          cy="355"
          r="4"
          fill="#EA2814"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
        />
        <motion.circle
          cx="210"
          cy="445"
          r="5"
          fill="#EA2814"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </svg>

      {/* Monospace Node Labels matching video 00:00 - 00:01 */}
      <div className="absolute top-[20%] right-[6%] sm:right-[10%] font-mono text-[10px] tracking-[0.18em] uppercase text-[#0E0E0E]/75">
        LOGIC
      </div>
      <div className="absolute top-[55%] right-[4%] sm:right-[8%] font-mono text-[10px] tracking-[0.18em] uppercase text-[#0E0E0E]/75">
        EXECUTION
      </div>
      <div className="absolute bottom-[10%] right-[12%] font-mono text-[10px] tracking-[0.18em] uppercase text-[#0E0E0E]/75">
        SYSTEM
      </div>
    </div>
  );
};

/**
 * 2. Semicircular Branch Arc with Scroll-Illuminated Nodes (Matches video 00:02 - 00:05)
 */
export const SemicircleBranchSvg: React.FC<{
  leftLabel: string;
  rightLabel: string;
  leftNodes: { title: string; sub: string }[];
  rightNodes: { title: string; sub: string }[];
}> = ({ leftLabel, rightLabel, leftNodes, rightNodes }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  });
  const arcProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0.15, 1]), {
    stiffness: 100,
    damping: 22,
  });

  // Progressive reveal opacities as user scrolls past the arc
  const row0Opacity = useTransform(scrollYProgress, [0.05, 0.25], [0.35, 1]);
  const row1Opacity = useTransform(scrollYProgress, [0.22, 0.45], [0.28, 1]);
  const row2Opacity = useTransform(scrollYProgress, [0.42, 0.68], [0.24, 1]);
  const row3Opacity = useTransform(scrollYProgress, [0.6, 0.85], [0.2, 1]);
  const rowOpacities = [row0Opacity, row1Opacity, row2Opacity, row3Opacity];

  return (
    <div ref={ref} className="relative w-full py-8 sm:py-12">
      <div className="max-w-5xl mx-auto relative">
        {/* Top Horizontal Split Line branching down */}
        <svg viewBox="0 0 800 110" fill="none" className="w-full h-20 sm:h-24 overflow-visible" aria-hidden="true">
          <motion.path
            d="M 40 16 L 380 16 C 394 16, 400 22, 400 36 L 400 105"
            stroke="#EA2814"
            strokeWidth="1.8"
            style={{ pathLength: arcProgress }}
          />
          <motion.path
            d="M 760 16 L 420 16 C 406 16, 400 22, 400 36"
            stroke="#EA2814"
            strokeWidth="1.8"
            style={{ pathLength: arcProgress }}
          />
          <circle cx="400" cy="105" r="4" fill="#EA2814" />
        </svg>

        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400 px-2 -mt-6 mb-10">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>

        {/* Center Arc + 4 Left & 4 Right Scroll-Illuminating Nodes */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Arc Nodes */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {leftNodes.map((node, i) => (
              <motion.div
                key={node.title}
                style={{ opacity: rowOpacities[i] }}
                className="lg:text-right p-4 bg-[#111111]/90 border border-white/10 hover:border-[#EA2814]/60 transition-colors"
              >
                <div className="text-[10px] font-mono text-[#EA2814] font-bold tracking-widest uppercase">
                  0{i + 1} / HUMAN LOGIC
                </div>
                <div className="text-base sm:text-lg font-black font-display text-white mt-0.5">
                  {node.title}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed mt-1">{node.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Center SVG Circle Arc */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <svg viewBox="0 0 360 400" fill="none" className="w-64 sm:w-80 h-auto overflow-visible" aria-hidden="true">
              <circle
                cx="180"
                cy="190"
                r="140"
                stroke="#EA2814"
                strokeOpacity="0.16"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="180"
                cy="190"
                r="140"
                stroke="#EA2814"
                strokeWidth="2.2"
                strokeLinecap="round"
                style={{ pathLength: arcProgress }}
                transform="rotate(-90 180 190)"
              />
              {/* Bottom drop arrow into next section */}
              <motion.path
                d="M 180 330 L 180 388 L 194 378"
                stroke="#EA2814"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength: arcProgress }}
              />
              {/* 8 perimeter node dots */}
              {[
                { cx: 80, cy: 92 },
                { cx: 42, cy: 165 },
                { cx: 48, cy: 235 },
                { cx: 95, cy: 298 },
                { cx: 280, cy: 92 },
                { cx: 318, cy: 165 },
                { cx: 312, cy: 235 },
                { cx: 265, cy: 298 },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.cx} cy={pt.cy} r="6.5" fill="#0A0A0A" stroke="#EA2814" strokeWidth="1.8" />
                  <motion.circle
                    cx={pt.cx}
                    cy={pt.cy}
                    r="2.8"
                    fill="#EA2814"
                    animate={{ scale: [1, 1.45, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.22 }}
                  />
                </g>
              ))}
              {/* Center Core Pill */}
              <text
                x="180"
                y="186"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="12"
                fontWeight="800"
                fontFamily="monospace"
                letterSpacing="2"
              >
                CODE + GEN-AI
              </text>
              <text
                x="180"
                y="206"
                textAnchor="middle"
                fill="#EA2814"
                fontSize="11"
                fontWeight="700"
                fontFamily="monospace"
                letterSpacing="2"
              >
                + SHIP LIVE
              </text>
            </svg>
          </div>

          {/* Right Arc Nodes */}
          <div className="lg:col-span-4 space-y-6 order-3">
            {rightNodes.map((node, i) => (
              <motion.div
                key={node.title}
                style={{ opacity: rowOpacities[i] }}
                className="text-left p-4 bg-[#111111]/90 border border-white/10 hover:border-[#EA2814]/60 transition-colors"
              >
                <div className="text-[10px] font-mono text-[#EA2814] font-bold tracking-widest uppercase">
                  0{i + 5} / AI &amp; SHIP
                </div>
                <div className="text-base sm:text-lg font-black font-display text-white mt-0.5">
                  {node.title}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed mt-1">{node.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Animated Counting Rupee Display (Matches video 00:16 - 00:19 CREDIFLOW rolling number)
 */
export const AnimatedRupeeCounter: React.FC<{ target: number }> = ({ target }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      ₹{display.toLocaleString('en-IN')}
    </span>
  );
};

/**
 * 4. Red Fingerprint Imprint SVG (Matches video 00:20 - 00:22 "EVERY PRODUCT CARRIES A HUMAN IMPRINT")
 */
export const FingerprintImprintSvg: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.3'],
  });
  const drawProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0.12, 1]), {
    stiffness: 95,
    damping: 20,
  });

  const ridges = [
    'M 160 300 C 160 220, 260 220, 260 300 C 260 340, 230 370, 210 385',
    'M 140 315 C 130 190, 290 190, 280 315 C 275 355, 250 385, 225 405',
    'M 120 330 C 100 155, 320 155, 300 330 C 292 375, 265 405, 240 422',
    'M 100 340 C 70 120, 350 120, 320 345 C 312 390, 280 420, 255 436',
    'M 80 345 C 45 85, 375 85, 340 350 C 330 405, 295 435, 268 448',
    'M 65 310 C 30 55, 390 45, 360 320 C 350 390, 320 440, 210 455 L 210 510',
    'M 185 295 C 185 260, 235 260, 235 295 C 235 335, 200 355, 175 375',
  ];

  return (
    <div ref={ref} className="w-full max-w-[340px] mx-auto select-none pointer-events-none">
      <svg viewBox="0 0 420 520" fill="none" className="w-full h-auto overflow-visible" aria-hidden="true">
        {ridges.map((d, idx) => (
          <React.Fragment key={idx}>
            <path d={d} stroke="#EA2814" strokeOpacity="0.15" strokeWidth="1.6" strokeLinecap="round" />
            <motion.path
              d={d}
              stroke="#EA2814"
              strokeWidth="2.1"
              strokeLinecap="round"
              style={{ pathLength: drawProgress }}
            />
          </React.Fragment>
        ))}
        <motion.circle
          cx="210"
          cy="510"
          r="5"
          fill="#EA2814"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/**
 * 5. Interactive Pull-to-Untangle Thread SVG (Matches video 00:24 - 00:25 "PULL TO UNTANGLE")
 * Supports hover, click, AND real vertical drag pull!
 */
export const InteractiveUntangleSvg: React.FC = () => {
  const [untangled, setUntangled] = useState(false);

  const tangledPath =
    'M 210 10 C 120 75, 340 40, 320 140 C 300 240, 80 120, 95 230 C 110 340, 360 220, 310 315 C 260 395, 65 340, 125 225 C 180 120, 340 270, 210 390';
  const straightPath =
    'M 210 10 C 210 90, 210 140, 210 190 C 210 240, 210 280, 210 315 C 210 350, 210 365, 210 375 C 210 382, 210 386, 210 390';

  return (
    <div
      onMouseEnter={() => setUntangled(true)}
      onMouseLeave={() => setUntangled(false)}
      onClick={() => setUntangled((u) => !u)}
      className="relative w-full max-w-[360px] mx-auto cursor-pointer group select-none"
      role="button"
      tabIndex={0}
      aria-label="Pull or click to untangle the career path thread"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setUntangled((u) => !u);
      }}
    >
      <svg viewBox="0 0 420 420" fill="none" className="w-full h-auto overflow-visible">
        <motion.path
          d={untangled ? straightPath : tangledPath}
          animate={{ d: untangled ? straightPath : tangledPath }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          stroke="#EA2814"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <motion.circle
          cx="210"
          cy="390"
          r="8"
          fill="#0A0A0A"
          stroke="#EA2814"
          strokeWidth="2.5"
          animate={{ scale: untangled ? 1.3 : 1 }}
        />
        <circle cx="210" cy="390" r="3" fill="#EA2814" />
      </svg>

      {/* Draggable / Pullable interactive handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 28 }}
        dragElastic={0.3}
        dragSnapToOrigin
        onDragStart={() => setUntangled(true)}
        className="text-center -mt-3 cursor-grab active:cursor-grabbing"
      >
        <span className="inline-block px-3 py-1 border border-white/15 bg-[#121212] font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-400 group-hover:text-[#EA2814] group-hover:border-[#EA2814] transition-colors">
          {untangled ? 'PATH UNTANGLED — CLICK TO RESET' : 'PULL OR HOVER TO UNTANGLE'}
        </span>
      </motion.div>
    </div>
  );
};

/**
 * 6. Sticky Stacking Cards for "Built Around Everything a Student Usually Misses"
 * Matches video 00:00 - 00:03: sticky cascading card deck (01 -> 02 -> 03)
 */
interface StickyCardItemProps {
  index: number;
  num: string;
  title: string;
  desc: string;
  stickyTopClass: string;
  children: React.ReactNode;
}

const StickyCardItem: React.FC<StickyCardItemProps> = ({
  index,
  num,
  title,
  desc,
  stickyTopClass,
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 0.22', 'end 0.12'],
  });
  // Slight scale-down & subtle dim as subsequent card glides over
  const scale = useTransform(scrollYProgress, [0, 1], [1, index === 2 ? 1 : 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, index === 2 ? 1 : 0.72]);

  return (
    <div ref={cardRef} className={`sticky ${stickyTopClass} mb-10 sm:mb-14`} style={{ zIndex: 10 + index * 10 }}>
      <motion.div
        style={{ scale, opacity }}
        className="rounded-3xl bg-[#111111] border border-white/15 shadow-[0_-20px_50px_rgba(0,0,0,0.85)] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
      >
        {/* Left Outlined Giant Index 01 / 02 / 03 */}
        <div className="lg:col-span-2 flex items-start">
          <span
            className="text-5xl sm:text-6xl lg:text-7xl font-black font-display leading-none select-none"
            style={{
              WebkitTextStroke: '1.5px #EA2814',
              color: 'transparent',
            }}
          >
            {num}
          </span>
        </div>

        {/* Center Title & Explanation */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Right Interactive / Visual Showcase Panel */}
        <div className="lg:col-span-6">{children}</div>
      </motion.div>
    </div>
  );
};

export const StickyStackedMissesSection: React.FC<{
  fallbackPhoto: string;
  onMeetMentors: () => void;
}> = ({ fallbackPhoto, onMeetMentors }) => {
  return (
    <div className="relative pt-4 pb-6">
      {/* Card 01 */}
      <StickyCardItem
        index={0}
        num="01"
        title="Your 100 Days Are Already Designed"
        desc="Every week combines technical learning, communication training and hands-on challenges. You learn, practice, build, present and get reviewed without wasting weeks figuring out what to do next."
        stickyTopClass="top-20 sm:top-24"
      >
        <div className="rounded-2xl bg-[#19191c] border border-white/10 p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          <div className="sm:col-span-7 aspect-[16/11] rounded-xl overflow-hidden bg-black">
            <img
              src="/assets/aistudio/AI-Powered_Learning_Platform_Conference_4d9a70e4.png"
              onError={(e) => {
                e.currentTarget.src = fallbackPhoto;
              }}
              alt="Your 100 Days Are Already Designed"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="sm:col-span-5 space-y-3">
            <div className="text-sm font-bold text-white font-display">
              Structured Weekly Roadmap
            </div>
            <div className="space-y-1.5 font-mono text-[11px] text-neutral-300">
              <div className="px-2.5 py-1.5 rounded bg-white/[0.04] border border-white/10">
                01 Technical Classes
              </div>
              <div className="px-2.5 py-1.5 rounded bg-white/[0.04] border border-white/10">
                02 Communication
              </div>
              <div className="px-2.5 py-1.5 rounded bg-white/[0.04] border border-white/10">
                03 Build Challenges
              </div>
            </div>
          </div>
        </div>
      </StickyCardItem>

      {/* Card 02 */}
      <StickyCardItem
        index={1}
        num="02"
        title="You Never Stay Stuck Alone"
        desc="Mentors stay involved throughout your journey. From broken code and weak concepts to project decisions and career doubts, you get support while the problem is still in front of you."
        stickyTopClass="top-24 sm:top-28"
      >
        <div className="rounded-2xl bg-[#19191c] border border-white/10 p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          <div className="sm:col-span-7 aspect-[16/11] rounded-xl overflow-hidden bg-black">
            <img
              src="/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png"
              onError={(e) => {
                e.currentTarget.src = fallbackPhoto;
              }}
              alt="1:1 Code & Doubt Support"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="sm:col-span-5 space-y-3 flex flex-col justify-between h-full">
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-bold text-white font-display">
                1:1 Code &amp; Doubt Support
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Get direct feedback on your code, projects and next steps instead of waiting for a generic answer in a crowded group.
              </p>
            </div>
            <div>
              <button
                onClick={onMeetMentors}
                className="px-4 py-2 rounded-xl bg-white hover:bg-[#EA2814] text-[#0E0E0E] hover:text-white text-xs font-bold font-display transition-colors cursor-pointer"
              >
                Meet the Mentors
              </button>
            </div>
          </div>
        </div>
      </StickyCardItem>

      {/* Card 03 */}
      <StickyCardItem
        index={2}
        num="03"
        title="You Learn to Create, Not Just Code"
        desc="Startup sprints, team challenges, product demos and competitions push you beyond following tutorials. You learn to find problems, build solutions and confidently defend what you create."
        stickyTopClass="top-28 sm:top-32"
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black relative aspect-[16/10]">
          <img
            src="/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png"
            onError={(e) => {
              e.currentTarget.src = fallbackPhoto;
            }}
            alt="TheCodeSpark Technologies Private Limited Builder Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div className="text-sm sm:text-base font-bold text-white font-display">
              TheCodeSpark Technologies Private Limited Builder Community
            </div>
            <p className="text-[11px] text-neutral-300 max-w-xs leading-snug">
              Learn beside people who build, compete, present and continuously raise the standard for everyone around them.
            </p>
          </div>
        </div>
      </StickyCardItem>

      {/* Full-Width Classroom Showcase Transition Frame (Matches Video 00:02 - 00:03) */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mt-8 rounded-3xl overflow-hidden border border-white/15 bg-black relative aspect-[16/8.5]"
      >
        <video
          src="/assets/aistudio/student_coding_classroom.mp4"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 bg-[#EA2814] text-white font-mono text-[10px] font-bold uppercase tracking-widest">
            LIVE CODING STUDIO • LUCKNOW
          </span>
          <span className="font-mono text-xs text-white/85">
            Daily 11 AM – 5 PM Execution Sprints
          </span>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * 7. 3D Perspective Slab Cards ("100 Days", "500+ Hours", "40 Challenges")
 * Matches video 00:04 - 00:06: rotates smoothly in 3D from angled sideways (-34deg) to flat (0deg)
 */
export const Perspective3DRigorCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.92', 'center 0.52'],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 22 });
  const rotateY = useTransform(smooth, [0, 1], [-34, 0]);
  const rotateX = useTransform(smooth, [0, 1], [10, 0]);
  const scale = useTransform(smooth, [0, 1], [0.92, 1]);

  const cards = [
    {
      value: '100',
      unit: 'Days',
      subtitle: 'No Room for Passive Learning',
      desc: 'You code, build, present and get reviewed throughout the programme. Watching classes alone is never considered progress.',
      cardClass:
        'bg-gradient-to-b from-[#F1EFE9] to-[#D4D0C7] text-[#0E0E0E] border-2 border-[#0E0E0E]',
      unitClass: 'text-[#0E0E0E]/65',
      subClass: 'text-[#EA2814]',
      descClass: 'text-[#0E0E0E]/75',
      badgeClass: 'border-[#0E0E0E]/25 text-[#0E0E0E]',
    },
    {
      value: '500+',
      unit: 'Hours',
      subtitle: 'Professional learning space',
      desc: 'Daily training, live mentorship, hands-on practice and constant feedback designed to keep your growth on track.',
      cardClass:
        'bg-gradient-to-b from-[#EA2814] via-[#B91C0C] to-[#520B05] text-white border-2 border-[#EA2814] shadow-[0_20px_60px_-15px_rgba(234,40,20,0.65)]',
      unitClass: 'text-white/80',
      subClass: 'text-white',
      descClass: 'text-white/85',
      badgeClass: 'border-white/35 text-white',
    },
    {
      value: '40',
      unit: 'Challenges',
      subtitle: 'Where Knowledge Gets Tested',
      desc: 'Real projects, team competitions, startup activities and debugging challenges that reveal what you can actually do.',
      cardClass:
        'bg-gradient-to-b from-[#17171A] to-[#0B0B0D] text-white border-2 border-white/20',
      unitClass: 'text-neutral-400',
      subClass: 'text-[#EA2814]',
      descClass: 'text-neutral-400',
      badgeClass: 'border-white/20 text-white/75',
    },
  ];

  return (
    <div ref={containerRef} style={{ perspective: '1400px' }} className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {cards.map((c, idx) => (
          <motion.div
            key={c.value}
            style={{
              rotateY,
              rotateX,
              scale,
              transformStyle: 'preserve-3d',
            }}
            transition={{ delay: idx * 0.05 }}
            className={`rounded-2xl p-7 sm:p-8 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between ${c.cardClass}`}
          >
            {/* Top Emblem Icon */}
            <div className="flex items-center justify-between">
              <span
                className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-[10px] font-bold ${c.badgeClass}`}
              >
                0{idx + 1}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">
                INTENSIVE
              </span>
            </div>

            {/* Center Metric */}
            <div className="py-6">
              <div className="text-5xl sm:text-6xl font-black font-display tracking-tight leading-none">
                {c.value}{' '}
                <span className={`text-xl sm:text-2xl font-normal ${c.unitClass}`}>
                  {c.unit}
                </span>
              </div>
              <div className={`text-xs sm:text-sm font-mono font-bold mt-2 uppercase ${c.subClass}`}>
                {c.subtitle}
              </div>
            </div>

            {/* Bottom Description */}
            <p className={`text-xs leading-relaxed ${c.descClass}`}>{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

