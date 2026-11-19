import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  List,
  X,
  Play,
  Terminal,
  Layers,
  Globe,
  Check,
  ExternalLink,
  Copy
} from 'lucide-react';
import {
  FEATURED_PROJECTS,
  CLIENT_LIVE_PROJECTS,
  PROJECT_CATEGORIES,
  FeaturedProject,
  ProjectCategory
} from '../data/featuredProjectsData';
import featuredHeroPavilion from '../assets/images/featured_hero_pavilion_1795101745459.jpg';
import featuredCrimsonAtelier from '../assets/images/featured_crimson_atelier_1795101746326.jpg';

interface FeaturedProjectsViewProps {
  onRequestCallback: () => void;
  onExploreCourses: () => void;
  initialCategory?: 'All' | ProjectCategory;
  scrollTarget?: 'top' | 'live-sites' | 'directory';
  navNonce?: number;
}

const SPOTLIGHT_INDEXES = [1, 2, 7, 16, 9, 24];

const ARCHITECTURE_STEPS = [
  {
    step: '01. Product Scope & System Architecture',
    detail:
      'Define domain boundaries, entity schemas, PostgreSQL/Redis data flows, and latency budgets before writing the first component.'
  },
  {
    step: '02. Editorial UI Systems & Motion Prototyping',
    detail:
      'Build responsive component systems with accessible contrast ratios, hardware-accelerated transitions, and clean typographic hierarchy.'
  },
  {
    step: '03. Full-Stack & Generative AI API Integration',
    detail:
      'Connect authenticated REST/WebSocket backends, streaming LLM pipelines, payment webhooks, and strict input validation.'
  },
  {
    step: '04. Cloud CI/CD & Edge Routing Deployment',
    detail:
      'Containerize services with Docker, configure zero-downtime reverse proxies, CDN caching, and verify live production endpoints.'
  },
  {
    step: '05. Observability, Audits & Portfolio Defense',
    detail:
      'Benchmark p95 API latency, audit OWASP security controls, and defend architectural trade-offs with senior code reviewers.'
  }
];

const FAQ_DATA: Record<
  'learners' | 'partners',
  { q: string; a: string }[]
> = {
  learners: [
    {
      q: 'How are these 234 live projects and 25 showcase sites structured?',
      a: 'Every project maps to an end-to-end production track covering UI architecture, backend APIs, database modeling, and deployment telemetry. The 25 Featured Live Websites serve as live visual and UX benchmarks alongside 209 full-stack, AI, FinTech, Cloud, and SaaS builds.'
    },
    {
      q: 'Can students build similar real-world applications during training?',
      a: 'Yes. Across IGNITE cohorts, Summer Training, and Apprenticeship tracks at TheCodeSpark Technologies Private Limited, learners progress from core fundamentals to shipping verifiable live deployments reviewed by senior engineers.'
    },
    {
      q: 'Can I open the live URLs and inspect API endpoints directly from this page?',
      a: 'Yes. Every featured external website includes a direct Visit Live Site link that opens the live URL in a new tab, and every single project card opens an interactive Sandbox & Architecture Inspector.'
    },
    {
      q: 'What technology stacks are covered across the 9 project tracks?',
      a: 'Projects span Next.js 15, React 19, TypeScript, Node.js, PostgreSQL, Redis, Python/FastAPI, Gemini & RAG agent pipelines, Docker, Kubernetes, Three.js WebGL, and modern Tailwind CSS systems.'
    }
  ],
  partners: [
    {
      q: 'Do you partner with companies for live project capstones and hiring?',
      a: 'Yes. Engineering leaders evaluate candidates through live code walkthroughs, production sandboxes, and deployed architectural case studies rather than unverified theoretical resumes.'
    },
    {
      q: 'How do you benchmark UI quality and production readiness?',
      a: 'We combine visual design benchmarks from real global e-commerce, architecture, hospitality, and SaaS storefronts with API latency checks, accessibility verification, and responsive stress testing.'
    },
    {
      q: 'Can teams request bespoke product engineering or cohort collaboration?',
      a: 'Yes. Use the Request Callback CTA anywhere on this page to schedule a consultation with TheCodeSpark Technologies Private Limited leadership team.'
    }
  ]
};

function formatCleanUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
}

function buildSimulatedApiPayload(project: FeaturedProject, route: string): string {
  const [method, path] = route.split(' ');
  return JSON.stringify(
    {
      status: 200,
      ok: true,
      projectId: project.id,
      service: project.slug,
      endpoint: `${method || 'GET'} ${path || '/api/health'}`,
      latency: project.responseLatency,
      environment: 'production-live',
      stack: project.techStack,
      activeFeatures: project.features,
      timestamp: '2026-11-19T15:20:00.000Z',
      data: {
        recordsProcessed: 1200 + project.index * 17,
        verifiedBy: `${project.leadEngineer} (${project.cohort})`,
        deploymentUrl: project.liveDomain
      }
    },
    null,
    2
  );
}

const ITEMS_PER_PAGE = 24;

export const FeaturedProjectsView: React.FC<FeaturedProjectsViewProps> = ({
  onRequestCallback,
  onExploreCourses,
  initialCategory = 'All',
  scrollTarget = 'top',
  navNonce = 0
}) => {
  // Spotlight / Tablet & Directory explorer state
  const [selectedTabletStep, setSelectedTabletStep] = useState(0);
  const [liveSplitFilter, setLiveSplitFilter] = useState('');
  const [selectedLiveShowcaseId, setSelectedLiveShowcaseId] = useState<string>(
    CLIENT_LIVE_PROJECTS[0]?.id || 'TCS-001'
  );
  const [expandedStepIdx, setExpandedStepIdx] = useState<number | null>(0);
  const [faqAudience, setFaqAudience] = useState<'learners' | 'partners'>('learners');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [showFloatingDock, setShowFloatingDock] = useState(true);

  // Full Archive Filter & Pagination State
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [showAllMatching, setShowAllMatching] = useState(false);

  // Sync incoming category & scroll destination from navbar dropdown
  useEffect(() => {
    setSelectedCategory(initialCategory);
    setCurrentPageNum(1);
    if (scrollTarget === 'live-sites') {
      window.setTimeout(() => {
        document.getElementById('live-websites-operations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    } else if (scrollTarget === 'directory') {
      window.setTimeout(() => {
        document.getElementById('live-projects-directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }, [initialCategory, scrollTarget, navNonce]);

  // Interactive Modal Sandbox State
  const [activeModalProject, setActiveModalProject] = useState<FeaturedProject | null>(null);
  const [modalTab, setModalTab] = useState<'live' | 'architecture'>('live');
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0);
  const [apiResponseJson, setApiResponseJson] = useState<string>('');
  const [enabledSimFeatures, setEnabledSimFeatures] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true
  });
  const [copiedDomain, setCopiedDomain] = useState(false);

  const spotlightProjects = useMemo(
    () =>
      SPOTLIGHT_INDEXES.map((idx) => FEATURED_PROJECTS.find((p) => p.index === idx)).filter(
        Boolean
      ) as FeaturedProject[],
    []
  );

  const activeTabletProject =
    spotlightProjects[selectedTabletStep] || CLIENT_LIVE_PROJECTS[0] || FEATURED_PROJECTS[0];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: FEATURED_PROJECTS.length };
    for (const p of FEATURED_PROJECTS) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredLiveSites = useMemo(() => {
    const q = liveSplitFilter.trim().toLowerCase();
    if (!q) return CLIENT_LIVE_PROJECTS;
    return CLIENT_LIVE_PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.liveDomain.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  }, [liveSplitFilter]);

  const activeLiveShowcaseProject = useMemo(
    () =>
      CLIENT_LIVE_PROJECTS.find((p) => p.id === selectedLiveShowcaseId) ||
      CLIENT_LIVE_PROJECTS[0] ||
      FEATURED_PROJECTS[0],
    [selectedLiveShowcaseId]
  );

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FEATURED_PROJECTS.filter((project) => {
      if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      return (
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.id.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.liveDomain.toLowerCase().includes(q) ||
        project.leadEngineer.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    setCurrentPageNum(1);
  }, [selectedCategory, searchQuery, showAllMatching]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  const visibleProjects = useMemo(() => {
    if (showAllMatching) return filteredProjects;
    const start = (currentPageNum - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPageNum, showAllMatching]);

  const openLivePreview = (project: FeaturedProject) => {
    setActiveModalProject(project);
    setModalTab('live');
    setSelectedRouteIdx(0);
    setEnabledSimFeatures({ 0: true, 1: true, 2: true, 3: true });
    setApiResponseJson(buildSimulatedApiPayload(project, project.apiRoutes[0] || 'GET /api/health'));
    setCopiedDomain(false);
  };

  useEffect(() => {
    if (!activeModalProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeModalProject]);

  const handleRunTestRequest = () => {
    if (!activeModalProject) return;
    const route = activeModalProject.apiRoutes[selectedRouteIdx] || activeModalProject.apiRoutes[0];
    setApiResponseJson(buildSimulatedApiPayload(activeModalProject, route));
  };

  const handleCopyDomain = () => {
    if (!activeModalProject) return;
    navigator.clipboard?.writeText(activeModalProject.liveDomain).catch(() => {});
    setCopiedDomain(true);
    window.setTimeout(() => setCopiedDomain(false), 1800);
  };

  const handleStepModalProject = (direction: -1 | 1) => {
    if (!activeModalProject) return;
    const idx = FEATURED_PROJECTS.findIndex((p) => p.id === activeModalProject.id);
    if (idx === -1) return;
    const nextIdx = (idx + direction + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length;
    openLivePreview(FEATURED_PROJECTS[nextIdx]);
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const selectCategoryAndScroll = (category: 'All' | ProjectCategory) => {
    setSelectedCategory(category);
    scrollToElement('live-projects-directory');
  };

  const rangeStart =
    filteredProjects.length === 0 ? 0 : showAllMatching ? 1 : (currentPageNum - 1) * ITEMS_PER_PAGE + 1;
  const rangeEnd = showAllMatching
    ? filteredProjects.length
    : Math.min(currentPageNum * ITEMS_PER_PAGE, filteredProjects.length);

  return (
    <div className="min-h-screen bg-[#F7F4F1] dark:bg-[#0D0D10] text-[#141214] dark:text-[#F5F3F0] pt-20 sm:pt-24 pb-24 transition-colors">
      {/* =====================================================================
          BAND 1: FULL-BLEED EDITORIAL PAVILION HERO (REDGEVITY INSPIRED)
         ===================================================================== */}
      <section className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#180C0E] min-h-[560px] sm:min-h-[650px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Background Architectural Image + Warm Crimson Glow Overlay */}
          <img
            src={featuredHeroPavilion}
            alt="TheCodeSpark Technologies Engineering Showcase Pavilion"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(225,29,46,0.42),rgba(18,9,11,0.82)_72%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/85"
          />

          {/* Top Centered Editorial Statement */}
          <div className="relative z-10 max-w-4xl mx-auto text-center pt-4 sm:pt-8 space-y-5">
            <h1
              className="text-4xl sm:text-6xl lg:text-[74px] font-semibold font-display tracking-tight text-white leading-[1.03]"
              style={{ textWrap: 'balance' }}
            >
              Our Featured Projects
            </h1>

            <p className="text-sm sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-normal">
              {FEATURED_PROJECTS.length} production applications &amp; {CLIENT_LIVE_PROJECTS.length} live partner web showcases engineered by TheCodeSpark Technologies Private Limited — built to run live, scale fast, and convert.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToElement('live-websites-operations')}
                className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-white text-[#141214] hover:bg-neutral-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore {CLIENT_LIVE_PROJECTS.length} Live Websites</span>
                <span className="w-7 h-7 rounded-full bg-[#141214] text-white inline-flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollToElement('live-projects-directory')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Browse All {FEATURED_PROJECTS.length} Builds</span>
              </button>
            </div>
          </div>

          {/* Lower Frosted Architectural Glass Stage (Matching Video 00:02–00:04) */}
          <div className="relative z-10 mt-10 max-w-5xl mx-auto w-full rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-7 text-white">
            <div className="text-center max-w-2xl mx-auto pb-5 border-b border-white/15 space-y-1.5">
              <p className="text-sm sm:text-base font-medium text-white leading-snug">
                A verified multi-track engineering showcase combining interactive frontend craft, live REST/AI APIs, and production deployments.
              </p>
              <p className="text-xs font-mono text-white/75 tabular-nums">
                TheCodeSpark Technologies Private Limited · 9 Engineering Tracks · 100% Live Previews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 text-left">
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">
                  {CLIENT_LIVE_PROJECTS.length} Curated Live URLs
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Luxury retail, architecture, hospitality, SaaS &amp; 3D web experiences ready to open live.
                </p>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">
                  Interactive Sandbox Console
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Inspect live routes, JSON payloads, latency telemetry, and system architecture on every project.
                </p>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">
                  {FEATURED_PROJECTS.length} Deployed Applications
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Built by IGNITE, Summer Training &amp; Apprenticeship cohorts mentored by senior engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BAND 2: EDITORIAL STATEMENT + 3-COLUMN BENTO SHOWCASE (VIDEO 00:06–00:08)
         ===================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <h2
            className="text-2xl sm:text-4xl lg:text-[42px] font-semibold font-display tracking-tight leading-[1.12] text-[#141214] dark:text-white"
            style={{ textWrap: 'balance' }}
          >
            More than screenshots.{' '}
            <span className="text-neutral-500 dark:text-neutral-400">
              Integrated platforms, live APIs, and continuous production polish
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Crimson Atelier Device Preview */}
          <div
            onClick={() => openLivePreview(CLIENT_LIVE_PROJECTS[0] || FEATURED_PROJECTS[0])}
            className="rounded-3xl bg-[#EFEBE7] dark:bg-[#17161B] border border-black/5 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between gap-6 cursor-pointer hover:border-black/20 dark:hover:border-white/25 transition-colors group"
          >
            <div className="space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white leading-snug">
                The Live Canvas.{' '}
                <span className="font-normal text-neutral-600 dark:text-neutral-400">
                  Responsive interfaces ready for real traffic from day one.
                </span>
              </h3>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#210A0D]">
              <img
                src={featuredCrimsonAtelier}
                alt="Interactive Project Studio Canvas"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-3.5 flex items-center justify-between text-xs text-white font-medium">
                <span>Interactive Sandbox Mode</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Full dark &amp; light mode parity, accessible components, zero dead clicks, and real endpoint telemetry.
            </p>
          </div>

          {/* Card 2: Concentric Crimson Aura Signal Card (Video 00:07 center card) */}
          <div
            onClick={() => scrollToElement('live-websites-operations')}
            className="rounded-3xl bg-[#EFEBE7] dark:bg-[#17161B] border border-black/5 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between gap-6 cursor-pointer hover:border-black/20 dark:hover:border-white/25 transition-colors group"
          >
            <div className="space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white leading-snug">
                Verified Live Uptime.{' '}
                <span className="font-normal text-neutral-600 dark:text-neutral-400">
                  25 external live websites &amp; continuous engineering audits.
                </span>
              </h3>
            </div>

            <div className="rounded-2xl aspect-[4/3] bg-[#F7E8E3] dark:bg-[#241315] relative overflow-hidden flex items-center justify-center p-6">
              <div className="w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(217,30,42,0.85)_0%,rgba(255,107,74,0.45)_42%,rgba(255,155,120,0.12)_72%,transparent_100%)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-[#141214]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-sm">
                  <span className="text-lg font-bold font-display tabular-nums text-[#D91E2A]">
                    99.9%
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-300">
                    uptime
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Every project is benchmarked for sub-35ms API latency, clean core web vitals, and mobile responsiveness.
            </p>
          </div>

          {/* Card 3: The Track Ecosystem Card (Video 00:07 right card) */}
          <div className="rounded-3xl bg-[#EFEBE7] dark:bg-[#17161B] border border-black/5 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white leading-snug">
                The Ecosystem.{' '}
                <span className="font-normal text-neutral-600 dark:text-neutral-400">
                  9 specialized tracks engineered under senior mentorship.
                </span>
              </h3>
            </div>

            <div className="rounded-2xl aspect-[4/3] bg-gradient-to-br from-[#F4DDD6] via-[#FAF1EC] to-[#EFDCD5] dark:from-[#26181A] dark:to-[#18161C] p-4 flex flex-col justify-center gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: 'Live Showcase', count: categoryCounts['Live Web Showcase'] || 25, cat: 'Live Web Showcase' as ProjectCategory },
                  { label: 'Full-Stack SaaS', count: categoryCounts['Full-Stack SaaS'] || 30, cat: 'Full-Stack SaaS' as ProjectCategory },
                  { label: 'AI & Agents', count: categoryCounts['Generative AI & Agents'] || 30, cat: 'Generative AI & Agents' as ProjectCategory },
                  { label: 'FinTech & BI', count: categoryCounts['FinTech & Trading'] || 25, cat: 'FinTech & Trading' as ProjectCategory }
                ].map((tile) => (
                  <button
                    key={tile.label}
                    type="button"
                    onClick={() => selectCategoryAndScroll(tile.cat)}
                    className="rounded-xl bg-white/85 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 px-3 py-3 text-left transition-colors cursor-pointer"
                  >
                    <div className="text-base font-bold font-display tabular-nums text-[#141214] dark:text-white">
                      {tile.count}
                    </div>
                    <div className="text-[11px] text-neutral-600 dark:text-neutral-300 truncate">
                      {tile.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Click any engineering discipline to filter matching production apps and live repositories.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => scrollToElement('interactive-tablet-stage')}
            className="inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-[#141214] dark:bg-white text-white dark:text-[#141214] hover:opacity-90 text-xs sm:text-sm font-semibold transition-opacity cursor-pointer whitespace-nowrap"
          >
            <span>Inspect the Live Stage</span>
            <span className="w-7 h-7 rounded-full bg-white/15 dark:bg-black/10 inline-flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          BAND 3: ARCHITECTURAL PRINCIPLES + INTERACTIVE TABLET STAGE (00:08–00:12)
         ===================================================================== */}
      <section
        id="interactive-tablet-stage"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
      >
        <div className="rounded-[32px] bg-[#EFEAE5] dark:bg-[#141419] border border-black/5 dark:border-white/10 p-6 sm:p-10 lg:p-12 space-y-12">
          {/* Top Strategic Statement + 2x2 Editorial Grid */}
          <div className="space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-semibold font-display tracking-tight text-[#141214] dark:text-white">
                Built for real users
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Production rigor, UI polish, and clear scalability across every build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto pt-4 border-t border-black/10 dark:border-white/10">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white">
                  Conversion &amp; Real Utility
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Storefronts, SaaS dashboards, booking flows, and interactive 3D canvases designed around measurable business outcomes.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white">
                  Operational Simplicity
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Clean TypeScript modular codebases, predictable state management, and fast onboarding for engineering teams.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white">
                  Visual Differentiation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Editorial typography, atmospheric lighting, and domain-faithful color systems without generic template sameness.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white">
                  Defensible Engineering
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Real API routing, SQL/NoSQL data modeling, cloud CI/CD readiness, and structured error recovery paths.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Dark Tablet / Showcase Viewer (Video 00:10–00:11) */}
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-xl sm:text-3xl font-semibold font-display tracking-tight text-[#141214] dark:text-white">
                Explore interactive builds.{' '}
                <span className="text-neutral-500 dark:text-neutral-400">Open live right here.</span>
              </h3>
            </div>

            <div className="rounded-[26px] bg-[#161214] text-white p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Interactive Selector Steps */}
              <div className="lg:col-span-4 space-y-2">
                {spotlightProjects.map((project, idx) => {
                  const isActive = idx === selectedTabletStep;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedTabletStep(idx)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                        isActive
                          ? 'bg-white/15 text-white font-semibold'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">{project.title}</span>
                      <span className="text-[11px] font-mono tabular-nums opacity-70 shrink-0">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Interactive Tablet Display Screen */}
              <div className="lg:col-span-8">
                <div className="rounded-[22px] bg-[#0B090A] border border-white/15 p-3 sm:p-4 shadow-2xl">
                  <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] bg-neutral-900">
                    <img
                      src={activeTabletProject.thumbnail}
                      alt={activeTabletProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(217,30,42,0.32),rgba(10,8,9,0.88)_80%)]" />

                    <div className="absolute inset-x-4 sm:inset-x-7 bottom-4 sm:bottom-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="space-y-1.5 min-w-0">
                        <p className="text-[11px] font-mono text-white/75 tabular-nums truncate">
                          {activeTabletProject.id} · {formatCleanUrl(activeTabletProject.liveDomain)}
                        </p>
                        <h4 className="text-lg sm:text-2xl font-semibold font-display text-white leading-tight truncate">
                          {activeTabletProject.title}
                        </h4>
                        <p className="text-xs text-white/80 line-clamp-2 max-w-lg">
                          {activeTabletProject.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {activeTabletProject.isExternalLive && (
                          <a
                            href={activeTabletProject.liveDomain}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#141214] hover:bg-neutral-200 text-xs font-semibold transition-colors whitespace-nowrap"
                          >
                            <span>Visit Live Site</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => openLivePreview(activeTabletProject)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D91E2A] hover:bg-[#b81621] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Sandbox</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Track Filter Strip Below Tablet (Matching Video 00:12) */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {PROJECT_CATEGORIES.filter((c) => c !== 'All')
                .slice(0, 6)
                .map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => selectCategoryAndScroll(cat)}
                    className="px-4 py-2 rounded-full bg-white dark:bg-[#1E1D24] hover:bg-[#141214] hover:text-white dark:hover:bg-white dark:hover:text-[#141214] border border-black/10 dark:border-white/10 text-xs font-medium text-[#141214] dark:text-neutral-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {cat}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BAND 4: LIVE OPERATIONS TELEMETRY + 25 LIVE WEBSITES SPLIT SHOWCASE (00:13–00:16)
         ===================================================================== */}
      <section
        id="live-websites-operations"
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 space-y-10"
      >
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <h2
            className="text-2xl sm:text-4xl lg:text-[44px] font-semibold font-display tracking-tight leading-[1.1] text-[#141214] dark:text-white"
            style={{ textWrap: 'balance' }}
          >
            Live in real operations, not just mockups.
            <br />
            <span className="text-neutral-500 dark:text-neutral-400 tabular-nums">
              {CLIENT_LIVE_PROJECTS.length} live websites &amp; {FEATURED_PROJECTS.length} active builds.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            Click any site or category below to preview screens visually and open the live URL directly.
          </p>
        </div>

        {/* Asymmetric Top Proof Cards (Matching Video 00:13–00:14) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-5 rounded-3xl bg-[#EFEAE5] dark:bg-[#17161B] border border-black/5 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="text-sm font-semibold text-[#141214] dark:text-white font-display">
                TheCodeSpark Technologies Private Limited
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Coordinated production catalog covering {CLIENT_LIVE_PROJECTS.length} featured external websites and {FEATURED_PROJECTS.length - CLIENT_LIVE_PROJECTS.length} engineered web platforms built with React, Next.js, TypeScript, Node.js, PostgreSQL, Gemini AI, and cloud tooling.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-black/10 dark:border-white/10 text-xs">
              <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                <span>Featured Live URLs</span>
                <span className="font-mono font-semibold tabular-nums">
                  {CLIENT_LIVE_PROJECTS.length} Verified Sites
                </span>
              </div>
              <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                <span>Full-Stack &amp; AI Projects</span>
                <span className="font-mono font-semibold tabular-nums">
                  {FEATURED_PROJECTS.length - CLIENT_LIVE_PROJECTS.length} Sandboxes
                </span>
              </div>
              <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                <span>Average Response Telemetry</span>
                <span className="font-mono font-semibold tabular-nums">14 ms – 31 ms</span>
              </div>
            </div>
          </div>

          {/* Right: Coral-Red Heatmap Matrix Tiles (Matching Video 00:13–00:14) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#F4ECE7] dark:bg-[#17161B] border border-black/5 dark:border-white/10 p-5 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-full">
              {[
                { name: 'Live Web Showcase', count: categoryCounts['Live Web Showcase'] || 25, tone: 'from-[#F9DFD6] to-[#F3B7A8] dark:from-[#3A191C] dark:to-[#241315]' },
                { name: 'Full-Stack SaaS', count: categoryCounts['Full-Stack SaaS'] || 30, tone: 'from-[#F7C5B8] to-[#EB8F7D] dark:from-[#4A1C20] dark:to-[#2D1417]' },
                { name: 'Generative AI & Agents', count: categoryCounts['Generative AI & Agents'] || 30, tone: 'from-[#F4A592] to-[#E1584A] dark:from-[#5D1E24] dark:to-[#351418]' },
                { name: 'FinTech & Trading', count: categoryCounts['FinTech & Trading'] || 25, tone: 'from-[#FCECE6] to-[#F5C6BA] dark:from-[#2C181A] dark:to-[#1E1416]' },
                { name: 'E-Commerce & Marketplaces', count: categoryCounts['E-Commerce & Marketplaces'] || 25, tone: 'from-[#F7D7CC] to-[#EEA08D] dark:from-[#3F1A1D] dark:to-[#281316]' },
                { name: 'DevOps & Cloud Systems', count: categoryCounts['DevOps & Cloud Systems'] || 25, tone: 'from-[#FBE6DE] to-[#F2B5A5] dark:from-[#34181A] dark:to-[#211315]' }
              ].map((cell) => (
                <button
                  key={cell.name}
                  type="button"
                  onClick={() => selectCategoryAndScroll(cell.name as ProjectCategory)}
                  className={`rounded-2xl bg-gradient-to-br ${cell.tone} p-4 text-left flex flex-col justify-between min-h-[115px] hover:scale-[1.01] transition-transform cursor-pointer`}
                >
                  <div className="text-xs font-medium text-[#141214] dark:text-white leading-snug">
                    {cell.name}
                  </div>
                  <div className="pt-3">
                    <span className="text-xl sm:text-2xl font-bold font-display tabular-nums text-[#141214] dark:text-white">
                      {cell.count}
                    </span>
                    <span className="block text-[11px] font-mono text-[#141214]/70 dark:text-white/70">
                      live projects
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Split Explorer for All 25 Live Showcase URLs (Matching Video 00:15–00:16) */}
        <div className="rounded-3xl bg-[#EFEAE5] dark:bg-[#17161B] border border-black/5 dark:border-white/10 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: High-Res Visual Preview Stage for Highlighted Live Website */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl overflow-hidden bg-white dark:bg-[#111014] border border-black/5 dark:border-white/10">
            <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
              <img
                src={activeLiveShowcaseProject.thumbnail}
                alt={activeLiveShowcaseProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 flex flex-wrap items-end justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <p className="text-[11px] font-mono text-white/80 tabular-nums">
                    {activeLiveShowcaseProject.id} · {activeLiveShowcaseProject.techStack.join(' · ')}
                  </p>
                  <h3 className="text-lg sm:text-2xl font-semibold font-display text-white leading-snug">
                    {activeLiveShowcaseProject.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1 min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">
                  {activeLiveShowcaseProject.summary}
                </p>
                <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 truncate">
                  {activeLiveShowcaseProject.liveDomain}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeLiveShowcaseProject.liveDomain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141214] dark:bg-white text-white dark:text-[#141214] hover:opacity-90 text-xs font-semibold transition-opacity whitespace-nowrap"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => openLivePreview(activeLiveShowcaseProject)}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full border border-black/15 dark:border-white/15 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Inspect</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Searchable Directory List of All 25 Live Websites */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-[#111014] rounded-2xl border border-black/5 dark:border-white/10 p-4 sm:p-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold font-display text-[#141214] dark:text-white">
                  25 Featured Live Websites
                </h3>
                <span className="text-[11px] font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
                  {filteredLiveSites.length} links
                </span>
              </div>

              <div className="relative">
                <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={liveSplitFilter}
                  onChange={(e) => setLiveSplitFilter(e.target.value)}
                  placeholder="Filter live websites..."
                  aria-label="Filter 25 live websites"
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#F7F4F1] dark:bg-[#1A1920] border border-black/10 dark:border-white/10 text-xs text-[#141214] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#D91E2A]"
                />
              </div>
            </div>

            <div className="mt-3 flex-1 max-h-[340px] overflow-y-auto divide-y divide-black/5 dark:divide-white/5 pr-1">
              {filteredLiveSites.map((site) => {
                const isSelected = site.id === activeLiveShowcaseProject.id;
                return (
                  <div
                    key={site.id}
                    onClick={() => setSelectedLiveShowcaseId(site.id)}
                    onMouseEnter={() => setSelectedLiveShowcaseId(site.id)}
                    className={`py-2.5 px-2.5 rounded-lg flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#F7ECE8] dark:bg-[#261618]'
                        : 'hover:bg-[#F7F4F1] dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#141214] dark:text-white truncate">
                        {site.title}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 truncate">
                        {formatCleanUrl(site.liveDomain)}
                      </div>
                    </div>

                    <a
                      href={site.liveDomain}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${site.title} live website`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 text-[11px] font-semibold text-[#D91E2A] dark:text-[#FF7A59] hover:bg-[#141214] hover:text-white dark:hover:bg-white dark:hover:text-[#141214] transition-colors shrink-0"
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Complete 25-Site Visual Image Grid */}
        <div className="pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-display text-[#141214] dark:text-white">
                All {CLIENT_LIVE_PROJECTS.length} Featured Live Websites (Images &amp; Links)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Direct external URLs and sandbox previews for every submitted showcase site.
              </p>
            </div>
            <button
              type="button"
              onClick={onExploreCourses}
              className="text-xs font-semibold text-[#D91E2A] dark:text-[#FF7A59] hover:underline cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              Join a Cohort to Build These →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {CLIENT_LIVE_PROJECTS.map((project) => (
              <article
                key={project.id}
                onClick={() => openLivePreview(project)}
                className="rounded-2xl bg-white dark:bg-[#17161B] border border-black/10 dark:border-white/10 overflow-hidden hover:border-[#D91E2A]/60 dark:hover:border-[#FF7A59]/60 transition-colors cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] bg-neutral-900 overflow-hidden relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between gap-2 text-[11px] font-mono text-white/85 tabular-nums">
                      <span>{project.id}</span>
                      <span className="truncate max-w-[165px]">
                        {formatCleanUrl(project.liveDomain)}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 truncate">
                      {project.techStack.slice(0, 3).join(' · ')}
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#141214] dark:text-white font-display leading-snug group-hover:text-[#D91E2A] dark:group-hover:text-[#FF7A59] transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-2 text-xs">
                  <a
                    href={project.liveDomain}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#D91E2A] dark:text-[#FF7A59] hover:underline whitespace-nowrap shrink-0"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLivePreview(project);
                    }}
                    className="inline-flex items-center gap-1 font-medium text-neutral-600 dark:text-neutral-300 hover:text-[#141214] dark:hover:text-white cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Sandbox</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          BAND 5: ENGINEERED FOR SCALE TELEMETRY + COMPLETE 234-PROJECT DIRECTORY (00:17–00:20)
         ===================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-14 space-y-10">
        {/* Engineered for Scale Telemetry Card (Matching Video 00:18–00:19) */}
        <div className="rounded-[28px] bg-[#EFEAE5] dark:bg-[#17161B] border border-black/5 dark:border-white/10 p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-1.5">
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              TheCodeSpark Engineering Standard
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold font-display tracking-tight text-[#141214] dark:text-white">
              Engineered for Production Scale
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-white dark:bg-[#1E1D24] border border-black/5 dark:border-white/10 p-5 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-display tabular-nums text-[#141214] dark:text-white">
                {FEATURED_PROJECTS.length}
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Verified Live Builds
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-[#1E1D24] border border-black/5 dark:border-white/10 p-5 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-display tabular-nums text-[#141214] dark:text-white">
                {CLIENT_LIVE_PROJECTS.length}
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                External Live Web URLs
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-[#1E1D24] border border-black/5 dark:border-white/10 p-5 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-display tabular-nums text-[#141214] dark:text-white">
                9 Tracks
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                SaaS, AI, FinTech &amp; Web
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-[#1E1D24] border border-black/5 dark:border-white/10 p-5 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-display tabular-nums text-[#141214] dark:text-white">
                18 ms
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Median API Endpoint Latency
              </div>
            </div>
          </div>
        </div>

        {/* Full 234-Project Interactive Directory */}
        <div id="live-projects-directory" className="pt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-semibold font-display tracking-tight text-[#141214] dark:text-white">
                Complete Live Project Archive ({FEATURED_PROJECTS.length})
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Search any technology stack, URL, or project title, switch between Cards and Index table view, or open any live sandbox.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative flex-1 sm:w-72">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search title, URL, stack, or ID..."
                  aria-label="Search complete project archive"
                  className="w-full pl-9 pr-8 py-2.5 rounded-full bg-white dark:bg-[#17161B] border border-black/10 dark:border-white/15 text-xs sm:text-sm text-[#141214] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#D91E2A]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear archive search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="inline-flex items-center p-1 rounded-full bg-[#EAE4DF] dark:bg-[#17161B] border border-black/5 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    viewMode === 'grid'
                      ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214]'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-[#141214] dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    viewMode === 'list'
                      ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214]'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-[#141214] dark:hover:text-white'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span>Index</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-black/10 dark:border-white/10">
            {PROJECT_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              const count = categoryCounts[category] ?? 0;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                    active
                      ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214] font-semibold'
                      : 'bg-white dark:bg-[#17161B] text-neutral-600 dark:text-neutral-300 border border-black/10 dark:border-white/10 hover:text-[#141214] dark:hover:text-white'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Result Count & View All Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 text-xs text-neutral-600 dark:text-neutral-400 font-mono tabular-nums">
            <span>
              Showing {rangeStart}–{rangeEnd} of {filteredProjects.length} live projects
            </span>

            <button
              type="button"
              onClick={() => setShowAllMatching((prev) => !prev)}
              className="text-xs font-sans font-semibold text-[#141214] dark:text-neutral-200 hover:text-[#D91E2A] dark:hover:text-[#FF7A59] underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
            >
              {showAllMatching ? 'Show Paginated (24 / page)' : `View All ${filteredProjects.length} Together`}
            </button>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white dark:bg-[#17161B] border border-black/10 dark:border-white/10 rounded-3xl p-10 text-center space-y-3">
              <p className="text-base font-semibold text-[#141214] dark:text-white">
                No projects matched &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Try searching for Next.js, Gemini, PostgreSQL, or reset filters to inspect all {FEATURED_PROJECTS.length} builds.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-5 py-2 rounded-full bg-[#141214] dark:bg-white text-white dark:text-[#141214] text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* GRID CARDS WITH PREVIEW IMAGES & LINKS */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => openLivePreview(project)}
                  className="bg-white dark:bg-[#17161B] border border-black/10 dark:border-white/10 hover:border-[#D91E2A]/60 dark:hover:border-[#FF7A59]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors cursor-pointer group"
                >
                  <div>
                    <div className="aspect-[16/10] bg-neutral-900 overflow-hidden relative">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 inset-x-4 flex items-center justify-between text-[11px] font-mono text-white/85 tabular-nums">
                        <span>{project.id}</span>
                        <span className="truncate max-w-[180px]">{project.category}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-base sm:text-lg font-semibold text-[#141214] dark:text-white font-display leading-snug group-hover:text-[#D91E2A] dark:group-hover:text-[#FF7A59] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>

                      <div className="pt-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono truncate">
                        {project.techStack.join(' · ')}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-2 text-xs">
                    {project.isExternalLive ? (
                      <a
                        href={project.liveDomain}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-semibold text-[#D91E2A] dark:text-[#FF7A59] hover:underline truncate max-w-[190px]"
                      >
                        <span className="truncate">{formatCleanUrl(project.liveDomain)}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    ) : (
                      <span className="text-neutral-600 dark:text-neutral-400 truncate">
                        {project.leadEngineer} · {project.cohort}
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1 font-semibold text-[#141214] dark:text-white group-hover:text-[#D91E2A] dark:group-hover:text-[#FF7A59] shrink-0 whitespace-nowrap">
                      <span>{project.isExternalLive ? 'Sandbox' : 'Launch Live'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* INDEX TABLE VIEW WITH THUMBNAIL PREVIEWS & LINKS */
            <div className="bg-white dark:bg-[#17161B] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/10 text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">
                      <th className="py-3.5 px-4">ID</th>
                      <th className="py-3.5 px-4">Project</th>
                      <th className="py-3.5 px-4 hidden md:table-cell">Category</th>
                      <th className="py-3.5 px-4 hidden lg:table-cell">Stack</th>
                      <th className="py-3.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5 dark:divide-white/5 text-xs sm:text-sm">
                    {visibleProjects.map((project) => (
                      <tr
                        key={project.id}
                        onClick={() => openLivePreview(project)}
                        className="hover:bg-[#F7F4F1] dark:hover:bg-white/[0.03] transition-colors cursor-pointer"
                      >
                        <td className="py-3 px-4 font-mono text-xs text-neutral-500 dark:text-neutral-400 tabular-nums whitespace-nowrap">
                          {project.id}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              className="w-16 h-10 rounded-lg object-cover bg-neutral-900 shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="font-semibold text-[#141214] dark:text-white truncate">
                                {project.title}
                              </div>
                              <div className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 max-w-md">
                                {project.isExternalLive
                                  ? formatCleanUrl(project.liveDomain)
                                  : project.summary}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 hidden md:table-cell text-xs text-neutral-600 dark:text-neutral-300 whitespace-nowrap">
                          {project.category}
                        </td>
                        <td className="py-3 px-4 hidden lg:table-cell font-mono text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                          {project.techStack.slice(0, 3).join(' · ')}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="inline-flex items-center justify-end gap-2">
                            {project.isExternalLive && (
                              <a
                                href={project.liveDomain}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#D91E2A]/10 text-[#D91E2A] dark:text-[#FF7A59] hover:underline text-xs font-semibold"
                              >
                                <span>Visit</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                openLivePreview(project);
                              }}
                              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#141214] dark:bg-white text-white dark:text-[#141214] hover:opacity-90 text-xs font-semibold transition-opacity cursor-pointer"
                            >
                              <span>Open</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pagination */}
          {!showAllMatching && totalPages > 1 && (
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 tabular-nums">
                Page {currentPageNum} of {totalPages}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  disabled={currentPageNum === 1}
                  onClick={() => {
                    setCurrentPageNum((p) => Math.max(1, p - 1));
                    scrollToElement('live-projects-directory');
                  }}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-white dark:bg-[#17161B] border border-black/10 dark:border-white/10 text-xs font-medium disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => {
                      setCurrentPageNum(pageNum);
                      scrollToElement('live-projects-directory');
                    }}
                    className={`w-9 h-9 rounded-full text-xs font-mono tabular-nums transition-colors cursor-pointer ${
                      pageNum === currentPageNum
                        ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214] font-bold'
                        : 'bg-white dark:bg-[#17161B] text-neutral-700 dark:text-neutral-300 border border-black/10 dark:border-white/10 hover:border-black/30'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPageNum === totalPages}
                  onClick={() => {
                    setCurrentPageNum((p) => Math.min(totalPages, p + 1));
                    scrollToElement('live-projects-directory');
                  }}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-white dark:bg-[#17161B] border border-black/10 dark:border-white/10 text-xs font-medium disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          BAND 6: CRIMSON GRADIENT DEPLOYMENT ROADMAP BANNER (VIDEO 00:21–00:23)
         ===================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <div className="space-y-4">
          {/* Top Crimson Visual Card */}
          <div className="relative rounded-[28px] overflow-hidden min-h-[260px] sm:min-h-[310px] flex items-center justify-center text-center p-6 sm:p-10 bg-[#26070A]">
            <img
              src={featuredCrimsonAtelier}
              alt="From Concept to Live Deployment Workflow"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-[#4A090F]/45 to-black/50" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-2">
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl font-semibold font-display tracking-tight text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Bring Production Craft to Your Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                From system architecture to live deployment in clear engineering steps
              </p>
            </div>
          </div>

          {/* Bottom Deep Crimson Stacked Steps Panel */}
          <div className="rounded-[28px] bg-[radial-gradient(circle_at_50%_0%,#C81627_0%,#7A0A14_55%,#2D0509_100%)] text-white p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="text-center space-y-1.5">
              <p className="text-xs text-white/75">
                TheCodeSpark Technologies Private Limited · Engineering Delivery Process
              </p>
              <h3 className="text-xl sm:text-3xl font-semibold font-display tracking-tight">
                From interest to live operation in clear steps
              </h3>
            </div>

            <div className="max-w-2xl mx-auto space-y-2.5">
              {ARCHITECTURE_STEPS.map((item, idx) => {
                const isOpen = expandedStepIdx === idx;
                return (
                  <div
                    key={item.step}
                    className="rounded-xl bg-black/25 hover:bg-black/35 border border-white/10 transition-colors overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedStepIdx(isOpen ? null : idx)}
                      className="w-full px-5 py-3.5 flex items-center justify-between gap-3 text-left cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-medium text-white">
                        {item.step}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/70 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-white/80 leading-relaxed border-t border-white/10 pt-3">
                        {item.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onRequestCallback}
                className="inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-[#141214] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Request a Partner Call</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#141214] inline-flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BAND 7: EDITORIAL FAQ ACCORDION (VIDEO 00:25–00:28)
         ===================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-8 space-y-8">
        <div className="text-center space-y-4">
          <h2
            className="text-2xl sm:text-4xl font-semibold font-display tracking-tight text-[#141214] dark:text-white"
            style={{ textWrap: 'balance' }}
          >
            We&rsquo;re here to answer all your questions
          </h2>

          <div className="inline-flex items-center p-1 rounded-full bg-[#EAE4DF] dark:bg-[#17161B] border border-black/5 dark:border-white/10">
            <button
              type="button"
              onClick={() => {
                setFaqAudience('learners');
                setOpenFaqIdx(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                faqAudience === 'learners'
                  ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214]'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Learners &amp; Builders
            </button>
            <button
              type="button"
              onClick={() => {
                setFaqAudience('partners');
                setOpenFaqIdx(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                faqAudience === 'partners'
                  ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214]'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Hiring &amp; Partners
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {FAQ_DATA[faqAudience].map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#EFEAE5] dark:bg-[#17161B] border border-black/5 dark:border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-medium text-[#141214] dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Subtle Floating Consultation Pill Dock (Desktop, Dismissible, Matching Video Bottom-Right) */}
      {showFloatingDock && !activeModalProject && (
        <div className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 rounded-full bg-[#3A1B1E]/95 backdrop-blur-md border border-white/15 pl-2 pr-2 py-1.5 text-white shadow-lg">
          <button
            type="button"
            onClick={() => setShowFloatingDock(false)}
            aria-label="Dismiss consultation shortcut"
            className="w-7 h-7 rounded-full hover:bg-white/15 inline-flex items-center justify-center text-white/75 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onRequestCallback}
            className="inline-flex items-center gap-2.5 text-xs font-medium cursor-pointer"
          >
            <span>Building a project? Book a call</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#141214] inline-flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      )}

      {/* =====================================================================
          INTERACTIVE LIVE PROJECT PREVIEW MODAL
         ===================================================================== */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl bg-white dark:bg-[#141419] border border-black/15 dark:border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#F7F4F1] dark:bg-[#101014]">
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 tabular-nums">
                  <span>{activeModalProject.id}</span>
                  <span>·</span>
                  <span>{activeModalProject.category}</span>
                  <span>·</span>
                  <span>{activeModalProject.cohort}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#141214] dark:text-white font-display truncate">
                  {activeModalProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleStepModalProject(-1)}
                  aria-label="Previous project"
                  className="p-2 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleStepModalProject(1)}
                  aria-label="Next project"
                  className="p-2 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close live preview"
                  className="p-2 rounded-full bg-[#141214] dark:bg-white/10 text-white hover:bg-[#D91E2A] cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Browser Address Bar + Tab Switcher */}
            <div className="px-5 py-3 border-b border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#17161B]">
              <div className="flex items-center gap-2 flex-wrap min-w-0 max-w-full">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F4F1] dark:bg-black/40 border border-black/10 dark:border-white/10 text-xs font-mono text-neutral-700 dark:text-neutral-300 max-w-full overflow-hidden">
                  <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">{activeModalProject.liveDomain}</span>
                  <button
                    type="button"
                    onClick={handleCopyDomain}
                    aria-label="Copy live deployment URL"
                    className="ml-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer shrink-0"
                  >
                    {copiedDomain ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {activeModalProject.isExternalLive && (
                  <a
                    href={activeModalProject.liveDomain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D91E2A] hover:bg-[#b81621] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Open Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="inline-flex items-center p-1 rounded-full bg-[#F7F4F1] dark:bg-black/40 border border-black/10 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setModalTab('live')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    modalTab === 'live'
                      ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214]'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Live Sandbox</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab('architecture')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    modalTab === 'architecture'
                      ? 'bg-[#141214] text-white dark:bg-white dark:text-[#141214]'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 max-h-[68vh] overflow-y-auto space-y-6">
              {modalTab === 'live' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
                    <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-900 aspect-[16/10] relative">
                      <img
                        src={activeModalProject.thumbnail}
                        alt={activeModalProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-xs text-white font-mono tabular-nums">
                        <span>Latency {activeModalProject.responseLatency}</span>
                        <span>Uptime {activeModalProject.uptime}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        Interactive Module Toggles
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeModalProject.features.map((feat, fIdx) => {
                          const enabled = !!enabledSimFeatures[fIdx];
                          return (
                            <button
                              key={feat}
                              type="button"
                              onClick={() =>
                                setEnabledSimFeatures((prev) => ({
                                  ...prev,
                                  [fIdx]: !prev[fIdx]
                                }))
                              }
                              className={`px-3 py-2 rounded-xl border text-left text-xs transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                                enabled
                                  ? 'bg-[#141214] text-white border-[#141214] dark:bg-white/10 dark:border-white/25'
                                  : 'bg-[#F7F4F1] dark:bg-black/30 text-neutral-500 dark:text-neutral-500 border-black/10 dark:border-white/10'
                              }`}
                            >
                              <span className="truncate">{feat}</span>
                              <span className="font-mono text-[10px] shrink-0">
                                {enabled ? 'ON' : 'OFF'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col justify-between bg-[#141113] text-neutral-100 rounded-2xl border border-white/10 overflow-hidden">
                    <div className="p-4 border-b border-white/10 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono text-neutral-400">
                          Live Production Endpoint Console
                        </span>
                        <button
                          type="button"
                          onClick={handleRunTestRequest}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#141214] hover:bg-neutral-200 text-xs font-semibold cursor-pointer whitespace-nowrap"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Run Live Request</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {activeModalProject.apiRoutes.map((route, rIdx) => (
                          <button
                            key={route}
                            type="button"
                            onClick={() => {
                              setSelectedRouteIdx(rIdx);
                              setApiResponseJson(
                                buildSimulatedApiPayload(activeModalProject, route)
                              );
                            }}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono cursor-pointer transition-colors ${
                              selectedRouteIdx === rIdx
                                ? 'bg-[#D91E2A] text-white font-semibold'
                                : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                            }`}
                          >
                            {route}
                          </button>
                        ))}
                      </div>
                    </div>

                    <pre className="p-4 text-[11.5px] font-mono text-emerald-300 overflow-x-auto leading-relaxed flex-1 max-h-[280px]">
                      {apiResponseJson}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                        System Overview
                      </h4>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {activeModalProject.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                        Core Production Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-800 dark:text-neutral-200">
                        {activeModalProject.techStack.map((tech, tIdx) => (
                          <span key={tech}>
                            {tech}
                            {tIdx < activeModalProject.techStack.length - 1 && (
                              <span className="ml-2 text-neutral-400">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-black/10 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                      <div>
                        Lead Builder:{' '}
                        <span className="font-semibold text-[#141214] dark:text-white">
                          {activeModalProject.leadEngineer}
                        </span>
                      </div>
                      <div>
                        Cohort Track:{' '}
                        <span className="font-semibold text-[#141214] dark:text-white">
                          {activeModalProject.cohort}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                        Implemented Capabilities
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                        {activeModalProject.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                        Exposed Service Routes
                      </h4>
                      <div className="space-y-1.5">
                        {activeModalProject.apiRoutes.map((route) => (
                          <div
                            key={route}
                            className="px-3 py-1.5 rounded-xl bg-[#F7F4F1] dark:bg-black/40 border border-black/10 dark:border-white/10 text-xs font-mono text-neutral-800 dark:text-neutral-200"
                          >
                            {route}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-4 border-t border-black/10 dark:border-white/10 bg-[#F7F4F1] dark:bg-[#101014] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Built &amp; showcased by TheCodeSpark Technologies Private Limited · {activeModalProject.cohort}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {activeModalProject.isExternalLive && (
                  <a
                    href={activeModalProject.liveDomain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141214] dark:bg-white text-white dark:text-[#141214] text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setActiveModalProject(null);
                    onRequestCallback();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D91E2A] hover:bg-[#b81621] text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
                >
                  <span>Build Similar Live Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
