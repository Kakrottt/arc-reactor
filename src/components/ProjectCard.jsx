import { motion } from "framer-motion"
import {
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiNginx,
  SiPython,
  SiGo,
  SiGithub,
  SiHelm,
  SiArgo,
  SiRedis
} from "react-icons/si"

import { FaAws } from 'react-icons/fa'

// Map tech name -> icon
const techIcons = {
  Kubernetes: SiKubernetes,
  Docker: SiDocker,
  Terraform: SiTerraform,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  GitHubActions: SiGithubactions,
  Git: SiGit,
  Linux: SiLinux,
  Nginx: SiNginx,
  Python: SiPython,
  Go: SiGo,
  AWS: FaAws,
  Helm: SiHelm,
  ArgoCD: SiArgo,
  Redis: SiRedis
}

const statusStyles = {
  deployed: {
    label: "deployed",
    text: "text-cyan",
    border: "border-cyan/30",
    bg: "bg-cyan/5",
    dot: "bg-cyan",
    ping: true,
  },
  active: {
    label: "in progress",
    text: "text-rose",
    border: "border-rose/30",
    bg: "bg-rose/5",
    dot: "bg-rose",
    ping: true,
  },
  experimental: {
    label: "experimental",
    text: "text-muted",
    border: "border-line",
    bg: "bg-surface2/50",
    dot: "bg-muted",
    ping: false,
  },
}

export default function ProjectCard({ project }) {
  const status = statusStyles[project.status] ?? statusStyles.deployed

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-md border border-line bg-surface/70 backdrop-blur-md overflow-hidden hover:border-cyan/50 hover:shadow-glow-sm transition-all"
    >
      {/* editor title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-surface2/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 font-mono text-xs text-muted truncate max-w-[12rem]">
            {project.name.toLowerCase().replace(/\s+/g, "-")}.yaml
          </span>
        </div>
        <span
          className={`flex items-center gap-1.5 font-mono text-[10px] ${status.text} border ${status.border} rounded-md px-2 py-0.5 ${status.bg} shrink-0`}
        >
          <span className="relative flex h-1.5 w-1.5">
            {status.ping && (
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.dot} opacity-75`} />
            )}
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${status.dot}`} />
          </span>
          {status.label}
        </span>
      </div>

      <div className="p-6">
        {/* Project Name */}
        <h3 className="text-xl font-semibold mb-3 text-paper">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-muted mb-5 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-md border border-line text-muted font-mono group-hover:border-cyan/30 transition"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          {/* Github */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-cyan hover:text-cyanglow transition flex items-center gap-2 font-mono"
          >
            <SiGithub size={16} />
            view_source()
          </a>

          {/* DevOps Icons */}
          <div className="flex gap-2.5 text-muted text-base">
            {project.tech.slice(0, 4).map((tech) => {
              const Icon = techIcons[tech]
              return Icon ? <Icon key={tech} /> : null
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
