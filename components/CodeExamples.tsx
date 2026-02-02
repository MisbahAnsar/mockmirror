"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeTabs, codeSnippets } from "@/constants/data";
import { Section } from "./Section";

const customTheme = {
  ...vscDarkPlus,
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: '#1e1e1e',
  },
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: '#1e1e1e',
  },
};

const languageMap: Record<string, string> = {
  cURL: "bash",
  JavaScript: "javascript",
  Python: "python",
  Go: "go",
  Rust: "rust",
};

export function CodeExamples() {
  const [selectedTab, setSelectedTab] = useState("Python");

  return (
    <Section innerClassName="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-normal tracking-tight text-neutral-900" style={{ fontFamily: "var(--font-serif)" }}>
            Get Started with Your Favorite Stack
          </h2>
          <p className="mm-desc mt-1">
            Easily integrate with the tools you know and love. We're always working on adding more to this list.
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.06)] sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          {codeTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`rounded-lg border px-3 py-1.5 transition-colors ${
                tab === selectedTab
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-[rgba(0,0,0,0.08)] bg-white text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
              }`}
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div 
          className="code-editor-wrapper rounded-lg overflow-hidden shadow-lg" 
          style={{ 
            backgroundColor: "#1e1e1e",
            border: "1px solid #3c3c3c",
            height: "320px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
          }}
        >
          <SyntaxHighlighter
            language={languageMap[selectedTab] || "python"}
            style={customTheme}
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              height: "100%",
              fontSize: "13px",
              lineHeight: "1.6",
              fontFamily: "var(--font-mono)",
              backgroundColor: "#1e1e1e",
            }}
            lineNumberStyle={{
              minWidth: "3em",
              paddingRight: "1em",
              paddingLeft: "1.5rem",
              color: "#858585",
              userSelect: "none",
            }}
            codeTagProps={{
              style: {
                fontFamily: "var(--font-mono)",
              }
            }}
          >
            {codeSnippets[selectedTab] || codeSnippets.Python}
          </SyntaxHighlighter>
        </div>
        <div className="mt-4">
          <button className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors" style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>
            view {selectedTab} SDK
          </button>
        </div>
      </div>
    </Section>
  );
}

