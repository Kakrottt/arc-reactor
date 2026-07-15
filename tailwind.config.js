export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // cyanotype blueprint palette — a print engineers actually make,
        // not a sci-fi prop. two accents carry the "platform / services,
        // one engineer" duality that runs through the copy.
        ink: "#0b1f3a",
        surface: "#12294d",
        surface2: "#17325c",
        line: "#2c4770",
        paper: "#eef3fa",
        muted: "#92a7c9",
        cyan: "#6fd6ff",
        cyanglow: "#b9ecff",
        amber: "#f0a94e"
      },
      fontFamily: {
        display: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        sans: ["'IBM Plex Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(111, 214, 255, 0.3)",
        "glow-sm": "0 0 16px rgba(111, 214, 255, 0.22)",
        "glow-amber": "0 0 16px rgba(240, 169, 78, 0.25)"
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 }
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        blink: "blink 1s step-start infinite",
        drift: "drift 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
}