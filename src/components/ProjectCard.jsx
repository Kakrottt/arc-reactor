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

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-xl border border-line bg-surface/70 backdrop-blur-md overflow-hidden hover:border-reactor/50 hover:shadow-reactor-sm transition-all"
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
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-reactor border border-reactor/30 rounded-full px-2 py-0.5 bg-reactor/5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-reactor" />
          deployed
        </span>
      </div>

      <div className="p-6">
        {/* Project Name */}
        <h3 className="text-xl font-semibold mb-3 text-textlight">
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
              className="text-xs px-3 py-1 rounded-full border border-line text-muted font-mono group-hover:border-reactor/30 transition"
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
            className="text-sm font-medium text-reactor hover:text-reactorglow transition flex items-center gap-2 font-mono"
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
