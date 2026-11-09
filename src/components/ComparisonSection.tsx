import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Sparkles, Code2 } from 'lucide-react';
import brandLogo from '../assets/logo.png';

export const ComparisonSection: React.FC = () => {
  const points = [
    {
      codeSpark: 'Highly Affordable, No Quality Cuts',
      others: 'High Fees With Compromised Quality',
      highlight: 'Best value'
    },
    {
      codeSpark: 'Project-Based, Skill-First Learning',
      others: 'Theory-Centric Learning',
      highlight: 'Learn by building'
    },
    {
      codeSpark: 'Continuously Updated with Industry Trends & Gen-AI',
      others: 'Outdated, Static Curriculum',
      highlight: 'Latest 2024 stack'
    },
    {
      codeSpark: 'Internal Hackathons, Challenges & Face-Offs',
      others: 'No Competitive Learning Environment',
      highlight: 'Real peer competition'
    },
    {
      codeSpark: 'Industry-Relevant, Job-Oriented Curriculum',
      others: 'Limited Practical Exposure',
      highlight: 'Job-ready skills'
    },
    {
      codeSpark: 'Daily 1-on-1 Mentorship & Live Code Debugging',
      others: 'Ghosted After Course Fee Payment',
      highlight: 'Dedicated mentors'
    },
    {
      codeSpark: '100% Placement Assistance & 50+ Hiring Partners',
      others: 'Zero Placement Support & Fake Hiring Guarantees',
      highlight: 'Career acceleration'
    },
    {
      codeSpark: 'Lifetime Access to LMS, HD Recordings & Code Repos',
      others: 'Expiring Content Access & Paid Retakes',
      highlight: 'Forever access'
    }
  ];

  return (
    <section id="comparison-section" className="py-20 bg-[#2A2A2A] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E10600]/15 border border-[#E10600]/30 text-[#E10600] text-xs font-mono font-semibold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> COMPARISON
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            TheCodeSpark Advantage
          </h2>
          <p className="text-sm text-neutral-400">
            See the honest differences that make our students consistently outperform traditional college and training academies.
          </p>
        </motion.div>

        {/* Side-by-Side Comparison Container (Matching Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Left: TheCodeSpark Technologies Private Limited */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-5 sm:p-7 bg-[#0e1612] border-2 border-emerald-500/80 shadow-[0_0_50px_rgba(16,185,129,0.14)] space-y-6 relative flex flex-col justify-between"
          >
            {/* Header matching screenshot */}
            <div className="flex items-center gap-4 border-b border-emerald-500/20 pb-6">
              <div className="w-28 h-14 rounded-2xl bg-[#07110c] border border-emerald-500/40 p-2 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark"
                  className="h-9 w-auto object-contain filter drop-shadow"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-black text-white font-display leading-tight tracking-tight">
                  TheCodeSpark Technologies<br className="hidden sm:inline" /> Private Limited
                </h3>
                <span className="text-xs sm:text-sm font-mono text-emerald-400 font-extrabold uppercase tracking-widest mt-1 inline-block">
                  INDUSTRY STANDARD STANDARDIZED
                </span>
              </div>
            </div>

            {/* List items with double-ring green checkmark */}
            <div className="space-y-4 pt-1">
              {points.map((p, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + idx * 0.04 }}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-6 h-6 rounded-full border border-emerald-500/70 bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-500/30 text-emerald-400" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-neutral-100 font-display leading-snug group-hover:text-emerald-300 transition-colors">
                    {p.codeSpark}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Trust Badge */}
            <div className="pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-400/80 font-mono">
              <span>✓ Verified Production Curriculum</span>
              <span>100% Practical</span>
            </div>
          </motion.div>

          {/* Right: Others (Traditional Programs) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-5 sm:p-7 bg-[#171213] border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.06)] space-y-6 relative flex flex-col justify-between"
          >
            {/* Header matching screenshot */}
            <div className="flex items-center gap-4 border-b border-red-500/15 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 shadow-inner">
                <XCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-black text-white font-display leading-tight tracking-tight">
                  Others
                </h3>
                <span className="text-xs sm:text-sm font-mono text-red-400 font-extrabold uppercase tracking-widest mt-1 inline-block">
                  TRADITIONAL TRAINING PROGRAMS & ACADEMIES
                </span>
              </div>
            </div>

            {/* List items with red circular X */}
            <div className="space-y-4 pt-1">
              {points.map((p, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + idx * 0.04 }}
                  className="flex items-center gap-3.5 opacity-85 group"
                >
                  <div className="w-6 h-6 rounded-full border border-red-500/40 bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-110 transition-transform">
                    <XCircle className="w-4 h-4 fill-red-500/20 text-red-400" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-neutral-300 font-display leading-snug">
                    {p.others}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Caution Badge */}
            <div className="pt-4 border-t border-red-500/15 flex items-center justify-between text-xs text-red-400/70 font-mono">
              <span>✕ Outdated Learning Models</span>
              <span>Zero Guarantees</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
