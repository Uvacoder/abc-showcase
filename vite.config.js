import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import { resolve } from "path"

export default defineConfig({
  base: "/freecodecamp-showcase/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src")
    }
  }
})
