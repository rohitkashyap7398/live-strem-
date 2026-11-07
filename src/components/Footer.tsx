import React from 'react';
import { Youtube, Linkedin, Twitter, Github, Heart, MessageSquare, Code2, MapPin, Phone, Mail } from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface FooterProps {
  onNavigate: (page: 'home' | 'course-detail') => void;
  onRequestCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestCall }) => {
  return (
    <footer className="relative bg-[#222222] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Huge Outline Watermark in Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 overflow-hidden select-none pointer-events-none">
        <div className="text-[12vw] font-black font-display tracking-tight text-stroke-subtle opacity-30 leading-none">
          TheCodeSpark
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand info (col 1-4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 px-2.5 py-1 rounded-xl bg-white/[0.04] border border-[#E10600]/30 flex items-center justify-center shrink-0 shadow-lg shadow-[#E10600]/10">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark Technologies Private Limited"
                  className="h-10 w-auto object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black text-white font-display block leading-tight">
                  TheCodeSpark Technologies
                </span>
                <span className="text-xs font-bold font-mono tracking-wider text-[#E10600] uppercase block leading-none mt-1">
                  Private Limited
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              TheCodeSpark Technologies Private Limited is an industry-first coding school and software career accelerator in India. Transforming college students and career switchers into high-impact software developers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={onRequestCall}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#ff5722]/20 hover:text-[#ff5722] text-neutral-400 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Chat / Callback"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: About (col 5-6) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              ABOUT
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
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
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Pricing and Refund</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Terms and Condition</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (col 7-8) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <span className="hover:text-[#ff5722] cursor-pointer transition-colors">Resume Checker</span>
              </li>
              <li>
                <span className="hover:text-[#ff5722] cursor-pointer transition-colors">Hire From Us</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Discord Community</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Career & Jobs</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Submit Projects</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Student Feedback</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff5722] shrink-0" />
                <span>
                  <strong className="text-white">Online & Admission:</strong>{' '}
                  <a href="tel:+917398839769" className="hover:text-[#ff5722] font-mono">+91 7398839769</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>
                  <strong className="text-white">Campus & Support:</strong>{' '}
                  <a href="tel:+919548248925" className="hover:text-[#ff5722] font-mono">+91 9548248925</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>
                  <a href="mailto:thecodespark3464@gmail.com" className="hover:text-white font-mono">
                    thecodespark3464@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  23-B, Sector C Indrapuri / Gomti Nagar Campus, Lucknow (UP), 462023
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-neutral-400 font-mono">
          <p>© 2026 TheCodeSpark Technologies Private Limited. All Rights Reserved.</p>
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
