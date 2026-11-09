import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Share2,
  Sparkles,
  Compass,
  Code2,
  MessageSquare,
  BarChart3,
  Settings,
  Search,
  X,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Grid,
  Plus,
  Moon,
  Sun,
  Bell,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface SparkTabletDashboardProps {
  onStartJourney: () => void;
  onRequestCallback: () => void;
  onExploreCourses: () => void;
}

/**
 * ScaledTabletScreen: Automatically scales the high-resolution 840x490 tablet canvas
 * so it fits 100% inside any parent container without overflowing or clipping.
 * Preserves the exact desktop display layout on mobile phones.
 */
const ScaledTabletScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const baseW = 840;
      const baseH = 490;
      if (rect.width > 0 && rect.height > 0) {
        const sX = rect.width / baseW;
        const sY = rect.height / baseH;
        setScale(Math.min(sX, sY));
      }
    };

    update();
    const ro = new ResizeObserver(() => update());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#0d0d12]"
    >
      <div
        style={{
          width: '840px',
          height: '490px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const SparkTabletDashboard: React.FC<SparkTabletDashboardProps> = ({
  onStartJourney,
  onRequestCallback,
  onExploreCourses
}) => {
  // View mode: 'hands' (inside photorealistic hands mockup) or 'expanded' (full-width cinema view)
  const [viewMode, setViewMode] = useState<'hands' | 'expanded'>('hands');
  const [activeTab, setActiveTab] = useState<'spark' | 'compass' | 'code' | 'chat' | 'analytics' | 'settings'>('spark');
  const [topSegmentTab, setTopSegmentTab] = useState<'analytics' | 'cohorts' | 'placements'>('analytics');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '1y'>('1y');
  const [activePrompt, setActivePrompt] = useState('Analyze DSA progress & mock interview ratings...');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(6); // July peak
  const [hoveredDemographic, setHoveredDemographic] = useState<string | null>(null);

  // Equalizer bar heights for smooth voice waveform animation
  const [bars, setBars] = useState<number[]>([
    35, 60, 45, 80, 95, 70, 50, 85, 100, 65, 40, 75, 90, 55, 30, 70, 85, 60, 40, 80, 95, 65, 45, 85
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev =>
        prev.map(() => Math.floor(Math.random() * 70) + 30)
      );
    }, 450);
    return () => clearInterval(interval);
  }, []);

  const samplePrompts = [
    'Analyze DSA progress & mock interview ratings...',
    'Optimizing 2-pointer approach for Trapping Rain Water...',
    'Batch 2026 average CTC and Tier 1 placement index...'
  ];

  const handleRunAiPrompt = (prompt: string) => {
    setActivePrompt(prompt);
    if (prompt.includes('Trapping Rain Water')) {
      setAiResponse('Spark AI: 2-Pointer approach reduces space complexity to O(1) & time to O(N). Solved in 14ms (Beats 99.4% on LeetCode).');
    } else if (prompt.includes('average CTC')) {
      setAiResponse('Spark AI: Cohort Average CTC reached ₹14.8 LPA across 150+ hiring partners. Top offer: ₹45 LPA at Uber.');
    } else {
      setAiResponse('Spark AI: Student DSA proficiency index: 94/100. Ready for Amazon & Google interview drive.');
    }
  };

  // 12 monthly bars data
  const monthlyData = [
    { month: 'Jan', value: 38, label: '38k' },
    { month: 'Feb', value: 45, label: '45k' },
    { month: 'Mar', value: 58, label: '58k' },
    { month: 'Apr', value: 50, label: '50k' },
    { month: 'May', value: 72, label: '72k' },
    { month: 'Jun', value: 65, label: '65k' },
    { month: 'Jul', value: 96, label: '100k+', peak: true, ctc: '₹14.8L' },
    { month: 'Aug', value: 62, label: '62k' },
    { month: 'Sept', value: 78, label: '78k' },
    { month: 'Oct', value: 84, label: '84k' },
    { month: 'Nov', value: 70, label: '70k' },
    { month: 'Dec', value: 88, label: '88k' }
  ];

  // Exact desktop tablet layout rendered at 840x490 canvas
  const dashboardContent = (
    <div className="w-[840px] h-[490px] flex flex-col justify-between text-neutral-200 select-none font-sans overflow-hidden p-2.5 bg-[#0d0d12]">
      {/* 1. TOP-MOST NAVIGATION ROW inside tablet (Matching Framer reference) */}
      <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-white/[0.06] shrink-0">
        <div className="flex items-center gap-2">
          {/* Spark Logo Asterisk */}
          <div className="w-5 h-5 rounded-full bg-[#E10600]/20 border border-[#E10600]/40 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-[#E10600] animate-pulse drop-shadow-[0_0_6px_#E10600]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <Grid className="w-3.5 h-3.5 text-neutral-400" />

          {/* Segmented Pills */}
          <div className="flex items-center rounded-full bg-white/[0.05] border border-white/10 p-0.5 text-[9px] font-medium font-mono">
            <button
              onClick={() => setTopSegmentTab('analytics')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                topSegmentTab === 'analytics'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => {
                setTopSegmentTab('cohorts');
                onExploreCourses();
              }}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                topSegmentTab === 'cohorts'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tech Cohorts
            </button>
            <button
              onClick={() => {
                setTopSegmentTab('placements');
                onRequestCallback();
              }}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                topSegmentTab === 'placements'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Placements
            </button>
          </div>
        </div>

        {/* Right utility icons */}
        <div className="flex items-center gap-1.5 text-neutral-400">
          <button className="w-5 h-5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] flex items-center justify-center transition-colors">
            <Search className="w-2.5 h-2.5" />
          </button>
          <button className="w-5 h-5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] flex items-center justify-center transition-colors">
            <Plus className="w-2.5 h-2.5" />
          </button>
          <div className="flex items-center rounded-full bg-white/[0.04] p-0.5">
            <span className="p-0.5 rounded-full bg-white/10 text-white">
              <Moon className="w-2.5 h-2.5" />
            </span>
            <span className="p-0.5 text-neutral-500">
              <Sun className="w-2.5 h-2.5" />
            </span>
          </div>
          <button className="w-5 h-5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] flex items-center justify-center relative transition-colors">
            <Bell className="w-2.5 h-2.5" />
            <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#E10600]" />
          </button>
        </div>
      </div>

      {/* 2. SUB-HEADER: Title & Filter Row inside Tablet */}
      <div className="flex items-center justify-between gap-2 py-1.5 border-b border-white/[0.06] shrink-0">
        <div className="flex items-center gap-3">
          {/* Back Pill Button */}
          <button
            onClick={onExploreCourses}
            title="Explore Cohorts"
            className="w-6 h-6 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3 text-neutral-300" />
          </button>

          {/* Breadcrumb & Title */}
          <div>
            <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono tracking-wider uppercase">
              <span>TheCodeSpark Technologies Private Limited OS</span>
              <span>→</span>
              <span className="text-[#E10600] font-semibold">Live Intelligence</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-extrabold text-white font-display tracking-tight flex items-center gap-1.5">
                <span>Ai Placement & Code Summery</span>
              </h2>
              {/* Glowing Spark 8-Point Star */}
              <div className="relative flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#E10600] animate-pulse drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Filter Pills */}
        <div className="flex items-center gap-1.5 text-[9px]">
          {/* Metric Badge (98) */}
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 font-mono text-neutral-300">
            <span className="w-1 h-1 rounded-full bg-[#E10600] animate-ping" />
            <span>98</span>
          </div>

          {/* Date Range Pill */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-neutral-300">
            <Calendar className="w-2.5 h-2.5 text-[#E10600]" />
            <span>Nov 1 '25 - Dec 1 '26</span>
          </div>

          {/* Timeframe Selector Pill */}
          <div className="flex items-center rounded-full bg-white/[0.06] border border-white/10 p-0.5">
            <button
              onClick={() => setTimeRange('7d')}
              className={`px-1.5 py-0.5 rounded-full transition-all text-[8px] font-medium cursor-pointer ${
                timeRange === '7d' ? 'bg-[#E10600] text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              7D
            </button>
            <button
              onClick={() => setTimeRange('30d')}
              className={`px-1.5 py-0.5 rounded-full transition-all text-[8px] font-medium cursor-pointer ${
                timeRange === '30d' ? 'bg-[#E10600] text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              30D
            </button>
            <button
              onClick={() => setTimeRange('1y')}
              className={`px-1.5 py-0.5 rounded-full transition-all text-[8px] font-medium cursor-pointer ${
                timeRange === '1y' ? 'bg-[#E10600] text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              1Y
            </button>
          </div>

          {/* Export Action */}
          <button
            onClick={onRequestCallback}
            title="Download Cohort Placement Report"
            className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white text-black hover:bg-neutral-200 text-[8px] font-bold transition-all cursor-pointer shadow-sm"
          >
            <span>Export</span>
            <Share2 className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE: Left Sidebar + Left Column + Right Column */}
      <div className="flex-1 flex gap-2 pt-1.5 overflow-hidden items-stretch min-h-0">
        {/* Left Vertical Navigation Dock matching Framer */}
        <div className="flex flex-col items-center justify-between py-1 px-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] w-7 shrink-0">
          <div className="flex flex-col items-center gap-1">
            {/* 1. Spark (Active) */}
            <button
              onClick={() => setActiveTab('spark')}
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                activeTab === 'spark'
                  ? 'bg-white text-black shadow-md scale-105'
                  : 'text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              title="TheCodeSpark AI Assistant"
            >
              <Sparkles className="w-2.5 h-2.5 text-[#E10600]" />
            </button>

            {/* 2. Compass */}
            <button
              onClick={() => {
                setActiveTab('compass');
                onExploreCourses();
              }}
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                activeTab === 'compass'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              title="Explore Tech Cohorts"
            >
              <Compass className="w-2.5 h-2.5" />
            </button>

            {/* 3. Code */}
            <button
              onClick={() => {
                setActiveTab('code');
                handleRunAiPrompt('Optimizing 2-pointer approach for Trapping Rain Water...');
              }}
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              title="DSA & Code Optimizer"
            >
              <Code2 className="w-2.5 h-2.5" />
            </button>

            {/* 4. Chat */}
            <button
              onClick={() => {
                setActiveTab('chat');
                onRequestCallback();
              }}
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              title="1:1 Founder Mentorship"
            >
              <MessageSquare className="w-2.5 h-2.5" />
            </button>

            {/* 5. Analytics */}
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              title="Placement Metrics"
            >
              <BarChart3 className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* 6. Settings at bottom */}
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
            title="System Preferences"
          >
            <Settings className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* 2-Column Main Workspace strictly maintaining 2 columns side-by-side */}
        <div className="flex-1 grid grid-cols-12 gap-2 min-h-0 overflow-hidden">
          {/* LEFT COLUMN: Card 1 (AI Assistant) + Card 2 (Placement Summary) */}
          <div className="col-span-5 flex flex-col gap-2 min-h-0 justify-between">
            {/* CARD 1: AI Assistant (Voice Soundwave + Prompt Input) */}
            <div className="rounded-xl p-2.5 bg-[#13131a] border border-white/[0.08] flex flex-col justify-between relative overflow-hidden shadow-md h-[215px]">
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-white font-display">
                    AI Spark Assistant
                  </span>
                </div>
                <button
                  onClick={() => setAiResponse(null)}
                  className="text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Pulsing Audio Equalizer Waveform */}
              <div className="my-1 py-1 px-1.5 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-center gap-[3px] h-9 overflow-hidden">
                {bars.map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className={`w-[2px] rounded-full transition-all ${
                      i % 3 === 0
                        ? 'bg-[#E10600] shadow-[0_0_6px_#E10600]'
                        : i % 2 === 0
                        ? 'bg-white'
                        : 'bg-neutral-500'
                    }`}
                  />
                ))}
              </div>

              {/* AI Live Feedback if active */}
              {aiResponse ? (
                <motion.div
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-1 rounded bg-[#E10600]/15 border border-[#E10600]/30 text-[9px] text-white leading-tight font-mono mb-1 truncate"
                >
                  {aiResponse}
                </motion.div>
              ) : null}

              {/* Input Prompt Box with Search Button */}
              <div className="flex items-center gap-1 p-0.5 rounded-full bg-black/50 border border-white/10">
                <input
                  type="text"
                  value={activePrompt}
                  onChange={(e) => setActivePrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleRunAiPrompt(activePrompt);
                  }}
                  className="w-full bg-transparent text-[9px] text-neutral-300 placeholder-neutral-500 px-2 outline-none font-sans"
                  placeholder="Ask Spark AI code reviewer..."
                />
                <button
                  onClick={() => handleRunAiPrompt(activePrompt)}
                  className="w-5 h-5 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer"
                  title="Run Prompt"
                >
                  <Search className="w-2.5 h-2.5" />
                </button>
              </div>

              {/* Quick Prompt Suggestion Pills */}
              <div className="flex items-center gap-1 mt-1 overflow-x-auto no-scrollbar">
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRunAiPrompt(p)}
                    className="text-[8px] font-mono px-1.5 py-0.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors whitespace-nowrap cursor-pointer shrink-0"
                  >
                    {idx === 0 ? 'DSA Progress' : idx === 1 ? 'Code Optimizer' : 'Placement Index'}
                  </button>
                ))}
              </div>
            </div>

            {/* CARD 2: Placement Summary (+247% Growth & Patterned Tiles) */}
            <div className="rounded-xl p-2.5 bg-[#13131a] border border-white/[0.08] shadow-md h-[165px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-0.5">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                    <span className="text-[11px] font-bold text-white font-display">
                      Placement Summery
                    </span>
                  </div>
                  <span className="text-[8px] text-neutral-400 block font-mono">
                    Last 4 months growth & CTC
                  </span>
                </div>

                {/* +247% Metric Pill with Green Arrow */}
                <div className="px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold tracking-tight flex items-center gap-1">
                  <TrendingUp className="w-2.5 h-2.5" />
                  <span>+ 247%</span>
                </div>
              </div>

              {/* 4 Patterned Status Cards matching Framer exactly */}
              <div className="grid grid-cols-4 gap-1.5 my-1">
                {/* 1. Aug: White Solid Card */}
                <div className="h-14 rounded-lg bg-white text-black p-1 flex flex-col justify-between shadow-md transition-transform hover:scale-105">
                  <span className="text-[7px] font-mono font-bold text-neutral-700">+45%</span>
                  <span className="text-[9px] font-black font-display leading-none">Aug</span>
                </div>

                {/* 2. Sept: Red Diagonal Stripes Card */}
                <div className="h-14 rounded-lg p-1 flex flex-col justify-between border border-[#E10600]/40 transition-transform hover:scale-105 bg-[repeating-linear-gradient(45deg,#E10600,#E10600_4px,#7f1d1d_4px,#7f1d1d_8px)] text-white shadow-md">
                  <span className="text-[7px] font-mono font-bold bg-black/60 px-0.5 rounded w-fit">+88%</span>
                  <span className="text-[9px] font-black font-display leading-none drop-shadow">Sept</span>
                </div>

                {/* 3. Oct: Diagonal Crosshatch Mesh Card */}
                <div className="h-14 rounded-lg p-1 flex flex-col justify-between border border-white/10 transition-transform hover:scale-105 bg-[#181822] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_5px),repeating-linear-gradient(-45deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_5px)] text-white shadow-md">
                  <span className="text-[7px] font-mono font-bold bg-black/60 px-0.5 rounded w-fit">+56%</span>
                  <span className="text-[9px] font-black font-display leading-none">Oct</span>
                </div>

                {/* 4. Nov: Vibrant Solid Signal Red #E10600 Card */}
                <div className="h-14 rounded-lg p-1 flex flex-col justify-between bg-[#E10600] text-white shadow-lg shadow-[#E10600]/30 transition-transform hover:scale-105">
                  <span className="text-[7px] font-mono font-bold bg-black/40 px-0.5 rounded w-fit">+140%</span>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black font-display leading-none">Nov</span>
                    <CheckCircle2 className="w-2 h-2 text-white" />
                  </div>
                </div>
              </div>

              {/* Sub-label indicators */}
              <div className="grid grid-cols-4 gap-1 text-center font-mono text-[7px] text-neutral-400">
                <span>▲ Aug</span>
                <span>▲ Sept</span>
                <span>▲ Oct</span>
                <span className="text-[#E10600] font-bold">▲ Nov</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Card 3 (Future Graph) + Card 4 (Market Revenue) + Card 5 (Age Range) */}
          <div className="col-span-7 flex flex-col gap-2 min-h-0 justify-between">
            {/* CARD 3: Future Graph Analysis (12-Bar Histogram with Glowing Red Peak Bar) */}
            <div className="rounded-xl p-2.5 bg-[#13131a] border border-white/[0.08] shadow-md h-[215px] flex flex-col justify-between relative">
              <div className="flex items-center justify-between pb-0.5">
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3 h-3 text-neutral-400" />
                  <span className="text-[11px] font-bold text-white font-display">
                    Future Graph Analysis
                  </span>
                  <span className="text-[8px] text-neutral-400 font-mono">
                    (DSA & Placement Readiness)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[8px] font-mono text-neutral-400">
                  <span className="px-1 py-0.5 rounded-full bg-white/[0.06] border border-white/10">98</span>
                  <ArrowUpRight className="w-2.5 h-2.5 text-neutral-400" />
                </div>
              </div>

              {/* 12 Bars Chart */}
              <div className="relative pt-4 pb-0.5">
                {/* Horizontal dotted benchmark line */}
                <div className="absolute top-1/2 left-0 right-0 border-b border-dashed border-white/15 pointer-events-none" />

                <div className="flex items-end justify-between gap-1 h-24">
                  {monthlyData.map((d, idx) => {
                    const isPeak = d.peak;
                    const isHovered = hoveredBarIndex === idx;

                    return (
                      <div
                        key={d.month}
                        onMouseEnter={() => setHoveredBarIndex(idx)}
                        className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                      >
                        {/* Peak Floating Tooltip */}
                        {isPeak && (
                          <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-3.5 px-1.5 py-0.5 rounded bg-[#E10600] text-white text-[7px] font-black font-mono shadow-lg shadow-[#E10600]/40 whitespace-nowrap z-10"
                          >
                            {d.ctc}
                          </motion.div>
                        )}

                        {/* Bar Body */}
                        <div
                          style={{ height: `${d.value}%` }}
                          className={`w-full rounded-t-sm transition-all duration-300 relative ${
                            isPeak
                              ? 'bg-[#E10600] shadow-[0_0_12px_rgba(225,6,0,0.6)]'
                              : isHovered
                              ? 'bg-neutral-300'
                              : 'bg-neutral-800/90 hover:bg-neutral-700'
                          }`}
                        >
                          {/* Inner vertical stripes texture */}
                          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,white_2px,white_4px)] rounded-t-sm" />
                        </div>

                        {/* Month Label */}
                        <span
                          className={`text-[7px] font-mono mt-0.5 ${
                            isPeak
                              ? 'text-[#E10600] font-bold'
                              : isHovered
                              ? 'text-white font-medium'
                              : 'text-neutral-500'
                          }`}
                        >
                          {d.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* BOTTOM ROW: Split side by side into Card 4 (Market CTC) & Card 5 (Demographics) */}
            <div className="grid grid-cols-2 gap-2 h-[165px]">
              {/* CARD 4: Market Revenue / Placement CTC Trends */}
              <div className="rounded-xl p-2.5 bg-[#13131a] border border-white/[0.08] shadow-md flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between pb-0.5">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5 text-[#E10600]" />
                    <span className="text-[11px] font-bold text-white font-display">
                      Market CTC Trend
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[7px] font-mono text-neutral-400">
                    <span className="px-1 py-0.5 rounded-full bg-white/[0.06] border border-white/10">98</span>
                    <ArrowUpRight className="w-2 h-2 text-neutral-400" />
                  </div>
                </div>

                {/* Dual Spline SVG Chart */}
                <div className="relative h-16 my-0.5">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="15" x2="200" y2="15" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                    {/* Cyan / Teal line (2024 Baseline) */}
                    <path
                      d="M 0,45 Q 50,42 100,28 T 200,32"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      className="opacity-70"
                    />

                    {/* Signal Red Line (2026 Surge) */}
                    <path
                      d="M 0,52 Q 60,48 110,14 T 200,8"
                      fill="none"
                      stroke="#E10600"
                      strokeWidth="2.5"
                      className="drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]"
                    />

                    {/* Peak Glowing Node */}
                    <circle cx="110" cy="14" r="3" fill="#E10600" stroke="#ffffff" strokeWidth="1.5" />
                  </svg>

                  {/* Floating Metric Tooltip at Peak */}
                  <div className="absolute top-0 right-2 px-1 py-0.5 rounded bg-black/80 border border-[#E10600]/40 text-[7px] font-mono text-white flex items-center gap-1">
                    <span className="text-[#E10600] font-bold">₹14.8 LPA</span>
                    <span className="text-neutral-400 text-[6px]">+54%</span>
                  </div>
                </div>

                {/* Legend & Stats */}
                <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400 pt-0.5 border-t border-white/[0.05]">
                  <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                    ▲ +248% Surge
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-[#06b6d4]" />
                      <span>2024</span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-[#E10600]" />
                      <span className="text-white">2026</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 5: Age Range / Batch Demographics (Circular Venn Bubble Chart) */}
              <div className="rounded-xl p-2.5 bg-[#13131a] border border-white/[0.08] shadow-md flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between pb-0.5">
                  <span className="text-[11px] font-bold text-white font-display">
                    Batch Demographics
                  </span>
                  <div className="flex items-center gap-1 text-[7px] font-mono text-neutral-400">
                    <span className="px-1 py-0.5 rounded-full bg-white/[0.06] border border-white/10">98</span>
                    <ArrowUpRight className="w-2 h-2 text-neutral-400" />
                  </div>
                </div>

                {/* Overlapping Concentric Circles matching Framer template */}
                <div className="relative h-16 flex items-center justify-center">
                  {/* Circle 1: 50% Non-Tech to Tech */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    onMouseEnter={() => setHoveredDemographic('50% Non-Tech to Tech')}
                    onMouseLeave={() => setHoveredDemographic(null)}
                    className="absolute left-3 w-12 h-12 rounded-full bg-[#E10600] flex flex-col items-center justify-center text-white shadow-lg shadow-[#E10600]/40 z-10 cursor-pointer border border-white/20"
                  >
                    <span className="text-[10px] font-black font-display leading-none">50%</span>
                    <span className="text-[6px] font-mono text-white/80">Non-Tech</span>
                  </motion.div>

                  {/* Circle 2: 30% College Grads */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    onMouseEnter={() => setHoveredDemographic('30% College Grads')}
                    onMouseLeave={() => setHoveredDemographic(null)}
                    className="absolute right-3 w-11 h-11 rounded-full bg-[#991b1b] flex flex-col items-center justify-center text-white z-0 cursor-pointer border border-white/10"
                  >
                    <span className="text-[9px] font-black font-display leading-none">30%</span>
                    <span className="text-[6px] font-mono text-white/80">College</span>
                  </motion.div>

                  {/* Circle 3: 20% Working Pros (Top overlapping) */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    onMouseEnter={() => setHoveredDemographic('20% Working Professionals')}
                    onMouseLeave={() => setHoveredDemographic(null)}
                    className="absolute top-0 right-10 w-8 h-8 rounded-full bg-[#ef4444] flex flex-col items-center justify-center text-white z-20 cursor-pointer shadow-md border border-white/30"
                  >
                    <span className="text-[7.5px] font-black font-display leading-none">20%</span>
                    <span className="text-[5.5px] font-mono text-white/80">Pros</span>
                  </motion.div>
                </div>

                {/* Demographic Legend */}
                <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400 pt-0.5 border-t border-white/[0.05]">
                  <span className="flex items-center gap-0.5 text-neutral-300">
                    <span className="text-[#E10600]">►</span> 18–24
                  </span>
                  <span className="flex items-center gap-0.5 text-neutral-300">
                    <span className="text-amber-500">►</span> 25–30
                  </span>
                  <span className="flex items-center gap-0.5 text-neutral-300">
                    <span className="text-cyan-400">►</span> 30+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full relative pb-4">
      {/* Top Controls: Kicker & View Switcher */}
      <div className="flex items-center justify-between gap-3 max-w-5xl mx-auto px-3 sm:px-4 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
            TheCodeSpark Technologies Private Limited OS • Live Intelligence
          </span>
        </div>

        {/* View Switcher Pill */}
        <div className="flex items-center rounded-full bg-white/[0.06] border border-white/10 p-0.5 text-[10px] sm:text-xs font-mono">
          <button
            onClick={() => setViewMode('hands')}
            className={`px-2.5 sm:px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'hands'
                ? 'bg-[#E10600] text-white font-bold shadow-md shadow-[#E10600]/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Minimize2 className="w-3 h-3" />
            <span>Tablet View</span>
          </button>
          <button
            onClick={() => setViewMode('expanded')}
            className={`px-2.5 sm:px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'expanded'
                ? 'bg-[#E10600] text-white font-bold shadow-md shadow-[#E10600]/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Maximize2 className="w-3 h-3" />
            <span>Expanded View</span>
          </button>
        </div>
      </div>

      {/* RENDER MODE 1: PHOTOREALISTIC HANDS HOLDING TABLET (Exact Framer match, 100% contained) */}
      {viewMode === 'hands' && (
        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
          {/* Ambient red and cyan glow behind tablet */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#E10600]/20 blur-[130px] pointer-events-none rounded-full" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

          {/* Desktop/Tablet Aspect Container with realistic hands */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[640px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black border border-white/10 bg-[#09090d]">
            {/* Background image of photorealistic hands holding the tablet */}
            <img
              src="/hands_wide_tablet.jpg"
              alt="Hands holding TheCodeSpark AI Tablet"
              className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none brightness-95"
            />

            {/* Inner Tablet Screen Area: Perfectly mapped to the tablet screen inside hands */}
            <div
              className="absolute top-[10.5%] bottom-[15.2%] left-[19.5%] right-[19.5%] rounded-[12px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden shadow-2xl shadow-black border border-white/[0.12] z-10"
              style={{
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 0 35px rgba(225,6,0,0.25)'
              }}
            >
              <ScaledTabletScreen>
                {dashboardContent}
              </ScaledTabletScreen>
            </div>
          </div>
        </div>
      )}

      {/* RENDER MODE 2: EXPANDED CINEMA MODE (Full-scale bezel view for deeper inspection) */}
      {viewMode === 'expanded' && (
        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black bg-[#0d0d12] p-1.5 sm:p-2">
            {/* Tablet Bezel Frame with ambient screen glow */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] relative aspect-[16/10] sm:aspect-[16/9] min-h-[300px] sm:min-h-[480px]">
              <ScaledTabletScreen>
                {dashboardContent}
              </ScaledTabletScreen>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
