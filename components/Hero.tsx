"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <>
      <div className="border-t border-[rgba(0,0,0,0.08)]" />
      
      <section className="py-16 relative min-h-[500px]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-stretch">
            <div className="space-y-6 flex flex-col justify-center">
              <h1 className="text-balance text-4xl font-normal tracking-relaxed text-neutral-900 sm:text-5xl lg:text-6xl -mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                Mock APIs in Seconds.
              </h1>
              <p className="mm-desc max-w-lg mt-4">
                Create mock API endpoints instantly. For testing, prototypes, and demos. No signup. Auto-expire after TTL.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="/tryurl" className="inline-flex items-center gap-2 rounded-none bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:bg-neutral-800 cursor-pointer" style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>
                  Try It Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 border-l border-[rgba(0,0,0,0.08)] overflow-hidden">
          <div className="relative h-full w-full">
            <img
              src="https://i.pinimg.com/1200x/70/15/b0/7015b08bfdad1c355d8f18c18496258b.jpg"
              alt="MockMirror workflow visual"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#b3e6ff_0,_#020617_45%,_#020617_100%)] opacity-85" />

            <div className="relative flex h-full items-center justify-center">
              <motion.div
              initial={{ opacity: 0, y: -40, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="relative z-10 w-64 max-w-xs -translate-y-4 -translate-x-4 rounded-2xl border border-white/15 bg-neutral-950/95 px-5 py-4 text-xs text-white shadow-[0_22px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium tracking-[0.18em]">
                <span className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                <span className="uppercase text-[9px] text-neutral-200">MOCKMIRROR_APP</span>
              </div>
              <p className="mb-3 text-[11px] font-semibold text-white">
                Prioritize fast mock APIs over backend waits.
              </p>
              <ul className="space-y-2 text-[10px] text-neutral-200">
                <li>
                  <span className="font-semibold text-white">Create</span> a new mock endpoint in{" "}
                  <span className="font-semibold">under 1 second</span> with a single POST.
                </li>
                <li>
                  <span className="font-semibold text-white">Share</span> a temporary URL with your
                  frontend or teammates instantly.
                </li>
                <li>
                  <span className="font-semibold text-white">Done.</span> Endpoint auto-expires after
                  the TTL you choose.
                </li>
              </ul>
            </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              className="relative z-0 w-64 max-w-xs translate-y-5 translate-x-4 rounded-2xl border border-white/15 bg-neutral-950/90 px-5 py-4 text-xs text-white shadow-[0_18px_55px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
            >
              <div className="mb-3 flex items-center justify-between gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                </div>
                <span className="truncate text-[9px] uppercase tracking-[0.18em] text-neutral-200">
                  MOCKMIRROR_ENDPOINT
                </span>
              </div>

              <div className="mb-2 flex items-baseline justify-between text-[11px]">
                <div>
                  <div className="text-[9px] uppercase text-neutral-500">client</div>
                  <div className="font-semibold text-white">frontend</div>
                </div>
                <div className="text-[9px] text-neutral-500">→</div>
                <div className="text-right">
                  <div className="text-[9px] uppercase text-neutral-500">mock url</div>
                  <div className="font-semibold text-white">/v1/mocks/:id</div>
                </div>
              </div>

              <div className="mt-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-mono leading-relaxed text-neutral-100">
                POST https://api.mockmirror.dev/v1/mocks
                <br />
                {"{"}"data": {"{"}"ok": true{"}"}{"}"}
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="border-b border-[rgba(0,0,0,0.08)]" />
    </>
  );
}

