export default function LiveBackground({ dark }: { dark: boolean }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Sleek top radial gradient glow */}
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-[120px] transition-all duration-700 ${
          dark
            ? 'bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent'
            : 'bg-gradient-to-b from-indigo-300/30 via-violet-200/20 to-transparent'
        }`}
      />

      {/* Secondary subtle floating ambient glow */}
      <div
        className={`absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] animate-blob transition-all duration-700 ${
          dark ? 'bg-indigo-900/15' : 'bg-sky-200/40'
        }`}
      />
      <div
        className={`absolute bottom-10 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] animate-blob animation-delay-2000 transition-all duration-700 ${
          dark ? 'bg-purple-900/15' : 'bg-indigo-100/50'
        }`}
      />

      {/* Linear-style SVG Grid Pattern with radial mask */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}
