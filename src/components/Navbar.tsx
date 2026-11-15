import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, ArrowRight, MessageCircle, Phone } from 'lucide-react';

import brandLogo from '../assets/logo.png';
import { RockerThemeToggle } from './RockerThemeToggle';

interface NavbarProps {
  currentPage: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail';
  onNavigate: (page: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail', courseId?: string) => void;
  onRequestCall: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestCall,
  isDarkMode,
  onToggleTheme
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'bootcamp', label: 'Intensive Training' },
    { id: 'classroom', label: 'Code Studio' },
    { id: 'offline', label: 'Tech Campus' }
  ];

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

  return (
    <>
      <header className="sticky top-2.5 sm:top-3 z-50 w-full px-2.5 sm:px-6 pointer-events-none">
        {/* Floating Frosted Full-Pill Container matching reference silhouette */}
        <div className="max-w-7xl mx-auto pointer-events-auto rounded-full px-3 sm:px-5 lg:px-6 h-[60px] sm:h-[66px] flex items-center justify-between gap-2 sm:gap-4 bg-[#d4d4d8]/85 dark:bg-[#19191f]/90 border border-black/15 dark:border-white/15 backdrop-blur-xl shadow-[0_10px_30px_-8px_rgba(15,23,42,0.16)] dark:shadow-[0_14px_38px_-8px_rgba(0,0,0,0.65)] transition-colors duration-300">
          {/* Zone 1: Brand Mark (Logo + Wordmark with lime underscore accent) */}
          <motion.button
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 sm:gap-2.5 text-left group shrink-0 cursor-pointer select-none pl-1"
          >
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="TheCodeSpark Logo"
              className="h-7 sm:h-8 w-auto max-w-[82px] sm:max-w-[96px] object-contain filter drop-shadow group-hover:scale-105 transition-transform shrink-0"
            />
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-950 dark:text-white font-display leading-none whitespace-nowrap">
              TheCodeSpark
              <span
                aria-hidden="true"
                className="inline-block w-2.5 h-[2.5px] bg-[#84cc16] dark:bg-[#C4FF00] ml-0.5 align-baseline rounded-full"
              />
            </span>
          </motion.button>

          {/* Zone 2: Centered Navigation Links with Lime Active Pill */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navItems.map((item) => {
              const active = isCurrentActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#C4FF00] text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-900 dark:text-neutral-200 font-medium hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Outlined Utility Pill, DAY/NIGHT Rocker, Lime CTA Pill & Mobile Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Outlined Pill (WhatsApp Quick Connect) */}
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://wa.me/917398839769?text=Hello%20Rohit%20Sir%2C%20I%20want%20to%20know%20more%20about%20TheCodeSpark%20Technologies%20courses',
                  '_blank'
                )
              }
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/25 dark:border-white/20 bg-black/[0.02] dark:bg-white/[0.04] hover:bg-black/[0.07] dark:hover:bg-white/[0.1] text-slate-900 dark:text-neutral-100 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>WhatsApp</span>
            </button>

            {/* Primary Acid-Lime Pill CTA (`Request Call ↗` matching reference `Start now ↗`) */}
            <motion.button
              type="button"
              onClick={onRequestCall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full bg-[#C4FF00] hover:bg-[#b7f200] text-slate-950 border border-black/80 dark:border-[#C4FF00] text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Request Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>

            {/* Physical 3D DAY / NIGHT Rocker Theme Switch */}
            <RockerThemeToggle isDark={isDarkMode} onToggle={onToggleTheme} />

            {/* Mobile / Tablet Menu Button */}
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-9 h-9 rounded-full bg-black/[0.06] dark:bg-white/[0.08] border border-black/15 dark:border-white/15 text-slate-900 dark:text-neutral-100 flex items-center justify-center cursor-pointer transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Horizontal Quick Tabs Pill Strip */}
        <div className="mt-2 flex lg:hidden items-center justify-start sm:justify-center gap-1.5 px-2.5 py-1.5 mx-auto max-w-full w-fit pointer-events-auto rounded-full bg-[#d4d4d8]/85 dark:bg-[#19191f]/90 border border-black/15 dark:border-white/15 backdrop-blur-lg overflow-x-auto scrollbar-none shadow-sm transition-colors">
          {navItems.map((item) => {
            const active = isCurrentActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#C4FF00] text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-800 dark:text-neutral-300 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] font-medium'
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
              className="relative w-[85%] max-w-[360px] h-full bg-white dark:bg-[#0d0d12] border-l border-slate-200 dark:border-white/10 shadow-2xl flex flex-col z-10 overflow-y-auto transition-colors"
            >
              {/* Drawer Top Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-black/40">
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

                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.open(
                          'https://wa.me/917398839769?text=Hello%20Rohit%20Sir%2C%20I%20want%20to%20know%20more%20about%20TheCodeSpark%20Technologies%20courses',
                          '_blank'
                        );
                      }}
                      className="w-full py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-neutral-200 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </button>
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
