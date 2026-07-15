// A miniature arc-reactor mark — the same coil-ring + core language as
// ReactorCore, scaled down and static for the nav rail / HUD chip.
export default function LogoMark({ size = 28, className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="AK arc-reactor mark"
    >
      <circle cx="16" cy="16" r="14.5" fill="#0a1420" stroke="#1c3550" strokeWidth="1" />
      <circle cx="16" cy="16" r="11" fill="none" stroke="#5ad1ff" strokeOpacity="0.45" strokeWidth="1" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * 2 * Math.PI
        const x1 = 16 + 8 * Math.cos(angle)
        const y1 = 16 + 8 * Math.sin(angle)
        const x2 = 16 + 10.5 * Math.cos(angle)
        const y2 = 16 + 10.5 * Math.sin(angle)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5ad1ff" strokeOpacity="0.7" strokeWidth="1.2" />
      })}
      <circle cx="16" cy="16" r="4" fill="#a9ecff" />
      <circle cx="16" cy="16" r="1.6" fill="#ffffff" />
    </svg>
  )
}
