"use client";

import { useMemo } from "react";

const AURORA = [
  [43, 59, 255],
  [168, 85, 247],
  [34, 197, 94],
];

// Colour for position t (0–1) along the blue → violet → green aurora.
export const auroraAt = (t) => {
  const seg = Math.min(AURORA.length - 2, Math.floor(t * (AURORA.length - 1)));
  const local = t * (AURORA.length - 1) - seg;
  const [a, b] = [AURORA[seg], AURORA[seg + 1]];
  return `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * local)).join(",")})`;
};

/* Soft blue → violet → green aurora, used behind the landing page's showpiece panels. */
export const AuroraBackdrop = ({ className = "" }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#e7e6ef] ${className}`}>
    <div className="aurora-blob absolute -left-[10%] -top-[20%] h-[75%] w-[60%] rounded-full bg-[#2b3bff] opacity-90 blur-[90px]" />
    <div className="aurora-blob aurora-blob--slow absolute left-[25%] top-[5%] h-[60%] w-[45%] rounded-full bg-[#3b82f6] opacity-80 blur-[100px]" />
    <div className="aurora-blob aurora-blob--rev absolute right-[5%] top-[25%] h-[55%] w-[40%] rounded-full bg-[#4ade80] opacity-80 blur-[100px]" />
    <div className="aurora-blob aurora-blob--slow absolute -left-[5%] bottom-[-25%] h-[60%] w-[55%] rounded-full bg-[#a855f7] opacity-80 blur-[100px]" />
    <div className="aurora-blob aurora-blob--rev absolute right-[25%] bottom-[-10%] h-[45%] w-[35%] rounded-full bg-[#22d3ee] opacity-60 blur-[100px]" />
  </div>
);

/* Deterministic PRNG so server and client render identical glyph rows. */
const mulberry32 = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/* Faint monospace letters of a word scattered in rows, drifting slowly downwards. */
export const GlyphRain = ({ word = "PrepSlay", rows = 26, cols = 64, seed = 7, className = "" }) => {
  const lines = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: rows }, () => {
      let line = "";
      let i = Math.floor(rand() * word.length);
      for (let c = 0; c < cols; c++) {
        line += rand() < 0.45 ? word[i % word.length] : " ";
        i++;
      }
      return line;
    });
  }, [word, rows, cols, seed]);

  return (
    <div
      aria-hidden="true"
      className={`glyph-mask pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}
    >
      <div className="glyph-fall font-mono text-[13px] leading-[1.45rem] tracking-[0.55em] text-white/45 md:text-[15px]">
        {[...lines, ...lines].map((l, i) => (
          <div key={i} className="glyph-row whitespace-pre" style={{ animationDelay: `${(i % 9) * 0.7}s` }}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};
