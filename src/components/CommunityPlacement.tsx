import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Play, Award, ArrowRight } from 'lucide-react';
import brandLogo from '../assets/logo.png';

interface CommunityPlacementProps {
  onExploreCourses: () => void;
}

export const CommunityPlacement: React.FC<CommunityPlacementProps> = ({
  onExploreCourses
}) => {
  return (
    <section id="community-section" className="py-16 md:py-24 bg-[#C0C0C0] text-[#121217] relative overflow-hidden transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E10600]/15 border border-[#E10600]/30 text-[#E10600] text-xs font-mono font-bold uppercase tracking-wider">
            <img
              src={brandLogo}
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="Logo"
              className="h-5 w-auto object-contain filter drop-shadow shrink-0"
            />
            <span>TheCodeSpark Technologies Private Limited</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111116] font-display tracking-tight leading-tight">
            They Came. They Cooked. They Got Placed.
          </h2>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onExploreCourses}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#E10600] hover:bg-[#c70500] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#E10600]/25 transition-all cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bento Placement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Card 1: Video interview (col 1-4) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="md:col-span-4 rounded-3xl overflow-hidden border border-black/10 relative group h-full min-h-[350px] flex flex-col justify-between shadow-xl bg-neutral-900"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
              alt="Placement Story"
              className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white bg-black/60 px-2.5 py-1 rounded-md border border-white/20 font-bold">
                PLACEMENT STORY
              </span>
            </div>

            <div className="relative z-10 p-5 space-y-2">
              <motion.div 
                whileHover={{ scale: 1.15 }}
                className="w-12 h-12 rounded-full bg-[#E10600] text-white flex items-center justify-center shadow-lg shadow-[#E10600]/40"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Another Placement from TheCodeSpark Technologies Private Limited Cohort
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                How Sachin transitioned from Non-Tech to a 9.2 LPA Software Engineer role.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Batch Celebration & 01 Million stat (col 5-8) */}
          <div className="md:col-span-4 flex flex-col justify-between gap-5 h-full">
            {/* Hackathon Winners photo card with top-right arrow */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-3xl overflow-hidden border border-black/10 relative group h-[175px] shadow-xl bg-neutral-900"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
                alt="Students Celebrating"
                className="absolute inset-0 w-full h-full object-cover brightness-85 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="absolute bottom-4 left-5">
                <span className="text-sm font-bold text-white font-display">
                  Hackathon Winners 2025
                </span>
                <span className="text-[11px] text-white/80 block font-mono">
                  1st Prize • National CodeFest
                </span>
              </div>
            </motion.div>

            {/* Terracotta Stat Card: 01 Million */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl p-6 bg-gradient-to-br from-[#E10600] to-[#b30500] text-white border border-[#ff4d47]/30 shadow-xl flex items-center justify-between flex-1"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black font-display tracking-tight block">
                  01 Million
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold">
                  Students Taught & Mentored
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-black/20 flex items-center justify-center text-white shrink-0">
                <Award className="w-6 h-6" />
              </div>
            </motion.div>
          </div>

          {/* Card 3: Student Spotlight & Placement Champions (col 9-12) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="md:col-span-4 rounded-3xl p-6 sm:p-7 border border-black/10 bg-[#161622] text-white flex flex-col justify-between shadow-xl group hover:border-[#E10600]/40 transition-all h-full min-h-[350px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E10600] font-bold">
                CAMPUS SPOTLIGHT
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display leading-tight">
                Dedicated Lucknow Campus & Real Labs
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Step into a high-octane engineering lab where peers collaborate, debug together, and simulate real corporate sprint cycles with senior mentors.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-neutral-300">Indrapuri Campus Open</span>
              </div>
              <span className="text-xs font-semibold text-[#E10600]">Visit Labs →</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
