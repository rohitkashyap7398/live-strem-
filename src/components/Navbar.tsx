import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, ArrowRight, Phone, ChevronDown, Briefcase } from 'lucide-react';

import brandLogo from '../assets/logo.png';
import { RockerThemeToggle } from './RockerThemeToggle';
import {
  FEATURED_PROJECTS,
  CLIENT_LIVE_PROJECTS,
  PROJECT_CATEGORIES,
  ProjectCategory
} from '../data/featuredProjectsData';
import { CAREER_ROLES, CareerSectionCategory } from './CareerView';

export type NavPageId =
  | 'home'
  | 'courses'
  | 'bootcamp'
  | 'classroom'
  | 'offline'
  | 'projects'
  | 'career'
  | 'course-detail';

interface NavbarProps {
  currentPage: NavPageId;
  onNavigate: (page: NavPageId, courseId?: string) => void;
  onNavigateProjects?: (
    category?: 'All' | ProjectCategory,
    scrollTarget?: 'top' | 'live-sites' | 'directory'
  ) => void;
  onNavigateCareer?: (
    section?: CareerSectionCategory,
    scrollTarget?: 'top' | 'roles' | 'placement' | 'apply'
  ) => void;
  onRequestCall: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const WHATSAPP_URL =
  'https://wa.me/917398839769?text=Hello%20Rohit%20Sir%2C%20I%20want%20to%20know%20more%20about%20TheCodeSpark%20Technologies%20courses';

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6.8c-5.08 0-9.2 4.12-9.2 9.2 0 1.62.42 3.2 1.22 4.6L6.8 25.2l4.72-1.24c1.36.74 2.9 1.14 4.48 1.14 5.08 0 9.2-4.12 9.2-9.2S21.08 6.8 16 6.8Zm5.36 13.02c-.22.64-1.3 1.22-1.82 1.3-.46.06-1.06.1-1.72-.12-.4-.12-.92-.3-1.58-.58-2.78-1.2-4.58-4.02-4.72-4.2-.14-.2-1.12-1.5-1.12-2.86 0-1.36.7-2.02.96-2.3.26-.28.56-.34.74-.34h.54c.18 0 .42-.06.64.5.24.58.82 2 .9 2.14.08.14.12.3.02.5-.1.2-.14.32-.28.5-.14.18-.3.38-.42.52-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.92 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.06.16-.18.7-.82.88-1.1.18-.28.38-.24.64-.14.26.1 1.66.78 1.94.92.28.14.48.22.54.34.06.12.06.72-.16 1.36Z"
    />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onNavigateProjects,
  onNavigateCareer,
  onRequestCall,
  isDarkMode,
  onToggleTheme
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsExpanded, setIsMobileProjectsExpanded] = useState(false);
  const [isMobileCareerExpanded, setIsMobileCareerExpanded] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const hoverCloseTimerRef = useRef<number | null>(null);

  const navItems: { id: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'bootcamp', label: 'Intensive Training' },
    { id: 'classroom', label: 'Code Studio' },
    { id: 'offline', label: 'Tech Campus' }
  ];

  const categoryCounts = React.useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of FEATURED_PROJECTS) {
      map[p.category] = (map[p.category] || 0) + 1;
    }
    return map;
  }, []);

  // Track scroll smoothly without excessive state updates
  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!isProjectsDropdownOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setIsProjectsDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProjectsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isProjectsDropdownOpen]);

  // Lock body scroll when mobile side-drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isCurrentActive = (id: string) => {
    if (id === 'courses' && currentPage === 'course-detail') return true;
    return currentPage === id;
  };

  const handleNavClick = (id: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline') => {
    setIsProjectsDropdownOpen(false);
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const handleProjectDropdownSelect = (
    category: 'All' | ProjectCategory = 'All',
    scrollTarget: 'top' | 'live-sites' | 'directory' = 'top'
  ) => {
    setIsProjectsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileProjectsExpanded(false);
    if (onNavigateProjects) {
      onNavigateProjects(category, scrollTarget);
    } else {
      onNavigate('projects');
    }
  };

  const handleCareerDropdownSelect = (
    section: CareerSectionCategory = 'all',
    scrollTarget: 'top' | 'roles' | 'placement' | 'apply' = 'top'
  ) => {
    setIsProjectsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileCareerExpanded(false);
    if (onNavigateCareer) {
      onNavigateCareer(section, scrollTarget);
    } else {
      onNavigate('career');
    }
  };

  const openDropdownWithHover = () => {
    if (hoverCloseTimerRef.current) {
      window.clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
    setIsProjectsDropdownOpen(true);
  };

  const closeDropdownWithDelay = () => {
    hoverCloseTimerRef.current = window.setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 140);
  };

  const glassSurfaceClass = isScrolled
    ? 'bg-white/65 dark:bg-[#101016]/65 border-black/15 dark:border-white/20 backdrop-blur-xl shadow-[0_10px_28px_-8px_rgba(15,23,42,0.18)] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.65)]'
    : 'bg-white/15 dark:bg-black/20 border-black/10 dark:border-white/15 backdrop-blur-md shadow-[0_4px_18px_-6px_rgba(15,23,42,0.10)] dark:shadow-[0_6px_22px_-8px_rgba(0,0,0,0.3)]';

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 w-full px-2 sm:px-5 pointer-events-none transition-all duration-300 ease-out ${
          isScrolled ? 'top-1 sm:top-1.5' : 'top-2 sm:top-2.5'
        }`}
      >
        {/* Compact Transparent Floating Pill — shrinks & moves closer to top on scroll */}
        <div
          className={`mx-auto pointer-events-auto rounded-full flex items-center justify-between gap-1.5 sm:gap-2.5 border transition-all duration-300 ease-out will-change-transform ${glassSurfaceClass} ${
            isScrolled
              ? 'max-w-[96%] sm:max-w-5xl lg:max-w-6xl h-[38px] sm:h-[42px] px-2 sm:px-3.5'
              : 'max-w-6xl h-[46px] sm:h-[52px] px-2.5 sm:px-4.5'
          }`}
        >
          {/* Zone 1: Compact Brand Mark */}
          <motion.button
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 sm:gap-2 text-left group shrink-0 cursor-pointer select-none pl-0.5"
          >
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="TheCodeSpark Technologies Private Limited Logo"
              className={`w-auto object-contain filter drop-shadow group-hover:scale-105 transition-all duration-300 shrink-0 ${
                isScrolled ? 'h-4 sm:h-5 max-w-[56px]' : 'h-5 sm:h-6 max-w-[68px]'
              }`}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-extrabold tracking-tight text-slate-950 dark:text-white font-display leading-none whitespace-nowrap transition-all duration-300 ${
                  isScrolled ? 'text-[10.5px] sm:text-[11.5px]' : 'text-[11.5px] sm:text-[13px]'
                }`}
              >
                TheCodeSpark
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 sm:w-2 h-[2px] bg-[#84cc16] dark:bg-[#C4FF00] ml-0.5 align-baseline rounded-full"
                />
              </span>
              <span
                className={`font-semibold tracking-tight text-slate-600 dark:text-neutral-300 whitespace-nowrap transition-all duration-300 leading-none mt-[1px] ${
                  isScrolled ? 'text-[7px] sm:text-[8px]' : 'text-[7.5px] sm:text-[8.5px]'
                }`}
              >
                Technologies Private Limited
              </span>
            </div>
          </motion.button>

          {/* Zone 2: Centered Navigation Links + Separate "Our Featured Projects" Dropdown */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
          >
            {navItems.map((item) => {
              const active = isCurrentActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isScrolled
                      ? 'px-2.5 py-1 text-[11px] xl:text-xs'
                      : 'px-3 py-1.5 text-xs'
                  } ${
                    active
                      ? 'bg-[#C4FF00] text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-900 dark:text-neutral-100 font-medium hover:bg-black/[0.07] dark:hover:bg-white/[0.1] hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Unified Icon-Only Dropdown Trigger for Projects & Careers (No text label in top bar) */}
            <div
              ref={dropdownContainerRef}
              className="relative"
              onMouseEnter={openDropdownWithHover}
              onMouseLeave={closeDropdownWithDelay}
            >
              <button
                type="button"
                aria-label="Open Projects and Careers Dropdown"
                title="Projects & Careers"
                aria-expanded={isProjectsDropdownOpen}
                aria-haspopup="menu"
                onClick={() => setIsProjectsDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center justify-center rounded-full border transition-all duration-200 cursor-pointer shrink-0 ${
                  isScrolled ? 'w-7 h-7' : 'w-8 h-8'
                } ${
                  currentPage === 'projects' || currentPage === 'career'
                    ? 'bg-[#C4FF00] text-slate-950 border-black/40 shadow-sm'
                    : 'bg-black/[0.04] dark:bg-white/[0.06] border-black/15 dark:border-white/20 text-slate-900 dark:text-neutral-100 hover:bg-black/[0.09] dark:hover:bg-white/[0.14]'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProjectsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isProjectsDropdownOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 mt-2.5 w-[450px] rounded-2xl bg-white/95 dark:bg-[#131218]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-2xl p-4 text-left z-50 max-h-[82vh] overflow-y-auto"
                  >
                    {/* Careers & Hiring Section inside Dropdown */}
                    <div className="pb-3.5 border-b border-black/10 dark:border-white/10">
                      <div className="flex items-center justify-between px-1 mb-2">
                        <span className="text-[11px] font-mono font-semibold text-[#D91E2A] dark:text-[#FF7A59]">
                          Careers &amp; Hiring
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCareerDropdownSelect('all', 'apply')}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D91E2A] dark:text-[#C4FF00] hover:underline cursor-pointer"
                        >
                          <span>Quick Apply</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => handleCareerDropdownSelect('all', 'top')}
                          className="rounded-xl bg-[#FFF5F0] dark:bg-[#231511] hover:bg-[#FFE9DF] dark:hover:bg-[#2E1A15] border border-[#FF5A1F]/20 p-3 text-left transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#141214] dark:text-white">
                            <Briefcase className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
                            <span>Careers Page</span>
                          </div>
                          <div className="text-[11px] font-mono tabular-nums text-neutral-600 dark:text-neutral-300 mt-0.5">
                            BDE · Calling · Counsellor · Full Stack
                          </div>
                        </button>

                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => handleCareerDropdownSelect('placement-cell', 'placement')}
                          className="rounded-xl bg-[#F7F4F1] dark:bg-white/5 hover:bg-[#EFEAE5] dark:hover:bg-white/10 p-3 text-left transition-colors cursor-pointer"
                        >
                          <div className="text-xs font-bold text-[#141214] dark:text-white">
                            Placement &amp; Hiring Cell
                          </div>
                          <div className="text-[11px] font-mono tabular-nums text-neutral-600 dark:text-neutral-400 mt-0.5">
                            {CAREER_ROLES.length} Roles · 180+ Drives
                          </div>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-1 mt-2">
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => handleCareerDropdownSelect('open-roles', 'roles')}
                          className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-xs text-neutral-800 dark:text-neutral-200 hover:bg-[#F7F4F1] dark:hover:bg-white/10 transition-colors cursor-pointer text-left"
                        >
                          <span className="truncate">Open Roles ({CAREER_ROLES.length})</span>
                          <ArrowUpRight className="w-3 h-3 opacity-60 shrink-0" />
                        </button>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => handleCareerDropdownSelect('internships', 'roles')}
                          className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-xs text-neutral-800 dark:text-neutral-200 hover:bg-[#F7F4F1] dark:hover:bg-white/10 transition-colors cursor-pointer text-left"
                        >
                          <span className="truncate">Paid Internships</span>
                          <ArrowUpRight className="w-3 h-3 opacity-60 shrink-0" />
                        </button>
                      </div>
                    </div>

                    {/* Featured Projects Section inside Dropdown */}
                    <div className="grid grid-cols-2 gap-2 py-3 border-b border-black/10 dark:border-white/10">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => handleProjectDropdownSelect('All', 'top')}
                        className="rounded-xl bg-[#F7F4F1] dark:bg-white/5 hover:bg-[#EFEAE5] dark:hover:bg-white/10 p-3 text-left transition-colors cursor-pointer"
                      >
                        <div className="text-xs font-bold text-[#141214] dark:text-white">
                          Overview Showcase
                        </div>
                        <div className="text-[11px] font-mono tabular-nums text-neutral-600 dark:text-neutral-400 mt-0.5">
                          {FEATURED_PROJECTS.length} Live Builds
                        </div>
                      </button>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => handleProjectDropdownSelect('Live Web Showcase', 'live-sites')}
                        className="rounded-xl bg-[#FDF2F0] dark:bg-[#2A1417] hover:bg-[#F9E3DF] dark:hover:bg-[#38191E] p-3 text-left transition-colors cursor-pointer"
                      >
                        <div className="text-xs font-bold text-[#D91E2A] dark:text-[#FF7A59]">
                          25 Featured Live Sites
                        </div>
                        <div className="text-[11px] font-mono tabular-nums text-neutral-600 dark:text-neutral-300 mt-0.5">
                          {CLIENT_LIVE_PROJECTS.length} External URLs
                        </div>
                      </button>
                    </div>

                    {/* Track Filter Shortcuts */}
                    <div className="pt-3">
                      <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 px-1 mb-2">
                        Filter Projects by Track
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {PROJECT_CATEGORIES.filter((c) => c !== 'All').map((category) => (
                          <button
                            key={category}
                            type="button"
                            role="menuitem"
                            onClick={() => handleProjectDropdownSelect(category, 'directory')}
                            className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-xs text-neutral-800 dark:text-neutral-200 hover:bg-[#F7F4F1] dark:hover:bg-white/10 transition-colors cursor-pointer text-left"
                          >
                            <span className="truncate">{category}</span>
                            <span className="text-[10px] font-mono tabular-nums text-neutral-500 dark:text-neutral-400 shrink-0">
                              {categoryCounts[category] || 0}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Careers, sandboxes &amp; live links
                      </span>
                      <button
                        type="button"
                        onClick={() => handleProjectDropdownSelect('All', 'directory')}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#D91E2A] dark:text-[#C4FF00] hover:underline cursor-pointer whitespace-nowrap"
                      >
                        <span>Open Archive</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Zone 3: WhatsApp Logo Pill, Lime CTA, Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* WhatsApp Quick Connect — Icon Only */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full border border-black/15 dark:border-white/20 bg-white/25 dark:bg-white/[0.06] hover:bg-white/50 dark:hover:bg-white/[0.14] transition-all duration-300 cursor-pointer shrink-0 ${
                isScrolled ? 'w-7 h-7' : 'w-7 h-7 sm:w-8 sm:h-8'
              }`}
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppLogo
                className={`shrink-0 drop-shadow-xs transition-all duration-300 ${
                  isScrolled ? 'w-4 h-4' : 'w-4 h-4 sm:w-[18px] sm:h-[18px]'
                }`}
              />
            </a>

            {/* Primary Acid-Lime Pill CTA */}
            <motion.button
              type="button"
              onClick={onRequestCall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className={`group inline-flex items-center gap-1 rounded-full bg-[#C4FF00] hover:bg-[#b7f200] text-slate-950 border border-black/75 dark:border-[#C4FF00] font-semibold shadow-sm transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'px-2 sm:px-3 py-1 text-[10px] sm:text-[11px]'
                  : 'px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs'
              }`}
            >
              <span className="hidden min-[420px]:inline">Request Call</span>
              <span className="min-[420px]:hidden">Call</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>

            {/* Compact Physical 3D DAY / NIGHT Rocker Theme Switch */}
            <div className={`transition-transform duration-300 origin-right ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <RockerThemeToggle isDark={isDarkMode} onToggle={onToggleTheme} />
            </div>

            {/* Mobile / Tablet Menu Button (opens side drawer) */}
            <motion.button
              type="button"
              data-magnetic="true"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`lg:hidden rounded-full bg-black/[0.06] dark:bg-white/[0.1] border border-black/15 dark:border-white/20 text-slate-900 dark:text-neutral-100 flex items-center justify-center cursor-pointer transition-all duration-300 shrink-0 ${
                isScrolled ? 'w-7 h-7' : 'w-8 h-8'
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </header>

      {/*
        ========================================================================
        RESPONSIVE SIDE-DRAWER (Slide-in from right side on mobile click)
        ========================================================================
      */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Side-Drawer sliding from the RIGHT side */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-[86%] max-w-[360px] h-full bg-white/95 dark:bg-[#0d0d12]/95 backdrop-blur-2xl border-l border-slate-200 dark:border-white/10 shadow-2xl flex flex-col z-10 overflow-y-auto transition-colors"
            >
              {/* Drawer Top Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50/80 dark:bg-black/40">
                <div className="flex items-center gap-2.5">
                  <img
                    src={brandLogo}
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                    alt="TheCodeSpark Technologies Private Limited Logo"
                    className="h-8 w-auto object-contain filter drop-shadow"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white leading-tight font-display">
                      TheCodeSpark
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 dark:text-[#C4FF00] leading-tight">
                      Technologies Private Limited
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Navigation Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-4 sm:p-5 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  {/* Primary Nav List */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-neutral-400 font-semibold block px-1">
                      Menu Navigation
                    </span>
                    {navItems.map((item) => {
                      const active = isCurrentActive(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                            active
                              ? 'bg-[#C4FF00] text-slate-950 shadow-sm font-bold'
                              : 'text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-70" />
                        </button>
                      );
                    })}

                    {/* Mobile Career Accordion Dropdown */}
                    <div className="pt-1">
                      <button
                        type="button"
                        aria-label="Toggle Career Dropdown"
                        onClick={() => setIsMobileCareerExpanded((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                          currentPage === 'career'
                            ? 'bg-[#C4FF00] text-slate-950 shadow-sm font-bold'
                            : 'text-slate-700 dark:text-neutral-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200/70 dark:hover:bg-white/10'
                        }`}
                      >
                        <span>Career</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileCareerExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isMobileCareerExpanded && (
                        <div className="mt-2 rounded-2xl bg-slate-50 dark:bg-white/[0.04] p-2 space-y-1">
                          <button
                            type="button"
                            onClick={() => handleCareerDropdownSelect('all', 'top')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>Career Hub Overview</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-65" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCareerDropdownSelect('open-roles', 'roles')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>Open Roles ({CAREER_ROLES.length})</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-65" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCareerDropdownSelect('internships', 'roles')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>Paid Engineering Internships</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-65" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCareerDropdownSelect('mentorship', 'roles')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>Mentors &amp; Instructors</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-65" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCareerDropdownSelect('placement-cell', 'placement')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#D91E2A] dark:text-[#FF7A59] hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>Placement &amp; Hiring Cell</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCareerDropdownSelect('all', 'apply')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-slate-950 dark:text-[#C4FF00] hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>Quick Apply Now</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Separate Mobile Accordion Dropdown for Projects */}
                    <div className="pt-1">
                      <button
                        type="button"
                        aria-label="Toggle Projects Dropdown"
                        onClick={() => setIsMobileProjectsExpanded((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                          currentPage === 'projects'
                            ? 'bg-[#C4FF00] text-slate-950 shadow-sm font-bold'
                            : 'text-slate-700 dark:text-neutral-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200/70 dark:hover:bg-white/10'
                        }`}
                      >
                        <span>Projects</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileProjectsExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isMobileProjectsExpanded && (
                        <div className="mt-2 rounded-2xl bg-slate-50 dark:bg-white/[0.04] p-2 space-y-1">
                          <button
                            type="button"
                            onClick={() => handleProjectDropdownSelect('All', 'top')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>All {FEATURED_PROJECTS.length} Live Builds</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-65" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleProjectDropdownSelect('Live Web Showcase', 'live-sites')}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#D91E2A] dark:text-[#FF7A59] hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                          >
                            <span>25 Featured Live Websites</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                          {PROJECT_CATEGORIES.filter((c) => c !== 'All').map((category) => (
                            <button
                              key={category}
                              type="button"
                              onClick={() => handleProjectDropdownSelect(category, 'directory')}
                              className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-600 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between"
                            >
                              <span className="truncate">{category}</span>
                              <span className="font-mono text-[10px] opacity-70 tabular-nums">
                                {categoryCounts[category] || 0}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Call & WhatsApp Actions inside mobile drawer */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onRequestCall();
                      }}
                      className="w-full py-3 bg-[#C4FF00] hover:bg-[#b5ee00] text-slate-950 border border-black/80 dark:border-[#C4FF00] text-xs font-bold rounded-full shadow-sm cursor-pointer flex items-center justify-center gap-2 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Request Free Counselor Call</span>
                    </button>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-neutral-200 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center gap-2 transition-colors"
                    >
                      <WhatsAppLogo className="w-5 h-5 shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Drawer Footer Links */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-neutral-400">
                    <button
                      onClick={() => handleNavClick('home')}
                      className="text-left py-1 hover:text-slate-950 dark:hover:text-white cursor-pointer"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onRequestCall();
                      }}
                      className="text-left py-1 hover:text-slate-950 dark:hover:text-white cursor-pointer"
                    >
                      Student Support
                    </button>
                    <button
                      onClick={() => handleNavClick('offline')}
                      className="text-left py-1 hover:text-slate-950 dark:hover:text-white cursor-pointer"
                    >
                      Lucknow Campus
                    </button>
                    <button
                      onClick={() => handleNavClick('courses')}
                      className="text-left py-1 hover:text-slate-950 dark:hover:text-white cursor-pointer"
                    >
                      All Cohorts
                    </button>
                  </div>

                  <p className="text-[10px] text-neutral-400 font-mono pt-2">
                    © 2024 TheCodeSpark Technologies Private Limited. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
