import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LogoMark from "./LogoMark"

// Sections the sheet reports on, in document order. Hero carries its own
// static readout, so the HUD only takes over once it's scrolled out of view.
const CHANNELS = [
  { id: "about", label: "SHEET 01 — CORE", hideHud: true },
  { id: "about-detail", label: "SHEET 02 — PROFILE", },
  { id: "projects", label: "SHEET 03 — BUILDS" },
  { id: "contact", label: "SHEET 04 — CONTACT" },
]

export default function SystemStatus() {
  const [activeId, setActiveId] = useState(CHANNELS[0].id)

  useEffect(() => {
    const elements = CHANNELS
      .map((c) => ({ ...c, el: document.getElementById(c.id) }))
      .filter((c) => c.el)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { threshold: 0.4 }
    )

    elements.forEach(({ el }) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const active = CHANNELS.find((c) => c.id === activeId) ?? CHANNELS[0]

  return (
    <AnimatePresence>
      {!active.hideHud && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3 rounded-md border border-line bg-surface/80 backdrop-blur-md pl-2 pr-4 py-2 shadow-glow-sm"
        >
          <LogoMark size={22} />
          <AnimatePresence mode="wait">
            <motion.span
              key={active.label}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-[11px] tracking-wide text-cyan"
            >
              {active.label}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
