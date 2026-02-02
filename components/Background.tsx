export function Background() {
  return (
    <>
      {/* subtle top-down accents like the reference, but for light background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.10),transparent_55%),radial-gradient(circle_at_center,_rgba(56,189,248,0.08),transparent_55%)]" />
    </>
  );
}


