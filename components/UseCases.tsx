"use client";

import { useCases } from "@/constants/data";
import { Section } from "./Section";

const useCaseConfigs = [
  {
    badgeClass: "text-amber-400",
    textClass: "text-amber-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1.5" />
        <rect x="9" y="14" width="6" height="6" rx="1.5" />
        <path d="M7 10v2.5M17 10v2.5M12 14V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badgeClass: "text-emerald-400",
    textClass: "text-emerald-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <rect x="4" y="5" width="16" height="12" rx="2" />
        <path d="M4 9h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 13.5 11.75 15 15 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badgeClass: "text-sky-400",
    textClass: "text-sky-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path
          d="M12 4v4M7 6l2 3M17 6l-2 3M5 13l3 .5M19 13l-3 .5M10.5 19l1.5-3 1.5 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    badgeClass: "text-fuchsia-400",
    textClass: "text-fuchsia-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <circle cx="7" cy="12" r="2.2" />
        <circle cx="17" cy="7" r="2.2" />
        <circle cx="17" cy="17" r="2.2" />
        <path d="M8.5 11 15.5 8M8.5 13 15.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badgeClass: "text-indigo-400",
    textClass: "text-indigo-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M11 10.5v3l3-1.5-3-1.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    badgeClass: "text-orange-400",
    textClass: "text-orange-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path
          d="M7.5 7.5a6 6 0 0 1 9 0M6 13.5 4.5 12 6 10.5M18 10.5 19.5 12 18 13.5M9.5 17a4 4 0 0 0 5 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="1.6" />
      </svg>
    ),
  },
  {
    badgeClass: "text-teal-400",
    textClass: "text-teal-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 8h6M9 11h4M9 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badgeClass: "text-rose-400",
    textClass: "text-rose-400",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <circle cx="12" cy="13" r="5" />
        <path d="M7 13a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <>
      <div className="border-t border-[rgba(0,0,0,0.08)]" />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 space-y-4">
          <div className="space-y-2">
            <div
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-neutral-500"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.0em" }}
            >
              USE CASES
            </div>
            <h2
              className="text-xl font-normal tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What Developers Use MockMirror For
            </h2>
            <p className="mm-desc max-w-3xl">
              From rapid prototyping to comprehensive testing, MockMirror helps you
              build faster without waiting for backend APIs.
            </p>
          </div>
        </div>
        <div className="grid border-y border-[rgba(0,0,0,0.08)] divide-y mt-8 divide-[rgba(0,0,0,0.08)] sm:grid-cols-4 sm:divide-x">
          {useCases.map((useCase, idx) => {
            const config = useCaseConfigs[idx % useCaseConfigs.length];
            return (
              <div
                key={useCase}
                className="flex flex-col justify-between gap-2 px-4 py-5 text-sm"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
              >
                <span
                  className={[
                    "mb-2 inline-flex h-6 w-6 items-center justify-center rounded-md border border-current/40 text-xs font-semibold",
                    config.badgeClass,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {config.icon}
                </span>
                <span className={config.textClass}>{useCase}</span>
              </div>
            );
          })}
        </div>
      </section>
      <div className="border-b border-[rgba(0,0,0,0.08)]" />
    </>
  );
}

