"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { UseCases } from "@/components/UseCases";
import { CodeExamples } from "@/components/CodeExamples";
import { UseCaseCards } from "@/components/UseCaseCards";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f4f3] text-neutral-900 font-sans">
      <Background />
      <div className="mx-auto max-w-[calc(72rem+20px)] border-x border-[rgba(0,0,0,0.08)]">
        <Header />
        <div className="h-10" />
        <main>
          <Hero />
          <div className="h-14" />
          <Stats />
          <div className="h-14" />
          <UseCases />
          <div className="h-14" />
          <CodeExamples />
          <div className="h-14" />
          <UseCaseCards />
        </main>
        <div className="h-8" />
        <Footer />
        <div className="h-8" />
      </div>
    </div>
  );
}


