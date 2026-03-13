import { useState } from "react"

export default function Resume() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f3] via-[#cde6f3] to-[#cde6f6]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]">
          Resume
        </h2>

        {/* Accent Divider */}
        <div className="w-24 h-1 bg-accent mx-auto mb-10 rounded"></div>

        {/* Download Button */}
        <a
          href="https://docs.google.com/document/d/1KXw_-g6hVBGlIiwg7IuGjCZP_UBYWF2U/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primarygreen text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-primary transition"
        >
          Download Resume
        </a>

        {/* Toggle Resume */}
        <div className="mt-10">
          <button
            onClick={() => setOpen(!open)}
            className="text-primarygreen hover:text-accent transition font-medium"
          >
            {open ? "Hide Resume Details" : "Show Resume Details"}
          </button>

          {open && (
            <div className="mt-6 text-left bg-white/25 backdrop-blur-md p-6 rounded-xl border border-gray-300 text-gray-800 leading-relaxed">
              Senior Software Engineer at DevSecCops.ai. AWS Certified
              Solutions Architect – Professional with experience building
              Infrastructure-as-Code platforms, automated CI/CD systems,
              Kubernetes infrastructure and cloud automation.
            </div>
          )}
        </div>

      </div>
    </section>
  )
}