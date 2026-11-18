import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { MagneticButton } from './MagneticButton';

interface CtaBannerProps {
  onExploreCourses: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onExploreCourses }) => {
  return (
    <section className="py-24 bg-white dark:bg-[#2A2A2A] relative overflow-hidden border-t border-slate-200 dark:border-white/[0.08] transition-colors">
      {/* GPU-free ambient glow (zero blur pass repaints) */}
      <div
        className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[340px] pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(225, 6, 0, 0.14), transparent)' }}
      />

      {/* Floating student thumbnail cards with continuous smooth float */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-12 hidden lg:block opacity-60 dark:opacity-40 hover:opacity-100 transition-opacity"
      >
        <div className="w-28 p-2 rounded-xl bg-white dark:bg-[#1e1e1e] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Student"
            loading="lazy"
            decoding="async"
            className="w-full h-16 object-cover rounded-lg"
            referrerPolicy="no-referrer"
          />
          <div className="text-[9px] font-mono text-center text-slate-900 dark:text-white mt-1">Placed at TCS</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0], rotate: [8, 10, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-12 top-16 hidden lg:block opacity-60 dark:opacity-40 hover:opacity-100 transition-opacity"
      >
        <div className="w-28 p-2 rounded-xl bg-white dark:bg-[#1e1e1e] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
            alt="Student"
            loading="lazy"
            decoding="async"
            className="w-full h-16 object-cover rounded-lg"
            referrerPolicy="no-referrer"
          />
          <div className="text-[9px] font-mono text-center text-slate-900 dark:text-white mt-1">Placed at Walmart</div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="h-16 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-[#E10600]/30 flex items-center justify-center shadow-lg dark:shadow-xl backdrop-blur-md">
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="TheCodeSpark Technologies Private Limited Logo"
              className="h-11 w-auto object-contain filter drop-shadow"
            />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight"
        >
          Transform Your Learning Journey Into A Career Breakthrough With{' '}
          <span className="text-[#E10600] underline decoration-[#E10600]/40 underline-offset-8">
            TheCodeSpark Technologies Private Limited
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed"
        >
          From zero coding background to high-paying engineering offers. Join the 2024 cohort and get mentored by real practitioners.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={onExploreCourses}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            text="Explore Courses"
            className="shadow-xl shadow-[#E10600]/25"
          />
        </motion.div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-neutral-400 font-mono">
          <span>Admissions Helpline:</span>
          <a href="tel:+917398839769" className="text-slate-900 dark:text-white hover:text-[#E10600] font-bold">+91 7398839769</a>
          <span className="text-slate-400 dark:text-neutral-500">/</span>
          <a href="tel:+919548248925" className="text-slate-900 dark:text-white hover:text-[#E10600] font-bold">+91 9548248925</a>
        </div>
      </div>
    </section>
  );
};
