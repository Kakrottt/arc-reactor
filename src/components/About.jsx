import { motion } from "framer-motion"

const platformSkills = ["AWS", "Kubernetes", "Terraform", "Docker", "Helm", "ArgoCD", "Linux", "Nginx"]
const backendSkills = ["Go", "Python", "Node.js", "PostgreSQL", "Redis", "Prometheus", "Grafana", "CI/CD"]

const principles = [
  "infra as code, reviewed like application code",
  "design for failure: multi-AZ, autoscaling, graceful degradation",
  "observability before incidents, not after",
  "automate the pipeline so deploys are boring"
]

// Instrument-style semicircle gauge — the section's thesis (one engineer,
// two layers, split evenly) rendered as a live dashboard dial rather than
// a decorative divider bar. Modeled on a Grafana/Prometheus radial gauge:
// track + tick marks + a glowing value arc + a numeric center readout.
const GAUGE_CX = 100
const GAUGE_CY = 100
const GAUGE_R = 80

function polar(deg, r = GAUGE_R) {
  const rad = (deg * Math.PI) / 180
  return { x: GAUGE_CX + r * Math.cos(rad), y: GAUGE_CY - r * Math.sin(rad) }
}

function arcPath(fromDeg, toDeg, r = GAUGE_R) {
  const from = polar(fromDeg, r)
  const to = polar(toDeg, r)
  return `M ${from.x} ${from.y} A ${r} ${r} 0 0 1 ${to.x} ${to.y}`
}

const TICK_ANGLES = [180, 150, 120, 90, 60, 30, 0]

function OwnershipGauge() {
  const left = polar(180)
  const right = polar(0)
  const pin = polar(90)

  return (
    <div className="flex flex-col items-center mb-10">
      <svg viewBox="0 0 200 118" className="w-60 sm:w-72">
        <defs>
          <filter id="gaugeGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* background track */}
        <path d={arcPath(180, 0)} fill="none" stroke="#2c4770" strokeWidth="10" strokeLinecap="round" />

        {/* instrument tick marks */}
        {TICK_ANGLES.map((deg) => {
          const inner = polar(deg, 82)
          const outer = polar(deg, 89)
          return (
            <line
              key={deg}
              x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y}
              stroke="#2c4770"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )
        })}

        {/* value arcs — small gap at apex separates the two halves */}
        <g filter="url(#gaugeGlow)">
          <path d={arcPath(180, 92)} fill="none" stroke="#6fd6ff" strokeWidth="10" strokeLinecap="round" />
          <path d={arcPath(88, 0)} fill="none" stroke="#f0a94e" strokeWidth="10" strokeLinecap="round" />
        </g>

        <circle cx={pin.x} cy={pin.y} r="4.5" fill="#0b1f3a" stroke="#eef3fa" strokeWidth="1.5" />

        {/* center readout */}
        <text x={GAUGE_CX} y={GAUGE_CY - 22} textAnchor="middle" className="fill-paper font-mono text-[16px] font-semibold">
          50 / 50
        </text>
        <text x={GAUGE_CX} y={GAUGE_CY - 8} textAnchor="middle" className="fill-muted font-mono text-[7px] tracking-[0.2em]">
          OWNERSHIP SPLIT
        </text>
      </svg>

      {/* legend — plain text below the SVG, never clipped by viewBox math */}
      <div className="flex items-center gap-6 -mt-1 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan">
          <span className="w-2 h-2 rounded-full bg-cyan shadow-glow-sm" /> platform
        </span>
        <span className="flex items-center gap-2 text-amber">
          <span className="w-2 h-2 rounded-full bg-amber shadow-glow-amber" /> services
        </span>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about-detail"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink py-24"
    >
      <div className="absolute inset-0 bg-blueprint" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <span className="block text-center font-mono text-xs text-cyan mb-3">~/about $ cat profile.md</span>

        <h2 className="font-display text-4xl font-semibold mb-8 text-paper text-center">
          Platform Below. Services Above.
        </h2>

        <OwnershipGauge />

        <p className="text-muted max-w-2xl mx-auto mb-14 leading-relaxed text-center -mt-2">
          I own the stack end to end — the clusters, pipelines and Terraform
          modules underneath, and the backend services that run on top of
          them. Same engineer, two layers, one on-call rotation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* platform side */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-md border border-line bg-surface/60 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-cyan shadow-glow-sm" />
              <h3 className="font-mono text-sm text-cyan tracking-wide">platform_engineering.tf</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {platformSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md border border-line text-sm text-paper/90 hover:border-cyan hover:text-cyan transition font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* backend + reliability side */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-md border border-line bg-surface/60 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-amber shadow-glow-amber" />
              <h3 className="font-mono text-sm text-amber tracking-wide">backend_and_reliability.go</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md border border-line text-sm text-paper/90 hover:border-amber hover:text-amber transition font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* principles -> resolves into the running status, one continuous log */}
        <div className="max-w-2xl mx-auto rounded-md border border-line bg-surface2/80 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface/60">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-xs text-muted">cat architecture_principles.md | apply</span>
          </div>
          <div className="p-4 font-mono text-xs sm:text-sm text-left text-muted leading-relaxed">
            {principles.map((p, i) => (
              <motion.p
                key={p}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.12 }}
              >
                <span className="text-cyan">[x]</span> {p}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: principles.length * 0.12 + 0.2 }}
              className="mt-3 pt-3 border-t border-dashed border-line"
            >
              <p><span className="text-cyan">NAME</span>&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;RESTARTS&nbsp;&nbsp;ROLE</p>
              <p>ajeet-kumar&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan">Running</span>&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Platform + Backend</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
