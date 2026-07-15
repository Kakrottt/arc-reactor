import { useEffect, useRef } from "react"

const CHARS = "01"
const FONT_SIZE = 15
const TICK_MS = 55

// Digital rain, cyanotype-toned instead of green — the schematic's data
// made visible. Off entirely under prefers-reduced-motion.
export default function MatrixRain({ className = "" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let width, height, drops, interval

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      const columns = Math.max(1, Math.floor(width / FONT_SIZE))
      drops = Array.from({ length: columns }, () => Math.random() * -(height / FONT_SIZE))
    }

    function draw() {
      ctx.fillStyle = "rgba(5, 9, 15, 0.14)"
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`
      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillStyle = Math.random() > 0.85 ? "rgba(234, 246, 255, 0.9)" : "rgba(90, 209, 255, 0.6)"
        ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE)

        if (drops[i] * FONT_SIZE > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 1
      }
    }

    resize()
    interval = setInterval(draw, TICK_MS)
    window.addEventListener("resize", resize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} aria-hidden="true" />
}
