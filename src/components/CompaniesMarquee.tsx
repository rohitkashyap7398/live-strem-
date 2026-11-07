import React from 'react';

const PARTNERS = [
  { name: 'Amazon', symbol: 'amazon' },
  { name: 'Walmart', symbol: 'Walmart' },
  { name: 'TCS', symbol: 'tcs' },
  { name: 'Rapidops', symbol: 'rapidops' },
  { name: 'Nagarro', symbol: 'nagarro' },
  { name: 'Infosys', symbol: 'infosys' },
  { name: 'Wipro', symbol: 'wipro' },
  { name: 'Paytm', symbol: 'paytm' }
];

export const CompaniesMarquee: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-[#242424] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[2px] text-neutral-400">
          Our Alumni Are Hired At Top Global Tech Giants & Fast-Growing Startups
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#242424] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#242424] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 py-2">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors select-none"
            >
              {partner.name === 'Amazon' && (
                <div className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight">
                  <span className="text-xl">amazon</span>
                </div>
              )}
              {partner.name === 'Walmart' && (
                <div className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight">
                  <span className="text-xl">Walmart</span>
                  <span className="text-[#E10600] text-sm">✻</span>
                </div>
              )}
              {partner.name === 'TCS' && (
                <div className="flex flex-col text-left leading-none">
                  <span className="font-bold text-base tracking-widest">tcs</span>
                  <span className="text-[8px] uppercase tracking-wider text-neutral-400">Consultancy Services</span>
                </div>
              )}
              {partner.name === 'Rapidops' && (
                <div className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-current" />
                  <span>rapidops</span>
                </div>
              )}
              {partner.name === 'Nagarro' && (
                <div className="flex items-center gap-1 font-display text-lg font-semibold tracking-wide">
                  <span>nagarro</span>
                </div>
              )}
              {partner.name === 'Infosys' && (
                <div className="flex items-center gap-1 font-display text-lg font-semibold tracking-wide">
                  <span>Infosys</span>
                </div>
              )}
              {partner.name === 'Wipro' && (
                <div className="flex items-center gap-1 font-display text-lg font-semibold tracking-wide">
                  <span>wipro</span>
                </div>
              )}
              {partner.name === 'Paytm' && (
                <div className="flex items-center gap-1 font-display text-lg font-extrabold tracking-tight">
                  <span>Paytm</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
