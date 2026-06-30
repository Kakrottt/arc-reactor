import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const links = [
  { Icon: FaGithub, href: "https://github.com/Kakrottt", label: "github" },
  { Icon: FaLinkedin, href: "https://linkedin.com/in/ajeet1270", label: "linkedin" },
  { Icon: FaInstagram, href: "https://instagram.com/kakrottt", label: "instagram" }
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 text-center bg-core overflow-hidden"
    >
      <div className="absolute inset-0 bg-circuit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full bg-reactor/10 blur-[110px]" />

      <div className="relative z-10">
        <span className="block font-mono text-xs text-reactor mb-3">~/contact $ ping ajeet</span>

        <h2 className="text-3xl font-bold mb-2 text-textlight">Let's Build Something</h2>
        <p className="text-muted font-mono text-sm mb-8">response_time: usually &lt; 24h</p>

        <div className="flex justify-center gap-8 text-3xl text-muted mb-6">
          {links.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-reactor transition"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <a
          href="mailto:ajeet1270@gmail.com"
          className="font-mono text-sm text-muted hover:text-reactor transition"
        >
          ajeet1270@gmail.com
        </a>
      </div>
    </section>
  )
}
