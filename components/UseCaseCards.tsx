"use client";

import { motion } from "framer-motion";
import { useCaseCards } from "@/constants/data";
import { Section } from "./Section";

const GlobeIcon = () => (
  <motion.svg
    viewBox="0 0 24 24"
    className="h-16 w-16 text-sky-500"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </motion.svg>
);

const StackCardsIcon = () => (
  <div className="relative h-10 w-20">
    <motion.div
      className="absolute inset-0 rounded border-2 border-emerald-400 bg-emerald-50"
      initial={{ y: 0, rotate: -2 }}
      animate={{ y: [0, -2, 0], rotate: [-2, 0, -2] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute inset-0 rounded border-2 border-purple-400 bg-purple-50"
      initial={{ y: 2, rotate: 0 }}
      animate={{ y: [2, 0, 2], rotate: [0, 2, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      style={{ zIndex: 1 }}
    />
    <motion.div
      className="absolute inset-0 rounded border-2 border-sky-400 bg-sky-50"
      initial={{ y: 4, rotate: 2 }}
      animate={{ y: [4, 2, 4], rotate: [2, 4, 2] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      style={{ zIndex: 2 }}
    />
  </div>
);

const ThreeBoxesIcon = () => (
  <div className="flex gap-2">
    <motion.div
      className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-amber-400 bg-amber-50"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-600">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
    <motion.div
      className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-emerald-400 bg-emerald-50"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-600">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>
    <motion.div
      className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-sky-400 bg-sky-50"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  </div>
);

const icons = [GlobeIcon, StackCardsIcon, ThreeBoxesIcon];

export function UseCaseCards() {
  return (
    <Section innerClassName="space-y-6">
      <h2 className="text-lg font-normal tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
        Common Use Cases
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {useCaseCards.map((item, idx) => {
          const IconComponent = icons[idx] || GlobeIcon;
          return (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-[rgba(0,0,0,0.08)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.06)] transition-transform duration-150 hover:border-[rgba(0,0,0,0.12)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)]"
            >
              <div className="flex h-32 items-center justify-center rounded-t-xl bg-gradient-to-br from-neutral-50 to-neutral-100">
                <IconComponent />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 text-sm">
                <div>
                  <div className="text-neutral-500 italic" style={{ fontFamily: "var(--font-serif)" }}>{item.stack}</div>
                  <div className="mt-1 font-semibold tracking-tight text-neutral-900" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </div>
                  <p className="mm-desc mt-1 text-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

