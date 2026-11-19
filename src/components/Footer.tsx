import React from 'react';
import { Youtube, Instagram, Heart, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface FooterProps {
  onNavigate: (page: 'home' | 'projects' | 'course-detail') => void;
  onRequestCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestCall }) => {
  return (
    <footer className="relative bg-slate-100 dark:bg-[#222222] border-t border-slate-200 dark:border-white/[0.08] pt-16 pb-12 overflow-hidden transition-colors">
      {/* Huge Outline Watermark in Background */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8 overflow-hidden select-none pointer-events-none">
        <div className="text-[6.5vw] font-black font-display tracking-tight text-stroke-subtle opacity-25 leading-none whitespace-nowrap">
          TheCodeSpark Technologies Private Limited
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/5">
          {/* Brand info (col 1-4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 px-2.5 py-1 rounded-xl bg-white dark:bg-white/[0.04] border border-[#E10600]/30 flex items-center justify-center shrink-0 shadow-md dark:shadow-lg shadow-[#E10600]/10">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark Technologies Private Limited"
                  className="h-10 w-auto object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display block leading-tight">
                  TheCodeSpark Technologies
                </span>
                <span className="text-xs font-bold font-mono tracking-wider text-[#E10600] uppercase block leading-none mt-1">
                  Private Limited
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              TheCodeSpark Technologies Private Limited is an industry-first coding school and software career accelerator in India. Transforming college students and career switchers into high-impact software developers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/@TheCodeSpark_73"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-white/5 hover:bg-red-500/20 hover:text-red-500 dark:hover:text-red-400 text-slate-600 dark:text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thecodespark_73/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-white/5 hover:bg-pink-500/20 hover:text-pink-600 dark:hover:text-pink-400 text-slate-600 dark:text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/TheCodeSpark"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white text-slate-600 dark:text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://share.google/TbgL8Krqa2xKXgCCB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-white/5 hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 text-slate-600 dark:text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Google Profile"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                  />
                </svg>
              </a>
              <button
                onClick={onRequestCall}
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-white/5 hover:bg-[#ff5722]/20 hover:text-[#ff5722] text-slate-600 dark:text-neutral-400 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Chat / Callback"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: About (col 5-6) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              ABOUT
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-neutral-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#ff5722] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={onRequestCall} className="hover:text-[#ff5722] transition-colors cursor-pointer">
                  Student Support
                </button>
              </li>
              <li>
                <span className="hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              </li>
              <li>
                <span className="hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors">Pricing and Refund</span>
              </li>
              <li>
                <span className="hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors">Terms and Condition</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (col 7-8) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-neutral-400">
              <li>
                <span className="hover:text-[#ff5722] cursor-pointer transition-colors">Resume Checker</span>
              </li>
              <li>
                <span className="hover:text-[#ff5722] cursor-pointer transition-colors">Hire From Us</span>
              </li>
              <li>
                <span className="hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors">Discord Community</span>
              </li>
              <li>
                <span className="hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors">Career & Jobs</span>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#ff5722] cursor-pointer transition-colors">
                  Featured Projects (240)
                </button>
              </li>
              <li>
                <span className="hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors">Student Feedback</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff5722] shrink-0" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Online & Admission:</strong>{' '}
                  <a href="tel:+917398839769" className="hover:text-[#ff5722] font-mono">+91 7398839769</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Campus & Support:</strong>{' '}
                  <a href="tel:+919548248925" className="hover:text-[#ff5722] font-mono">+91 9548248925</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                <span>
                  <a href="mailto:thecodespark3464@gmail.com" className="hover:text-slate-950 dark:hover:text-white font-mono">
                    thecodespark3464@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  23-B, Sector C Indrapuri / Gomti Nagar Campus, Lucknow (UP), 462023
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500 dark:text-neutral-400 font-mono">
          <p>© 2024 TheCodeSpark Technologies Private Limited. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>for Next-Gen Coders in India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
