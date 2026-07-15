export default function LogoMark({ size = 28, className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="AK logomark"
    >
      <rect x="1.5" y="1.5" width="29" height="29" rx="2" fill="#12294d" stroke="#2c4770" strokeWidth="1" />
      {[[1.5, 1.5], [30.5, 1.5], [1.5, 30.5], [30.5, 30.5]].map(([x, y], i) => (
        <g key={i} stroke="#6fd6ff" strokeWidth="1.4">
          <line x1={x} y1={y} x2={x + (x < 16 ? 4 : -4)} y2={y} />
          <line x1={x} y1={y} x2={x} y2={y + (y < 16 ? 4 : -4)} />
        </g>
      ))}
      <circle cx="16" cy="16" r="4.5" fill="none" stroke="#6fd6ff" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="1.4" fill="#b9ecff" />
    </svg>
  )
}
