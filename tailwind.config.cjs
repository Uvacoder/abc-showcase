const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono]
      },
      keyframes: {
        beat: {
          to: { transform: "scale(1.1)" }
        }
      },
      animation: {
        beat: "beat 1s ease-in-out infinite"
      }
    },
    screens: {
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" }
    }
  },
  plugins: []
}
