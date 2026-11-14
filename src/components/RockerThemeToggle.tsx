import React from 'react';
import { motion } from 'motion/react';

interface RockerThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

/**
 * Physical 3D Seesaw / Rocker Theme Switch
 * Reproduces the vertical split rocker (`OFF` / `ON`) with extruded purple bevel,
 * neon rim glow in Dark Mode, matte silver finish in White/Light Mode,
 * and adjacent vertical `ER` / `SÜ` LED dot track.
 */
export const RockerThemeToggle: React.FC<RockerThemeToggleProps> = ({
  isDark,
  onToggle
}) => {
  const dots = [0, 1, 2, 3, 4, 5, 6];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to White Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Dark Mode (ON) — Click for White Mode' : 'White Mode (OFF) — Click for Dark Mode'}
      onClick={onToggle}
      className="group relative inline-flex items-center gap-1.5 px-1.5 py-1 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer select-none shrink-0"
    >
      {/* Ambient Halo Behind Switch */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-1 rounded-2xl blur-md transition-opacity duration-300 ${
          isDark
            ? 'opacity-70 bg-purple-600/35'
            : 'opacity-45 bg-purple-500/20'
        }`}
      />

      {/* 3D Perspective Housing */}
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: '260px' }}
      >
        {/* Recessed Outer Frame / Neon Socket */}
        <div
          className={`relative w-[34px] h-[48px] sm:w-[36px] sm:h-[52px] rounded-[11px] p-[2.5px] transition-all duration-300 ${
            isDark
              ? 'bg-[#09090d] shadow-[0_0_12px_rgba(168,85,247,0.75),0_0_2px_rgba(233,213,255,0.9),inset_0_0_6px_rgba(147,51,234,0.45)] ring-1 ring-purple-400/90'
              : 'bg-[#d4d4dc] shadow-[0_6px_12px_-3px_rgba(126,34,206,0.45),0_2px_4px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.85)] ring-1 ring-purple-500/50'
          }`}
        >
          {/* 3D Extruded Purple Lip Behind Tilted Edge */}
          <div
            aria-hidden="true"
            className="absolute inset-[2.5px] rounded-[9px] overflow-hidden pointer-events-none"
          >
            {/* Top Neon Under-Lip (Exposed when Dark Mode is ON & top tilts UP) */}
            <div
              className={`absolute inset-x-0 top-0 h-[10px] transition-opacity duration-300 ${
                isDark ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background:
                  'linear-gradient(180deg, #faf5ff 0%, #e9d5ff 28%, #a855f7 68%, #6b21a8 100%)',
                boxShadow: '0 2px 10px rgba(216,180,254,0.9)'
              }}
            />

            {/* Bottom Extruded Solid Purple Lip (Exposed when Light Mode is OFF & bottom tilts UP) */}
            <div
              className={`absolute inset-x-0 bottom-0 h-[11px] transition-opacity duration-300 ${
                isDark ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                background:
                  'linear-gradient(180deg, #6b21a8 0%, #9333ea 55%, #a855f7 100%)',
                boxShadow: '0 2px 8px rgba(147,51,234,0.6)'
              }}
            />
          </div>

          {/* Seesaw Pivoting Rocker Paddle */}
          <motion.div
            animate={{
              rotateX: isDark ? 15 : -15,
              y: isDark ? 1.5 : -1.5
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: 'spring',
              stiffness: 440,
              damping: 26,
              mass: 0.7
            }}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'center center'
            }}
            className={`relative w-full h-full rounded-[8.5px] flex flex-col items-center justify-between py-[5px] overflow-hidden transition-colors duration-300 ${
              isDark
                ? 'bg-gradient-to-b from-[#171720] via-[#13131b] to-[#1e1b29] border border-purple-400/70 shadow-[0_-3px_8px_rgba(192,132,252,0.55),inset_0_1px_1px_rgba(255,255,255,0.12)]'
                : 'bg-gradient-to-b from-[#e4e4e9] via-[#f3f3f6] to-[#d9d9e0] border border-white/80 shadow-[0_4px_7px_rgba(126,34,206,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)]'
            }`}
          >
            {/* Subtle top/bottom inner directional highlight */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute inset-x-0 top-0 h-1/2 transition-opacity duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-purple-300/15 to-transparent'
                  : 'bg-gradient-to-b from-black/[0.06] to-transparent'
              }`}
            />

            {/* Top Label: OFF (Bright/Active in White Light Mode) */}
            <span
              className={`relative z-10 text-[7px] sm:text-[7.5px] font-mono font-extrabold tracking-[0.08em] leading-none transition-all duration-300 ${
                isDark
                  ? 'text-neutral-500'
                  : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'
              }`}
            >
              OFF
            </span>

            {/* Center Horizontal Rocker Fold Crease */}
            <div className="relative z-10 w-full px-1 flex items-center">
              <div
                className={`w-full h-[1.5px] rounded-full transition-colors duration-300 ${
                  isDark
                    ? 'bg-black/80 shadow-[0_1px_0_rgba(168,85,247,0.22)]'
                    : 'bg-black/15 shadow-[0_1px_0_rgba(255,255,255,0.8)]'
                }`}
              />
            </div>

            {/* Bottom Label: ON (Bright White Glow in Dark Mode) */}
            <span
              className={`relative z-10 text-[7px] sm:text-[7.5px] font-mono font-extrabold tracking-[0.08em] leading-none transition-all duration-300 ${
                isDark
                  ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.9)]'
                  : 'text-neutral-500'
              }`}
            >
              ON
            </span>
          </motion.div>
        </div>
      </div>

      {/* Right-Side Vertical LED Dot Indicator Track (`ER` • • • • • • • `SÜ`) */}
      <div
        aria-hidden="true"
        className="flex flex-col items-center justify-between h-[44px] sm:h-[48px] py-0.5"
      >
        <span
          className={`text-[6px] sm:text-[6.5px] font-mono font-bold tracking-wider leading-none transition-colors duration-300 ${
            isDark
              ? 'text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.85)]'
              : 'text-neutral-500'
          }`}
        >
          ER
        </span>

        <div className="flex flex-col items-center justify-center gap-[2.5px] my-auto">
          {dots.map((idx) => {
            const isLitInLight = idx >= 5;
            return (
              <span
                key={idx}
                className={`w-[2.5px] h-[2.5px] rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-white shadow-[0_0_4px_rgba(255,255,255,0.95)]'
                    : isLitInLight
                    ? 'bg-purple-600 shadow-[0_0_3px_rgba(147,51,234,0.65)]'
                    : 'bg-neutral-400/45'
                }`}
              />
            );
          })}
        </div>

        <span
          className={`text-[6px] sm:text-[6.5px] font-mono font-bold tracking-wider leading-none transition-colors duration-300 ${
            isDark
              ? 'text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.85)]'
              : 'text-purple-700'
          }`}
        >
          SÜ
        </span>
      </div>
    </button>
  );
};
