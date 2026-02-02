import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <>
      <div className="border-t border-[rgba(0,0,0,0.08)]" />
      <footer className="bg-white py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-neutral-600" style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>
          <div className="text-neutral-700">
            © MockMirror 2026.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://x.com/Misba8069" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="X"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/misbah-ansari-52657428a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/MisbahAnsar/mockmirror" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:misbaansari444@gmail.com" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
      <div className="border-b border-[rgba(0,0,0,0.08)]" />
    </>
  );
}

