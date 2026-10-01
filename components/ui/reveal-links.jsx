"use client";

import React from "react";
import { motion } from "framer-motion";
import { instrumentSerif } from "@/lib/fonts";
import { auroraAt } from "@/components/ui/aurora-backdrop";

export const RevealLinks = ({ title, words = [] }) => {
  const [lead, last] = title ? [title.split(" ").slice(0, -1).join(" "), title.split(" ").slice(-1)[0]] : [];

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f6fa] px-8 py-28 text-neutral-950">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-200/50 via-violet-200/40 to-emerald-200/40 blur-[110px]" />

      <div className="relative grid place-content-center">
        {title && (
          <div className="mb-14 text-center">
            <h2 className="font-aeonik text-3xl tracking-tight md:text-4xl lg:text-5xl">
              {lead}{" "}
              <span className={`${instrumentSerif.className} text-[1.15em] font-normal`}>{last}</span>
            </h2>
            <p className="mt-3 text-sm text-neutral-500">Hover the words.</p>
          </div>
        )}
        <div className="flex flex-col items-center space-y-4">
          {words.map((word, index) => (
            <FlipLink key={index}>{word}</FlipLink>
          ))}
        </div>
      </div>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="font-aeonik relative block overflow-hidden whitespace-nowrap text-4xl uppercase tracking-tight text-neutral-950 sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            style={{ color: auroraAt(children.length > 1 ? i / (children.length - 1) : 0) }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
