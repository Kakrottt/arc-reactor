import { useState } from "react"

export default function Resume() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-core"
    >
      {/* circuit backdrop */}
      <div className="absolute inset-0 bg-circuit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-reactor/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <span className="block font-mono text-xs text-reactor mb-3">~/resume $ cat ajeet_kumar.pdf</span>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-textlight">
          Resume
        </h2>

        {/* Accent Divider */}
        <div className="w-24 h-1 bg-reactor mx-auto mb-10 rounded shadow-reactor-sm"></div>

        {/* Download Button */}
        <a
          href="https://docs.google.com/document/d/1KXw_-g6hVBGlIiwg7IuGjCZP_UBYWF2U/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-reactor text-core px-6 py-3 rounded-full font-semibold shadow-reactor-sm hover:shadow-reactor transition"
        >
          Download Resume
        </a>

        {/* Toggle Resume */}
        <div className="mt-10">
          <button
            onClick={() => setOpen(!open)}
            className="text-reactor hover:text-reactorglow transition font-mono text-sm"
          >
            {open ? "$ close --details" : "$ show --details"}
          </button>

          {open && (
            <div className="mt-6 text-left bg-surface/60 backdrop-blur-md p-6 rounded-xl border border-line text-muted leading-relaxed">
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
