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
        },
        appear: {
          "0%": {
            transform: "translateY(50%)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1
          }
        }
      },
      animation: {
        beat: "beat 1s ease-in-out infinite",
        "appear-250": "appear 1000ms 250ms both",
        "appear-500": "appear 1000ms 500ms both"
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
