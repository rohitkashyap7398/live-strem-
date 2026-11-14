import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowRight, MessageSquare, MessageCircle } from 'lucide-react';

import brandLogo from '../assets/logo.png';
import { MagneticButton } from './MagneticButton';
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

  // Terminology updated as requested:
  // Bootcamp -> Intensive Training
  // Classroom -> Code Studio
  // Offline Programs -> Tech Campus
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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#2A2A2A]/95 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Zone 1: Brand (Logo + Vertical Divider + Company Name) */}
          <motion.button
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 sm:gap-3 text-left group shrink cursor-pointer select-none min-w-0"
          >
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="TheCodeSpark Logo"
              className="h-7 sm:h-9 w-auto max-w-[85px] sm:max-w-[110px] object-contain filter drop-shadow group-hover:scale-105 transition-transform shrink-0"
            />
            {/* Vertical Divider Line */}
            <div className="h-5 sm:h-6 w-[1.5px] bg-slate-300 dark:bg-white/20 shrink-0" />
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-slate-900 dark:text-white font-display leading-tight truncate">
                TheCodeSpark
              </span>
              <span className="text-[10px] sm:text-xs font-normal text-slate-500 dark:text-neutral-300 leading-tight truncate max-w-[115px] xs:max-w-[160px] sm:max-w-none">
                Technologies Private Limited
              </span>
            </div>
          </motion.button>

          {/* Zone 2: Centered Capsule Bar */}
          <nav className="hidden lg:flex items-center gap-5 px-5 py-2.5 rounded-2xl bg-slate-100/90 dark:bg-[#1e1e1e] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-lg text-sm font-medium transition-colors">
            {navItems.map((item) => {
              const active = isCurrentActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-slate-950 dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Direct WhatsApp, Request Call Pill Button, 3D Rocker Theme Switch & Sign In */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Direct WhatsApp Quick Connect */}
            <div className="hidden sm:block">
              <MagneticButton
                onClick={() =>
                  window.open(
                    'https://wa.me/917398839769?text=Hello%20Rohit%20Sir%2C%20I%20want%20to%20know%20more%20about%20TheCodeSpark%20Technologies%20courses',
                    '_blank'
                  )
                }
                variant="whatsapp"
                size="xs"
                icon={<MessageCircle className="w-3.5 h-3.5 fill-white" />}
                iconPosition="left"
                text="WhatsApp"
              />
            </div>

            {/* Request Call Pill Button with Magnetic physics & rolling text */}
            <MagneticButton
              onClick={onRequestCall}
              variant="outline"
              size="xs"
              icon={<Phone className="w-3 h-3 text-[#E10600] group-hover:text-white transition-colors" />}
              iconPosition="left"
              text="Request Call"
              className="!border-[#E10600] !bg-[#E10600]/10 dark:!bg-[#E10600]/15 !text-[#E10600] dark:!text-white hover:!bg-[#E10600] hover:!text-white"
            />

            {/* "Sign In" text button with rolling text */}
            <button
              onClick={onRequestCall}
              className="group hidden xl:inline-flex items-center text-xs sm:text-sm text-slate-600 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white font-medium cursor-pointer transition-colors px-1 whitespace-nowrap shrink-0"
            >
              <span className="btn-roll-container">
                <span className="btn-roll-primary">Sign In</span>
                <span className="btn-roll-secondary text-[#E10600]">Sign In</span>
              </span>
            </button>

            {/* 3D Physical Rocker Dark / White Theme Switch (Exact Reference Design) */}
            <RockerThemeToggle isDark={isDarkMode} onToggle={onToggleTheme} />

            {/* Mobile / Tablet Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Horizontal Quick Tabs */}
        <div className="flex lg:hidden items-center gap-1.5 px-3 py-2 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#09090d] overflow-x-auto scrollbar-none transition-colors">
          {navItems.map((item) => {
            const active = isCurrentActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'text-white bg-[#ff5722] font-semibold shadow-md shadow-[#ff5722]/30'
                    : 'text-slate-600 dark:text-neutral-400 bg-slate-200/70 dark:bg-white/5 hover:text-slate-950 dark:hover:text-white'
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
                    <span className="text-[10px] font-semibold text-[#ff5722] leading-tight">
                      Technologies Pvt Ltd
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
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
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5722] font-semibold block px-1">
                      Menu Navigation
                    </span>
                    {navItems.map((item) => {
                      const active = isCurrentActive(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                            active
                              ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/25 font-bold'
                              : 'text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-70" />
                        </button>
                      );
                    })}
                  </div>

                  {/* Call & Sign In Actions inside mobile drawer */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onRequestCall();
                      }}
                      className="w-full py-3 bg-[#ff5722] hover:bg-[#ea580c] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#ff5722]/25 cursor-pointer flex items-center justify-center gap-2 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Request Free Counselor Call</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onRequestCall();
                      }}
                      className="w-full py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white text-xs font-semibold rounded-xl cursor-pointer transition-colors"
                    >
                      Sign In to Student Portal
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
