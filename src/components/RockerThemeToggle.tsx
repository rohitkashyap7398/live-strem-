import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RockerThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

/**
 * Animated Pill Day / Night Theme Switch (Reference Video Exact Match)
 * - Night Mode (ON): Obsidian dark pill track (#070709) with circular silver-white knob (#ECECEF)
 *   on the RIGHT featuring three dark 4-pointed stars.
 * - Day Mode (OFF): Crisp white pill track (#FFFFFF) with circular warm-orange knob (#F68B42)
 *   on the LEFT featuring a white sun with 8 radial capsule rays.
 */
export const RockerThemeToggle: React.FC<RockerThemeToggleProps> = ({
  isDark,
  onToggle
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      title={isDark ? 'Night Mode — Click for Day Mode' : 'Day Mode — Click for Night Mode'}
      onClick={onToggle}
      className={`group relative inline-flex items-center w-[48px] h-[26px] sm:w-[56px] sm:h-[30px] p-[3px] rounded-full cursor-pointer select-none shrink-0 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4FF00] ${
        isDark
          ? 'justify-end bg-[#070709] border border-white/15 shadow-[inset_0_1px_3px_rgba(0,0,0,0.9),0_2px_10px_rgba(0,0,0,0.4)]'
          : 'justify-start bg-[#FFFFFF] border border-black/15 shadow-[inset_0_1px_2px_rgba(15,23,42,0.06),0_3px_10px_rgba(15,23,42,0.12)]'
      }`}
    >
      {/* Sliding Circular Knob */}
      <motion.span
        layout
        initial={false}
        animate={{
          backgroundColor: isDark ? '#ECECEF' : '#F68B42'
        }}
        whileTap={{ scale: 0.92 }}
        transition={{
          layout: { type: 'spring', stiffness: 460, damping: 30, mass: 0.8 },
          backgroundColor: { duration: 0.25 }
        }}
        className="relative flex items-center justify-center w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full shadow-sm"
        style={{
          willChange: 'transform, background-color'
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            /* Night State: Three 4-Pointed Stars inside White/Silver Circle */
            <motion.svg
              key="night-stars"
              viewBox="0 0 32 32"
              className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-[#070709]"
              fill="currentColor"
              initial={{ opacity: 0, scale: 0.45, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.45, rotate: 45 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              {/* Primary Left-Center 4-Pointed Star */}
              <path d="M12.2 7.5C12.7 11.7 14.3 13.3 18.5 13.8C14.3 14.3 12.7 15.9 12.2 20.1C11.7 15.9 10.1 14.3 5.9 13.8C10.1 13.3 11.7 11.7 12.2 7.5Z" />
              {/* Top-Right Medium 4-Pointed Star */}
              <path d="M21.8 6.8C22.1 9.1 23.1 10.1 25.4 10.4C23.1 10.7 22.1 11.7 21.8 14C21.5 11.7 20.5 10.7 18.2 10.4C20.5 10.1 21.5 9.1 21.8 6.8Z" />
              {/* Bottom-Right Accent 4-Pointed Star */}
              <path d="M20.2 17.6C20.45 19.4 21.25 20.2 23.05 20.45C21.25 20.7 20.45 21.5 20.2 23.3C19.95 21.5 19.15 20.7 17.35 20.45C19.15 20.2 19.95 19.4 20.2 17.6Z" />
            </motion.svg>
          ) : (
            /* Day State: Crisp White Sun with 8 Capsule Rays inside Orange Circle */
            <motion.svg
              key="day-sun"
              viewBox="0 0 32 32"
              className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] text-white"
              fill="currentColor"
              initial={{ opacity: 0, scale: 0.45, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.45, rotate: -45 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              {/* Solid Sun Core */}
              <circle cx="16" cy="16" r="5.2" />
              {/* 8 Crisp Capsule Sun Rays */}
              <rect x="14.9" y="5.2" width="2.2" height="3.6" rx="1.1" />
              <rect x="14.9" y="23.2" width="2.2" height="3.6" rx="1.1" />
              <rect x="5.2" y="14.9" width="3.6" height="2.2" rx="1.1" />
              <rect x="23.2" y="14.9" width="3.6" height="2.2" rx="1.1" />
              <rect
                x="14.9"
                y="5.2"
                width="2.2"
                height="3.6"
                rx="1.1"
                transform="rotate(45 16 16)"
              />
              <rect
                x="14.9"
                y="5.2"
                width="2.2"
                height="3.6"
                rx="1.1"
                transform="rotate(135 16 16)"
              />
              <rect
                x="14.9"
                y="5.2"
                width="2.2"
                height="3.6"
                rx="1.1"
                transform="rotate(225 16 16)"
              />
              <rect
                x="14.9"
                y="5.2"
                width="2.2"
                height="3.6"
                rx="1.1"
                transform="rotate(315 16 16)"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
};
