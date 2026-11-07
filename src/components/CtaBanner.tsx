import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface CtaBannerProps {
  onExploreCourses: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onExploreCourses }) => {
  return (
    <section className="py-24 bg-[#2A2A2A] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background radial glow with continuous breathing animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E10600] blur-[140px] pointer-events-none rounded-full" 
      />

      {/* Floating student thumbnail cards with continuous smooth float */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-12 hidden lg:block opacity-40 hover:opacity-100 transition-opacity"
      >
        <div className="w-28 p-2 rounded-xl bg-[#1e1e1e] border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Student"
            className="w-full h-16 object-cover rounded-lg"
            referrerPolicy="no-referrer"
          />
          <div className="text-[9px] font-mono text-center text-white mt-1">Placed at TCS</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0], rotate: [8, 10, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-12 top-16 hidden lg:block opacity-40 hover:opacity-100 transition-opacity"
      >
        <div className="w-28 p-2 rounded-xl bg-[#1e1e1e] border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
            alt="Student"
            className="w-full h-16 object-cover rounded-lg"
            referrerPolicy="no-referrer"
          />
          <div className="text-[9px] font-mono text-center text-white mt-1">Placed at Walmart</div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="h-16 px-4 py-2 rounded-2xl bg-white/[0.04] border border-[#E10600]/30 flex items-center justify-center shadow-xl backdrop-blur-md">
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
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight"
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
          className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed"
        >
          From zero coding background to high-paying engineering offers. Join the 2026 cohort and get mentored by real practitioners.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExploreCourses}
            className="px-8 py-3.5 rounded-full bg-[#E10600] hover:bg-[#c70500] text-white text-sm font-bold shadow-xl shadow-[#E10600]/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
          <span>Admissions Helpline:</span>
          <a href="tel:+917398839769" className="text-white hover:text-[#E10600] font-bold">+91 7398839769</a>
          <span className="text-neutral-500">/</span>
          <a href="tel:+919548248925" className="text-white hover:text-[#E10600] font-bold">+91 9548248925</a>
        </div>
      </div>
    </section>
  );
};
