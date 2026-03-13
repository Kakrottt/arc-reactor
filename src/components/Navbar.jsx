import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a5c3f] text-textlight shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-semibold tracking-wide"
        >
          Ajeet Kumar
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          <a href="#about" className="hover:text-accent transition">
            About
          </a>

          <a href="#projects" className="hover:text-accent transition">
            Projects
          </a>

          <a href="#resume" className="hover:text-accent transition">
            Resume
          </a>

          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>

        </div>

        {/* CTA */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 text-sm"
        >
          View Work
        </motion.a>

      </div>
    </nav>
  )
}