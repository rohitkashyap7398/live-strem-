import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

import brandLogo from '../assets/logo.png';

interface NavbarProps {
  currentPage: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail';
  onNavigate: (page: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail', courseId?: string) => void;
  onRequestCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestCall
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
      {/* 
        ========================================================================
        NAVBAR EXACTLY MATCHING image_061ca74a.png:
        Zone 1 (Left): Brand Logo + Vertical Divider line + Company Name
        Zone 2 (Center): Dark Rounded Capsule Bar with Navigation links
        Zone 3 (Right): Orange Outline Pill "Request Call" Button + "Sign In" link
        (Note: No phone numbers inside navbar as explicitly requested by user)
        ========================================================================
      */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#2A2A2A]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Brand (Logo + Vertical Divider + Company Name exactly as in image_061ca74a.png) */}
          <motion.button
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 text-left group shrink-0 cursor-pointer select-none"
          >
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="TheCodeSpark Logo"
              className="h-8 sm:h-9 w-auto max-w-[110px] object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />
            {/* Vertical Divider Line exactly matching image_061ca74a.png */}
            <div className="h-6 w-[1.5px] bg-white/20" />
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-tight text-white font-display leading-tight">
                TheCodeSpark
              </span>
              <span className="text-xs font-normal text-neutral-300 leading-tight">
                Technologies Private Limited
              </span>
            </div>
          </motion.button>

          {/* Zone 2: Centered Capsule Bar (exactly matching image_061ca74a.png) */}
          <nav className="hidden lg:flex items-center gap-6 px-6 py-2.5 rounded-2xl bg-[#1e1e1e] border border-white/10 shadow-lg text-sm font-medium">
            {navItems.map((item) => {
              const active = isCurrentActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    active ? 'text-white font-semibold' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Request Call Pill Button & Sign In (exactly as in image_061ca74a.png) */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Request Call Orange Outline Pill Button */}
            <motion.button
              onClick={onRequestCall}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 text-xs font-semibold text-white border border-[#E10600] bg-[#E10600]/15 hover:bg-[#E10600] rounded-full shadow-lg shadow-[#E10600]/15 transition-all whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#E10600] group-hover:text-white transition-colors" />
              <span>Request Call</span>
            </motion.button>

            {/* "Sign In" text button exactly matching image_061ca74a.png */}
            <button
              onClick={onRequestCall}
              className="hidden sm:inline-block text-xs sm:text-sm text-neutral-300 hover:text-white font-medium cursor-pointer transition-colors px-1"
            >
              Sign In
            </button>

            {/* Mobile / Tablet Menu Button (Side Drawer Trigger) */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Horizontal Quick Tabs */}
        <div className="flex lg:hidden items-center gap-1.5 px-3 py-2 border-t border-white/5 bg-[#09090d] overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const active = isCurrentActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'text-white bg-[#ff5722] font-semibold shadow-md shadow-[#ff5722]/30'
                    : 'text-neutral-400 bg-white/5 hover:text-white'
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Side-Drawer sliding from the RIGHT side */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-[85%] max-w-[360px] h-full bg-[#0d0d12] border-l border-white/10 shadow-2xl flex flex-col z-10 overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2.5">
                  <img
                    src={brandLogo}
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                    alt="TheCodeSpark Logo"
                    className="h-8 w-auto object-contain filter drop-shadow"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-white leading-tight font-display">
                      TheCodeSpark
                    </span>
                    <span className="text-[10px] font-semibold text-[#ff5722] leading-tight">
                      Technologies Pvt Ltd
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
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
                              : 'text-neutral-300 hover:bg-white/5 hover:text-white'
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
                      className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-xs font-semibold rounded-xl cursor-pointer transition-colors"
                    >
                      Sign In to Student Portal
                    </button>
                  </div>
                </div>

                {/* Drawer Footer Links */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
                    <button
                      onClick={() => handleNavClick('home')}
                      className="text-left py-1 hover:text-white cursor-pointer"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onRequestCall();
                      }}
                      className="text-left py-1 hover:text-white cursor-pointer"
                    >
                      Student Support
                    </button>
                    <button
                      onClick={() => handleNavClick('offline')}
                      className="text-left py-1 hover:text-white cursor-pointer"
                    >
                      Lucknow Campus
                    </button>
                    <button
                      onClick={() => handleNavClick('courses')}
                      className="text-left py-1 hover:text-white cursor-pointer"
                    >
                      All Cohorts
                    </button>
                  </div>

                  <p className="text-[10px] text-neutral-500 font-mono pt-2">
                    © 2026 TheCodeSpark Technologies Pvt Ltd
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
