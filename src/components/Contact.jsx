import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      // className="py-10 text-center bg-gradient-to-r from-[#ff0000] to-[#OC4129]"
      className="py-10 text-center bg-gradient-to-br from-[#0C4129] via-[#176A44] to-[#186E47]"
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="flex justify-center gap-10 text-3xl text-accent">
        <a
          href="https://github.com/Kakrottt"
          className="hover:scale-110 hover:text-yellow-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/ajeet1270"
          className="hover:scale-110 hover:text-yellow-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/kakrottt"
          className="hover:scale-110 hover:text-yellow-500 transition"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="mt-6 text-gray-200">ajeet1270@gmail.com</p>
    </section>
  )
}