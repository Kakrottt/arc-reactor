import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const counts = projects.reduce((acc, p) => {
    acc[p.status] = (acc[p.status] ?? 0) + 1
    return acc
  }, {})

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 md:px-24 bg-core"
    >
      {/* circuit backdrop */}
      <div className="absolute inset-0 bg-circuit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-reactor/5 blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Title */}
        <span className="block text-center font-mono text-xs text-reactor mb-3">~/projects $ ls -la</span>

        <h2 className="text-4xl font-bold text-center mb-3 text-textlight">
          Things I've Shipped
        </h2>

        {/* readout instead of a plain divider — pays off the ls -la above */}
        <p className="text-center font-mono text-xs text-muted mb-12">
          total {projects.length}
          <span className="text-reactor"> · {counts.deployed ?? 0} deployed</span>
          <span className="text-amber"> · {counts.active ?? 0} in progress</span>
          {counts.experimental ? <span className="text-muted"> · {counts.experimental} experimental</span> : null}
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

      </div>
    </section>
  )
}
