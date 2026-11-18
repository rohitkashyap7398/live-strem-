import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import brandLogo from '../assets/logo.png';

export const StartupLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let minElapsed = false;
    let pageLoaded = document.readyState === 'complete';

    const tryDismiss = () => {
      if (minElapsed && pageLoaded) {
        setIsVisible(false);
      }
    };

    const minTimer = window.setTimeout(() => {
      minElapsed = true;
      tryDismiss();
    }, 1150);

    // Hard cap so slow third-party resources never hold the loader
    const maxTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    const handleLoad = () => {
      pageLoaded = true;
      tryDismiss();
    };

    if (!pageLoaded) {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="startup-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
          aria-label="Loading TheCodeSpark Coding School"
          role="status"
          className="fixed inset-0 z-[9999] bg-[#060608] flex flex-col items-center justify-center select-none pointer-events-auto"
        >
          {/* Subtle warm ember center glow matching the reference loader */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(225, 38, 12, 0.14) 0%, rgba(225, 38, 12, 0.04) 26%, transparent 55%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center gap-5 px-6"
          >
            {/* Brand Logo + Vertical Divider + Two-Line Brand Title */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <img
                src={brandLogo}
                onError={(e) => {
                  e.currentTarget.src = '/logo.png';
                }}
                alt="TheCodeSpark Logo"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_16px_rgba(225,6,0,0.35)]"
              />

              <span className="w-px h-9 sm:h-11 bg-white/25 shrink-0" aria-hidden="true" />

              <div className="text-left leading-tight">
                <span className="block text-sm sm:text-base font-semibold tracking-tight text-white/95 font-display">
                  TheCodeSpark
                </span>
                <span className="block text-sm sm:text-base font-medium tracking-tight text-white/75 font-display">
                  Coding School
                </span>
              </div>
            </div>

            {/* Three Sequentially Pulsing Coral-Red Loading Dots */}
            <div className="flex items-center gap-2" aria-hidden="true">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="w-2 h-2 rounded-full bg-[#EA431B] shadow-[0_0_8px_rgba(234,67,27,0.75)]"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: dot * 0.16,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartupLoader;
