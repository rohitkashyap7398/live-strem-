import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Cpu } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const TechnologiesMarquee: React.FC = () => {
  // Row 1 Technologies matching Video (MySQL, React, Node.js, Python, JavaScript, TypeScript, Java, MongoDB, Next.js, Redis, PostgreSQL)
  const row1Techs: TechItem[] = [
    {
      name: 'MySQL',
      category: 'Database',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M19.5 9c-.5-1.5-1.8-2.5-3.3-2.8-.5-.8-1.5-1.2-2.5-1.2-1.2 0-2.3.6-3 1.5-1-.2-2 .2-2.7.9-.8.8-1 2-.7 3-.8.5-1.3 1.4-1.3 2.4 0 1.5 1.2 2.7 2.7 2.7h10.8c1.7 0 3-1.3 3-3 0-1.5-1.1-2.8-2.5-3z"
            fill="#00758F"
          />
          <path
            d="M12 11c1-1.5 2.5-2.5 4.5-2.5 1.5 0 2.5.5 3 1.5-1 .5-2 1.5-2.5 2.5-1 .5-2.5 1-4 1-.5-1-.8-1.7-1-2.5z"
            fill="#F29111"
          />
        </svg>
      )
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: (
        <svg className="w-9 h-9" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
            fill="#539E43"
          />
          <path
            d="M12 4.5L18 8v8l-6 3.5L6 16V8l6-3.5z"
            fill="#333333"
            opacity="0.3"
          />
          <path
            d="M12 7l4 2.3v4.7l-4 2.3-4-2.3V9.3L12 7z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      name: 'Python',
      category: 'Language',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24">
          <path
            d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h2.9v.4H6.2S4 4.8 4 8c0 3.1 1.9 3 1.9 3h1.1v-1.6s-.1-1.9 1.9-1.9h3.2s1.8.1 1.8-1.8V4c0-2-2-2-2-2zm-1.6 1.1c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4h-2.9v-.4h5.7s2.2.3 2.2-2.9c0-3.1-1.9-3-1.9-3h-1.1v1.6s.1 1.9-1.9 1.9h-3.2s-1.8-.1-1.8 1.8V20c0 2 2 2 2 2zm1.6-1.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z"
            fill="#FFD438"
          />
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'Language',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7 17.5c0 1.2.9 2 2.3 2 1.4 0 2.2-.8 2.2-2v-6.5h-1.8v6.5c0 .4-.3.6-.6.6-.4 0-.6-.2-.6-.6v-2.5H7v2.5zm6.5 0c0 1.2 1 2 2.5 2 1.5 0 2.5-.7 2.5-1.9 0-1.1-.7-1.6-1.8-1.9l-.6-.2c-.6-.2-.9-.4-.9-.7 0-.3.3-.6.8-.6.5 0 .8.2 1 .5l1.2-.9c-.5-.7-1.2-1-2.2-1-1.3 0-2.3.7-2.3 1.8 0 1 .7 1.5 1.7 1.8l.6.2c.6.2 1 .4 1 .8 0 .4-.4.6-.9.6-.6 0-1-.3-1.2-.7l-1.3.9z"
            fill="#000000"
          />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: 'Language',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M5 10.5h6v1.5H8.7v7.5H6.8V12H5v-1.5zm8.5 7c0 1.2 1 2 2.5 2 1.5 0 2.5-.7 2.5-1.9 0-1.1-.7-1.6-1.8-1.9l-.6-.2c-.6-.2-.9-.4-.9-.7 0-.3.3-.6.8-.6.5 0 .8.2 1 .5l1.2-.9c-.5-.7-1.2-1-2.2-1-1.3 0-2.3.7-2.3 1.8 0 1 .7 1.5 1.7 1.8l.6.2c.6.2 1 .4 1 .8 0 .4-.4.6-.9.6-.6 0-1-.3-1.2-.7l-1.3.9z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      name: 'Java',
      category: 'Language',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18.5c2.5.5 5.5.5 8 0 0 0 .5.7-.5 1-2.5.5-6 .5-8.5 0 0-.4 1-1 1-1z"
            fill="#5382A1"
          />
          <path
            d="M8 16c3.2.7 7 .7 10.5 0 0 0 .5.8-.8 1.2-3.2.7-7.8.7-11 0 0-.5 1.3-1.2 1.3-1.2z"
            fill="#5382A1"
          />
          <path
            d="M13.5 10c1 1.2 1 2.3-.5 3.5-1.5 1.2-1.7 2 .5 3.5-3-1-3.5-2.5-2-4 1.5-1.5 2-2 2-3z"
            fill="#E76F00"
          />
          <path
            d="M11 6c1 1.5.5 3-1.5 4.5-1 1-.5 2 1 3-2.5-.7-3-2.5-1.5-4 1.5-1.5 2-2.5 2-3.5z"
            fill="#E76F00"
          />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      category: 'Database',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C11.5 2 8 6.5 8 12.5c0 4.5 2.5 7.5 3.8 8.8.2.2.3.7.2.7s-.2-.3-.4-.5C10 20 6.5 17 6.5 12.5 6.5 6 11.5 2 12 2z"
            fill="#47A248"
          />
          <path
            d="M12 2c.5 0 4 4.5 4 10.5 0 4.5-2.5 7.5-3.8 8.8-.2.2-.3.7-.2.7s.2-.3.4-.5c1.6-1.5 5.1-4.5 5.1-9C17.5 6 12.5 2 12 2z"
            fill="#499D4A"
          />
          <path
            d="M12 2v20c-.1 0-.1-.2-.1-.3 0-.6-.3-1.2-.6-1.7-1.3-1.5-3.8-4.5-3.8-7.5C7.5 7.5 11 3 12 2z"
            fill="#3FA037"
          />
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: 'Full-Stack',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#333333" strokeWidth="1" />
          <path
            d="M15.5 7.5L8.5 17h1.8l2.6-3.8 3.6 4.3h1.8L12.5 11l3-3.5h-1.8z"
            fill="#FFFFFF"
          />
          <path d="M7.5 7.5h1.8v9H7.5z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.5 2 3 6 3 11c0 3.5 1.8 6.5 4.5 8.2v-2.4C5.8 15.5 5 13.5 5 11c0-4 2.8-7 7-7s7 3 7 7c0 2.5-.8 4.5-2.5 5.8v2.4c2.7-1.7 4.5-4.7 4.5-8.2 0-5-3.5-9-9-9z"
            fill="#336791"
          />
          <circle cx="10" cy="9" r="1.2" fill="#336791" />
          <path
            d="M10 13c1 1.5 3 1.5 4 0"
            stroke="#336791"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    },
    {
      name: 'Redis',
      category: 'Cache',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 7l9-4 9 4-9 4-9-4z"
            fill="#D82C20"
          />
          <path
            d="M3 12l9 4 9-4v3l-9 4-9-4v-3z"
            fill="#A3241A"
          />
          <path
            d="M3 7l9 4v7l-9-4V7z"
            fill="#B9251C"
          />
          <path
            d="M21 7l-9 4v7l9-4V7z"
            fill="#A3241A"
          />
        </svg>
      )
    }
  ];

  // Row 2 Technologies matching Video (Git, Angular, Vue.js, Flutter, PHP, Laravel, Django, Docker, AWS, Tailwind)
  const row2Techs: TechItem[] = [
    {
      name: 'Git',
      category: 'DevOps',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.7 2.7c.6-.2 1.3 0 1.7.5.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3 0 1.8.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v4.4c.3.2.5.5.6.9.4 1-.1 2.1-1.1 2.5-1 .4-2.1-.1-2.5-1.1-.4-1 .1-2.1 1.1-2.5.4-.2.8-.2 1.2-.1v-4.5c-.4-.1-.8-.3-1.1-.6-.6-.6-.7-1.4-.4-2.1L7.5 4.9 2.4 10c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z"
            fill="#F05032"
          />
        </svg>
      )
    },
    {
      name: 'Angular',
      category: 'Frontend',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L3 5.3l1.4 11.9L12 22l7.6-4.8 1.4-11.9L12 2z"
            fill="#DD0031"
          />
          <path
            d="M12 2v20l7.6-4.8 1.4-11.9L12 2z"
            fill="#C3002F"
          />
          <path
            d="M12 5.5L7.2 16.3h2.1l1-2.5h3.4l1 2.5h2.1L12 5.5zm1.1 6.8h-2.2L12 8.8l1.1 3.5z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      name: 'Vue.js',
      category: 'Frontend',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24">
          <path
            d="M2 3h4.2L12 13.5 17.8 3H22L12 21 2 3z"
            fill="#42B883"
          />
          <path
            d="M6.2 3h3.8L12 6.5 14 3h3.8L12 13.5 6.2 3z"
            fill="#35495E"
          />
        </svg>
      )
    },
    {
      name: 'Flutter',
      category: 'Mobile',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path d="M13.5 2.5L4 12l2.8 2.8L19.2 2.5H13.5z" fill="#02569B" />
          <path d="M13.5 12.5L8.5 17.5 11.3 20.3 19.2 12.5H13.5z" fill="#0175C2" />
          <path d="M8.5 17.5L11.3 14.7 14.1 17.5 11.3 20.3 8.5 17.5z" fill="#02569B" />
          <path d="M14.1 17.5L16.9 20.3H19.2L16.4 17.5l-2.3 0z" fill="#29B6F6" />
        </svg>
      )
    },
    {
      name: 'PHP',
      category: 'Backend',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
          <path
            d="M6 14.5l1.2-5h2.2c1.2 0 1.8.5 1.5 1.8-.3 1.2-1.1 1.8-2.2 1.8H7.3l-.4 1.4H6zm1.7-2.3h1c.5 0 .8-.2.9-.8.1-.5 0-.8-.5-.8h-1l-.4 1.6zm4.8 2.3l1.2-5h1.2l-.5 2h1.5c1.2 0 1.8.5 1.5 1.8-.3 1.2-1.1 1.8-2.2 1.8h-1.4l-.4 1.4h-1.4zm2.1-2.3h1c.5 0 .8-.2.9-.8.1-.5 0-.8-.5-.8h-1l-.4 1.6z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      name: 'Laravel',
      category: 'Framework',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 4l7-2.5 7 2.5v5.5l-7 3.5L5 9.5V4z"
            fill="#FF2D20"
          />
          <path
            d="M5 11.5l7 3.5 7-3.5v5.5l-7 3.5L5 17v-5.5z"
            fill="#E02418"
          />
        </svg>
      )
    },
    {
      name: 'Django',
      category: 'Framework',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#092E20" />
          <path
            d="M11 6.5h2v6.8c0 1.8-.8 2.7-2.3 2.7-.6 0-1.1-.1-1.5-.4l.4-1.4c.3.2.6.3 1 .3.7 0 1-.4 1-1.2V6.5zm-5 4h2v5.5H6v-5.5zm0-2.5h2v1.5H6V8z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      name: 'Docker',
      category: 'DevOps',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="10" width="2.5" height="2" rx="0.3" fill="#2496ED" />
          <rect x="5" y="10" width="2.5" height="2" rx="0.3" fill="#2496ED" />
          <rect x="8" y="10" width="2.5" height="2" rx="0.3" fill="#2496ED" />
          <rect x="5" y="7.5" width="2.5" height="2" rx="0.3" fill="#2496ED" />
          <rect x="8" y="7.5" width="2.5" height="2" rx="0.3" fill="#2496ED" />
          <rect x="11" y="7.5" width="2.5" height="2" rx="0.3" fill="#2496ED" />
          <rect x="8" y="5" width="2.5" height="2" rx="0.3" fill="#2496ED" />
          <path
            d="M21.5 12c-.5-.3-1.5-.4-2-.2-.2-1-.8-1.8-1.5-2.3l-.6.5c.5.5.8 1.2.8 2 0 .5-.2 1-.5 1.5-.5.8-1.3 1.5-2.2 2H3c0 2.5 2 4.5 5 4.5 5.5 0 9.5-3 12-7 .5-.3 1-.7 1.5-1z"
            fill="#2496ED"
          />
        </svg>
      )
    },
    {
      name: 'AWS',
      category: 'Cloud',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 8l-3 4 3 4M17 8l3 4-3 4"
            stroke="#FF9900"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 17c5 3 11 3 16 0"
            stroke="#FF9900"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      )
    },
    {
      name: 'Tailwind',
      category: 'CSS',
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9c1.5-3 3.5-4 6-3 1.5.6 2.5 1.6 3.7 2.7 1.8 1.9 3.9 3.8 8.3 3.8 1.5 0 2.8-.5 4-1.5-1.5 3-3.5 4-6 3-1.5-.6-2.5-1.6-3.7-2.7C16.5 9.4 14.4 7.5 10 7.5c-1.5 0-2.8.5-4 1.5zM2 16.5c1.5-3 3.5-4 6-3 1.5.6 2.5 1.6 3.7 2.7 1.8 1.9 3.9 3.8 8.3 3.8 1.5 0 2.8-.5 4-1.5-1.5 3-3.5 4-6 3-1.5-.6-2.5-1.6-3.7-2.7-1.8-1.9-3.9-3.8-8.3-3.8-1.5 0-2.8.5-4 1.5z"
            fill="#38BDF8"
          />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#2A2A2A] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* Top Subtle Amber/Ember Glow Bloom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-[#E10600]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header Block matching Video (00:00 - 00:01) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* Centered Orange/Ember Top Badge Icon */}
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E10600] to-[#b30500] text-white shadow-lg shadow-[#E10600]/30 mb-1">
            <Cpu className="w-5 h-5" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tracking-tight leading-tight">
            Technologies &amp; Frameworks
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-xl mx-auto leading-relaxed">
            Master the most in-demand technologies and frameworks used by top companies worldwide
          </p>
        </div>

        {/* 2-ROW MARQUEE GRID WITH TECH STACK CARDS */}
        <div className="relative pt-4 space-y-4">
          
          {/* Left & Right Gradient Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#2A2A2A] via-[#2A2A2A]/90 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#2A2A2A] via-[#2A2A2A]/90 to-transparent z-20" />

          {/* Row 1 (Moving Left) */}
          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-3.5 py-1">
              {[...row1Techs, ...row1Techs, ...row1Techs].map((tech, idx) => (
                <div
                  key={`r1-${tech.name}-${idx}`}
                  className="w-28 sm:w-32 h-28 sm:h-30 rounded-2xl bg-[#1e1e1e] border border-white/10 hover:border-[#E10600]/50 hover:bg-[#252525] transition-all p-3 sm:p-3.5 flex flex-col items-center justify-center text-center gap-2.5 shrink-0 group shadow-md hover:shadow-xl hover:shadow-[#E10600]/10 cursor-default select-none"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow">
                    {tech.icon}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-white group-hover:text-[#E10600] transition-colors block leading-tight">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 block leading-none">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Moving Right / Reverse) */}
          <div className="overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-3.5 py-1">
              {[...row2Techs, ...row2Techs, ...row2Techs].map((tech, idx) => (
                <div
                  key={`r2-${tech.name}-${idx}`}
                  className="w-28 sm:w-32 h-28 sm:h-30 rounded-2xl bg-[#1e1e1e] border border-white/10 hover:border-[#E10600]/50 hover:bg-[#252525] transition-all p-3 sm:p-3.5 flex flex-col items-center justify-center text-center gap-2.5 shrink-0 group shadow-md hover:shadow-xl hover:shadow-[#E10600]/10 cursor-default select-none"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow">
                    {tech.icon}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-white group-hover:text-[#E10600] transition-colors block leading-tight">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 block leading-none">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
