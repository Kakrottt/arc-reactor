import { motion } from "framer-motion"

const skills = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "CI/CD",
  "ArgoCD",
  "Prometheus",
  "Grafana",
  "Node.js",
  "React",
  "Go",
  "Python",
]

export default function About() {
  return (
    <section
      // id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* same gradient as hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f3] via-[#cde6f3] to-[#cde6f6]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]">
          About Me
        </h2>

        <div className="w-24 h-1 bg-accent mx-auto mb-10 rounded"></div>

        <p className="text-gray-800 max-w-2xl mx-auto mb-12 leading-relaxed">
          I’m a DevOps-focused Senior Software Engineer specializing in building
          scalable cloud infrastructure, Kubernetes platforms and automated
          CI/CD systems that enable engineering teams to ship faster and more
          reliably.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 rounded-full border border-gray-500 text-sm text-gray-800 bg-white/20 backdrop-blur-sm hover:border-accent hover:text-accent transition hover:bg-sky-400/10"
            >
              {skill}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  )
}