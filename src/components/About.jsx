import { motion } from "framer-motion"

const buildSkills = ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "ArgoCD", "Prometheus", "Grafana"]
const designSkills = ["React", "Tailwind", "Figma", "Framer Motion", "Design Systems", "Accessibility", "Node.js", "Go"]

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

        <h2 className="text-4xl font-bold mb-6 text-textlight text-center">
          One brain, two compilers
        </h2>

        <div className="w-24 h-1 bg-reactor mx-auto mb-10 rounded shadow-reactor-sm"></div>

        <p className="text-muted max-w-2xl mx-auto mb-14 leading-relaxed text-center">
          I spend half my time keeping infrastructure honest — Kubernetes,
          Terraform, pipelines that don't page anyone at 3am — and the other
          half making sure the things I ship don't look like they were built
          by someone who only talks to a terminal.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-14">

          {/* devops side */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-xl border border-line bg-surface/60 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-reactor shadow-reactor-sm" />
              <h3 className="font-mono text-sm text-reactor tracking-wide">how_i_build.sh</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {buildSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-line text-sm text-textlight/90 hover:border-reactor hover:text-reactor transition font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* design side */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-xl border border-line bg-surface/60 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-amber shadow-[0_0_12px_rgba(245,185,66,0.5)]" />
              <h3 className="font-mono text-sm text-amber tracking-wide">how_i_design.tsx</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill) => (
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

        {/* terminal output block */}
        <div className="max-w-2xl mx-auto rounded-xl border border-line bg-surface2/80 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface/60">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-xs text-muted">kubectl get engineer -o wide</span>
          </div>
          <div className="p-4 font-mono text-xs sm:text-sm text-left text-muted leading-relaxed">
            <p><span className="text-reactor">NAME</span>&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;RESTARTS&nbsp;&nbsp;ROLE</p>
            <p>ajeet-kumar&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-reactor">Running</span>&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SDE + DevOps</p>
          </div>
        </div>

      </div>
    </section>
  )
}
