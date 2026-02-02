import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  innerClassName?: string;
  contentPadding?: string;
};

export function Section({ children, innerClassName, contentPadding = "py-12" }: SectionProps) {
  return (
    <>
      <div className="border-t border-[rgba(0,0,0,0.08)]" />
      
      <section className={contentPadding}>
        <div
          className={[
            "mx-auto max-w-6xl px-4",
            innerClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      </section>
      
      <div className="border-b border-[rgba(0,0,0,0.08)]" />
    </>
  );
}

