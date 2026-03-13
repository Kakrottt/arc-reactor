import { motion } from "framer-motion"

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="bg-white/25 backdrop-blur-md p-6 rounded-xl border border-green-800/50 shadow-sm hover:shadow-xl transition"
    >
      {/* Project Name */}
      <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-gray-700 mb-5 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full border border-green-800 text-green-800 bg-white/30 backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Github */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-green-700 hover:text-accent transition"
      >
        View Github →
      </a>
    </motion.div>
  )
}