import { useEffect, useState } from "react"

export default function TypedLine({ prompt = "$", text, speed = 35, className = "" }) {
  const [shown, setShown] = useState("")

  useEffect(() => {
    setShown("")
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <p className={`font-mono ${className}`}>
      <span className="text-reactor mr-2">{prompt}</span>
      <span>{shown}</span>
      <span className="terminal-cursor" />
    </p>
  )
}
