import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="flex justify-center gap-10 text-3xl">
        <a href="https://github.com/Kakrottt">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ajeet1270">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/kakrottt">
          <FaInstagram />
        </a>
      </div>
      <p className="mt-6 text-gray-400">ajeet1270@gmail.com</p>
    </section>
  )
}
