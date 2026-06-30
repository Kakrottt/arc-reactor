export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006039",
        background: "#05080a",
        accent: "#c6a95c",
        textlight: "#f5f5f3",
        muted: "#9ca3af",
        color1: "#cde6f3",
        color2: "#cde6f6",
        primarygreen: "#0a5c3f",
        // arc reactor palette
        reactor: "#37e6e0",
        reactorglow: "#6ff9f0",
        core: "#0a0f12",
        surface: "#0c1416",
        surface2: "#101b1e",
        line: "#1c2b2e",
        amber: "#f5b942"
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        reactor: "0 0 40px rgba(55, 230, 224, 0.35)",
        "reactor-sm": "0 0 16px rgba(55, 230, 224, 0.25)"
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" }
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.06)" }
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 }
        }
      },
      animation: {
        "spin-slow": "spin-slow 12s linear infinite",
        "spin-slower": "spin-slow 22s linear infinite",
        "spin-reverse": "spin-reverse 16s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        blink: "blink 1s step-start infinite"
      }
    }
  },
  plugins: []
}