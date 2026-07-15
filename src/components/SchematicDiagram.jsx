import { motion } from "framer-motion"

// The signature visual: a request's path through the stack, drawn like a
// technical schematic rather than staged as a glowing prop. Nodes are the
// real shape of what this system is — edge, load balancer, cluster, store —
// with the monitoring loop closing back onto the cluster it watches.
const NODES = [
  { key: "client", label: "client", x: 8, y: 134, w: 62, h: 32 },
  { key: "edge", label: "edge", x: 98, y: 134, w: 62, h: 32 },
  { key: "lb", label: "lb", x: 188, y: 134, w: 62, h: 32 },
  { key: "db", label: "datastore", x: 416, y: 134, w: 62, h: 32 }
]

const CLUSTER = { x: 280, y: 90, w: 106, h: 120 }
const PODS = [
  { x: 296, y: 168 },
  { x: 322, y: 168 },
  { x: 348, y: 168 }
]

const LINES = [
  { d: "M70,150 L98,150", delay: 0.1 },
  { d: "M160,150 L188,150", delay: 0.2 },
  { d: "M250,150 L280,150", delay: 0.3 },
  { d: "M386,150 L416,150", delay: 0.4 },
  { d: "M333,210 L333,225", delay: 0.55 },
  { d: "M377,239 L398,239", delay: 0.65 }
]

const FEEDBACK = "M433,225 C 433,200 400,190 386,166"

export default function SchematicDiagram({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 480 262" className="w-full h-full" role="img" aria-label="Diagram of a request travelling from client to edge, load balancer, cluster and datastore, observed by prometheus and grafana">
        {/* corner registration ticks */}
        {[[4, 4], [476, 4], [4, 258], [476, 258]].map(([x, y], i) => (
          <g key={i} stroke="#6fd6ff" strokeOpacity="0.5" strokeWidth="1.5">
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
            stroke="#2c4770"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
          />
        ))}

        {/* monitoring feedback loop — dashed, closes back onto the cluster */}
        <motion.path
          d={FEEDBACK}
          fill="none"
          stroke="#f0a94e"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        />

        {/* traveling packet along the primary request path */}
        <circle r="3" fill="#b9ecff">
          <animateMotion
            path="M8,150 L98,150 L188,150 L280,150 L386,150 L416,150"
            dur="4.5s"
            repeatCount="indefinite"
            begin="1.4s"
          />
        </circle>

        {/* cluster boundary */}
        <motion.rect
          x={CLUSTER.x} y={CLUSTER.y} width={CLUSTER.w} height={CLUSTER.h}
          rx="3" fill="rgba(111,214,255,0.04)" stroke="#6fd6ff" strokeOpacity="0.5" strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ transformOrigin: "333px 150px" }}
        />
        <text x={CLUSTER.x + CLUSTER.w / 2} y={CLUSTER.y + 16} textAnchor="middle" className="fill-cyan font-mono" fontSize="9" letterSpacing="0.08em">
          k8s cluster
        </text>
        {PODS.map((p, i) => (
          <motion.rect
            key={i}
            x={p.x} y={p.y} width="12" height="12" rx="2"
            fill="none" stroke="#6fd6ff" strokeOpacity="0.7" strokeWidth="1.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
          />
        ))}

        {/* pipeline nodes */}
        {NODES.map((n, i) => (
          <motion.g
            key={n.key}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
          >
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="3" fill="#12294d" stroke="#2c4770" strokeWidth="1.5" />
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 3} textAnchor="middle" className="fill-paper font-mono" fontSize="9">
              {n.label}
            </text>
          </motion.g>
        ))}

        {/* monitoring nodes */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }}>
          <rect x="300" y="225" width="78" height="26" rx="3" fill="#12294d" stroke="#f0a94e" strokeOpacity="0.5" strokeWidth="1.3" />
          <text x="339" y="241.5" textAnchor="middle" className="fill-amber font-mono" fontSize="8">prometheus</text>
        </motion.g>
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.82 }}>
          <rect x="398" y="225" width="66" height="26" rx="3" fill="#12294d" stroke="#f0a94e" strokeOpacity="0.5" strokeWidth="1.3" />
          <text x="431" y="241.5" textAnchor="middle" className="fill-amber font-mono" fontSize="8">grafana</text>
        </motion.g>

        {/* dimension bracket under the primary path */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <path d="M8,182 L8,188 L416,188 L416,182" fill="none" stroke="#2c4770" strokeWidth="1" />
          <text x="212" y="200" textAnchor="middle" className="fill-muted font-mono" fontSize="8" letterSpacing="0.1em">
            ONE REQUEST
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
