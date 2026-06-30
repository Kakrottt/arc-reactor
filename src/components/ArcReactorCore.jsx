export default function ArcReactorCore({ size = 360, className = "" }) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* outer glow halo */}
      <div className="absolute inset-0 rounded-full bg-reactor/20 blur-3xl animate-pulse-glow" />

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-spin-slower"
      >
        <circle
          cx="100" cy="100" r="92"
          fill="none" stroke="#37e6e0" strokeOpacity="0.35"
          strokeWidth="1.5" strokeDasharray="4 10"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-spin-reverse"
      >
        <circle
          cx="100" cy="100" r="76"
          fill="none" stroke="#37e6e0" strokeOpacity="0.55"
          strokeWidth="2" strokeDasharray="18 14"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-spin-slow"
      >
        <circle
          cx="100" cy="100" r="58"
          fill="none" stroke="#6ff9f0" strokeOpacity="0.8"
          strokeWidth="3" strokeDasharray="2 8"
          strokeLinecap="round"
        />
      </svg>

      {/* inner core */}
      <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-[#bdfffb] via-[#37e6e0] to-[#0e8f88] shadow-reactor animate-pulse-glow" />
      <div className="absolute inset-[42%] rounded-full bg-white/90 blur-[2px]" />
    </div>
  )
}
