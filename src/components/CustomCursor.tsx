import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Refs for tracking positions with lerp physics
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const isHoveredRef = useRef(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;

      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        ringPos.current.x = mousePos.current.x;
        ringPos.current.y = mousePos.current.y;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
        }
        // Sleep loop until next mouse move
        animFrameId.current = null;
        return;
      }

      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.22);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.22);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x.toFixed(1)}px, ${ringPos.current.y.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    const scheduleRender = () => {
      if (animFrameId.current === null) {
        animFrameId.current = requestAnimationFrame(render);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      scheduleRender();

      // Only trigger React state update when hover state flips
      const target = e.target;
      if (target instanceof Element) {
        const nextHovered = Boolean(
          target.closest(
            'button, a, input[type="button"], input[type="submit"], [role="button"], .cursor-pointer, [data-cursor-hover], .btn-magnetic'
          )
        );
        if (nextHovered !== isHoveredRef.current) {
          isHoveredRef.current = nextHovered;
          setIsHovered(nextHovered);
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-2), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 650);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
      if (isHoveredRef.current) {
        isHoveredRef.current = false;
        setIsHovered(false);
      }
      if (animFrameId.current !== null) {
        cancelAnimationFrame(animFrameId.current);
        animFrameId.current = null;
      }
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current !== null) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-opacity duration-200 pointer-events-none will-change-transform ${
          isHovered
            ? 'w-1.5 h-1.5 bg-[#E10600] opacity-90 shadow-[0_0_8px_#E10600]'
            : 'w-2 h-2 bg-white/90 opacity-90 shadow-[0_0_6px_rgba(255,255,255,0.7)]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* Trailing Fluid Magnetic Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none will-change-transform transition-[width,height,border-color,background-color,box-shadow,opacity] duration-300 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 border-[1.5px] border-[#E10600] bg-[#E10600]/10 shadow-[0_0_24px_rgba(225,6,0,0.35)]'
            : isClicked
            ? 'w-7 h-7 border-[1.5px] border-white/70 bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.4)]'
            : 'w-9 h-9 border-[1.5px] border-white/40 bg-white/[0.02] shadow-[0_0_10px_rgba(255,255,255,0.15)]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      >
        {/* Subtle inner pulse spark on hover */}
        {isHovered && (
          <div className="w-2.5 h-2.5 rounded-full bg-[#E10600]/30 animate-ping" />
        )}
      </div>

      {/* Click Expanding Pulse Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed top-0 left-0 pointer-events-none rounded-full border border-[#E10600]/60 animate-cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};
