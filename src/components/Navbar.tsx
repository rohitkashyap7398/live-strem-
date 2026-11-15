import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, ArrowRight, Phone } from 'lucide-react';

import brandLogo from '../assets/logo.png';
import { RockerThemeToggle } from './RockerThemeToggle';

interface NavbarProps {
  currentPage: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail';
  onNavigate: (page: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail', courseId?: string) => void;
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
  onRequestCall,
  isDarkMode,
  onToggleTheme
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: { id: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'bootcamp', label: 'Intensive Training' },
    { id: 'classroom', label: 'Code Studio' },
    { id: 'offline', label: 'Tech Campus' }
  ];

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
    onNavigate(id);
    setIsMobileMenuOpen(false);
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
              ? 'max-w-[96%] sm:max-w-3xl lg:max-w-4xl h-[38px] sm:h-[42px] px-2 sm:px-3.5'
              : 'max-w-6xl h-[46px] sm:h-[52px] px-2.5 sm:px-4.5'
          }`}
        >
          {/* Zone 1: Compact Brand Mark */}
          <motion.button
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 sm:gap-2 text-left group shrink-0 cursor-pointer select-none pl-0.5"
          >
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="TheCodeSpark Logo"
              className={`w-auto object-contain filter drop-shadow group-hover:scale-105 transition-all duration-300 shrink-0 ${
                isScrolled ? 'h-4 sm:h-5 max-w-[56px]' : 'h-5 sm:h-6 max-w-[68px]'
              }`}
            />
            <span
              className={`font-extrabold tracking-tight text-slate-950 dark:text-white font-display leading-none whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-[11px] sm:text-xs' : 'text-[12.5px] sm:text-sm'
              }`}
            >
              TheCodeSpark
              <span
                aria-hidden="true"
                className="inline-block w-1.5 sm:w-2 h-[2px] bg-[#84cc16] dark:bg-[#C4FF00] ml-0.5 align-baseline rounded-full"
              />
            </span>
          </motion.button>

          {/* Zone 2: Centered Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
          >
            {navItems.map((item) => {
              const active = isCurrentActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
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
          </nav>

          {/* Zone 3: WhatsApp Logo Pill, Lime CTA, Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* WhatsApp Quick Connect with Official WhatsApp Logo */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-black/15 dark:border-white/20 bg-white/25 dark:bg-white/[0.06] hover:bg-white/50 dark:hover:bg-white/[0.14] text-slate-900 dark:text-neutral-100 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'p-1 sm:px-2 sm:py-1 text-[11px]'
                  : 'p-1 sm:px-2.5 sm:py-1 text-xs'
              }`}
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppLogo
                className={`shrink-0 drop-shadow-xs transition-all duration-300 ${
                  isScrolled ? 'w-4 h-4' : 'w-4 h-4 sm:w-[18px] sm:h-[18px]'
                }`}
              />
              <span className="hidden xl:inline">WhatsApp</span>
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

            {/* Mobile / Tablet Menu Button */}
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`lg:hidden rounded-full bg-black/[0.06] dark:bg-white/[0.1] border border-black/15 dark:border-white/20 text-slate-900 dark:text-neutral-100 flex items-center justify-center cursor-pointer transition-all duration-300 shrink-0 ${
                isScrolled ? 'w-7 h-7' : 'w-7 h-7 sm:w-8 sm:h-8'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.button>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Quick Tabs Strip — smoothly tucks away on scroll */}
        <div
          className={`flex lg:hidden items-center justify-start sm:justify-center gap-1 px-2 mx-auto max-w-full w-fit rounded-full border overflow-x-auto no-scrollbar transition-all duration-300 ease-out ${glassSurfaceClass} ${
            isScrolled
              ? 'mt-0 max-h-0 py-0 opacity-0 -translate-y-2 pointer-events-none border-transparent'
              : 'mt-1.5 max-h-12 py-1 opacity-100 translate-y-0 pointer-events-auto'
          }`}
        >
          {navItems.map((item) => {
            const active = isCurrentActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-0.5 text-[11px] rounded-full whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#C4FF00] text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-900 dark:text-neutral-200 hover:bg-black/[0.06] dark:hover:bg-white/[0.1] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
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
                    alt="TheCodeSpark Logo"
                    className="h-8 w-auto object-contain filter drop-shadow"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white leading-tight font-display">
                      TheCodeSpark
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 dark:text-[#C4FF00] leading-tight">
                      Technologies Pvt Ltd
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
