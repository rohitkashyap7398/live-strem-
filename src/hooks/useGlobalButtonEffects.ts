import { useEffect } from 'react';

/**
 * Global hook to automatically attach magnetic spring cursor attraction
 * and rolling text hover effect to ALL button elements across the application.
 */
export function useGlobalButtonEffects() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    let activeBtn: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest('button:not([data-magnetic="true"]):not([disabled])') as HTMLElement | null;

      if (button) {
        activeBtn = button;
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * 0.2;
        const deltaY = (e.clientY - centerY) * 0.2;

        button.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
        button.style.transition = 'transform 0.1s ease-out';
      } else if (activeBtn) {
        activeBtn.style.transform = 'translate3d(0px, 0px, 0px)';
        activeBtn.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        activeBtn = null;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'BUTTON') {
        target.style.transform = 'translate3d(0px, 0px, 0px)';
        target.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
}
