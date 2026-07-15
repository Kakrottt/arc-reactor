import { useState } from "react"

export default function Resume() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-ink"
    >
      {/* blueprint backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <span className="block font-mono text-xs text-cyan mb-3">~/resume $ cat ajeet_kumar.pdf</span>

        {/* Title */}
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-paper uppercase tracking-wide">
          Resume
        </h2>

        {/* Accent Divider */}
        <div className="w-24 h-1 bg-cyan mx-auto mb-10 rounded shadow-glow-sm"></div>

        {/* Download Button */}
        <a
          href="https://docs.google.com/document/d/1KXw_-g6hVBGlIiwg7IuGjCZP_UBYWF2U/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan text-ink px-6 py-3 rounded-md font-semibold shadow-glow-sm hover:shadow-glow transition"
        >
          Download Resume
        </a>

        {/* Toggle Resume */}
        <div className="mt-10">
          <button
            onClick={() => setOpen(!open)}
            className="text-cyan hover:text-cyanglow transition font-mono text-sm"
          >
            {open ? "$ close --details" : "$ show --details"}
          </button>

          {open && (
            <div className="mt-6 text-left bg-surface/60 backdrop-blur-md p-6 rounded-md border border-line text-muted leading-relaxed">
              Software Engineer at DevSecCops.ai. AWS Certified
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
