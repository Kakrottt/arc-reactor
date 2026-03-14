import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-24"
    >
      {/* Background gradient */}
      <div
        // className="absolute inset-0 bg-gradient-to-br from-[#f5f5f3] via-[#cde6f3] to-[#cde6f6]"
        className="absolute inset-0 bg-gradient-to-br from-[#f5f5f3] via-[#eef4f7] to-[#cde6f6]"
      // className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#f1efec_0%,#cde6f6_45%,#cde6f6_75%,#bcc3cd_100%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-2 text-[#1a1a1a]">
          Projects
        </h2>

        {/* Accent Divider */}
        <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded"></div>

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