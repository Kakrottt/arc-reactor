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
    return iconsList.map((Icon) => ({
      Icon,
      x: Math.random() * 1200 - 600,
      y: Math.random() * 600 - 300,
      duration: 6 + Math.random() * 6
    }))
  }, [])

  return (
    <section id='about' className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-[#f5f5f3]">

      {/* subtle sky blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f3] via-[#eef4f7] to-[#cde6f6]" />

      {/* floating devops icons */}
      {icons.map(({ Icon, x, y, duration }, i) => (
        <motion.div
          key={i}
          // className="absolute text-4xl text-[#3ea67a]/30"
          className="absolute text-4xl text-[#3ea67a]/40"
          style={{ left: '50%', top: '50%' }}
          initial={{ x, y }}
          animate={{ y: [y, y - 25, y] }}
          transition={{ duration, repeat: Infinity }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >

        <h1 className="text-6xl font-bold mb-4 text-[#1a1a1a]">
          Ajeet Kumar
        </h1>

        <h2 className="text-xl text-gray-600 mb-6">
          Senior Software Engineer | DevOps Engineer
        </h2>

        <p className="max-w-xl mx-auto text-gray-500 mb-10">
          Building scalable cloud infrastructure, Kubernetes platforms and
          automated DevOps systems for modern engineering teams.
        </p>

        <div className="flex justify-center gap-6">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#0a5c3f] text-white font-medium shadow-md hover:bg-[#0e734f]"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/document/d/1KXw_-g6hVBGlIiwg7IuGjCZP_UBYWF2U/edit?usp=sharing&ouid=109446728526691684170&rtpof=true&sd=true"
            className="px-6 py-3 rounded-full border border-[#0a5c3f] text-[#0a5c3f] hover:bg-[#0a5c3f]/10"
          >
            Download Resume
          </motion.a>

        </div>

        {/* tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 text-sm">
          {['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus', 'Python', 'Node'].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-[#0a5c3f] text-[#0a5c3f]"
              >
                {tech}
              </span>
            )
          )}
        </div>

      </motion.div>

    </section>
  )
}