import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import ArcReactorCore from "./ArcReactorCore"

const links = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "resume", href: "https://docs.google.com/document/d/1KXw_-g6hVBGlIiwg7IuGjCZP_UBYWF2U/edit?usp=sharing", external: true },
  { label: "contact", href: "#contact" }
]

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 text-textlight transition-all duration-300 border-b ${scrolled
          ? "bg-[#05080a]/90 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 font-mono text-sm tracking-wide"
        >
          <ArcReactorCore size={28} />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-semibold text-textlight">ajeet@kumar</span>
            <span className="text-muted text-[11px]">~/devops-and-design</span>
          </span>
        </motion.a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7 font-mono text-sm text-muted">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="hover:text-reactor transition flex items-baseline gap-0.5"
            >
              <span className="text-reactor/60">/</span>{l.label}
            </a>
          ))}
        </div>

        {/* status + CTA */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:flex items-center gap-2 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-reactor opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-reactor" />
            </span>
            open to work
          </span>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-4 py-1.5 rounded-full border border-reactor/60 text-reactor text-sm font-mono hover:bg-reactor/10 hover:shadow-reactor-sm transition"
          >
            view_work()
          </motion.a>
        </div>

      </div>
    </nav>
  )
}
