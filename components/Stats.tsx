"use client";

import { stats } from "@/constants/data";
import { Section } from "./Section";

export function Stats() {
  return (
    <Section innerClassName="grid gap-8 sm:grid-cols-3" contentPadding="py-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="space-y-1 border-[rgba(0,0,0,0.08)] sm:border-l sm:first:border-l-0 sm:pl-8 sm:first:pl-0"
        >
          <div className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-500" style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>
            {stat.label}
          </div>
          <div className="text-2xl font-semibold tracking-tight sm:text-3xl" style={{ fontFamily: "var(--font-mono)" }}>
            {stat.value}
          </div>
        </div>
      ))}
    </Section>
  );
}

