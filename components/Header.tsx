"use client";

import Image from "next/image";
import { Github, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(0,0,0,0.08)] bg-[#f5f4f3]/85 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center">
            <Image 
              src="/Mockmirrorphoto.png" 
              alt="MockMirror Logo" 
              width={32} 
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-xl">ockmirror</span>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/MisbahAnsar/mockmirror" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-[rgba(0,0,0,0.08)] bg-white/70 px-3 py-1 text-sm text-neutral-700 md:flex hover:bg-white transition-colors" 
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
          >
            <Github className="h-4 w-4" />
            <span>Open Source</span>
          </a>

          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white text-neutral-700 md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
