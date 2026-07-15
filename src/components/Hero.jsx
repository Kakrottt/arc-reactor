import { motion } from 'framer-motion'
import MatrixRain from './MatrixRain'
import SchematicDiagram from './SchematicDiagram'
import TypedLine from './TypedLine'

const metrics = [
  { label: 'uptime', value: '99.98%' },
  { label: 'infra deployed', value: '120+' },
  { label: 'pipelines shipped', value: '300+' },
  { label: 'years in prod', value: '3+' }
]

const stack = ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus', 'Python', 'Node']

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-ink pt-28 pb-16"
    >
      <div className="absolute inset-0">
        <MatrixRain />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-40% via-ink/85 via-75% to-ink/55 lg:from-15% lg:via-ink/55 lg:via-45% lg:to-transparent" />
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-cyan/10 blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-cyan/10 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left flex flex-col items-start"
        >
          <span className="font-mono text-xs text-cyan border border-cyan/40 rounded-md px-3 py-1 mb-6 bg-cyan/5">
            rev. A · systems online
          </span>

          <h1 className="font-display text-5xl sm:text-6xl font-semibold mb-3 text-paper tracking-tight">
            Ajeet Kumar
          </h1>

          <h2 className="text-base sm:text-xl text-cyan font-mono mb-6">
            Software Engineer · DevOps Engineer
          </h2>

          <TypedLine
            prompt="$"
            text="provisioning infrastructure, shipping pipelines, architecting the backend systems that run on them."
            className="text-muted text-sm sm:text-base mb-10 max-w-md min-h-[3.5rem]"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-6 py-3 rounded-md bg-cyan text-ink font-semibold shadow-glow-sm hover:shadow-glow transition"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://docs.google.com/document/d/1KXw_-g6hVBGlIiwg7IuGjCZP_UBYWF2U/edit?usp=sharing&ouid=109446728526691684170&rtpof=true&sd=true"
              className="px-6 py-3 rounded-md border border-cyan/50 text-cyan font-mono hover:bg-cyan/10 transition"
            >
              ./download_resume
            </motion.a>
          </div>

          {/* tech badges */}
          <div className="flex flex-wrap gap-2 mb-12">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 rounded-md border border-line text-muted hover:border-cyan hover:text-cyan transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* metrics dashboard strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-md border border-line bg-surface/60 backdrop-blur-sm px-3 py-3 text-left"
              >
                <div className="text-cyan font-mono text-lg font-semibold">{m.value}</div>
                <div className="text-muted text-[11px] font-mono uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* right: the request path, drawn as a schematic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex flex-col items-center justify-center gap-3"
        >
          <div className="w-full rounded-md border border-line bg-surface/50 backdrop-blur-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] text-muted tracking-wide">fig. 01 — request path</span>
              <span className="font-mono text-[11px] text-cyan">live</span>
            </div>
            <SchematicDiagram />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
