import { motion } from "framer-motion"

const platformSkills = ["AWS", "Kubernetes", "Terraform", "Docker", "Helm", "ArgoCD", "Linux", "Nginx"]
const backendSkills = ["Go", "Python", "Node.js", "PostgreSQL", "Redis", "Prometheus", "Grafana", "CI/CD"]

const principles = [
  "infra as code, reviewed like application code",
  "design for failure: multi-AZ, autoscaling, graceful degradation",
  "observability before incidents, not after",
  "automate the pipeline so deploys are boring"
]

// Static 50/50 semicircle gauge — the section's thesis (one engineer,
// two layers) rendered as a dial instead of a decorative divider bar.
function OwnershipGauge() {
  return (
    <div className="flex flex-col items-center mb-10">
      <svg viewBox="0 0 200 110" className="w-56 sm:w-64">
        <path
          d="M 20 100 A 80 80 0 0 1 100 20"
          fill="none"
          stroke="#37e6e0"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 100 20 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#f5b942"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle cx="100" cy="20" r="4.5" fill="#05080a" stroke="#f5f5f3" strokeWidth="1.5" />
        <text x="20" y="98" textAnchor="start" className="fill-reactor font-mono text-[9px] tracking-wide">
          PLATFORM
        </text>
        <text x="180" y="98" textAnchor="end" className="fill-amber font-mono text-[9px] tracking-wide">
          SERVICES
        </text>
        <text x="100" y="60" textAnchor="middle" className="fill-textlight font-mono text-[10px] tracking-wide">
          1 ENGINEER
        </text>
      </svg>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about-detail"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-core py-24"
    >
      <div className="absolute inset-0 bg-circuit" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-reactor/5 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <span className="block text-center font-mono text-xs text-reactor mb-3">~/about $ cat profile.md</span>

        <h2 className="text-4xl font-bold mb-8 text-textlight text-center">
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
            className="rounded-xl border border-line bg-surface/60 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-reactor shadow-reactor-sm" />
              <h3 className="font-mono text-sm text-reactor tracking-wide">platform_engineering.tf</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {platformSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-line text-sm text-textlight/90 hover:border-reactor hover:text-reactor transition font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* backend + reliability side */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-xl border border-line bg-surface/60 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-amber shadow-[0_0_12px_rgba(245,185,66,0.5)]" />
              <h3 className="font-mono text-sm text-amber tracking-wide">backend_and_reliability.go</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-line text-sm text-textlight/90 hover:border-amber hover:text-amber transition font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* principles -> resolves into the running status, one continuous log */}
        <div className="max-w-2xl mx-auto rounded-xl border border-line bg-surface2/80 backdrop-blur-sm overflow-hidden">
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
                <span className="text-reactor">[x]</span> {p}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: principles.length * 0.12 + 0.2 }}
              className="mt-3 pt-3 border-t border-dashed border-line"
            >
              <p><span className="text-reactor">NAME</span>&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;RESTARTS&nbsp;&nbsp;ROLE</p>
              <p>ajeet-kumar&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-reactor">Running</span>&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Platform + Backend</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
