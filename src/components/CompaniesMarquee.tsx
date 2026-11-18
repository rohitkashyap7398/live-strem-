import React, { useEffect, useRef, useState } from 'react';

interface PartnerItem {
  name: string;
  renderLogo: () => React.ReactNode;
}

const PARTNERS: PartnerItem[] = [
  {
    name: 'Amazon',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" aria-hidden="true">
          <rect width="32" height="32" rx="7" className="fill-slate-900 dark:fill-white/10" />
          <path
            d="M11 17.5c0-3.2 2.4-5.2 5.4-5.2 2.3 0 3.7 1 4.1 2.4v2.3c0 1.4.4 2 .9 2.6l-1.9 1.4c-.5-.5-.8-1-.9-1.6-.9.9-2 1.5-3.6 1.5-2.3 0-4-1.4-4-3.4zm7.4-.9v-.8c-.5-.8-1.3-1.2-2.2-1.2-1.4 0-2.4.9-2.4 2.4 0 1.2.8 2 2 2 1.3 0 2.6-.9 2.6-2.4z"
            fill="#FFFFFF"
          />
          <path
            d="M8 22.8c4.6 3 10.9 3.2 15.8.3"
            fill="none"
            stroke="#FF9900"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <path
            d="M22.2 21.8l2.5.4-.8 2.4"
            fill="none"
            stroke="#FF9900"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-slate-800 dark:text-neutral-100">
            amazon
          </span>
          <svg viewBox="0 0 56 10" className="w-12 h-2 -mt-0.5" aria-hidden="true">
            <path
              d="M4 2.5C18 8.5 36 8.5 49 2.8"
              fill="none"
              stroke="#FF9900"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M46 1.5l4.2 1-1.5 3.8"
              fill="none"
              stroke="#FF9900"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    name: 'Walmart',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <span className="font-display text-lg font-bold tracking-tight text-[#0071CE] dark:text-[#4DA8FF]">
          Walmart
        </span>
        <svg viewBox="0 0 28 28" className="w-6 h-6 shrink-0" aria-hidden="true">
          <line x1="14" y1="3" x2="14" y2="8.5" stroke="#FFC220" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="14" y1="19.5" x2="14" y2="25" stroke="#FFC220" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="4.5" y1="8.5" x2="9.3" y2="11.2" stroke="#FFC220" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="18.7" y1="16.8" x2="23.5" y2="19.5" stroke="#FFC220" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="23.5" y1="8.5" x2="18.7" y2="11.2" stroke="#FFC220" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="9.3" y1="16.8" x2="4.5" y2="19.5" stroke="#FFC220" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    name: 'TCS',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#0F4C81" />
          <path
            d="M7 11.5h18M16 11.5v11.5M10 17.5c1.5-2.5 4.2-3 6-3s4.5.5 6 3"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span className="font-display font-extrabold text-base tracking-widest text-slate-900 dark:text-white">
            tcs
          </span>
          <span className="text-[8px] uppercase tracking-wider text-slate-500 dark:text-neutral-400">
            Consultancy Services
          </span>
        </div>
      </div>
    ),
  },
  {
    name: 'Rapidops',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" aria-hidden="true">
          <circle cx="16" cy="16" r="12" fill="none" stroke="#EA2814" strokeWidth="2.6" />
          <path
            d="M12 21V11h5a3.2 3.2 0 0 1 0 6.4h-5m4.2 0L20.5 21"
            fill="none"
            stroke="#EA2814"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-display text-lg font-bold tracking-tight text-slate-800 dark:text-neutral-100">
          rapidops
        </span>
      </div>
    ),
  },
  {
    name: 'Nagarro',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" aria-hidden="true">
          <polygon points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5" fill="#13294B" />
          <path
            d="M11 21V11l10 10V11"
            fill="none"
            stroke="#47D7AC"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-display text-lg font-semibold tracking-wide text-slate-800 dark:text-neutral-100">
          nagarro
        </span>
      </div>
    ),
  },
  {
    name: 'Infosys',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#007CC3" />
          <path
            d="M16 7v18M10 12h12M10 20h12"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-display text-lg font-semibold tracking-wide text-[#007CC3] dark:text-[#4BB8FF]">
          Infosys
        </span>
      </div>
    ),
  },
  {
    name: 'Wipro',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0" aria-hidden="true">
          <circle cx="16" cy="5.5" r="2.2" fill="#0EA5E9" />
          <circle cx="23.5" cy="8.5" r="2.2" fill="#10B981" />
          <circle cx="26.5" cy="16" r="2.2" fill="#F59E0B" />
          <circle cx="23.5" cy="23.5" r="2.2" fill="#EF4444" />
          <circle cx="16" cy="26.5" r="2.2" fill="#8B5CF6" />
          <circle cx="8.5" cy="23.5" r="2.2" fill="#EC4899" />
          <circle cx="5.5" cy="16" r="2.2" fill="#06B6D4" />
          <circle cx="8.5" cy="8.5" r="2.2" fill="#3B82F6" />
          <circle cx="16" cy="16" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-slate-400 dark:text-neutral-400" />
        </svg>
        <span className="font-display text-lg font-semibold tracking-wide text-slate-800 dark:text-neutral-100">
          wipro
        </span>
      </div>
    ),
  },
  {
    name: 'Paytm',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#002970" />
          <rect x="6" y="10" width="20" height="12" rx="3" fill="#00BAF2" />
          <circle cx="21" cy="16" r="2" fill="#FFFFFF" />
        </svg>
        <span className="font-display text-lg font-extrabold tracking-tight">
          <span className="text-[#002970] dark:text-white">Pay</span>
          <span className="text-[#00BAF2]">tm</span>
        </span>
      </div>
    ),
  },
];

export const CompaniesMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting && !document.hidden),
      { threshold: 0.02 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#242424] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[2px] text-slate-600 dark:text-neutral-400">
          Our Alumni Are Hired At Top Global Tech Giants &amp; Fast-Growing Startups
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#242424] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#242424] to-transparent z-10 pointer-events-none" />

        <div
          className="animate-marquee flex items-center gap-14 py-2"
          style={{ animationPlayState: isInView ? 'running' : 'paused' }}
        >
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center shrink-0 whitespace-nowrap opacity-85 hover:opacity-100 transition-opacity select-none"
            >
              {partner.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
