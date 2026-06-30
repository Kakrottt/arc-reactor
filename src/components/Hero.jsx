import { motion } from 'framer-motion'
import { useMemo } from 'react'

import {
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiNginx
} from 'react-icons/si'

import { FaAws } from 'react-icons/fa'
import ArcReactorCore from './ArcReactorCore'
import TypedLine from './TypedLine'

const ORBIT_DURATION = 30

const metrics = [
  { label: 'uptime', value: '99.98%' },
  { label: 'infra deployed', value: '120+' },
  { label: 'pipelines shipped', value: '300+' },
  { label: 'years in prod', value: '3+' }
]

export default function Hero() {

  const iconsList = [
    SiKubernetes,
    SiDocker,
    SiTerraform,
    FaAws,
    SiPrometheus,
    SiGrafana,
    SiGithubactions,
    SiGit,
    SiLinux,
    SiNginx
  ]

  const icons = useMemo(() => {
    const radius = 170
    return iconsList.map((Icon, i) => {
      const angle = (360 / iconsList.length) * i
      const rad = (angle * Math.PI) / 180
      return {
        Icon,
        x: Math.cos(rad) * radius,
        y: Math.sin(rad) * radius
      }
    })
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-core pt-28 pb-16"
    >
      {/* circuit grid + glow orbs */}
      <div className="absolute inset-0 bg-circuit" />
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-reactor/10 blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-reactor/10 blur-[100px]" />
      <div className="absolute inset-0 bg-scanlines pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left flex flex-col items-start"
        >
          <span className="font-mono text-xs text-reactor border border-reactor/40 rounded-full px-3 py-1 mb-6 bg-reactor/5">
            status: online · core stable
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold mb-3 text-textlight tracking-tight">
            Ajeet Kumar
          </h1>

          <h2 className="text-base sm:text-xl text-reactor font-mono mb-6">
            Software Engineer · DevOps Engineer
          </h2>

          <TypedLine
            prompt="$"
            text="provisioning infrastructure, shipping pipelines, designing the interface in between."
            className="text-muted text-sm sm:text-base mb-10 max-w-md min-h-[3.5rem]"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 rounded-full bg-reactor text-core font-semibold shadow-reactor-sm hover:shadow-reactor transition"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://docs.google.com/document/d/1KXw_-g6hVBGlIiwg7IuGjCZP_UBYWF2U/edit?usp=sharing&ouid=109446728526691684170&rtpof=true&sd=true"
              className="px-6 py-3 rounded-full border border-reactor/50 text-reactor font-mono hover:bg-reactor/10 transition"
            >
              ./download_resume
            </motion.a>
          </div>

          {/* tech badges */}
          <div className="flex flex-wrap gap-2 mb-12">
            {['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus', 'Python', 'Node'].map(
              (tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-full border border-line text-muted hover:border-reactor hover:text-reactor transition"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* metrics dashboard strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-line bg-surface/60 backdrop-blur-sm px-3 py-3 text-left"
              >
                <div className="text-reactor font-mono text-lg font-semibold">{m.value}</div>
                <div className="text-muted text-[11px] font-mono uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* right: arc reactor with orbiting devops icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center h-[420px]"
        >
          <ArcReactorCore size={220} />

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
          >
            {icons.map(({ Icon, x, y }, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-line text-reactor text-lg shadow-reactor-sm"
                style={{ x: x - 20, y: y - 20 }}
                animate={{ rotate: -360 }}
                transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
