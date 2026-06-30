import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
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

        <h2 className="text-4xl font-bold text-center mb-2 text-textlight">
          Things I've Shipped
        </h2>

        {/* Accent Divider */}
        <div className="w-24 h-1 bg-reactor mx-auto mb-12 rounded shadow-reactor-sm"></div>

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
