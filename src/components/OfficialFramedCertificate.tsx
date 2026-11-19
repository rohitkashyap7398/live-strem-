import React from 'react';
import { motion } from 'motion/react';
import brandLogo from '../assets/logo.png';

interface OfficialFramedCertificateProps {
  courseTitle: string;
  cohortBadge: string;
  recipientName?: string;
  credentialId: string;
  description?: string;
}

const UPLOADED_LOGO =
  '/assets/aistudio/tcs_logo_cropped-removebg-preview_8334b4c5.png';

export const OfficialFramedCertificate: React.FC<OfficialFramedCertificateProps> = ({
  courseTitle,
  cohortBadge,
  recipientName = 'Aarav Sharma',
  credentialId,
  description
}) => {
  const bodyCopy =
    description ||
    `For successfully completing ${courseTitle} with mentor-evaluated production projects, technical rigor, and verified skill mastery at TheCodeSpark Technologies Private Limited.`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-md bg-[#111216] p-3 sm:p-4 shadow-[0_26px_60px_-14px_rgba(0,0,0,0.6)] border border-black/80 select-none"
    >
      {/* Mitered Frame Edge Highlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-white/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[10px] sm:inset-[14px] border border-black/90 shadow-[inset_0_2px_8px_rgba(0,0,0,0.85)]"
      />

      {/* Inner Certificate Canvas (#2D3044 matching reference) */}
      <div className="relative bg-[#2D3044] text-[#F4D5C6] overflow-hidden px-5 py-6 sm:px-8 sm:py-8 min-h-[340px] sm:min-h-[400px] flex flex-col justify-between">
        {/* Subtle Glass Diagonal Reflection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.065)_0%,rgba(255,255,255,0.015)_44%,transparent_44.5%)]"
        />

        {/* TOP-LEFT GEOMETRIC MOSAIC BLOCKS (SVG replica of reference pattern) */}
        <svg
          viewBox="0 0 280 120"
          className="absolute top-0 left-0 w-[52%] sm:w-[48%] h-auto pointer-events-none"
          aria-hidden="true"
        >
          {/* Top purple 2-unit bar */}
          <rect x="92" y="18" width="60" height="30" fill="#5D479A" />
          {/* Middle-right purple square */}
          <rect x="152" y="48" width="30" height="30" fill="#5D479A" />

          {/* Red square with dark circle + crosshair */}
          <rect x="62" y="48" width="30" height="30" fill="#C8141C" />
          <circle cx="77" cy="63" r="10.5" fill="#2D3044" />
          <path d="M77 57.5v11M71.5 63h11" stroke="#F4D5C6" strokeWidth="1.2" opacity="0.7" />

          {/* Bottom-left purple 2-unit bar with circle + crosshair */}
          <rect x="0" y="78" width="62" height="30" fill="#5D479A" />
          <circle cx="31" cy="93" r="10.5" fill="#2D3044" />
          <path d="M31 87.5v11M25.5 93h11" stroke="#F4D5C6" strokeWidth="1.2" opacity="0.7" />

          {/* Bottom-right red 2-unit bar with circle + crosshair */}
          <rect x="182" y="78" width="68" height="30" fill="#C8141C" />
          <circle cx="216" cy="93" r="10.5" fill="#2D3044" />
          <path d="M216 87.5v11M210.5 93h11" stroke="#F4D5C6" strokeWidth="1.2" opacity="0.7" />
        </svg>

        {/* BOTTOM-RIGHT GEOMETRIC MOSAIC BLOCKS (SVG replica of reference pattern) */}
        <svg
          viewBox="0 0 260 190"
          className="absolute right-0 top-[26%] w-[46%] sm:w-[42%] h-auto pointer-events-none"
          aria-hidden="true"
        >
          {/* Top-right purple square */}
          <rect x="230" y="0" width="30" height="30" fill="#5D479A" />
          {/* Upper-left purple square */}
          <rect x="26" y="30" width="30" height="30" fill="#5D479A" />
          {/* Upper-right red square with circle + crosshair */}
          <rect x="200" y="30" width="30" height="30" fill="#C8141C" />
          <circle cx="215" cy="45" r="10" fill="#2D3044" />
          <path d="M215 39.5v11M209.5 45h11" stroke="#F4D5C6" strokeWidth="1.2" opacity="0.7" />

          {/* Mid-left purple 2-unit bar with circle + crosshair */}
          <rect x="56" y="60" width="68" height="30" fill="#5D479A" />
          <circle cx="90" cy="75" r="10.5" fill="#2D3044" />
          <path d="M90 69.5v11M84.5 75h11" stroke="#F4D5C6" strokeWidth="1.2" opacity="0.7" />

          {/* Mid-right red 2-unit bar */}
          <rect x="150" y="60" width="50" height="30" fill="#C8141C" />
          {/* Center red square */}
          <rect x="124" y="90" width="28" height="28" fill="#C8141C" />
          {/* Lower-left red 2-unit bar */}
          <rect x="76" y="118" width="48" height="28" fill="#C8141C" />
          {/* Lower-right purple 2-unit bar with circle + crosshair */}
          <rect x="152" y="118" width="66" height="28" fill="#5D479A" />
          <circle cx="185" cy="132" r="10" fill="#2D3044" />
          <path d="M185 126.5v11M179.5 132h11" stroke="#F4D5C6" strokeWidth="1.2" opacity="0.7" />
          {/* Bottom-left purple square */}
          <rect x="48" y="146" width="28" height="28" fill="#5D479A" />
        </svg>

        {/* TOP ROW: Company Brand Lockup (Left/Top) + Certificate Title (Right) */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 pt-1">
          <div className="inline-flex items-center gap-2.5 bg-[#232536]/90 border border-white/10 rounded-lg px-2.5 py-1.5 backdrop-blur-xs self-start">
            <img
              src={UPLOADED_LOGO}
              onError={(e) => {
                e.currentTarget.src = brandLogo;
              }}
              alt="TheCodeSpark Technologies Private Limited Logo"
              className="h-7 w-auto object-contain shrink-0"
            />
            <div className="leading-tight">
              <div className="text-[11px] font-bold tracking-tight text-[#F4D5C6]">
                TheCodeSpark
              </div>
              <div className="text-[8.5px] font-mono text-[#C7C8D6] tracking-wide">
                Technologies Private Limited
              </div>
            </div>
          </div>

          <div className="sm:text-right sm:pr-4 pt-2 sm:pt-0">
            <h4 className="text-2xl sm:text-[32px] font-bold font-display leading-[1.04] tracking-tight text-[#F4D5C6]">
              Certificate of
              <span className="block">Completion</span>
            </h4>
            <div className="text-[10px] font-mono text-[#B7B9CC] mt-1 tracking-wider uppercase">
              {cohortBadge}
            </div>
          </div>
        </div>

        {/* MIDDLE RECIPIENT SECTION */}
        <div className="relative z-10 my-6 sm:my-7 max-w-[78%] sm:max-w-[60%] space-y-2">
          <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.14em] uppercase text-[#E4C9BD]">
            WITH PROUD, PRESENTED TO :
          </div>
          <div className="text-2xl sm:text-[30px] font-bold font-display text-[#F4D5C6] tracking-tight leading-tight">
            {recipientName}
          </div>
          <p className="text-[11px] sm:text-xs text-[#C6C7D6] leading-relaxed">
            {bodyCopy}
          </p>
        </div>

        {/* BOTTOM SIGNATURES & SCALLOPED ROSETTE SEAL */}
        <div className="relative z-10 flex items-end justify-between gap-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 flex-1 max-w-lg">
            {/* Signature 1: Founder & CEO Handwritten Signature */}
            <div>
              {/* Handwritten SVG Signature for Rohit Kashyap */}
              <svg
                viewBox="0 0 180 42"
                className="h-8 sm:h-9 w-auto mb-1 text-[#F4D5C6]"
                fill="none"
                aria-label="Signature of Rohit Kashyap"
              >
                <path
                  d="M12 31 C 14 14, 24 7, 29 12 C 34 17, 17 25, 16 24 C 22 24, 30 31, 35 28 C 40 25, 42 20, 45 24 C 47 27, 50 20, 53 24 C 55 27, 59 10, 62 12 C 63 18, 59 27, 63 26 C 67 25, 69 21, 72 24 C 75 27, 79 20, 82 25 M80 18 L81 18.5 M94 11 C 92 20, 90 28, 90 31 M106 11 C 99 18, 92 22, 92 22 C 97 23, 102 28, 108 25 C 113 22, 116 20, 119 24 C 122 27, 127 19, 130 24 C 133 28, 138 11, 141 13 C 142 20, 138 26, 143 25 C 147 24, 150 20, 153 24 C 156 28, 162 21, 166 24 C 169 27, 164 36, 158 37"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 34 Q 72 29 144 33"
                  stroke="currentColor"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
              <div className="border-t border-[#7674A8]/70 pt-1.5">
                <div className="text-xs font-bold text-[#F4D5C6]">Rohit Kashyap</div>
                <div className="text-[9.5px] text-[#B7B9CC] leading-tight">
                  Founder &amp; CEO · TheCodeSpark Technologies Pvt. Ltd.
                </div>
              </div>
            </div>

            {/* Signature 2: Credential Verification Authority */}
            <div className="flex flex-col justify-end">
              <div className="text-[10px] font-mono text-[#C6C7D6] mb-1.5 tracking-wide">
                Credential ID: <span className="text-[#F4D5C6] font-semibold">{credentialId}</span>
              </div>
              <div className="border-t border-[#7674A8]/70 pt-1.5">
                <div className="text-xs font-bold text-[#F4D5C6]">
                  TheCodeSpark Technologies
                </div>
                <div className="text-[9.5px] text-[#B7B9CC] leading-tight">
                  Private Limited · Official Academic Board
                </div>
              </div>
            </div>
          </div>

          {/* Scalloped Peach Rosette Seal with Red Star (exact reference badge) */}
          <div className="shrink-0">
            <svg
              viewBox="0 0 80 80"
              className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md"
              aria-label="Official Seal"
            >
              {/* 16-point scalloped outer seal */}
              <path
                d="M40 3 L45.5 9.2 L53.6 5.6 L56.4 13.7 L65.3 13.3 L64.9 21.9 L73.1 24.8 L69.5 32.8 L76.7 38 L70.5 44.5 L74.1 52.5 L66 55.4 L66.4 64.2 L57.8 63.8 L54.9 72 L46.9 68.4 L41.7 75.6 L35.2 69.4 L27.2 73 L24.3 64.9 L15.5 65.3 L15.9 56.7 L7.7 53.8 L11.3 45.8 L4.1 40.6 L10.3 34.1 L6.7 26.1 L14.8 23.2 L14.4 14.4 L23 14.8 L25.9 6.6 L33.9 10.2 Z"
                fill="#F4D5C6"
              />
              <circle cx="40" cy="40" r="23" fill="none" stroke="#D3AEA0" strokeWidth="1.2" />
              {/* Center Crimson Star */}
              <path
                d="M40 27 L43.4 35.1 L52.2 35.8 L45.4 41.6 L47.5 50.2 L40 45.6 L32.5 50.2 L34.6 41.6 L27.8 35.8 L36.6 35.1 Z"
                fill="#C8141C"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
