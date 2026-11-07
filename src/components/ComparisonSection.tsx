import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Sparkles, Code2 } from 'lucide-react';
import brandLogo from '../assets/logo.png';

export const ComparisonSection: React.FC = () => {
  const points = [
    {
      codeSpark: 'Highly Affordable, No Quality Cuts',
      others: 'High Fees With Compromised Quality'
    },
    {
      codeSpark: 'Project-Based, Skill-First Learning',
      others: 'Theory-Centric Learning'
    },
    {
      codeSpark: 'Continuously Updated with Industry Trends & Gen-AI',
      others: 'Outdated, Static Curriculum'
    },
    {
      codeSpark: 'Internal Hackathons, Challenges & Face-Offs',
      others: 'No Competitive Learning Environment'
    },
    {
      codeSpark: 'Industry-Relevant, Job-Oriented Curriculum',
      others: 'Limited Practical Exposure'
    },
    {
      codeSpark: 'Daily 1-on-1 Mentorship & Live Code Debugging',
      others: 'Ghosted After Course Fee Payment'
    }
  ];

  return (
    <section id="comparison-section" className="py-20 bg-[#2A2A2A] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E10600]/15 border border-[#E10600]/30 text-[#E10600] text-xs font-mono font-semibold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> COMPARISON
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            What Sets TheCodeSpark Technologies Private Limited Apart
          </h2>
          <p className="text-sm text-neutral-400">
            See the honest differences that make our students consistently outperform standard college and other training peers.
          </p>
        </motion.div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: TheCodeSpark Technologies Private Limited */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="rounded-3xl p-6 sm:p-8 bg-[#0e1610] border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/10 space-y-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 px-2.5 py-1 rounded-xl bg-white/[0.04] border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark Technologies Private Limited"
                  className="h-8 w-auto object-contain filter drop-shadow"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display leading-tight">
                  TheCodeSpark Technologies Private Limited
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase">
                  Industry Standard Standardized
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {points.map((p, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.06 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-500/20" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-emerald-100 leading-snug">
                    {p.codeSpark}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Other Institutes / Coders */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="rounded-3xl p-6 sm:p-8 bg-[#1e1e1e] border border-red-500/20 space-y-6 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Others
                </h3>
                <span className="text-[11px] font-mono text-red-400 font-semibold uppercase">
                  Traditional Training Programs & Academies
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {points.map((p, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.06 }}
                  className="flex items-start gap-3 opacity-75 group"
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <XCircle className="w-4 h-4 fill-red-500/10" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-red-200/80 leading-snug">
                    {p.others}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
