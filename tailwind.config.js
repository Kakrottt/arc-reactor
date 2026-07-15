export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // stark-industries HUD palette — a holographic wireframe over true
        // black, not a navy print. cyan is the dominant structural ink;
        // rose is the sparse joint-highlight accent, used the way the
        // reference schematic uses it: rarely, on mechanical detail only.
        ink: "#0a1420",
        surface: "#0e1c2e",
        surface2: "#122336",
        line: "#1c3550",
        paper: "#eaf6ff",
        muted: "#7c93a8",
        cyan: "#5ad1ff",
        cyanglow: "#a9ecff",
        rose: "#ff4d6d"
      },
      fontFamily: {
        display: ["'Orbitron'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'IBM Plex Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 44px rgba(90, 209, 255, 0.35)",
        "glow-sm": "0 0 16px rgba(90, 209, 255, 0.25)",
        "glow-rose": "0 0 16px rgba(255, 77, 109, 0.3)"
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 }
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "pulse-core": {
          "0%, 100%": { opacity: 0.85, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.06)" }
        }
      },
      animation: {
        blink: "blink 1s step-start infinite",
        drift: "drift 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "pulse-core": "pulse-core 3.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
}