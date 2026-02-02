"use client";

import { Header } from "@/components/Header";
import { TryUrl } from "@/components/TryUrl";

export default function TryUrlPage() {
  return (
    <div className="min-h-screen bg-[#f5f4f3] text-neutral-900 font-sans">
      <div className="mx-auto max-w-[calc(72rem+20px)] border-x border-[rgba(0,0,0,0.08)]">
        <Header />
        <TryUrl />
      </div>
    </div>
  );
}
