import { motion } from "framer-motion"

// The signature visual: a request's path through the stack, drawn like a
// Stark-tech HUD schematic rather than a plain box diagram. Nodes are the
// real shape of what this system is — edge, load balancer, cluster, store —
// with the cluster itself rendered as the thing this repo is named for: a
// small reactor hub, coil ring and all, not a decorative prop bolted on.
const NODES = [
  { key: "client", label: "client", x: 8, y: 134, w: 62, h: 32 },
  { key: "edge", label: "edge", x: 98, y: 134, w: 62, h: 32 },
  { key: "lb", label: "lb", x: 188, y: 134, w: 62, h: 32 },
  { key: "db", label: "datastore", x: 416, y: 134, w: 62, h: 32 }
]

const HUB = { cx: 333, cy: 150, r: 50 }
const POD_ANGLES = [-90, 30, 150]
const COIL_TICKS = 16

const LINES = [
  { d: "M70,150 L98,150", delay: 0.1, pin: { x: 98, y: 150 } },
  { d: "M160,150 L188,150", delay: 0.2, pin: { x: 188, y: 150 } },
  { d: "M250,150 L283,150", delay: 0.3, pin: { x: 283, y: 150 } },
  { d: "M383,150 L416,150", delay: 0.4, pin: { x: 416, y: 150 } },
  { d: "M333,200 L333,225", delay: 0.55, pin: { x: 333, y: 225 } },
  { d: "M377,239 L398,239", delay: 0.65, pin: { x: 398, y: 239 } }
]

const FEEDBACK = "M433,225 C 433,193 400,182 368,190"

// chamfered-rectangle panel — the elongated-octagon "tech callout" shape
// that reads Stark HUD instead of a generic rounded card.
function chamferPath(x, y, w, h, c = 7) {
  return `M ${x + c},${y} L ${x + w - c},${y} L ${x + w},${y + c} L ${x + w},${y + h - c} L ${x + w - c},${y + h} L ${x + c},${y + h} L ${x},${y + h - c} L ${x},${y + c} Z`
}

function polar(cx, cy, angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

export default function SchematicDiagram({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 480 262" className="w-full h-full" role="img" aria-label="Diagram of a request travelling from client to edge, load balancer, a Kubernetes cluster rendered as a reactor hub, and datastore, observed by prometheus and grafana">
        {/* corner registration ticks */}
        {[[4, 4], [476, 4], [4, 258], [476, 258]].map(([x, y], i) => (
          <g key={i} stroke="#5ad1ff" strokeOpacity="0.5" strokeWidth="1.5">
            <line x1={x - (x > 240 ? 10 : -10)} y1={y} x2={x} y2={y} />
            <line x1={x} y1={y - (y > 130 ? 10 : -10)} x2={x} y2={y} />
          </g>
        ))}

        {/* connectors */}
        {LINES.map(({ d, delay }, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#1c3550"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
          />
        ))}

        {/* solder-point pins at each connector's node-side end */}
        {LINES.map(({ pin }, i) => (
          <circle key={i} cx={pin.x} cy={pin.y} r="1.6" fill="#5ad1ff" fillOpacity="0.8" />
        ))}

        {/* monitoring feedback loop — dashed, closes back onto the hub */}
        <motion.path
          d={FEEDBACK}
          fill="none"
          stroke="#ff4d6d"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        />

        {/* traveling packet along the primary request path */}
        <circle r="3" fill="#a9ecff">
          <animateMotion
            path="M8,150 L98,150 L188,150 L283,150 L383,150 L416,150"
            dur="4.5s"
            repeatCount="indefinite"
            begin="1.4s"
          />
        </circle>

        {/* k8s cluster — a reactor hub, not a rack of squares */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ transformOrigin: `${HUB.cx}px ${HUB.cy}px` }}
        >
          {/* faint outer lock ring */}
          <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r + 8} fill="none" stroke="#5ad1ff" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 5" />
          {/* housing */}
          <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r} fill="rgba(90,209,255,0.04)" stroke="#5ad1ff" strokeOpacity="0.5" strokeWidth="1.5" />

          {/* rotating coil ring */}
          <g className="animate-spin-slow" style={{ transformOrigin: `${HUB.cx}px ${HUB.cy}px` }}>
            {Array.from({ length: COIL_TICKS }).map((_, i) => {
              const angle = (i / COIL_TICKS) * 360
              const inner = polar(HUB.cx, HUB.cy, angle, HUB.r - 10)
              const outer = polar(HUB.cx, HUB.cy, angle, HUB.r - 3)
              return (
                <line
                  key={i}
                  x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y}
                  stroke="#5ad1ff"
                  strokeOpacity={i % 4 === 0 ? 0.85 : 0.35}
                  strokeWidth={i % 4 === 0 ? 1.5 : 1}
                />
              )
            })}
            <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r - 16} fill="none" stroke="#5ad1ff" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="1 5" />
          </g>

          {/* pods, arranged around the core instead of racked in a row */}
          {POD_ANGLES.map((angle, i) => {
            const p = polar(HUB.cx, HUB.cy, angle, HUB.r - 24)
            return (
              <motion.circle
                key={i}
                cx={p.x} cy={p.y} r="3.5"
                fill="#a9ecff"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
              />
            )
          })}

          {/* pulsing core */}
          <circle cx={HUB.cx} cy={HUB.cy} r="8" fill="#eaf6ff" className="animate-pulse-core" style={{ transformOrigin: `${HUB.cx}px ${HUB.cy}px` }} />

          <text x={HUB.cx} y={HUB.cy - HUB.r - 12} textAnchor="middle" className="fill-cyan font-mono" fontSize="9" letterSpacing="0.08em">
            k8s cluster
          </text>
        </motion.g>

        {/* pipeline nodes */}
        {NODES.map((n, i) => (
          <motion.g
            key={n.key}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
          >
            <path d={chamferPath(n.x, n.y, n.w, n.h)} fill="#0e1c2e" stroke="#1c3550" strokeWidth="1.5" />
            <path d={`M ${n.x + 4},${n.y + 4} l 5,0`} stroke="#5ad1ff" strokeOpacity="0.5" strokeWidth="1" />
            <path d={`M ${n.x + n.w - 4},${n.y + n.h - 4} l -5,0`} stroke="#5ad1ff" strokeOpacity="0.5" strokeWidth="1" />
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 3} textAnchor="middle" className="fill-paper font-mono" fontSize="9">
              {n.label}
            </text>
          </motion.g>
        ))}

        {/* monitoring nodes */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }}>
          <path d={chamferPath(300, 225, 78, 26, 6)} fill="#0e1c2e" stroke="#ff4d6d" strokeOpacity="0.5" strokeWidth="1.3" />
          <text x="339" y="241.5" textAnchor="middle" className="fill-rose font-mono" fontSize="8">prometheus</text>
        </motion.g>
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.82 }}>
          <path d={chamferPath(398, 225, 66, 26, 6)} fill="#0e1c2e" stroke="#ff4d6d" strokeOpacity="0.5" strokeWidth="1.3" />
          <text x="431" y="241.5" textAnchor="middle" className="fill-rose font-mono" fontSize="8">grafana</text>
        </motion.g>

        {/* dimension bracket under the primary path */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <path d="M8,182 L8,188 L416,188 L416,182" fill="none" stroke="#1c3550" strokeWidth="1" />
          <text x="212" y="200" textAnchor="middle" className="fill-muted font-mono" fontSize="8" letterSpacing="0.1em">
            ONE REQUEST
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
