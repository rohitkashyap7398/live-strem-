import React, { useEffect, useRef } from 'react';

interface CareerSphereCanvasProps {
  variant?: 'orange' | 'neutral';
  size?: number;
  className?: string;
}

interface SpherePoint {
  x: number;
  y: number;
  z: number;
}

function buildFibonacciSphere(count: number): SpherePoint[] {
  const pts: SpherePoint[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    pts.push({
      x: Math.cos(theta) * radiusAtY,
      y,
      z: Math.sin(theta) * radiusAtY
    });
  }
  return pts;
}

const SPHERE_POINTS = buildFibonacciSphere(280);

export const CareerSphereCanvas: React.FC<CareerSphereCanvasProps> = ({
  variant = 'orange',
  size = 280,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerOffsetRef = useRef({ vx: 0, vy: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rotY = 0.45;
    let rotX = 0.28;
    let rafId = 0;
    let isVisible = true;

    const drawFrame = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const radius = size * 0.41;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Subtle inner sphere glow
      const glow = ctx.createRadialGradient(
        cx - radius * 0.25,
        cy - radius * 0.25,
        radius * 0.1,
        cx,
        cy,
        radius * 1.02
      );
      if (variant === 'orange') {
        glow.addColorStop(0, '#FF8F5C');
        glow.addColorStop(0.55, '#FF5A1F');
        glow.addColorStop(1, '#B92E06');
      } else if (isDark) {
        glow.addColorStop(0, '#363644');
        glow.addColorStop(0.6, '#23232E');
        glow.addColorStop(1, '#14141B');
      } else {
        glow.addColorStop(0, '#FFFFFF');
        glow.addColorStop(0.6, '#EDEAE4');
        glow.addColorStop(1, '#D3CEC4');
      }

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.96, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Light direction from upper-left front
      const lx = -0.45;
      const ly = -0.55;
      const lz = 0.7;

      const projected: {
        px: number;
        py: number;
        pz: number;
        nx: number;
        ny: number;
        nz: number;
      }[] = [];

      for (let i = 0; i < SPHERE_POINTS.length; i++) {
        const p = SPHERE_POINTS[i];
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        if (z2 > -0.18) {
          projected.push({
            px: cx + x1 * radius,
            py: cy + y2 * radius,
            pz: z2,
            nx: x1,
            ny: y2,
            nz: z2
          });
        }
      }

      projected.sort((a, b) => a.pz - b.pz);

      for (let i = 0; i < projected.length; i++) {
        const pt = projected[i];
        const depth = Math.max(0, Math.min(1, (pt.pz + 0.18) / 1.18));
        const light = Math.max(0.08, Math.min(1, pt.nx * lx + pt.ny * ly + pt.nz * lz));

        const tileSize = Math.max(4, size * 0.044 * (0.62 + 0.42 * depth));
        const half = tileSize / 2;

        // Perspective foreshortening
        const scaleX = 0.55 + 0.45 * Math.abs(pt.nz);
        const w = tileSize * scaleX;
        const h = tileSize * (0.72 + 0.28 * Math.abs(pt.nz));

        ctx.save();
        ctx.translate(pt.px, pt.py);
        ctx.rotate(Math.atan2(pt.ny, pt.nx) * 0.15);

        const r = Math.min(3, tileSize * 0.22);
        ctx.beginPath();
        ctx.roundRect(-w / 2, -h / 2, w, h, r);

        if (variant === 'orange') {
          const red = Math.round(188 + light * 67);
          const green = Math.round(52 + light * 124);
          const blue = Math.round(14 + light * 76);
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.55 + 0.45 * depth})`;
          ctx.strokeStyle = `rgba(255, 224, 204, ${0.14 + light * 0.22})`;
        } else if (isDark) {
          const base = Math.round(36 + light * 62);
          ctx.fillStyle = `rgba(${base}, ${base + 2}, ${base + 8}, ${0.65 + 0.35 * depth})`;
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + light * 0.12})`;
        } else {
          const base = Math.round(212 + light * 43);
          ctx.fillStyle = `rgba(${base}, ${base - 3}, ${base - 7}, ${0.72 + 0.28 * depth})`;
          ctx.strokeStyle = `rgba(15, 23, 42, ${0.06 + (1 - light) * 0.08})`;
        }

        ctx.lineWidth = 0.75;
        ctx.fill();
        ctx.stroke();

        // Tiny top-edge highlight
        if (light > 0.55) {
          ctx.fillStyle =
            variant === 'orange'
              ? `rgba(255, 240, 230, ${(light - 0.55) * 0.45})`
              : isDark
              ? `rgba(255, 255, 255, ${(light - 0.55) * 0.2})`
              : `rgba(255, 255, 255, ${(light - 0.55) * 0.65})`;
          ctx.fillRect(-w / 2 + 1, -h / 2 + 1, Math.max(1, w - 2), 1.5);
        }

        ctx.restore();
        void half;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const tick = () => {
      if (isVisible && !prefersReducedMotion) {
        rotY += 0.0045 + pointerOffsetRef.current.vx * 0.025;
        rotX += pointerOffsetRef.current.vy * 0.015;
        rotX = Math.max(-0.55, Math.min(0.65, rotX));
        pointerOffsetRef.current.vx *= 0.92;
        pointerOffsetRef.current.vy *= 0.92;
        drawFrame();
      }
      rafId = window.requestAnimationFrame(tick);
    };

    drawFrame();
    if (!prefersReducedMotion) {
      rafId = window.requestAnimationFrame(tick);
    }

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [variant, size]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    pointerOffsetRef.current.vx = nx * 0.6;
    pointerOffsetRef.current.vy = ny * 0.25;
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerMove={handlePointerMove}
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`block max-w-full h-auto select-none ${className}`}
    />
  );
};
