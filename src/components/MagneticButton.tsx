import React, { useRef, useState, useCallback, ReactNode } from 'react';

export interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost' | 'glass';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  magneticStrength?: number;
  rollText?: boolean;
  glow?: boolean;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  text,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  magneticStrength = 0.25,
  rollText = true,
  glow = true,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic hover tracking
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * magneticStrength;
      const deltaY = (e.clientY - centerY) * magneticStrength;

      setOffset({ x: deltaX, y: deltaY });
    },
    [disabled, magneticStrength]
  );

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  // Base styling variants
  const variantStyles = {
    primary:
      'bg-[#E10600] text-white hover:bg-[#c70500] border border-[#ff3b30]/30 shadow-lg shadow-[#E10600]/30',
    secondary:
      'bg-[#1f1f23] text-neutral-200 hover:text-white hover:bg-[#28282e] border border-white/10 shadow-md',
    outline:
      'bg-transparent text-white border border-[#E10600]/60 hover:border-[#E10600] hover:bg-[#E10600]/10 shadow-sm',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20ba59] border border-[#25D366]/40 shadow-lg shadow-[#25D366]/25',
    glass:
      'bg-white/[0.06] text-neutral-200 hover:text-white hover:bg-white/[0.12] border border-white/15 backdrop-blur-md',
    ghost:
      'bg-transparent text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-transparent',
  }[variant];

  // Size styling variants
  const sizeStyles = {
    xs: 'px-3 py-1.5 text-[11px] rounded-full gap-1.5',
    sm: 'px-4 py-2 text-xs rounded-full gap-2',
    md: 'px-6 py-2.5 text-xs sm:text-sm rounded-full gap-2.5 font-semibold',
    lg: 'px-8 py-3.5 text-sm sm:text-base rounded-full gap-3 font-bold',
  }[size];

  // Extract label text
  const labelText = text || (typeof children === 'string' ? children : null);

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      data-magnetic="true"
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.1s ease-out'
          : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`group relative inline-flex items-center justify-center select-none cursor-pointer tracking-wide overflow-hidden active:scale-95 will-change-transform ${variantStyles} ${sizeStyles} ${
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
      } ${className}`}
      {...props}
    >
      {/* Ambient Ember Glow on hover */}
      {glow && variant === 'primary' && (
        <span
          className={`absolute -inset-1 rounded-full bg-gradient-to-r from-[#E10600] via-[#ff5722] to-[#E10600] opacity-0 blur-md transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-60' : ''
          }`}
        />
      )}

      {/* Shimmer sweep effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />

      {/* Left Icon */}
      {icon && iconPosition === 'left' && (
        <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}

      {/* Rolling Text Container (As seen in Amaterasu video reference) */}
      {rollText && labelText ? (
        <span className="relative z-10 inline-flex flex-col h-[1.3em] overflow-hidden leading-[1.3em]">
          {/* Top text layer: slides up and out on hover */}
          <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
            {labelText}
          </span>
          {/* Bottom text layer: slides up into view on hover */}
          <span
            className="absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full select-none"
            aria-hidden="true"
          >
            {labelText}
          </span>
        </span>
      ) : (
        <span className="relative z-10 inline-flex items-center">
          {children || labelText}
        </span>
      )}

      {/* Right Icon */}
      {icon && iconPosition === 'right' && (
        <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};
