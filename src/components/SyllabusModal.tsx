import React, { useState } from 'react';
import { 
  X, Download, FileText, CheckCircle2, Sparkles, ChevronDown, 
  Search, Layers, Cpu, Code2, Bot, Gauge, Zap, GitBranch, 
  FolderGit2, Award, Terminal, Database, Check, Briefcase
} from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { Course } from '../data/coursesData';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
  initialTrack?: 'episodes' | 'products' | 'dsa' | 'capstones';
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  course,
  initialTrack = 'episodes'
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTrack, setActiveTrack] = useState<'episodes' | 'products' | 'dsa' | 'capstones'>(initialTrack);
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0);
  
  // Accordion state
  const [expandedEpisodeIds, setExpandedEpisodeIds] = useState<number[]>([0, 1, 2]);
  const [expandedProductModuleIds, setExpandedProductModuleIds] = useState<number[]>([1, 2, 3, 4]);
  const [expandedDsaModuleIds, setExpandedDsaModuleIds] = useState<number[]>([1, 2, 3]);

  if (!isOpen) return null;

  const hasProducts = Boolean(course.productsBreakdown && course.productsBreakdown.length > 0);
  const hasDsaJava = Boolean(course.dsaJavaCohort);
  const hasCapstones = Boolean(course.capstonesBreakdown && course.capstonesBreakdown.length > 0);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  const toggleEpisode = (id: number) => {
    if (expandedEpisodeIds.includes(id)) {
      setExpandedEpisodeIds(expandedEpisodeIds.filter((m) => m !== id));
    } else {
      setExpandedEpisodeIds([...expandedEpisodeIds, id]);
    }
  };

  const toggleProductModule = (num: number) => {
    if (expandedProductModuleIds.includes(num)) {
      setExpandedProductModuleIds(expandedProductModuleIds.filter((m) => m !== num));
    } else {
      setExpandedProductModuleIds([...expandedProductModuleIds, num]);
    }
  };

  const toggleDsaModule = (id: number) => {
    if (expandedDsaModuleIds.includes(id)) {
      setExpandedDsaModuleIds(expandedDsaModuleIds.filter((m) => m !== id));
    } else {
      setExpandedDsaModuleIds([...expandedDsaModuleIds, id]);
    }
  };

  const expandAll = () => {
    if (activeTrack === 'episodes') {
      setExpandedEpisodeIds(course.modules.map((m) => m.id));
    } else if (activeTrack === 'products' && hasProducts && course.productsBreakdown) {
      const activeProd = course.productsBreakdown[activeProductIndex];
      setExpandedProductModuleIds(activeProd.modules.map((m) => m.number));
    } else if (activeTrack === 'dsa' && hasDsaJava && course.dsaJavaCohort) {
      setExpandedDsaModuleIds(course.dsaJavaCohort.topics.map((t) => t.id));
    }
  };

  const collapseAll = () => {
    if (activeTrack === 'episodes') {
      setExpandedEpisodeIds([]);
    } else if (activeTrack === 'products') {
      setExpandedProductModuleIds([]);
    } else if (activeTrack === 'dsa') {
      setExpandedDsaModuleIds([]);
    }
  };

  // Filter episodes
  const filteredEpisodes = course.modules.filter((mod) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = mod.title.toLowerCase().includes(q);
    const matchesName = mod.name.toLowerCase().includes(q);
    const matchesDesc = mod.desc.toLowerCase().includes(q);
    const matchesTopics = mod.topics?.some((t) => t.toLowerCase().includes(q));
    return matchesTitle || matchesName || matchesDesc || matchesTopics;
  });

  // Filter products
  const activeProduct = hasProducts && course.productsBreakdown ? course.productsBreakdown[activeProductIndex] : null;
  const filteredProductModules = activeProduct ? activeProduct.modules.filter((mod) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = mod.title.toLowerCase().includes(q);
    const matchesItems = mod.items.some((item) => item.toLowerCase().includes(q));
    return matchesTitle || matchesItems;
  }) : [];

  // Filter DSA Java modules
  const filteredDsaModules = hasDsaJava && course.dsaJavaCohort ? course.dsaJavaCohort.topics.filter((topic) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = topic.title.toLowerCase().includes(q);
    const matchesConcepts = topic.concepts.some((c) => c.toLowerCase().includes(q));
    const matchesProblems = topic.problems.some((p) => 
      p.problem.toLowerCase().includes(q) || p.pattern.toLowerCase().includes(q) || p.difficulty.toLowerCase().includes(q)
    );
    return matchesTitle || matchesConcepts || matchesProblems;
  }) : [];

  // Filter Capstones (For IGNITE 3.0 or courses with Capstones)
  const filteredCapstones = hasCapstones && course.capstonesBreakdown ? course.capstonesBreakdown.filter((cap) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = cap.title.toLowerCase().includes(q);
    const matchesDomain = cap.domain.toLowerCase().includes(q);
    const matchesDesc = cap.description.toLowerCase().includes(q);
    const matchesTools = cap.tools.some((t) => t.toLowerCase().includes(q));
    const matchesDeliverables = cap.deliverables.some((d) => d.toLowerCase().includes(q));
    return matchesTitle || matchesDomain || matchesDesc || matchesTools || matchesDeliverables;
  }) : [];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-[#0b0b10] border border-white/10 rounded-3xl shadow-2xl overflow-hidden card-inner-glow max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Company Logo Watermark (Requested by User) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <div className="flex flex-col items-center justify-center opacity-[0.07] scale-125 filter grayscale contrast-150">
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="TheCodeSpark Technologies Logo Watermark"
              className="w-[480px] max-w-[85vw] h-auto object-contain"
            />
            <span className="font-display font-black text-3xl tracking-[0.25em] text-white mt-4 uppercase text-center">
              TheCodeSpark Technologies Private Limited
            </span>
            <span className="font-mono text-sm tracking-widest text-neutral-400 mt-1 uppercase">
              Founder & CEO: Mr. Rohit Kashyap
            </span>
          </div>
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#ff5722]/20 blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 px-5 sm:px-7 py-4 border-b border-white/10 bg-[#121218]/90 backdrop-blur-md shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="h-12 w-12 rounded-2xl bg-white/5 border border-[#ff5722]/40 flex items-center justify-center shrink-0 shadow-lg p-2">
              <img
                src={brandLogo}
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="TheCodeSpark Technologies Private Limited"
                className="h-full w-full object-contain filter drop-shadow"
              />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff5722] bg-[#ff5722]/15 border border-[#ff5722]/30 px-2 py-0.5 rounded font-bold">
                  Official Syllabus • {course.codeName}
                </span>
                <span className="text-xs text-neutral-400 font-mono hidden sm:inline">{course.duration}</span>
                <span className="text-xs text-emerald-400 font-mono hidden sm:inline">• {course.hours}</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white font-display truncate mt-0.5">
                {course.title}
              </h3>
              <p className="text-[11px] text-neutral-400 font-mono truncate">
                TheCodeSpark Technologies Private Limited • Founder & CEO: Mr. Rohit Kashyap
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="hidden sm:flex px-3.5 py-2 bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-semibold rounded-xl transition-all shadow-md items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloaded ? 'Brochure Downloaded!' : 'Download Syllabus'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close syllabus preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DISTINCT TRACK SWITCHER (For IGNITE 2.0, IGNITE 3.0 or courses with Products / DSA / Capstones) */}
        {(hasProducts || hasDsaJava || hasCapstones) && (
          <div className="relative z-10 px-5 sm:px-7 py-2.5 border-b border-white/10 bg-[#0d0d13]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveTrack('episodes')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  activeTrack === 'episodes'
                    ? 'bg-[#ff5722] text-white shadow-md shadow-[#ff5722]/30 border border-[#ff5722]'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{hasCapstones ? `${course.modules.length} Analytics Phases` : `${course.modules.length} Master Episodes`}</span>
              </button>

              {hasCapstones && (
                <button
                  onClick={() => setActiveTrack('capstones')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    activeTrack === 'capstones'
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 border border-blue-400/50'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
                  <span>6 Industry Capstones</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white">Portfolio Ready</span>
                </button>
              )}

              {hasProducts && (
                <button
                  onClick={() => setActiveTrack('products')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    activeTrack === 'products'
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-md shadow-pink-500/20 border border-pink-400/50'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Products: Loveable Ai + Pixxo</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white">2 Products</span>
                </button>
              )}

              {hasDsaJava && (
                <button
                  onClick={() => setActiveTrack('dsa')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    activeTrack === 'dsa'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 border border-emerald-500'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>DSA in Java | Cohort 3.0</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white">350+ Problems</span>
                </button>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <span className="text-[#ff5722]">Founder Mentorship:</span>
              <span>Mr. Rohit Kashyap</span>
            </div>
          </div>
        )}

        {/* Toolbar: Search & Action buttons */}
        <div className="relative z-10 px-5 sm:px-7 py-3 border-b border-white/5 bg-[#0e0e14]/80 backdrop-blur-sm shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                activeTrack === 'episodes'
                  ? (hasCapstones ? "Search phases (e.g., Python, SQL, DAX, Time Series, Power BI)..." : "Search topics (e.g., Zod, Docker, RabbitMQ, Trees, Aptitude)...")
                  : activeTrack === 'capstones'
                  ? "Search capstones (e.g., Retail, HR, Finance, IoT, Pipeline)..."
                  : activeTrack === 'products'
                  ? "Search product features (e.g., Agent, CloudFront, Sharp, Monaco)..."
                  : "Search DSA problems or patterns (e.g., Kadane, Trapping Rain, Cyclic Sort)..."
              }
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]/60 focus:bg-white/[0.08] transition-all"
            />
          </div>

          {/* Quick controls */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-neutral-400 text-[11px]">
              {activeTrack === 'episodes' && `Showing ${filteredEpisodes.length} of ${course.modules.length} ${hasCapstones ? 'Phases' : 'Episodes'}`}
              {activeTrack === 'capstones' && course.capstonesBreakdown && `Showing ${filteredCapstones.length} of ${course.capstonesBreakdown.length} Industry Capstones`}
              {activeTrack === 'products' && activeProduct && `Showing ${filteredProductModules.length} of ${activeProduct.modules.length} Modules`}
              {activeTrack === 'dsa' && course.dsaJavaCohort && `Showing ${filteredDsaModules.length} of ${course.dsaJavaCohort.topics.length} Modules`}
            </span>
            <div className="h-3 w-[1px] bg-white/10 mx-1 hidden sm:block" />
            <button
              onClick={expandAll}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-[11px] transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-[11px] transition-colors cursor-pointer"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* TRACK 1: MASTER EPISODES */}
        {activeTrack === 'episodes' && (
          <div className="relative z-10 p-5 sm:p-7 space-y-3.5 overflow-y-auto flex-1 scrollbar-thin">
            {filteredEpisodes.map((mod) => {
              const isExpanded = expandedEpisodeIds.includes(mod.id);
              return (
                <div 
                  key={mod.id} 
                  className="rounded-2xl border border-white/10 bg-[#121218]/85 backdrop-blur-sm overflow-hidden transition-all shadow-md hover:border-white/20"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleEpisode(mod.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#ff5722] bg-[#ff5722]/10 border border-[#ff5722]/20 px-2 py-0.5 rounded">
                          {mod.name}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono">
                          {mod.topics ? `${mod.topics.length} Key Topics` : 'Comprehensive Module'}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white font-display pt-0.5">
                        {mod.title}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                        {mod.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-1">
                      <div className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 transition-transform ${isExpanded ? 'rotate-180 text-[#ff5722]' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Topics Covered */}
                  {isExpanded && mod.topics && (
                    <div className="px-5 pb-5 pt-2 border-t border-white/5 bg-[#0e0e13]/80">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2.5 font-semibold flex items-center gap-1.5">
                        <Code2 className="w-3 h-3 text-[#ff5722]" /> Detailed Curricular Topics
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {mod.topics.map((t, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors text-xs text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredEpisodes.length === 0 && (
              <div className="text-center py-12 space-y-2">
                <p className="text-sm text-neutral-400 font-mono">No topics matching "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#ff5722] underline cursor-pointer"
                >
                  Clear Search Filter
                </button>
              </div>
            )}
          </div>
        )}

        {/* TRACK 2: PRODUCTS BUILT: LOVEABLE AI + PIXXO (IMAGEKIT) */}
        {activeTrack === 'products' && hasProducts && course.productsBreakdown && (
          <div className="relative z-10 p-5 sm:p-7 space-y-5 overflow-y-auto flex-1 scrollbar-thin">
            {/* Product Tabs (Loveable Ai vs Pixxo) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.productsBreakdown.map((prod, idx) => {
                const isSelected = activeProductIndex === idx;
                return (
                  <button
                    key={prod.id}
                    onClick={() => setActiveProductIndex(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#151520] border-pink-500/50 shadow-lg shadow-pink-500/10'
                        : 'bg-[#0f0f15] border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                        {prod.badge}
                      </span>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          Active View
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display mt-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                      {prod.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Product Details */}
            {activeProduct && (
              <div className="space-y-4">
                {/* Product Overview Card */}
                <div className={`p-5 rounded-2xl bg-gradient-to-br ${activeProduct.bgGradient} border border-white/10 space-y-4`}>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5722] font-bold">
                      {activeProduct.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white font-display mt-0.5">
                      {activeProduct.name} — {activeProduct.tagline}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                      {activeProduct.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Production Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProduct.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/15 text-[11px] font-mono text-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4 Architecture Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2">
                    {activeProduct.architectureHighlights.map((arch, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/10 space-y-1">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{arch.title}</span>
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-snug">
                          {arch.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 11 Granular Modules Breakdown */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff5722]" />
                    <span>Complete 11 Modules Architecture ({activeProduct.name})</span>
                  </div>

                  {filteredProductModules.map((pMod) => {
                    const isExpanded = expandedProductModuleIds.includes(pMod.number);
                    return (
                      <div 
                        key={pMod.number} 
                        className="rounded-2xl border border-white/10 bg-[#121218]/85 backdrop-blur-sm overflow-hidden transition-all shadow-md hover:border-white/20"
                      >
                        <button
                          onClick={() => toggleProductModule(pMod.number)}
                          className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer"
                        >
                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff5722] bg-[#ff5722]/10 border border-[#ff5722]/20 px-2 py-0.5 rounded">
                                Section {pMod.number}
                              </span>
                              <span className="text-[10px] text-neutral-400 font-mono">
                                {pMod.items.length} Implementation Items
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-white font-display pt-0.5">
                              {pMod.title}
                            </h4>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 pt-1">
                            <div className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 transition-transform ${isExpanded ? 'rotate-180 text-[#ff5722]' : ''}`}>
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="px-5 pb-5 pt-2 border-t border-white/5 bg-[#0e0e13]/80 space-y-2">
                            {pMod.note && (
                              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 italic mb-2">
                                {pMod.note}
                              </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {pMod.items.map((item, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors text-xs text-neutral-300"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span className="leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TRACK 3: DATA STRUCTURES & ALGORITHMS IN JAVA | COHORT 3.0 */}
        {activeTrack === 'dsa' && hasDsaJava && course.dsaJavaCohort && (
          <div className="relative z-10 p-5 sm:p-7 space-y-5 overflow-y-auto flex-1 scrollbar-thin">
            {/* Top Overview & Stats Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  COHORT 3.0 • COMPLETE CODING JOURNEY
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white font-display mt-0.5">
                  {course.dsaJavaCohort.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  {course.dsaJavaCohort.subtitle}
                </p>
              </div>

              {/* 6 Grid Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 text-center">
                  <span className="text-xs font-mono font-black text-emerald-300 block">350+</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Video Solutions</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 text-center">
                  <span className="text-xs font-mono font-black text-emerald-300 block">25+</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Coding Patterns</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 text-center">
                  <span className="text-xs font-mono font-black text-emerald-300 block">300</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Concept MCQs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 text-center">
                  <span className="text-xs font-mono font-black text-emerald-300 block">100+</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Assignments</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 text-center">
                  <span className="text-xs font-mono font-black text-emerald-300 block">Weekly</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Live Masterclasses</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 text-center">
                  <span className="text-xs font-mono font-black text-emerald-300 block">24/7</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Discord Doubt Desk</span>
                </div>
              </div>

              {/* Bonus Sheets */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="text-[11px] font-mono text-emerald-300 font-bold uppercase">Bonus Sheets Included:</span>
                {course.dsaJavaCohort.bonusSheets.map((sheet, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-200">
                    ★ {sheet}
                  </span>
                ))}
              </div>
            </div>

            {/* 30 DSA Topic Modules with Problem Tables */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center justify-between">
                <span>30 Modules • 355 Problem Catalog</span>
                <span className="text-emerald-400 text-[11px]">Java Collections & LeetCode/GFG</span>
              </div>

              {filteredDsaModules.map((topic) => {
                const isExpanded = expandedDsaModuleIds.includes(topic.id);
                return (
                  <div 
                    key={topic.id} 
                    className="rounded-2xl border border-white/10 bg-[#121218]/85 backdrop-blur-sm overflow-hidden transition-all shadow-md hover:border-white/20"
                  >
                    {/* Module Accordion Header */}
                    <button
                      onClick={() => toggleDsaModule(topic.id)}
                      className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer"
                    >
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                            {topic.badge}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            {topic.problems.length > 0 ? `${topic.problems.length} Problem Table Rows` : 'Foundational Concept'}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white font-display pt-0.5">
                          {topic.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {topic.concepts.map((c, idx) => (
                            <span key={idx} className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 pt-1">
                        <div className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 transition-transform ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </button>

                    {/* Problem Table */}
                    {isExpanded && topic.problems.length > 0 && (
                      <div className="px-4 pb-4 pt-1 border-t border-white/5 bg-[#0e0e13]/80 overflow-x-auto">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                          Problem Catalog & Pattern Mapping:
                        </div>
                        <table className="w-full text-left text-xs font-mono border-collapse">
                          <thead>
                            <tr className="border-b border-white/10 text-neutral-400 text-[10px] uppercase">
                              <th className="py-2 px-2.5 w-12">#</th>
                              <th className="py-2 px-2.5">Problem Name</th>
                              <th className="py-2 px-2.5 w-24">Difficulty</th>
                              <th className="py-2 px-2.5">Pattern</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {topic.problems.map((prob) => (
                              <tr key={prob.id} className="hover:bg-white/[0.03] transition-colors">
                                <td className="py-2 px-2.5 text-neutral-400">{prob.id}</td>
                                <td className="py-2 px-2.5 text-white font-sans font-medium">{prob.problem}</td>
                                <td className="py-2 px-2.5">
                                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    prob.difficulty === 'Easy'
                                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                      : prob.difficulty === 'Medium'
                                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                                      : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                                  }`}>
                                    {prob.difficulty}
                                  </span>
                                </td>
                                <td className="py-2 px-2.5 text-neutral-300 text-[11px]">{prob.pattern}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TRACK 4: 6 INDUSTRY CAPSTONES (IGNITE 3.0 DATA ANALYTICS & ENGINEERING) */}
        {activeTrack === 'capstones' && hasCapstones && course.capstonesBreakdown && (
          <div className="relative z-10 p-5 sm:p-7 space-y-5 overflow-y-auto flex-1 scrollbar-thin">
            {/* Capstones Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent border border-blue-500/30 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                    PHASE 12 CAPSTONES • 6 ENTERPRISE PORTFOLIO ARTIFACTS
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-white font-display mt-0.5">
                    Production-Grade Industry Capstones
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                    Complete end-to-end analytics pipelines, executive Power BI suites, ML forecasting, and automated data engineering projects for your professional portfolio.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                  <span className="px-3 py-1.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-mono font-bold">
                    6 Enterprise Projects
                  </span>
                </div>
              </div>

              {/* 4 Capstone Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-neutral-400">Executive Dashboards</div>
                  <div className="text-sm font-bold text-white mt-0.5">Power BI + DAX + RLS</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-neutral-400">Database & Warehouse</div>
                  <div className="text-sm font-bold text-white mt-0.5">PostgreSQL + Window CTEs</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-neutral-400">ETL & Automation</div>
                  <div className="text-sm font-bold text-white mt-0.5">Airflow / Prefect + S3</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-neutral-400">Interactive Apps</div>
                  <div className="text-sm font-bold text-white mt-0.5">Streamlit / Flask + Cloud</div>
                </div>
              </div>
            </div>

            {/* Capstones Cards List */}
            {filteredCapstones.length === 0 ? (
              <div className="text-center py-12 rounded-2xl bg-white/[0.02] border border-white/5">
                <Briefcase className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
                <p className="text-sm text-neutral-400">No capstones match your search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredCapstones.map((capstone, index) => (
                  <div
                    key={capstone.id}
                    className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#121218]/85 backdrop-blur-sm hover:border-blue-500/40 transition-all shadow-md space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/25 px-2 py-0.5 rounded">
                            Capstone #{index + 1}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                            {capstone.domain}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white font-display pt-1">
                          {capstone.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          {capstone.description}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2 border-t border-white/5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                        Production Technology Stack:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {capstone.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Deliverables */}
                    <div className="pt-2 border-t border-white/5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                        Key Deliverables & Enterprise Artifacts:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {capstone.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="relative z-10 px-5 sm:px-7 py-4 border-t border-white/10 bg-[#121218]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#ff5722]" />
              <span>Full Curriculum & Products Verified</span>
            </div>
            <span>•</span>
            <span>TheCodeSpark Technologies Private Limited</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="sm:hidden px-3 py-1.5 bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-semibold rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloaded ? 'Downloaded' : 'PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-xl border border-white/10 transition-colors cursor-pointer"
            >
              Close Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
