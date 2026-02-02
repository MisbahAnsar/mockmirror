"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Plus, Copy, Check, AlertCircle, X } from "lucide-react";

const EXAMPLE_JSON = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
  ],
  meta: {
    total: 2,
    page: 1,
    perPage: 10,
  },
  status: "success",
};

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

export function TryUrl() {
  const [creating, setCreating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"example" | "response">("response");
  const [jsonInput, setJsonInput] = useState("");
  const [ttlSeconds, setTtlSeconds] = useState(3600);
  const [createdLink, setCreatedLink] = useState<{ url: string; expiresAt: string } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [createError, setCreateError] = useState<string | null>(null);

  const apiUrl = typeof window !== "undefined" 
    ? (process.env.NEXT_PUBLIC_BASE_URL || window.location.origin)
    : "http://localhost:3000";

  const handleCreateMock = async () => {
    // Reset errors
    setJsonError(null);
    setCreateError(null);

    // Validate JSON
    try {
      JSON.parse(jsonInput);
    } catch {
      setJsonError("Invalid JSON format");
      return;
    }

    setCreating(true);
    try {
      const response = await fetch(`${apiUrl}/api/v1/mocks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: JSON.parse(jsonInput),
          ttlSeconds,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCreatedLink({ url: data.url, expiresAt: data.expiresAt });
        setShowCreateModal(false);
      } else {
        const data = await response.json();
        setCreateError(data.error || "Failed to create endpoint.");
      }
    } catch {
      setCreateError("Network error. Please try again.");
    } finally {
      setCreating(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId("created");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Silent fail
    }
  };

  const useExample = () => {
    setJsonInput(JSON.stringify(EXAMPLE_JSON, null, 2));
    setActiveTab("response");
    setJsonError(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f4f3]">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-normal text-neutral-900 mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Create Mock API Endpoint
          </h1>
          <p className="mm-desc text-neutral-600">
            Create instant mock API endpoints. No signup required.
          </p>
        </div>

        {/* Create Button */}
        <div className="mb-8">
          <button
            onClick={() => {
              setShowCreateModal(true);
              setCreatedLink(null);
              setCreateError(null);
              setJsonInput("");
              setJsonError(null);
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <Plus className="h-4 w-4" />
            Create Mock Endpoint
          </button>
        </div>

        {/* Created Link Display */}
        {createdLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm"
          >
            <p className="text-base font-semibold text-emerald-800 mb-3" style={{ fontFamily: "var(--font-sans)" }}>
              ✓ Mock endpoint created successfully!
            </p>
            <div className="flex items-center gap-2 mb-3">
              <code className="flex-1 px-4 py-3 bg-white border border-emerald-200 rounded-lg text-sm break-all font-mono" style={{ fontFamily: "var(--font-mono)" }}>
                {createdLink.url}
              </code>
              <button
                onClick={() => copyToClipboard(createdLink.url)}
                className="p-3 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                {copiedId === "created" ? (
                  <Check className="h-5 w-5 text-emerald-600" />
                ) : (
                  <Copy className="h-5 w-5 text-emerald-600" />
                )}
              </button>
            </div>
            <p className="text-sm text-amber-700 font-medium mb-2" style={{ fontFamily: "var(--font-sans)" }}>
              ⚠️ Copy this link now! It will be gone if you refresh the page.
            </p>
            <p className="text-sm text-emerald-700" style={{ fontFamily: "var(--font-sans)" }}>
              Expires: {new Date(createdLink.expiresAt).toLocaleString()}
            </p>
          </motion.div>
        )}

        {/* Create Modal */}
        <AnimatePresence>
          {showCreateModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
              onClick={() => setShowCreateModal(false)}
            >
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-t-xl sm:rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              >
                <div className="p-6 border-b border-[rgba(0,0,0,0.08)] flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-normal text-neutral-900" style={{ fontFamily: "var(--font-serif)" }}>
                      Create Mock Endpoint
                    </h2>
                    <p className="mm-desc text-neutral-600 mt-1">
                      Enter the JSON data you want your mock endpoint to return.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-neutral-600" />
                  </button>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col overflow-hidden min-h-0">
                  {/* Tabs */}
                  <div className="flex gap-2 border-b border-[rgba(0,0,0,0.08)] flex-shrink-0">
                    <button
                      onClick={() => setActiveTab("example")}
                      className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                        activeTab === "example"
                          ? "border-neutral-900 text-neutral-900"
                          : "border-transparent text-neutral-500 hover:text-neutral-700"
                      }`}
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
                    >
                      Example
                    </button>
                    <button
                      onClick={() => setActiveTab("response")}
                      className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                        activeTab === "response"
                          ? "border-neutral-900 text-neutral-900"
                          : "border-transparent text-neutral-500 hover:text-neutral-700"
                      }`}
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
                    >
                      Response JSON
                    </button>
                  </div>

                  {/* Content Area - Fixed height for both */}
                  <div className="overflow-hidden" style={{ height: "400px" }}>
                    {activeTab === "example" && (
                      <div 
                        className="code-editor-wrapper rounded-lg border overflow-auto h-full" 
                        style={{ 
                          backgroundColor: "#1e1e1e",
                          borderColor: "#3c3c3c",
                          height: "100%"
                        }}
                      >
                        <SyntaxHighlighter
                          language="json"
                          style={customTheme}
                          showLineNumbers
                          customStyle={{
                            margin: 0,
                            padding: "1.5rem",
                            fontSize: "13px",
                            lineHeight: "1.6",
                            fontFamily: "var(--font-mono)",
                            backgroundColor: "#1e1e1e",
                          }}
                          lineNumberStyle={{
                            minWidth: "3em",
                            paddingRight: "1em",
                            color: "#858585",
                            userSelect: "none",
                          }}
                        >
                          {JSON.stringify(EXAMPLE_JSON, null, 2)}
                        </SyntaxHighlighter>
                      </div>
                    )}

                    {activeTab === "response" && (
                      <div className="h-full flex flex-col">
                        <div 
                          className="code-editor-wrapper rounded-lg border overflow-hidden h-full" 
                          style={{ 
                            backgroundColor: "#1e1e1e",
                            borderColor: "#3c3c3c",
                            height: "100%"
                          }}
                        >
                          <textarea
                            value={jsonInput}
                            onChange={(e) => {
                              setJsonInput(e.target.value);
                              setJsonError(null);
                            }}
                            className="w-full h-full px-6 py-4 text-sm bg-transparent border-0 focus:outline-none resize-none overflow-y-auto"
                            style={{ 
                              fontFamily: "var(--font-mono)",
                              fontSize: "13px",
                              lineHeight: "1.6",
                              color: "#e5e5e5"
                            }}
                            placeholder='{\n  "key": "value"\n}'
                          />
                        </div>
                        {jsonError && (
                          <p className="mt-2 text-sm text-red-600 flex-shrink-0" style={{ fontFamily: "var(--font-sans)" }}>
                            {jsonError}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Use Example Button - Only show in example tab */}
                  {activeTab === "example" && (
                    <div className="flex-shrink-0">
                      <button
                        onClick={useExample}
                        className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Use This Example
                      </button>
                    </div>
                  )}

                  {/* Error Display */}
                  {createError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-red-800" style={{ fontFamily: "var(--font-sans)" }}>
                          Cannot create endpoint
                        </p>
                        <p className="text-sm text-red-700 mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                          {createError}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TTL Selection */}
                  <div className="flex-shrink-0">
                    <label className="block text-sm font-medium text-neutral-700 mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      Expires in
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: 300, label: "5 min" },
                        { value: 1800, label: "30 min" },
                        { value: 3600, label: "1 hour" },
                        { value: 21600, label: "6 hours" },
                        { value: 86400, label: "24 hours" },
                        { value: 172800, label: "48 hours" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTtlSeconds(option.value)}
                          className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                            ttlSeconds === option.value
                              ? "bg-neutral-900 text-white border-neutral-900"
                              : "bg-white text-neutral-700 border-[rgba(0,0,0,0.08)] hover:border-neutral-300"
                          }`}
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-[rgba(0,0,0,0.08)] flex items-center justify-end gap-3">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateMock}
                    disabled={creating}
                    className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors disabled:opacity-50"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {creating ? "Creating..." : "Create Endpoint"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
