import { useEffect } from 'react';

/**
 * Global hook to automatically attach magnetic spring cursor attraction
 * and rolling text hover effect to ALL button elements across the application.
 */
export function useGlobalButtonEffects() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let activeBtn: HTMLElement | null = null;
    let cachedRect: DOMRect | null = null;
    let rafId: number | null = null;
    let latestEvent: { clientX: number; clientY: number; target: Element | null } | null = null;

    const resetButton = (btn: HTMLElement | null) => {
      if (!btn) return;
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      btn.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const invalidateRect = () => {
      cachedRect = null;
    };

    const applyEffect = () => {
      rafId = null;
      if (!latestEvent) return;

      const { clientX, clientY, target } = latestEvent;
      const button =
        target instanceof Element
          ? (target.closest('button:not([data-magnetic="true"]):not([disabled])') as HTMLElement | null)
          : null;

      if (button) {
        if (activeBtn !== button) {
          resetButton(activeBtn);
          activeBtn = button;
          cachedRect = button.getBoundingClientRect();
        } else if (!cachedRect) {
          cachedRect = button.getBoundingClientRect();
        }

        const centerX = cachedRect.left + cachedRect.width / 2;
        const centerY = cachedRect.top + cachedRect.height / 2;
        const deltaX = (clientX - centerX) * 0.2;
        const deltaY = (clientY - centerY) * 0.2;

        button.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0)`;
        button.style.transition = 'transform 0.1s ease-out';
      } else if (activeBtn) {
        resetButton(activeBtn);
        activeBtn = null;
        cachedRect = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestEvent = {
        clientX: e.clientX,
        clientY: e.clientY,
        target: e.target instanceof Element ? e.target : null,
      };
      if (rafId === null) {
        rafId = requestAnimationFrame(applyEffect);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.tagName === 'BUTTON') {
        resetButton(target);
        if (activeBtn === target) {
          activeBtn = null;
          cachedRect = null;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', invalidateRect, { passive: true });
    window.addEventListener('resize', invalidateRect, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', invalidateRect);
      window.removeEventListener('resize', invalidateRect);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
}
